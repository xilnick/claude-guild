# Guild Agent Specifications

Guild agents are specialized AI assistants that work within the Guild workflow system to provide comprehensive development support through clean, elegant design and instruction-based configuration.

## Simple Agent Template Format

All Guild agents use a clean, simple YAML frontmatter format:

```yaml
---
name: guild-[technology]-engineer
description: "[Technology] engineer with integrated planning and implementation capabilities"
---
```

**Optional Model Field**: When users specify model requirements in `.guild/instructions.md`, the model field is conditionally added:

```yaml
---
name: guild-[technology]-engineer  
description: "[Technology] engineer with integrated planning and implementation capabilities"
model: "[model-name]"  # Only when specified in instructions.md
---
```

## Agent Architecture Philosophy

**Clean & Simple Design**: Guild agents operate with elegant simplicity, avoiding unnecessary complexity while maintaining powerful capabilities through instruction-based configuration.

**Key Principles**:
- **Instruction-Based Configuration**: Agent behavior controlled through `.guild/instructions.md`
- **Unified Capabilities**: Engineers combine planning and implementation within their specialization
- **Simple Context Flow**: Clean context handoffs without complex orchestration
- **User Configurability**: Easy customization through readable instructions

## Agent Communication & Context Sharing

### Context Sharing Protocol

**CRITICAL**: Each specialized agent MUST provide reasonable feedback and useful context for clean handoffs to subsequent agents. Context flows between agents through well-defined interfaces that maximize information reuse and enable parallel execution coordination.

### Simple Agent Communication

**Clean Context Flow**: Guild agents communicate through simple, well-defined interfaces that prioritize clarity and maintainability over complex orchestration.

**Key Communication Principles**:
- **Direct Context Handoffs**: Agents provide clear, actionable context to subsequent agents
- **Minimal Overhead**: Communication focuses on essential information without complex validation layers
- **Instruction-Based Behavior**: Agent coordination controlled through `.guild/instructions.md` settings
- **Clean Interfaces**: Well-defined boundaries between agent responsibilities

### Agent Coordination Patterns

**Standard Flow**:
```
Guild Planning Agent → Research Agents → Unified Engineers → Validation
         ↓                    ↓               ↓              ↓
   Task Analysis        Context Gathering   Implementation   Quality Check
```

**Context Integration**:
- **Research to Planning**: Research findings flow cleanly to planning coordination
- **Planning to Implementation**: Planning specifications guide unified engineer execution  
- **Implementation to Validation**: Implementation results validated against requirements
- **Quality Feedback**: Simple validation results integrated for continuous improvement

### Specialized Agent Architecture

**Unified Engineer Architecture**: Planning coordination with integrated implementation capabilities:
- **Planning Agent**: Single guild-planning-agent handles task analysis, coordination, and routing within unified scope
- **Unified Engineers**: Parallel execution with integrated planning and implementation within specialized technology scope  
- **Routing Coordination**: Planning agent coordinates engineer selection and context handoffs
- **Clean Interfaces**: Well-defined context boundaries between planning and implementation phases

## Custom Agent Creation

Users can define additional agents beyond the automatically detected technology agents through simple instruction-based configuration in `.guild/instructions.md`.

### Agent Configuration Approach
All agent customization is handled through readable instructions rather than complex YAML specifications:

**Custom Agent Types**:
- **Domain-Specific Agents**: Specialized for particular business domains or requirements  
- **Cross-Technology Agents**: Handle integration between multiple technologies
- **Quality-Focused Agents**: Specialized in security, performance, or accessibility
- **Workflow-Specific Agents**: Optimized for particular development methodologies

### Simple Configuration
Custom agents follow the same simple template format:
```yaml
---
name: guild-[custom-name]-engineer
description: "[Custom] engineer with integrated planning and implementation capabilities"
---
```

**Model Assignment**: When specified in instructions, models are conditionally added to agent frontmatter.

### Integration with Guild System
Custom agents automatically integrate with Guild's routing and coordination system through instruction-based behavior configuration.

## Framework-Coupled Engineer Architecture

Guild agents are created as **general engineers specialized through framework context** during setup. Framework coupling naturally integrates related concerns (UI + state + docs) within unified engineer scope.

**CRITICAL REQUIREMENT**: **Coupled libraries and frameworks MUST share the same engineer agent**. Engineers are defined by their coupling relationships, not artificial technical boundaries.

## Coupling Principles

**Fundamental Rule**: Technologies that are **naturally coupled in development workflows** must be handled by the same engineer agent. Coupling is determined by developer mental models and practical usage patterns, not technical architecture.

