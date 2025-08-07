# /guild:setup

**Usage**: `/guild:setup [--standalone] [additional-guidance]`

**CRITICAL**: This command executes the systematic Guild setup process with technology detection, agent creation, and system configuration following GUIDELINE.md specifications.

## Command Flags

- **`--standalone`**: Create self-contained agents that operate independently of the .guild system
- **`[additional-guidance]`**: Optional guidance for custom agent creation or specific requirements

## Setup Mode Detection

**FIRST**: Detect setup mode based on command flags:

### Standalone Mode Detection

If `--standalone` flag is present, execute **Standalone Agent Creation** workflow:
- Skip .guild system setup
- Create self-contained agents directly in `.claude/agents/` 
- Generate CLAUDE.md documentation
- Focus on integration with default Claude Code workflow

### Standard Mode Detection

If no `--standalone` flag, execute **Standard Guild Setup** workflow:
- Full .guild system configuration
- Template-based agent creation
- System file generation
- Guild workflow integration

## Configuration Analysis

For **Standard Mode**, analyze if Guild is already configured for this project by checking for `.guild/instructions.md`.

### If Guild NOT Configured

Display this message and continue with setup:

```
🏛️ **Guild Auto-Setup Initializing**

Guild is not yet configured for this project. Executing systematic setup process:

1. **Technology Detection**: Analyzing project structure and dependencies
2. **Component Analysis**: Identifying backend, frontend, CLI, API, database, and mobile components  
3. **Agent Creation**: Creating unified planning agent and specialized engineers with integrated capabilities
4. **System Integration**: Configuring master reference system and workflow coordination

**Proceeding with technology-driven agent creation...**
```

### If Guild IS Configured

Display current configuration and offer to update:

```
🏛️ **Guild Configuration Detected**

Current Guild setup found. Options:
1. **Update Configuration**: Refresh agents based on current project state
2. **Add Custom Agents**: Create additional agents based on additional guidance
3. **Validate Setup**: Verify current configuration integrity

**Proceeding with configuration update...**
```

## Agent Creation Process

Execute the appropriate agent creation workflow based on detected mode:

### Standalone Agent Creation Process

**STANDALONE MODE WORKFLOW** (when `--standalone` flag is present):

#### Stage 1: 🔍 Technology & Domain Analysis

**Phase 1A: Project Technology Stack**:
- **Package Analysis**: Examine dependencies, frameworks, and tools
- **Complexity Assessment**: Determine project complexity and specialization needs
- **Domain Identification**: Identify key domains requiring specialized expertise
- **Integration Points**: Analyze how specialists integrate with existing workflow

**Phase 1B: Specialization Requirements**:
- **Security Requirements**: Identify security analysis needs
- **Performance Requirements**: Assess performance optimization opportunities  
- **Accessibility Requirements**: Determine accessibility compliance needs
- **Documentation Requirements**: Evaluate documentation and API doc needs
- **Code Quality Requirements**: Assess code review and standards needs

#### Stage 2: 🤖 Self-Contained Agent Creation

**Agent Creation Strategy**:
- **Domain Specialists**: Create focused agents for identified specializations
- **Technology Specialists**: Create agents for complex technology stacks
- **Process Specialists**: Create agents for workflow optimization
- **Integration Agents**: Create agents for system integration tasks

**Standalone Agent Template**:
```yaml
---
name: [specialist-name]-agent
role: [specific-domain-role]
approach: [execution-methodology]
scope: [operational-boundaries]  
specialization: [expertise-area]
self_contained: true
---

# [Agent Name]

## Role Definition
[Clear description of agent role and primary responsibilities]

## Execution Approach  
[Detailed methodology for how this agent approaches tasks]

## Specialization Boundaries
[Precise definition of what this agent handles and doesn't handle]

## Integration Guidelines
[How this agent integrates with standard Claude Code workflow]

## Usage Scenarios
[Specific scenarios where this agent is most effective]
```

**Agent Categories to Create**:

**Security & Compliance**:
- **security-analyst-agent**: Vulnerability assessment, security review, threat analysis
- **accessibility-auditor-agent**: WCAG compliance, accessibility testing, audit recommendations

**Performance & Quality**:
- **performance-engineer-agent**: Performance optimization, profiling, monitoring setup
- **code-reviewer-agent**: Code quality analysis, best practices, refactoring suggestions

**Documentation & Architecture**:  
- **documentation-writer-agent**: Technical docs, API documentation, user guides
- **api-architect-agent**: API design patterns, architecture recommendations, integration planning

