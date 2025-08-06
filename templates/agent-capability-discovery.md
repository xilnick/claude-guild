# Agent Capability Discovery System

## Overview
Runtime capability assessment for agents to build performance profiles and optimize task routing.

## Core Components

### 1. Capability Probing System
```yaml
capability-probing:
  test-categories:
    - complexity-handling:
        simple: "Basic CRUD operations"
        medium: "Multi-file refactoring"
        complex: "Architecture redesign"
    
    - technology-expertise:
        languages: ["javascript", "python", "rust", "go"]
        frameworks: ["react", "django", "actix", "gin"]
        tools: ["webpack", "docker", "kubernetes"]
    
    - task-types:
        debugging: "Error diagnosis and fixes"
        implementation: "New feature development"
        refactoring: "Code improvement"
        optimization: "Performance tuning"
    
    - scale-handling:
        small: "< 10 files, < 1000 LOC"
        medium: "10-100 files, 1000-10000 LOC"
        large: "> 100 files, > 10000 LOC"
```

### 2. Performance Metrics Collection
```yaml
performance-metrics:
  quality-indicators:
    - success-rate: "Percentage of successful completions"
    - error-frequency: "Errors per task attempt"
    - iteration-count: "Average attempts to completion"
    - time-efficiency: "Relative completion speed"
  
  context-usage:
    - token-efficiency: "Tokens used vs task complexity"
    - research-accuracy: "Relevant context retrieved"
    - tool-selection: "Appropriate tool usage"
    
  collaboration-metrics:
    - handoff-clarity: "Context transfer quality"
    - parallel-efficiency: "Concurrent task handling"
    - dependency-handling: "Sequential task management"
```

### 3. Capability Matrix Building
```yaml
capability-matrix:
  agent-profiles:
    guild-javascript-engineer:
      strengths:
        - frontend-frameworks: 0.95
        - node-backend: 0.90
        - testing-jest: 0.85
        - webpack-config: 0.80
      
      limitations:
        - rust-interop: 0.30
        - database-design: 0.60
        - kubernetes: 0.50
      
      optimal-tasks:
        - "React component development"
        - "Express API creation"
        - "Jest test writing"
      
      avoid-tasks:
        - "System architecture design"
        - "Database optimization"
        - "DevOps configuration"
```

### 4. Dynamic Capability Updates
```yaml
capability-learning:
  update-triggers:
    - task-completion: "Update metrics after each task"
    - error-analysis: "Learn from failures"
    - success-patterns: "Reinforce successful approaches"
    
  adjustment-algorithm:
    - weighted-average: "Recent performance weighted higher"
    - confidence-intervals: "Statistical significance required"
    - outlier-handling: "Ignore anomalous results"
```

## Implementation in Claude Code

### Discovery Process
```yaml
discovery-workflow:
  initialization:
    - probe-basic-capabilities: "Simple test tasks"
    - assess-technology-stack: "Framework detection"
    - measure-baseline-performance: "Initial metrics"
  
  continuous-assessment:
    - monitor-task-execution: "Track all agent actions"
    - collect-performance-data: "Store metrics"
    - update-capability-profiles: "Adjust ratings"
  
  optimization:
    - identify-weak-areas: "Find improvement opportunities"
    - suggest-training-tasks: "Targeted skill building"
    - recommend-agent-combinations: "Optimal pairings"
```

### Routing Intelligence
```yaml
intelligent-routing:
  task-analysis:
    - extract-requirements: "Parse task complexity"
    - identify-technologies: "Detect stack requirements"
    - estimate-scale: "Predict task size"
  
  agent-selection:
    - capability-matching: "Find best-fit agents"
    - workload-balancing: "Distribute evenly"
    - fallback-planning: "Alternative agents ready"
  
  performance-prediction:
    - success-probability: "Estimate completion chance"
    - time-estimation: "Predict duration"
    - resource-requirements: "Token usage forecast"
```

### Capability Report Generation
```yaml
capability-reporting:
  agent-report:
    name: "guild-javascript-engineer"
    total-tasks: 47
    success-rate: 0.89
    average-complexity: "medium"
    
    technology-proficiency:
      react: { tasks: 15, success: 0.93 }
      node: { tasks: 12, success: 0.92 }
      typescript: { tasks: 10, success: 0.90 }
      python: { tasks: 2, success: 0.50 }
    
    task-type-performance:
      implementation: { rate: 0.95, avg-time: "fast" }
      debugging: { rate: 0.85, avg-time: "medium" }
      architecture: { rate: 0.70, avg-time: "slow" }
    
    recommendations:
      - "Excellent for React/Node tasks"
      - "Pair with Python engineer for mixed stack"
      - "Avoid pure backend architecture tasks"
```

## Practical Applications

### 1. Automatic Agent Selection
```yaml
auto-selection-example:
  task: "Debug React component rendering issue"
  
  analysis:
    technology: "react"
    type: "debugging"
    complexity: "medium"
  
  agent-scores:
    guild-javascript-engineer: 0.88
    guild-react-specialist: 0.92
    guild-frontend-engineer: 0.85
  
  selection: "guild-react-specialist"
  confidence: 0.92
```

### 2. Team Composition
```yaml
team-composition:
  project: "Full-stack web application"
  
  required-capabilities:
    - frontend: "React, TypeScript"
    - backend: "Node.js, PostgreSQL"
    - devops: "Docker, CI/CD"
  
  optimal-team:
    - guild-react-specialist: "Frontend lead"
    - guild-node-engineer: "Backend development"
    - guild-devops-engineer: "Infrastructure"
    - guild-coordinator: "Team synchronization"
```

### 3. Performance Optimization
```yaml
optimization-insights:
  bottlenecks-identified:
    - "Python engineer struggling with JavaScript tasks"
    - "Frontend engineer slow on database queries"
    - "General engineer overloaded with specialized tasks"
  
  recommendations:
    - "Route JavaScript tasks away from Python engineer"
    - "Pair frontend engineer with database specialist"
    - "Create more specialized agents for common tasks"
```

## Integration with Existing Systems

### Memory Integration
- Store capability profiles in `.guild/memory/capabilities/`
- Update profiles after each task completion
- Load profiles during agent selection

### Workflow Enhancement
- Insert capability check before task assignment
- Use profiles for parallel task distribution
- Adjust routing based on real-time performance

### Reporting Commands
```yaml
capability-commands:
  /guild:capabilities:
    description: "View agent capability matrix"
    options:
      --agent: "Specific agent profile"
      --task-type: "Filter by task category"
      --technology: "Filter by technology"
  
  /guild:performance:
    description: "Show performance metrics"
    options:
      --period: "Time range for metrics"
      --compare: "Compare multiple agents"
      --export: "Export capability data"
```

## Benefits

1. **Improved Task Success Rate**: Route tasks to most capable agents
2. **Reduced Iteration Time**: Avoid trial-and-error with wrong agents
3. **Better Resource Utilization**: Optimize token usage with right-fit agents
4. **Continuous Improvement**: Learn from every task execution
5. **Transparent Performance**: Clear visibility into agent capabilities

---

*This capability discovery system operates entirely within Claude Code's constraints, using only available tools and sub-agent capabilities to build intelligence about agent performance.*