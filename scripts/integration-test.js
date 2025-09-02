#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

/**
 * Integration test for Guild installation
 */
async function runIntegrationTest() {
  console.log('🧪 Running Guild Integration Test\n');
  
  // Create temporary test directory
  const testDir = path.join(os.tmpdir(), `guild-test-${Date.now()}`);
  console.log(`📁 Test directory: ${testDir}\n`);
  
  try {
    // Setup test environment
    console.log('1️⃣ Setting up test environment...');
    await fs.ensureDir(testDir);
    await fs.ensureDir(path.join(testDir, '.claude'));
    
    // Simulate installation
    console.log('2️⃣ Simulating Guild installation...');
    const install = require('../install.js');
    
    // Mock options for non-interactive install
    const options = {
      interactive: false,
      scope: 'custom',
      path: testDir,
      guildDir: 'guild',
      clean: true,
      testMode: false
    };
    
    // Run installation
    await install.install(options);
    
    // Verify installation
    console.log('3️⃣ Verifying installation structure...');
    
    const checks = [
      { path: '.claude/commands', type: 'directory' },
      { path: '.claude/commands/guild.md', type: 'file' },
      { path: '.claude/commands/guild', type: 'directory' },
      { path: '.claude/commands/guild/setup.md', type: 'file' }
    ];
    
    let allPassed = true;
    for (const check of checks) {
      const fullPath = path.join(testDir, check.path);
      const exists = await fs.pathExists(fullPath);
      
      if (exists) {
        const stats = await fs.stat(fullPath);
        const isCorrectType = check.type === 'directory' ? stats.isDirectory() : stats.isFile();
        
        if (isCorrectType) {
          console.log(`  ✅ ${check.path} (${check.type})`);
        } else {
          console.log(`  ❌ ${check.path} exists but wrong type`);
          allPassed = false;
        }
      } else {
        console.log(`  ❌ ${check.path} missing`);
        allPassed = false;
      }
    }
    
    // Verify setup command content
    console.log('\n4️⃣ Verifying setup command composition...');
    const setupPath = path.join(testDir, '.claude/commands/guild/setup.md');
    const setupContent = await fs.readFile(setupPath, 'utf-8');
    
    // Check for embedded intelligence (should have core modules injected)
    const requiredSections = [
      'INTELLIGENT HIRING',
      'PROJECT-SPECIFIC TEAMS', 
      'TEAM COORDINATION',
      'DYNAMIC LEADERSHIP',
      'COLLABORATIVE EXECUTION'
    ];
    
    for (const section of requiredSections) {
      if (setupContent.includes(section)) {
        console.log(`  ✅ Setup contains: ${section}`);
      } else {
        console.log(`  ❌ Setup missing: ${section}`);
        allPassed = false;
      }
    }
    
    // Check for no injection markers (they should be replaced)
    if (setupContent.includes('<!-- INJECT:')) {
      console.log('  ❌ Setup still contains injection markers');
      allPassed = false;
    } else {
      console.log('  ✅ Setup has no injection markers (properly composed)');
    }
    
    // Cleanup
    console.log('\n5️⃣ Cleaning up test directory...');
    await fs.remove(testDir);
    console.log('  ✅ Test directory cleaned');
    
    // Results
    console.log('\n' + '='.repeat(60));
    if (allPassed) {
      console.log('✅ INTEGRATION TEST PASSED');
      console.log('   All components installed correctly');
      console.log('   Setup command properly composed');
      console.log('   System ready for use');
    } else {
      console.log('❌ INTEGRATION TEST FAILED');
      console.log('   Some components missing or incorrect');
      process.exit(1);
    }
    console.log('='.repeat(60));
    
  } catch (error) {
    console.error('\n❌ Integration test failed:', error.message);
    
    // Cleanup on error
    try {
      await fs.remove(testDir);
    } catch (cleanupError) {
      console.error('Failed to cleanup:', cleanupError.message);
    }
    
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  runIntegrationTest()
    .catch(error => {
      console.error('💥 Test failed:', error);
      process.exit(1);
    });
}

module.exports = { runIntegrationTest };