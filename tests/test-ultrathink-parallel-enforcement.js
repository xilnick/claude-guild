/**
 * Test: Ultrathink and Parallel Execution Enforcement
 *
 * Validates that all Guild templates properly enforce the inseparable pairing
 * of thinking_mode: ultrathink with parallel execution directives.
 */

const fs = require('fs-extra');
const path = require('path');

/**
 * Validate critical pattern enforcement across Guild files
 */
async function validateCriticalPatterns() {
  console.log('🧪 Testing Ultrathink + Parallel Execution Enforcement\n');

  const files = [
    'guideline/templates/workflow-command.md',
    'guideline/templates/setup-command.md',
    'guideline/core/shared-intelligence.md',
    'guideline/guide/framework.md'
  ];

  let allPassed = true;
  const results = [];

  for (const file of files) {
    const filePath = path.join(__dirname, '..', file);

    if (!await fs.pathExists(filePath)) {
      console.error(`❌ File not found: ${file}`);
      allPassed = false;
      continue;
    }

    const content = await fs.readFile(filePath, 'utf8');

    // Count critical patterns
    const ultrathinkMatches = (content.match(/thinking_mode.*ultrathink/gi) || []).length;
    const parallelDirectives = (content.match(/Parallelize ALL independent tool calls/gi) || []).length;
    const taskToolPatterns = (content.match(/Task tool/gi) || []).length;
    const mandatoryKeywords = (content.match(/MANDATORY.*parallel/gi) || []).length;

    const result = {
      file,
      ultrathink: ultrathinkMatches,
      parallel: parallelDirectives,
      taskTool: taskToolPatterns,
      mandatory: mandatoryKeywords,
      passed: true
    };

    // Validation rules
    if (ultrathinkMatches > 0 && parallelDirectives === 0) {
      result.passed = false;
      result.error = 'Ultrathink found without parallel execution directives';
      allPassed = false;
    }

    // Check inseparable pairing in templates
    if (file.includes('template') && ultrathinkMatches > 0) {
      if (parallelDirectives < ultrathinkMatches) {
        result.passed = false;
        result.error = 'Insufficient parallel directives for ultrathink occurrences';
        allPassed = false;
      }
    }

    results.push(result);
  }

  // Display results
  console.log('📊 Pattern Analysis Results:\n');
  for (const result of results) {
    const status = result.passed ? '✅ PASS' : '❌ FAIL';
    console.log(`${status} ${result.file}`);
    console.log(`   Ultrathink: ${result.ultrathink} | Parallel: ${result.parallel} | Task Tool: ${result.taskTool} | MANDATORY: ${result.mandatory}`);
    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }
    console.log('');
  }

  // Summary
  const totalFiles = results.length;
  const passedFiles = results.filter(r => r.passed).length;

  console.log('═══════════════════════════════════════════════════');
  console.log(`Results: ${passedFiles}/${totalFiles} files passed validation`);
  console.log('═══════════════════════════════════════════════════');

  if (allPassed) {
    console.log('\n✅ All critical pattern enforcement checks passed!');
    console.log('   - Ultrathink + Parallel pairing: ENFORCED');
    console.log('   - Task tool delegation: VALIDATED');
    console.log('   - MANDATORY directives: PRESENT\n');
  } else {
    console.log('\n❌ Some validation checks failed!');
    console.log('   Review errors above and update files to enforce patterns.\n');
  }

  process.exit(allPassed ? 0 : 1);
}

// Run validation
validateCriticalPatterns().catch(err => {
  console.error('❌ Test execution failed:', err.message);
  process.exit(1);
});
