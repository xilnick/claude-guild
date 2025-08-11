#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

/**
 * Generate core modules from reference documents
 * Extracts content between <!-- CORE-START --> and <!-- CORE-END --> markers
 */
async function generateCoreFromReference() {
  const referenceDir = path.join(__dirname, '..', 'guideline', 'reference');
  const coreDir = path.join(__dirname, '..', 'guideline', 'core');
  
  console.log('🔄 Generating core modules from reference documents...');
  
  try {
    // Ensure directories exist
    await fs.ensureDir(referenceDir);
    await fs.ensureDir(coreDir);
    
    // Find all master reference documents
    const files = await fs.readdir(referenceDir);
    const masterFiles = files.filter(f => f.startsWith('master-') && f.endsWith('.md'));
    
    if (masterFiles.length === 0) {
      console.log('📝 No master reference documents found');
      console.log('   Create master-*.md files in guideline/reference/ with <!-- CORE-START/END --> markers');
      return;
    }
    
    let generatedCount = 0;
    
    for (const file of masterFiles) {
      const referencePath = path.join(referenceDir, file);
      const referenceContent = await fs.readFile(referencePath, 'utf-8');
      
      // Extract core sections
      const coreContent = extractCoreSections(referenceContent);
      
      if (coreContent) {
        // Generate core module name (remove 'master-' prefix)
        const coreFileName = file.replace('master-', '');
        const corePath = path.join(coreDir, coreFileName);
        
        // Add module header
        const moduleName = coreFileName.replace('.md', '')
          .split('-')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        
        const finalContent = `# ${moduleName} Module

## Purpose
Core ${moduleName.toLowerCase()} that defines the Guild system's intelligence. This module is embedded into the setup command.

## Embedded Intelligence

${coreContent}

## Integration Points

### Setup Command Embedding
This module is embedded into \`/guild:setup\` command during installation.

### Module Dependencies
- Extracted from: ${file}

### Module Consumers
- \`/guild:setup\` command (primary)
- Agent generation logic
- Workflow orchestration`;
        
        await fs.writeFile(corePath, finalContent);
        console.log(`✅ Generated: ${coreFileName} from ${file}`);
        generatedCount++;
      } else {
        console.log(`⚠️  No CORE sections found in ${file}`);
      }
    }
    
    console.log(`\n📦 Generated ${generatedCount} core modules`);
    
  } catch (error) {
    console.error('❌ Error generating core modules:', error.message);
    process.exit(1);
  }
}

/**
 * Extract content between CORE-START and CORE-END markers
 */
function extractCoreSections(content) {
  const corePattern = /<!-- CORE-START -->([\s\S]*?)<!-- CORE-END -->/g;
  const matches = [...content.matchAll(corePattern)];
  
  if (matches.length === 0) {
    return null;
  }
  
  // Join all core sections with proper spacing
  return matches.map(match => match[1].trim()).join('\n\n');
}

// Run if executed directly
if (require.main === module) {
  generateCoreFromReference()
    .then(() => {
      console.log('✨ Core generation complete');
    })
    .catch(error => {
      console.error('💥 Core generation failed:', error);
      process.exit(1);
    });
}

module.exports = { generateCoreFromReference, extractCoreSections };