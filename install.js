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
    
    // Ensure categorized agent directories exist
    const agentsBaseDir = path.join(options.targetDir, '.claude', 'agents', 'guild');
    await fs.ensureDir(agentsBaseDir);
    
    // Create standard category directories for agent organization
    const standardCategories = [
      'frontend', 'backend', 'database', 'api',
      'testing', 'security', 'performance', 'quality',
      'deployment', 'monitoring', 'infrastructure',
      'documentation', 'refactoring', 'maintenance'
    ];
    
    for (const category of standardCategories) {
      await fs.ensureDir(path.join(agentsBaseDir, category));
    }
    
    outro(`✅ Guild installed successfully!

📂 Location: ${commandsDir}
🎯 Commands:
  • /guild "task" - Main workflow command
  • /guild:setup - Create agent team

🚀 Features:
  • Streamlined command generation
  • Essential Guild functionality
  • Tool Use Implementation compliance
  • Simple error handling

💡 Start with: /guild:setup to create your agent team`);
    
  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    process.exit(1);
  }
}



// Load core modules for embedding with shared resource support
async function loadCoreModules() {
  const modules = {};
  const coreDir = path.join(__dirname, 'guideline', 'core');
  
  // Load shared resources first
  const sharedResources = await loadSharedResources();
  
  if (await fs.pathExists(coreDir)) {
    const files = await fs.readdir(coreDir);
    
    for (const file of files) {
      if (file.endsWith('.md') && file !== 'README.md' && !isSharedResourceFile(file)) {
        const content = await fs.readFile(path.join(coreDir, file), 'utf-8');
        const name = file.replace('.md', '');
        
        // Resolve shared resource references in module content
        const resolvedContent = resolveSharedReferences(content, sharedResources);
        modules[name] = resolvedContent.replace(/^# .*\n+/m, '').trim();
      }
    }
  }
  
  return modules;
}

// Load shared resources (configurations, targets, patterns)
async function loadSharedResources() {
  const resources = {
    configs: {},
    targets: {},
    patterns: {},
    specialists: {}
  };
  
  const coreDir = path.join(__dirname, 'guideline', 'core');
  
  // Load shared configurations
  const sharedConfigsPath = path.join(coreDir, 'shared-configs.md');
  if (await fs.pathExists(sharedConfigsPath)) {
    const content = await fs.readFile(sharedConfigsPath, 'utf-8');
    resources.configs = extractSharedConfigurations(content);
  }
  
  // Load compliance targets
  const complianceTargetsPath = path.join(coreDir, 'compliance-targets.md');
  if (await fs.pathExists(complianceTargetsPath)) {
    const content = await fs.readFile(complianceTargetsPath, 'utf-8');
    resources.targets = extractComplianceTargets(content);
  }
  
  // Load other shared resources (enforcement patterns, specialists, etc.)
  // These will be created in future phases
  
  return resources;
}

// Check if a file is a shared resource file
function isSharedResourceFile(filename) {
  const sharedResourceFiles = [
    'shared-configs.md',
    'compliance-targets.md',
    'enforcement-patterns.md',
    'specialist-catalog.md',
    'integration-patterns.md'
  ];
  return sharedResourceFiles.includes(filename);
}

// Extract shared configurations from shared-configs.md
function extractSharedConfigurations(content) {
  const configs = {};
  
  // Extract configuration blocks with IDs (AG001, PE001, etc.)
  const configRegex = /### ([A-Z]+\d+): ([^\n]+)\n```yaml\n([\s\S]*?)\n```/g;
  let match;
  
  while ((match = configRegex.exec(content)) !== null) {
    const [, id, title, yamlContent] = match;
    configs[id] = {
      id,
      title,
      yaml: yamlContent,
      category: categorizeConfigurationId(id)
    };
  }
  
  return configs;
}

// Categorize configuration by ID prefix
function categorizeConfigurationId(id) {
  const prefix = id.match(/^[A-Z]+/)?.[0];
  switch (prefix) {
    case 'AG': return 'agent-mandatory';
    case 'PE': return 'parallel-execution';
    case 'RP': return 'research-protocol';
    case 'TB': return 'tool-batching';
    case 'MCP': return 'mcp-optimization';
    case 'VF': return 'verification';
    case 'CM': return 'compliance-monitoring';
    default: return 'general';
  }
}

// Resolve shared resource references in module content
function resolveSharedReferences(content, sharedResources) {
  let resolvedContent = content;
  
  // Resolve configuration references (@config:AG001, etc.)
  const configRefRegex = /@config:([A-Z]+\d+)/g;
  resolvedContent = resolvedContent.replace(configRefRegex, (match, configId) => {
    const config = sharedResources.configs[configId];
    if (config) {
      return `**${config.title}:**\n\`\`\`yaml\n${config.yaml}\n\`\`\``;
    }
    return match; // Keep original reference if not found
  });
  
  // Resolve target references (@target:AG95, etc.)
  const targetRefRegex = /@target:([A-Z]+\d+)/g;
  resolvedContent = resolvedContent.replace(targetRefRegex, (match, targetId) => {
    const target = sharedResources.targets[targetId];
    if (target) {
      return target.description || target.value || match;
    }
    return match; // Keep original reference if not found
  });
  
  return resolvedContent;
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

// Enhanced semantic intelligence extraction functions with YAML preservation
function extractYAMLBlocks(content) {
  const yamlBlocks = [];
  
  // Enhanced YAML extraction with context preservation
  const yamlRegex = /```yaml\n([\s\S]*?)\n```/g;
  let match;
  while ((match = yamlRegex.exec(content)) !== null) {
    const yamlContent = match[1];
    
    // Extract context before the YAML block for better understanding
    const contentBeforeMatch = content.substring(0, match.index);
    const contextMatch = contentBeforeMatch.match(/\*\*([^*]+)\*\*:\s*$/);
    const context = contextMatch ? contextMatch[1] : null;
    
    yamlBlocks.push({
      content: yamlContent,
      context: context,
      raw: match[0]
    });
  }
  
  return yamlBlocks;
}

function extractComplianceTargets(content) {
  const targets = [];
  
  // Enhanced compliance target extraction with specific patterns
  const patterns = [
    // Direct percentage targets
    /target[_\s]*(\d+)[_\s]*percent|(\d+)%[_\s]*target/gi,
    // Compliance achievement patterns
    /(95|90|85|80)%[_\s]*(compliance|achievement|target|execution)/gi,
    // TARGET: labels with values
    /TARGET:\s*"([^"]*\d+[^"]*)"/gi,
    // ACHIEVED: labels with percentages
    /ACHIEVED:\s*"([^"]*\d+[^"]*)"/gi,
    // Specific Guild compliance targets
    /(agent_delegation_percentage|parallel_execution_percentage|research_gate_completion|tool_batching_efficiency):\s*"[^"]*(\d+)[^"]*"/gi
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      targets.push({
        text: match[0].trim(),
        percentage: match[1] || match[2] || match[3],
        category: categorizeTarget(match[0])
      });
    }
  });
  
  // Also extract compliance threshold configurations
  const thresholdRegex = /(threshold|target)[_\s]*:\s*"([^"]*(\d+)[^"]*)"/gi;
  let thresholdMatch;
  while ((thresholdMatch = thresholdRegex.exec(content)) !== null) {
    targets.push({
      text: thresholdMatch[0].trim(),
      percentage: thresholdMatch[3],
      category: 'threshold'
    });
  }
  
  return targets;
}

