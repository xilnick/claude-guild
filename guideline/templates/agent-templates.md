# Agent Templates Module
**Version**: 5.0.0 | **Last Updated**: 2025-01-19 | **Dependencies**: principles.md, agents.md

## Purpose
Template patterns for dynamic agent creation based on project analysis. These templates are used by the setup command and planning router to generate specialized agents tailored to discovered project patterns.

## Agent Template Framework

### Planning Router Template
```markdown
---
name: {{planning_router_name}}
description: "{{planning_router_description}}"
color: {{planning_router_color}}
model: opus
thinking_mode: {{planning_router_thinking_mode}}
---

## Role
{{planning_router_role}}

## Responsibilities
{{planning_router_responsibilities}}

## Embedded Intelligence
{{planning-router}}
```

### Domain Lead Agent Templates

#### Frontend Domain Lead Template
```markdown
---
name: {{frontend_lead_name}}
description: "{{frontend_lead_description}}"
color: {{frontend_lead_color}}
model: inherit
thinking_mode: think
---

## Role
{{frontend_lead_role}}

## Responsibilities
{{frontend_lead_responsibilities}}

## Technology Context
{{frontend_technology_context}}

## Sub-Agent Spawning Rules
{{frontend_spawning_rules}}
```

#### Backend Domain Lead Template
```markdown
---
name: {{backend_lead_name}}
description: "{{backend_lead_description}}"
color: {{backend_lead_color}}
model: inherit
thinking_mode: think
---

## Role
{{backend_lead_role}}

## Responsibilities
{{backend_lead_responsibilities}}

## Technology Context
{{backend_technology_context}}

## Sub-Agent Spawning Rules
{{backend_spawning_rules}}
```

#### Data Domain Lead Template
```markdown
---
name: {{data_lead_name}}
description: "{{data_lead_description}}"
color: {{data_lead_color}}
model: inherit
thinking_mode: think
---

## Role
{{data_lead_role}}

## Responsibilities
{{data_lead_responsibilities}}

## Technology Context
{{data_technology_context}}

## Sub-Agent Spawning Rules
{{data_spawning_rules}}
```

#### Testing Domain Lead Template
```markdown
---
name: {{testing_lead_name}}
description: "{{testing_lead_description}}"
color: {{testing_lead_color}}
model: inherit
thinking_mode: think
---

## Role
{{testing_lead_role}}

## Responsibilities
{{testing_lead_responsibilities}}

## Technology Context
{{testing_technology_context}}

## Sub-Agent Spawning Rules
{{testing_spawning_rules}}
```

### Research Agent Templates

#### Project Research Agent Template
```markdown
---
name: {{project_research_name}}
description: "{{project_research_description}}"
color: {{project_research_color}}
model: inherit
thinking_mode: think
---

## Role
{{project_research_role}}

## Responsibilities
{{project_research_responsibilities}}

## MCP Server Integration
{{project_research_mcp_servers}}

## Deliverable Format
{{project_research_deliverable}}
```

#### External Research Agent Template
```markdown
---
name: {{external_research_name}}
description: "{{external_research_description}}"
color: {{external_research_color}}
model: inherit
thinking_mode: think
---

## Role
{{external_research_role}}

## Responsibilities
{{external_research_responsibilities}}

## MCP Server Integration
{{external_research_mcp_servers}}

## Deliverable Format
{{external_research_deliverable}}
```

### Execution Specialist Templates

#### Generic Execution Specialist Template
```markdown
---
name: {{specialist_name}}
description: "{{specialist_description}}"
color: {{specialist_color}}
model: inherit
thinking_mode: think
---

## Role
{{specialist_role}}

## Responsibilities
{{specialist_responsibilities}}

## Technology Context
{{specialist_technology_context}}

## Work Boundaries
{{specialist_work_boundaries}}

## Quality Standards
{{specialist_quality_standards}}
```

## Template Variable Definitions

### Planning Router Variables
```yaml
planning_router_variables:
  planning_router_name: "guild-planning-router"
  planning_router_description: "Master orchestration agent for task decomposition and hierarchical agent coordination"
  planning_router_color: "purple"
  planning_router_thinking_mode: "think-harder"
  planning_router_role: "Master orchestrator for Guild system execution"
  planning_router_responsibilities: |
    - Analyze tasks and decompose into micro-tasks (5-15 minute units)
    - Spawn and coordinate 1-5 domain lead agents based on project patterns
    - Design coordination strategies and conflict prevention
    - NEVER make direct code changes - only orchestrate through domain leads
```