**Deployment & Operations**:
- **deployment-engineer-agent**: CI/CD optimization, deployment strategies, infrastructure
- **monitoring-engineer-agent**: Observability setup, monitoring configuration, alerting

**Specialized Engineering**:
- **database-optimizer-agent**: Database performance, query optimization, schema design
- **testing-strategist-agent**: Test strategy, quality assurance, testing architecture

#### Stage 3: 📁 Direct Agent Creation

**File Creation Process**:
1. **Create .claude/agents/ Directory**: Ensure agent directory exists
2. **Generate Standalone Agents**: Create self-contained agent files
3. **Skip .guild System**: No .guild directory or system files created
4. **Documentation Generation**: Add usage documentation to CLAUDE.md

#### Stage 4: 📖 Documentation Integration

**CLAUDE.md Integration**:
- **Agent Descriptions**: Add clear descriptions of each created agent
- **Usage Examples**: Provide specific usage scenarios and examples
- **Integration Patterns**: Document how agents integrate with standard workflow
- **Activation Guidelines**: Clear instructions for when to use each agent

### Standard Guild Setup Process

**STANDARD MODE WORKFLOW** (when no `--standalone` flag):

## Template-Based Agent Creation Process

**MANDATORY WORKFLOW**: Execute the complete technology-driven agent creation process with template inlining as defined in GUIDELINE.md:

### Stage 1: 🔍 Advanced Technology Detection & Discovery

**Phase 1A: Preset Technology Stack Analysis**:
- **Package Analysis**: Examine package.json, dependencies, devDependencies to identify frameworks and libraries
- **File Structure Analysis**: Analyze directory structure to identify project patterns and architecture
- **Configuration Detection**: Identify build tools, testing frameworks, deployment configurations
- **Language Detection**: Identify primary and secondary programming languages used
- **Framework Identification**: Detect specific frameworks (React, Vue, Express, FastAPI, etc.)

**Phase 1B: Advanced Discovery & Research**:
- **Unknown Technology Identification**: Analyze dependencies for unrecognized libraries and frameworks
- **Emerging Technology Detection**: Identify cutting-edge or niche technologies not in preset patterns
- **Research Integration**: Use available MCP servers for deep library documentation analysis
- **WebSearch Enhancement**: Research current technology trends and integration patterns
- **Dynamic Specialization Analysis**: Determine agent specialization requirements for discovered technologies

**Phase 1C: Component Discovery & Context Collection**:
- **UI Component Scanning**: Discover existing components in src/components, app/components
- **Component Library Detection**: Identify Material-UI, Ant Design, Chakra UI, etc.
- **API Route Mapping**: Scan routes/, api/, controllers/ for endpoint patterns
- **Database Schema Extraction**: Analyze Prisma schema, TypeORM entities, Mongoose models
- **Testing Pattern Recognition**: Identify test files and testing frameworks
- **Build Configuration Analysis**: Webpack, Vite, Next.js config understanding

**Component Context Building**:
```yaml
For Each UI Framework Detected:
  1. Scan component directories
  2. Build component inventory:
     - Component names and locations
     - Props and interfaces
     - Used UI libraries
     - Styling patterns
  3. Inject into engineer context:
     - Existing components list
     - Component library APIs
     - Design patterns in use
     - Accessibility standards

For Each Backend Framework:
  1. Scan route definitions
  2. Build API inventory:
     - Endpoint paths and methods
     - Middleware chains
     - Authentication setup
     - Validation schemas
  3. Inject into engineer context:
     - Route patterns
     - Middleware usage
     - Error handling patterns
     - Security configurations

For Database Systems:
  1. Analyze schema files
  2. Build model inventory:
     - Entity definitions
     - Relationships
     - Validation rules
  3. Inject into engineer context:
     - Current schemas
     - Migration patterns
     - Query optimizations
```

**Component Identification**:
- **CLI Tools**: Detect CLI applications, scripts, and command-line interfaces
- **Backend Systems**: Identify server applications, APIs, microservices, databases
- **Frontend Applications**: Identify client applications, SPAs, static sites, mobile apps  
- **API Interfaces**: Detect REST APIs, GraphQL, WebSocket, gRPC services
- **Database Systems**: Identify database usage, ORMs, data management patterns
- **Mobile Applications**: Detect mobile frameworks, native apps, hybrid solutions

**Simple Discovery Process**:

1. **Technology Analysis**:
   ```
   For each dependency in project:
   - Identify technology type and usage patterns
   - Determine if specialized agent is needed
   - Create appropriate engineer agent based on project needs
   ```

