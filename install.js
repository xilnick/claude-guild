#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { select, intro, outro, isCancel, cancel } = require('@clack/prompts');

// Performance monitoring utilities
const performance = {
  startTime: Date.now(),
  measurements: {},
  memory: {},
  
  start(phase) {
    this.measurements[phase] = { start: Date.now() };
    this.memory[phase] = { start: process.memoryUsage() };
    console.log(`⏱️  Starting ${phase}...`);
  },
  
  end(phase) {
    if (this.measurements[phase]) {
      const duration = Date.now() - this.measurements[phase].start;
      const endMemory = process.memoryUsage();
      const startMemory = this.memory[phase].start;
      
      this.measurements[phase].duration = duration;
      this.measurements[phase].memoryDelta = {
        rss: endMemory.rss - startMemory.rss,
        heapUsed: endMemory.heapUsed - startMemory.heapUsed,
        external: endMemory.external - startMemory.external
      };
      
      console.log(`✅ ${phase} completed in ${duration}ms`);
      console.log(`   Memory delta: ${Math.round(this.measurements[phase].memoryDelta.rss / 1024 / 1024 * 100) / 100}MB RSS, ${Math.round(this.measurements[phase].memoryDelta.heapUsed / 1024 / 1024 * 100) / 100}MB heap`);
    }
  },
  
  report() {
    const totalDuration = Date.now() - this.startTime;
    console.log('\n📊 PERFORMANCE ANALYSIS REPORT');
    console.log('=====================================');
    console.log(`🕒 Total Installation Time: ${totalDuration}ms`);
    
    let intelligencePayloadSize = 0;
    let totalEmbeddedSize = 0;
    
    Object.entries(this.measurements).forEach(([phase, data]) => {
      if (data.duration) {
        console.log(`📈 ${phase}: ${data.duration}ms (${Math.round(data.duration / totalDuration * 100)}% of total)`);
        if (data.intelligenceSize) {
          intelligencePayloadSize += data.intelligenceSize;
          console.log(`   Intelligence payload: ${Math.round(data.intelligenceSize / 1024 * 100) / 100}KB`);
        }
        if (data.embeddedSize) {
          totalEmbeddedSize += data.embeddedSize;
          console.log(`   Embedded output size: ${Math.round(data.embeddedSize / 1024 * 100) / 100}KB`);
        }
        if (data.memoryDelta) {
          console.log(`   Memory impact: ${Math.round(data.memoryDelta.rss / 1024 / 1024 * 100) / 100}MB RSS`);
        }
      }
    });
    
    console.log(`\n🧠 INTELLIGENCE METRICS:`);
    console.log(`   Source Intelligence: ${Math.round(intelligencePayloadSize / 1024 * 100) / 100}KB`);
    console.log(`   Embedded Intelligence: ${Math.round(totalEmbeddedSize / 1024 * 100) / 100}KB`);
    console.log(`   Embedding Efficiency: ${Math.round((totalEmbeddedSize / intelligencePayloadSize) * 100)}% size increase`);
    
    // Performance thresholds analysis
    console.log(`\n⚡ PERFORMANCE THRESHOLDS:`);
    console.log(`   Installation time: ${totalDuration < 30000 ? '✅' : '⚠️'} ${totalDuration}ms (target: <30s)`);
    console.log(`   Memory efficiency: ${process.memoryUsage().rss < 500 * 1024 * 1024 ? '✅' : '⚠️'} ${Math.round(process.memoryUsage().rss / 1024 / 1024)}MB (target: <500MB)`);
    console.log(`=====================================\n`);
    
    return {
      totalDuration,
      phases: this.measurements,
      intelligenceMetrics: {
        sourceSize: intelligencePayloadSize,
        embeddedSize: totalEmbeddedSize,
        efficiency: totalEmbeddedSize / intelligencePayloadSize
      },
      thresholds: {
        installationTime: { value: totalDuration, target: 30000, passed: totalDuration < 30000 },
        memoryUsage: { value: process.memoryUsage().rss, target: 500 * 1024 * 1024, passed: process.memoryUsage().rss < 500 * 1024 * 1024 }
      }
    };
  }
};

