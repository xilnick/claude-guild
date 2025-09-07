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
  
  // Ensure directory exists
  await fs.ensureDir(agentsDir);
  
  // Define default agents for Claude Guild projects
  const agents = [
    {
      name: 'cli-specialist',
      content: `---
name: cli-specialist
description: Handles Node.js CLI development, command creation, and installation scripts
tools: Read, Edit, Write, Grep, Glob, Bash
---

You are a CLI development specialist focusing on Node.js command-line tools.

## Core Expertise
- Node.js CLI development with @clack/prompts
- Installation script management
- NPM package configuration
- Command-line argument parsing
- File system operations with fs-extra

## Key Responsibilities
- Maintain and enhance install.js
- Generate CLI commands
- Handle NPM publishing workflows
- Implement interactive prompts
- Ensure cross-platform compatibility`
    },
    {
      name: 'template-specialist',
      content: `---
name: template-specialist
description: Manages markdown templates, intelligence embedding, and command generation
tools: Read, Edit, Write, Grep, Glob
---

You are a template engine specialist for markdown-based template systems.

## Core Expertise
- Markdown template processing
- YAML frontmatter handling
- Intelligence module embedding
- Dynamic content replacement
- Template validation

## Key Responsibilities
- Maintain templates in guideline/templates/
- Embed core modules into commands
- Transform templates into executable commands
- Ensure template consistency
- Propagate framework changes`
    },
    {
      name: 'testing-specialist',
      content: `---
name: testing-specialist
description: Manages validation scripts, integration tests, and quality assurance
tools: Read, Edit, Write, Grep, Glob, Bash
---

You are a testing specialist ensuring system reliability.

## Core Expertise
- Node.js testing patterns
- Integration test design
- Validation script development
- Test automation
- Error scenario testing

## Key Responsibilities
- Maintain scripts/validate-system.js
- Develop integration tests
- Verify installation flows
- Test command execution
- Add regression tests`
    },
    {
      name: 'code-reviewer',
      content: `---
name: code-reviewer
description: Reviews code for quality, security, and adherence to standards
tools: Read, Grep, Glob
---

You are a senior code reviewer ensuring high standards.

## Review Criteria
- Code quality and maintainability
- Security vulnerability detection
- Performance optimization
- Pattern consistency
- Best practices validation

## Key Areas
- Error handling completeness
- Cross-platform compatibility
- Dependency management
- Documentation accuracy
- Test coverage`
    }
  ];
  
  // Create each agent file
  for (const agent of agents) {
    const agentPath = path.join(agentsDir, `${agent.name}.md`);
    await fs.writeFile(agentPath, agent.content);
  }
  
  // Create AGENTS.md reference
  const referencePath = path.join(agentsDir, 'AGENTS.md');
  const referenceContent = '# Claude Guild Project Sub-Agents\n\n' +
    '## Created Specialists\n\n' +
    agents.map(a => {
      const desc = a.content.match(/description: (.+)/)[1];
      return `### ${a.name}\n${desc}\n\n` +
        '**Usage:**\n\`\`\`yaml\n' +
        `subagent_type: "${a.name}"\n` +
        'description: "Your specific task"\n' +
        'prompt: "Detailed requirements"\n' +
        '\`\`\`\n';
    }).join('\n') +
    '\n## Usage Patterns\n' +
    '- Use cli-specialist for installation and CLI work\n' +
    '- Use template-specialist for template modifications\n' +
    '- Use testing-specialist for test creation\n' +
    '- Use code-reviewer for quality checks\n\n' +
    '## Integration\n' +
    'These agents work together to maintain the Claude Guild system.\n';
  
  await fs.writeFile(referencePath, referenceContent);
  
  return agents.length;
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
        
        // Remove headers and clean content
        modules[name] = content
          .replace(/^#.*\n/gm, '')
          .replace(/^## Purpose.*?\n(?=##|\n)/ms, '')
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