function categorizeTarget(targetText) {
  const text = targetText.toLowerCase();
  if (text.includes('agent') || text.includes('delegation')) return 'agent-mandatory';
  if (text.includes('parallel') || text.includes('batching')) return 'parallel-execution';
  if (text.includes('research') || text.includes('protocol')) return 'research-protocol';
  if (text.includes('optimization') || text.includes('efficiency')) return 'batching-optimization';
  return 'general';
}

function extractEnforcementPatterns(content) {
  const patterns = [];
  
  // Enhanced enforcement pattern extraction with better context
  const enforcementPatterns = [
    // YAML configuration blocks with enforcement
    /```yaml[\s\S]*?(enforcement|guard|firewall|block|mandatory)[\s\S]*?```/gi,
    // Enforcement sections with bullets
    /(MANDATORY|REQUIRED|ENFORCEMENT|FIREWALL|GUARD|BLOCK)[\s\S]*?(?=\n\n|\n###|\n\*\*[A-Z]|\nDELIVERABLES|\nEXECUTION|$)/gi,
    // Protocol definitions
    /\*\*[^*]*PROTOCOL[^*]*\*\*:[\s\S]*?(?=\n\n|\n###|\n\*\*[A-Z]|$)/gi,
    // Enforcement mechanisms lists
    /\*\*ENFORCEMENT[^*]*\*\*:[\s\S]*?(?=\n\n|\n###|\n\*\*[A-Z]|$)/gi
  ];
  
  enforcementPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const extracted = match[0].trim();
      if (extracted.length > 50) { // Filter out very short matches
        patterns.push({
          text: extracted,
          type: determineEnforcementType(extracted),
          hasYAML: extracted.includes('```yaml'),
          priority: determinePriority(extracted)
        });
      }
    }
  });
  
  return patterns;
}

function determineEnforcementType(pattern) {
  const text = pattern.toLowerCase();
  if (text.includes('firewall') || text.includes('guard')) return 'access-control';
  if (text.includes('monitoring') || text.includes('tracking')) return 'monitoring';
  if (text.includes('protocol') || text.includes('procedure')) return 'protocol';
  if (text.includes('yaml') && text.includes('```')) return 'configuration';
  return 'enforcement';
}

function determinePriority(pattern) {
  const text = pattern.toLowerCase();
  if (text.includes('critical') || text.includes('mandatory') || text.includes('required')) return 'high';
  if (text.includes('important') || text.includes('should')) return 'medium';
  return 'low';
}

