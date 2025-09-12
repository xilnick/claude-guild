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



// Load core modules for embedding in commands
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

// Aggressive module relevance mapping for maximum context reduction
const moduleRelevance = {
  'setup': {
    required: ['chain-of-thought'], // Only thinking patterns for setup analysis
    optional: [], // No optional modules
    exclude: ['tool-patterns', 'verification', 'quality-standards', 'decision-authority', 'multishot-patterns', 'shared-configs']
  },
  'workflow': {
    required: ['verification'], // Only verification for workflow quality gates
    optional: [], // No optional modules
    exclude: ['chain-of-thought', 'tool-patterns', 'quality-standards', 'decision-authority', 'multishot-patterns', 'shared-configs']
  }
};

// Smart command generation with aggressive optimization and breaking changes
async function generateCommand(type, coreModules, frameworkModule) {
  const templatePath = path.join(__dirname, 'guideline', 'templates', `${type}-command.md`);
  let template = await fs.readFile(templatePath, 'utf8');
  
  // Smart module filtering - BREAKING CHANGE: Only relevant modules embedded
  const relevantModules = filterModulesByCommand(type, coreModules);
  
  // Framework optimization - Extract only relevant sections
  const optimizedFramework = extractRelevantFrameworkSections(type, frameworkModule);
  
  // Context optimization: Place important context early with smart structure
  let embedded = '\n\n<guild_intelligence>\n';
  
  if (optimizedFramework) {
    embedded += '<framework_guidance>\n';
    embedded += optimizedFramework + '\n';
    embedded += '</framework_guidance>\n\n';
  }
  
  // Smart core modules with relevance-based filtering
  if (Object.keys(relevantModules).length > 0) {
    embedded += '<core_modules>\n';
    Object.entries(relevantModules).forEach(([name, content]) => {
      embedded += `<module name="${name}" relevance="high">\n`;
      embedded += content + '\n';
      embedded += `</module>\n\n`;
    });
    embedded += '</core_modules>\n\n';
  }
  
  // Enhanced integration protocol with Anthropic system prompts - BREAKING CHANGE
  embedded += buildEnhancedIntegrationProtocol(type, Object.keys(relevantModules));
  
  embedded += '</guild_intelligence>\n';
  
  template += embedded;
  return template;
}

// Smart module filtering function
function filterModulesByCommand(commandType, allModules) {
  const config = moduleRelevance[commandType];
  if (!config) return allModules; // Fallback for unknown commands
  
  const filteredModules = {};
  
  // Add required modules
  config.required.forEach(moduleName => {
    if (allModules[moduleName]) {
      filteredModules[moduleName] = allModules[moduleName];
    }
  });
  
  // Add optional modules if available and not too large
  config.optional.forEach(moduleName => {
    if (allModules[moduleName] && shouldIncludeOptional(allModules[moduleName])) {
      filteredModules[moduleName] = allModules[moduleName];
    }
  });
  
  return filteredModules;
}

// Determine if optional module should be included based on size
function shouldIncludeOptional(moduleContent) {
  const lines = moduleContent.split('\n').length;
  return lines < 50; // Only include small optional modules
}

// Extract relevant framework sections for command type
function extractRelevantFrameworkSections(commandType, frameworkContent) {
  if (!frameworkContent) return null;
  
  // For aggressive optimization, extract key sections only
  const sections = frameworkContent.split('\n');
  const relevantSections = [];
  
  // Always include core principles and dimensional framework
  let inRelevantSection = false;
  let currentSection = '';
  
  sections.forEach(line => {
    if (line.includes('<core_philosophy>') || 
        line.includes('<dimensional_framework>') ||
        line.includes('<intelligence_standards>')) {
      inRelevantSection = true;
      currentSection = line;
    } else if (line.includes('</core_philosophy>') || 
               line.includes('</dimensional_framework>') ||
               line.includes('</intelligence_standards>')) {
      inRelevantSection = false;
      currentSection += '\n' + line;
      relevantSections.push(currentSection);
      currentSection = '';
    } else if (inRelevantSection) {
      currentSection += '\n' + line;
    }
  });
  
  return relevantSections.join('\n\n');
}

// Enhanced integration protocol with Anthropic system prompts and command-specific guidance
function buildEnhancedIntegrationProtocol(commandType, moduleNames) {
  let protocol = '<integration_protocol>\n';
  
  // Anthropic's official parallel tool execution prompt - BREAKING CHANGE
  protocol += '<use_parallel_tool_calls>\n';
  protocol += 'For maximum efficiency, whenever you perform multiple independent operations, ';
  protocol += 'invoke all relevant tools simultaneously rather than sequentially. ';
  protocol += 'Prioritize calling tools in parallel whenever possible. ';
  protocol += 'Err on the side of maximizing parallel tool calls rather than running too many tools sequentially.\n';
  protocol += '</use_parallel_tool_calls>\n\n';
  
  // Command-specific guidance - BREAKING CHANGE
  protocol += `<command_context type="${commandType}">\n`;
  if (commandType === 'setup') {
    protocol += 'ANALYZE [project-structure] through [systematic-discovery] with parallel tool execution.\n';
    protocol += 'CREATE [specialists] based on discovered [project-needs] and [complexity-assessment].\n';
  } else if (commandType === 'workflow') {
    protocol += 'COORDINATE [specialists] through [parallel-delegation] and [systematic-execution].\n';
    protocol += 'EXECUTE [tasks] through multiple [specialist-streams] with [integration-points].\n';
  }
  protocol += '</command_context>\n\n';
  
  // Module-specific application patterns
  protocol += '<module_application>\n';
  moduleNames.forEach(moduleName => {
    protocol += `Apply [${moduleName}] through ${getModulePurpose(moduleName, commandType)}.\n`;
  });
  protocol += '</module_application>\n\n';
  
  // Core requirements with parallelization emphasis
  protocol += '<execution_requirements>\n';
  protocol += 'EXECUTE multiple [tool-operations] simultaneously unless proven [dependencies] exist.\n';
  protocol += 'MAINTAIN [abstraction-compliance] with [placeholder] patterns throughout execution.\n';
  protocol += 'APPLY [framework-guidance] through [systematic-intelligence] with [parallel-coordination].\n';
  protocol += '</execution_requirements>\n';
  
  protocol += '</integration_protocol>\n';
  
  return protocol;
}

// Get module purpose for specific command context
function getModulePurpose(moduleName, commandType) {
  const purposes = {
    'setup': {
      'chain-of-thought': '[systematic-analysis] and [project-discovery]',
      'tool-patterns': '[parallel-tool-coordination] and [capability-assessment]',
      'verification': '[setup-validation] and [specialist-readiness]',
      'multishot-patterns': '[example-driven] [specialist-creation]'
    },
    'workflow': {
      'verification': '[quality-assurance] and [completion-validation]',
      'quality-standards': '[excellence-enforcement] and [systematic-verification]',
      'tool-patterns': '[parallel-execution] and [performance-optimization]',
      'decision-authority': '[governance-coordination] and [authority-structures]'
    }
  };
  
  return purposes[commandType]?.[moduleName] || '[systematic-coordination]';
}

// Run installation
if (require.main === module) {
  install().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = { install };