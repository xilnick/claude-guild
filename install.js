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
    const valid = await fs.pathExists('package.json') && 
                  await fs.pathExists('guideline/core') &&
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
    
    // Load shared intelligence and framework (simplified architecture)
    const sharedIntelligence = await loadSharedIntelligence();
    const frameworkModule = await loadFrameworkModule();
    
    // Generate and install commands (templates already contain command-specific intelligence)
    const workflowContent = await generateCommand('workflow', sharedIntelligence, frameworkModule);
    await fs.writeFile(path.join(guildDir, 'workflow.md'), workflowContent);
    
    const setupContent = await generateCommand('setup', sharedIntelligence, frameworkModule);
    await fs.writeFile(path.join(guildDir, 'setup.md'), setupContent);
    
    // Create guild.md symlink to workflow (remove existing first)
    const symlinkPath = path.join(commandsDir, 'guild.md');
    if (await fs.pathExists(symlinkPath)) {
      await fs.remove(symlinkPath);
    }
    await fs.symlink(
      path.join('guild', 'workflow.md'),
      symlinkPath
    );
    
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

// Load shared intelligence directly from shared-intelligence.md
async function loadSharedIntelligence() {
  const sharedIntelligencePath = path.join(__dirname, 'guideline', 'core', 'shared-intelligence.md');
  
  if (await fs.pathExists(sharedIntelligencePath)) {
    const content = await fs.readFile(sharedIntelligencePath, 'utf-8');
    // Remove the title and return the content
    return content.replace(/^# Shared Intelligence\n+/m, '').trim();
  }
  
  return '';
}

// Load framework module (simplified)
async function loadFrameworkModule() {
  const frameworkPath = path.join(__dirname, 'guideline', 'guide', 'framework.md');
  
  if (await fs.pathExists(frameworkPath)) {
    const content = await fs.readFile(frameworkPath, 'utf-8');
    return content.replace(/^# .*\n+/m, '').trim();
  }
  
  return null;
}

// Command generation with intelligence embedding via placeholder replacement (simplified)
async function generateCommand(type, sharedIntelligence, frameworkModule) {
  const templatePath = path.join(__dirname, 'guideline', 'templates', `${type}-command.md`);
  let template = await fs.readFile(templatePath, 'utf8');
  
  // Replace remaining placeholders with shared intelligence and framework
  template = await replacePlaceholders(template, type, sharedIntelligence, frameworkModule);
  
  return template;
}

// Replace template placeholders with intelligence content (simplified for new architecture)
async function replacePlaceholders(template, commandType, sharedIntelligence, frameworkModule) {
  let result = template;
  
  // Replace framework compliance placeholder if it exists
  if (frameworkModule) {
    const frameworkRegex = /<!-- INTELLIGENCE_EMBEDDING_PLACEHOLDER:FRAMEWORK_COMPLIANCE -->[\s\S]*?<!-- This placeholder.*?-->/g;
    result = result.replace(frameworkRegex, frameworkModule.trim());
  }
  
  // Add integration protocol at the end
  result += '\n\n' + buildIntegrationProtocol(commandType);
  
  return result;
}

// Simplified integration protocol with Anthropic parallel standards
function buildIntegrationProtocol(commandType) {
  let protocol = '<integration_protocol>\n';
  
  // Anthropic parallel tool execution standards
  protocol += '<use_parallel_tool_calls>\n';
  protocol += 'For maximum efficiency, whenever you perform multiple independent operations, ';
  protocol += 'invoke all relevant tools simultaneously rather than sequentially. ';
  protocol += 'Prioritize calling tools in parallel whenever possible. ';
  protocol += 'Err on the side of maximizing parallel tool calls rather than running too many tools sequentially.\n';
  protocol += '</use_parallel_tool_calls>\n\n';
  
  // Command-specific context
  protocol += `<command_context type="${commandType}">\n`;
  if (commandType === 'setup') {
    protocol += 'EXECUTE [project-discovery] through [parallel-analysis] and [systematic-assessment].\n';
    protocol += 'GENERATE [domain-specialists] based on [discovered-requirements] and [project-complexity].\n';
  } else if (commandType === 'workflow') {
    protocol += 'COORDINATE [specialist-assignment] through [parallel-delegation] and [systematic-execution].\n';
    protocol += 'ORCHESTRATE [task-workflows] through [concurrent-specialist-streams] and [integration-checkpoints].\n';
  }
  protocol += '</command_context>\n\n';
  
  // Core execution requirements
  protocol += '<execution_requirements>\n';
  protocol += 'EXECUTE [parallel-tool-operations] simultaneously unless [proven-dependencies] require serialization.\n';
  protocol += 'MAINTAIN [framework-dimensional-compliance] through [systematic-intelligence-application].\n';
  protocol += 'APPLY [shared-intelligence-patterns] through [integrated-coordination] and [performance-optimization].\n';
  protocol += '</execution_requirements>\n';
  
  protocol += '</integration_protocol>\n';
  
  return protocol;
}

// Run installation
if (require.main === module) {
  install().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = { install };