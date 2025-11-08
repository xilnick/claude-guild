#!/usr/bin/env node

/**
 * Guild Tier-Based Validation System
 *
 * Implements the 5-tier validation system as documented in CLAUDE.md
 *
 * Usage:
 *   node scripts/validate-tier.js --tier trivial
 *   node scripts/validate-tier.js --tier content
 *   node scripts/validate-tier.js --tier patterns
 *   node scripts/validate-tier.js --tier architectural
 *   node scripts/validate-tier.js --tier auto
 */

const fs = require('fs-extra');
const { execSync } = require('child_process');
const path = require('path');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function success(message) {
  log(`✅ ${message}`, 'green');
}

function error(message) {
  log(`❌ ${message}`, 'red');
}

function info(message) {
  log(`ℹ️  ${message}`, 'cyan');
}

function warning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

// Parse command line arguments
const args = process.argv.slice(2);
const tierIndex = args.indexOf('--tier');
const tier = tierIndex >= 0 ? args[tierIndex + 1] : 'trivial';

// Validation results tracker
let validationPassed = true;
let issuesFound = [];

/**
 * Tier 1: Trivial Validation (~5 seconds)
 * Structure validation only
 */
function validateTrivial() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('  TIER 1: TRIVIAL VALIDATION', 'cyan');
  log('  Structure validation only (~5 sec)', 'gray');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

  const requiredDirs = [
    'guideline',
    'guideline/core',
    'guideline/templates',
    'guideline/guide'
  ];

  const requiredFiles = [
    'install.js',
    'package.json',
    'README.md',
    'guideline/guide/framework.md',
    'guideline/guide/recommendations.md',
    'guideline/core/shared-intelligence.md',
    'guideline/templates/workflow-command.md',
    'guideline/templates/setup-command.md'
  ];

  info('Checking required directories...');
  let dirCheckPassed = true;
  requiredDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      success(`  ${dir}/`);
    } else {
      error(`  ${dir}/ (missing)`);
      issuesFound.push(`Missing directory: ${dir}`);
      dirCheckPassed = false;
    }
  });

  info('\nChecking required files...');
  let fileCheckPassed = true;
  requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
      success(`  ${file}`);
    } else {
      error(`  ${file} (missing)`);
      issuesFound.push(`Missing file: ${file}`);
      fileCheckPassed = false;
    }
  });

  validationPassed = dirCheckPassed && fileCheckPassed;

  log('\n' + '─'.repeat(50), 'gray');
  if (validationPassed) {
    success('TIER 1 VALIDATION PASSED');
  } else {
    error('TIER 1 VALIDATION FAILED');
  }

  return validationPassed;
}

/**
 * Tier 2: Content Validation (~30 seconds)
 * Structure + alignment checks
 */