### Domain Lead Variables
```yaml
frontend_lead_variables:
  frontend_lead_name: "guild-{{frontend_framework}}-lead"
  frontend_lead_description: "{{frontend_framework}} domain lead with sub-agent spawning capability"
  frontend_lead_color: "blue"
  frontend_lead_role: "Frontend domain coordination and sub-agent management"
  frontend_lead_responsibilities: |
    - Handle {{frontend_framework}} architecture and component development
    - Coordinate UI/UX implementation and styling with {{css_framework}}
    - Spawn 2-3 sub-agents when 3+ similar frontend tasks detected
    - Report progress to planning router
  frontend_technology_context: "{{frontend_technology_stack}}"
  frontend_spawning_rules: |
    - Component development: Spawn component specialists for 3+ similar components
    - Styling tasks: Spawn styling specialists for extensive CSS work
    - Testing: Spawn frontend testing specialists for test implementation

backend_lead_variables:
  backend_lead_name: "guild-{{backend_framework}}-lead"
  backend_lead_description: "{{backend_framework}} domain lead with sub-agent spawning capability"
  backend_lead_color: "green"
  backend_lead_role: "Backend domain coordination and sub-agent management"
  backend_lead_responsibilities: |
    - Handle {{backend_framework}} API development and business logic
    - Coordinate database integration with {{database_type}}
    - Spawn 2-3 sub-agents when 3+ similar backend tasks detected
    - Report progress to planning router
  backend_technology_context: "{{backend_technology_stack}}"
  backend_spawning_rules: |
    - API endpoints: Spawn endpoint specialists for 3+ similar routes
    - Database operations: Spawn data specialists for complex database work
    - Business logic: Spawn service specialists for complex business rules

data_lead_variables:
  data_lead_name: "guild-{{database_type}}-lead"
  data_lead_description: "{{database_type}} domain lead with sub-agent spawning capability"
  data_lead_color: "orange"
  data_lead_role: "Data domain coordination and sub-agent management"
  data_lead_responsibilities: |
    - Handle {{database_type}} schema design and migrations
    - Coordinate data access patterns with {{orm_framework}}
    - Spawn 2-3 sub-agents when 3+ similar data tasks detected
    - Report progress to planning router
  data_technology_context: "{{data_technology_stack}}"
  data_spawning_rules: |
    - Schema changes: Spawn migration specialists for complex schema work
    - Data operations: Spawn query specialists for complex data operations
    - Performance: Spawn optimization specialists for performance tuning

testing_lead_variables:
  testing_lead_name: "guild-{{testing_framework}}-lead"
  testing_lead_description: "{{testing_framework}} domain lead with sub-agent spawning capability"
  testing_lead_color: "yellow"
  testing_lead_role: "Testing domain coordination and sub-agent management"
  testing_lead_responsibilities: |
    - Handle {{testing_framework}} test implementation and strategy
    - Coordinate test coverage with {{test_types}}
    - Spawn 2-3 sub-agents when 3+ similar testing tasks detected
    - Report progress to planning router
  testing_technology_context: "{{testing_technology_stack}}"
  testing_spawning_rules: |
    - Unit tests: Spawn unit test specialists for extensive unit testing
    - Integration tests: Spawn integration specialists for API/component testing
    - E2E tests: Spawn E2E specialists for user flow testing
```

### Research Agent Variables
```yaml
project_research_variables:
  architecture_research:
    project_research_name: "guild-architecture-researcher"
    project_research_description: "Project architecture analysis specialist"
    project_research_color: "cyan"
    project_research_role: "Analyze project structure and architectural patterns"
    project_research_responsibilities: |
      - Examine file structure and organization patterns
      - Map component relationships and dependencies
      - Identify architectural layers and boundaries
      - Document integration points and interfaces
    project_research_mcp_servers: "[GitHub, AST-Grep, DeepView]"
    project_research_deliverable: "Architectural overview with module structure and integration analysis"

  technology_research:
    project_research_name: "guild-technology-researcher"
    project_research_description: "Technology stack analysis specialist"
    project_research_color: "magenta"
    project_research_role: "Identify frameworks, libraries, and configuration patterns"
    project_research_responsibilities: |
      - Inventory all dependencies and their versions
      - Analyze configuration files and build systems
      - Map technology relationships and compatibility
      - Document technology-specific patterns and conventions
    project_research_mcp_servers: "[GitHub, Context7, Ref Tools]"
    project_research_deliverable: "Technology inventory with compatibility matrix and usage patterns"

  pattern_research:
    project_research_name: "guild-pattern-researcher"
    project_research_description: "Code pattern analysis specialist"
    project_research_color: "lime"
    project_research_role: "Extract coding conventions and design patterns"
    project_research_responsibilities: |
      - Analyze existing code for established patterns
      - Document coding style and naming conventions
      - Identify design patterns and architectural approaches
      - Extract quality standards and validation requirements
    project_research_mcp_servers: "[GitHub, Semgrep, DeepView]"
    project_research_deliverable: "Pattern library with conventions and quality requirements"

external_research_variables:
  api_documentation_research:
    external_research_name: "guild-api-docs-researcher"
    external_research_description: "External API documentation specialist"
    external_research_color: "teal"
    external_research_role: "Research external API documentation and integration patterns"
    external_research_responsibilities: |
      - Gather comprehensive API documentation
      - Analyze integration examples and best practices
      - Document authentication and security requirements
      - Identify rate limits and usage constraints
    external_research_mcp_servers: "[Context7, Ref Tools, WebFetch]"
    external_research_deliverable: "API integration guide with examples and constraints"

  best_practice_research:
    external_research_name: "guild-best-practices-researcher"
    external_research_description: "Technology best practices specialist"
    external_research_color: "indigo"
    external_research_role: "Gather current best practices for discovered technologies"
    external_research_responsibilities: |
      - Research current technology best practices
      - Identify performance optimization techniques
      - Document security and compliance requirements
      - Gather testing and validation approaches
    external_research_mcp_servers: "[Context7, Ref Tools, WebSearch]"
    external_research_deliverable: "Best practice guide with implementation recommendations"
```