### Stage 2: 🎯 Simple Agent Creation Strategy

**Unified Engineer Architecture**:
- **Single Planning Agent**: One `guild-planning-agent` for unified task coordination and routing
- **Framework Engineers**: Create `guild-[framework]-engineer` with context-driven specialization (UI + state + docs + testing)
- **Agent Naming**: Use systematic naming convention: `guild-[technology]-engineer`
- **System Integration**: All agents configured to reference `.guild/overview.md` master reference

**Simple Agent Creation Logic**:

**Phase 2A: Framework-Agnostic Core Agent Creation**:
- **CLI Detected**: `guild-cli-engineer` (unified planning + implementation)
- **Package Management**: `guild-package-engineer` (unified planning + implementation)
- **Backend API**: `guild-backend-engineer` (unified planning + implementation)
- **Frontend App**: `guild-frontend-engineer` (unified planning + implementation)
- **Database**: `guild-database-engineer` (unified planning + implementation)

**Phase 2B: Framework-Coupled Agent Creation**:
- Create specialized agents for detected frameworks and significant libraries
- Use basic agent template with integrated planning and implementation capabilities
- Focus on project-specific technology needs without complex research protocols

### Stage 3: 📁 Guild System Structure Creation

**System File Creation**:
1. **Create .guild Directory**: Ensure `.guild/` directory exists in project root
2. **Create Agent Directory**: Ensure `.claude/agents/guild/` subdirectory exists for clean agent separation
3. **Generate Core Files**: Create all required Guild system files using embedded template content:
   - `instructions.md` - User-configurable project settings with detected requirements
   - `overview.md` - Master reference containing workflow stage definitions and system rules
   - `agents.md` - Agent creation templates and standards
   - `ignore.md` - File exclusion patterns with soft ignore behavior

**Template Integration**: All templates are directly embedded in this setup command after installation and used inline for .guild folder creation.

### Stage 4: 🤖 Agent Role & Specialization Definition

**CRITICAL**: Agent roles and specialization boundaries must be precisely defined during setup based on technology coupling analysis.

**Role Definition Protocol**:

**Phase 4A: Technology Coupling Analysis**:
1. **Dependency Analysis**: Analyze package.json, requirements.txt, etc. for technology dependencies
2. **Coupling Detection**: Apply coupling detection rules to identify naturally coupled technologies
3. **Mental Model Mapping**: Map technologies to developer mental models and workflow patterns
4. **Role Boundary Definition**: Define precise boundaries for each agent role based on coupling analysis

**Core System Agents** (Always Created):
- **guild-reasoning-agent**: 
  - **Role**: Prompt analysis, reasoning, typo correction, and project alignment
  - **Specialization**: Prompt clarification, error correction, requirement analysis, project context alignment
  - **Boundaries**: Prompt processing only, no research or implementation

- **guild-planning-agent**: 
  - **Role**: Task coordination, agent selection, and workflow orchestration  
  - **Specialization**: Agent routing, workflow management, context handoffs
  - **Boundaries**: Coordination only, no prompt analysis or implementation

- **guild-project-research-agent**: 
  - **Role**: Project-specific context engineering and research
  - **Specialization**: Codebase analysis, project patterns, existing conventions
  - **Boundaries**: Project context only, no external research

- **guild-global-research-agent**: 
  - **Role**: Community solutions and best practices research
  - **Specialization**: External research, community standards, best practices
  - **Boundaries**: External research only, no project-specific context

- **guild-verification-agent**: 
  - **Role**: Changes verification and requirement validation
  - **Specialization**: Prompt requirement checking, plan compliance verification, quality assurance validation
  - **Boundaries**: Verification only, created when --verify flag is used

**Phase 4C: Framework Engineer Role Definition**:
Apply technology coupling analysis to define precise agent roles and specialization boundaries:

**Core Engineers (Framework-Agnostic Roles)**:
- **guild-cli-engineer**: 
  - **Role**: Command-line interface development and terminal tools
  - **Specialization**: CLI applications, command parsing, terminal interaction, CLI distribution
  - **Scope**: Node.js CLI patterns, argument handling, terminal output, CLI packaging
  - **Boundaries**: CLI concerns only, no web/API/database responsibilities

- **guild-package-engineer**:
  - **Role**: Package management, distribution, and dependency handling
  - **Specialization**: NPM/PyPI publishing, versioning, package lifecycle, dependency management
  - **Scope**: Package.json management, publishing workflows, semantic versioning, dependency resolution
  - **Boundaries**: Package concerns only, no application logic or framework code

