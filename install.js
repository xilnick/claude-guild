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
    
    // Load core intelligence and framework (new architecture)
    const coreIntelligence = await loadCoreIntelligence();
    const frameworkModule = await loadFrameworkModule();
    
    // Generate and install commands
    const workflowContent = await generateCommand('workflow', coreIntelligence, frameworkModule);
    await fs.writeFile(path.join(guildDir, 'workflow.md'), workflowContent);
    
    const setupContent = await generateCommand('setup', coreIntelligence, frameworkModule);
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
    
    // Command installation complete - agent directories handled separately
    
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



// Load core intelligence modules using new architecture
async function loadCoreIntelligence() {
  const intelligence = {};
  const coreDir = path.join(__dirname, 'guideline', 'core');
  
  // Load only the new intelligence files
  const intelligenceFiles = ['setup-intelligence.md', 'workflow-intelligence.md', 'shared-intelligence.md'];
  
  for (const file of intelligenceFiles) {
    const filePath = path.join(coreDir, file);
    if (await fs.pathExists(filePath)) {
      const content = await fs.readFile(filePath, 'utf-8');
      const name = file.replace('.md', '');
      intelligence[name] = content.replace(/^# .*\n+/m, '').trim();
    }
  }
  
  return intelligence;
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

// New core intelligence architecture mapping
const commandIntelligence = {
  'setup': ['setup-intelligence', 'shared-intelligence'],
  'workflow': ['workflow-intelligence', 'shared-intelligence']
};

// Simplified command generation with new intelligence architecture
async function generateCommand(type, coreIntelligence, frameworkModule) {
  const templatePath = path.join(__dirname, 'guideline', 'templates', `${type}-command.md`);
  let template = await fs.readFile(templatePath, 'utf8');
  
  // Get relevant intelligence modules for this command
  const relevantModules = getRelevantIntelligence(type, coreIntelligence);
  
  // Build intelligence embedding with simplified structure
  let embedded = '\n\n<guild_intelligence>\n';
  
  // Framework guidance (full framework, no optimization)
  if (frameworkModule) {
    embedded += '<framework_guidance>\n';
    embedded += frameworkModule + '\n';
    embedded += '</framework_guidance>\n\n';
  }
  
  // Core intelligence modules
  if (Object.keys(relevantModules).length > 0) {
    embedded += '<core_intelligence>\n';
    Object.entries(relevantModules).forEach(([name, content]) => {
      embedded += `<intelligence_module name="${name}">\n`;
      embedded += content + '\n';
      embedded += `</intelligence_module>\n\n`;
    });
    embedded += '</core_intelligence>\n\n';
  }
  
  // Integration protocol with Anthropic parallel standards
  embedded += buildIntegrationProtocol(type);
  
  embedded += '</guild_intelligence>\n';
  
  template += embedded;
  return template;
}

// Get relevant intelligence modules for command type
function getRelevantIntelligence(commandType, allIntelligence) {
  const requiredModules = commandIntelligence[commandType] || [];
  const relevantModules = {};
  
  requiredModules.forEach(moduleName => {
    if (allIntelligence[moduleName]) {
      relevantModules[moduleName] = allIntelligence[moduleName];
    }
  });
  
  return relevantModules;
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
  protocol += 'APPLY [intelligence-modules] through [integrated-coordination] and [performance-optimization].\n';
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