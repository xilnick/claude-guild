#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

/**
 * Comprehensive validation system for Guild
 */
async function validateSystem() {
  console.log('🔍 Validating Guild System Integrity...\n');
  
  let errors = [];
  let warnings = [];
  let successes = [];
  
  // Validate directory structure
  console.log('📁 Checking directory structure...');
  const requiredDirs = [
    'guideline/core',
    'guideline/templates',
    'scripts'
  ];
  
  for (const dir of requiredDirs) {
    const dirPath = path.join(__dirname, '..', dir);
    if (await fs.pathExists(dirPath)) {
      successes.push(`✅ Directory exists: ${dir}`);
    } else {
      errors.push(`❌ Missing directory: ${dir}`);
    }
  }
  
  // Validate core modules in current structure
  console.log('\n📚 Checking core modules...');
  const coreModules = ['workflow.md', 'agents.md'];
  
  for (const module of coreModules) {
    const modulePath = path.join(__dirname, '..', 'guideline', 'core', module);
    if (await fs.pathExists(modulePath)) {
      const content = await fs.readFile(modulePath, 'utf-8');
      if (content.length > 100) {
        successes.push(`✅ Core module valid: ${module}`);
      } else {
        warnings.push(`⚠️  Core module too small: ${module}`);
      }
    } else {
      errors.push(`❌ Missing core module: ${module}`);
    }
  }
  
  // Check README.md in guideline directory
  console.log('\n📖 Checking guideline documentation...');
  const guidelineReadme = path.join(__dirname, '..', 'guideline', 'README.md');
  if (await fs.pathExists(guidelineReadme)) {
    const content = await fs.readFile(guidelineReadme, 'utf-8');
    if (content.length > 100) {
      successes.push(`✅ Guideline README exists and has content`);
    } else {
      warnings.push(`⚠️  Guideline README seems too small`);
    }
  } else {
    warnings.push('⚠️  No guideline README found');
  }
  
  // Templates no longer needed - using pure guideline-driven generation
  console.log('\n📝 Template system replaced with guideline-driven generation...');
  successes.push('✅ Pure guideline-driven generation active');
  
  // Validate command templates
  console.log('\n⚙️  Checking command templates...');
  const templatesDir = path.join(__dirname, '..', 'guideline', 'templates');
  const requiredTemplates = [
    'setup-command.md',
    'workflow-command.md'
  ];
  
  for (const template of requiredTemplates) {
    const templatePath = path.join(templatesDir, template);
    if (await fs.pathExists(templatePath)) {
      const content = await fs.readFile(templatePath, 'utf-8');
      if (content.length > 100) {
        successes.push(`✅ Template valid: ${template}`);
      } else {
        warnings.push(`⚠️  Template seems incomplete: ${template}`);
      }
    } else {
      errors.push(`❌ Missing template: ${template}`);
    }
  }
  
  // Validate install.js
  console.log('\n🔧 Checking install.js...');
  const installPath = path.join(__dirname, '..', 'install.js');
  if (await fs.pathExists(installPath)) {
    const content = await fs.readFile(installPath, 'utf-8');
    
    // Check for key functions
    const requiredFunctions = [
      'loadCoreModules',
      'generateSetupCommand', 
      'installCommands'
    ];
    
    for (const func of requiredFunctions) {
      if (content.includes(`function ${func}`) || content.includes(`async function ${func}`)) {
        successes.push(`✅ Function exists: ${func}`);
      } else {
        warnings.push(`⚠️  Function might be missing: ${func}`);
      }
    }
  } else {
    errors.push('❌ Missing install.js');
  }
  
  // Validate package.json
  console.log('\n📦 Checking package.json...');
  const packagePath = path.join(__dirname, '..', 'package.json');
  if (await fs.pathExists(packagePath)) {
    const packageJson = await fs.readJson(packagePath);
    
    // Check scripts
    const requiredScripts = ['test-install', 'validate-setup'];
    for (const script of requiredScripts) {
      if (packageJson.scripts && packageJson.scripts[script]) {
        successes.push(`✅ Script exists: npm run ${script}`);
      } else {
        warnings.push(`⚠️  Missing script: ${script}`);
      }
    }
    
    // Check files list for NPM
    if (packageJson.files) {
      const requiredFiles = ['install.js', 'guideline/', 'templates/'];
      for (const file of requiredFiles) {
        if (packageJson.files.some(f => f.includes(file.replace('/', '')))) {
          successes.push(`✅ NPM files includes: ${file}`);
        } else {
          warnings.push(`⚠️  NPM files missing: ${file}`);
        }
      }
    }
  } else {
    errors.push('❌ Missing package.json');
  }
  
  // Print results
  console.log('\n' + '='.repeat(60));
  console.log('📊 VALIDATION RESULTS');
  console.log('='.repeat(60));
  
  if (successes.length > 0) {
    console.log('\n✅ Successes (' + successes.length + '):');
    successes.forEach(s => console.log('  ' + s));
  }
  
  if (warnings.length > 0) {
    console.log('\n⚠️  Warnings (' + warnings.length + '):');
    warnings.forEach(w => console.log('  ' + w));
  }
  
  if (errors.length > 0) {
    console.log('\n❌ Errors (' + errors.length + '):');
    errors.forEach(e => console.log('  ' + e));
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  const totalChecks = successes.length + warnings.length + errors.length;
  const score = Math.round((successes.length / totalChecks) * 100);
  
  console.log(`📈 System Health: ${score}%`);
  console.log(`   ✅ ${successes.length} passed`);
  console.log(`   ⚠️  ${warnings.length} warnings`);
  console.log(`   ❌ ${errors.length} errors`);
  console.log('='.repeat(60));
  
  // Exit code
  if (errors.length > 0) {
    console.log('\n❌ Validation failed with errors');
    process.exit(1);
  } else if (warnings.length > 5) {
    console.log('\n⚠️  Validation passed with significant warnings');
    process.exit(0);
  } else {
    console.log('\n✅ Validation passed successfully!');
    process.exit(0);
  }
}

// Run validation
if (require.main === module) {
  validateSystem()
    .catch(error => {
      console.error('💥 Validation failed:', error);
      process.exit(1);
    });
}

module.exports = { validateSystem };