- **guild-config-engineer**:
  - **Role**: Configuration management, environment setup, build configuration
  - **Specialization**: Config files, environment variables, build tools, development environment setup
  - **Scope**: .env files, config parsing, build configuration, tooling setup
  - **Boundaries**: Configuration concerns only, no application or framework logic

**Framework Engineers (Coupled Technology Roles)**:

Apply coupling detection to create framework engineers with precisely defined unified scope:

```yaml
---
name: guild-[framework]-engineer
description: "[Framework] ecosystem engineer - handles ALL coupled concerns within framework scope"
specialization:
  ui_components: "Component architecture, styling, user interface patterns"
  state_management: "Application state, data flow, state persistence (Redux/Vuex/etc)"
  documentation: "Framework docs, API documentation, usage guides"
  testing: "Framework testing patterns, component/integration testing"  
  routing: "Framework routing systems and navigation patterns"
  build_integration: "Framework-specific build optimization and tooling"
boundaries: "Everything within [framework] ecosystem, nothing outside framework scope"
---
```

**Role Definition Examples**:

- **guild-react-engineer**:
  - **Role**: Complete React ecosystem management
  - **Specialization**: React components + Redux/Zustand + React Router + React Testing Library + React docs
  - **Scope**: JSX components, hooks, state management, routing, testing patterns, React build optimization
  - **Boundaries**: React ecosystem only, no backend/database/deployment concerns

- **guild-express-engineer**:
  - **Role**: Complete Express.js ecosystem management  
  - **Specialization**: Express routing + middleware + validation + Express testing + API docs
  - **Scope**: Express servers, middleware, routing, request handling, API documentation, Express testing
  - **Boundaries**: Express ecosystem only, no frontend/database schema/deployment concerns

- **guild-nextjs-engineer**:
  - **Role**: Complete Next.js full-stack ecosystem management
  - **Specialization**: Next.js pages + SSR + API routes + deployment + Next.js docs + testing
  - **Scope**: Next.js development, SSR patterns, API routes, deployment optimization, Next.js testing
  - **Boundaries**: Next.js ecosystem only, no separate backend services/external database design

**Coupling Detection Logic**: Technologies are coupled if they appear together in official documentation, share mental models in developer workflows, and require coordinated knowledge for effective use.

**Phase 4D: Role Validation & Specialization Injection**:

**Agent Role Validation Protocol**:
```
For each created agent:

1. Role Clarity Check:
   - Verify role definition is specific and actionable
   - Confirm specialization boundaries are clear and non-overlapping
   - Validate scope definition covers all intended responsibilities

2. Coupling Verification:
   - Ensure coupled technologies are assigned to same agent
   - Verify no artificial separation of naturally coupled concerns
   - Confirm agent scope matches developer mental models

3. Specialization Injection:
   - Inject framework-specific knowledge and patterns
   - Add technology-specific capabilities and best practices
   - Include coupled technology context and integration patterns
```

**Role Definition Template**:
```yaml
---
name: guild-[technology]-engineer
description: "[Technology] ecosystem engineer - handles ALL coupled concerns within [technology] scope"
role: "[Specific role description]"
specialization: "[Detailed specialization areas]"
scope: "[Precise scope definition]" 
boundaries: "[Clear boundary limitations]"
---
```

**Concrete Role Definition Examples**:

**Frontend Framework Stack**:
```
Detected: React + Redux + React Router + React Testing Library + Styled Components

Role Assignment:
- guild-react-engineer:
  - Role: Complete React ecosystem development and architecture
  - Specialization: React components, Redux state management, React Router navigation, React Testing Library testing, styled-components styling, React performance optimization
  - Scope: All React-related development from components to testing within React application boundaries
  - Boundaries: React application concerns only, no backend API implementation, no database design, no deployment infrastructure
```

**Backend Framework Stack**:
```
Detected: Express.js + Mongoose + Passport.js + Jest + Swagger

Role Assignment:
- guild-express-engineer:
  - Role: Complete Express.js ecosystem API development and architecture  
  - Specialization: Express routing, Mongoose ODM, Passport authentication, Express middleware, API documentation, Express testing with Jest
  - Scope: All Express API development from routing to authentication within backend service boundaries
  - Boundaries: Express service concerns only, no frontend components, no database administration, no infrastructure provisioning
```

