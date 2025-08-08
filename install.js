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
        if (files.some(f => f.startsWith('guild-') && f.endsWith('.md'))) {
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
  const guildDir = path.join(targetDir, '.guild');
  
  try {
    // Ensure basic directories exist
    await fs.ensureDir(path.join(claudeDir, 'agents'));
    await fs.ensureDir(guildDir);
    
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
    
    // Install commands using hybrid structure (guild.md flat, others in guild/ subdir)
    await installCommands(claudeDir, installationConfig.guildDirName);
    
    // Create .guild folder for setup command to populate
    await fs.ensureDir(guildDir);
    
    // Inline templates into setup command (only during development, not from npm)
    if (await fs.pathExists(path.join(__dirname, 'templates'))) {
      await inlineTemplatesIntoSetup(claudeDir, installationConfig.guildDirName);
    } else {
      console.log('📦 Using pre-inlined templates from setup command');
    }
    
    outro(`🎉 Claude Guild installed successfully!

📦 Installation Type: ${scope.type === 'project' ? 'Project-specific' : scope.type === 'user' ? 'Global' : 'Custom'}
📂 Commands Location: ${path.join(claudeDir, 'commands')}

🚀 Next Steps:
   1. Run: /guild:setup  (to configure project agents)
   2. Use: /guild "your task"  (to execute with Guild workflow)
   3. Try: /guild --refactor --test --verify "complex task"  (for comprehensive workflow)

💡 Quick tip: Use /guild:setup to analyze your project and create specialized agents!`);
    
  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    process.exit(1);
  }
}

async function installCommands(claudeDir, guildDirName = 'guild') {
  const sourceCommandsDir = path.join(__dirname, 'commands');
  const targetCommandsBaseDir = path.join(claudeDir, 'commands');
  const targetGuildCommandsDir = path.join(targetCommandsBaseDir, 'guild');
  
  // Ensure both commands directory and guild subdirectory exist
  await fs.ensureDir(targetCommandsBaseDir);
  await fs.ensureDir(targetGuildCommandsDir);
  
  // Read all command files
  const commandFiles = await fs.readdir(sourceCommandsDir);
  
  for (const file of commandFiles) {
    if (file.endsWith('.md')) {
      const sourcePath = path.join(sourceCommandsDir, file);
      
      if (file === 'guild.md') {
        // Main guild.md goes directly to .claude/commands/guild.md (flat)
        const targetPath = path.join(targetCommandsBaseDir, 'guild.md');
        await fs.copy(sourcePath, targetPath);
      } else {
        // All other guild commands go to .claude/commands/guild/ subdirectory
        const targetPath = path.join(targetGuildCommandsDir, file);
        await fs.copy(sourcePath, targetPath);
      }
    }
  }
  
  console.log(`📋 Installed ${commandFiles.filter(f => f.endsWith('.md')).length} Guild commands successfully`);
  console.log(`🎯 Primary Command: /guild "your task"`);
  console.log(`⚙️  Setup Command: /guild:setup (configure project agents)`);
  console.log(`🔧 Available Commands: /guild:fix, /guild:refactor, /guild:plan, /guild:spec`);
}

async function inlineTemplatesIntoSetup(claudeDir, guildDirName = 'guild') {
  const setupCommandPath = path.join(claudeDir, 'commands', 'guild', 'setup.md');
  const templatesDir = path.join(__dirname, 'templates');
  
  // Phase 2: Template Injection (Setup Composing Process)
  // Read clean setup command file (contains only setup logic)
  let setupContent = await fs.readFile(setupCommandPath, 'utf-8');
  
  // Read all template files for embedding (excluding workflow.md - commands define workflows)
  const templateFiles = await fs.readdir(templatesDir);
  const templates = {};
  
  for (const file of templateFiles) {
    if (file.endsWith('.md') && file !== 'workflow.md') {
      const templatePath = path.join(templatesDir, file);
      const templateContent = await fs.readFile(templatePath, 'utf-8');
      const templateName = file.replace('.md', '');
      templates[templateName] = templateContent;
    }
  }
  
  // Build embedded template section with direct content
  let templateSection = '\n\n## Embedded Templates\n\n' +
    '**CRITICAL**: These templates are embedded directly in this setup command and used inline for .guild folder creation.\n\n';
  
  // Add each template as a direct embedded section
  for (const [templateName, templateContent] of Object.entries(templates)) {
    templateSection += `### ${templateName.charAt(0).toUpperCase() + templateName.slice(1)} Template\n\n` +
      '```markdown\n' +
      templateContent +
      '\n```\n\n';
  }
  
  templateSection += '**Template Usage**: These templates are used directly during .guild folder creation without external functions.\n';
  
  // Replace existing template section or append if none exists
  if (setupContent.includes('## Embedded Templates')) {
    setupContent = setupContent.replace(/## Embedded Templates.*$/s, templateSection);
  } else {
    setupContent += templateSection;
  }
  
  await fs.writeFile(setupCommandPath, setupContent);
  console.log(`📝 Completed setup composition: embedded ${Object.keys(templates).length} templates directly into setup command`);
}

if (require.main === module) {
  install();
}

module.exports = { install };