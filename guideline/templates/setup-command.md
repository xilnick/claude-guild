# /guild:setup

---
name: guild-setup
model: inherit
description: "Discovery-first project analysis and intelligence generation"
---

## Discovery-First Orchestration Principles

**Guild setup is Universal Discovery Orchestration**: Performs comprehensive project discovery through intelligent investigation, learning from any technology stack, and generating project-specific intelligence.

**Philosophy**:
- **Discovery Over Knowledge**: Learn from projects rather than relying on pre-built technology knowledge
- **Universal Coverage**: Work with any technology from C code to Kubernetes infrastructure
- **Intelligent Investigation**: Use specialized discovery agents to understand unknown systems
- **Adaptive Intelligence**: Build project-specific expertise that grows with each analysis

---

## Discovery System Architecture

### Core Discovery Skills (4 Universal Skills)
Guild provides **4 discovery skills** that work with any project:

1. **`universal-technology-discovery`** - Discovers any technology without prior knowledge
2. **`architectural-pattern-discovery`** - Analyzes architectural and design patterns across all abstraction levels
3. **`integration-mapping-discovery`** - Maps system integrations and connections
4. **`operational-intelligence-discovery`** - Discovers deployment and operational patterns

### Discovery Agent Coordination
**Specialized Research Agents** perform parallel investigation:
- **Discovery Agents**: Universal technology investigation and identification
- **Pattern Agents**: Architectural and design pattern analysis
- **Integration Agents**: Component and system connection mapping
- **Operational Agents**: Deployment and maintenance pattern discovery

**Agent Coordination Protocol**:
- **Phase 1**: Parallel surface analysis by all agents
- **Phase 2**: Specialized deep investigation based on discoveries
- **Phase 3**: Focused research and validation of findings
- **Phase 4**: Intelligence synthesis and adaptive learning

---

## Universal Discovery Orchestration

### Phase 1: Comprehensive Project Discovery

**Execute all 4 discovery skills in parallel**:

```javascript
// Universal Discovery Protocol
Task({
  prompt: "ULTRATHINK: Perform universal technology discovery on this project

  Analyze files, configurations, dependencies, and usage patterns to discover:
  - All technologies, frameworks, and systems present
  - Technology stack composition and relationships (use universal-technology-discovery)
  - Custom or proprietary technologies
  - Integration and dependency patterns

  Reference shipped skill: universal-technology-discovery
  Use universal-technology-discovery approach to work with ANY technology
  from C code to Kubernetes manifests without prior knowledge.
  
  MANDATORY: Do NOT persist analysis reports to filesystem.",
  description: "Universal technology discovery"
})

Task({
  prompt: "ULTRATHINK: Perform pattern analysis discovery on this project

  Identify architectural patterns, coding conventions, and design approaches:
  - Structural patterns and component relationships (use architectural-pattern-discovery)
  - Design patterns and architectural approaches
  - Coding conventions and organization patterns (use convention-extraction)
  - Quality and maintainability patterns

  Reference shipped skills: architectural-pattern-discovery, convention-extraction
  Use architectural-pattern-discovery to understand patterns across ALL abstraction levels.
  
  MANDATORY: Do NOT persist analysis reports to filesystem.",
  description: "Pattern analysis discovery"
})

Task({
  prompt: "ULTRATHINK: Perform integration mapping discovery on this project

  Map how different components and systems connect and interact:
  - Service relationships and communication patterns
  - Data flow and dependencies between components
  - API integrations and external service connections
  - Infrastructure and deployment integrations

  Reference shipped skill: integration-mapping-discovery
  Use integration-mapping-discovery to understand system integrations.
  
  MANDATORY: Do NOT persist analysis reports to filesystem.",
  description: "Integration mapping discovery"
})

Task({
  prompt: "ULTRATHINK: Perform operational intelligence discovery on this project

  Discover operational patterns, deployment processes, and maintenance approaches:
  - CI/CD pipelines and build processes
  - Deployment strategies and infrastructure setup
  - Monitoring, logging, and alerting approaches
  - Maintenance procedures and operational workflows

  Reference shipped skill: operational-intelligence-discovery
  Use operational-intelligence-discovery to understand operational patterns.
  
  MANDATORY: Do NOT persist analysis reports to filesystem.",
  description: "Operational intelligence discovery"
})
```