function validateContent() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('  TIER 2: CONTENT VALIDATION', 'cyan');
  log('  Structure + alignment checks (~30 sec)', 'gray');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

  // First run Tier 1 validation
  if (!validateTrivial()) {
    return false;
  }

  info('\nValidating content alignment...');

  // Check framework requirements are documented (5 core + 7 conditional)
  const frameworkContent = fs.readFileSync('guideline/guide/framework.md', 'utf8');

  // Check for core requirements (should be 5)
  const coreMatches = frameworkContent.match(/### \d+\. MANDATORY:/gi) || [];

  // Check for conditional patterns (should be 6-12, which is 7 patterns)
  const conditionalMatches = frameworkContent.match(/### \d+\./g) || [];
  const totalPatterns = conditionalMatches.length;

  if (totalPatterns >= 12) {
    success(`  Framework defines ${coreMatches.length} core + ${totalPatterns - coreMatches.length} conditional patterns`);
  } else {
    warning(`  Framework defines ${totalPatterns} patterns (expected 12: 5 core + 7 conditional)`);
  }

  // Check templates reference shared intelligence
  const workflowContent = fs.readFileSync('guideline/templates/workflow-command.md', 'utf8');
  if (workflowContent.includes('{SHARED_INTELLIGENCE}')) {
    success('  Workflow template has intelligence placeholder');
  } else {
    warning('  Workflow template missing {SHARED_INTELLIGENCE} placeholder');
  }

  const setupContent = fs.readFileSync('guideline/templates/setup-command.md', 'utf8');
  if (setupContent.includes('{SHARED_INTELLIGENCE}')) {
    success('  Setup template has intelligence placeholder');
  } else {
    warning('  Setup template missing {SHARED_INTELLIGENCE} placeholder');
  }

  // Check for ULTRATHINK keyword enforcement
  const ultrathinkMatches = workflowContent.match(/ULTRATHINK:/g) || [];
  if (ultrathinkMatches.length >= 5) {
    success(`  Workflow enforces ULTRATHINK keyword (${ultrathinkMatches.length} instances)`);
  } else {
    warning(`  Workflow has limited ULTRATHINK enforcement (${ultrathinkMatches.length} instances)`);
  }

  log('\n' + '─'.repeat(50), 'gray');
  success('TIER 2 VALIDATION PASSED');
  return true;
}

/**
 * Tier 3: Pattern Validation (~2-3 minutes)
 * Alignment + patterns + installation test
 */
function validatePatterns() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('  TIER 3: PATTERN VALIDATION', 'cyan');
  log('  Alignment + patterns + install test (~2-3 min)', 'gray');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

  // First run Tier 2 validation
  if (!validateContent()) {
    return false;
  }

  info('\nValidating execution patterns...');

  // Check parallel execution enforcement
  const workflowContent = fs.readFileSync('guideline/templates/workflow-command.md', 'utf8');
  if (workflowContent.includes('ALL tasks in ONE message') ||
      workflowContent.includes('ALL in ONE message')) {
    success('  Parallel execution enforced in workflow');
  } else {
    warning('  Parallel execution enforcement unclear in workflow');
  }

  // Check mandatory requirements documentation
  if (workflowContent.includes('MANDATORY') || workflowContent.includes('REQUIRED')) {
    success('  Mandatory requirements documented');
  } else {
    warning('  Mandatory requirements documentation unclear');
  }

  info('\nRunning installation test...');
  try {
    execSync('node install.js --test-mode', { stdio: 'pipe' });
    success('  Installation test passed');
  } catch (err) {
    error('  Installation test failed');
    issuesFound.push('Installation test failed');
    validationPassed = false;
  }

  info('\nRunning pattern tests...');
  try {
    execSync('node tests/test-framework-structure.js', { stdio: 'pipe' });
    success('  Pattern tests passed');
  } catch (err) {
    error('  Pattern tests failed');
    issuesFound.push('Pattern tests failed');
    validationPassed = false;
  }

  log('\n' + '─'.repeat(50), 'gray');
  if (validationPassed) {
    success('TIER 3 VALIDATION PASSED');
  } else {
    error('TIER 3 VALIDATION FAILED');
  }

  return validationPassed;
}

/**
 * Tier 4: Architectural Validation (~5-10 minutes)
 * Full test suite (same as npm run test)
 */
function validateArchitectural() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('  TIER 4: ARCHITECTURAL VALIDATION', 'cyan');
  log('  Full test suite (~5-10 min)', 'gray');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

  // First run Tier 3 validation
  if (!validatePatterns()) {
    return false;
  }

  info('\nRunning full test suite...');
  info('This includes:');
  info('  - All validation checks (Tier 1-3)');
  info('  - Pattern enforcement tests');
  info('  - Skills system tests');
  info('  - Full installation test');

  try {
    execSync('npm run test', { stdio: 'inherit' });
    success('\nFull test suite passed');
  } catch (err) {
    error('\nFull test suite failed');
    issuesFound.push('Full test suite failed');
    validationPassed = false;
  }

  log('\n' + '─'.repeat(50), 'gray');
  if (validationPassed) {
    success('TIER 4 VALIDATION PASSED - PRODUCTION READY');
  } else {
    error('TIER 4 VALIDATION FAILED');
  }

  return validationPassed;
}