**Full-Stack Framework**:
```
Detected: Next.js + Prisma + NextAuth.js + Vercel

Role Assignment:
- guild-nextjs-engineer:
  - Role: Complete Next.js full-stack application development and deployment
  - Specialization: Next.js pages/app router, Prisma ORM integration, NextAuth authentication, API routes, SSR/SSG optimization, Vercel deployment
  - Scope: All Next.js application development from frontend to API routes within Next.js application boundaries  
  - Boundaries: Next.js application concerns only, no separate backend services, no external database administration, no custom infrastructure
```

**Build Tool Ecosystem**:
```
Detected: Webpack + Babel + TypeScript + ESLint + Prettier

Role Assignment:
- guild-webpack-engineer:
  - Role: Complete build system configuration and optimization
  - Specialization: Webpack configuration, Babel transpilation, TypeScript compilation, ESLint linting, Prettier formatting, build optimization
  - Scope: All build system concerns from compilation to optimization within project build boundaries
  - Boundaries: Build system concerns only, no application logic, no runtime behavior, no deployment processes
```

**Thin Agent Content Structure Template**:
```markdown
---
name: guild-[technology]-engineer
description: "[Technology] engineer - references overview processes for workflow guidance"
---

# [Technology] Engineer

## Process References
This agent follows workflow processes defined in `.guild/overview.md` and executes tasks according to command-specific workflows.

## Technology Focus
Specialized for [technology] development within the broader Guild workflow system.

## Configuration
Behavior customized through `.guild/instructions.md` settings and command-specific requirements.
```

**Thin Agent Validation**:
- **Process References**: All agents reference `.guild/overview.md` for workflow processes
- **Lightweight Design**: Minimal agent definitions that reference overview processes
- **Configuration-Driven**: Agent behavior customized through `.guild/instructions.md`
- **Template-Based**: Agents created by inlining templates during setup
- **Compliance Requirements**: Adherence to Guild system rules through configuration references
- **Technology Focus**: Specialized for specific technologies within Guild workflow system

### Stage 5: 🧠 Context Injection & Specialization Process

**CRITICAL**: Framework context must be systematically injected into agents during creation to build precise specialization.

**Context Injection Protocol**:

**Phase 5A: Framework Knowledge Injection**:
1. **Official Documentation Context**: Inject framework-specific patterns, best practices, and official recommendations
2. **Ecosystem Integration Context**: Add knowledge of coupled libraries, common integrations, and ecosystem patterns  
3. **Project-Specific Context**: Include detected project patterns, existing conventions, and configuration specifics
4. **Community Best Practices**: Integrate community standards, common patterns, and industry practices

**Phase 5B: Specialization Boundary Enforcement**:
1. **Scope Validation**: Ensure agent understanding aligns with defined role boundaries
2. **Coupling Verification**: Confirm agent handles all coupled concerns within their scope
3. **Separation Validation**: Verify agent doesn't overlap with other agents' boundaries
4. **Context Coherence**: Ensure injected context forms coherent, actionable specialization

**Context Injection Examples**:

**React Engineer Context Injection**:
```
Framework Context Injected:
- React Patterns: Hooks, component composition, state management, lifecycle patterns
- Redux Integration: State management patterns, store configuration, middleware usage
- Router Integration: Navigation patterns, route configuration, protected routes
- Testing Integration: Component testing, hooks testing, integration testing patterns
- Performance: React optimization, memoization, bundle splitting, SSR considerations
- Ecosystem: Common libraries (React Query, Formik, etc.), build integration, deployment patterns

Result: Agent understands React ecosystem holistically and can handle any React-related task within defined boundaries
```

**Express Engineer Context Injection**:
```  
Framework Context Injected:
- Express Patterns: Middleware, routing, error handling, request/response patterns
- Database Integration: ORM patterns, connection management, query optimization
- Authentication: Passport integration, JWT patterns, session management
- API Design: REST patterns, validation, documentation, testing strategies
- Security: Security middleware, CORS, helmet, input validation
- Performance: Caching, compression, clustering, monitoring patterns

Result: Agent understands Express ecosystem holistically and can handle any Express-related task within defined boundaries
```

**Context Injection Validation**:
- **Completeness Check**: Agent has sufficient context for all responsibilities within their scope
- **Accuracy Check**: Injected context aligns with current best practices and official recommendations
- **Coherence Check**: Context forms unified understanding enabling effective decision-making
- **Boundary Check**: Context doesn't include information outside agent's defined boundaries

### Stage 6: ⚙️ Configuration Integration

**User Configuration**:
- **Ultrathink Mode**: Configure enhanced agent coordination based on user preferences
- **Model Specifications**: Add model fields only when user provides specialized requirements in additional guidance
- **Custom Agents**: Create additional agents based on user-provided guidance
- **Local Tool Integration**: Configure integration with detected local development tools

