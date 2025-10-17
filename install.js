#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { select, intro, outro, isCancel, cancel } = require('@clack/prompts');

// Main installation function
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

// Load intelligence module by filename
async function loadIntelligenceModule(filename) {
  const modulePath = path.join(__dirname, 'guideline', 'core', filename);

  if (await fs.pathExists(modulePath)) {
    const content = await fs.readFile(modulePath, 'utf-8');
    // Remove the title line and return the content
    return content.replace(/^# .*\n+/m, '').trim();
  }

  throw new Error(`${filename} not found - required for Guild system`);
}

// Simple agent inventory generation
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
    const { glob } = require('glob');
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

// Copy template and embed intelligence
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
  console.log(`✅ ${commandType} command generated with ${intelligenceModules.agentInventory ? 'agent inventory' : 'no inventory'}`);
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
  generateAgentInventory
};