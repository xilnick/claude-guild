/**
 * Test: Generated Command Content Validation
 *
 * Validates that install.js properly embeds intelligence into generated commands.
 * Tests that workflow.md and setup.md contain all required patterns.
 */

const fs = require('fs-extra');
const path = require('path');
const os = require('os');

async function validateGeneratedCommands() {
  console.log('\n🧪 Testing Generated Command Content\n');

  const testDir = path.join(os.tmpdir(), 'guild-command-test-' + Date.now());

  try {
    // Import install function
    const installModule = require('../install.js');

    console.log('📦 Installing to test directory...');

    // Mock process.argv for non-interactive mode
    const originalArgv = process.argv;
    process.argv = ['node', 'install.js', '--no-interaction', '--path', testDir];

    // Run installation (assuming install is exported or we'll run it via child_process)
    const { execSync } = require('child_process');
    execSync(`node ${path.join(__dirname, '..', 'install.js')} --no-interaction --path ${testDir}`, {
      stdio: 'pipe'
    });

    process.argv = originalArgv;

    // Check workflow.md exists and has required patterns
    const workflowPath = path.join(testDir, '.claude', 'commands', 'guild', 'workflow.md');
    const setupPath = path.join(testDir, '.claude', 'commands', 'guild', 'setup.md');

    if (!await fs.pathExists(workflowPath)) {
      throw new Error('workflow.md not generated');
    }

    if (!await fs.pathExists(setupPath)) {
      throw new Error('setup.md not generated');
    }

    const workflowContent = await fs.readFile(workflowPath, 'utf8');
    const setupContent = await fs.readFile(setupPath, 'utf8');

    // Define required patterns
    const workflowChecks = [
      { pattern: /ULTRATHINK/g, description: 'ULTRATHINK keyword enforcement', minCount: 5 },
      { pattern: /Task\s*\(/g, description: 'Task tool usage patterns', minCount: 3 },
      { pattern: /MANDATORY|CRITICAL/gi, description: 'Mandatory requirements', minCount: 2 },
      { pattern: /subagent_type.*general-purpose|Explore|Plan/g, description: 'Built-in agent types', minCount: 3 },
      { pattern: /\{SHARED_INTELLIGENCE\}/g, description: 'Intelligence placeholder removed', maxCount: 0 },
      { pattern: /\{AGENT_INVENTORY\}/g, description: 'Agent inventory placeholder removed', maxCount: 0 },
      { pattern: /thinking_mode:\s*ultrathink/g, description: 'YAML frontmatter ultrathink', minCount: 1 }
    ];

    const setupChecks = [
      { pattern: /ULTRATHINK/g, description: 'ULTRATHINK keyword enforcement', minCount: 3 },
      { pattern: /\.claude\/skills\/guild/g, description: 'Skills directory reference', minCount: 1 },
      { pattern: /\.claude\/agents\/guild/g, description: 'Agents directory reference', minCount: 1 },
      { pattern: /\{SHARED_INTELLIGENCE\}/g, description: 'Intelligence placeholder removed', maxCount: 0 },
      { pattern: /SKILL\.md/g, description: 'Official SKILL.md format', minCount: 1 },
      { pattern: /thinking_mode:\s*ultrathink/g, description: 'YAML frontmatter ultrathink', minCount: 1 }
    ];

    // Validate workflow.md
    console.log('✓ Validating workflow.md content...');
    let allPassed = true;

    for (const check of workflowChecks) {
      const matches = (workflowContent.match(check.pattern) || []).length;
      const minCount = check.minCount !== undefined ? check.minCount : null;
      const maxCount = check.maxCount !== undefined ? check.maxCount : null;

      let passed = true;
      if (minCount !== null && matches < minCount) passed = false;
      if (maxCount !== null && matches > maxCount) passed = false;

      if (!passed) {
        const expected = minCount !== null && maxCount !== null ? `${minCount}-${maxCount}` :
                        minCount !== null ? `≥${minCount}` :
                        maxCount !== null ? `≤${maxCount}` : 'any';
        console.error(`  ❌ ${check.description} (expected ${expected}, found ${matches})`);
        allPassed = false;
      } else {
        console.log(`  ✅ ${check.description} (${matches} matches)`);
      }
    }

    // Validate setup.md
    console.log('\n✓ Validating setup.md content...');

    for (const check of setupChecks) {
      const matches = (setupContent.match(check.pattern) || []).length;
      const minCount = check.minCount !== undefined ? check.minCount : null;
      const maxCount = check.maxCount !== undefined ? check.maxCount : null;

      let passed = true;
      if (minCount !== null && matches < minCount) passed = false;
      if (maxCount !== null && matches > maxCount) passed = false;

      if (!passed) {
        const expected = minCount !== null && maxCount !== null ? `${minCount}-${maxCount}` :
                        minCount !== null ? `≥${minCount}` :
                        maxCount !== null ? `≤${maxCount}` : 'any';
        console.error(`  ❌ ${check.description} (expected ${expected}, found ${matches})`);
        allPassed = false;
      } else {
        console.log(`  ✅ ${check.description} (${matches} matches)`);
      }
    }

    // Clean up test directory
    await fs.remove(testDir);

    console.log('\n═══════════════════════════════════════════════════');
    if (allPassed) {
      console.log('✅ All generated command content checks passed!');
      console.log('═══════════════════════════════════════════════════\n');
      process.exit(0);
    } else {
      console.log('❌ Some generated command checks failed!');
      console.log('═══════════════════════════════════════════════════\n');
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    // Clean up on error
    if (await fs.pathExists(testDir)) {
      await fs.remove(testDir);
    }
    process.exit(1);
  }
}

// Run validation
validateGeneratedCommands().catch(err => {
  console.error('❌ Test execution failed:', err.message);
  process.exit(1);
});
