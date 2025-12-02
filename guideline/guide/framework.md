# Guild Framework - Discovery-First Intelligence

## Philosophy

**Guild is a discovery-first orchestrator**: Analyzes projects through intelligent subagent discovery, learns from any technology stack, creates project-specific intelligence, and orchestrates tasks with ultrathink reasoning.

**Core Principles**:
- **Discovery Over Knowledge**: Learn from projects rather than relying on pre-built technology knowledge
- **Universal Coverage**: Work with any technology from C code to Kubernetes infrastructure
- **Intelligent Investigation**: Use specialized discovery agents to understand unknown systems
- **Adaptive Expertise**: Build project-specific intelligence that grows with each analysis

---

## Core Orchestration Mechanics

<core_orchestration_mechanics>
These mechanics are **fundamental** for effective Guild orchestration:

### 1. Subagent Delegation
- **What**: Use Task tool for ALL multi-step work
- **Why**: Context efficiency, isolation, scalability
- **Pattern**: Delegate complex work to subagents with full context

### 2. Parallel Execution
- **What**: Spawn ALL independent tasks in ONE message
- **Why**: 3-10x performance improvement
- **Pattern**: Single message with multiple Task calls

### 3. ULTRATHINK Keyword
- **What**: Start EVERY Task prompt with "ULTRATHINK: "
- **Why**: Enables deep, thorough reasoning consistently
- **Pattern**: `prompt: "ULTRATHINK: [objective]..."`

### 4. Fresh Context
- **What**: Use Context7/WebSearch for current documentation
- **Why**: Avoid stale knowledge, get latest best practices
- **Pattern**: Research before implementation

### 5. Final Validation
- **What**: Verify before marking tasks complete
- **Why**: Prevents false positives, ensures quality
- **Pattern**: Validation task before user report

</mandatory_requirements>

---

## Dynamic Orchestration

**Everything else is intelligent judgment based on ultrathink reasoning.**

### Task Analysis Pattern
Before delegating, understand:
- **User Intent**: What's the actual goal?
- **Complexity**: Simple/Standard/Complex?
- **Knowledge Gaps**: What needs research?
- **Risk Factors**: What could go wrong?
- **Parallelization**: Independent workstreams?

### Research Orchestration
Spawn research based on **identified gaps**, not hardcoded perspectives:
- Documentation gaps → Context7/WebSearch
- Codebase unknowns → Explore subagent
- Technology unfamiliarity → Multi-round research
- Risk assessment → Safety research
- Best practices → Community knowledge

**Pattern**: ALL research in ONE message (parallel)

### Implementation Delegation
Create context-rich prompts:
```
"ULTRATHINK: [Clear objective]

Context:
[Project info, constraints, patterns]

Guidance:
[How to approach, quality expectations]

Success Criteria:
[Measurable outcomes]

Report: [Expected deliverables]"
```

### Coordination Intelligence
After parallel work completes:
1. **Synthesize**: What did we learn?
2. **Patterns**: Consensus vs conflicts?
3. **Completeness**: Sufficient to proceed?
4. **Risks**: Safety considerations?
5. **Plan**: Structure implementation?

### Validation Orchestration
Trust ultrathink subagent to verify intelligently:
- Functionality against requirements
- Integration points
- Quality and edge cases
- User intent satisfied

---

## Dynamic Patterns (Not Hardcoded)

Embed guidance in prompts **when task needs it**:

**Error Recovery** (when errors likely):
```
"Handle errors intelligently:
- Analyze failures, try alternatives
- Retry with different strategies
- Escalate with diagnosis if stuck"
```

**Risk Awareness** (when risky):
```
"Risk awareness:
This involves [production/data/security].
Verify assumptions, test safely, be cautious."
```

**Research Iteration** (when research-intensive):
```
"Research strategy:
If initial search insufficient, try alternatives.
Iterate until confident understanding."
```

**Key**: Patterns are guidance for prompt crafting, not hardcoded protocols.

---

## Discovery-First Intelligence System

### Core Discovery Skills (4 Universal Skills)
Guild ships with **4 discovery skills** - no technology-specific knowledge:

**1. `universal-technology-discovery`**
- Discovers any technology, framework, or system without prior knowledge
- Analyzes files, configurations, dependencies, and usage patterns
- Works from C source files to Kubernetes manifests

**2. `architectural-pattern-discovery`**
- Discovers architectural and design patterns across all abstraction levels
- Analyzes structural patterns, component relationships, and project-specific solutions
- Works across any technology stack from code-level to system-level architecture

