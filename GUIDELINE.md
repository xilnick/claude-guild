# Claude Guild System Specification

## Executive Summary

Claude Guild is a **workflow orchestration system** for Claude Code that transforms development workflows through:
- **Thin agent architecture** with centralized process definitions
- **Intelligent task routing** with parallel execution capabilities  
- **Command-specific workflows** optimized for different task types
- **Context-specialized agents** with clear boundaries and roles
- **Configuration-driven customization** without hardcoded logic

## Core Concept

Claude Guild leverages Claude Code's existing intelligence by providing command-driven workflows with specialized agents. The system uses **thin agent templates** that reference **centralized workflow processes**, enabling consistent behavior with flexible specialization.

## System Architecture

### Four-Layer Architecture

```yaml
Execution Layer (Commands):
  - Workflow orchestration
  - Flag processing  
  - Stage sequencing
  ↓
Logic Layer (Processes):
  - Workflow definitions
  - Process steps
  - Error handling
  ↓
Metadata Layer (Agents):
  - Thin agent definitions
  - Role specifications
  - Process references
  ↓
Configuration Layer (Instructions):
  - User customization
  - Model assignments
  - Project settings
```

### Key Principles

1. **Separation of Concerns**: Clear boundaries between metadata (agents) and logic (processes)
2. **Thin Agent Architecture**: Agents as simple metadata referencing centralized processes
3. **Process Centralization**: All workflow logic in reusable process definitions
4. **Configuration-Driven**: Behavior customized through configuration, not code
5. **Parallel Optimization**: Intelligent parallelization for efficiency

### System Structure

```
claude-guild/
├── templates/                    # Source templates (inlined during install)
│   ├── processes.md             # Workflow process definitions
│   ├── routing.md               # Task routing configuration
│   ├── agents.md                # Thin agent templates
│   ├── instructions.md          # Default configuration
│   ├── overview.md              # System documentation
│   └── [enhancement-patterns]   # Optional enhancement templates
│
├── commands/                     # Command implementations
│   ├── setup.md                 # Project analysis & agent creation
│   ├── guild.md                 # Main workflow with flags
│   ├── fix.md                   # Bug fixing workflow
│   ├── refactor.md              # Refactoring workflow
│   ├── plan.md                  # Planning-only workflow
│   └── spec.md                  # Specification workflow
│
├── docs/                         # Comprehensive documentation
│   ├── architecture.md          # System architecture details
│   ├── workflows.md             # Workflow patterns and stages
│   ├── agents.md                # Agent specifications
│   ├── research-integration.md  # Research capabilities
│   ├── memory-performance.md    # Performance optimization
│   ├── setup-process.md         # Setup and configuration
│   ├── user-extensibility.md    # Customization guide
│   └── development.md           # Development guidelines
│
└── install.js                    # NPM installation script
```

## Workflow System

### Stage-Based Execution

All workflows follow a consistent stage-based model:

```yaml
Mandatory Stages:
  1. Task Analysis: Requirement clarification (reasoning agent)
  2. Context Research: Information gathering (research agents - parallel)
  3. Strategic Planning: Task routing and coordination (planning agent)

Variable Stages:
  4+. Implementation: Task execution (specialized engineers)
  5. Verification: Quality validation (verification agent)
```

### Command System

```yaml
Base Command:
  /guild [flags] "task description"
  
Interactive Mode:
  /guild [flags]  # Prompts for task description if not provided
  
Flags:
  --no-reason: Skip reasoning stage
  --no-plan: Skip planning stage
  --no-implement: Planning only mode
  --refactor: Enable refactoring
  --fix: Enable bug fixing
  --test: Enable testing
  --verify: Enable verification
  --project: Project-wide scope (applies refactoring/testing to entire project)

Specialized Commands:
  /guild:setup     # Initialize project agents
  /guild:fix       # Bug fixing workflow
  /guild:refactor  # Refactoring workflow
  /guild:plan      # Planning only
  /guild:spec      # Specification generation
```

## Agent Architecture

### Thin Agent Template

```yaml
---
name: agent-identifier
role: primary-function
processes: [process-references]
context: specialization-area
parallel: true/false
scope: operational-boundary
boundaries: [specific-limitations]
---
```

Agents are lightweight metadata (< 10 lines) that reference centralized processes containing all logic.

### Core Agent Set

- **guild-reasoning-agent**: Task analysis and requirement clarification
- **guild-planning-agent**: Workflow coordination and task routing
- **guild-project-researcher**: Internal codebase analysis
- **guild-global-researcher**: External best practices research
- **guild-verification-agent**: Implementation validation
- **guild-[technology]-engineer**: Technology-specific implementation

