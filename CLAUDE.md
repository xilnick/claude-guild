# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Guild System Development Workflow

**CRITICAL**: Follow this mandatory workflow when modifying the Guild system architecture.

### **Reference-First Development Architecture**

The Guild system uses a **reference → core generation** architecture where:
- **Reference documents** are the authoritative source of truth
- **Core modules** are generated/extracted from reference documents  
- **Setup command** is composed from generated core modules

### **🔄 MANDATORY WORKFLOW SEQUENCE**

When making changes to Guild intelligence or architecture:

#### **1. FIRST: Modify Reference Documents**
```
guideline/reference/
├── master-system-principles.md     ← Comprehensive source of truth
├── master-agent-architecture.md    ← Complete agent specifications  
├── master-workflow-patterns.md     ← Full workflow documentation
├── master-context-engineering.md   ← Complete context protocols
└── master-project-analysis.md      ← Full analysis strategies
```

**Requirements**:
- Update the comprehensive reference document FIRST
- Include all changes in the authoritative reference
- Mark sections for core extraction with `<!-- CORE-START -->` and `<!-- CORE-END -->`
- Ensure reference is complete and self-contained

#### **2. SECOND: Generate Core Modules**
```
guideline/core/
├── system-principles.md      ← Generated from reference
├── agent-architecture.md     ← Generated from reference  
├── workflow-patterns.md      ← Generated from reference
├── context-engineering.md    ← Generated from reference
└── project-analysis.md       ← Generated from reference
```

**Process**:
```bash
# Run the core generation process
node scripts/generate-core.js

# Or manually extract marked sections from reference documents
# Extract content between <!-- CORE-START --> and <!-- CORE-END -->
```

#### **3. THIRD: Validate Setup Command Composition**
```bash
# Test the installation process
node install.js --test-mode

# Verify setup command generation
node -e "
const { loadCoreModules, composeSetupCommand } = require('./install.js');
// Test module loading and composition
"
```

#### **4. FOURTH: Test Complete System**
```bash
# Full installation test
npm run test-install

# Validate generated setup command
npm run validate-setup
```

### **❌ NEVER DO THIS**

**DO NOT modify core modules directly**:
```
❌ Editing guideline/core/*.md directly
❌ Making changes to core without updating reference
❌ Bypassing the reference → core generation workflow
```

**Consequences of direct core modification**:
- Changes will be lost when core is regenerated
- Reference and core become inconsistent
- System intelligence degrades
- Maintenance becomes impossible

### **✅ CORRECT WORKFLOW EXAMPLE**

**Task**: Update agent thinking mode assignments

**Step 1 - Modify Reference**:
```markdown
<!-- In guideline/reference/master-agent-architecture.md -->

## Agent Thinking Mode Strategy

<!-- CORE-START -->
### Strategic Agents (ultrathink)
- guild-reasoning-agent: Comprehensive requirement analysis  
- guild-planning-agent: Strategic workflow coordination

### Analytical Agents (think-harder)  
- guild-specification-agent: Thorough specification analysis
- guild-security-agent: Deep security analysis (NEW)

### Implementation Agents (think)
- All technology engineers: Focused execution
- guild-verification-agent: Systematic validation
<!-- CORE-END -->

## Detailed Thinking Mode Implementation
[Comprehensive explanation of each thinking mode...]
```

**Step 2 - Generate Core**:
```bash
# Extract the CORE-START/CORE-END section to core/agent-architecture.md
node scripts/generate-core.js --module agent-architecture
```

**Step 3 - Validate**:
```bash
# Test installation and setup command generation
node install.js --test-mode
```

### **🛠️ Core Generation Implementation**

**Future Enhancement**: The system will include automated core generation:

```javascript
// scripts/generate-core.js
async function generateCoreFromReference() {
  const referenceDir = 'guideline/reference';
  const coreDir = 'guideline/core';
  
  // Find master reference documents
  const masterFiles = await fs.readdir(referenceDir);
  
  for (const file of masterFiles) {
    if (file.startsWith('master-') && file.endsWith('.md')) {
      const referenceContent = await fs.readFile(
        path.join(referenceDir, file), 'utf-8'
      );
      
      // Extract core sections
      const coreContent = extractCoreSections(referenceContent);
      const coreFileName = file.replace('master-', '');
      
      await fs.writeFile(
        path.join(coreDir, coreFileName),
        coreContent
      );
    }
  }
}

function extractCoreSections(content) {
  const corePattern = /<!-- CORE-START -->([\s\S]*?)<!-- CORE-END -->/g;
  const matches = [...content.matchAll(corePattern)];
  
  return matches.map(match => match[1].trim()).join('\n\n');
}
```

### **📝 Reference Document Structure**

**Template for reference documents**:
```markdown
# Master [Topic] Reference

## Overview
Comprehensive explanation of the topic...

## Core Intelligence
<!-- CORE-START -->
Essential intelligence content that gets embedded in setup command:
- Key patterns and configurations
- Critical system behavior
- Essential templates and examples
<!-- CORE-END -->

## Implementation Details  
Detailed explanation for developers...

## Best Practices
Guidelines and recommendations...

## Troubleshooting
Common issues and solutions...

## Examples
Comprehensive examples and patterns...
```

### **🔄 Migration Strategy**

**Phase 1**: Create comprehensive reference documents
**Phase 2**: Implement core generation scripts  
**Phase 3**: Automate generation in build process
**Phase 4**: Remove manual core editing workflow

### **⚡ Benefits of This Workflow**

✅ **Single Source of Truth**: Reference documents are authoritative  
✅ **Automated Consistency**: Core always reflects latest reference  
✅ **Better Documentation**: Comprehensive without embedding constraints  
✅ **Maintainable**: Update once, propagate everywhere  
✅ **Flexible**: Generate different intelligence profiles as needed  

### **🚨 Critical Success Factors**

1. **Always update reference first** - This is the source of truth
2. **Use core generation process** - Never edit core directly  
3. **Mark embedding sections clearly** - Use CORE-START/CORE-END consistently
4. **Validate after changes** - Test installation and setup generation
5. **Keep reference comprehensive** - Include all context developers need

---

## Development Guidelines

- **Do what has been asked; nothing more, nothing less**
- **NEVER create files unless absolutely necessary**  
- **ALWAYS prefer editing existing files over creating new ones**
- **NEVER proactively create documentation files** unless explicitly requested

## Guild System Rules

- **Reference documents are authoritative** - Always modify reference first
- **Core modules are generated** - Never edit core directly
- **Test after changes** - Validate installation and setup generation
- **Follow the workflow** - Reference → Core → Validation → Testing