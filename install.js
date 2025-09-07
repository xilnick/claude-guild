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
    
    console.log('🏗️ Installing Guild commands with Tool Use Implementation...');
    
    // Load and embed core modules
    const coreModules = await loadCoreModules();
    
    // Generate and install workflow command
    const workflowContent = await generateCommand('workflow', coreModules);
    await fs.writeFile(path.join(guildDir, 'workflow.md'), workflowContent);
    
    // Generate and install setup command (with abstract-only agent creation)
    const setupContent = await generateCommand('setup', coreModules, { abstractOnly: true });
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
    
    // Ensure base agent directory exists (setup command will create category subdirs)
    const agentsDir = path.join(options.targetDir, '.claude', 'agents', 'guild');
    await fs.ensureDir(agentsDir);
    console.log(`📂 Agent directory ready at .claude/agents/guild/`);
    console.log(`   Abstract-only agents will be created by /guild:setup`);
    console.log(`   Role descriptions and expertise areas without implementation details`);
    console.log(`   Following Tool Use Implementation best practices`);
    
    outro(`✅ Guild installed successfully!

📂 Location: ${commandsDir}
🎯 Commands:
  • /guild "task" - Main workflow command with parallel execution
  • /guild:setup - Create comprehensive agent team

🚀 Features:
  • Abstract-only agent creation (no code samples or file structures)
  • Role descriptions and expertise areas focus
  • 3-4 sentence descriptions for all specialists (Tool Use Implementation)
  • Parallel execution for independent tasks (Claude 4 optimization)
  • Robust error handling at abstract level
  • Comprehensive verification with gap detection

💡 Start with: /guild:setup to create your comprehensive agent team`);
    
  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    process.exit(1);
  }
}



// Load core modules for embedding
async function loadCoreModules() {
  const modules = {};
  const coreDir = path.join(__dirname, 'guideline', 'core');
  
  if (await fs.pathExists(coreDir)) {
    const files = await fs.readdir(coreDir);
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const content = await fs.readFile(path.join(coreDir, file), 'utf-8');
        const name = file.replace('.md', '');
        
        // Clean content while preserving important context
        // Only remove the main title (single #) and keep everything else
        modules[name] = content
          .replace(/^# .*\n+/m, '')  // Remove only the main title
          .trim();
      }
    }
  }
  
  return modules;
}

// Generate command with embedded intelligence
async function generateCommand(type, coreModules, options = {}) {
  const templatePath = path.join(__dirname, 'guideline', 'templates', `${type}-command.md`);
  let template = await fs.readFile(templatePath, 'utf8');
  
  // Embed core module intelligence if available
  if (Object.keys(coreModules).length > 0) {
    let embedded = '\n\n## 📚 EMBEDDED CORE INTELLIGENCE\n\n';
    
    // Add Tool Use Implementation notice
    embedded += '### 🔧 Tool Use Implementation\n';
    embedded += 'This command follows Anthropic\'s Tool Use Implementation best practices:\n';
    embedded += '- **3-4 sentence descriptions** for all specialists\n';
    embedded += '- **Parallel execution** for independent tasks\n';
    embedded += '- **Robust error handling** at every level\n';
    embedded += '- **Comprehensive verification** with gap detection\n\n';
    
    // Embed in specific order for logical flow
    if (coreModules.workflow) {
      embedded += '### Workflow Intelligence\n' + coreModules.workflow + '\n\n';
    }
    
    if (coreModules.agents) {
      embedded += '### Agent Intelligence\n' + coreModules.agents + '\n\n';
    }
    
    if (coreModules.verification) {
      embedded += '### Verification Intelligence\n' + coreModules.verification + '\n\n';
    }
    
    // Add parallel execution patterns
    embedded += '### Parallel Execution Patterns\n';
    embedded += '**Claude 4 Optimization:**\n';
    embedded += '- Launch independent specialists simultaneously\n';
    embedded += '- Batch tool calls for efficiency\n';
    embedded += '- Coordinate integration points explicitly\n';
    embedded += '- Send all results in single response\n\n';
    
    // Add error handling patterns
    embedded += '### Error Handling Framework\n';
    embedded += '**All specialists include:**\n';
    embedded += '- Structured error responses\n';
    embedded += '- Recovery strategies\n';
    embedded += '- Fallback approaches\n';
    embedded += '- Clear escalation paths\n\n';
    
    template += embedded;
  }
  
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