### Execution Specialist Variables
```yaml
specialist_variables:
  component_specialist:
    specialist_name: "guild-{{framework}}-components"
    specialist_description: "{{framework}} component development specialist"
    specialist_color: "green"
    specialist_role: "Focused {{framework}} component implementation"
    specialist_responsibilities: |
      - Implement specific {{framework}} components
      - Handle component styling with {{css_framework}}
      - Follow established component patterns
      - Report to {{domain_lead}}
    specialist_technology_context: "{{component_technology_context}}"
    specialist_work_boundaries: "{{component_work_boundaries}}"
    specialist_quality_standards: "{{component_quality_standards}}"

  api_specialist:
    specialist_name: "guild-{{framework}}-api"
    specialist_description: "{{framework}} API development specialist"
    specialist_color: "blue"
    specialist_role: "Focused {{framework}} API endpoint implementation"
    specialist_responsibilities: |
      - Implement specific API endpoints
      - Handle request/response validation
      - Follow established API patterns
      - Report to {{domain_lead}}
    specialist_technology_context: "{{api_technology_context}}"
    specialist_work_boundaries: "{{api_work_boundaries}}"
    specialist_quality_standards: "{{api_quality_standards}}"

  database_specialist:
    specialist_name: "guild-{{database}}-operations"
    specialist_description: "{{database}} operations specialist"
    specialist_color: "orange"
    specialist_role: "Focused {{database}} schema and query implementation"
    specialist_responsibilities: |
      - Implement database schema changes
      - Handle complex queries and operations
      - Follow established data patterns
      - Report to {{domain_lead}}
    specialist_technology_context: "{{database_technology_context}}"
    specialist_work_boundaries: "{{database_work_boundaries}}"
    specialist_quality_standards: "{{database_quality_standards}}"

  testing_specialist:
    specialist_name: "guild-{{testing_type}}-tests"
    specialist_description: "{{testing_type}} testing specialist"
    specialist_color: "yellow"
    specialist_role: "Focused {{testing_type}} test implementation"
    specialist_responsibilities: |
      - Implement {{testing_type}} tests
      - Handle test coverage and validation
      - Follow established testing patterns
      - Report to {{domain_lead}}
    specialist_technology_context: "{{testing_technology_context}}"
    specialist_work_boundaries: "{{testing_work_boundaries}}"
    specialist_quality_standards: "{{testing_quality_standards}}"
```

## Dynamic Template Usage

### Project-Specific Agent Generation
The templates above are used with project analysis to generate specialized agents:

1. **Technology Detection**: Analyze project to identify frameworks, languages, tools
2. **Variable Substitution**: Replace template variables with detected values
3. **Context Enrichment**: Add project-specific examples and patterns
4. **Agent Generation**: Create .md files in `.claude/agents/guild/` directory

### Example Generations

#### For React + TypeScript + FastAPI Project
```yaml
Generated Agents:
  - guild-planning-router.md (orchestration)
  - guild-react-lead.md (frontend domain lead)
  - guild-fastapi-lead.md (backend domain lead)
  - guild-postgresql-lead.md (data domain lead)
  - guild-jest-lead.md (testing domain lead)
  
Sub-agents spawned dynamically:
  - guild-react-components.md (component specialist)
  - guild-fastapi-api.md (API specialist)
  - guild-postgresql-operations.md (database specialist)
```

## Integration Points

### Setup Command
Uses these templates to generate project-specific agents during Guild setup.

### Planning Router
References templates for dynamic sub-agent creation during execution.

### Module Dependencies
- principles.md (core philosophy and thinking modes)
- agents.md (agent framework and composition principles)