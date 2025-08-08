# /guild:setup

**Usage**: `/guild:setup [--standalone] [guidance]`

## Purpose

Initialize Guild system by analyzing project technology stack and creating appropriate specialized agents with configured models and thinking modes.

## Flags

- `--standalone`: Create self-contained agents without .guild system
- `[guidance]`: Optional instructions for custom agent creation

## Workflow

### 1. Configuration Check

Check if Guild is already configured (`.guild/instructions.md` exists):

**Not Configured**:
```
🏛️ **Guild Setup Initializing**

Analyzing project and creating appropriate agents...
```

**Already Configured**:
```
🏛️ **Guild Configuration Found**

Updating existing configuration...
```

### 2. Technology Detection

Analyze project to identify patterns (not specific frameworks):

```yaml
Pattern Categories:
  UI: Component-based patterns
  Backend: Server architecture patterns
  Database: Data persistence patterns
  Testing: Quality assurance patterns
  DevOps: Deployment patterns
```

### 3. Agent Creation

Based on detected patterns, create appropriate agents:

#### Standard Mode (default)

Create full Guild system:
- Core agents (reasoning, planning, research, verification)
- Pattern-specific engineers (UI, backend, database, etc.)
- System files in `.guild/` directory
- Full workflow integration

#### Standalone Mode (`--standalone`)

Create self-contained specialists:
- Domain experts (security, performance, accessibility)
- Process specialists (refactoring, testing, deployment)
- No .guild dependencies
- Direct Claude Code integration

### 4. System Generation

**Standard Mode Files**:
```
.guild/
├── instructions.md    # User configuration
├── overview.md       # System reference
├── agents.md         # Agent templates
└── ignore.md         # File patterns

.claude/agents/guild/
├── guild-reasoning-agent.md
├── guild-planning-agent.md
├── guild-project-researcher.md
├── guild-global-researcher.md
├── guild-verification-agent.md
└── [pattern-specific-engineers].md
```

**Standalone Mode Files**:
```
.claude/agents/
├── [specialist-agents]  # Self-contained agents
└── (Updates CLAUDE.md documentation)
```

### 5. Completion

Display summary of created agents and next steps.

## Agent Types

### Core System Agents

Always created in standard mode:
- `guild-reasoning-agent`: Task analysis
- `guild-planning-agent`: Workflow coordination
- `guild-project-researcher`: Codebase analysis
- `guild-global-researcher`: Best practices research
- `guild-verification-agent`: Quality validation

### Pattern-Based Engineers

Created based on detected patterns:
- UI patterns → `guild-ui-engineer`
- Backend patterns → `guild-backend-engineer`
- Database patterns → `guild-database-engineer`
- Testing patterns → `guild-test-engineer`
- DevOps patterns → `guild-devops-engineer`

### Standalone Specialists

Domain-specific experts (with `--standalone`):
- `security-analyst-agent`
- `performance-engineer-agent`
- `accessibility-auditor-agent`
- `documentation-writer-agent`
- `code-reviewer-agent`

## Configuration

After setup, customize behavior in `.guild/instructions.md`:

```yaml
models:
  planning: opus
  implementation: sonnet

parallel:
  enabled: true
  max_agents: 3

project:
  patterns: [detected-patterns]
  standards: [project-standards]
```

## Examples

### Basic Setup
```bash
/guild:setup
```
Analyzes project and creates appropriate agents.

### Standalone Specialists
```bash
/guild:setup --standalone
```
Creates self-contained specialist agents.

### Custom Guidance
```bash
/guild:setup "focus on performance and security"
```
Creates agents with specific focus areas.

## Embedded Templates

This command includes embedded templates for:
- Process definitions
- Agent templates
- Routing rules
- Default configuration

Templates are inlined during installation for self-contained operation.

## Success Indicators

Setup is successful when:
- ✅ Technology patterns detected
- ✅ Appropriate agents created
- ✅ Configuration files generated
- ✅ Workflow integration complete
- ✅ Next steps displayed

## Troubleshooting

**No agents created**: Project structure unclear
- Add more code files
- Ensure package.json exists
- Provide explicit guidance

**Wrong agents created**: Pattern detection incorrect
- Use guidance parameter
- Manually edit `.guild/instructions.md`
- Re-run setup with corrections

**Setup fails**: System error
- Check write permissions
- Clear `.guild/` directory
- Check Claude Code compatibility# /guild:setup

