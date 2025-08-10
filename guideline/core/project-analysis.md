# Project Analysis Module

## Purpose
Defines project analysis strategies, technology detection patterns, and complexity profiling. This module is embedded into the setup command to enable intelligent project understanding and agent generation.

## Project Analysis Intelligence

### Pattern-Based Analysis
```yaml
Architectural Patterns:
  - Layered architecture
  - Microservices
  - Component-based
  - Event-driven
  - Domain-driven design
  
Development Flow Patterns:
  - Work organization
  - Lifecycle patterns
  - Quality assurance
  - Deployment strategies
  
Data Flow Patterns:
  - Information movement
  - Transformation logic
  - Processing boundaries
  - State management
  
Integration Patterns:
  - External systems
  - Interface contracts
  - Dependency management
  - API design
  
Scalability Patterns:
  - Growth handling
  - Modularity
  - Extensibility
  - Adaptation points
```

### Complexity Profiling
```yaml
Dimensions:
  Cognitive Complexity:
    - Domain knowledge requirements
    - Context maintenance needs
    - Conceptual interconnections
    - Mental model complexity
    
  Structural Complexity:
    - Pattern interactions
    - Abstraction layers
    - Integration points
    - Component coupling
    
  Change Complexity:
    - Context requirements for changes
    - Ripple effect potential
    - Validation needs
    - Testing complexity
    
  Coordination Complexity:
    - Concern interactions
    - Orchestration needs
    - Parallelization potential
    - Synchronization requirements

Intelligence Allocation:
  High Complexity → Enhanced thinking modes
  Medium Complexity → Standard thinking modes
  Low Complexity → Efficient execution modes
  Mixed Complexity → Adaptive strategies
```

## Technology Detection

### Detection Process
```yaml
Analysis Steps:
  1. Project Structure Scan:
     - Directory organization
     - File patterns
     - Naming conventions
     - Module structure
     
  2. Configuration Analysis:
     - package.json, requirements.txt, Cargo.toml
     - Build configurations
     - Environment settings
     - Dependency declarations
     
  3. Source Code Examination:
     - Import patterns
     - Framework usage
     - Library dependencies
     - Architectural styles
     
  4. Workflow Pattern Detection:
     - Development scripts
     - Build processes
     - Test configurations
     - Deployment setups
     
  5. Quality Tool Discovery:
     - Linting configurations
     - Testing frameworks
     - Coverage tools
     - CI/CD pipelines
```

### Pattern Categories
```yaml
Frontend Patterns:
  Component Frameworks:
    - React, Vue, Angular, Svelte
    - Component organization
    - State management patterns
    - Routing structures
    
  State Management:
    - Redux, MobX, Vuex, Pinia
    - Context patterns
    - Store structures
    - Action patterns
    
  Build Tools:
    - Webpack, Vite, Rollup, Parcel
    - Configuration patterns
    - Plugin usage
    - Optimization settings

Backend Patterns:
  API Frameworks:
    - Express, FastAPI, Django, Rails
    - Route organization
    - Middleware patterns
    - Service structure
    
  Database Integration:
    - ORM usage (Prisma, SQLAlchemy, ActiveRecord)
    - Query patterns
    - Migration strategies
    - Connection management
    
  Authentication:
    - JWT, OAuth, Session-based
    - Security patterns
    - Authorization logic
    - User management

CLI Patterns:
  Command Structure:
    - Argument parsing libraries
    - Command organization
    - Subcommand patterns
    - Option handling
    
  User Workflows:
    - Interactive prompts
    - Progress indication
    - Error handling
    - Help systems
    
  Distribution:
    - NPM packages
    - Python packages
    - Binary distribution
    - Installation patterns

Package Patterns:
  API Design:
    - Public interface patterns
    - Export strategies
    - Type definitions
    - Documentation structure
    
  Distribution Strategy:
    - Package managers
    - Version management
    - Dependency handling
    - Publishing workflows
    
  Quality Standards:
    - Testing patterns
    - Documentation requirements
    - API stability
    - Backward compatibility
```

