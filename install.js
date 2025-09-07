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
    
    // Load and embed core modules
    const coreModules = await loadCoreModules();
    
    // Generate and install workflow command
    const workflowContent = await generateCommand('workflow', coreModules);
    await fs.writeFile(path.join(guildDir, 'workflow.md'), workflowContent);
    
    // Generate and install setup command
    const setupContent = await generateCommand('setup', coreModules);
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
    
    // Create default project agents
    const agentCount = await createProjectAgents(options.targetDir);
    console.log(`📦 Created ${agentCount} project agents in .claude/agents/guild/`);
    
    outro(`✅ Guild installed successfully!

📂 Location: ${commandsDir}
🎯 Commands:
  • /guild "task" - Main workflow command
  • /guild:setup - Create project agents

💡 Start with: /guild:setup to analyze your project`);
    
  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    process.exit(1);
  }
}

// Create default project agents
async function createProjectAgents(targetDir) {
  const agentsDir = path.join(targetDir, '.claude', 'agents', 'guild');
  const templatesDir = path.join(__dirname, 'guideline', 'templates', 'agents');
  
  // Ensure directory exists
  await fs.ensureDir(agentsDir);
  
  // Load agent templates if they exist
  let agentCount = 0;
  
  if (await fs.pathExists(templatesDir)) {
    const templates = await fs.readdir(templatesDir);
    
    for (const template of templates) {
      if (template.endsWith('.md')) {
        const content = await fs.readFile(path.join(templatesDir, template), 'utf-8');
        const agentName = template.replace('.md', '');
        
        // Write agent to project
        await fs.writeFile(path.join(agentsDir, `${agentName}.md`), content);
        agentCount++;
      }
    }
  } else {
    // Fallback: Create default agents if templates don't exist
    console.log('⚠️ Agent templates not found, creating minimal defaults...');
    
    const defaultAgent = `---
name: general-purpose
description: General purpose assistant for various tasks
tools: Read, Edit, Write, Grep, Glob, Bash
---

You are a general purpose assistant ready to help with various development tasks.

## Verification Requirements
- Always verify task completion
- Check for implementation gaps
- Report any issues found`;
    
    await fs.writeFile(path.join(agentsDir, 'general-purpose.md'), defaultAgent);
    agentCount = 1;
  }
  
  return agentCount;
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
async function generateCommand(type, coreModules) {
  const templatePath = path.join(__dirname, 'guideline', 'templates', `${type}-command.md`);
  let template = await fs.readFile(templatePath, 'utf8');
  
  // Embed core module intelligence if available
  if (Object.keys(coreModules).length > 0) {
    let embedded = '\n\n## 📚 EMBEDDED CORE INTELLIGENCE\n\n';
    
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