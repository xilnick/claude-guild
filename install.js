#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { select, intro, outro, isCancel, cancel } = require('@clack/prompts');

// Import Universal Guild utility modules for concrete implementation
let PatternDiscoveryEngine, AgentGenerator, PatternRegistry, ContextManager, UltrathinkingEngine;

try {
  // Dynamically import utility modules if available
  const patternDiscovery = require('./scripts/utilities/pattern-discovery.js');
  const agentGenerator = require('./scripts/utilities/agent-generator.js');
  const patternRegistry = require('./scripts/utilities/pattern-registry.js');
  const contextManager = require('./scripts/utilities/context-manager.js');
  const ultrathinking = require('./scripts/utilities/ultrathinking.js');
  
  PatternDiscoveryEngine = patternDiscovery.PatternDiscoveryEngine;
  AgentGenerator = agentGenerator.AgentGenerator;
  PatternRegistry = patternRegistry.PatternRegistry;
  ContextManager = contextManager.ContextManager;
  UltrathinkingEngine = ultrathinking.UltrathinkingEngine;
  
  console.log('✅ Universal Guild utility modules loaded');
} catch (error) {
  console.log('📝 Universal Guild utility modules not found - using template-based generation');
}

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

    // Load 3-module intelligence architecture
    const sharedIntelligence = await loadSharedIntelligence();
    const setupIntelligence = await loadSetupIntelligence();
    const workflowIntelligence = await loadWorkflowIntelligence();
    const frameworkModule = await loadFrameworkModule();

    // Generate agent inventory for workflow command
    const agentInventory = await generateAgentInventory(options.targetDir);

    // Generate and install commands with 3-module intelligence embedding
    const workflowContent = await generateCommand('workflow', {
      sharedIntelligence,
      commandIntelligence: workflowIntelligence,
      agentInventory,
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

// Enhanced agent inventory generation with optional pattern discovery
async function generateAgentInventory(targetDir) {
  const agentsGuildPath = path.join(targetDir, '.claude', 'agents', 'guild');

  if (!await fs.pathExists(agentsGuildPath)) {
    console.log('📋 No existing agent inventory found - checking for dynamic generation...');
    
    // If Universal Guild utilities are available, attempt pattern-based generation
    if (PatternDiscoveryEngine && AgentGenerator) {
      return await generateDynamicAgentInventory(targetDir);
    }
    
    return generateEmptyInventory();
  }

  console.log('🔍 Scanning existing agent inventory...');

  const { glob } = require('glob');
  const agentFiles = await glob('**/*.md', { cwd: agentsGuildPath });

  const inventory = {
    totalAgents: agentFiles.length,
    agentsByCategory: {},
    agentsByName: {},
    capabilities: [],
    scanTimestamp: new Date().toISOString()
  };

  for (const agentFile of agentFiles) {
    try {
      const fullPath = path.join(agentsGuildPath, agentFile);
      const content = await fs.readFile(fullPath, 'utf-8');

      // Extract agent info from file path and content
      const pathParts = agentFile.split('/');
      const category = pathParts[0] || 'uncategorized';
      const agentName = path.basename(agentFile, '.md');

      // Extract description from YAML frontmatter if present
      const descriptionMatch = content.match(/description:\s*"([^"]+)"/);
      const description = descriptionMatch ? descriptionMatch[1] : `${category} specialist`;

      // Categorize agent
      if (!inventory.agentsByCategory[category]) {
        inventory.agentsByCategory[category] = [];
      }

      const agentInfo = {
        name: agentName,
        category: category,
        filePath: agentFile,
        description: description,
        subagentType: agentName // Use filename as subagent type
      };

      inventory.agentsByCategory[category].push(agentInfo);
      inventory.agentsByName[agentName] = agentInfo;
      inventory.capabilities.push(description);

    } catch (error) {
      console.log(`⚠️  Warning: Could not process agent file ${agentFile}: ${error.message}`);
    }
  }

  console.log(`✅ Found ${inventory.totalAgents} agents across ${Object.keys(inventory.agentsByCategory).length} categories`);

  return inventory;
}

// Generate dynamic agent inventory using Universal Guild utilities
async function generateDynamicAgentInventory(targetDir) {
  console.log('🧠 Generating dynamic agent inventory using pattern discovery...');
  
  try {
    // Initialize pattern discovery system
    const discoveryEngine = new PatternDiscoveryEngine(targetDir);
    const patternRegistry = new PatternRegistry(targetDir);
    
    // Discover project patterns
    console.log('🔍 Discovering project patterns...');
    const patterns = await discoveryEngine.discoverPatterns();
    
    // Initialize pattern registry
    await patternRegistry.initialize();
    
    // Register discovered patterns
    await patternRegistry.registerPatterns(patterns, patterns.projectSignature);
    
    // Generate agents based on discovered patterns
    console.log('🤖 Generating agents from discovered patterns...');
    const agentGenerator = new AgentGenerator(patterns, targetDir);
    const agentSpecs = await agentGenerator.generateAgents();
    
    // Create agent files
    await agentGenerator.createAgentFiles();
    
    // Build inventory from generated agents
    const inventory = {
      totalAgents: agentSpecs.length,
      agentsByCategory: {},
      agentsByName: {},
      capabilities: [],
      scanTimestamp: new Date().toISOString(),
      generationMethod: 'pattern-discovery',
      discoveredPatterns: {
        structural: patterns.structural,
        content: patterns.content,
        behavioral: patterns.behavioral,
        dependencies: patterns.dependencies,
        projectSignature: patterns.projectSignature
      }
    };
    
    // Organize agents by category
    agentSpecs.forEach(agentSpec => {
      const category = agentSpec.category;
      
      if (!inventory.agentsByCategory[category]) {
        inventory.agentsByCategory[category] = [];
      }
      
      const agentInfo = {
        name: agentSpec.name,
        category: category,
        filePath: `${category}/${agentSpec.name}.md`,
        description: agentSpec.description,
        subagentType: agentSpec.name,
        capabilities: agentSpec.capabilities,
        complexity: agentSpec.complexity,
        tools: agentSpec.tools
      };
      
      inventory.agentsByCategory[category].push(agentInfo);
      inventory.agentsByName[agentSpec.name] = agentInfo;
      inventory.capabilities = inventory.capabilities.concat(agentSpec.capabilities);
    });
    
    console.log(`✅ Generated ${inventory.totalAgents} dynamic agents based on discovered patterns`);
    
    return inventory;
    
  } catch (error) {
    console.error('❌ Dynamic agent generation failed:', error.message);
    console.log('📋 Falling back to empty inventory');
    return generateEmptyInventory();
  }
}

// Generate empty inventory for fallback when no agents exist
function generateEmptyInventory() {
  return {
    totalAgents: 0,
    agentsByCategory: {},
    agentsByName: {},
    capabilities: [],
    scanTimestamp: new Date().toISOString(),
    fallbackOnly: true
  };
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

// Replace template placeholders with 3-module intelligence content
async function replacePlaceholders(template, commandType, intelligenceModules) {
  const { sharedIntelligence, commandIntelligence, frameworkModule, agentInventory } = intelligenceModules;
  let result = template;

  // Replace framework compliance placeholder if it exists
  if (frameworkModule) {
    const frameworkRegex = /<!-- INTELLIGENCE_EMBEDDING_PLACEHOLDER:FRAMEWORK_COMPLIANCE -->[\s\S]*?<!-- This placeholder.*?-->/g;
    result = result.replace(frameworkRegex, frameworkModule.trim());
  }

  // Replace agent discovery placeholder if it exists (workflow command only)
  if (commandType === 'workflow' && agentInventory) {
    const agentDiscoveryRegex = /<!-- INTELLIGENCE_EMBEDDING_PLACEHOLDER:AGENT_DISCOVERY -->[\s\S]*?<!-- This placeholder.*?-->/g;
    const agentDiscoveryContent = buildAgentDiscoveryContent(agentInventory);
    result = result.replace(agentDiscoveryRegex, agentDiscoveryContent);
  }

  // Embed command-specific intelligence
  result += '\n\n<!-- COMMAND-SPECIFIC INTELLIGENCE EMBEDDING -->\n';
  result += commandIntelligence.trim();

  // Embed shared intelligence (includes parallel tool enforcement)
  result += '\n\n<!-- SHARED INTELLIGENCE EMBEDDING -->\n';
  result += sharedIntelligence.trim();

  // Add integration protocol at the end
  result += '\n\n' + buildIntegrationProtocol(commandType, agentInventory);

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

// Build agent discovery content with embedded inventory
function buildAgentDiscoveryContent(agentInventory) {
  let content = '## Agent Discovery Intelligence\n\n';
  content += 'Agent discovery and utilization intelligence is now integrated into workflow-intelligence.md.\n\n';

  // Add embedded agent inventory information
  content += '## Embedded Agent Inventory\n\n';

  if (agentInventory.fallbackOnly) {
    content += '**Agent Inventory Status**: No existing agents found - using fallback-only mode\n';
    content += '- **Total Available Agents**: 0\n';
    content += '- **Fallback Strategy**: All tasks will use general-purpose Task tool deployment\n';
    content += '- **Discovery Result**: Will always trigger general-purpose agent creation\n';
  } else {
    content += `**Agent Inventory Status**: ${agentInventory.totalAgents} agents discovered across ${Object.keys(agentInventory.agentsByCategory).length} categories\n`;
    content += `- **Scan Timestamp**: ${agentInventory.scanTimestamp}\n`;
    content += '- **Available Categories**:\n';

    for (const [category, agents] of Object.entries(agentInventory.agentsByCategory)) {
      content += `  - **${category}**: ${agents.length} agents\n`;
      for (const agent of agents) {
        content += `    - ${agent.name}: ${agent.description}\n`;
      }
    }

    content += '\n**Task-to-Agent Mapping Guidelines**:\n';
    for (const [agentName, agentInfo] of Object.entries(agentInventory.agentsByName)) {
      content += `- **${agentName}** (subagent_type: "${agentInfo.subagentType}"): ${agentInfo.description}\n`;
    }
  }

  return content;
}

// Integration protocol with 3-module intelligence architecture support
function buildIntegrationProtocol(commandType, agentInventory) {
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
    protocol += 'DISCOVER [existing-agent-inventory] immediately upon request receipt through [rapid-scanning] and [capability-assessment].\n';
    protocol += 'COORDINATE [specialist-assignment] through [discovery-enhanced-parallel-delegation] and [systematic-execution].\n';
    protocol += 'ORCHESTRATE [task-workflows] through [concurrent-specialist-streams], [agent-reuse-optimization], and [integration-checkpoints].\n';
    protocol += 'APPLY [workflow-intelligence-patterns] through [execution-focused-coordination], [agent-utilization-optimization], and [performance-optimization].\n';

    // Add agent inventory context if available
    if (agentInventory && !agentInventory.fallbackOnly) {
      protocol += `UTILIZE [embedded-agent-inventory] containing ${agentInventory.totalAgents} discovered specialists across ${Object.keys(agentInventory.agentsByCategory).length} categories.\n`;
      protocol += 'PRIORITIZE [existing-specialist-utilization] over [general-purpose-fallback] through [intelligent-task-matching].\n';
    } else {
      protocol += 'FALLBACK [general-purpose-creation] due to [no-existing-agents] through [dynamic-specialist-generation].\n';
    }
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

module.exports = {
  install,
  generateAgentInventory,
  generateEmptyInventory,
  buildAgentDiscoveryContent
};