function extractDecisionTrees(content) {
  const trees = [];
  
  // Extract numbered decision processes and workflows
  const treeRegex = /(\d+\.\s+\*\*[^*]+\*\*[\s\S]*?)(?=\n\d+\.\s+\*\*|\n\n###|\nDELIVERABLES|\nEXECUTION|$)/gi;
  let match;
  while ((match = treeRegex.exec(content)) !== null) {
    trees.push(match[1].trim());
  }
  
  return trees;
}

function extractCodePatterns(content) {
  const patterns = [];
  
  // Extract code examples and patterns
  const codeRegex = /```[\s\S]*?```/g;
  let match;
  while ((match = codeRegex.exec(content)) !== null) {
    patterns.push(match[0]);
  }
  
  return patterns;
}

// MCP-optimized intelligent compression with configurable levels
// Determine optimal MCP compression level based on module characteristics
function determineMCPCompressionLevel(module, type = 'command') {
  const contentLength = module.content ? module.content.length : 0;
  const priority = module.priority || 'medium';
  const category = module.category || 'general';
  
  // MCP-critical modules use comprehensive compression for optimal batching
  if (category.includes('mcp-') || priority === 'critical') {
    return 'mcp-comprehensive';
  }
  
  // Large MCP modules benefit from standard compression with optimization preservation
  if (contentLength > 10000) {
    return 'mcp-standard';
  }
  
  // Small MCP modules can use deployment compression for efficiency
  if (contentLength < 3000) {
    return 'mcp-deployment';
  }
  
  // Default to MCP standard compression for balanced approach
  return 'mcp-standard';
}

// Enhanced MCP intelligent compression
function intelligentCompressMCP(module, moduleName, compressionLevel = 'mcp-standard') {
  const intelligence = {
    name: moduleName,
    yamlConfigs: extractYAMLBlocks(module),
    enforcement: extractEnforcementPatterns(module),
    compliance: extractComplianceTargets(module),
    decisionTrees: extractDecisionTrees(module),
    codePatterns: extractCodePatterns(module),
    mcpOptimization: extractMCPOptimizationPatterns(module)
  };
  
  // Apply MCP-optimized compression based on level
  switch (compressionLevel) {
    case 'mcp-deployment': return createMCPDeploymentSummary(intelligence);
    case 'mcp-standard': return createMCPStandardSummary(intelligence);
    case 'mcp-comprehensive': return createMCPComprehensiveSummary(intelligence);
    default: return createMCPStandardSummary(intelligence);
  }
}

// Extract MCP optimization patterns from module content
function extractMCPOptimizationPatterns(content) {
  const patterns = [];
  
  // Enhanced MCP pattern extraction
  const mcpPatterns = [
    // MCP tool batching patterns
    /```yaml[\s\S]*?(mcp_|batching_|tools:|operations:)[\s\S]*?```/gi,
    // MCP synergy chains
    /synergy[_\s]*chain|mcp[_\s]*chain|code-index.*→.*serena.*→.*context7/gi,
    // MCP efficiency targets
    /(85|80|90|95)%[_\s]*(efficiency|batching|parallel|success)/gi,
    // MCP tool references
    /mcp__[a-zA-Z_]+__[a-zA-Z_]+/gi,
    // MCP workflow templates
    /@config:MCP\d+/gi
  ];
  
  mcpPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      patterns.push({
        text: match[0].trim(),
        type: determineMCPPatternType(match[0]),
        efficiency: extractEfficiencyTarget(match[0])
      });
    }
  });
  
  return patterns;
}

// Create MCP deployment summary
function createMCPDeploymentSummary(intelligence) {
  let summary = `**${intelligence.name.toUpperCase()} MCP MODULE:**\n`;
  
  // Critical MCP optimization patterns
  if (intelligence.mcpOptimization.length > 0) {
    const criticalMCP = intelligence.mcpOptimization
      .filter(m => m.efficiency && parseInt(m.efficiency) >= 85)
      .slice(0, 3);
    
    summary += `**MCP OPTIMIZATION:** ${criticalMCP.length} critical patterns\n`;
    criticalMCP.forEach(pattern => {
      summary += `- ${pattern.type}: ${pattern.efficiency}% efficiency\n`;
    });
  }
  
  // Essential YAML configs with MCP focus
  if (intelligence.yamlConfigs.length > 0) {
    const mcpConfigs = intelligence.yamlConfigs
      .filter(yaml => yaml.content.toLowerCase().includes('mcp') || yaml.content.includes('batching'))
      .slice(0, 2);
    
    if (mcpConfigs.length > 0) {
      summary += `**MCP CONFIGS:** ${mcpConfigs.length} batching configurations\n`;
    }
  }
  
  return summary;
}

