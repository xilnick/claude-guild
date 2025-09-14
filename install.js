#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { select, intro, outro, isCancel, cancel } = require('@clack/prompts');

// Parallel tool compliance validation patterns
const PARALLEL_COMPLIANCE_PATTERNS = {
  DETAILED_PARALLEL: /<use_parallel_tool_calls>\s*For maximum efficiency, whenever you perform multiple independent operations, invoke all relevant tools simultaneously rather than sequentially\./,
  SYSTEM_CAPABILITY: /You have the capability to call multiple tools in a single response\./,
  TB001_REFERENCE: /@config:TB001|tool-parallelization|parallel.*tool/i
};

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
    
    // Load all intelligence modules (3-module architecture)
    const sharedIntelligence = await loadSharedIntelligence();
    const setupIntelligence = await loadSetupIntelligence();
    const workflowIntelligence = await loadWorkflowIntelligence();
    const frameworkModule = await loadFrameworkModule();

    // Generate and install commands with command-specific intelligence embedding
    const workflowContent = await generateCommand('workflow', {
      sharedIntelligence,
      commandIntelligence: workflowIntelligence,
      frameworkModule
    });
    await fs.writeFile(path.join(guildDir, 'workflow.md'), workflowContent);

    const setupContent = await generateCommand('setup', {
      sharedIntelligence,
      commandIntelligence: setupIntelligence,
      frameworkModule
    });
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

