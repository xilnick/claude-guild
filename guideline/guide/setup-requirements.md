# Setup Command

<purpose>
Discover project structure → Create specialized agents
</purpose>

## Execution Flow

<discovery phase="1" mode="parallel">
  - File structure analysis
  - Technology identification  
  - Pattern discovery
  - Convention detection
</discovery>

<analysis phase="2">
  Identify needed specialists:
  - Domain experts (frontend/backend/data)
  - Technology specialists (discovered stack)
  - Task specialists (testing/deployment/docs)
</analysis>

<creation phase="3">
  <agent_template>
    - Focused role definition
    - Discovered project context
    - Embedded patterns and conventions
    - Clear boundaries and capabilities
  </agent_template>

Save to: `./.claude/agents/guild/`
</creation>

<reporting phase="4">
  - List created specialists
  - Explain discovered characteristics
  - Provide usage guidance
</reporting>

<constraints>
  - ALWAYS discover before creating
  - Base on evidence, not assumptions
  - Use parallel tool execution
  - Keep agents focused but flexible
</constraints>
