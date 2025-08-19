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
🏛️ Claude Guild - Workflow Enhancement for Claude Code

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

💡 After installation, use /guild:setup to configure your project agents!

🔗 Learn more: https://github.com/your-repo/claude-guild
`);
        process.exit(0);
        break;
    }
  }

  return options;
}

async function askScope() {
  intro('🏛️ Claude Guild Installation');
  
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
    
    if (!fs.existsSync('commands')) {
      console.error('❌ Test failed: commands directory not found');
      process.exit(1);
    }
    
    // Validate new guideline structure
    if (!fs.existsSync('guideline/shared') || !fs.existsSync('guideline/setup') || !fs.existsSync('guideline/execution')) {
      console.error('❌ Test failed: guideline intelligence directories not found');
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
    
    console.log(`🏛️ Claude Guild - Automated Installation`);
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

💡 Quick tip: Use /guild:setup to analyze your project and create specialized agents!`);
    
  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    console.error('🔍 Debug info:', error.stack);
    process.exit(1);
  }
}

/**
 * ENHANCED: Modular Command Installation System
 * Installs commands with dynamic composition from guideline modules
 */
async function installCommands(claudeDir, guildDirName = 'guild') {
  const sourceCommandsDir = path.join(__dirname, 'commands');
  const guidelineDir = path.join(__dirname, 'guideline');
  const targetCommandsBaseDir = path.join(claudeDir, 'commands');
  const targetGuildCommandsDir = path.join(targetCommandsBaseDir, guildDirName);
  
  // Ensure directories exist
  await fs.ensureDir(targetCommandsBaseDir);
  await fs.ensureDir(targetGuildCommandsDir);
  
  console.log('🏗️ Installing Guild commands with modular composition...');
  
  try {
    // Phase 1: Install base commands from source
    await installBaseCommands(sourceCommandsDir, targetCommandsBaseDir, targetGuildCommandsDir);
    
    // Phase 2: Generate composed commands (setup + main guild)
    await generateComposedSetupCommand(guidelineDir, targetGuildCommandsDir, targetCommandsBaseDir);
    
    // Phase 3: Install standalone command specs
    await installStandaloneCommandSpecs(guidelineDir, targetGuildCommandsDir);
    
    console.log(`✅ Guild commands installed successfully`);
    console.log(`🎯 Primary Command: /guild "your task" (main entry point)`);
    console.log(`🔧 Agent Command: /guild:agent "your task" (direct agent execution)`);
    console.log(`⚙️  Setup Command: /guild:setup (configure project agents)`);
    console.log(`🔧 Management Commands: /guild:ignore, /guild:instructions`);
    
  } catch (error) {
    console.error('❌ Command installation failed:', error.message);
    throw error;
  }
}

/**
 * Install base commands from the commands directory
 */
async function installBaseCommands(sourceDir, targetBaseDir, targetGuildDir) {
  if (!await fs.pathExists(sourceDir)) {
    console.log('📦 No base commands directory found, proceeding with composition-only');
    return;
  }

  const commandFiles = await fs.readdir(sourceDir);
  let installedCount = 0;
  
  for (const file of commandFiles) {
    if (!file.endsWith('.md')) continue;
    
    const sourcePath = path.join(sourceDir, file);
    const fileName = file.replace('.md', '');
    
    // Map command files to their proper names and locations
    // Note: agent.md is now generated with embedded intelligence in generateComposedSetupCommand
    // All .md files in commands/ are management commands that should be installed
    const targetPath = path.join(targetGuildDir, file);
    await fs.copy(sourcePath, targetPath);
    installedCount++;
  }
  
  console.log(`📋 Installed ${installedCount} base commands`);
}

/**
 * ENHANCED: Generate setup command from modular composition
 */