// Create MCP standard summary
function createMCPStandardSummary(intelligence) {
  let summary = '';
  
  // MCP optimization patterns (HIGHEST PRIORITY)
  if (intelligence.mcpOptimization.length > 0) {
    summary += '**MCP OPTIMIZATION PATTERNS:**\n';
    
    // Group by efficiency targets
    const highEfficiency = intelligence.mcpOptimization.filter(m => m.efficiency && parseInt(m.efficiency) >= 85);
    const mediumEfficiency = intelligence.mcpOptimization.filter(m => m.efficiency && parseInt(m.efficiency) >= 75 && parseInt(m.efficiency) < 85);
    
    if (highEfficiency.length > 0) {
      summary += `**High Efficiency (85%+):** ${highEfficiency.length} patterns\n`;
      highEfficiency.forEach(pattern => {
        summary += `- ${pattern.text}\n`;
      });
      summary += '\n';
    }
    
    if (mediumEfficiency.length > 0) {
      summary += `**Medium Efficiency (75-84%):** ${mediumEfficiency.length} patterns\n`;
      mediumEfficiency.forEach(pattern => {
        summary += `- ${pattern.text}\n`;
      });
      summary += '\n';
    }
  }
  
  // YAML configurations with MCP context preservation
  if (intelligence.yamlConfigs.length > 0) {
    summary += '**MCP CONFIGURATIONS:**\n';
    
    const mcpYamlConfigs = intelligence.yamlConfigs.filter(yaml => 
      yaml.content.toLowerCase().includes('mcp') || 
      yaml.content.includes('batching') ||
      yaml.content.includes('efficiency')
    );
    
    mcpYamlConfigs.forEach(yaml => {
      summary += '```yaml\n' + yaml.content + '\n```\n\n';
    });
  }
  
  // Enhanced compliance targets with MCP categorization
  if (intelligence.compliance.length > 0) {
    summary += '**MCP COMPLIANCE TARGETS:**\n';
    
    const mcpTargets = intelligence.compliance.filter(c => 
      c.text.includes('85%') || c.text.includes('batching') || c.text.includes('efficiency')
    );
    
    mcpTargets.forEach(target => {
      summary += `- ${target.text}\n`;
    });
    summary += '\n';
  }
  
  return summary;
}

// Create MCP comprehensive summary  
function createMCPComprehensiveSummary(intelligence) {
  return createMCPStandardSummary(intelligence);
}

// Determine MCP pattern type
function determineMCPPatternType(pattern) {
  const text = pattern.toLowerCase();
  if (text.includes('batching') || text.includes('efficiency')) return 'batching-optimization';
  if (text.includes('synergy') || text.includes('chain')) return 'tool-coordination';
  if (text.includes('mcp__')) return 'tool-invocation';
  if (text.includes('@config:mcp')) return 'workflow-template';
  return 'mcp-general';
}

// Extract efficiency target from pattern
function extractEfficiencyTarget(pattern) {
  const match = pattern.match(/(85|80|90|95)%/);
  return match ? match[1] : null;
}

// Enhanced MCP validation function
function validateMCPIntelligencePreservation(intelligence) {
  const metrics = {
    yamlBlocks: intelligence.yamlConfigs?.length || 0,
    enforcementRules: intelligence.enforcement?.length || 0,
    complianceTargets: intelligence.compliance?.length || 0,
    decisionTrees: intelligence.decisionTrees?.length || 0,
    codePatterns: intelligence.codePatterns?.length || 0,
    mcpOptimization: intelligence.mcpOptimization?.length || 0
  };
  
  // MCP-specific metrics
  const mcpMetrics = {
    batchingPatterns: intelligence.mcpOptimization?.filter(m => m.type === 'batching-optimization').length || 0,
    synergyChains: intelligence.mcpOptimization?.filter(m => m.type === 'tool-coordination').length || 0,
    toolInvocations: intelligence.mcpOptimization?.filter(m => m.type === 'tool-invocation').length || 0,
    workflowTemplates: intelligence.mcpOptimization?.filter(m => m.type === 'workflow-template').length || 0,
    efficiencyTargets: intelligence.mcpOptimization?.filter(m => m.efficiency && parseInt(m.efficiency) >= 85).length || 0
  };
  
  // Calculate weighted MCP preservation score
  const totalElements = Object.values(metrics).reduce((sum, count) => sum + count, 0);
  const mcpWeight = mcpMetrics.batchingPatterns * 20; // MCP optimization is highest priority
  const yamlWeight = metrics.yamlBlocks * 15;
  const complianceWeight = metrics.complianceTargets * 12;
  const enforcementWeight = metrics.enforcementRules * 8;
  const otherWeight = (metrics.decisionTrees + metrics.codePatterns) * 5;
  
  const weightedScore = Math.min(100, mcpWeight + yamlWeight + complianceWeight + enforcementWeight + otherWeight);
  
  // Determine MCP preservation quality
  const quality = determineMCPPreservationQuality(weightedScore, mcpMetrics, metrics);
  
  return {
    preservationScore: weightedScore,
    quality,
    metrics,
    mcpMetrics,
    isValid: totalElements >= 3 && weightedScore >= 40,
    recommendations: generateMCPPreservationRecommendations(mcpMetrics, metrics)
  };
}

// Determine MCP preservation quality
function determineMCPPreservationQuality(score, mcpMetrics, metrics) {
  if (score >= 85 && mcpMetrics.batchingPatterns >= 2 && mcpMetrics.efficiencyTargets >= 1) {
    return 'excellent';
  } else if (score >= 70 && mcpMetrics.batchingPatterns >= 1) {
    return 'good';
  } else if (score >= 50 && mcpMetrics.synergyChains >= 1) {
    return 'adequate';
  } else if (score >= 30) {
    return 'minimal';
  } else {
    return 'insufficient';
  }
}

