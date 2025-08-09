# /guild:setup

**Usage**: `/guild:setup [--standalone] [guidance]`

## Purpose

Initialize comprehensive Guild system by analyzing project technology stack and creating specialized agents with full workflow integration, embedded process definitions, and self-contained operation.

## Flags

- `--standalone`: Create self-contained agents without .guild system dependencies
- `[guidance]`: Optional instructions for custom agent creation and specialization

## Workflow

### 1. Configuration Check

Check if Guild is already configured (`.guild/instructions.md` exists):

**Not Configured**:
```
🏛️ **Guild Setup Initializing**

Analyzing project technology stack and creating comprehensive Guild system...
```

**Already Configured**:
```
🏛️ **Guild Configuration Found**

Updating existing configuration with latest Guild system enhancements...
```

### 2. Technology Detection

Analyze project to identify technology patterns and architectural needs:

```yaml
Technology Pattern Detection:
  Frontend: React, Vue, Angular, Svelte, Next.js, Nuxt, component systems
  Backend: Express, Fastify, NestJS, Koa, server architectures
  Database: MongoDB, PostgreSQL, MySQL, Redis, data persistence patterns
  Testing: Jest, Vitest, Cypress, Playwright, testing frameworks
  DevOps: Docker, Kubernetes, CI/CD, deployment patterns
  Mobile: React Native, Expo, mobile development patterns
  Desktop: Electron, Tauri, desktop application patterns
  CLI: Command-line applications and tools
  Package: NPM packages, library distribution
  Config: Configuration management and environment setup
```

### 3. Agent Creation

Based on detected patterns and Guild system architecture, create appropriate agents:

#### Standard Mode (default) - Full Guild System

Create comprehensive Guild system with embedded workflow definitions:
- **Core system agents**: reasoning, planning, research, verification with embedded processes
- **Technology-specific engineers**: Domain specialists based on detected patterns
- **Complete system files**: Full .guild/ structure with embedded comprehensive documentation
- **Integrated workflow support**: All workflow stages and flag systems embedded

#### Standalone Mode (`--standalone`) - Self-Contained Specialists

Create independent domain specialists:
- **Security specialist**: OWASP compliance, vulnerability assessment
- **Performance engineer**: Database optimization, caching strategies  
- **Accessibility auditor**: WCAG 2.1 AA compliance, ARIA implementation
- **Documentation writer**: Technical docs, API documentation
- **Code reviewer**: Quality analysis, refactoring recommendations
- **Testing strategist**: Test strategy, automation, QA

### 4. Comprehensive System Generation

**Standard Mode Files with Embedded Content**:

#### .guild/instructions.md
Creates project configuration with thinking modes and agent specifications

#### .guild/overview.md  
Creates comprehensive system reference with workflow definitions

#### .guild/ignore.md
Creates file exclusion patterns with compliance requirements

#### .guild/agents.md
Creates agent creation templates and standards

**Standalone Mode Files (--standalone flag)**:

Creates self-contained specialist agents directly in `.claude/agents/` without .guild dependencies:
- `security-analyst-agent.md` - OWASP compliance, vulnerability assessment
- `performance-engineer-agent.md` - Database optimization, performance profiling
- `accessibility-auditor-agent.md` - WCAG 2.1 AA compliance, ARIA implementation
- `code-reviewer-agent.md` - Quality analysis, refactoring recommendations
- `documentation-writer-agent.md` - Technical docs, API documentation
- `testing-strategist-agent.md` - Test strategy, automation, QA

### 5. Comprehensive Agent Creation Engine

**Core System Agents Creation** (Always created in standard mode):

#### guild-reasoning-agent.md
Creates context-only task analysis specialist with configurable thinking modes

#### guild-planning-agent.md
Creates strategic planning specialist with ultrathink mode and opus model  

#### guild-project-research-agent.md
Creates project-specific research specialist for codebase analysis

#### guild-global-research-agent.md
Creates external research specialist for best practices

**Technology-Specific Engineers Creation** (Based on detected patterns):
- CLI projects: guild-cli-engineer
- Package projects: guild-package-engineer
- Config projects: guild-config-engineer
- Template projects: guild-template-engineer
- Framework projects: guild-[framework]-engineer

### 6. Comprehensive Validation and Success Display

**Setup Completion Validation**:
```
✅ **Guild Setup Complete**

**Created System Files**:
- `.guild/instructions.md` - Project configuration ✓
- `.guild/overview.md` - Complete system reference ✓  
- `.guild/ignore.md` - File exclusion patterns ✓
- `.guild/agents.md` - Agent creation templates ✓

**Created Agents Based on Detected Technologies**:
- `guild-reasoning-agent` - Task analysis & clarification ✓
- `guild-planning-agent` - Strategic planning (ultrathink + opus) ✓
- `guild-project-research-agent` - Project context research ✓
- `guild-global-research-agent` - External research & best practices ✓
- [Additional technology-specific engineers based on detection]

**Next Steps**:
- Use `/guild "task"` for standard workflow execution
- Use `/guild --full "task"` for comprehensive development lifecycle
- Use `/guild --fix "bug"` for systematic bug fixing
- Use `/guild --plan "task"` for planning-only mode
- Use `/guild --research "query"` for research-only mode
- Customize behavior in `.guild/instructions.md` if needed

**Guild System Ready** - All workflows activated with comprehensive agent support
```

## Self-Contained Template Embedding

This setup command uses clean template embedding via install.js preprocessing that embeds actual template content, ensuring:

- **Template Consistency**: install.js embeds current template content during installation
- **No Content Duplication**: Templates remain as single source of truth
- **Self-Contained Operation**: Command contains embedded templates after installation
- **Specification Alignment**: Templates match guideline/README.md specification  
- **Clean Architecture**: Proper separation between templates and commands

## Examples

### Basic Setup
```bash
/guild:setup
```
Analyzes project technology stack and creates comprehensive Guild system with appropriate agents and full workflow integration.

### Standalone Specialists
```bash
/guild:setup --standalone
```
Creates self-contained specialist agents without .guild system dependencies for focused domain expertise.

### Custom Guidance
```bash
/guild:setup "focus on performance and security optimization"
```
Creates agents with specific focus areas and specialized capabilities based on provided guidance.

### Technology-Specific Setup
```bash
/guild:setup "React frontend with Express API and PostgreSQL database"
```
Creates agents optimized for specific technology combination with appropriate engineering specialists.

## Success Indicators

Setup is successful when:
- ✅ Technology patterns detected and analyzed
- ✅ Appropriate agents created with current template specifications
- ✅ Configuration files generated with consistent content
- ✅ Workflow integration complete with embedded process definitions
- ✅ Agent compliance validation confirmed
- ✅ Next steps displayed with usage guidance

## Troubleshooting

**No agents created**: Project structure unclear
- Add more code files to improve pattern detection
- Ensure package.json exists for project identification
- Provide explicit guidance parameter for custom setup

**Wrong agents created**: Pattern detection needs refinement
- Use guidance parameter to specify desired focus areas
- Manually edit `.guild/instructions.md` for project-specific requirements
- Re-run setup with corrective guidance

**Setup fails**: System error during creation
- Check write permissions for .guild/ and .claude/ directories
- Clear existing .guild/ directory if partial setup exists
- Verify Claude Code compatibility and agent system access

This redesigned setup command provides clean template embedding architecture that ensures consistent Guild system creation aligned with guideline/README.md specification while maintaining self-contained operation for reliable global NPM distribution.