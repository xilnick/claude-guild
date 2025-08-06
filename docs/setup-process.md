# Guild Setup Process

## Overview

The Guild setup process **analyzes your project** and **creates specialized agents** tailored to your technology stack, with intelligent boundary definition and context injection.

## Setup Workflow

### Phase 1: Project Analysis

```yaml
Project Discovery:
  Technology Detection:
    Sources:
      - package.json (Node.js/JavaScript)
      - requirements.txt (Python)
      - go.mod (Go)
      - Cargo.toml (Rust)
      - pom.xml/build.gradle (Java)
      - composer.json (PHP)
      - Gemfile (Ruby)
      
    Detection Process:
      1. Scan for dependency files
      2. Parse dependencies
      3. Identify frameworks
      4. Detect tools and libraries
      5. Determine versions
      
  Structure Analysis:
    Directories:
      - src/ or app/ (source code)
      - tests/ or spec/ (test files)
      - docs/ (documentation)
      - config/ (configuration)
      
    Patterns:
      - MVC structure
      - Microservices
      - Monolithic
      - Serverless
      
  Convention Detection:
    Code Style:
      - Formatting rules
      - Naming conventions
      - File organization
      
    Testing:
      - Test framework
      - Test structure
      - Coverage tools
```

### Phase 2: Technology Mapping

```yaml
Technology Classification:
  Frontend Technologies:
    Frameworks:
      - React → guild-react-engineer
      - Vue → guild-vue-engineer
      - Angular → guild-angular-engineer
      - Svelte → guild-svelte-engineer
      
    Styling:
      - CSS/SASS → guild-style-engineer
      - Tailwind → guild-tailwind-engineer
      - Styled Components → included in React engineer
      
  Backend Technologies:
    Runtime:
      - Node.js → guild-node-engineer
      - Python → guild-python-engineer
      - Go → guild-go-engineer
      - Java → guild-java-engineer
      
    Frameworks:
      - Express → guild-express-engineer
      - FastAPI → guild-fastapi-engineer
      - Django → guild-django-engineer
      - Spring → guild-spring-engineer
      
  Database Technologies:
    SQL:
      - PostgreSQL → guild-postgres-engineer
      - MySQL → guild-mysql-engineer
      - SQLite → guild-sqlite-engineer
      
    NoSQL:
      - MongoDB → guild-mongo-engineer
      - Redis → guild-redis-engineer
      - DynamoDB → guild-dynamo-engineer
      
  DevOps Technologies:
    Containerization:
      - Docker → guild-docker-engineer
      - Kubernetes → guild-k8s-engineer
      
    CI/CD:
      - GitHub Actions → guild-gha-engineer
      - Jenkins → guild-jenkins-engineer
      - CircleCI → guild-circle-engineer
```

### Phase 3: Agent Creation

```yaml
Agent Generation Process:
  1. Template Selection:
     - Choose base template
     - Identify specialization
     - Determine boundaries
     
  2. Context Injection:
     - Framework knowledge
     - Best practices
     - Project patterns
     - Tool integration
     
  3. Boundary Definition:
     - Scope of responsibility
     - File access patterns
     - Integration points
     - Exclusions
     
  4. Agent Instantiation:
     - Create agent file
     - Set metadata
     - Configure processes
     - Enable capabilities
```

## Technology Detection

### Detection Strategies

```javascript
// Technology detection implementation
class TechnologyDetector {
  async detectStack(projectPath) {
    const stack = {
      frontend: [],
      backend: [],
      database: [],
      devops: [],
      testing: []
    };
    
    // Check package.json for Node.js
    if (await this.fileExists('package.json')) {
      const pkg = await this.readJSON('package.json');
      stack.frontend.push(...this.detectFrontend(pkg));
      stack.backend.push(...this.detectBackend(pkg));
      stack.testing.push(...this.detectTesting(pkg));
    }
    
    // Check for Python
    if (await this.fileExists('requirements.txt')) {
      const reqs = await this.readFile('requirements.txt');
      stack.backend.push(...this.detectPython(reqs));
    }
    
    // Check for databases
    stack.database.push(...await this.detectDatabases());
    
    // Check for DevOps
    stack.devops.push(...await this.detectDevOps());
    
    return stack;
  }
  
  detectFrontend(pkg) {
    const frontend = [];
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    
    if (deps.react) frontend.push('react');
    if (deps.vue) frontend.push('vue');
    if (deps.angular) frontend.push('angular');
    if (deps.svelte) frontend.push('svelte');
    
    return frontend;
  }
  
  detectBackend(pkg) {
    const backend = [];
    const deps = { ...pkg.dependencies };
    
    if (deps.express) backend.push('express');
    if (deps.fastify) backend.push('fastify');
    if (deps.koa) backend.push('koa');
    if (deps.nestjs) backend.push('nestjs');
    
    return backend;
  }
}
```

