/**
 * Test: Advisory Architecture Validation
 *
 * Validates that all Guild templates follow the new advisory model:
 * - Skills are metadata-rich and lightweight
 * - Templates present resources, don't prescribe execution
 * - Advisory tone, not prescriptive mandates
 * - Trust Claude Code's native capabilities
 */

const fs = require('fs-extra');
const path = require('path');

/**
 * Validate advisory architecture patterns across Guild files
 */
async function validateAdvisoryArchitecture() {
  console.log('🧪 Testing Advisory Architecture Patterns\n');

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
        { pattern: /{SKILL_INVENTORY}/, description: 'References skill inventory' },
        { pattern: /{AGENT_INVENTORY}/, description: 'References agent inventory' },
        { pattern: /Trust.*judgment|Consider|Recommendations|Guidance/gi, description: 'Uses advisory language', minCount: 3 },
        { pattern: /MANDATORY.*MUST.*execute/i, description: 'Avoids rigid prescriptive mandates', shouldNotExist: true }
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
        { pattern: /Skill.*Metadata.*Structure/i, description: 'Documents skill metadata patterns' },
        { pattern: /Advisory.*Prescriptive/i, description: 'Explains advisory over prescriptive' },
        { pattern: /Claude Code.*Native|Official.*Claude Code/i, description: 'References official Claude Code format' },
        { pattern: /\bMANDATORY\b|\bCRITICAL\b|\bFORBIDDEN\b/g, description: 'Minimizes rigid enforcement language', minCount: 0, maxCount: 10 }
      ]
    },
    {
      file: 'guideline/guide/framework.md',
      checks: [
        { pattern: /Skills.*Knowledge|Skills.*Pattern/i, description: 'Defines skills as knowledge patterns' },
        { pattern: /Trust.*Claude Code|Native.*Capabilities/i, description: 'Trusts Claude Code capabilities' },
        { pattern: /Advisory|Guidance|Recommendations/gi, description: 'Uses advisory terminology', minCount: 3 }
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
  console.log('📊 Advisory Architecture Validation Results:\n');
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
    console.log('\n✅ All advisory architecture checks passed!');
    console.log('   - Skills are metadata-rich: VALIDATED');
    console.log('   - Templates reference resources: VALIDATED');
    console.log('   - Advisory language used: VALIDATED');
    console.log('   - Prescriptive mandates minimized: VALIDATED\n');
  } else {
    console.log('\n❌ Some validation checks failed!');
    console.log('   Review errors above and update files.\n');
  }

  process.exit(allPassed ? 0 : 1);
}

// Run validation
validateAdvisoryArchitecture().catch(err => {
  console.error('❌ Test execution failed:', err.message);
  process.exit(1);
});
