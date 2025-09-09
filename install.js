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
    
    // Load core modules and framework (simplified)
    const coreModules = await loadCoreModules();
    const frameworkModule = await loadFrameworkModule();
    
    // Generate and install commands
    const workflowContent = await generateCommand('workflow', coreModules, frameworkModule);
    await fs.writeFile(path.join(guildDir, 'workflow.md'), workflowContent);
    
    const setupContent = await generateCommand('setup', coreModules, frameworkModule);
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
    
    // Ensure base agent directory exists
    const agentsDir = path.join(options.targetDir, '.claude', 'agents', 'guild');
    await fs.ensureDir(agentsDir);
    
    outro(`✅ Guild installed successfully!

📂 Location: ${commandsDir}
🎯 Commands:
  • /guild "task" - Main workflow command
  • /guild:setup - Create agent team

🚀 Features:
  • Streamlined command generation
  • Essential Guild functionality
  • Tool Use Implementation compliance
  • Simple error handling

💡 Start with: /guild:setup to create your agent team`);
    
  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    process.exit(1);
  }
}



// Load core modules for embedding (simplified)
async function loadCoreModules() {
  const modules = {};
  const coreDir = path.join(__dirname, 'guideline', 'core');
  
  if (await fs.pathExists(coreDir)) {
    const files = await fs.readdir(coreDir);
    
    for (const file of files) {
      if (file.endsWith('.md') && file !== 'README.md') {
        const content = await fs.readFile(path.join(coreDir, file), 'utf-8');
        const name = file.replace('.md', '');
        modules[name] = content.replace(/^# .*\n+/m, '').trim();
      }
    }
  }
  
  return modules;
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

// Generate command (simplified)
async function generateCommand(type, coreModules, frameworkModule) {
  const templatePath = path.join(__dirname, 'guideline', 'templates', `${type}-command.md`);
  let template = await fs.readFile(templatePath, 'utf8');
  
  // Simple intelligence embedding
  let embedded = '\n\n## Guild Intelligence\n\n';
  
  // Basic framework embedding
  if (frameworkModule) {
    embedded += '### Framework Guidance\n';
    embedded += frameworkModule.substring(0, 1000) + '...\n\n';
  }
  
  // Core modules with essential patterns only
  const essentialModules = ['workflow', 'agents', 'verification', 'decision-authority'];
  essentialModules.forEach(moduleName => {
    if (coreModules[moduleName]) {
      embedded += `### ${moduleName} Module\n`;
      embedded += coreModules[moduleName].substring(0, 500) + '...\n\n';
    }
  });
  
  template += embedded;
  return template;
}

// Run installation
if (require.main === module) {
  install().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = { install };