### Phase 2: Intelligence Synthesis and Agent Investigation

**Analyze discovery results and launch specialized investigation**:

```javascript
// Intelligence Synthesis Protocol
Task({
  prompt: "ULTRATHINK: Synthesize discovery findings and identify investigation needs

  Analyze results from all 4 discovery skills to:
  - Identify gaps requiring deeper investigation
  - Recognize unknown technologies needing research
  - Map complex integrations requiring detailed analysis
  - Plan specialized agent investigation based on discoveries

  Create comprehensive project intelligence synthesis and identify areas
  needing focused research agent investigation.",
  description: "Intelligence synthesis and investigation planning"
})
```

### Phase 3: Focused Research and Intelligence Generation

**Generate project-specific intelligence from discoveries**:

```javascript
// Intelligence Generation Protocol
Task({
  prompt: "ULTRATHINK: Generate project-specific intelligence from discoveries

  Convert research findings into reusable project intelligence:
  - Extract patterns from discovered technologies and approaches
  - Derive best practices from how project actually works
  - Create adaptive agents with discovered project expertise
  - Generate living documentation from discovered operational patterns

  Build comprehensive project intelligence that adapts and grows.",
  description: "Project intelligence generation"
})
```

### Phase 4: Adaptive Agent and Skill Creation

**Create resources with discovered expertise**:

```javascript
// Adaptive Resource Creation Protocol
Task({
  prompt: "ULTRATHINK: Create adaptive agents and skills from discovered intelligence

  Based on discovered project patterns and expertise:
  - Create agents with project-specific domain expertise
  - Generate skills based on discovered conventions and patterns
  - Build specialist knowledge from discovered integration approaches
  - Create operational intelligence from discovered deployment patterns

  **CRITICAL SKILL STRUCTURE REQUIREMENTS**:
  - Skills MUST be created in directories with 'guid-' prefix: `.claude/skills/guid-[skill-name]/SKILL.md`
  - NEVER create direct `.md` files in category directories
  - ALWAYS use `SKILL.md` as the filename (not `[skill-name].md`)
  - Follow proper YAML frontmatter: name, description, model: inherit
  - Reference the `guid-skill-creation` shipped skill for detailed guidance

  Focus on creating resources that understand THIS project specifically.",
  description: "Adaptive resource creation"
})
```

### 3. Skill Creation Strategy

**Use the skill-creation skill for comprehensive guidance**:

Available in shipped skills: `.claude/skills/guid-skill-creation/SKILL.md`

**Skill Types to Create**:
- **Tech Stack Skills**: `guid-working-with-[library]` for major frameworks
- **Pattern Skills**: `guid-[action]-[pattern]` for project conventions

**CRITICAL STRUCTURE REQUIREMENTS**:
- **Directory Structure**: Skills MUST be created as `.claude/skills/guid-[skill-name]/SKILL.md`
- **NEVER** create direct `.md` files in category directories (like `.claude/skills/guild/[skill-name].md`)
- **ALWAYS** use `SKILL.md` as the filename inside the skill directory
- **ALWAYS** prefix skill directory names with `guid-`
- **YAML Frontmatter Required**: `name: guid-skill-name`, `description: "Use when..."`, `model: inherit`

**Example Correct Structure**:
```
.claude/skills/
├── guid-react-optimization/
│   └── SKILL.md          # NOT react-optimization.md
├── guild-multi-agent-coordination/
│   └── SKILL.md          # NOT multi-agent-coordination.md
```

**Common Anti-Patterns to Avoid**:
- ❌ `.claude/skills/guild/skill-name.md` (direct file)
- ❌ `.claude/skills/skill-name/SKILL.md` (missing guid- prefix)
- ❌ `.claude/skills/guid-skill-name.md` (flat file)