async function generateComposedSetupCommand(guidelineDir, targetGuildDir, targetBaseDir) {
  console.log('🔧 Composing commands from core modules...');
  
  try {
    // Load all core modules dynamically
    const coreModules = await loadCoreModules(guidelineDir);
    
    // Generate setup command content
    const setupContent = await generateSetupCommand(coreModules);
    
    // Generate agent command content (with full embedded intelligence)
    const agentContent = await generateAgentCommand(coreModules);
    
    // Generate main guild command content (alias for agent)
    const mainGuildContent = await generateMainGuildCommand(coreModules);
    
    // Generate management commands
    const ignoreContent = await generateManagementCommand(coreModules, 'ignore-command');
    const instructionsContent = await generateManagementCommand(coreModules, 'instructions-command');
    
    // Write composed commands
    const setupPath = path.join(targetGuildDir, 'setup.md');
    const agentPath = path.join(targetGuildDir, 'agent.md');
    const mainGuildPath = path.join(targetBaseDir, 'guild.md'); // Main /guild command at top level
    const ignorePath = path.join(targetGuildDir, 'ignore.md');
    const instructionsPath = path.join(targetGuildDir, 'instructions.md');
    
    await fs.writeFile(setupPath, setupContent);
    await fs.writeFile(agentPath, agentContent);
    await fs.writeFile(mainGuildPath, mainGuildContent);
    await fs.writeFile(ignorePath, ignoreContent);
    await fs.writeFile(instructionsPath, instructionsContent);
    
    console.log(`🎨 Generated commands with ${Object.keys(coreModules).length} embedded modules:
    - Setup command: ${setupPath}
    - Agent command: ${agentPath}  
    - Main guild command: ${mainGuildPath}
    - Ignore command: ${ignorePath}
    - Instructions command: ${instructionsPath}`);
    
  } catch (error) {
    console.error('❌ Command composition failed:', error.message);
    
    // Fallback: copy base setup if available
    const fallbackSetupPath = path.join(__dirname, 'commands', 'setup.md');
    if (await fs.pathExists(fallbackSetupPath)) {
      console.log('🔄 Using fallback setup command');
      const targetPath = path.join(targetGuildDir, 'setup.md');
      await fs.copy(fallbackSetupPath, targetPath);
    } else {
      throw new Error('No fallback setup command available');
    }
  }
}

/**
 * Install standalone command specifications
 */
async function installStandaloneCommandSpecs(guidelineDir, targetGuildDir) {
  const commandSpecsDir = path.join(guidelineDir, 'commands');
  
  if (!await fs.pathExists(commandSpecsDir)) {
    console.log('📦 No command specifications found');
    return;
  }
  
  console.log('📝 Installing standalone command specifications...');
  
  const specFiles = await fs.readdir(commandSpecsDir);
  let installedSpecs = 0;
  
  for (const file of specFiles) {
    if (!file.endsWith('.md')) continue;
    
    const sourcePath = path.join(commandSpecsDir, file);
    const targetFileName = file.replace('guild-', ''); // Remove guild- prefix for target
    const targetPath = path.join(targetGuildDir, targetFileName);
    
    await fs.copy(sourcePath, targetPath);
    installedSpecs++;
  }
  
  console.log(`📋 Installed ${installedSpecs} command specifications`);
}

/**
 * ENHANCED: Load all core modules and template files dynamically
 */