### Pattern Recognition

```yaml
Pattern Detection:
  Architecture Patterns:
    MVC:
      indicators:
        - controllers/ directory
        - models/ directory
        - views/ directory
      agent_impact: Specialized MVC engineers
      
    Microservices:
      indicators:
        - services/ directory
        - Multiple package.json
        - API gateway
      agent_impact: Service-specific engineers
      
    Serverless:
      indicators:
        - serverless.yml
        - lambda functions
        - API Gateway config
      agent_impact: Serverless engineers
      
  Code Patterns:
    Functional:
      indicators:
        - Pure functions
        - Immutability
        - Composition
      agent_impact: Functional programming focus
      
    Object-Oriented:
      indicators:
        - Classes
        - Inheritance
        - Encapsulation
      agent_impact: OOP design patterns
```

## Agent Specialization

### Context Injection Process

```yaml
Context Building:
  Framework Context:
    Source: Official documentation
    Content:
      - Core concepts
      - Best practices
      - Common patterns
      - API reference
      
  Project Context:
    Source: Codebase analysis
    Content:
      - Existing patterns
      - Coding standards
      - Architecture decisions
      - Dependencies
      
  Integration Context:
    Source: Technology coupling
    Content:
      - Integration patterns
      - Communication protocols
      - Data formats
      - Error handling
```

### Specialization Examples

```yaml
React Engineer Specialization:
  Base: guild-engineer
  Framework: React
  
  Injected Context:
    Core Concepts:
      - Components
      - Hooks
      - State management
      - Lifecycle
      
    Patterns:
      - Container/Presentational
      - Custom hooks
      - Context patterns
      - Performance optimization
      
    Ecosystem:
      - React Router
      - Redux/MobX
      - Testing Library
      - Build tools
      
  Boundaries:
    Include:
      - Component development
      - State management
      - Routing
      - Testing
      
    Exclude:
      - Backend logic
      - Database queries
      - DevOps tasks
```

### Boundary Definition

```yaml
Boundary Rules:
  Scope Definition:
    Primary:
      - Core technology area
      - Direct responsibilities
      - Owned files
      
    Secondary:
      - Integration points
      - Shared interfaces
      - Configuration
      
    Excluded:
      - Other technology domains
      - Unrelated systems
      - External services
      
  File Access:
    Read:
      - All project files
      - Documentation
      - Configuration
      
    Write:
      - Technology-specific files
      - Related tests
      - Documentation updates
      
    Restricted:
      - Critical configuration
      - Production secrets
      - Other domain files
```

## Setup Configuration

### Setup Command Flow

```bash
/guild:setup

# System executes:
1. Analyze project structure
2. Detect technologies
3. Research best practices
4. Plan agent creation
5. Generate specialized agents
6. Configure routing rules
7. Validate setup
```

### Setup Customization

```yaml
# .guild/instructions.md
setup:
  auto_detect: true
  
  technology_overrides:
    frontend: [react, tailwind]
    backend: [express, graphql]
    database: [postgres, redis]
    
  agent_preferences:
    create_test_engineer: true
    create_docs_engineer: true
    create_security_engineer: false
    
  specialization_depth:
    shallow: Quick setup, basic agents
    normal: Standard specialization
    deep: Comprehensive context injection
```

## Agent Creation

### Agent File Generation

```yaml
Agent Creation:
  File Location: .guild/agents/[agent-name].md
  
  File Structure:
    ---
    name: guild-[technology]-engineer
    role: implementation
    processes: [implement-solution, refactor-code]
    context: [technology]-ecosystem
    technologies: [detected-list]
    parallel: true
    scope: [domain]
    boundaries: [specific-limits]
    ---
    
  Metadata:
    created: timestamp
    version: 1.0.0
    project: project-name
    specialization: technology-specific
```

### Dynamic Agent Creation

```javascript
// Agent creation implementation
class AgentCreator {
  async createAgent(technology, context) {
    const template = this.getTemplate(technology);
    const specialized = this.specialize(template, context);
    const bounded = this.defineBoundaries(specialized);
    
    const agent = {
      name: `guild-${technology}-engineer`,
      role: 'implementation',
      processes: this.getProcesses(technology),
      context: `${technology}-ecosystem`,
      technologies: this.getTechList(technology),
      parallel: true,
      scope: this.getScope(technology),
      boundaries: bounded
    };
    
    await this.writeAgent(agent);
    return agent;
  }
  
  specialize(template, context) {
    return {
      ...template,
      knowledge: context.framework,
      patterns: context.patterns,
      bestPractices: context.bestPractices,
      ecosystem: context.ecosystem
    };
  }
  
  defineBoundaries(agent) {
    return {
      include: this.getInclusions(agent),
      exclude: this.getExclusions(agent),
      filePatterns: this.getFilePatterns(agent),
      permissions: this.getPermissions(agent)
    };
  }
}
```

