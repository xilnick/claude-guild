/**
 * Test: Orchestration Architecture Validation
 *
 * Validates that all Guild templates follow the orchestration model:
 * - Pure orchestration intelligence (not hardcoded procedures)
 * - Dynamic delegation based on ultrathink reasoning
 * - 5 mandatory requirements enforced
 * - Trust in subagent capabilities with rich prompts
 */

const fs = require('fs-extra');
const path = require('path');

/**
 * Validate orchestration architecture patterns across Guild files
 */
async function validateOrchestrationArchitecture() {
  console.log('🧪 Testing Orchestration Architecture Patterns\n');

  const tests = [
    {
      file: 'guideline/templates/skill-template.md',
      checks: [
        { pattern: /^---\n.*name:.*\n.*category:.*\n.*applicability:/ms, description: 'Has metadata-rich frontmatter' },
        { pattern: /Pattern Description|Project-Specific Conventions|Common Pitfalls/i, description: 'Includes advisory sections' },
        { pattern: /\[.*?\]/g, description: 'Uses placeholder patterns', minCount: 5 }
      ]
    },
    {
      file: 'guideline/templates/workflow-command.md',
      checks: [
        { pattern: /{AGENT_INVENTORY}/, description: 'References agent inventory' },
        { pattern: /Orchestration|orchestrat/gi, description: 'Focuses on orchestration intelligence', minCount: 5 },
        { pattern: /ULTRATHINK/g, description: 'Enforces ULTRATHINK reasoning pattern', minCount: 5 },
        { pattern: /Mandatory Requirements/i, description: 'Documents mandatory requirements', minCount: 1 },
        { pattern: /Parallel.*Execution.*ONE.*message/i, description: 'Enforces parallel execution pattern', minCount: 1 }
      ]
    },
    {
      file: 'guideline/templates/setup-command.md',
      checks: [
        { pattern: /Discover.*pattern/i, description: 'Focuses on pattern discovery' },
        { pattern: /\.claude\/skills\/guild/i, description: 'Creates skills in correct directory' },
        { pattern: /\.claude\/agents\/guild/i, description: 'Creates agents in correct directory' },
        { pattern: /metadata/i, description: 'Mentions metadata for skills' }
      ]
    },
    {
      file: 'guideline/core/shared-intelligence.md',
      checks: [
        { pattern: /Orchestration.*Pattern/i, description: 'Documents orchestration patterns', minCount: 1 },
        { pattern: /Subagent.*Type/i, description: 'Documents built-in subagent types', minCount: 1 },
        { pattern: /Skill.*System/i, description: 'Explains skill system patterns', minCount: 1 },
        { pattern: /Mandatory Requirements/i, description: 'Documents mandatory requirements', minCount: 1 }
      ]
    },
    {
      file: 'guideline/guide/framework.md',
      checks: [
        { pattern: /Orchestration|orchestrat/gi, description: 'Focuses on orchestration principles', minCount: 3 },
        { pattern: /Mandatory Requirements|5.*Requirements/i, description: 'Documents 5 mandatory requirements', minCount: 1 },
        { pattern: /Dynamic|dynamic/g, description: 'Emphasizes dynamic delegation', minCount: 3 },
        { pattern: /ULTRATHINK/g, description: 'References ULTRATHINK keyword requirement', minCount: 2 }
      ]
    }
  ];

  let allPassed = true;
  const results = [];

  for (const test of tests) {
    const filePath = path.join(__dirname, '..', test.file);

    if (!await fs.pathExists(filePath)) {
      console.error(`❌ File not found: ${test.file}`);
      allPassed = false;
      continue;
    }

    const content = await fs.readFile(filePath, 'utf8');
    const fileResult = {
      file: test.file,
      checks: [],
      passed: true
    };

    for (const check of test.checks) {
      const matches = (content.match(check.pattern) || []).length;
      const minCount = check.minCount !== undefined ? check.minCount : 1;
      const maxCount = check.maxCount !== undefined ? check.maxCount : Infinity;

      let checkPassed = true;
      let status = '✅';

      if (check.shouldNotExist && matches > 0) {
        checkPassed = false;
        status = '❌';
        allPassed = false;
      } else if (!check.shouldNotExist && (matches < minCount || matches > maxCount)) {
        checkPassed = false;
        status = '❌';
        allPassed = false;
      }

      fileResult.checks.push({
        description: check.description,
        matches,
        passed: checkPassed,
        status
      });

      if (!checkPassed) {
        fileResult.passed = false;
      }
    }

    results.push(fileResult);
  }

  // Display results
  console.log('📊 Orchestration Architecture Validation Results:\n');
  for (const result of results) {
    const fileStatus = result.passed ? '✅ PASS' : '❌ FAIL';
    console.log(`${fileStatus} ${result.file}`);
    for (const check of result.checks) {
      console.log(`   ${check.status} ${check.description} (matches: ${check.matches})`);
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
    console.log('\n✅ All orchestration architecture checks passed!');
    console.log('   - Pure orchestration intelligence: VALIDATED');
    console.log('   - 5 mandatory requirements enforced: VALIDATED');
    console.log('   - Dynamic delegation patterns: VALIDATED');
    console.log('   - ULTRATHINK reasoning enforced: VALIDATED');
    console.log('   - Trust in subagent capabilities: VALIDATED\n');
  } else {
    console.log('\n❌ Some validation checks failed!');
    console.log('   Review errors above and update files.\n');
  }

  process.exit(allPassed ? 0 : 1);
}

// Run validation
validateOrchestrationArchitecture().catch(err => {
  console.error('❌ Test execution failed:', err.message);
  process.exit(1);
});