/**
 * Tier Auto: Auto-detect tier based on changed files
 */
function validateAuto() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('  TIER AUTO: AUTO-DETECT VALIDATION', 'cyan');
  log('  Detecting appropriate tier based on changes', 'gray');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

  let changedFiles = [];
  try {
    const gitOutput = execSync('git diff --name-only HEAD', { encoding: 'utf8' });
    changedFiles = gitOutput.split('\n').filter(f => f.trim());
  } catch (err) {
    warning('Could not detect git changes, defaulting to Tier 2 (content validation)');
    return validateContent();
  }

  if (changedFiles.length === 0) {
    info('No changes detected, running Tier 1 (trivial validation)');
    return validateTrivial();
  }

  info(`Detected ${changedFiles.length} changed file(s):`);
  changedFiles.forEach(file => {
    log(`  - ${file}`, 'gray');
  });

  // Decision tree from CLAUDE.md
  const tier4Files = ['install.js'];
  const tier4Patterns = /framework\.md.*(requirement|principle|MANDATORY)/i;
  const tier3Files = ['guideline/templates/', 'guideline/core/shared-intelligence.md'];
  const tier2Files = ['CLAUDE.md', 'README.md', 'guideline/'];

  // Check for Tier 4
  if (changedFiles.some(f => tier4Files.includes(f) || tier4Patterns.test(f))) {
    info('\n→ Tier 4 changes detected (architectural)');
    return validateArchitectural();
  }

  // Check for Tier 3
  if (changedFiles.some(f => tier3Files.some(pattern => f.includes(pattern)))) {
    info('\n→ Tier 3 changes detected (patterns)');
    return validatePatterns();
  }

  // Check for Tier 2
  if (changedFiles.some(f => tier2Files.some(pattern => f.includes(pattern)))) {
    info('\n→ Tier 2 changes detected (content)');
    return validateContent();
  }

  // Default to Tier 1
  info('\n→ Tier 1 changes detected (trivial)');
  return validateTrivial();
}

// Main execution
function main() {
  const startTime = Date.now();

  log('\n' + '═'.repeat(50), 'cyan');
  log('  GUILD TIER-BASED VALIDATION SYSTEM', 'cyan');
  log('  Version 2.3.1', 'gray');
  log('═'.repeat(50) + '\n', 'cyan');

  let result;
  switch (tier) {
    case 'trivial':
      result = validateTrivial();
      break;
    case 'content':
      result = validateContent();
      break;
    case 'patterns':
      result = validatePatterns();
      break;
    case 'architectural':
      result = validateArchitectural();
      break;
    case 'auto':
      result = validateAuto();
      break;
    default:
      error(`Unknown tier: ${tier}`);
      error('Valid tiers: trivial, content, patterns, architectural, auto');
      process.exit(1);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  log('\n' + '═'.repeat(50), 'cyan');
  if (result) {
    success(`VALIDATION PASSED (${duration}s)`);
    if (issuesFound.length > 0) {
      warning(`\nWarnings (${issuesFound.length}):`);
      issuesFound.forEach(issue => {
        log(`  • ${issue}`, 'yellow');
      });
    }
    log('═'.repeat(50) + '\n', 'cyan');
    process.exit(0);
  } else {
    error(`VALIDATION FAILED (${duration}s)`);
    if (issuesFound.length > 0) {
      error(`\nIssues found (${issuesFound.length}):`);
      issuesFound.forEach(issue => {
        log(`  • ${issue}`, 'red');
      });
    }
    log('═'.repeat(50) + '\n', 'cyan');
    process.exit(1);
  }
}

main();