// Generate MCP preservation recommendations
function generateMCPPreservationRecommendations(mcpMetrics, metrics) {
  const recommendations = [];
  
  if (mcpMetrics.batchingPatterns < 2) {
    recommendations.push('Increase MCP batching pattern extraction - critical for 85% efficiency targets');
  }
  
  if (mcpMetrics.efficiencyTargets < 1) {
    recommendations.push('Extract more efficiency targets - essential for MCP optimization validation');
  }
  
  if (mcpMetrics.synergyChains < 1) {
    recommendations.push('Improve synergy chain detection - needed for tool coordination optimization');
  }
  
  if (mcpMetrics.workflowTemplates < 1) {
    recommendations.push('Extract MCP workflow templates - critical for systematic batching implementation');
  }
  
  return recommendations;
}

// Deployment-optimized intelligent compression with configurable levels (LEGACY)
// Determine optimal compression level based on module characteristics
function determineCompressionLevel(module, type = 'command') {
  const contentLength = module.content ? module.content.length : 0;
  const priority = module.priority || 'medium';
  const category = module.category || 'general';
  
  // Deployment mode uses ultra-compact compression
  if (type === 'deployment') {
    return 'deployment';
  }
  
  // High-priority critical modules use comprehensive compression
  if (priority === 'critical' || category === 'critical') {
    return 'comprehensive';
  }
  
  // Large modules (>10KB) benefit from minimal compression to preserve intelligence
  if (contentLength > 10000) {
    return 'minimal';
  }
  
  // Core framework modules use comprehensive compression
  if (category === 'framework' || category === 'core') {
    return 'comprehensive';
  }
  
  // High-priority modules use standard compression
  if (priority === 'high') {
    return 'standard';
  }
  
  // Small modules (<3KB) can use deployment compression for efficiency
  if (contentLength < 3000) {
    return 'deployment';
  }
  
  // Default to standard compression for balanced approach
  return 'standard';
}

function intelligentCompress(module, moduleName, compressionLevel = 'standard') {
  const intelligence = {
    name: moduleName,
    yamlConfigs: extractYAMLBlocks(module),
    enforcement: extractEnforcementPatterns(module),
    compliance: extractComplianceTargets(module),
    decisionTrees: extractDecisionTrees(module),
    codePatterns: extractCodePatterns(module)
  };
  
  // Apply deployment-optimized compression based on level
  switch (compressionLevel) {
    case 'deployment': return createDeploymentSummary(intelligence);
    case 'minimal': return createMinimalSummary(intelligence);
    case 'comprehensive': return createComprehensiveSummary(intelligence);
    default: return createStandardSummary(intelligence);
  }
}

// Deployment-optimized summary (ultra-compact for production deployment)
function createDeploymentSummary(intelligence) {
  let summary = `**${intelligence.name.toUpperCase()} MODULE:**\n`;
  
  // Critical YAML configs only (top 2 most important)
  if (intelligence.yamlConfigs.length > 0) {
    const criticalConfigs = intelligence.yamlConfigs
      .sort((a, b) => (b.content.length - a.content.length))
      .slice(0, 2);
    
    summary += `**CONFIGS:** ${criticalConfigs.length} YAML blocks\n`;
    criticalConfigs.forEach(yaml => {
      const compactYAML = compressYAMLForDeployment(yaml.content);
      summary += `\`\`\`yaml\n${compactYAML}\n\`\`\`\n`;
    });
  }
  
  // Essential compliance targets (percentages only)
  if (intelligence.compliance.length > 0) {
    const percentages = intelligence.compliance
      .filter(c => c.percentage)
      .map(c => `${c.category?.toUpperCase() || 'GEN'}:${c.percentage}%`)
      .slice(0, 4);
    
    if (percentages.length > 0) {
      summary += `**TARGETS:** ${percentages.join(', ')}\n`;
    }
  }
  
  // Critical enforcement patterns (1-2 key patterns only)
  if (intelligence.enforcement.length > 0) {
    const criticalEnforcement = intelligence.enforcement
      .filter(e => e.priority === 'high' && e.hasYAML)
      .slice(0, 1);
    
    if (criticalEnforcement.length > 0) {
      summary += `**ENFORCEMENT:** ${criticalEnforcement.length} critical patterns\n`;
    }
  }
  
  return summary;
}

// Minimal summary (essential intelligence only)
function createMinimalSummary(intelligence) {
  let summary = '';
  
  // YAML configurations (compressed)
  if (intelligence.yamlConfigs.length > 0) {
    summary += '**CONFIGURATIONS:**\n';
    const configGroups = groupYAMLByContext(intelligence.yamlConfigs);
    
    Object.entries(configGroups).forEach(([context, configs]) => {
      if (configs.length > 0) {
        summary += `${context}: ${configs.length} configs\n`;
        // Only include the most important config per context
        const mainConfig = configs[0];
        const compactYAML = compressYAMLForDeployment(mainConfig.content);
        summary += `\`\`\`yaml\n${compactYAML}\n\`\`\`\n`;
      }
    });
  }
  
  // Compliance targets (categorized summary)
  if (intelligence.compliance.length > 0) {
    summary += '**TARGETS:**\n';
    const complianceGroups = groupComplianceByCategory(intelligence.compliance);
    
    Object.entries(complianceGroups).forEach(([category, targets]) => {
      if (targets.length > 0) {
        const percentages = targets
          .filter(t => t.percentage)
          .map(t => `${t.percentage}%`);
        summary += `- ${category}: ${percentages.join(', ')}\n`;
      }
    });
  }
  
  return summary;
}