### Context-Aware Agent Creation

#### UI Framework Detection & Component Engineering

When UI frameworks are detected, engineers are created with deep component awareness:

```yaml
UI Framework Detection:
  React Ecosystem:
    - Component Libraries: Material-UI, Ant Design, Chakra UI, etc.
    - State Management: Redux, Zustand, MobX, Recoil
    - Component Patterns: Hooks, HOCs, Render Props, Compound Components
    - Testing: React Testing Library, Jest, Enzyme
    
  Vue Ecosystem:
    - Component Libraries: Vuetify, Element UI, Quasar
    - State Management: Vuex, Pinia
    - Component Patterns: Composition API, Options API, SFC
    - Testing: Vue Test Utils, Vitest
    
  Angular Ecosystem:
    - Component Libraries: Angular Material, PrimeNG
    - State Management: NgRx, Akita
    - Component Patterns: Services, Directives, Pipes
    - Testing: Karma, Jasmine, Jest

Component Engineer Creation:
  guild-[framework]-component-engineer:
    context_injection:
      - Detected component library documentation
      - Existing component inventory from project scan
      - Design system patterns and tokens
      - Component composition patterns
      - Accessibility requirements (ARIA, WCAG)
    capabilities:
      - Component creation with library patterns
      - Design system compliance
      - Component reusability analysis
      - Props/slots/events optimization
      - Performance optimization (memoization, lazy loading)
```

#### Backend Framework Detection & API Engineering

```yaml
Backend Framework Detection:
  Express/Fastify/Koa:
    - Middleware patterns
    - Route organization
    - Authentication strategies
    - Database ORMs/ODMs
    
  NestJS:
    - Module architecture
    - Dependency injection
    - Decorators and metadata
    - Guard and interceptor patterns
    
  FastAPI/Django:
    - Serialization patterns
    - ORM integration
    - Authentication backends
    - API documentation

API Engineer Creation:
  guild-[framework]-api-engineer:
    context_injection:
      - Existing API routes and patterns
      - Database schemas and models
      - Authentication/authorization setup
      - API documentation standards
    capabilities:
      - Endpoint creation following patterns
      - Data validation and serialization
      - Error handling consistency
      - API versioning strategies
```

#### Database & ORM Context Awareness

```yaml
Database Detection:
  SQL Databases:
    - PostgreSQL, MySQL, SQLite
    - ORMs: Prisma, TypeORM, Sequelize, SQLAlchemy
    
  NoSQL Databases:
    - MongoDB, Redis, DynamoDB
    - ODMs: Mongoose, Dynamoose

Database Engineer Creation:
  guild-database-engineer:
    context_injection:
      - Existing schemas and migrations
      - Query patterns and optimizations
      - Index strategies
      - Data validation rules
    capabilities:
      - Schema design and evolution
      - Query optimization
      - Migration creation
      - Data integrity enforcement
```

## Process Definitions

### Process Structure

```yaml
process: process-name
  description: what this process does
  inputs: [required-inputs]
  steps:
    - step_name:
        action: what_to_do
        output: what_is_produced
  outputs: [final-outputs]
  error_handling: recovery-strategy
  parallel: true/false
```

Processes contain all execution logic, enabling reuse across agents and workflows.

## Routing Intelligence

### Task Classification & Routing

The system automatically classifies tasks and routes them to appropriate agents:

```yaml
Classification:
  - Technology detection (keywords, files, dependencies)
  - Complexity assessment (scope, risk, effort)
  - Parallelization analysis (independent subtasks)

Routing:
  - Simple tasks → Single specialist
  - Medium tasks → Coordinated team
  - Complex tasks → Parallel groups with orchestration
```

### Parallel Execution

Three parallelization strategies optimize execution:

1. **Independent Scopes**: Frontend || Backend || Database
2. **Pipeline Parallel**: Overlapping stages for continuous flow
3. **Divide & Conquer**: Large task decomposition and distribution

## Configuration System

### User Customization

Users customize behavior through `.guild/instructions.md`:

```yaml
models:
  reasoning: opus
  planning: opus
  implementation: sonnet

parallel:
  enabled: true
  max_agents: 5

routing:
  custom_routes: [...]
  always_include: [test-engineer]

project:
  stack: [react, node, postgres]
  standards: [eslint, prettier]
```

## Setup Process

### Technology-Driven Agent Creation

The setup process performs deep project analysis to create context-aware agents:

