#!/usr/bin/env node

const fs = require('fs-extra');
const { execSync, spawn } = require('child_process');
const path = require('path');
const { intro, outro, select, confirm, spinner, log, isCancel, cancel } = require('@clack/prompts');

// Parse command line arguments
const args = process.argv.slice(2);
const isNonInteractive = args.includes('--no-interaction') || args.includes('--non-interactive') || args.includes('-y');
const isDryRun = args.includes('--dry-run');

// Helper function to calculate next version
function calculateNextVersion(currentVersion, bump) {
    const parts = currentVersion.split('.').map(Number);
    switch (bump) {
        case 'patch':
            return `${parts[0]}.${parts[1]}.${parts[2] + 1}`;
        case 'minor':
            return `${parts[0]}.${parts[1] + 1}.0`;
        case 'major':
            return `${parts[0] + 1}.0.0`;
        default:
            return currentVersion;
    }
}

// Helper function to run shell commands
function runCommand(command, options = {}) {
    try {
        return execSync(command, { 
            encoding: 'utf8',
            stdio: options.silent ? 'pipe' : 'inherit',
            ...options 
        }).trim();
    } catch (error) {
        if (options.allowFailure) {
            return null;
        }
        throw error;
    }
}

async function main() {
    // Only prevent recursion during actual npm publish, not our custom script
    if (process.env.npm_lifecycle_event === 'prepublishOnly' && process.env.npm_command === 'publish') {
        log.info('🔄 Detected npm publish lifecycle - exiting to avoid recursion');
        return;
    }
    
    intro('🏛️ Claude Guild - Publishing to npm');

    // Check if we're in the right directory
    if (!fs.existsSync('package.json')) {
        log.error('❌ Error: package.json not found. Please run from project root.');
        process.exit(1);
    }

    if (!fs.existsSync('install.js')) {
        log.error('❌ Error: install.js not found.');
        process.exit(1);
    }

    // Verify npm authentication
    const s1 = spinner();
    s1.start('🔐 Checking npm authentication...');
    
    const whoami = runCommand('npm whoami', { silent: true, allowFailure: true });
    if (!whoami) {
        s1.stop('❌ Please login to npm first: npm login');
        process.exit(1);
    }
    s1.stop(`✅ Authenticated as ${whoami}`);

    // Clean up test artifacts
    const s2 = spinner();
    s2.start('🧹 Cleaning up test artifacts...');
    runCommand('rm -rf .claude .guild CLAUDE.md.backup', { silent: true, allowFailure: true });
    s2.stop('✅ Cleaned up test artifacts');

    // Test installation
    const s3 = spinner();
    s3.start('🧪 Testing installation...');
    try {
        runCommand('node install.js --test-mode', { silent: true });
        s3.stop('✅ Installation test passed');
    } catch (error) {
        s3.stop('❌ Installation test failed');
        process.exit(1);
    }

    // Clean up test artifacts again
    runCommand('rm -rf .claude .guild CLAUDE.md.backup', { silent: true, allowFailure: true });

    // Get current version
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const currentVersion = packageJson.version;
    
    log.info(`📦 Current version: ${currentVersion}`);

    let selectedBump = 'skip';
    let newVersion = currentVersion;

    if (isNonInteractive) {
        // Non-interactive mode defaults to patch
        selectedBump = 'patch';
        newVersion = calculateNextVersion(currentVersion, 'patch');
        log.info(`🤖 Non-interactive mode: bumping to ${newVersion}`);
    } else {
        // Interactive mode
        const bumpChoice = await select({
            message: 'Select version bump:',
            options: [
                {
                    value: 'patch',
                    label: `patch (bug fixes: ${currentVersion} → ${calculateNextVersion(currentVersion, 'patch')})`
                },
                {
                    value: 'minor', 
                    label: `minor (new features: ${currentVersion} → ${calculateNextVersion(currentVersion, 'minor')})`
                },
                {
                    value: 'major',
                    label: `major (breaking changes: ${currentVersion} → ${calculateNextVersion(currentVersion, 'major')})`
                },
                {
                    value: 'skip',
                    label: 'Skip version bump'
                }
            ]
        });

        if (isCancel(bumpChoice)) {
            cancel('❌ Publication cancelled');
            process.exit(0);
        }

        selectedBump = bumpChoice;
        newVersion = selectedBump === 'skip' ? currentVersion : calculateNextVersion(currentVersion, selectedBump);
    }

    // Apply version bump if needed
    if (selectedBump !== 'skip') {
        const s4 = spinner();
        s4.start(`📈 Bumping ${selectedBump} version...`);
        
        // Update package.json manually to avoid git issues
        packageJson.version = newVersion;
        fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');
        
        s4.stop(`✅ Version updated to ${newVersion}`);

        if (selectedBump !== 'skip') {
            log.info('ℹ️  Note: Git commit and tag were not created automatically.');
            log.info(`   After publishing, you may want to commit and tag:`);
            log.info(`   git add package.json && git commit -m 'v${newVersion}' && git tag v${newVersion}`);
        }
    }

    log.info(`📦 Publishing version: ${newVersion}`);

    // Confirm publication
    let shouldPublish = isNonInteractive;
    
    if (!isNonInteractive) {
        const publishConfirm = await confirm({
            message: `Publish claude-guild@${newVersion} to npm?`,
            initialValue: false
        });

        if (isCancel(publishConfirm)) {
            cancel('❌ Publication cancelled');
            process.exit(0);
        }

        shouldPublish = publishConfirm;
    }

    if (shouldPublish) {
        if (isDryRun) {
            log.info('🧪 Dry run mode - would publish claude-guild@' + newVersion);
        } else {
            const s5 = spinner();
            s5.start('🚀 Publishing to npm...');
            
            try {
                runCommand('npm publish --access public');
                s5.stop(`✅ Successfully published claude-guild@${newVersion}`);
            
            log.info('🎉 Installation command:');
            log.info(`   npx claude-guild`);
                log.info('📋 Next steps:');
                log.info(`   1. Test installation: npx claude-guild@${newVersion}`);
                log.info(`   2. Update documentation if needed`);
                log.info(`   3. Create GitHub release`);
            } catch (error) {
                s5.stop('❌ Publication failed');
                process.exit(1);
            }
        }
    } else {
        cancel('❌ Publication cancelled');
        process.exit(0);
    }

    outro(isDryRun ? '🧪 Dry run complete!' : '🎉 Publication complete!');
}

main().catch((error) => {
    log.error('❌ Unexpected error:', error.message);
    process.exit(1);
});