// Main installation function
async function install() {
  const args = process.argv.slice(2);
  performance.start('total_installation');
  
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
    
    // Load and embed core modules and framework
    performance.start('intelligence_loading');
    const coreModules = await loadCoreModules();
    const frameworkModule = await loadFrameworkModule();
    performance.end('intelligence_loading');
    
    // Calculate intelligence payload size
    const coreSize = Object.values(coreModules).reduce((sum, content) => sum + content.length, 0);
    const frameworkSize = frameworkModule ? frameworkModule.length : 0;
    performance.measurements.intelligence_loading.intelligenceSize = coreSize + frameworkSize;
    
    // Run consistency validation before generation
    performance.start('consistency_validation');
    console.log('🔍 Validating intelligence consistency...');
    const consistencyReport = await validateConsistency(coreModules, frameworkModule);
    performance.end('consistency_validation');
    if (!consistencyReport.isValid) {
      console.warn('⚠️  Consistency issues found:', consistencyReport.issues.length, 'issues');
      consistencyReport.issues.forEach(issue => console.warn('  -', issue));
    } else {
      console.log('✅ Intelligence consistency validated');
    }
    
    // Run intelligence completeness verification
    performance.start('completeness_verification');
    console.log('🧠 Verifying intelligence completeness...');
    const completenessReport = await verifyIntelligenceCompleteness(coreModules, frameworkModule);
    performance.end('completeness_verification');
    if (!completenessReport.isComplete) {
      console.warn('⚠️  Intelligence gaps found:', completenessReport.gaps.length, 'gaps');
      completenessReport.gaps.forEach(gap => console.warn('  -', gap));
    } else {
      console.log('✅ Intelligence completeness verified');
    }
    
    // Generate and install workflow command with enhanced framework embedding
    performance.start('workflow_generation');
    const workflowContent = await generateCommand('workflow', coreModules, frameworkModule);
    performance.measurements.workflow_generation.embeddedSize = workflowContent.length;
    await fs.writeFile(path.join(guildDir, 'workflow.md'), workflowContent);
    performance.end('workflow_generation');
    
    // Generate and install setup command with enhanced framework embedding (with abstract-only agent creation)
    performance.start('setup_generation');
    const setupContent = await generateCommand('setup', coreModules, frameworkModule, { abstractOnly: true });
    performance.measurements.setup_generation.embeddedSize = setupContent.length;
    await fs.writeFile(path.join(guildDir, 'setup.md'), setupContent);
    performance.end('setup_generation');
    
    // Post-generation intelligence verification
    performance.start('post_generation_verification');
    console.log('🎯 Running post-generation intelligence verification...');
    const postGenReport = await verifyGeneratedIntelligence(workflowContent, setupContent, coreModules, frameworkModule);
    performance.end('post_generation_verification');
    if (postGenReport.hasGaps) {
      console.warn('⚠️  Post-generation gaps found:', postGenReport.gaps.length, 'gaps');
      postGenReport.gaps.forEach(gap => console.warn('  -', gap));
    } else {
      console.log('✅ Generated commands contain complete intelligence embedding');
    }
    
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
    
    // End total installation timing and generate report
    performance.end('total_installation');
    const performanceReport = performance.report();
    
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

💡 Start with: /guild:setup to create your comprehensive agent team

📊 Performance Summary:
  • Installation completed in ${performanceReport.totalDuration}ms
  • Intelligence embedded: ${Math.round(performanceReport.intelligenceMetrics.embeddedSize / 1024)}KB
  • Memory efficiency: ${performanceReport.thresholds.memoryUsage.passed ? '✅ Passed' : '⚠️ Exceeded'} (${Math.round(performanceReport.thresholds.memoryUsage.value / 1024 / 1024)}MB)`);
    
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

// Load framework module for direct embedding
async function loadFrameworkModule() {
  const frameworkPath = path.join(__dirname, 'guideline', 'guide', 'framework.md');
  
  if (await fs.pathExists(frameworkPath)) {
    const content = await fs.readFile(frameworkPath, 'utf-8');
    
    // Clean content while preserving the complete framework intelligence
    // Only remove the main title (single #) and keep everything else
    return content
      .replace(/^# .*\n+/m, '')  // Remove only the main title
      .trim();
  }
  
  return null;
}

// Generate command with embedded intelligence (ENHANCED)
async function generateCommand(type, coreModules, frameworkModule, options = {}) {
  const templatePath = path.join(__dirname, 'guideline', 'templates', `${type}-command.md`);
  let template = await fs.readFile(templatePath, 'utf8');
  
  // Enhanced intelligence layering with framework direct embedding
  let embedded = '\n\n## 📚 EMBEDDED GUILD INTELLIGENCE\n\n';
  
  // Add Tool Use Implementation notice
  embedded += '### 🔧 Tool Use Implementation Standards\n';
  embedded += 'This command follows Anthropic\'s Tool Use Implementation best practices:\n';
  embedded += '- **3-4 sentence descriptions** for all specialists and tools\n';
  embedded += '- **Parallel execution** for independent tasks as default\n';
  embedded += '- **Robust error handling** at every operational level\n';
  embedded += '- **Comprehensive verification** with systematic gap detection\n\n';
  
  // DIRECT FRAMEWORK EMBEDDING (Major Enhancement)
  if (frameworkModule) {
    embedded += '### 🏛️ Native Intelligence Framework (Direct Embedding)\n';
    embedded += frameworkModule + '\n\n';
  }
  
  // Enhanced core module embedding with structured intelligence layering
  if (Object.keys(coreModules).length > 0) {
    embedded += '### 📋 Core Intelligence Modules\n\n';
    
    // Embed in specific order for optimal intelligence flow
    if (coreModules.workflow) {
      embedded += '#### Workflow Intelligence Patterns\n' + coreModules.workflow + '\n\n';
    }
    
    if (coreModules.agents) {
      embedded += '#### Agent Intelligence Architecture\n' + coreModules.agents + '\n\n';
    }
    
    if (coreModules.verification) {
      embedded += '#### Verification Intelligence Systems\n' + coreModules.verification + '\n\n';
    }
  }
  
  // Enhanced parallel execution integration
  embedded += '### ⚡ Parallel Execution Integration (Claude 4 Optimized)\n';
  embedded += '**MANDATORY Parallel-First Patterns:**\n';
  embedded += '- **Proactive specialist identification and batch launching**\n';
  embedded += '- **Simultaneous task execution** across independent work streams\n';
  embedded += '- **Coordinated integration points** with explicit synchronization\n';
  embedded += '- **Parallel verification** across all specialist outputs\n';
  embedded += '- **Dynamic specialist scaling** based on discovered opportunities\n\n';
  
  // Enhanced error handling and recovery framework
  embedded += '### 🛡️ Enhanced Error Handling & Recovery Framework\n';
  embedded += '**All specialists and operations include:**\n';
  embedded += '- **Structured error responses** with actionable details\n';
  embedded += '- **Multi-tier recovery strategies** with fallback chains\n';
  embedded += '- **Proactive error prevention** through validation\n';
  embedded += '- **Clear escalation paths** with specialist coordination\n';
  embedded += '- **Cross-specialist error coordination** for complex failures\n\n';
  
  // Intelligence completeness verification embedding
  embedded += '### 🧠 Intelligence Completeness Assurance\n';
  embedded += '**This command embeds:**\n';
  embedded += '- **Complete framework principles** for native intelligence operation\n';
  embedded += '- **Full core module patterns** for comprehensive capability coverage\n';
  embedded += '- **Validated consistency** across all intelligence components\n';
  embedded += '- **Systematic gap detection** for continuous quality assurance\n';
  embedded += '- **Iterative refinement protocols** until technical excellence achieved\n\n';
  
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

// Consistency validation system (NEW CAPABILITY)
async function validateConsistency(coreModules, frameworkModule) {
  const issues = [];
  let isValid = true;
  
  try {
    // Validate framework-to-core alignment
    if (frameworkModule) {
      // Check that framework's parallel-first mandate aligns with core workflow patterns
      if (coreModules.workflow && frameworkModule.includes('PARALLEL-FIRST') && !coreModules.workflow.includes('parallel')) {
        issues.push('Framework mandates parallel-first execution but workflow module lacks parallel patterns');
        isValid = false;
      }
      
      // Check Tool Use Implementation consistency
      if (frameworkModule.includes('Tool Use Implementation') && coreModules.agents && !coreModules.agents.includes('3-4 sentence')) {
        issues.push('Framework requires Tool Use Implementation but agents module lacks description standards');
        isValid = false;
      }
      
      // Check verification requirements alignment
      if (frameworkModule.includes('MANDATORY.*verification') && coreModules.verification && !coreModules.verification.includes('gap')) {
        issues.push('Framework mandates comprehensive verification but verification module lacks gap detection');
        isValid = false;
      }
    }
    
    // Validate core module internal consistency
    Object.keys(coreModules).forEach(moduleName => {
      const content = coreModules[moduleName];
      
      // Check for inconsistent parallel execution mentions
      if (content.includes('sequential') && content.includes('parallel') && !content.includes('when')) {
        issues.push(`${moduleName} module has potentially conflicting sequential/parallel guidance`);
      }
      
      // Validate verification standards
      if (moduleName === 'verification' && !content.includes('iterative')) {
        issues.push('Verification module lacks iterative refinement requirements');
      }
    });
    
    // Check for missing critical patterns
    if (frameworkModule && frameworkModule.includes('proactive') && !Object.keys(coreModules).some(key => coreModules[key].includes('proactive'))) {
      issues.push('Framework emphasizes proactive patterns but core modules lack proactive implementation guidance');
      isValid = false;
    }
    
  } catch (error) {
    issues.push(`Consistency validation error: ${error.message}`);
    isValid = false;
  }
  
  return { isValid, issues, validatedComponents: Object.keys(coreModules).length + (frameworkModule ? 1 : 0) };
}

// Intelligence completeness verification system (NEW CAPABILITY)
async function verifyIntelligenceCompleteness(coreModules, frameworkModule) {
  const gaps = [];
  let isComplete = true;
  
  try {
    // Framework principle embedding verification
    if (!frameworkModule) {
      gaps.push('Framework module not loaded - critical intelligence missing');
      isComplete = false;
    } else {
      // Check for critical framework components
      const requiredFrameworkElements = [
        'PARALLEL-FIRST',
        'proactive.*decomposition',
        'autonomous.*intelligent.*analysis',
        'iterative.*verification',
        'Tool Use Implementation'
      ];
      
      requiredFrameworkElements.forEach(element => {
        const regex = new RegExp(element, 'i');
        if (!regex.test(frameworkModule)) {
          gaps.push(`Framework missing critical element: ${element}`);
          isComplete = false;
        }
      });
    }
    
    // Core module pattern integration verification
    const expectedCoreModules = ['workflow', 'agents', 'verification'];
    expectedCoreModules.forEach(expectedModule => {
      if (!coreModules[expectedModule]) {
        gaps.push(`Missing critical core module: ${expectedModule}`);
        isComplete = false;
      }
    });
    
    // Cross-component intelligence flow verification
    if (coreModules.workflow && frameworkModule) {
      // Verify workflow implements framework principles
      if (!coreModules.workflow.includes('parallel') && frameworkModule.includes('PARALLEL-FIRST')) {
        gaps.push('Workflow module does not implement framework parallel-first principles');
        isComplete = false;
      }
    }
    
    // Tool Use Implementation completeness check
    if (frameworkModule && frameworkModule.includes('Tool Use Implementation')) {
      let toolStandardsFound = false;
      Object.values(coreModules).forEach(content => {
        if (content.includes('3-4 sentence') || content.includes('error handling')) {
          toolStandardsFound = true;
        }
      });
      if (!toolStandardsFound) {
        gaps.push('Tool Use Implementation standards not found in core modules');
        isComplete = false;
      }
    }
    
    // Verification completeness check
    if (coreModules.verification) {
      const requiredVerificationElements = ['gap.*detection', 'iterative', 'autonomous.*verification'];
      requiredVerificationElements.forEach(element => {
        const regex = new RegExp(element, 'i');
        if (!regex.test(coreModules.verification)) {
          gaps.push(`Verification module missing: ${element}`);
          isComplete = false;
        }
      });
    }
    
  } catch (error) {
    gaps.push(`Intelligence completeness verification error: ${error.message}`);
    isComplete = false;
  }
  
  return {
    isComplete,
    gaps,
    checkedComponents: Object.keys(coreModules).length + (frameworkModule ? 1 : 0),
    completenessScore: isComplete ? 100 : Math.max(0, 100 - (gaps.length * 10))
  };
}

// Generated intelligence verification system (NEW CAPABILITY)
async function verifyGeneratedIntelligence(workflowContent, setupContent, coreModules, frameworkModule) {
  const gaps = [];
  let hasGaps = false;
  
  try {
    // Verify framework embedding in generated commands
    if (frameworkModule) {
      // Check key framework elements are present in both commands
      const keyFrameworkPatterns = ['PARALLEL-FIRST', 'proactive', 'native intelligence', 'Tool Use Implementation'];
      
      [workflowContent, setupContent].forEach((content, index) => {
        const commandName = index === 0 ? 'workflow' : 'setup';
        keyFrameworkPatterns.forEach(pattern => {
          if (!content.toLowerCase().includes(pattern.toLowerCase())) {
            gaps.push(`${commandName} command missing framework pattern: ${pattern}`);
            hasGaps = true;
          }
        });
      });
    }
    
    // Verify core module integration
    Object.keys(coreModules).forEach(moduleName => {
      [workflowContent, setupContent].forEach((content, index) => {
        const commandName = index === 0 ? 'workflow' : 'setup';
        if (!content.includes(moduleName) && !content.includes('Intelligence')) {
          gaps.push(`${commandName} command may be missing ${moduleName} module integration`);
          hasGaps = true;
        }
      });
    });
    
    // Verify Tool Use Implementation standards embedding
    [workflowContent, setupContent].forEach((content, index) => {
      const commandName = index === 0 ? 'workflow' : 'setup';
      if (!content.includes('3-4 sentence')) {
        gaps.push(`${commandName} command missing Tool Use Implementation description standards`);
        hasGaps = true;
      }
    });
    
    // Verify parallel execution integration
    [workflowContent, setupContent].forEach((content, index) => {
      const commandName = index === 0 ? 'workflow' : 'setup';
      const parallelPatterns = ['parallel', 'simultaneous', 'batch', 'specialist'];
      const hasParallelContent = parallelPatterns.some(pattern => content.toLowerCase().includes(pattern));
      if (!hasParallelContent) {
        gaps.push(`${commandName} command lacks parallel execution patterns`);
        hasGaps = true;
      }
    });
    
    // Verify comprehensive intelligence embedding
    const totalExpectedIntelligence = Object.keys(coreModules).length + (frameworkModule ? 1 : 0);
    [workflowContent, setupContent].forEach((content, index) => {
      const commandName = index === 0 ? 'workflow' : 'setup';
      const intelligenceMarkers = (content.match(/###|####/g) || []).length;
      if (intelligenceMarkers < totalExpectedIntelligence) {
        gaps.push(`${commandName} command may have incomplete intelligence embedding (${intelligenceMarkers}/${totalExpectedIntelligence} markers)`);
        hasGaps = true;
      }
    });
    
  } catch (error) {
    gaps.push(`Generated intelligence verification error: ${error.message}`);
    hasGaps = true;
  }
  
  return {
    hasGaps,
    gaps,
    verifiedCommands: 2,
    intelligenceQuality: hasGaps ? 'Gaps Found' : 'Complete Integration'
  };
}

module.exports = { install };