```yaml
Setup Workflow:
  1. Project Analysis:
     - Package dependencies scan
     - Directory structure analysis
     - Configuration file detection
     - Component inventory creation
     
  2. Technology Stack Detection:
     - Frontend frameworks and libraries
     - Backend frameworks and middleware
     - Database systems and ORMs
     - Build tools and testing frameworks
     
  3. Context Collection:
     - Component library inventory
     - API route patterns
     - Database schemas
     - Testing patterns
     - Build configurations
     
  4. Agent Generation:
     - Create agents with injected context
     - Configure specialization boundaries
     - Set up process references
     - Enable parallel capabilities
```

### Component Discovery for UI Engineers

When creating UI framework engineers, the system performs component discovery:

```yaml
Component Discovery Process:
  1. Scan for component files:
     - src/components/**/*.{jsx,tsx,vue}
     - app/components/**/*
     - components/**/*
     
  2. Identify component patterns:
     - Functional components
     - Class components
     - Composable/hooks
     - HOCs and render props
     
  3. Detect component libraries:
     - Check package.json for UI libraries
     - Scan import statements
     - Identify design tokens
     
  4. Create component inventory:
     components:
       - name: Button
         path: src/components/Button.tsx
         type: functional
         props: [onClick, disabled, variant]
         uses: [Material-UI]
       - name: UserCard
         path: src/components/UserCard.tsx
         type: functional
         props: [user, onEdit, onDelete]
         uses: [custom styling]
         
  5. Inject into engineer context:
     guild-react-component-engineer:
       component_awareness:
         - Existing components list
         - Component library APIs
         - Project styling patterns
         - Accessibility standards
```

### API Route Discovery for Backend Engineers

```yaml
API Discovery Process:
  1. Scan for route definitions:
     - routes/**/*.js
     - api/**/*.js
     - controllers/**/*
     
  2. Identify patterns:
     - REST endpoints
     - GraphQL schemas
     - WebSocket handlers
     - Middleware chains
     
  3. Create route inventory:
     routes:
       - path: /api/users
         methods: [GET, POST]
         middleware: [auth, validate]
         controller: UserController
       - path: /api/products/:id
         methods: [GET, PUT, DELETE]
         middleware: [auth, admin]
         controller: ProductController
         
  4. Inject into engineer context:
     guild-express-api-engineer:
       api_awareness:
         - Existing routes map
         - Middleware patterns
         - Authentication setup
         - Validation schemas
```

### Database Schema Discovery

```yaml
Schema Discovery Process:
  1. Detect ORM/ODM:
     - Prisma schema files
     - TypeORM entities
     - Mongoose models
     - Sequelize models
     
  2. Extract schema information:
     models:
       - name: User
         fields: [id, email, password, profile]
         relations: [posts, comments]
       - name: Product
         fields: [id, name, price, category]
         relations: [orders, reviews]
         
  3. Inject into database engineer:
     guild-database-engineer:
       schema_awareness:
         - Current models
         - Relationships
         - Migration history
         - Query patterns
```

## Template Flow

### Installation Process

1. **Template Inlining**: Templates from `templates/` directory are inlined into project
2. **Command Registration**: Commands from `commands/` are registered with Claude Code
3. **Agent Generation**: Technology-specific agents created based on project analysis
4. **Configuration**: Default settings applied, customizable by user

### Template Processing

```yaml
Template Sources:
  Core Templates:
    - processes.md: Centralized workflow logic
    - agents.md: Agent metadata templates
    - routing.md: Task routing rules
    - instructions.md: Default configuration
    
  Enhancement Templates (Optional):
    - technology-detection.md: Advanced stack analysis
    - context-handoff.md: Structured context transfer
    - pattern-memory.md: Learning optimization
    - workflow-templates.md: Common task patterns
    - [additional patterns as needed]

Processing Flow:
  1. Read template files
  2. Replace variables with project-specific values
  3. Generate technology-specific agents
  4. Write to .guild/ directory
  5. Validate installation
```

## Command Generation

### Command Structure

Commands follow a consistent pattern:

```yaml
Command Definition:
  trigger: /guild:command
  workflow: reference-to-workflow
  stages: [ordered-stage-list]
  flags: [available-options]
  validation: input-requirements

Execution Flow:
  1. Parse command and flags
  2. Load workflow definition
  3. Initialize required agents
  4. Execute stages in order
  5. Handle parallel coordination
  6. Aggregate results
```

### Command Execution Behavior

#### Interactive Task Prompting

When commands are executed without a task description, the system enters interactive mode:

```yaml
Interactive Mode Triggers:
  /guild [flags]             # No task provided
  /guild:plan                # No task provided
  /guild:refactor            # No task provided
  
Interactive Flow:
  1. Detect missing task description
  2. Display context-aware prompt:
     - Show detected project type
     - Suggest relevant task examples
     - Display available flags
  3. Wait for user input
  4. Validate and process task
  5. Execute workflow with provided task

Example Prompt:
  "🏛️ Guild Ready - [React + Node.js Project Detected]
   
   What task would you like to execute?
   
   Examples for your project:
   • Create a new user authentication component
   • Add error handling to API endpoints
   • Refactor state management to use Zustand
   • Write tests for the checkout flow
   
   Available flags: --refactor, --test, --verify, --project
   
   Enter your task: _"
```

### Dynamic Command Creation

The system supports dynamic command creation based on:
- Project technology stack
- User configuration
- Custom workflow definitions
- Enhancement patterns

## Research Integration

### Multi-Source Research

Research capabilities include:
- **Project Analysis**: Codebase patterns and conventions
- **Web Search**: Community best practices and solutions
- **MCP Servers**: Official documentation (when configured)

Research executes in parallel with intelligent result aggregation.

## Performance Optimization

### Optimization Strategies

- **Multi-level caching**: Memory, session, and persistent caches
- **Parallel execution**: Optimal speedup for complex tasks
- **Resource management**: Intelligent agent pool scaling
- **Progressive loading**: Fast startup with on-demand enhancement

## Extensibility

### Extension Points

Users can extend Guild through:
- **Custom processes**: New workflow definitions
- **Custom agents**: Specialized agents for unique needs
- **Custom commands**: Domain-specific workflows
- **Custom routing**: Advanced routing rules
- **Enhancement patterns**: Additional capability templates

### Enhancement Pattern System

Optional enhancements can be added through template patterns:

```yaml
Pattern Structure:
  pattern-name.md:
    - Description of enhancement
    - Integration points
    - Configuration options
    - Implementation logic
    
Integration:
  - Detected during setup
  - User-selectable
  - Auto-applied based on project needs
  - Fully compatible with core system
```

## Documentation

For comprehensive details, see:

- **[Architecture](docs/architecture.md)** - Four-layer architecture, template system, integration points
- **[Workflows](docs/workflows.md)** - Stage definitions, command workflows, execution patterns
- **[Agents](docs/agents.md)** - Agent specifications, boundaries, specialization patterns
- **[Research Integration](docs/research-integration.md)** - MCP servers, web search, parallel research
- **[Memory & Performance](docs/memory-performance.md)** - Caching, optimization, resource management
- **[Setup Process](docs/setup-process.md)** - Technology detection, agent creation, configuration
- **[User Extensibility](docs/user-extensibility.md)** - Customization, plugins, extension patterns
- **[Development](docs/development.md)** - Contributing, testing, maintenance, enhancements

## Key Innovations

### Core Innovations

1. **True Thin Architecture**: Agents contain only metadata while processes contain all logic
2. **Intelligent Routing**: Automatic task classification and optimal agent selection
3. **Flexible Parallelization**: Multiple execution strategies with dynamic coordination
4. **Configuration-Driven Design**: No hardcoded logic - all behavior customizable through configuration

### Advanced Capabilities

The system supports advanced capabilities through optional enhancement patterns:

- **Enhanced Technology Detection**: Deep code analysis beyond dependencies
- **Structured Context Handoff**: Priority-based context transfer protocol
- **Pattern Learning System**: Workflow optimization through pattern recognition
- **Workflow Templates**: Pre-defined templates for common tasks
- **Natural Language Configuration**: Plain English setup instructions
- **Agent Capability Discovery**: Runtime performance profiling
- **Workflow Optimization Engine**: Real-time bottleneck resolution

These enhancements integrate seamlessly with the core system while maintaining the thin architecture principle.

## Success Metrics

- **Task Completion**: High success rate through intelligent routing
- **Parallel Speedup**: Significant performance gains through parallelization
- **Routing Accuracy**: Precise agent selection based on task requirements
- **Setup Time**: Rapid project initialization
- **Learning Curve**: Quick adoption through intuitive design

## Conclusion

Claude Guild provides a **production-ready workflow orchestration system** that:
- Maintains clean separation of concerns
- Enables intelligent parallel execution
- Supports any technology stack
- Scales with project complexity
- Remains maintainable and extensible

The system resolves architectural complexity through clear separation of metadata (agents), logic (processes), configuration (instructions), and execution (commands), creating a coherent and practical development enhancement for Claude Code.