#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { glob } = require('glob');
const { select, intro, outro, isCancel, cancel } = require('@clack/prompts');

/**
 * Main installation function for Guild commands
 *
 * Installs Guild commands to target directory (home or project).
 * Supports interactive/non-interactive modes and test mode validation.
 *
 * @async
 * @throws {Error} If installation fails
 * @returns {Promise<void>}
 */
async function install() {
  const args = process.argv.slice(2);

  // Simple argument parsing
  const options = {
    interactive: !args.includes('--no-interaction'),
    testMode: args.includes('--test-mode'),
    targetDir: args.includes('--path') ?
      path.resolve(args[args.indexOf('--path') + 1]) :
      require('os').homedir()
  };

  // Test mode - quick validation
  if (options.testMode) {
    console.log('🧪 Claude Guild - Test Mode');
    const valid = await fs.pathExists('guideline/core') &&
                  await fs.pathExists('guideline/templates');
    console.log(valid ? '✅ All validation checks passed' : '❌ Test failed');
    process.exit(valid ? 0 : 1);
  }

  // Interactive mode - ask where to install
  if (options.interactive) {
    intro('🏛️ Claude Guild Installation');

    const scope = await select({
      message: 'Where would you like to install?',
      options: [
        { value: 'home', label: '🏠 Home Directory (Recommended)' },
        { value: 'project', label: '📂 Current Project' },
      ]
    });

    if (isCancel(scope)) {
      cancel('Installation cancelled');
      process.exit(0);
    }

    options.targetDir = scope === 'home' ? require('os').homedir() : process.cwd();
  }

  // Set up paths
  const claudeDir = path.join(options.targetDir, '.claude');
  const commandsDir = path.join(claudeDir, 'commands');
  const guildDir = path.join(commandsDir, 'guild');

  console.log(`\n📍 Installing to: ${options.targetDir}`);

  try {
    // Clean existing installation
    if (await fs.pathExists(guildDir)) {
      console.log('🧹 Cleaning existing installation...');
      await fs.remove(guildDir);
    }

    // Remove old guild.md if exists
    const oldGuildPath = path.join(commandsDir, 'guild.md');
    if (await fs.pathExists(oldGuildPath)) {
      await fs.remove(oldGuildPath);
    }

    // Ensure directories exist
    await fs.ensureDir(guildDir);

    console.log('🏗️ Installing Guild commands...');

    // Load intelligence module
    const sharedIntelligence = await loadIntelligenceModule('shared-intelligence.md');

    // Generate agent inventory for workflow command
    const agentInventory = await generateAgentInventory(options.targetDir);

    // Generate skill inventory for workflow command
    const skillInventory = await generateSkillInventory(options.targetDir);

    // Generate and copy commands with intelligence embedding
    await copyAndEmbedCommand('workflow', guildDir, {
      sharedIntelligence,
      agentInventory,
      skillInventory
    });

    await copyAndEmbedCommand('setup', guildDir, {
      sharedIntelligence
    });

    // Create guild.md symlink to workflow
    const symlinkPath = path.join(commandsDir, 'guild.md');
    if (await fs.pathExists(symlinkPath)) {
      await fs.remove(symlinkPath);
    }
    await fs.symlink(path.join('guild', 'workflow.md'), symlinkPath);

    // Create Claude Code Skills awareness bridge
    await createAwarenessSkill(options.targetDir);

    outro(`✅ Guild commands installed successfully!

📂 Location: ${commandsDir}
🎯 Commands Available:
  • /guild "task" - Main workflow command
  • /guild:setup - Setup and project analysis command

💡 Next Steps:
  1. Run: /guild:setup to analyze your project
  2. Then use: /guild "your task" to execute work`);

  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    process.exit(1);
  }
}

/**
 * Load intelligence module by filename
 *
 * Reads core intelligence module from guideline/core/ and removes title line.
 *
 * @async
 * @param {string} filename - Module filename (e.g., 'shared-intelligence.md')
 * @returns {Promise<string>} Intelligence content without title
 * @throws {Error} If module file not found
 */