// Standard summary (balanced compression)
function createStandardSummary(intelligence) {
  let compressed = '';
  
  // Add YAML configurations with context preservation (HIGHEST PRIORITY)
  if (intelligence.yamlConfigs.length > 0) {
    compressed += '**ENFORCEMENT CONFIGURATIONS:**\n';
    
    // Group YAML configs by context for better organization
    const configGroups = groupYAMLByContext(intelligence.yamlConfigs);
    
    Object.entries(configGroups).forEach(([context, configs]) => {
      if (context && context !== 'null') {
        compressed += `${context}:\n`;
      }
      configs.forEach(yaml => {
        compressed += '```yaml\n' + yaml.content + '\n```\n\n';
      });
    });
  }
  
  // Enhanced enforcement patterns with priority-based preservation
  if (intelligence.enforcement.length > 0) {
    compressed += '**ENFORCEMENT MECHANISMS:**\n';
    
    // Sort by priority and type for better organization
    const sortedEnforcement = intelligence.enforcement
      .sort((a, b) => {
        if (a.priority === 'high' && b.priority !== 'high') return -1;
        if (b.priority === 'high' && a.priority !== 'high') return 1;
        return 0;
      });
    
    sortedEnforcement.forEach(pattern => {
      if (pattern.hasYAML) {
        // Preserve YAML enforcement patterns completely
        compressed += pattern.text + '\n\n';
      } else {
        // Smart compression for non-YAML enforcement
        const smartCompressed = smartTruncateEnforcement(pattern.text, 600);
        compressed += '- ' + smartCompressed + '\n\n';
      }
    });
  }
  
  // Enhanced compliance targets with categorization
  if (intelligence.compliance.length > 0) {
    compressed += '**COMPLIANCE TARGETS:**\n';
    
    // Group compliance targets by category
    const complianceGroups = groupComplianceByCategory(intelligence.compliance);
    
    Object.entries(complianceGroups).forEach(([category, targets]) => {
      if (targets.length > 0) {
        compressed += `- ${category.toUpperCase()}: `;
        const percentages = targets
          .filter(t => t.percentage)
          .map(t => `${t.percentage}%`)
          .join(', ');
        compressed += percentages ? `${percentages} compliance.\n` : `${targets.length} targets.\n`;
      }
    });
    
    // Also add raw target text for complete preservation
    const uniqueTargets = [...new Set(intelligence.compliance.map(t => t.text))];
    uniqueTargets.forEach(target => {
      compressed += `- ${target}\n`;
    });
    compressed += '\n';
  }
  
  // Add decision trees (complete preservation)
  if (intelligence.decisionTrees.length > 0) {
    compressed += '**DECISION WORKFLOWS:**\n';
    intelligence.decisionTrees.forEach(tree => {
      compressed += tree + '\n\n';
    });
  }
  
  // Add code patterns (complete preservation)  
  if (intelligence.codePatterns.length > 0) {
    compressed += '**CODE PATTERNS:**\n';
    intelligence.codePatterns.forEach(pattern => {
      compressed += pattern + '\n\n';
    });
  }
  
  return compressed;
}

// Comprehensive summary (full preservation)
function createComprehensiveSummary(intelligence) {
  // This is the original comprehensive approach
  return createStandardSummary(intelligence);
}

// YAML compression for deployment optimization
function compressYAMLForDeployment(yamlContent) {
  const lines = yamlContent.split('\n');
  const compressed = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      // Keep essential structure but compress spacing
      const compactLine = line.replace(/:\s+/g, ':').replace(/\s{4,}/g, '  ');
      compressed.push(compactLine);
    }
  }
  
  // Limit to most critical configuration elements
  return compressed.slice(0, 15).join('\n');
}

// Helper function to group YAML configurations by context
function groupYAMLByContext(yamlConfigs) {
  const groups = {};
  
  yamlConfigs.forEach(yaml => {
    const context = yaml.context || 'Configuration';
    if (!groups[context]) {
      groups[context] = [];
    }
    groups[context].push(yaml);
  });
  
  return groups;
}

// Helper function to group compliance targets by category
function groupComplianceByCategory(complianceTargets) {
  const groups = {
    'agent-mandatory': [],
    'parallel-execution': [], 
    'research-protocol': [],
    'batching-optimization': [],
    'general': [],
    'threshold': []
  };
  
  complianceTargets.forEach(target => {
    const category = target.category || 'general';
    groups[category].push(target);
  });
  
  return groups;
}

