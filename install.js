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
    
    // Validate new guideline structure
    if (!fs.existsSync('guideline/core')) {
      console.error('❌ Test failed: guideline/core directory not found');
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
    
    // Install commands with enhanced composition system
    await installCommands(claudeDir, installationConfig.guildDirName);
    
    // Create .guild folder for setup command to populate
    await fs.ensureDir(guildDir);
    
    outro(`🎉 Claude Guild installed successfully!

📦 Installation Type: ${scope.type === 'project' ? 'Project-specific' : scope.type === 'user' ? 'Global' : 'Custom'}
📂 Commands Location: ${path.join(claudeDir, 'commands')}

🚀 Next Steps:
   1. Run: /guild:setup  (to configure project agents)
   2. Use: /guild "your task"  (to execute with Guild workflow)
   3. Try: /guild --full "complex task"  (for comprehensive workflow)

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
    
    // Phase 2: Generate composed setup command
    await generateComposedSetupCommand(guidelineDir, targetGuildCommandsDir);
    
    // Phase 3: Install standalone command specs
    await installStandaloneCommandSpecs(guidelineDir, targetGuildCommandsDir);
    
    console.log(`✅ Guild commands installed successfully`);
    console.log(`🎯 Primary Command: /guild "your task"`);
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
    
    if (file === 'guild.md') {
      // Main guild.md goes directly to .claude/commands/
      const targetPath = path.join(targetBaseDir, 'guild.md');
      await fs.copy(sourcePath, targetPath);
      installedCount++;
    } else if (file === 'setup.md') {
      // Skip setup.md - will be generated from composition
      continue;
    } else {
      // Other commands go to guild subdirectory
      const targetPath = path.join(targetGuildDir, file);
      await fs.copy(sourcePath, targetPath);
      installedCount++;
    }
  }
  
  console.log(`📋 Installed ${installedCount} base commands`);
}

/**
 * ENHANCED: Generate setup command from modular composition
 */
async function generateComposedSetupCommand(guidelineDir, targetGuildDir) {
  console.log('🔧 Composing setup command from core modules...');
  
  try {
    // Load all core modules dynamically
    const coreModules = await loadCoreModules(guidelineDir);
    
    // Generate setup command content
    const setupContent = await composeSetupCommand(coreModules);
    
    // Write composed setup command
    const setupPath = path.join(targetGuildDir, 'setup.md');
    await fs.writeFile(setupPath, setupContent);
    
    console.log(`🎨 Generated setup command with ${Object.keys(coreModules).length} embedded modules`);
    
  } catch (error) {
    console.error('❌ Setup command composition failed:', error.message);
    
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
 * ENHANCED: Load all core modules dynamically
 */
async function loadCoreModules(guidelineDir) {
  const coreDir = path.join(guidelineDir, 'core');
  const modules = {};
  
  if (!await fs.pathExists(coreDir)) {
    console.warn('⚠️  Core modules directory not found, using empty modules');
    return modules;
  }
  
  try {
    const moduleFiles = await fs.readdir(coreDir);
    
    for (const file of moduleFiles) {
      if (!file.endsWith('.md')) continue;
      
      const modulePath = path.join(coreDir, file);
      const moduleContent = await fs.readFile(modulePath, 'utf-8');
      const moduleName = file.replace('.md', '');
      
      // Extract content (remove title and purpose sections)
      const processedContent = processModuleContent(moduleContent, moduleName);
      modules[moduleName] = processedContent;
    }
    
    console.log(`📚 Loaded ${Object.keys(modules).length} core modules:`, Object.keys(modules).join(', '));
    
  } catch (error) {
    console.warn('⚠️  Error loading core modules:', error.message);
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
 * ENHANCED: Compose complete setup command from modules
 */
async function composeSetupCommand(coreModules) {
  // Base setup command template
  const template = `# /guild:setup

**Usage**: \`/guild:setup [--standalone] [guidance]\`

---
name: guild-setup-command
thinking_mode: ultrathink
model: opus
description: "Fully self-contained Guild system setup with complete embedded intelligence"
---

## Purpose

Perform comprehensive project analysis and generate a complete Guild system tailored specifically to your codebase using fully embedded intelligence. Completely self-contained with zero external dependencies.

## EMBEDDED INTELLIGENCE SYSTEM

This setup command contains complete Guild intelligence embedded from modular components:

${generateEmbeddedIntelligenceSection(coreModules)}

## EXECUTION PROTOCOL

### Step 1: Comprehensive Project Analysis

Execute comprehensive project analysis using embedded intelligence from the **Project Analysis Module**.

### Step 2: Dynamic Agent Generation

**CRITICAL DIRECTORY SETUP**: Execute in sequence:
1. **Create directory**: Use Bash \`mkdir -p .claude/agents/guild\`
2. **Verify creation**: Use LS tool to confirm \`.claude/agents/guild/\` exists  
3. **Generate agents**: All agents MUST be created in \`.claude/agents/guild/\` subdirectory

Generate agents using embedded intelligence from the **Agent Architecture Module**.

### Step 3: System Configuration Generation

Create complete Guild system configuration using embedded intelligence from all modules.

### Step 4: System Validation

Validate the generated system using embedded intelligence and quality standards.

## STANDALONE MODE (--standalone)

When \`--standalone\` flag is used, generate self-contained specialist agents:
- **security-analyst-agent**: OWASP compliance and security analysis
- **performance-engineer-agent**: Performance optimization specialist  
- **accessibility-auditor-agent**: WCAG compliance specialist
- **documentation-writer-agent**: Technical documentation specialist
- **code-reviewer-agent**: Code quality analysis specialist
- **testing-strategist-agent**: Test strategy development specialist

## KEY BENEFITS

**Fully Self-Contained Operation with Complete Intelligence**:
- **No External Dependencies**: All intelligence embedded in this command
- **Runtime Independence**: Zero dependency on external files
- **Complete Agent Intelligence**: All behavior embedded during setup
- **Project-Specific Optimization**: Understands your unique codebase

This setup command creates a **completely self-contained, intelligently specialized agent ecosystem**.
`;

  return template;
}

/**
 * Generate embedded intelligence section from core modules
 */
function generateEmbeddedIntelligenceSection(modules) {
  let section = '';
  
  const moduleOrder = [
    'system-principles',
    'agent-architecture', 
    'workflow-patterns',
    'context-engineering',
    'project-analysis'
  ];
  
  for (const moduleName of moduleOrder) {
    if (modules[moduleName]) {
      const title = moduleName.split('-').map(w => 
        w.charAt(0).toUpperCase() + w.slice(1)
      ).join(' ');
      
      section += `\n### ${title} Intelligence (Embedded)\n\n`;
      section += `${modules[moduleName]}\n\n`;
    }
  }
  
  // Add any additional modules not in the ordered list
  for (const [moduleName, moduleContent] of Object.entries(modules)) {
    if (!moduleOrder.includes(moduleName)) {
      const title = moduleName.split('-').map(w => 
        w.charAt(0).toUpperCase() + w.slice(1)
      ).join(' ');
      
      section += `\n### ${title} Intelligence (Embedded)\n\n`;
      section += `${moduleContent}\n\n`;
    }
  }
  
  return section;
}

if (require.main === module) {
  install();
}

module.exports = { install };