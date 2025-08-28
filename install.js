#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');
const { select, intro, outro, isCancel, cancel, text } = require('@clack/prompts');

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    interactive: true,
    scope: 'user',
    path: require('os').homedir(),
    guildDir: 'guild',
    clean: true,
    testMode: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--no-interaction':
      case '--non-interactive':
        options.interactive = false;
        break;
      case '--scope':
        options.scope = args[++i] || 'user';
        break;
      case '--path':
        options.path = path.resolve(args[++i] || process.cwd());
        break;
      case '--guild-dir':
        options.guildDir = args[++i] || 'guild';
        break;
      case '--no-clean':
        options.clean = false;
        break;
      case '--test-mode':
        options.testMode = true;
        options.interactive = false;
        break;
      case '--help':
      case '-h':
        console.log(`
🏛️ Claude Guild - Research-Driven Workflow Enhancement for Claude Code

🚀 Quick Start:
  npx claude-guild                    # Interactive setup (recommended)

⚙️  Installation Options:
  --no-interaction                   Skip prompts, use smart defaults
  --scope <where>                    Where to install:
                                       • user     - Your home directory (global, default)
                                       • project  - This project only
                                       • custom   - Specific path you choose
  --path <location>                  Custom installation path
  --guild-dir <name>                 Custom command directory name
  --no-clean                         Keep existing installations
  --help, -h                         Show this help

📖 Examples:
  npx claude-guild                                   # Smart interactive setup
  npx claude-guild --no-interaction                 # Quick install globally (default)
  npx claude-guild --scope project                  # Install to current project only
  npx claude-guild --scope custom --path ~/my-proj  # Install to specific location

💡 After installation, use /guild:setup to configure research-capable project agents!

🔗 Learn more: https://github.com/your-repo/claude-guild
`);
        process.exit(0);
        break;
    }
  }

  return options;
}

async function askScope() {
  intro('🏛️ Claude Guild Research-Enhanced Installation');
  
  const scopeChoice = await select({
    message: 'Where would you like to install Claude Guild?',
    options: [
      {
        value: 'user', 
        label: '🏠 Your Home Directory',
        hint: 'Access Guild commands from anywhere (Recommended)'
      },
      {
        value: 'project',
        label: '📂 This Project Only',
        hint: 'Perfect for project-specific workflows'
      },
      {
        value: 'custom',
        label: '📍 Custom Location', 
        hint: 'Full control over installation location'
      }
    ]
  });

  if (isCancel(scopeChoice)) {
    cancel('Installation cancelled');
    process.exit(0);
  }

  let targetPath;
  if (scopeChoice === 'custom') {
    // For custom path, use text input
    const customPath = await text({
      message: 'Enter your custom installation path:',
      placeholder: '/path/to/your/project',
      validate(value) {
        if (!value || !value.trim()) {
          return 'Please provide a valid path';
        }
      }
    });
    
    if (isCancel(customPath)) {
      cancel('Installation cancelled');
      process.exit(0);
    }
    
    targetPath = path.resolve(customPath.trim());
  } else {
    targetPath = scopeChoice === 'user' ? require('os').homedir() : process.cwd();
  }

  return { type: scopeChoice, path: targetPath };
}

async function detectExistingInstallation(claudeDir) {
  const commandsDir = path.join(claudeDir, 'commands');
  const guildCommandsDir = path.join(commandsDir, 'guild');
  const directGuildFiles = [];
  
  // Check for guild commands directly in .claude folder (old structure)
  if (await fs.pathExists(claudeDir)) {
    const files = await fs.readdir(claudeDir);
    for (const file of files) {
      if (file.startsWith('guild-') && file.endsWith('.md')) {
        directGuildFiles.push(file);
      }
    }
  }
  
  // Check for guild commands in .claude/commands/guild (new structure)
  const hasNewStructure = await fs.pathExists(guildCommandsDir);
  
  // Check for custom guild directories in .claude/commands
  const customGuildDirs = [];
  if (await fs.pathExists(commandsDir)) {
    const dirs = await fs.readdir(commandsDir, { withFileTypes: true });
    for (const dir of dirs) {
      if (dir.isDirectory() && dir.name !== 'guild') {
        const dirPath = path.join(commandsDir, dir.name);
        const files = await fs.readdir(dirPath);
        if (files.some(f => ['setup.md', 'ignore.md', 'instructions.md', 'agent.md'].includes(f))) {
          customGuildDirs.push(dir.name);
        }
      }
    }
  }
  
  return {
    hasOldStructure: directGuildFiles.length > 0,
    hasNewStructure,
    customGuildDirs,
    oldGuildFiles: directGuildFiles
  };
}