async function loadCoreModules(guidelineDir) {
  const modules = {};
  
  // Load modules from new structure: shared/, setup/, execution/
  const moduleDirectories = ['shared', 'setup', 'execution'];
  
  for (const dirName of moduleDirectories) {
    const moduleDir = path.join(guidelineDir, dirName);
    
    if (await fs.pathExists(moduleDir)) {
      try {
        const moduleFiles = await fs.readdir(moduleDir);
        
        for (const file of moduleFiles) {
          if (!file.endsWith('.md')) continue;
          
          const modulePath = path.join(moduleDir, file);
          const moduleContent = await fs.readFile(modulePath, 'utf-8');
          const moduleName = file.replace('.md', '');
          
          // Extract content (remove title and purpose sections)
          const processedContent = processModuleContent(moduleContent, moduleName);
          // Use path format for template substitution: shared/principles, setup/agents, etc.
          modules[`${dirName}/${moduleName}`] = processedContent;
        }
        
      } catch (error) {
        console.warn(`⚠️  Error loading ${dirName} modules:`, error.message);
      }
    }
  }
  
  // Load template files
  const templatesDir = path.join(guidelineDir, 'templates');
  if (await fs.pathExists(templatesDir)) {
    try {
      const templateFiles = await fs.readdir(templatesDir);
      
      for (const file of templateFiles) {
        if (!file.endsWith('.md') || file === 'setup-command.md' || file === 'agent-command.md') continue;
        
        const templatePath = path.join(templatesDir, file);
        const templateContent = await fs.readFile(templatePath, 'utf-8');
        const templateName = file.replace('.md', '');
        
        // Template files are used as-is (no processing needed)
        modules[templateName] = templateContent;
      }
      
    } catch (error) {
      console.warn('⚠️  Error loading template files:', error.message);
    }
  }
  
  if (Object.keys(modules).length === 0) {
    console.warn('⚠️  No modules or templates found, using empty modules');
  } else {
    console.log(`📚 Loaded ${Object.keys(modules).length} modules and templates:`, Object.keys(modules).join(', '));
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
 * Generate agent command from template with embedded guideline intelligence
 */
async function generateAgentCommand(coreModules) {
  try {
    // Load template from file
    const templatePath = path.join(__dirname, 'guideline', 'templates', 'agent-command.md');
    let template = await fs.readFile(templatePath, 'utf8');
    
    // Replace placeholders with actual module content
    for (const [moduleKey, moduleContent] of Object.entries(coreModules)) {
      const placeholder = `{{${moduleKey}}}`;
      template = template.replace(new RegExp(placeholder, 'g'), moduleContent || '');
    }
    
    return template;
  } catch (error) {
    console.error('❌ Failed to load agent command template:', error.message);
    throw error;
  }
}

/**
 * Generate guild agent command from template with embedded guideline intelligence
 */
async function generateMainGuildCommand(coreModules) {
  try {
    // Create main /guild command that serves as an alias for /guild:agent
    // This provides the primary entry point for Guild workflows
    const mainGuildContent = `# Guild Workflow Agent

**Alias for /guild:agent** - Complete Guild workflow execution with intelligent agent coordination.

## Purpose
This is the main entry point for Guild workflows. It provides the same functionality as \`/guild:agent\` but with a simpler command interface.

## Usage
\`\`\`
/guild "your task description"
\`\`\`

## What This Does
- Analyzes your task and project context
- Routes to appropriate specialized agents
- Executes workflows with parallel processing
- Provides structured, actionable results

## For Full Agent Features
Use \`/guild:agent "your task"\` for direct access to the complete agent system with all features and options.

## Quick Setup
Run \`/guild:setup\` first to configure project-specific agents and workflows.
`;

    return mainGuildContent;
  } catch (error) {
    console.error('❌ Failed to generate main guild command:', error.message);
    throw error;
  }
}

/**
 * Generate management command with embedded intelligence
 */
async function generateManagementCommand(coreModules, commandType) {
  const templatesDir = path.join(__dirname, 'guideline', 'templates');
  const templatePath = path.join(templatesDir, `${commandType}.md`);
  
  try {
    let templateContent = await fs.readFile(templatePath, 'utf-8');
    
    // Replace module placeholders with actual content
    for (const [moduleName, moduleContent] of Object.entries(coreModules)) {
      const placeholder = `{{${moduleName}}}`;
      if (templateContent.includes(placeholder)) {
        templateContent = templateContent.replace(new RegExp(placeholder, 'g'), moduleContent);
      }
    }
    
    return templateContent;
  } catch (error) {
    console.warn(`⚠️  Failed to generate ${commandType} command:`, error.message);
    return `# /${commandType}\n\nCommand generation failed. Please check template.`;
  }
}

/**
 * Generate embedded intelligence section from core modules
 */
// This function is no longer needed - using pure guideline-driven generation

if (require.main === module) {
  install();
}

module.exports = { install };