### Coupling Categories

**Framework Ecosystems** (Single Engineer):
- **Frontend Frameworks**: React + Redux/Zustand + React Router + React Testing Library
- **Backend Frameworks**: Express + middleware + routing + validation + Express testing
- **Full-Stack Frameworks**: Next.js + routing + SSR + API routes + deployment

**Build Tool Ecosystems** (Single Engineer):  
- **Webpack**: Webpack + loaders + plugins + optimization + dev server
- **Vite**: Vite + plugins + build optimization + dev server + HMR

**Testing Ecosystems** (Single Engineer):
- **Jest**: Jest + testing utilities + mocking + coverage + configuration
- **Cypress**: Cypress + E2E patterns + fixtures + commands + CI integration

**Deployment Ecosystems** (Single Engineer):
- **Docker**: Docker + compose + networking + volumes + orchestration
- **AWS**: AWS services + deployment + monitoring + scaling + infrastructure

### Anti-Coupling Examples

**WRONG - Artificial Separation**:
```
guild-react-engineer (UI only)
guild-redux-engineer (State only)  
guild-react-router-engineer (Routing only)
guild-react-testing-engineer (Testing only)
```

**CORRECT - Natural Coupling**:
```
guild-react-engineer (React ecosystem: UI + state + routing + testing + docs)
```

### Coupling Detection Rules

1. **Mental Model Test**: Do developers think of these technologies as separate concerns or unified workflow?
2. **Knowledge Transfer Test**: Does expertise in one naturally include the other?
3. **Workflow Integration Test**: Are these technologies used together in typical development tasks?
4. **Documentation Coupling Test**: Are these technologies documented together in official guides?

**If yes to 2+ questions → Same engineer agent**

### General Engineer Categories

**Core Engineers (Framework-Agnostic)**:
- **guild-cli-engineer**: CLI applications, command-line interfaces, terminal tools
- **guild-package-engineer**: Package management, distribution, dependency handling
- **guild-config-engineer**: Configuration management, environment setup, build configuration

**Framework Engineers (Context-Specialized During Setup)**:
- **guild-[framework]-engineer**: Framagents ework-specific development including:
  - **UI Components**: Component architecture, styling, user interface
  - **State Management**: Application state, data flow, state persistence  
  - **Documentation**: Framework-specific docs, API documentation, guides
  - **Testing**: Framework testing patterns, component testing, integration tests

### Framework Specialization Examples

**Frontend Frameworks**:
- **guild-react-engineer**: React components + Redux/Zustand + React docs + React testing
- **guild-vue-engineer**: Vue components + Vuex/Pinia + Vue docs + Vue testing
- **guild-angular-engineer**: Angular components + NgRx + Angular docs + Angular testing

**Backend Frameworks**:
- **guild-express-engineer**: Express routing + middleware + API docs + Express testing
- **guild-fastapi-engineer**: FastAPI endpoints + Pydantic + API docs + FastAPI testing
- **guild-rails-engineer**: Rails controllers + ActiveRecord + Rails docs + Rails testing

**Full-Stack Frameworks**:
- **guild-nextjs-engineer**: Next.js pages + routing + SSR + Next.js docs + Next.js testing
- **guild-nuxt-engineer**: Nuxt pages + modules + SSR + Nuxt docs + Nuxt testing

### Context-Driven Specialization Process

**Setup Detection**:
1. **Framework Analysis**: Detect primary framework from package.json, dependencies, file structure
2. **Coupling Analysis**: Identify libraries/tools that are tightly coupled to detected frameworks
3. **General Engineer Creation**: Create guild-[framework]-engineer with framework context including all coupled concerns
4. **Context Injection**: Inject framework-specific knowledge plus all coupled library knowledge during agent creation
5. **Unified Scope**: UI, state, docs, testing, and coupled libraries naturally integrated within framework scope

**Coupling Examples**:
- **React Engineer**: React + Redux/Zustand + React Router + React Testing Library + React docs
- **Vue Engineer**: Vue + Vuex/Pinia + Vue Router + Vue Test Utils + Vue docs  
- **Express Engineer**: Express + middleware + routing + API docs + Express testing
- **Next.js Engineer**: Next.js + routing + SSR + deployment + Next.js docs + Next.js testing

**Specialization Benefits**:
- **Natural Coupling**: Framework knowledge includes all related and coupled concerns
- **Reduced Complexity**: Single engineer handles all framework-related and coupled library tasks
- **Context Coherence**: Unified understanding of framework + coupled library patterns and best practices
- **Optimal Coordination**: No artificial boundaries between coupled technologies