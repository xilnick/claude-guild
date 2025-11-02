/**
 * Test: Enforcement Architecture Validation
 *
 * Validates that all Guild templates follow the enforcement-based model:
 * - Skills are metadata-rich and lightweight (maintained)
 * - Templates enforce core requirements + conditional patterns for quality/performance
 * - Balances enforcement with trust in Claude Code capabilities
 * - Advisory guidance within mandatory execution framework
 */

const fs = require('fs-extra');
const path = require('path');

/**
 * Validate enforcement architecture patterns across Guild files
 */
async function validateEnforcementArchitecture() {
  console.log('🧪 Testing Enforcement Architecture Patterns\n');

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
        { pattern: /MANDATORY|CRITICAL|REQUIRED/gi, description: 'Enforces mandatory requirements', minCount: 10, maxCount: 50 },
        { pattern: /ULTRATHINK/g, description: 'Enforces ULTRATHINK reasoning pattern', minCount: 5 }
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
        { pattern: /Core.*Requirements|Conditional.*Patterns|Operational.*Excellence/i, description: 'Explains core requirements and conditional patterns structure' },
        { pattern: /Claude Code.*Native|Official.*Claude Code/i, description: 'References official Claude Code format' },
        { pattern: /\bMANDATORY\b|\bCRITICAL\b|\bFORBIDDEN\b/g, description: 'Enforces mandatory requirements', minCount: 5, maxCount: 30 }
      ]
    },
    {
      file: 'guideline/guide/framework.md',
      checks: [
        { pattern: /Skills.*Knowledge|Skills.*Pattern/i, description: 'Defines skills as knowledge patterns' },
        { pattern: /Core.*Requirements.*Conditional.*Excellence|core.*requirements.*conditional/gi, description: 'Documents core requirements + conditional patterns' },
        { pattern: /\bMANDATORY\b|\bCRITICAL\b|\bREQUIRED\b/g, description: 'References mandatory requirements (consolidated)', minCount: 3, maxCount: 20 },
        { pattern: /shared-intelligence\.md/i, description: 'References shared intelligence for implementation details' },
        { pattern: /ULTRATHINK/g, description: 'References ULTRATHINK keyword requirement', minCount: 3 }
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
  console.log('📊 Enforcement Architecture Validation Results:\n');
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
    console.log('\n✅ All enforcement architecture checks passed!');
    console.log('   - Skills are metadata-rich: VALIDATED');
    console.log('   - Templates enforce core requirements + conditional patterns: VALIDATED');
    console.log('   - Enforcement language appropriate: VALIDATED');
    console.log('   - ULTRATHINK reasoning enforced: VALIDATED');
    console.log('   - Balances enforcement with trust in capabilities: VALIDATED\n');
  } else {
    console.log('\n❌ Some validation checks failed!');
    console.log('   Review errors above and update files.\n');
  }

  process.exit(allPassed ? 0 : 1);
}

// Run validation
validateEnforcementArchitecture().catch(err => {
  console.error('❌ Test execution failed:', err.message);
  process.exit(1);
});