async function loadIntelligenceModule(filename) {
  const modulePath = path.join(__dirname, 'guideline', 'core', filename);

  if (await fs.pathExists(modulePath)) {
    const content = await fs.readFile(modulePath, 'utf-8');
    // Remove the title line and return the content
    return content.replace(/^# .*\n+/m, '').trim();
  }

  throw new Error(`${filename} not found - required for Guild system`);
}

/**
 * Generate agent inventory from existing Guild agents
 *
 * Scans .claude/agents/guild/ directory for agent markdown files and generates
 * inventory grouped by category (directory structure).
 *
 * @async
 * @param {string} targetDir - Directory to scan for agents
 * @returns {Promise<Object>} Inventory object with totalAgents, agentsByCategory, and scanTimestamp
 */
async function generateAgentInventory(targetDir) {
  const agentsGuildPath = path.join(targetDir, '.claude', 'agents', 'guild');

  if (!await fs.pathExists(agentsGuildPath)) {
    return {
      totalAgents: 0,
      agentsByCategory: {},
      scanTimestamp: new Date().toISOString()
    };
  }

  console.log('🔍 Scanning existing agents...');
  try {
    const agentFiles = await glob('**/*.md', { cwd: agentsGuildPath });

    const inventory = {
      totalAgents: agentFiles.length,
      agentsByCategory: {},
      scanTimestamp: new Date().toISOString()
    };

    // Group agents by directory (category)
    for (const agentFile of agentFiles) {
      const category = path.dirname(agentFile);
      if (!inventory.agentsByCategory[category]) {
        inventory.agentsByCategory[category] = [];
      }
      inventory.agentsByCategory[category].push(path.basename(agentFile, '.md'));
    }

    console.log(`✅ Found ${inventory.totalAgents} agents`);
    return inventory;
  } catch (error) {
    console.log('⚠️  Could not scan agents, using empty inventory');
    return { totalAgents: 0, agentsByCategory: {}, scanTimestamp: new Date().toISOString() };
  }
}

/**
 * Format agent inventory for embedding in command templates
 */
function formatAgentInventory(inventory) {
  if (!inventory || inventory.totalAgents === 0) {
    return 'No existing agents found. Create ephemeral specialists via Task tool as needed.';
  }

  let formatted = `### Available Guild Agents (${inventory.totalAgents} total)\n\n`;
  formatted += `*Last scanned: ${inventory.scanTimestamp}*\n\n`;

  for (const [category, agents] of Object.entries(inventory.agentsByCategory)) {
    if (agents.length > 0) {
      formatted += `**${category}**: ${agents.join(', ')}\n`;
    }
  }

  formatted += '\n';
  return formatted;
}

/**
 * Generate skill inventory from existing Guild skills
 *
 * Scans .claude/skills/guild/ directory for SKILL.md files following official
 * Claude Code skills format. Parses YAML frontmatter to extract metadata.
 *
 * @async
 * @param {string} targetDir - Directory to scan for skills
 * @returns {Promise<Object>} Inventory object with totalSkills, skillsByCategory, and scanTimestamp
 */
async function generateSkillInventory(targetDir) {
  const skillsGuildPath = path.join(targetDir, '.claude', 'skills', 'guild');

  if (!await fs.pathExists(skillsGuildPath)) {
    return {
      totalSkills: 0,
      skillsByCategory: {},
      scanTimestamp: new Date().toISOString()
    };
  }

  console.log('🔍 Scanning existing skills...');
  try {
    // Look for SKILL.md files in category directories (official format)
    const skillFiles = await glob('*/SKILL.md', { cwd: skillsGuildPath });

    const inventory = {
      totalSkills: skillFiles.length,
      skillsByCategory: {},
      scanTimestamp: new Date().toISOString()
    };

    // Group skills by directory (category)
    for (const skillFile of skillFiles) {
      const category = path.dirname(skillFile);
      if (!inventory.skillsByCategory[category]) {
        inventory.skillsByCategory[category] = [];
      }

      // Read SKILL.md to extract YAML frontmatter metadata
      const skillPath = path.join(skillsGuildPath, skillFile);
      try {
        const content = await fs.readFile(skillPath, 'utf-8');

        // Parse YAML frontmatter (official Claude Code format)
        const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
        let name = category;
        let description = null;

        if (frontmatterMatch) {
          const frontmatter = frontmatterMatch[1];
          const nameMatch = frontmatter.match(/^name:\s*(.+)$/m);
          const descMatch = frontmatter.match(/^description:\s*["'](.+?)["']$/m);

          if (nameMatch) name = nameMatch[1].trim();
          if (descMatch) description = descMatch[1].trim();
        }

        const skillInfo = {
          name,
          category,
          description,
          path: `${category}/SKILL.md`
        };

        inventory.skillsByCategory[category].push(skillInfo);
      } catch (readError) {
        // If we can't read the file, just add the category name
        inventory.skillsByCategory[category].push({
          name: category,
          category,
          description: null,
          path: skillFile
        });
      }
    }

    console.log(`✅ Found ${inventory.totalSkills} skills`);
    return inventory;
  } catch (error) {
    console.log('⚠️  Could not scan skills, using empty inventory');
    return { totalSkills: 0, skillsByCategory: {}, scanTimestamp: new Date().toISOString() };
  }
}

/**
 * Format skill inventory for embedding in command templates
 */
function formatSkillInventory(inventory) {
  if (!inventory || inventory.totalSkills === 0) {
    return 'No existing skills found. Skills can be created as needed for reusable patterns.';
  }

  let formatted = `### Available Guild Skills (${inventory.totalSkills} total)\n\n`;
  formatted += `*Last scanned: ${inventory.scanTimestamp}*\n\n`;

  for (const [category, skills] of Object.entries(inventory.skillsByCategory)) {
    if (skills.length > 0) {
      const categoryName = category === '.' ? 'General' : category;
      formatted += `**${categoryName}**:\n`;
      for (const skill of skills) {
        formatted += `  - **${skill.name}**`;
        if (skill.description) {
          formatted += `: ${skill.description}`;
        }
        formatted += '\n';
      }
      formatted += '\n';
    }
  }

  return formatted;
}

/**
 * Copy template and embed intelligence
 *
 * Reads command template, replaces placeholders with embedded intelligence,
 * agent inventory, and skill inventory, then writes to output directory.
 *
 * @async
 * @param {string} commandType - Type of command ('workflow' or 'setup')
 * @param {string} outputDir - Directory to write generated command
 * @param {Object} intelligenceModules - Intelligence to embed
 * @param {string} intelligenceModules.sharedIntelligence - Core intelligence content
 * @param {Object} [intelligenceModules.agentInventory] - Optional agent inventory
 * @param {Object} [intelligenceModules.skillInventory] - Optional skill inventory
 * @returns {Promise<void>}
 */
async function copyAndEmbedCommand(commandType, outputDir, intelligenceModules) {
  const templatePath = path.join(__dirname, 'guideline', 'templates', `${commandType}-command.md`);
  let template = await fs.readFile(templatePath, 'utf8');

  // Replace shared intelligence placeholder
  template = template.replace('{SHARED_INTELLIGENCE}', intelligenceModules.sharedIntelligence);

  // Replace agent inventory placeholder (for workflow command)
  if (intelligenceModules.agentInventory) {
    const inventorySection = formatAgentInventory(intelligenceModules.agentInventory);
    template = template.replace('{AGENT_INVENTORY}', inventorySection);
  } else {
    // Remove placeholder if no inventory
    template = template.replace('{AGENT_INVENTORY}', 'No agent inventory available.');
  }

  // Replace skill inventory placeholder (for workflow command)
  if (intelligenceModules.skillInventory) {
    const skillSection = formatSkillInventory(intelligenceModules.skillInventory);
    template = template.replace('{SKILL_INVENTORY}', skillSection);
  } else {
    // Remove placeholder if no inventory
    template = template.replace('{SKILL_INVENTORY}', 'No skill inventory available.');
  }

  // Write the embedded command
  await fs.writeFile(path.join(outputDir, `${commandType}.md`), template);

  const inventories = [];
  if (intelligenceModules.agentInventory) inventories.push('agent inventory');
  if (intelligenceModules.skillInventory) inventories.push('skill inventory');
  const inventoryMsg = inventories.length > 0 ? inventories.join(' + ') : 'no inventory';

  console.log(`✅ ${commandType} command generated with ${inventoryMsg}`);
}

/**
 * Create Claude Code Skills awareness bridge
 * Loads from external template for easier maintenance
 */
async function createAwarenessSkill(targetDir) {
  const skillsDir = path.join(targetDir, '.claude', 'skills');
  const guildPatternsDir = path.join(skillsDir, 'guild-patterns');

  // Ensure directories exist
  await fs.ensureDir(guildPatternsDir);

  // Load awareness skill from external template
  const templatePath = path.join(__dirname, 'guideline', 'templates', 'awareness-skill.md');

  try {
    // Check if template exists
    if (!await fs.pathExists(templatePath)) {
      console.log('⚠️  Awareness skill template not found, skipping...');
      return;
    }

    const awarenessSkillContent = await fs.readFile(templatePath, 'utf8');

    // Write awareness skill
    await fs.writeFile(
      path.join(guildPatternsDir, 'SKILL.md'),
      awarenessSkillContent
    );

    console.log('✅ Guild patterns awareness skill created');
  } catch (error) {
    console.log('⚠️  Could not create awareness skill:', error.message);
  }
}

// Run installation
if (require.main === module) {
  install().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = {
  install,
  generateAgentInventory,
  generateSkillInventory
};
