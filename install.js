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

    // Generate and copy commands with intelligence embedding
    await copyAndEmbedCommand('workflow', guildDir, {
      sharedIntelligence,
      agentInventory
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

    // Install shipped skills library
    await installShippedSkills(options.targetDir);

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
 * Copy template and embed intelligence
 *
 * Reads command template, replaces placeholders with embedded intelligence
 * and agent inventory, then writes to output directory.
 *
 * @async
 * @param {string} commandType - Type of command ('workflow' or 'setup')
 * @param {string} outputDir - Directory to write generated command
 * @param {Object} intelligenceModules - Intelligence to embed
 * @param {string} intelligenceModules.sharedIntelligence - Core intelligence content
 * @param {Object} [intelligenceModules.agentInventory] - Optional agent inventory
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

  // Write the embedded command
  await fs.writeFile(path.join(outputDir, `${commandType}.md`), template);

  const inventoryMsg = intelligenceModules.agentInventory ? 'agent inventory' : 'no inventory';

  console.log(`✅ ${commandType} command generated with ${inventoryMsg}`);
}

/**
 * Install Guild's shipped skills library
 * Copies pre-built skills and fixes existing incorrect skill structures
 */
async function installShippedSkills(targetDir) {
  const guildSkillsDir = path.join(targetDir, '.claude', 'skills');

  try {
    console.log('📚 Installing Guild shipped skills library...');

    // Copy shipped skills from guideline/shipped-skills/
    const shippedSkillsDir = path.join(__dirname, 'guideline', 'shipped-skills');

    if (await fs.pathExists(shippedSkillsDir)) {
      await fs.copy(shippedSkillsDir, guildSkillsDir);
      console.log('✅ Shipped skills library installed');
    } else {
      console.log('⚠️  Shipped skills directory not found, skipping...');
    }

    // Fix existing incorrect skill structure
    await fixExistingSkillStructure(guildSkillsDir);
    await fixDirectSkillFiles(guildSkillsDir);

    // Validate installed skills structure
    await validateSkillStructure(guildSkillsDir);

    console.log('✅ Guild skills installation completed');
  } catch (error) {
    console.log('⚠️  Could not install shipped skills:', error.message);
  }
}

/**
 * Fix existing incorrect skill structures
 * Converts malformed -SKILL.md files to proper directory structure
 */
async function fixExistingSkillStructure(guildSkillsDir) {
  try {
    console.log('🔧 Fixing existing skill structures...');

    const categories = await fs.readdir(guildSkillsDir);
    let fixedCount = 0;

    for (const category of categories) {
      const categoryPath = path.join(guildSkillsDir, category);
      const stat = await fs.stat(categoryPath);

      if (stat.isDirectory()) {
        const files = await fs.readdir(categoryPath);

        for (const file of files) {
          // Look for malformed -SKILL.md files
          if (file.endsWith('-SKILL.md')) {
            // Extract skill name
            const skillName = file.replace('-SKILL.md', '');
            const skillDir = path.join(categoryPath, skillName);
            const oldFile = path.join(categoryPath, file);
            const newFile = path.join(skillDir, 'SKILL.md');

            // Create proper directory structure
            await fs.ensureDir(skillDir);

            // Move file to correct location
            await fs.move(oldFile, newFile);

            fixedCount++;
            console.log(`  📁 Fixed: ${file} → ${skillName}/SKILL.md`);
          }
        }
      }
    }

    if (fixedCount > 0) {
      console.log(`✅ Fixed ${fixedCount} malformed skill structures`);
    } else {
      console.log('✅ No malformed skill structures found');
    }
  } catch (error) {
    console.log('⚠️  Could not fix skill structures:', error.message);
  }
}

/**
 * Validate that skills follow proper Claude Code format
 */
async function validateSkillStructure(guildSkillsDir) {
  try {
    console.log('🔍 Validating skill structure...');

    const categories = await fs.readdir(guildSkillsDir);
    let validCount = 0;

    for (const category of categories) {
      const categoryPath = path.join(guildSkillsDir, category);
      const stat = await fs.stat(categoryPath);

      if (stat.isDirectory()) {
        const skills = await fs.readdir(categoryPath);

        for (const skill of skills) {
          const skillPath = path.join(categoryPath, skill);
          const skillStat = await fs.stat(skillPath);

          if (skillStat.isDirectory()) {
            const skillFile = path.join(skillPath, 'SKILL.md');

            if (await fs.pathExists(skillFile)) {
              // Check for proper YAML frontmatter
              const content = await fs.readFile(skillFile, 'utf8');

              if (content.startsWith('---')) {
                validCount++;
              } else {
                console.log(`  ⚠️  Invalid format: ${category}/${skill}/SKILL.md`);
              }
            }
          }
        }
      }
    }

    console.log(`✅ Validated ${validCount} properly formatted skills`);
  } catch (error) {
    console.log('⚠️  Could not validate skill structure:', error.message);
  }
}

// Run installation
if (require.main === module) {
  install().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

/**
 * Fix direct .md skill files in category directories
 * Converts: category/skill-name.md → category/guid-skill-name/SKILL.md
 */
async function fixDirectSkillFiles(guildSkillsDir) {
  try {
    console.log('🔧 Fixing direct skill files...');
    let fixedCount = 0;

    const categories = await fs.readdir(guildSkillsDir);

    for (const category of categories) {
      const categoryPath = path.join(guildSkillsDir, category);
      const stat = await fs.stat(categoryPath);

      if (stat.isDirectory()) {
        const files = await fs.readdir(categoryPath);

        for (const file of files) {
          const filePath = path.join(categoryPath, file);
          const fileStat = await fs.stat(filePath);

          // Look for direct .md files (not directories)
          if (fileStat.isFile() && file.endsWith('.md') && file !== 'SKILL.md') {
            // Extract skill name from filename
            const skillName = file.replace('.md', '');

            // Add guid- prefix if not present
            const prefixedSkillName = skillName.startsWith('guid-') ? skillName : `guid-${skillName}`;
            const skillDir = path.join(categoryPath, prefixedSkillName);
            const newFile = path.join(skillDir, 'SKILL.md');

            // Create directory structure
            await fs.ensureDir(skillDir);

            // Read existing content
            const content = await fs.readFile(filePath, 'utf8');

            // Update YAML frontmatter if present
            let updatedContent = content;
            if (content.startsWith('---')) {
              const frontmatterEnd = content.indexOf('---', 3);
              if (frontmatterEnd !== -1) {
                const frontmatter = content.substring(3, frontmatterEnd);
                const body = content.substring(frontmatterEnd + 3);

                // Update name field if present
                const updatedFrontmatter = frontmatter.replace(
                  /^name:.*$/m,
                  `name: ${prefixedSkillName}`
                );

                updatedContent = `---${updatedFrontmatter}---${body}`;
              }
            }

            // Write to new location
            await fs.writeFile(newFile, updatedContent);

            // Remove old file
            await fs.remove(filePath);

            fixedCount++;
            console.log(`✅ Fixed: ${file} → ${prefixedSkillName}/SKILL.md`);
          }
        }
      }
    }

    if (fixedCount > 0) {
      console.log(`✅ Fixed ${fixedCount} direct skill files`);
    } else {
      console.log('✅ No direct skill files found');
    }
  } catch (error) {
    console.log('⚠️  Could not fix direct skill files:', error.message);
  }
}

module.exports = {
  install,
  generateAgentInventory
};