// Smart enforcement pattern compression
function smartTruncateEnforcement(pattern, maxLength) {
  if (pattern.length <= maxLength) return pattern;
  
  // Preserve critical keywords and structure
  const keywordRegex = /(MANDATORY|REQUIRED|ENFORCEMENT|FIREWALL|GUARD|BLOCK|TARGET|95%|80%|90%|85%|PROTOCOL|SYSTEM|AUTO)/gi;
  const keywords = pattern.match(keywordRegex) || [];
  
  // Keep first sentence and critical parts
  const firstSentence = pattern.split('.')[0];
  const bulletPoints = pattern.match(/^[\s]*[-*]\s+.*/gm) || [];
  
  let compressed = firstSentence;
  
  // Add bullet points if they fit
  let remaining = maxLength - compressed.length;
  for (const bullet of bulletPoints.slice(0, 3)) {
    if (bullet.length < remaining) {
      compressed += '\n' + bullet;
      remaining -= bullet.length;
    }
  }
  
  // Add unique keywords if space allows
  const uniqueKeywords = [...new Set(keywords)];
  if (remaining > 50 && uniqueKeywords.length > 0) {
    compressed += '\n**Key Terms**: ' + uniqueKeywords.join(', ');
  }
  
  return compressed;
}

// Enhanced validation function with detailed YAML and compliance preservation metrics
function validateIntelligencePreservation(intelligence) {
  const metrics = {
    yamlBlocks: intelligence.yamlConfigs?.length || 0,
    enforcementRules: intelligence.enforcement?.length || 0,
    complianceTargets: intelligence.compliance?.length || 0,
    decisionTrees: intelligence.decisionTrees?.length || 0,
    codePatterns: intelligence.codePatterns?.length || 0
  };
  
  // Enhanced YAML preservation validation
  const yamlMetrics = {
    totalYAMLBlocks: metrics.yamlBlocks,
    yamlWithContext: intelligence.yamlConfigs?.filter(y => y.context).length || 0,
    enforcementYAML: intelligence.enforcement?.filter(e => e.hasYAML).length || 0,
    configurationComplexity: calculateYAMLComplexity(intelligence.yamlConfigs)
  };
  
  // Enhanced compliance target validation
  const complianceMetrics = {
    totalTargets: metrics.complianceTargets,
    categorizedTargets: intelligence.compliance?.filter(c => c.category !== 'general').length || 0,
    percentageTargets: intelligence.compliance?.filter(c => c.percentage).length || 0,
    agentMandatoryTargets: intelligence.compliance?.filter(c => c.category === 'agent-mandatory').length || 0,
    parallelExecutionTargets: intelligence.compliance?.filter(c => c.category === 'parallel-execution').length || 0,
    researchProtocolTargets: intelligence.compliance?.filter(c => c.category === 'research-protocol').length || 0,
    batchingOptimizationTargets: intelligence.compliance?.filter(c => c.category === 'batching-optimization').length || 0
  };
  
  // Calculate weighted preservation score
  const totalElements = Object.values(metrics).reduce((sum, count) => sum + count, 0);
  const yamlWeight = yamlMetrics.totalYAMLBlocks * 15; // YAML blocks are high priority
  const complianceWeight = complianceMetrics.percentageTargets * 12; // Compliance targets are critical
  const enforcementWeight = metrics.enforcementRules * 8; // Enforcement rules are important
  const otherWeight = (metrics.decisionTrees + metrics.codePatterns) * 5; // Other elements
  
  const weightedScore = Math.min(100, yamlWeight + complianceWeight + enforcementWeight + otherWeight);
  
  // Determine preservation quality
  const quality = determinePreservationQuality(weightedScore, yamlMetrics, complianceMetrics);
  
  return {
    preservationScore: weightedScore,
    quality,
    metrics,
    yamlMetrics,
    complianceMetrics,
    isValid: totalElements >= 3 && weightedScore >= 30,
    recommendations: generatePreservationRecommendations(yamlMetrics, complianceMetrics, metrics)
  };
}