**Reference**: Use the `guid-skill-creation` shipped skill for detailed templates, checklists, and best practices.

### 4. Technology Documentation Research

**Documentation Strategy**: Fetch current, authoritative documentation for key technologies to create accurate, up-to-date skills.

**Research Coordination Principles**:

**Parallel Documentation Gathering**:
- **Multiple Technologies**: Research different libraries/frameworks simultaneously
- **Source Diversity**: Use official documentation, community guides, and recent tutorials
- **Version Awareness**: Focus on versions actually used in the project, not just latest
- **Practical Filtering**: Prioritize information relevant to project's usage patterns

**Content Extraction Strategy**:
- **Core Concepts**: Fundamental principles and patterns for each technology
- **Project-Specific Usage**: How the technology applies to this specific codebase
- **Best Practices**: Current recommendations and common pitfalls
- **Integration Patterns**: How the technology works with other project components

**Documentation Organization**:
- **Categorized Skills**: Group related technologies (frontend, backend, testing, data)
- **Appropriate Depth**: Comprehensive enough to be useful, focused enough to be actionable
- **Reference Structure**: Organize for quick lookup during development tasks
- **Version Tracking**: Note which documentation version applies to project

**Adaptation Guidelines**:
- **Usage Context**: Focus documentation on how each technology is actually used in the project
- **Complexity Matching**: Depth of documentation should match technology's complexity and usage frequency
- **Integration Focus**: Emphasize how different technologies work together in this specific environment

### 5. Agent Creation Strategy

**Use the agent-creation skill for comprehensive guidance**:

Available in shipped skills: `.claude/skills/agent-creation/SKILL.md`

**Agent Creation Pattern**:
```javascript
Task({
  prompt: "ULTRATHINK: Create domain specialists based on discovery.

          For each identified domain (frontend, backend, testing, database):
          1. Analyze discovered patterns and project context
          2. Use agent-creation skill for proper patterns and structure
          3. Create focused specialist agents with clear boundaries
          4. Embed project-specific conventions and standards

          MANDATORY: Agent YAML frontmatter format:
          ---
          name: [domain]-specialist
          model: inherit
          thinking_mode: ultrathink
          description: \"[One-line summary of specialist expertise]\"
          ---

          Save to .claude/agents/guild/[domain]-specialist.md

          Report: Created agents with proper frontmatter.",
  subagent_type: "[select based on task complexity]",
  description: "Agent creation"
})
```

**Key Requirements**:
- Use proper YAML frontmatter with description field
- Focus on domain-specific expertise with clear boundaries
- Embed project context, not generic patterns
- Reference agent-creation skill for detailed patterns

**Reference**: Use the `agent-creation` shipped skill for domain specialist frameworks, quality guidelines, and integration patterns.

### 6. Optional Project Configuration

**If testing frameworks detected**:

```javascript
Task({
  prompt: "ULTRATHINK: Create minimal CLAUDE.md with abstracts and instructions only.

          Testing frameworks detected: [Jest|Vitest|Pytest|etc.]

          CRITICAL: ABSTRACTS AND INSTRUCTIONS ONLY.
          Target: <100 lines, ~1-2k tokens max.

          Format: High-level guidance, NO implementation details.

          Include ONLY:
          - Project name and one-line abstract
          - Test framework name and command
          - TDD workflow instruction (1-2 lines, when applicable)
          - Key conventions as bullet points (max 5 items)
          - References to Guild skills/agents for details

          STRICTLY AVOID:
          - Code samples or snippets
          - Detailed examples or tutorials
          - Step-by-step procedures
          - Implementation patterns
          - Content duplicating Guild skills/agents

          Example minimal CLAUDE.md:
          # Project Guidelines

          **Project**: [Name] - [One-line abstract]

          ## Testing
          - Framework: [Jest/Vitest/Pytest/etc.]
          - Command: \`npm test\`
          - TDD workflow recommended for complex logic

          ## Conventions
          - [Convention 1 - abstract/instruction only]
          - [Convention 2 - abstract/instruction only]
          - See Guild skills in .claude/skills/ for patterns

          Report: Minimal CLAUDE.md created (abstracts/instructions only).",
  subagent_type: "[select based on task complexity]",
  description: "Project configuration"
})
```