## Agent Generation Strategy

### Pattern to Agent Mapping
```yaml
Detection → Generation Logic:
  
  CLI Patterns Detected:
    trigger: Command parsing, user interaction patterns
    generate: guild-cli-engineer
    intelligence:
      - Command structure understanding
      - User workflow optimization
      - Distribution expertise
      - Installation patterns
    
  Frontend Patterns Detected:
    trigger: Component frameworks, UI libraries
    generate: guild-frontend-engineer
    intelligence:
      - Component architecture
      - State management
      - UI/UX patterns
      - Frontend testing
    
  Backend Patterns Detected:
    trigger: API frameworks, service patterns
    generate: guild-backend-engineer
    intelligence:
      - API design
      - Service architecture
      - Data persistence
      - Security patterns
    
  Package Patterns Detected:
    trigger: Library structure, distribution setup
    generate: guild-package-engineer
    intelligence:
      - API design
      - Distribution strategy
      - Documentation
      - Versioning
    
  Full-Stack Patterns:
    trigger: Combined frontend + backend
    generate: Multiple specialized engineers
    intelligence: Domain-specific expertise
```

### Intelligence Embedding
```yaml
Project-Specific Knowledge:
  Architectural Understanding:
    - Design patterns used
    - Component relationships
    - Data flow patterns
    - Integration points
    
  Technology Context:
    - Framework versions
    - Library ecosystem
    - Tool configurations
    - Development workflow
    
  Quality Standards:
    - Testing approaches
    - Code style
    - Documentation standards
    - Performance requirements
    
  Domain Knowledge:
    - Business logic patterns
    - User workflows
    - Data models
    - External integrations
```

## Analysis Prompts

### Project Analysis Prompt Template
```
Perform comprehensive project analysis using all available tools.

Focus Areas:
1. Technology-Agnostic Pattern Recognition
   - Identify architectural patterns beyond specific tools
   - Understand domain patterns and business logic
   - Recognize quality and development patterns
   
2. Complexity Assessment
   - Evaluate cognitive load requirements
   - Assess structural complexity
   - Determine change impact patterns
   - Identify coordination needs
   
3. Technology Stack Detection
   - Discover frameworks and libraries
   - Identify development tools
   - Understand build and deployment
   - Recognize quality tools
   
4. Workflow Understanding
   - Development processes
   - Testing strategies
   - Deployment patterns
   - Collaboration workflows

Output: Comprehensive project profile for agent generation
```

### Agent Generation Prompt Template
```
Based on project analysis, generate specialized agents with:

1. Embedded Project Intelligence
   - Architectural understanding
   - Technology expertise
   - Domain knowledge
   - Quality standards
   
2. Optimal Configuration
   - Thinking mode assignment
   - Context optimization settings
   - Parallel execution capability
   - Handoff protocols
   
3. Specialization Focus
   - Core competencies
   - Technology coupling
   - Workflow integration
   - Quality responsibilities

Output: Complete agent definitions with embedded intelligence
```

## Integration Points

### Setup Command Embedding
This module provides:
- Analysis strategies
- Detection patterns
- Complexity profiling
- Generation logic

### Agent Creation
Drives agent generation:
- Pattern detection
- Intelligence embedding
- Configuration optimization
- Specialization assignment

### Workflow Adaptation
Influences workflow:
- Complexity-based strategies
- Resource allocation
- Parallelization decisions
- Quality gate configuration

## Key Invariants

1. **Pattern-Based**: Use patterns, not hardcoded framework names
2. **Intelligence Embedding**: All agents get project knowledge
3. **Complexity-Driven**: Match resources to complexity
4. **Technology-Agnostic**: Work with any technology stack
5. **Adaptive Generation**: Create agents based on actual needs

## Module Dependencies
- system-principles.md (intelligence approach)
- agent-architecture.md (agent types)

## Module Consumers
- `/guild:setup` command (primary)
- Agent generation logic
- Workflow optimization
- Resource allocation