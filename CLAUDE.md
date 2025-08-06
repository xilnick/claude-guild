# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Claude Guild is an NPM package that provides comprehensive workflow integration for Claude Code through custom commands. It transforms development workflows by installing command files that activate a Multi-stage process for systematic task execution across any technology stack.

**📋 Complete Technical Specification**: See [GUIDELINE.md](./GUIDELINE.md) for comprehensive workflow architecture, unified engineer specifications, and detailed implementation guidelines.

## Essential Development Commands

### Package Development
```bash
# Development
npm install                    # Install dependencies (fs-extra)
node install.js              # Test installation locally
npm run test-install         # Test the installation process

# Testing & Validation
./publish.sh                 # Full publication workflow with testing

# Version Management
npm version patch|minor|major # Bump version
npm run publish              # Interactive publish with version bump
npm run publish-direct       # Direct publish to NPM
```

### Local Testing
```bash
# Test the installation in current directory
node install.js

# Clean up test artifacts
rm -rf .claude .guild CLAUDE.md

# Test installation from npm
npx claude-guild@latest
```

### Key Integration Points

**Unified Engineer Creation**: The `/guild:setup` command analyzes your project's technology stack and creates specialized unified engineers that handle both planning and implementation with shared context operation.

**Workflow Activation**: All commands follow the Multi-stage process with mandatory prompt analysis, context research, and unified planning+implementation phases.

## Technology Stack

### Runtime Requirements
- **Node.js**: 18+ (currently testing with 22.16.0)
- **NPM**: Package manager for distribution
- **fs-extra**: Enhanced file system operations (v11.3.0)

### Project Structure
```
claude-guild/
├── commands/           # Guild command definitions
├── templates/          # Template files for project setup
├── install.js          # Main installation script
├── package.json        # NPM package configuration
├── publish.sh          # Publication workflow script
├── quickstart.sh       # Quick setup script
└── GUIDELINE.md        # Complete technical specification
```

### Publication Lifecycle
The `publish.sh` script handles complete publication workflow:
1. Authentication verification
2. Test artifact cleanup
3. Installation testing
4. Version bump selection (patch/minor/major)
5. NPM publication with access control
6. Post-publication validation

This ensures reliable distribution while maintaining package quality and compatibility across diverse development environments.

**📋 Architecture & Implementation Details**: Follow [GUIDELINE.md](./GUIDELINE.md) and maintain applied changed for complete workflow specifications, unified engineer architecture, research context pipeline integration, and compliance requirements.

**Important** do not modify .guild , .serena , .claude folders 

## Development Guidelines

### CRITICAL WORKFLOW ORDER - MUST FOLLOW

**⚠️ MANDATORY SEQUENCE FOR ALL CHANGES:**

1. **FIRST: Update GUIDELINE.md**
   - GUIDELINE.md is the authoritative specification
   - All system behavior flows from this specification
   - Define the desired behavior/architecture in GUIDELINE.md FIRST
   - This is the source of truth for the entire system

2. **SECOND: Update Templates** 
   - After GUIDELINE.md changes are complete
   - Reflect the specification changes in template files:
     - `templates/processes.md` - Update workflow processes
     - `templates/routing.md` - Update routing rules
     - `templates/agents.md` - Update agent templates
     - `templates/instructions.md` - Update default configuration
     - Enhancement templates as needed

3. **THIRD: Update Commands**
   - After templates are updated
   - Ensure commands properly reference updated templates:
     - `commands/setup.md` - Reflect new setup process
     - `commands/guild.md` - Update workflow execution
     - Other command files as needed

### Why This Order Matters

```yaml
Flow Direction:
  GUIDELINE.md (Specification)
    ↓ defines
  Templates (Implementation Patterns)  
    ↓ instantiated by
  Commands (Execution Logic)
    ↓ creates
  Project Installation (.guild/)
```

**NEVER** update templates or commands without first updating GUIDELINE.md.
**NEVER** make changes that aren't specified in GUIDELINE.md.

### Validation Checklist

Before any change:
- [ ] Is this change defined in GUIDELINE.md?
- [ ] Does GUIDELINE.md specify how this should work?
- [ ] Are all affected templates identified?
- [ ] Are all affected commands identified?

After changes:
- [ ] GUIDELINE.md updated with complete specification
- [ ] All templates reflect GUIDELINE.md specification
- [ ] All commands properly use updated templates
- [ ] Changes are consistent across all layers