### 7. Present Results

**Display to user** (never persist as files):

```
✅ Discovery Complete

Skills Created:
  Tech Stack Skills:
  - working-with-react (frontend-patterns)
  - working-with-express (backend-integration)
  - working-with-prisma (database-integration)

  Pattern Skills:
  - processing-api-requests (backend-integration)
  - managing-component-state (frontend-patterns)
  - testing-endpoints (testing-patterns)

Agents Created:
  - frontend-specialist (React, state management)
  - backend-specialist (Express, API handling, Prisma)
  - testing-specialist (endpoint testing)

Project Configuration:
  - CLAUDE.md created (TDD guidance - optional workflow)

Usage:
  Skills: Automatically discovered by Claude Code based on task context
  Agents: Use /guild workflow - delegate to relevant specialists
```

**Obtain user approval** before completing.

---

## Save Locations

**Skills**:
- Main: `.claude/skills/[category]/SKILL.md`
- Docs: `.claude/skills/[category]/DOCS.md` (for libraries)
- Reference: `.claude/skills/[category]/REFERENCE.md` (optional)

**Agents**:
- Files: `.claude/agents/guild/[agent-name].md`

**Project Config** (Optional):
- Guidelines: `CLAUDE.md` (abstracts/instructions only, <100 lines / ~1-2k tokens, NO code samples)

**Do NOT persist**:
- Analysis reports
- Discovery documents
- Usage guides
- Temporary files

All findings presented in conversation only.

---

## Orchestration Example

**Full discovery workflow**:

```javascript
// 1. Parallel discovery (ALL in ONE message)
Task({ prompt: "ULTRATHINK: Project structure...", subagent_type: "Explore" })
Task({ prompt: "ULTRATHINK: Tech stack...", subagent_type: "Explore" })
Task({ prompt: "ULTRATHINK: Patterns...", subagent_type: "Explore" })

// 2. Synthesize results, identify gaps

// 3. Parallel skill creation
Task({ prompt: "ULTRATHINK: Create React skill with DOCS.md...", subagent_type: "general-purpose" })
Task({ prompt: "ULTRATHINK: Create Express skill with DOCS.md...", subagent_type: "general-purpose" })
Task({ prompt: "ULTRATHINK: Create API patterns skill...", subagent_type: "general-purpose" })

// 4. Agent creation
Task({ prompt: "ULTRATHINK: Create domain specialists...", subagent_type: "general-purpose" })

// 5. Optional config
Task({ prompt: "ULTRATHINK: Create minimal CLAUDE.md if tests detected...", subagent_type: "general-purpose" })

// 6. Present results to user
// 7. Obtain approval
```

---

## Dynamic Patterns (Not Hardcoded)

Embed guidance when needed:

**Multi-Tech Projects**:
```
"Environment observation:
This is a multi-tech project (Node.js + Python + Docker).
Detect all ecosystems, runtime versions, container setup.
Create skills for each technology stack."
```

**Unknown Patterns**:
```
"Pattern discovery:
If initial scan insufficient, deeper analysis.
Try alternative search terms, explore additional directories.
Iterate until confident understanding."
```

**Key**: Patterns are guidance for prompt crafting, not hardcoded procedures.

---

## Execution Implementation

When `/guild:setup` is invoked, execute the following implementation phases:

### Phase 1: Parallel Discovery Analysis
**Execute the 4 universal discovery skills in parallel** (single message with multiple Task calls):