**System Validation**:
- **File Integrity**: Verify all Guild system files created successfully
- **Agent Validation**: Confirm all agents follow YAML format requirements and system compliance
- **Reference Validation**: Ensure all agents properly reference `.guild/overview.md` master reference
- **Workflow Integration**: Validate agent integration with Guild workflow system

## Template Inlining System

**Embedded Templates**: Setup command contains all template content directly embedded and inlined during installation. Templates are processed and used inline during .guild folder creation without external dependencies.

## Setup Completion Reports

Display appropriate completion report based on setup mode:

### Standalone Setup Completion Report

**For `--standalone` mode**, display:

```
✅ **Standalone Agent Setup Complete**

**🔍 Analysis Results:**
- 📊 **Technology Stack**: [List of detected technologies and frameworks]
- 🎯 **Specialization Needs**: [List of identified specialization requirements]
- 💡 **Domain Complexity**: [Assessment of project complexity and specialist needs]

**🤖 Standalone Agents Created:**
- 🏗️ **Agent Location**: `.claude/agents/` directory
- 🎯 **Specialists Created**: [List of specialist agents with brief descriptions]
  - **[agent-name]**: [Brief role description]
  - **[agent-name]**: [Brief role description]
  - **[agent-name]**: [Brief role description]

**📖 Documentation Updated:**
- ✅ **CLAUDE.md**: Added agent descriptions and usage examples
- 📋 **Integration Patterns**: Documented workflow integration guidelines  
- 🎯 **Usage Scenarios**: Clear activation triggers and use cases
- 📚 **Examples**: Specific usage examples for each agent

**🚀 Usage Instructions:**

**Direct Agent Usage:**
- Standard Claude Code commands automatically use appropriate specialists
- No special commands required - agents integrate seamlessly into workflow
- Claude Code selects optimal agents based on task requirements

**Agent Activation Examples:**
- Security tasks → `security-analyst-agent` activates automatically
- Performance issues → `performance-engineer-agent` handles optimization  
- Documentation needs → `documentation-writer-agent` creates/updates docs
- Code quality → `code-reviewer-agent` provides analysis and improvements

**🎯 Next Steps:**
1. **Use Standard Commands**: Regular Claude Code commands will leverage specialists
2. **Review Documentation**: Check updated CLAUDE.md for detailed usage patterns
3. **Test Integration**: Try tasks matching specialist domains to see automatic activation
4. **Custom Specialists**: Add more specialists by running `/guild:setup --standalone` with specific guidance

**Standalone Agents Ready** - Self-contained specialists integrated into standard Claude Code workflow.
```

### Standard Guild Setup Completion Report

**For standard mode**, display:

```
✅ **Guild Setup Complete**

**🔍 Technology Detection Results:**
- 📊 **Detected Technologies**: [List of detected technologies and components]
- 🎯 **Components**: [Backend/Frontend/CLI/API/Database/Mobile components identified]

**🧠 Agent Creation Summary:**
- 📁 Created `.guild/` system folder with 4 configuration files
- 🤖 Generated specialized agents:
  - 🧠 **Core Agents**: guild-reasoning-agent (prompt analysis), guild-planning-agent (task coordination)
  - 🔨 **Framework Engineers**: [List of engineers created with framework context specialization]
  - 🎯 **Research Agents**: guild-project-research-agent, guild-global-research-agent
  - ✅ **Verification Agent**: guild-verification-agent (created for --verify flag)

**⚙️ System Configuration:**
- 📋 Master Reference: `.guild/overview.md` configured
- ⚙️ Project Settings: `.guild/instructions.md` with project-specific requirements
- 🚫 Ignore Patterns: `.guild/ignore.md` with soft ignore behavior
- 📖 Agent Templates: `.guild/agents.md` for reference

**🚀 Available Commands:**
- `/guild [flags] "task"` - Flag-based workflow stage system
- **Available Flags**: --refactor, --fix, --test, --verify, --project, --no-reason, --no-plan, --no-implement
- **Default Blocks**: reasoning + planning + implementation
- `/guild:plan "task description"` - Task planning workflow
- `/guild:spec [level] "specification"` - Specification workflow

**🎯 Next Steps:**
1. Use `/guild "your task"` for immediate execution with default stages
2. Use `/guild --test --verify "task"` for comprehensive workflow with testing and verification
3. Review `.guild/instructions.md` for project-specific customization
4. Check `.guild/overview.md` for complete system documentation
5. Leverage flag-based workflow stages for precise control

**Guild Setup Complete** - Clean, simple, elegant design with instruction-based configuration.
```