## Validation

### Setup Validation

```yaml
Validation Checks:
  Agent Creation:
    - All detected technologies covered
    - No duplicate agents
    - Proper boundaries set
    - Context injected
    
  Routing Configuration:
    - Routes for all agents
    - No routing conflicts
    - Fallback routes defined
    - Priority ordering
    
  Process Availability:
    - All referenced processes exist
    - Process compatibility
    - Error handlers defined
    - Coordination protocols
    
  System Integration:
    - .guild directory created
    - Commands accessible
    - Agents loadable
    - Configuration valid
```

### Validation Output

```yaml
Setup Report:
  Technologies Detected:
    Frontend: [react, tailwind]
    Backend: [node, express]
    Database: [postgres, redis]
    Testing: [jest, cypress]
    
  Agents Created:
    - guild-reasoning-agent
    - guild-planning-agent
    - guild-react-engineer
    - guild-express-engineer
    - guild-postgres-engineer
    - guild-test-engineer
    
  Routing Configured:
    - React tasks → react-engineer
    - API tasks → express-engineer
    - Database → postgres-engineer
    - Tests → test-engineer
    
  Status: ✅ Setup Complete
```

## Common Setups

### Full-Stack Web Application

```yaml
Detected Stack:
  Frontend: React, Redux, Tailwind
  Backend: Node.js, Express, GraphQL
  Database: PostgreSQL, Redis
  Testing: Jest, Cypress
  DevOps: Docker, GitHub Actions

Created Agents:
  Core:
    - guild-reasoning-agent
    - guild-planning-agent
    - guild-project-researcher
    - guild-global-researcher
    
  Implementation:
    - guild-react-engineer
    - guild-express-engineer
    - guild-graphql-engineer
    - guild-postgres-engineer
    - guild-redis-engineer
    
  Quality:
    - guild-test-engineer
    - guild-e2e-engineer
    
  Operations:
    - guild-docker-engineer
    - guild-gha-engineer
```

### Microservices Architecture

```yaml
Detected Stack:
  Services: Multiple Node.js services
  Communication: REST, gRPC, RabbitMQ
  Database: MongoDB, PostgreSQL
  Infrastructure: Kubernetes, Istio

Created Agents:
  Core:
    - guild-reasoning-agent
    - guild-planning-agent
    - guild-architect-agent
    
  Service Engineers:
    - guild-auth-service-engineer
    - guild-user-service-engineer
    - guild-order-service-engineer
    - guild-payment-service-engineer
    
  Infrastructure:
    - guild-k8s-engineer
    - guild-istio-engineer
    - guild-monitoring-engineer
```

### Machine Learning Project

```yaml
Detected Stack:
  Language: Python
  Frameworks: TensorFlow, FastAPI
  Data: Pandas, NumPy
  Database: PostgreSQL, S3

Created Agents:
  Core:
    - guild-reasoning-agent
    - guild-planning-agent
    - guild-ml-researcher
    
  Implementation:
    - guild-ml-engineer
    - guild-data-engineer
    - guild-fastapi-engineer
    - guild-postgres-engineer
    
  Specialized:
    - guild-model-engineer
    - guild-pipeline-engineer
    - guild-evaluation-engineer
```

## Troubleshooting Setup

### Common Issues

```yaml
Issue: Technology Not Detected
  Symptom: Expected agent not created
  Diagnosis:
    - Check dependency files
    - Verify file locations
    - Review detection logs
  Solution:
    - Add to technology_overrides
    - Manually specify in setup
    - Update detection patterns
    
Issue: Wrong Agent Boundaries
  Symptom: Agent accessing wrong files
  Diagnosis:
    - Check boundary definitions
    - Review scope settings
    - Verify exclusions
  Solution:
    - Adjust boundaries in agent file
    - Update routing rules
    - Reconfigure scope
    
Issue: Missing Specialization
  Symptom: Generic agent behavior
  Diagnosis:
    - Check context injection
    - Verify specialization depth
    - Review knowledge base
  Solution:
    - Re-run setup with deep mode
    - Manually add context
    - Update specialization
```

## Best Practices

### Setup Optimization

1. **Run Early**: Setup immediately after installation
2. **Review Detection**: Verify detected technologies
3. **Customize Boundaries**: Adjust agent scopes as needed
4. **Test Agents**: Verify agent capabilities
5. **Document Changes**: Record customizations

### Maintenance

1. **Re-run on Changes**: When adding new technologies
2. **Update Agents**: As project evolves
3. **Refine Boundaries**: Based on experience
4. **Monitor Performance**: Track agent effectiveness
5. **Iterate Setup**: Continuously improve configuration

This comprehensive setup process ensures Guild creates perfectly tailored agents for your specific project needs.