```javascript
// Launch universal discovery tasks
Task({
  prompt: "ULTRATHINK: Execute universal-technology-discovery skill for comprehensive technology analysis.

Context:
- Current directory: ${process.cwd()}
- Goal: Discover ANY technology, framework, or system without prior knowledge
- Focus: Files, configurations, dependencies, and usage patterns
- Reference shipped skills: universal-technology-discovery

Apply universal-technology-discovery to:
1. Analyze files, configurations, and dependencies
2. Discover technologies from C code to Kubernetes manifests
3. Identify custom or proprietary technologies
4. Map technology stack composition and relationships

MANDATORY: Do NOT persist analysis reports to filesystem.",
  subagent_type: "general-purpose",
  description: "Universal technology discovery"
});

Task({
  prompt: "ULTRATHINK: Execute architectural-pattern-discovery skill for comprehensive pattern analysis.

Context:
- Current directory: ${process.cwd()}
- Goal: Identify patterns across ANY technology stack
- Focus: Architectural patterns, coding conventions, design approaches
- Reference shipped skills: architectural-pattern-discovery, convention-extraction

Apply architectural-pattern-discovery to:
1. Analyze structural patterns and component relationships
2. Identify design patterns and architectural approaches
3. Extract coding conventions and organization patterns
4. Recognize quality and maintainability patterns

MANDATORY: Do NOT persist analysis reports to filesystem.",
  subagent_type: "general-purpose",
  description: "Pattern analysis discovery"
});

Task({
  prompt: "ULTRATHINK: Execute integration-mapping-discovery skill for comprehensive system analysis.

Context:
- Current directory: ${process.cwd()}
- Goal: Map system integrations and connections
- Focus: Service relationships, data flow, dependencies
- Reference shipped skill: integration-mapping-discovery

Apply integration-mapping-discovery to:
1. Map component connections and interactions
2. Analyze service relationships and communication patterns
3. Identify API integrations and external service connections
4. Map infrastructure and deployment integrations

MANDATORY: Do NOT persist analysis reports to filesystem.",
  subagent_type: "general-purpose",
  description: "Integration mapping discovery"
});

Task({
  prompt: "ULTRATHINK: Execute operational-intelligence-discovery skill for comprehensive operational analysis.

Context:
- Current directory: ${process.cwd()}
- Goal: Discover operational patterns and deployment approaches
- Focus: CI/CD pipelines, monitoring, maintenance procedures
- Reference shipped skill: operational-intelligence-discovery

Apply operational-intelligence-discovery to:
1. Analyze build processes and CI/CD pipelines
2. Identify deployment strategies and infrastructure setup
3. Discover monitoring, logging, and alerting approaches
4. Map maintenance procedures and operational workflows

MANDATORY: Do NOT persist analysis reports to filesystem.",
  subagent_type: "general-purpose",
  description: "Operational intelligence discovery"
});
```

### Phase 2: Synthesis and Enhancement Planning
**Execute after discovery completes**:

```javascript
// Synthesize results and plan adaptive intelligence generation
Task({
  prompt: "ULTRATHINK: Synthesize universal discovery results and plan adaptive intelligence generation.

Context:
- Discovery results from 4 universal discovery skills:
  - universal-technology-discovery: All technologies discovered
  - architectural-pattern-discovery: All patterns identified
  - integration-mapping-discovery: All integrations mapped
  - operational-intelligence-discovery: All operational patterns found
- Goal: Generate project-specific intelligence from discoveries

Tasks:
1. **Integrate Discovery Results**: Combine findings from all 4 universal discovery phases
2. **Generate Project Intelligence**: Create adaptive knowledge from discovered patterns
3. **Plan Agent Specialization**: Design agents with discovered project expertise
4. **Create Living Documentation**: Generate operational intelligence from discovered patterns

Report: Comprehensive project intelligence synthesis with adaptive agent and skill creation plan.",
  subagent_type: "general-purpose",
  description: "Discovery synthesis and intelligence planning"
});
```

### Phase 3: Adaptive Intelligence Generation
**Execute project-specific intelligence generation**:

```javascript
// Generate adaptive agents and skills from discovered intelligence
Task({
  prompt: "ULTRATHINK: Create adaptive agents and skills from discovered project intelligence.

Context:
- Discovery results from 4 universal discovery skills
- Project-specific patterns, technologies, and operational approaches
- Intelligence generation plan from synthesis phase

Intelligence Generation Tasks:
1. **Create Adaptive Agents**: Generate agents with discovered project expertise:
   - Agents that understand discovered technologies and patterns
   - Specialists that can work with project-specific integrations
   - Operational agents that understand deployment and maintenance patterns

2. **Generate Contextual Skills**: Create skills based on discovered patterns:
   - Skills that capture project-specific conventions and approaches
   - Integration skills that map discovered component connections
   - Operational skills that document deployment and maintenance procedures

3. **Build Project Intelligence**: Create comprehensive project knowledge:
   - Technology expertise gained through discovery
   - Pattern understanding from architectural analysis
   - Integration knowledge from system mapping
   - Operational intelligence from deployment analysis

Report: Generated adaptive agents and skills with discovered project expertise.",
  subagent_type: "general-purpose",
  description: "Skill enhancement and creation"
});
```

### Phase 4: Adaptive Agent Creation
**Create agents with discovered project expertise**:

```javascript
// Generate adaptive agents based on universal discovery results
Task({
  prompt: "ULTRATHINK: Create adaptive agents based on universal discovery analysis.

Context:
- Discovery results from 4 universal discovery skills
- Project-specific technologies, patterns, and operational approaches
- Goal: Create agents with discovered project expertise

Adaptive Agent Creation:
1. **Technology Specialists**: Create agents that understand discovered technologies:
   - Agents with expertise in specific technologies found during discovery
   - Specialists that can work with discovered integration patterns
   - Experts that understand project's technology stack relationships

2. **Pattern Specialists**: Create agents that understand discovered patterns:
   - Agents with expertise in discovered architectural patterns
   - Specialists that can apply project-specific conventions
   - Experts that understand quality and maintainability patterns

3. **Integration Specialists**: Create agents that understand system integrations:
   - Agents with expertise in discovered service relationships
   - Specialists that can work with mapped data flows
   - Experts that understand infrastructure and deployment integrations

4. **Operational Specialists**: Create agents that understand operational patterns:
   - Agents with expertise in discovered CI/CD and deployment patterns
   - Specialists that can work with monitoring and logging approaches
   - Experts that understand maintenance and operational workflows

Create agents with proper frontmatter and reference discovered project patterns. 
CRITICAL: DO NOT reference skills in agent files.
Save to .claude/agents/guild/.

Report: Created adaptive agents with discovered project expertise.",
  subagent_type: "general-purpose",
  description: "Adaptive agent creation"
});
```

### Phase 5: Validation and Presentation
**Validate results and present to user**:

```javascript
// Validate setup results and present findings
Task({
  prompt: "ULTRATHINK: Validate setup results and prepare user presentation.

Context:
- Skills installed and enhanced
- Specialist agents created
- Goal: Validate completeness and present results to user

Validation Tasks:
1. **Skill Structure Validation**: Ensure all skills follow Claude Code format
2. **Coverage Analysis**: Confirm detected technologies have corresponding skills
3. **Quality Assessment**: Validate that enhancements add genuine project value

Presentation:
- List installed and enhanced skills
- Show created specialist agents
- Demonstrate how resources work together
- Provide usage examples and next steps

Report: Validation results and user-ready presentation of setup achievements.",
  subagent_type: "general-purpose",
  description: "Validation and presentation"
});
```

---

## Summary

**Setup orchestrates project discovery**:
- Recommended patterns for effective discovery applied
- Parallel discovery of structure, tech stack, patterns
- Dynamic skill creation (tech stack + patterns)
- Fresh documentation via external research sources
- Agent creation with proper frontmatter (no skill references)
- Optional minimal CLAUDE.md (abstracts/instructions only, no code samples)
- User approval required

**Everything else**: Dynamic ultrathink judgment based on actual project.

**Result**: Custom skills and agents tailored to YOUR specific project.

---

{SHARED_INTELLIGENCE}