async function askInstallationHandling(existing) {
  // Show existing installation info
  console.log('🔍 Found Existing Guild Installation');
  console.log('');
  
  if (existing.hasOldStructure) {
    console.log(`📦 Legacy files: ${existing.oldGuildFiles.length} old Guild commands found`);
  }
  if (existing.hasNewStructure) {
    console.log(`📂 Current structure: Commands in .claude/commands/guild/`);
  }
  if (existing.customGuildDirs.length > 0) {
    console.log(`🔧 Custom directories: ${existing.customGuildDirs.join(', ')}`);
  }
  
  const installChoice = await select({
    message: 'How would you like to handle the existing installation?',
    options: [
      {
        value: 'remove',
        label: '🔄 Clean Install',
        hint: 'Remove existing files and install fresh (Recommended)'
      },
      {
        value: 'overwrite',
        label: '✏️  Update Existing',
        hint: 'Keep current setup and update files in place'
      },
      {
        value: 'custom',
        label: '📁 Install to Custom Folder',
        hint: 'Create new installation with custom directory name'
      }
    ]
  });

  if (isCancel(installChoice)) {
    cancel('Installation cancelled');
    process.exit(0);
  }

  let guildDirName = 'guild';
  
  if (installChoice === 'custom') {
    const customName = await text({
      message: 'Enter custom directory name:',
      placeholder: 'guild-new',
      defaultValue: 'guild-new'
    });
    
    if (isCancel(customName)) {
      cancel('Installation cancelled');
      process.exit(0);
    }
    
    guildDirName = customName.trim() || 'guild-new';
    console.log(`✨ Will install to: .claude/commands/${guildDirName}/`);
  }

  return { action: installChoice, guildDirName };
}

async function cleanupOldInstallation(claudeDir, existing) {
  console.log('\n🧹 Cleaning up old installation...');
  
  // Remove old guild files directly in .claude folder
  if (existing.hasOldStructure) {
    for (const file of existing.oldGuildFiles) {
      const filePath = path.join(claudeDir, file);
      await fs.remove(filePath);
      console.log(`🗑️ Removed: ${file}`);
    }
  }
  
  // Remove new structure if exists (guild subdirectory)
  if (existing.hasNewStructure) {
    const guildCommandsDir = path.join(claudeDir, 'commands', 'guild');
    await fs.remove(guildCommandsDir);
    console.log('🗑️ Removed: .claude/commands/guild/');
  }
  
  // Remove custom guild directories
  if (existing.customGuildDirs.length > 0) {
    for (const dirName of existing.customGuildDirs) {
      const customDir = path.join(claudeDir, 'commands', dirName);
      await fs.remove(customDir);
      console.log(`🗑️ Removed: .claude/commands/${dirName}/`);
    }
  }
  
  // Remove main guild.md file and guild subdirectory (hybrid structure cleanup)
  const commandsDir = path.join(claudeDir, 'commands');
  if (await fs.pathExists(commandsDir)) {
    // Remove main guild.md file
    const mainGuildPath = path.join(commandsDir, 'guild.md');
    if (await fs.pathExists(mainGuildPath)) {
      await fs.remove(mainGuildPath);
      console.log('🗑️ Removed: .claude/commands/guild.md');
    }
    
    // Remove guild subdirectory
    const guildSubDir = path.join(commandsDir, 'guild');
    if (await fs.pathExists(guildSubDir)) {
      await fs.remove(guildSubDir);
      console.log('🗑️ Removed: .claude/commands/guild/');
    }
    
    // Remove any old guild-prefixed files from flat structure (backwards compatibility)
    const files = await fs.readdir(commandsDir);
    for (const file of files) {
      if (file.startsWith('guild-') && file.endsWith('.md')) {
        const filePath = path.join(commandsDir, file);
        await fs.remove(filePath);
        console.log(`🗑️ Removed: .claude/commands/${file}`);
      }
    }
  }
  
  console.log('✅ Cleanup completed');
}