// Calculate YAML complexity for better preservation scoring
function calculateYAMLComplexity(yamlConfigs) {
  if (!yamlConfigs || yamlConfigs.length === 0) return 0;
  
  let complexity = 0;
  yamlConfigs.forEach(yaml => {
    const content = yaml.content || '';
    // Count nested levels (indentation)
    const maxIndentation = Math.max(...content.split('\n').map(line => 
      (line.match(/^(\s*)/)?.[1]?.length || 0) / 2
    ));
    // Count configuration keys
    const keyCount = (content.match(/^\s*\w+:/gm) || []).length;
    // Count arrays and objects
    const structureCount = (content.match(/:\s*[\[\{]/gm) || []).length;
    
    complexity += maxIndentation + keyCount + (structureCount * 2);
  });
  
  return complexity;
}

// Determine overall preservation quality
function determinePreservationQuality(score, yamlMetrics, complianceMetrics) {
  if (score >= 80 && yamlMetrics.totalYAMLBlocks >= 3 && complianceMetrics.percentageTargets >= 5) {
    return 'excellent';
  } else if (score >= 60 && yamlMetrics.totalYAMLBlocks >= 2 && complianceMetrics.percentageTargets >= 3) {
    return 'good';
  } else if (score >= 40 && (yamlMetrics.totalYAMLBlocks >= 1 || complianceMetrics.percentageTargets >= 2)) {
    return 'adequate';
  } else if (score >= 20) {
    return 'minimal';
  } else {
    return 'insufficient';
  }
}

// Generate preservation improvement recommendations
function generatePreservationRecommendations(yamlMetrics, complianceMetrics, metrics) {
  const recommendations = [];
  
  if (yamlMetrics.totalYAMLBlocks < 2) {
    recommendations.push('Increase YAML configuration extraction - critical for Guild system enforcement');
  }
  
  if (complianceMetrics.percentageTargets < 3) {
    recommendations.push('Improve compliance target detection - essential for framework validation');
  }
  
  if (yamlMetrics.yamlWithContext < yamlMetrics.totalYAMLBlocks * 0.5) {
    recommendations.push('Enhance context extraction for YAML blocks - improves configuration understanding');
  }
  
  if (complianceMetrics.categorizedTargets < complianceMetrics.totalTargets * 0.7) {
    recommendations.push('Improve compliance target categorization - needed for systematic monitoring');
  }
  
  if (metrics.enforcementRules < 2) {
    recommendations.push('Extract more enforcement patterns - critical for Guild system compliance');
  }
  
  return recommendations;
}

// Enhanced command generation with intelligence preservation
async function generateCommand(type, coreModules, frameworkModule) {
  const templatePath = path.join(__dirname, 'guideline', 'templates', `${type}-command.md`);
  let template = await fs.readFile(templatePath, 'utf8');
  
  // Intelligence preservation system
  let embedded = '\n\n## Guild Intelligence\n\n';
  
  // Framework intelligence (comprehensive)
  if (frameworkModule) {
    embedded += '### Framework Guidance\n';
    const frameworkIntelligence = intelligentCompress(frameworkModule, 'framework');
    embedded += frameworkIntelligence + '\n';
  }
  
  // PRIORITIZED core modules for optimal user request handling with MCP optimization
  const coreModulePriorities = [
    { name: 'workflow-orchestration', priority: 'critical', category: 'mcp-execution' },
    { name: 'mcp-optimization', priority: 'critical', category: 'mcp-performance' },
    { name: 'specialist-management', priority: 'critical', category: 'mcp-execution' },
    { name: 'execution-optimization', priority: 'high', category: 'mcp-performance' },
    { name: 'verification', priority: 'high', category: 'mcp-quality' },
    { name: 'compliance-framework', priority: 'medium', category: 'mcp-quality' },
    { name: 'decision-authority', priority: 'medium', category: 'governance' }
  ];
  
  // Group modules by category for MCP-optimized modular deployment
  const moduleCategories = {
    'mcp-execution': [],
    'mcp-performance': [],
    'mcp-quality': [],
    governance: []
  };
  
  coreModulePriorities.forEach(module => {
    if (coreModules[module.name]) {
      moduleCategories[module.category].push({
        ...module,
        content: coreModules[module.name]
      });
    }
  });
  
  // Deploy modules in priority order with MCP-optimized category grouping
  Object.entries(moduleCategories).forEach(([category, modules]) => {
    if (modules.length > 0) {
      const categoryTitle = category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      embedded += `## ${categoryTitle} Intelligence\n\n`;
      
      modules.forEach(module => {
        embedded += `### ${module.name} Module\n`;
        
        // Determine optimal compression level based on module priority and size with MCP focus
        const compressionLevel = determineMCPCompressionLevel(module, type);
        const moduleIntelligence = intelligentCompressMCP(module.content, module.name, compressionLevel);
        
        const validation = validateMCPIntelligencePreservation({ 
          yamlConfigs: extractYAMLBlocks(module.content),
          enforcement: extractEnforcementPatterns(module.content),
          compliance: extractComplianceTargets(module.content),
          decisionTrees: extractDecisionTrees(module.content),
          codePatterns: extractCodePatterns(module.content),
          mcpOptimization: extractMCPOptimizationPatterns(module.content)
        });
        
        embedded += moduleIntelligence;
        
        // Enhanced MCP validation metrics with compression level information
        if (validation.quality === 'excellent' || validation.quality === 'good') {
          embedded += `*MCP Intelligence Preservation: ${validation.preservationScore}% (${validation.quality}, ${compressionLevel} compression) - ` +
                     `YAML: ${validation.yamlMetrics.totalYAMLBlocks} configs, ` +
                     `MCP Optimization: ${validation.mcpMetrics.batchingPatterns} patterns, ` +
                     `Compliance: ${validation.complianceMetrics.percentageTargets} targets, ` +
                     `Enforcement: ${validation.metrics.enforcementRules} rules*\n\n`;
        } else if (validation.quality === 'adequate') {
          embedded += `*MCP Intelligence Preservation: ${validation.preservationScore}% (${validation.quality}, ${compressionLevel}) - ` +
                     `YAML: ${validation.yamlMetrics.totalYAMLBlocks}, MCP: ${validation.mcpMetrics.batchingPatterns}, ` +
                     `Compliance: ${validation.complianceMetrics.percentageTargets}*\n\n`;
        } else {
          embedded += `*Warning: ${validation.quality} MCP intelligence preservation (${validation.preservationScore}%, ${compressionLevel}) - Priority: ${module.priority}*\n`;
          if (validation.recommendations.length > 0) {
            embedded += `*MCP Recommendations: ${validation.recommendations.slice(0, 2).join('; ')}*\n`;
          }
          embedded += '\n';
        }
      });
    }
  });
  
  template += embedded;
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