**Usage**: `/guild:setup [--standalone] [guidance]`

## Purpose

Initialize Guild system by analyzing project technology stack and creating appropriate specialized agents with configured models and thinking modes.

## Flags

- `--standalone`: Create self-contained agents without .guild system
- `[guidance]`: Optional instructions for custom agent creation

## Workflow

### 1. Configuration Check

Check if Guild is already configured (`.guild/instructions.md` exists):

**Not Configured**:
```
🏛️ **Guild Setup Initializing**

Analyzing project and creating appropriate agents...
```

**Already Configured**:
```
🏛️ **Guild Configuration Found**

Updating existing configuration...
```

### 2. Technology Detection

Analyze project to identify patterns (not specific frameworks):

```yaml
Pattern Categories:
  UI: Component-based patterns
  Backend: Server architecture patterns
  Database: Data persistence patterns
  Testing: Quality assurance patterns
  DevOps: Deployment patterns
```

### 3. Agent Creation

Based on detected patterns, create appropriate agents:

#### Standard Mode (default)

Create full Guild system:
- Core agents (reasoning, planning, research, verification)
- Pattern-specific engineers (UI, backend, database, etc.)
- System files in `.guild/` directory
- Full workflow integration

#### Standalone Mode (`--standalone`)

Create self-contained specialists:
- Domain experts (security, performance, accessibility)
- Process specialists (refactoring, testing, deployment)
- No .guild dependencies
- Direct Claude Code integration

### 4. System Generation

**Standard Mode Files**:
```
.guild/
├── instructions.md    # User configuration
├── overview.md       # System reference
├── agents.md         # Agent templates
└── ignore.md         # File patterns

.claude/agents/guild/
├── guild-reasoning-agent.md
├── guild-planning-agent.md
├── guild-project-researcher.md
├── guild-global-researcher.md
├── guild-verification-agent.md
└── [pattern-specific-engineers].md
```

**Standalone Mode Files**:
```
.claude/agents/
├── [specialist-agents]  # Self-contained agents
└── (Updates CLAUDE.md documentation)
```

### 5. Completion

Display summary of created agents and next steps.

## Agent Types

### Core System Agents

Always created in standard mode:
- `guild-reasoning-agent`: Task analysis
- `guild-planning-agent`: Workflow coordination
- `guild-project-researcher`: Codebase analysis
- `guild-global-researcher`: Best practices research
- `guild-verification-agent`: Quality validation

### Pattern-Based Engineers

Created based on detected patterns:
- UI patterns → `guild-ui-engineer`
- Backend patterns → `guild-backend-engineer`
- Database patterns → `guild-database-engineer`
- Testing patterns → `guild-test-engineer`
- DevOps patterns → `guild-devops-engineer`

### Standalone Specialists

Domain-specific experts (with `--standalone`):
- `security-analyst-agent`
- `performance-engineer-agent`
- `accessibility-auditor-agent`
- `documentation-writer-agent`
- `code-reviewer-agent`

## Configuration

After setup, customize behavior in `.guild/instructions.md`:

```yaml
models:
  planning: opus
  implementation: sonnet

parallel:
  enabled: true
  max_agents: 3

project:
  patterns: [detected-patterns]
  standards: [project-standards]
```

## Examples

### Basic Setup
```bash
/guild:setup
```
Analyzes project and creates appropriate agents.

### Standalone Specialists
```bash
/guild:setup --standalone
```
Creates self-contained specialist agents.

### Custom Guidance
```bash
/guild:setup "focus on performance and security"
```
Creates agents with specific focus areas.

## Embedded Templates

This command includes embedded templates for:
- Process definitions
- Agent templates
- Routing rules
- Default configuration

Templates are inlined during installation for self-contained operation.

## Success Indicators

Setup is successful when:
- ✅ Technology patterns detected
- ✅ Appropriate agents created
- ✅ Configuration files generated
- ✅ Workflow integration complete
- ✅ Next steps displayed

## Troubleshooting

**No agents created**: Project structure unclear
- Add more code files
- Ensure package.json exists
- Provide explicit guidance

**Wrong agents created**: Pattern detection incorrect
- Use guidance parameter
- Manually edit `.guild/instructions.md`
- Re-run setup with corrections

**Setup fails**: System error
- Check write permissions
- Clear `.guild/` directory
- Check Claude Code compatibility