```
✅ **Guild Setup Complete**

**🔍 Technology Detection Results:**
- 📊 **Detected Technologies**: [List of detected technologies and components]
- 🎯 **Components**: [Backend/Frontend/CLI/API/Database/Mobile components identified]

**🧠 Agent Creation Summary:**
- 📁 Created `.guild/` system folder with 4 configuration files
- 🤖 Generated specialized agents:
  - 🧠 **Core Agents**: guild-reasoning-agent (prompt analysis), guild-planning-agent (task coordination)
  - 🔨 **Framework Engineers**: [List of engineers created with framework context specialization]
  - 🎯 **Research Agents**: guild-project-research-agent, guild-global-research-agent
  - ✅ **Verification Agent**: guild-verification-agent (created for --verify flag)

**⚙️ System Configuration:**
- 📋 Master Reference: `.guild/overview.md` configured
- ⚙️ Project Settings: `.guild/instructions.md` with project-specific requirements
- 🚫 Ignore Patterns: `.guild/ignore.md` with soft ignore behavior
- 📖 Agent Templates: `.guild/agents.md` for reference

**🚀 Available Commands:**
- `/guild [flags] "task"` - Flag-based workflow stage system
- **Available Flags**: --refactor, --fix, --test, --verify, --project, --no-reason, --no-plan, --no-implement
- **Default Blocks**: reasoning + planning + implementation
- `/guild:plan "task description"` - Task planning workflow
- `/guild:spec [level] "specification"` - Specification workflow

**🎯 Next Steps:**
1. Use `/guild "your task"` for immediate execution with default stages
2. Use `/guild --test --verify "task"` for comprehensive workflow with testing and verification
3. Review `.guild/instructions.md` for project-specific customization
4. Check `.guild/overview.md` for complete system documentation
5. Leverage flag-based workflow stages for precise control

**Guild Setup Complete** - Clean, simple, elegant design with instruction-based configuration.
```
✅ **Guild Advanced Discovery Setup Complete**

**🔍 Technology Detection Results:**
- 📊 **Preset Detected**: [List of preset-detected technologies and components]
- 🔬 **Discovery Phase**: [List of unknown/emerging technologies discovered]
- 🎯 **Components**: [Backend/Frontend/CLI/API/Database/Mobile components identified]
- 📚 **Research Sources**: MCP servers: [X] libraries | WebSearch: [Y] technologies

**🧠 Advanced Agent Creation Summary:**
- 📁 Created `.guild/` system folder with 4 configuration files
- 🤖 Generated [X] specialized agents with research-backed expertise:
  - 🧠 **Planning Agent**: 
    - Core: guild-planning-agent (unified task coordination and routing)
  - 🔨 **Unified Engineers**:
    - Preset: [List of preset engineers created (guild-cli-engineer, guild-package-engineer, etc.)]  
    - MCP-Researched: [List of MCP-researched engineers created]
    - WebSearch-Researched: [List of WebSearch-researched engineers created]
  - 🎯 **Research Agents**: guild-project-research-agent, guild-global-research-agent
  - ✅ **Verification Agent**: guild-verification-agent (created for --verify flag)

**📚 Research Integration Summary:**
- 🔗 **MCP Libraries Researched**: [X] libraries with comprehensive documentation integration
- 🌐 **WebSearch Technologies Researched**: [Y] emerging technologies with current trend analysis
- 🎯 **Specialization Categories Created**: [List unique specialization categories discovered]
- 📈 **Research Depth**: Comprehensive API documentation + Current community practices

**⚙️ System Configuration:**
- 📋 Master Reference: `.guild/overview.md` configured
- ⚙️ Project Settings: `.guild/instructions.md` with detected + researched requirements
- 🚫 Ignore Patterns: `.guild/ignore.md` with soft ignore behavior
- 📖 Agent Templates: `.guild/agents.md` for reference
- 🔬 Research Metadata: All agents include research source and specialization tracking

**🎯 Enhanced Agent Capabilities:**
- **MCP-Backed Agents**: Deep framework knowledge from official documentation
- **WebSearch-Backed Agents**: Current community practices and trend awareness  
- **Dynamic Specialization**: Technology-specific expertise beyond preset patterns
- **Research Integration**: Continuous learning capability for emerging technologies

