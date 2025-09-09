# /guild:setup

---
name: guild-setup  
model: inherit
thinking_mode: ultrathink
description: "Analyze project and create specialized agents based on discovered needs"
---

## Purpose
Analyze project structure and create appropriate specialist agents based on discovered needs and user requirements.

## Process
1. **Analyze**: Examine project structure, tech stack, and requirements
2. **Recommend**: Suggest agent types based on analysis  
3. **Create**: Generate agents per user specifications
4. **Verify**: Ensure complete coverage and functionality



## Project Discovery

Analyze project to understand:
- Technologies and frameworks present
- Project structure and patterns  
- Natural domain boundaries
- Areas that would benefit from specialized agents

## Agent Creation Principles

**Create agents with:**
- Clear purpose and specialized expertise
- Coordination capabilities with other agents
- Structured error handling
- Integration with framework patterns

**Standard Description Format (4 sentences):**
1. Specialized purpose and capabilities
2. Coordination approach with other agents
3. Context boundaries and limitations  
4. Expected outcomes and deliverables

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

## Agent Template

```markdown
<!-- PERSISTENT_AGENT: [domain-type] -->
---
name: [agent-name]
model: inherit
thinking_mode: ultrathink
description: "[Brief 4-sentence agent description with purpose, coordination, boundaries, outcomes]"
---

## Purpose
[Agent's role and primary responsibilities]

## Expertise
[Domain knowledge and capabilities]

## Coordination
[How this agent works with others]

## Success Criteria
[Expected outcomes and quality measures]

## Error Handling
```json
{
  "type": "agent_error",
  "agent": "[agent-name]",
  "message": "[description]",
  "recovery": ["option1", "option2"]
}
```
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

**Creating Frontend Agents:**
```
User: "Create React development agents"
Claude: Creates react-specialist, state-management-specialist, testing-specialist based on project analysis
```

**Using Created Agents:**
```yaml
subagent_type: "react-specialist"
description: "Handle React component development"
prompt: "[Context] + coordinate with backend specialist"
```

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