async function install(cliOptions = null) {
  const options = cliOptions || parseArgs();
  
  // Test mode - quick validation and exit
  if (options.testMode) {
    console.log('🧪 Claude Guild - Test Mode');
    
    // Basic validation checks
    if (!fs.existsSync('package.json')) {
      console.error('❌ Test failed: package.json not found');
      process.exit(1);
    }
    
    if (!fs.existsSync('install.js')) {
      console.error('❌ Test failed: install.js not found');
      process.exit(1);
    }
    
    // Validate simplified guideline structure
    if (!fs.existsSync('guideline/core') || !fs.existsSync('guideline/templates')) {
      console.error('❌ Test failed: guideline core/templates directories not found');
      process.exit(1);
    }
    
    if (!fs.existsSync('guideline/core/workflow.md') || !fs.existsSync('guideline/core/agents.md')) {
      console.error('❌ Test failed: core modules not found');
      process.exit(1);
    }
    
    if (!fs.existsSync('guideline/templates/workflow-command.md') || !fs.existsSync('guideline/templates/setup-command.md')) {
      console.error('❌ Test failed: command templates not found');
      process.exit(1);
    }
    
    console.log('✅ Test mode: All validation checks passed');
    return;
  }
  
  let scope, targetDir, installationConfig;
  
  if (options.interactive) {
    scope = await askScope();
    targetDir = scope.path;
    
    // Handle existing installation interactively
    const claudeDir = path.join(targetDir, '.claude');
    const existing = await detectExistingInstallation(claudeDir);
    installationConfig = { action: 'fresh', guildDirName: 'guild' };
    
    if (existing.hasOldStructure || existing.hasNewStructure || existing.customGuildDirs.length > 0) {
      installationConfig = await askInstallationHandling(existing);
    }
  } else {
    // Non-interactive mode - use CLI options
    switch (options.scope) {
      case 'user':
        targetDir = require('os').homedir();
        break;
      case 'current':
        targetDir = process.cwd();
        break;
      case 'custom':
        targetDir = options.path;
        break;
      case 'project':
        targetDir = process.cwd();
        break;
      case 'user':
      default:
        targetDir = require('os').homedir();
        break;
    }
    
    scope = { type: options.scope, path: targetDir };
    installationConfig = {
      guildDirName: options.guildDir,
      cleanInstall: options.clean
    };
    
    console.log(`🏛️ Claude Guild - Research-Enhanced Automated Installation`);
    console.log(`🎯 Mode: Non-interactive (using defaults)`);
    console.log(`📍 Scope: ${options.scope === 'project' ? 'This Project Only' : options.scope === 'user' ? 'Global (Home Directory)' : options.scope}`);
    console.log(`📂 Location: ${targetDir}`);
    console.log(`📁 Commands Folder: ${options.guildDir}`);
    
    // Handle existing installation in non-interactive mode
    const claudeDir = path.join(targetDir, '.claude');
    const existing = await detectExistingInstallation(claudeDir);
    
    if ((existing.hasOldStructure || existing.hasNewStructure || existing.customGuildDirs.length > 0) && options.clean) {
      console.log('🗑️ Cleaning existing installation...');
      await cleanupOldInstallation(claudeDir, existing);
    }
  }
  
  const claudeDir = path.join(targetDir, '.claude');
  
  try {
    // Ensure basic directories exist - setup command will create .guild/ and agents as needed
    // Only install.js responsibility is .claude/commands structure
    
    if (options.interactive) {
      console.log(`
🏗️ Installing Claude Guild
📍 Location: ${targetDir}
🎯 Scope: ${scope.type === 'project' ? 'This Project Only' : scope.type === 'user' ? 'Global (Home Directory)' : 'Custom Location'}`);
      console.log(`📂 Commands will be available at: ${path.join(targetDir, '.claude', 'commands')}`);
      
      // Interactive mode already handled existing installation above
      if (installationConfig.action === 'remove') {
        const existing = await detectExistingInstallation(claudeDir);
        await cleanupOldInstallation(claudeDir, existing);
      }
    }
    
    // Install commands with enhanced composition system
    await installCommands(claudeDir, installationConfig.guildDirName);
    
    // Note: .guild/ directory will be created by setup command when needed
    
    outro(`🎉 Claude Guild installed successfully!

📦 Installation Type: ${scope.type === 'project' ? 'Project-specific' : scope.type === 'user' ? 'Global' : 'Custom'}
📂 Commands Location: ${path.join(claudeDir, 'commands')}

🚀 Next Steps:
   1. Run: /guild:setup  (to configure project agents)
   2. Use: /guild "your task"  (convenient alias for Guild workflow)
   3. Use: /guild:agent "your task"  (direct agent execution)

💡 Quick tip: Use /guild:setup to analyze your project and create specialized agents with research capabilities!`);
    
  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    console.error('🔍 Debug info:', error.stack);
    process.exit(1);
  }
}

/**
 * SIMPLIFIED: Two-Command Installation System
 * Installs only /guild (workflow) and /guild:setup commands
 */
