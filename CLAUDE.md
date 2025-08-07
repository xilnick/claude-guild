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

## Standalone Agent System

### Overview

The Guild system supports **standalone agents** that operate independently of the .guild system infrastructure. These self-contained specialists integrate seamlessly with standard Claude Code workflow while providing focused expertise in specific domains.

### Creating Standalone Agents

```bash
# Create standalone specialist agents
/guild:setup --standalone

# Create standalone agents with specific focus
/guild:setup --standalone "focus on security and performance optimization"
```

### Available Standalone Specialists

#### Security & Compliance
- **`security-analyst-agent`**: Vulnerability assessment, security review, OWASP compliance, authentication/authorization analysis
- **`accessibility-auditor-agent`**: WCAG 2.1 AA compliance, ARIA implementation, screen reader compatibility, accessibility testing

#### Performance & Quality  
- **`performance-engineer-agent`**: Performance profiling, database optimization, caching strategies, monitoring setup
- **`code-reviewer-agent`**: Code quality analysis, refactoring recommendations, best practices enforcement, technical debt identification

#### Documentation & Architecture
- **`documentation-writer-agent`**: Technical documentation, API docs, user guides, README generation
- **`api-architect-agent`**: API design patterns, REST/GraphQL architecture, integration strategies, API security

#### Deployment & Operations
- **`deployment-engineer-agent`**: CI/CD optimization, deployment strategies, infrastructure as code, release management  
- **`monitoring-engineer-agent`**: Observability setup, logging strategies, alerting systems, performance metrics

#### Specialized Engineering
- **`database-optimizer-agent`**: Query optimization, indexing strategies, schema design, database performance monitoring
- **`testing-strategist-agent`**: Test strategy development, test automation, quality assurance, coverage analysis

### Usage Patterns

#### Automatic Activation
Standalone agents automatically activate based on task content:

```bash
# Security tasks automatically activate security-analyst-agent
"Review authentication implementation for security vulnerabilities"

# Performance tasks automatically activate performance-engineer-agent  
"Optimize database queries causing slow response times"

# Documentation tasks automatically activate documentation-writer-agent
"Create comprehensive API documentation for the user service"
```

#### Integration with Standard Workflow
Standalone agents work with all standard Claude Code commands:

```bash
# Standard commands leverage appropriate specialists
"Implement user authentication with security best practices"
# → Automatically uses security-analyst-agent + standard engineers

"Refactor components for better performance" 
# → Automatically uses performance-engineer-agent + standard engineers

"Add comprehensive tests to the payment module"
# → Automatically uses testing-strategist-agent + standard engineers
```

### Agent Characteristics

#### Self-Contained Design
- **Complete Role Definition**: Full role description and execution methodology within agent file
- **No Guild Dependencies**: Operates independently without .guild system files
- **Clear Boundaries**: Precise specialization scope and operational limits
- **Seamless Integration**: Natural participation in standard Claude Code workflow

#### Specialization Focus
- **Domain Expertise**: Deep knowledge in specific technical domains
- **Clear Activation**: Automatic activation based on task keywords and content
- **Integration Guidelines**: Clear patterns for working with other agents
- **Usage Scenarios**: Specific use cases where each agent excels

### Benefits

#### For Development Teams
- **Instant Expertise**: Access to specialized knowledge without setup complexity
- **Seamless Workflow**: No learning curve - works with existing Claude Code usage
- **Focused Quality**: Domain-specific analysis and recommendations
- **Automatic Selection**: Right specialist automatically chosen for each task

#### For Complex Projects  
- **Comprehensive Coverage**: Specialists for all major technical domains
- **Quality Assurance**: Expert-level analysis across security, performance, accessibility
- **Best Practices**: Automatic enforcement of domain-specific best practices
- **Technical Debt**: Proactive identification and remediation recommendations

### Implementation Examples

#### Security Review Workflow
```bash
# Task automatically routes to security-analyst-agent
"Perform security audit of authentication system"

# Agent provides:
# - OWASP Top 10 vulnerability analysis
# - Authentication/authorization review  
# - Input validation assessment
# - Security hardening recommendations
```

#### Performance Optimization Workflow
```bash
# Task automatically routes to performance-engineer-agent
"Investigate slow API response times"

# Agent provides:
# - Database query analysis and optimization
# - Caching strategy recommendations
# - Performance monitoring setup
# - Bottleneck identification and solutions
```

#### Accessibility Compliance Workflow
```bash
# Task automatically routes to accessibility-auditor-agent  
"Ensure checkout flow meets WCAG AA standards"

# Agent provides:
# - WCAG 2.1 AA compliance audit
# - ARIA implementation recommendations
# - Keyboard navigation testing
# - Screen reader compatibility validation
```

### Standalone vs Guild System

| Aspect | Standalone Agents | Guild System |
|--------|-------------------|--------------|
| **Setup** | Single command | Full system configuration |
| **Dependencies** | None | .guild system files |
| **Activation** | Automatic | Command-driven workflow |
| **Scope** | Specialist domains | Complete project lifecycle |
| **Integration** | Standard workflow | Enhanced workflow system |
| **Complexity** | Simple | Comprehensive |

### When to Use Standalone Agents

#### Ideal Scenarios
- **Simple Projects**: Projects not requiring full Guild workflow complexity
- **Specialist Needs**: Projects needing specific domain expertise without full system
- **Team Integration**: Teams wanting specialist support with minimal workflow changes
- **Quick Setup**: Projects requiring immediate specialist access without configuration

#### Specialist Integration
- **Security Focus**: Projects requiring security expertise without full workflow orchestration
- **Performance Critical**: Applications needing performance optimization specialists
- **Compliance Requirements**: Projects with accessibility or regulatory compliance needs
- **Quality Assurance**: Codebases requiring code quality and review specialists

The standalone agent system provides targeted expertise with zero configuration overhead, making specialized knowledge accessible to any Claude Code user through natural task descriptions.

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
