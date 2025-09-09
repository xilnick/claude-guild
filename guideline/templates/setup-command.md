# /guild:setup

---
name: guild-setup  
model: inherit
thinking_mode: ultrathink
description: "Analyze project and create specialized agents based on discovered needs"
---

## Purpose
Analyze project structure and create appropriate specialist agents based on discovered needs and user requirements.

## Analysis & Creation Process

**Systematic Discovery:**
- Analyze project technologies, structure, and natural domain boundaries
- Identify areas that would benefit from specialized intelligence  
- Recommend appropriate specialists based on discovered patterns
- Create agents with user guidance and customization



## Project Discovery

Analyze project to understand:
- Technologies and frameworks present
- Project structure and patterns  
- Natural domain boundaries
- Areas that would benefit from specialized agents

## Specialist Creation Standards

**4-Sentence Description Format:**
1. **Purpose**: What the specialist does and core capabilities
2. **Coordination**: How it works with others and when to use
3. **Boundaries**: Important limitations and error handling  
4. **Outcomes**: Expected results and integration patterns

## Organization Structure

**Agents organized by discovered domains:**
```
.claude/agents/guild/
├── [domain-1]/     # e.g., frontend, backend
│   └── specialist.md
├── [domain-2]/     # e.g., testing, security  
│   └── specialist.md
└── [domain-N]/     # Based on project analysis
    └── specialist.md
```

**Categories determined by:**
- Project technologies and architecture
- Natural domain boundaries
- Workflow patterns discovered

## Specialist Template

```markdown
---
name: [domain]-specialist
model: inherit  
thinking_mode: ultrathink
description: "[4-sentence description following framework standards]"
---

## Purpose
[Specialized role and domain expertise]

## Capabilities
**Core Skills**: [Domain-specific abilities]
**Integration**: [How it coordinates with other specialists]
**Quality Standards**: [Error handling and verification approach]

## Success Criteria
[Expected outcomes and deliverables for this domain]
```

## Interactive Process

1. **Discover**: Analyze project structure, tech stack, and domains
2. **Recommend**: Present suggested agent types based on analysis
3. **Customize**: User specifies which agents to create and their focus
4. **Generate**: Create agents based on user specifications

## Capability Domains

**Common domains discovered:**
- **Technical**: Frontend, backend, database, API layers
- **Quality**: Testing, security, performance, code quality
- **Operations**: Deployment, monitoring, infrastructure
- **Maintenance**: Documentation, refactoring, dependency management

**User-driven creation**: Specify which domains need agents and their focus areas.




## Usage Examples

**Project Analysis Process:**
```xml
<discovery_phase>
  <!-- Batch project structure analysis -->
  <invoke name="Read">files/[dependency-manifest]</invoke>
  <invoke name="Read">files/[language-config]</invoke>
  <invoke name="Glob">pattern="src/**/*.[source-extensions]"</invoke>
  <invoke name="Glob">pattern="*.[config-pattern]"</invoke>
  
  <!-- Analysis: Frontend Framework + Language + Build Tool + Testing Framework -->
  <!-- Recommendation: frontend-specialist, testing-specialist, build-specialist -->
</discovery_phase>
```

**Specialist Creation Examples:**

**Guided Analysis Template:**
```
Analysis: [discovered-stack] + [detected-patterns] + [identified-complexity]
Architecture: [domain-structure] + [integration-patterns] + [natural-boundaries]  
Recommendation: [specialists-based-on-discovery] + [coordination-approach]
```

**Backend API Project Discovery:**
**Template Philosophy:**
- Discover actual project structure and patterns before creating specialists
- Adapt recommendations to discovered domains, not predetermined categories
- Let intelligence determine optimal specialist configuration based on real needs
- Focus on user value rather than comprehensive coverage

## Best Practices

- Analyze project thoroughly before recommending agents
- Create agents with clear specializations and boundaries
- Design for coordination between agents
- Include proper error handling in each agent
- Organize agents logically by domain
- Focus on user needs rather than maximum coverage

## Verification Process

**After creating agents, verify:**
- All requested domains covered by appropriate agents
- Agent descriptions follow 4-sentence standard
- Coordination capabilities included
- Error handling structured properly
- No gaps in coverage
- User satisfaction with agent team



---

**Intelligence Sources**: `@guideline/guide/framework.md`, `@guideline/core/subagent-invocation.md`, `@guideline/core/verification.md`
**Core Integration**: Framework principles, agent discovery protocols, verification standards
**Approach**: Analyze project needs and create appropriate specialist agents with user guidance