// Load shared intelligence directly from shared-intelligence.md
async function loadSharedIntelligence() {
  const sharedIntelligencePath = path.join(__dirname, 'guideline', 'core', 'shared-intelligence.md');

  if (await fs.pathExists(sharedIntelligencePath)) {
    const content = await fs.readFile(sharedIntelligencePath, 'utf-8');
    // Remove the title and return the content
    return content.replace(/^# Shared Intelligence\n+/m, '').trim();
  }

  throw new Error('shared-intelligence.md not found - required for Guild system');
}

// Load setup-specific intelligence from setup-intelligence.md
async function loadSetupIntelligence() {
  const setupIntelligencePath = path.join(__dirname, 'guideline', 'core', 'setup-intelligence.md');

  if (await fs.pathExists(setupIntelligencePath)) {
    const content = await fs.readFile(setupIntelligencePath, 'utf-8');
    // Remove the title and return the content
    return content.replace(/^# Setup Intelligence\n+/m, '').trim();
  }

  throw new Error('setup-intelligence.md not found - required for setup commands');
}

// Load workflow-specific intelligence from workflow-intelligence.md
async function loadWorkflowIntelligence() {
  const workflowIntelligencePath = path.join(__dirname, 'guideline', 'core', 'workflow-intelligence.md');

  if (await fs.pathExists(workflowIntelligencePath)) {
    const content = await fs.readFile(workflowIntelligencePath, 'utf-8');
    // Remove the title and return the content
    return content.replace(/^# Workflow Intelligence\n+/m, '').trim();
  }

  throw new Error('workflow-intelligence.md not found - required for workflow commands');
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

// Command generation with intelligence embedding via placeholder replacement (3-module architecture)
async function generateCommand(type, intelligenceModules) {
  const templatePath = path.join(__dirname, 'guideline', 'templates', `${type}-command.md`);
  let template = await fs.readFile(templatePath, 'utf8');

  // Replace placeholders with command-specific and shared intelligence
  template = await replacePlaceholders(template, type, intelligenceModules);

  // Validate parallel tool compliance during generation
  await validateGeneratedCommandCompliance(template, type);

  return template;
}

// Replace template placeholders with intelligence content (3-module architecture)
async function replacePlaceholders(template, commandType, intelligenceModules) {
  const { sharedIntelligence, commandIntelligence, frameworkModule } = intelligenceModules;
  let result = template;

  // Replace framework compliance placeholder if it exists
  if (frameworkModule) {
    const frameworkRegex = /<!-- INTELLIGENCE_EMBEDDING_PLACEHOLDER:FRAMEWORK_COMPLIANCE -->[\s\S]*?<!-- This placeholder.*?-->/g;
    result = result.replace(frameworkRegex, frameworkModule.trim());
  }

  // Embed command-specific intelligence
  result += '\n\n<!-- COMMAND-SPECIFIC INTELLIGENCE EMBEDDING -->\n';
  result += commandIntelligence.trim();

  // Embed shared intelligence
  result += '\n\n<!-- SHARED INTELLIGENCE EMBEDDING -->\n';
  result += sharedIntelligence.trim();

  // Add integration protocol at the end
  result += '\n\n' + buildIntegrationProtocol(commandType);

  return result;
}

// Validate generated command for parallel tool compliance
async function validateGeneratedCommandCompliance(commandContent, commandType) {
  console.log(`🔍 Validating parallel tool compliance for ${commandType} command...`);

  const compliance = {
    detailedParallel: PARALLEL_COMPLIANCE_PATTERNS.DETAILED_PARALLEL.test(commandContent),
    systemCapability: PARALLEL_COMPLIANCE_PATTERNS.SYSTEM_CAPABILITY.test(commandContent),
    tb001Reference: PARALLEL_COMPLIANCE_PATTERNS.TB001_REFERENCE.test(commandContent)
  };

  const complianceScore = Object.values(compliance).filter(Boolean).length;
  const totalChecks = Object.keys(compliance).length;

  if (complianceScore < totalChecks) {
    console.log(`⚠️  ${commandType} command compliance: ${complianceScore}/${totalChecks} checks passed`);

    if (!compliance.detailedParallel) {
      console.log('   • Missing detailed parallel tool execution prompt');
    }
    if (!compliance.systemCapability) {
      console.log('   • Missing system capability description');
    }
    if (!compliance.tb001Reference) {
      console.log('   • Missing TB001 framework references');
    }

    console.log('   ℹ️  Note: Compliance issues may be resolved through embedded intelligence modules');
  } else {
    console.log(`✅ ${commandType} command fully compliant with parallel tool execution standards`);
  }
}

// Integration protocol with 3-module intelligence architecture support
function buildIntegrationProtocol(commandType) {
  let protocol = '<integration_protocol>\n';

  // Official Anthropic parallel tool execution standards (from recommendations.md)
  protocol += '<system_prompt>\n';
  protocol += 'You have the capability to call multiple tools in a single response.\n';
  protocol += 'When multiple independent pieces of information are requested,\n';
  protocol += 'batch your tool calls together for optimal performance.\n\n';
  protocol += '<use_parallel_tool_calls>\n';
  protocol += 'For maximum efficiency, whenever you perform multiple independent operations, ';
  protocol += 'invoke all relevant tools simultaneously rather than sequentially. ';
  protocol += 'Prioritize calling tools in parallel whenever possible. ';
  protocol += 'For example, when reading 3 files, run 3 tool calls in parallel to read all 3 files into context at the same time. ';
  protocol += 'When running multiple read-only commands like `ls` or `list_dir`, always run all of the commands in parallel. ';
  protocol += 'Err on the side of maximizing parallel tool calls rather than running too many tools sequentially.\n';
  protocol += '</use_parallel_tool_calls>\n';
  protocol += '</system_prompt>\n\n';

  // 3-Module Intelligence Architecture Context
  protocol += '<intelligence_architecture>\n';
  protocol += `APPLY [${commandType}-specific-intelligence] through [command-optimized-patterns] and [specialized-coordination].\n`;
  protocol += 'INTEGRATE [shared-intelligence-patterns] through [cross-command-compliance] and [universal-coordination].\n';
  protocol += 'MAINTAIN [framework-dimensional-compliance] through [systematic-intelligence-application].\n';
  protocol += '</intelligence_architecture>\n\n';

  // Command-specific context
  protocol += `<command_context type="${commandType}">\n`;
  if (commandType === 'setup') {
    protocol += 'EXECUTE [project-discovery] through [parallel-analysis] and [systematic-assessment].\n';
    protocol += 'GENERATE [domain-specialists] based on [discovered-requirements] and [project-complexity].\n';
    protocol += 'APPLY [setup-intelligence-patterns] through [creation-focused-coordination] and [generation-optimization].\n';
  } else if (commandType === 'workflow') {
    protocol += 'COORDINATE [specialist-assignment] through [parallel-delegation] and [systematic-execution].\n';
    protocol += 'ORCHESTRATE [task-workflows] through [concurrent-specialist-streams] and [integration-checkpoints].\n';
    protocol += 'APPLY [workflow-intelligence-patterns] through [execution-focused-coordination] and [performance-optimization].\n';
  }
  protocol += '</command_context>\n\n';

  // Core execution requirements
  protocol += '<execution_requirements>\n';
  protocol += 'EXECUTE [parallel-tool-operations] simultaneously unless [proven-dependencies] require serialization.\n';
  protocol += 'APPLY [TB001-parallel-tool-mandate] through [anthropic-system-prompt-compliance] and [use-parallel-tool-calls-execution].\n';
  protocol += 'MAINTAIN [framework-dimensional-compliance] through [systematic-intelligence-application].\n';
  protocol += 'APPLY [command-specific-intelligence] + [shared-intelligence-patterns] through [integrated-coordination].\n';
  protocol += 'ENFORCE [3-module-architecture-compliance] through [setup-intelligence] + [workflow-intelligence] + [shared-intelligence].\n';
  protocol += 'PRIORITIZE [simultaneous-over-sequential-execution] through [official-anthropic-parallel-standards].\n';
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