**🚀 Available Commands:**
- `/guild [flags] "task"` - Flag-based workflow stages with research-backed agents
- **Workflow Flags**: --refactor, --fix, --test, --verify, --project, --no-reason, --no-plan, --no-implement
- **Default Execution**: reasoning + planning + implementation stages
- `/guild:plan "task description"` - Task planning workflow with research integration
- `/guild:spec [level] "specification"` - Specification management with discovery capabilities

**📋 Discovery Enhancement Features:**
- ✅ **Unknown Technology Identification**: Automatic detection of unrecognized libraries
- ✅ **MCP Research Integration**: Deep documentation analysis for supported libraries
- ✅ **WebSearch Discovery**: Current best practices research for emerging technologies
- ✅ **Dynamic Agent Creation**: Research-backed specialized agent generation
- ✅ **Trend-Aware Expertise**: Current community standards and future considerations

**🎯 Next Steps:**
1. Use `/guild "your task"` for immediate execution with research-backed agents
2. Use `/guild --refactor --test --project "task"` for comprehensive project-wide optimization
3. Review `.guild/instructions.md` for project-specific customization including discovered technologies  
4. Check `.guild/overview.md` for complete system documentation with research integration
5. Leverage flag-based workflow stages for precise control over execution stages
6. Add custom agents or stages via `.guild/instructions.md` for additional discoveries

**Guild Advanced Discovery Integration Complete** - All agents include research-backed expertise with MCP/WebSearch integration and follow enhanced clean separation architecture.
```

## Simple Setup Logic Specifications

**CORE REQUIREMENTS**:
- ✅ **Technology-Driven**: Systematic analysis and detection of project technologies
- ✅ **Framework-Coupled Agent Creation**: Create framework engineers with unified scope (UI + state + docs + testing)
- ✅ **Context-Driven Architecture**: General engineers specialized through framework context injection
- ✅ **Template Integration**: Use embedded template system for all file creation
- ✅ **System Compliance**: All agents configured to reference `.guild/overview.md` master reference
- ✅ **User Extensibility**: Support custom agents and configurations based on additional guidance

**Simple Architecture Compliance**:
- 🏗️ **Straightforward Approach**: Technology detection → Simple agent creation → Configuration
- 📋 **Basic YAML Format**: Agents use simple frontmatter with name and description
- 🔗 **Master Reference**: All components reference `.guild/overview.md` for system rules
- ⚡ **Clean Execution**: Configure agents for optimal workflow execution
- 🧠 **User Configurability**: Support for customization through instructions.md

**Technology Discovery Process**:
- **Phase 1**: Execute technology detection using project analysis
- **Phase 2**: Create appropriate specialized agents for detected technologies
- **Phase 3**: Generate simple agent capabilities based on technology requirements
- **Phase 4**: Create agents with basic YAML format and clear capabilities

**Quality Assurance**:
- ✅ **Agent Quality**: Ensure agents provide clear, focused capabilities within their specialization
- ✅ **Integration Validation**: Ensure agents integrate seamlessly with Guild workflow system
- ✅ **Simple Configuration**: All agents use basic YAML format for maintainability
- ✅ **Clean Design**: Focus on elegant, simple design over complex specifications

This setup command provides a clean, simple, elegant Guild system that focuses on essential functionality while maintaining extensibility through instruction-based configuration.

## Embedded Templates

**CRITICAL**: These templates are embedded directly in this setup command and used inline for .guild folder creation.

### Agent Role Definition Template

```markdown
---
name: [agent-name]
description: "[Brief description of agent role and purpose referencing workflow step from .guild/overview.md]"
---

References: `.guild/overview.md` [workflow-step] workflow step
Technology: [If applicable, technology focus]
Configuration: `.guild/instructions.md`
```

### Instructions Template

```markdown
# Guild Project Instructions

This file contains simple instructions that customize Guild agent behavior for this project.

**Project-specific instructions:**

- ALL agents must provide "ultrathink" keyword in their prompt 
- guild-planning-agent must use opus model
- Agents must follow ignore patterns in .guild/ignore.md unless explicitly requested to override

**Simple Configuration:**

- Agent behavior is customized through clear, instruction-based configuration
- Users can specify model mappings, thinking modes, and custom requirements
- Configuration focuses on simplicity and user understanding
```

### Overview Template

```markdown
# Guild System Overview

**Guild**: Comprehensive workflow integration for Claude Code via external command system

[Complete overview content with workflow definitions and system architecture]

**Guild System Authority**: This overview serves as the central authority and reference point for all Guild system components, ensuring consistent, high-quality workflow execution across all agents and tasks.
```

**Template Usage**: These templates are used directly during .guild folder creation without external functions, ensuring proper thinking mode integration and configuration awareness.