**3. `integration-mapping-discovery`**
- Maps how different components and systems connect and interact
- Analyzes service relationships, data flow, and dependencies
- Discovers integration patterns without prior integration knowledge

**4. `operational-intelligence-discovery`**
- Discovers operational patterns, deployment processes, and maintenance approaches
- Analyzes CI/CD pipelines, monitoring systems, and deployment strategies
- Works with any operational environment without prior tool knowledge

### Discovery Agent System
**Specialized Research Agents**:
- **Discovery Agents**: Universal technology investigation and identification
- **Pattern Agents**: Architectural and coding pattern analysis
- **Integration Agents**: Component and system connection mapping
- **Operational Agents**: Deployment and maintenance pattern discovery

**Agent Coordination Protocol**:
- **Phase 1**: Parallel surface analysis by all agents
- **Phase 2**: Specialized deep investigation based on discoveries
- **Phase 3**: Focused research and validation of findings
- **Phase 4**: Intelligence synthesis and adaptive learning

### Dynamic Intelligence Generation

**From Discovery to Knowledge**:
- **Pattern Extraction**: Convert research findings into reusable project intelligence
- **Contextual Skills**: Generate skills based on discovered project patterns
- **Adaptive Agents**: Create agents with discovered project expertise
- **Living Intelligence**: Project intelligence evolves as system discovers more

**Knowledge Synthesis**:
- **Pattern Abstraction**: Generalize specific implementations to universal patterns
- **Best Practice Derivation**: Extract best practices from how project actually works
- **Integration Understanding**: Learn component integration from actual usage
- **Operational Intelligence**: Understand deployment from discovered processes

### Dynamic Creation During Discovery

**During /guild:setup**:
1. **Universal Discovery**: 4 discovery skills analyze project without prior knowledge
2. **Agent Investigation**: Specialized research agents investigate discovered patterns
3. **Intelligence Generation**: Create project-specific intelligence from discoveries
4. **Adaptive Expertise**: Build agents with discovered project knowledge

**During /guild workflow**:
1. **Discovery Check**: Use discovery skills to understand current project context
2. **Intelligent Delegation**: Create domain-specialized agents with discovered expertise
3. **Pattern Application**: Apply learned patterns to task execution
4. **Continuous Learning**: Expand intelligence with each task completion

### Universal Technology Support
**No Technology Limits**:
- **Any Language**: C, C++, Rust, Go, Python, JavaScript, TypeScript, etc.
- **Any Framework**: React, Vue, Angular, Express, FastAPI, custom frameworks
- **Any Infrastructure**: Docker, Kubernetes, Terraform, CloudFormation, bare metal
- **Any Database**: SQL, NoSQL, graph databases, custom data stores
- **Any Tool**: CI/CD systems, monitoring tools, custom scripts

**Discovery-First Coverage**:
- Unknown technologies discovered through intelligent investigation
- Legacy systems understood through pattern recognition
- Custom solutions analyzed through usage pattern analysis
- Hybrid environments mapped through comprehensive discovery

---

## Command Requirements

### Workflow Command (`/guild`)
- **Apply**: All 5 mandatory requirements
- **Discovery-First**: Universal discovery → Pattern analysis → Task execution → Validation
- **Intelligent**: Use discovery skills to understand project context before task delegation
- **Adaptive**: Create domain-specialized agents with discovered project expertise

### Setup Command (`/guild:setup`)
- **Apply**: 4 mandatory requirements (skip Final Validation - setup is discovery)
- **Discovery Protocol**: Universal discovery → Agent investigation → Intelligence generation
- **Universal Coverage**: Works with any technology stack without prior knowledge
- **Intelligence Creation**: Generate project-specific knowledge from discovered patterns

---

## Summary

**Core Mechanics (5)**:
1. Subagent Delegation
2. Parallel Execution
3. ULTRATHINK Keyword
4. Fresh Context
5. Final Validation

**Discovery Intelligence (4 Skills)**:
1. Universal Technology Discovery
2. Pattern Analysis Discovery
3. Integration Mapping Discovery
4. Operational Intelligence Discovery

**Everything Else**:
- Discovery-first analysis of any project
- Intelligence generation from discovered patterns
- Adaptive agent creation with project expertise
- Universal technology support through intelligent investigation

**Result**: Simple, intelligent orchestrator that discovers, learns, and adapts to any project while maintaining maximum simplicity and universal coverage.