async function installCommands(claudeDir, guildDirName = 'guild') {
  const guidelineDir = path.join(__dirname, 'guideline');
  const targetCommandsBaseDir = path.join(claudeDir, 'commands');
  const targetGuildCommandsDir = path.join(targetCommandsBaseDir, guildDirName);
  
  // Ensure directories exist
  await fs.ensureDir(targetCommandsBaseDir);
  await fs.ensureDir(targetGuildCommandsDir);
  
  console.log('🏗️ Installing Guild commands (workflow + setup only)...');
  
  try {
    // Load core modules for command composition
    const coreModules = await loadCoreModules(guidelineDir);
    
    // Generate /guild:workflow (main workflow command) in guild subdirectory
    const workflowContent = await generateWorkflowCommand(coreModules);
    const workflowPath = path.join(targetGuildCommandsDir, 'workflow.md');
    await fs.writeFile(workflowPath, workflowContent);
    
    // Create /guild symlink to workflow command
    const guildSymlinkPath = path.join(targetCommandsBaseDir, 'guild.md');
    const workflowRelativePath = path.join(guildDirName, 'workflow.md');
    
    // Remove existing guild.md if it exists
    if (await fs.pathExists(guildSymlinkPath)) {
      await fs.remove(guildSymlinkPath);
    }
    
    // Create symlink to workflow command
    await fs.symlink(workflowRelativePath, guildSymlinkPath);
    
    // Generate /guild:setup command in guild subdirectory
    const setupContent = await generateSetupCommand(coreModules);
    const setupPath = path.join(targetGuildCommandsDir, 'setup.md');
    await fs.writeFile(setupPath, setupContent);
    
    console.log(`✅ Guild commands installed successfully`);
    console.log(`🎯 Main Command: /guild "your task" (symlinks to workflow)`);
    console.log(`⚡ Workflow Command: /guild:workflow "your task" (full workflow execution)`);
    console.log(`⚙️ Setup Command: /guild:setup (agent creation)`);
    
  } catch (error) {
    console.error('❌ Command installation failed:', error.message);
    throw error;
  }
}

/**
 * SIMPLIFIED: Load core modules for two commands
 */
async function loadCoreModules(guidelineDir) {
  const modules = {};
  
  // Load modules from core/ directory only
  const coreDir = path.join(guidelineDir, 'core');
  
  if (await fs.pathExists(coreDir)) {
    try {
      const moduleFiles = await fs.readdir(coreDir);
      
      for (const file of moduleFiles) {
        if (!file.endsWith('.md')) continue;
        
        const modulePath = path.join(coreDir, file);
        const moduleContent = await fs.readFile(modulePath, 'utf-8');
        const moduleName = file.replace('.md', '');
        
        // Extract content (remove title and purpose sections)
        const processedContent = processModuleContent(moduleContent, moduleName);
        // Use core/ prefix for template substitution
        modules[`core/${moduleName}`] = processedContent;
      }
      
    } catch (error) {
      console.warn(`⚠️  Error loading core modules:`, error.message);
    }
  }
  
  if (Object.keys(modules).length === 0) {
    console.warn('⚠️  No core modules found, using empty modules');
  } else {
    console.log(`📚 Loaded ${Object.keys(modules).length} core modules:`, Object.keys(modules).join(', '));
  }
  
  return modules;
}

/**
 * Process module content for embedding
 */
function processModuleContent(content, moduleName) {
  // Remove module-specific headers and metadata
  let processed = content
    .replace(/^# .+Module\s*\n/, '') // Remove "X Module" title
    .replace(/^## Purpose\s*\n[\s\S]*?\n(?=##)/m, '') // Remove Purpose section
    .replace(/^## Module Dependencies[\s\S]*$/m, '') // Remove dependencies section
    .replace(/^## Module Consumers[\s\S]*$/m, '') // Remove consumers section
    .trim();
  
  // If content is too short after processing, use original
  if (processed.length < 100) {
    processed = content;
  }
  
  return processed;
}

/**
 * Generate workflow command from template with embedded guideline intelligence
 */
async function generateWorkflowCommand(coreModules) {
  try {
    // Load template from file
    const templatePath = path.join(__dirname, 'guideline', 'templates', 'workflow-command.md');
    let template = await fs.readFile(templatePath, 'utf8');
    
    // Replace placeholders with actual module content
    for (const [moduleKey, moduleContent] of Object.entries(coreModules)) {
      const placeholder = `{{${moduleKey}}}`;
      template = template.replace(new RegExp(placeholder, 'g'), moduleContent || '');
    }
    
    return template;
  } catch (error) {
    console.error('❌ Failed to load workflow command template:', error.message);
    throw error;
  }
}

/**
 * Generate setup command from template with embedded guideline intelligence
 */
async function generateSetupCommand(coreModules) {
  try {
    // Load template from file
    const templatePath = path.join(__dirname, 'guideline', 'templates', 'setup-command.md');
    let template = await fs.readFile(templatePath, 'utf8');
    
    // Replace placeholders with actual module content
    for (const [moduleKey, moduleContent] of Object.entries(coreModules)) {
      const placeholder = `{{${moduleKey}}}`;
      template = template.replace(new RegExp(placeholder, 'g'), moduleContent || '');
    }
    
    return template;
  } catch (error) {
    console.error('❌ Failed to load setup command template:', error.message);
    throw error;
  }
}



/**
 * Functions for workflow and setup command generation
 */

if (require.main === module) {
  install();
}

module.exports = { install };