---
name: guid-repository-pattern-recognition
description: "Explore and understand repository patterns (monorepo, frontend, backend, microservices) to guide skill creation and tool selection decisions. Use when analyzing project structure, understanding complexity, or planning skill development."
model: inherit
---

# Repository Pattern Recognition

## Pattern Description

**What**: Systematically explore and understand repository patterns, project characteristics, and structural organization to inform skill creation and tool selection decisions.

**When**: Use this skill when you need to:
- Analyze a new repository's structure and patterns
- Understand project complexity and organization
- Guide skill creation decisions based on project characteristics
- Inform tool selection for specific repository types
- Plan team workflows and conventions

**Context**: Essential for understanding the technical landscape of any project, recognizing patterns that influence development workflows, and making informed decisions about skill and tool investments.

## Repository Pattern Exploration

### Multi-Phase Pattern Discovery

**Phase 1: Surface Analysis**
- **Configuration Files**: Look for repository-wide configuration (package.json, workspace files, build configs)
- **Directory Structure**: Examine top-level organization and naming patterns
- **Technology Indicators**: Identify primary technologies and frameworks
- **Documentation**: Analyze README, contributing guides, and architectural documentation

**Phase 2: Structural Analysis**
- **Code Organization**: Understand how code is structured and organized
- **Dependency Patterns**: Map dependencies and integration points
- **Build Systems**: Identify build tools, packaging, and deployment approaches
- **Team Collaboration**: Look at git history, branch patterns, and team workflows

**Phase 3: Pattern Understanding**
- **Architectural Patterns**: Recognize architectural decisions and design patterns
- **Communication Patterns**: Understand how components and services interact
- **Development Patterns**: Identify common development workflows and conventions
- **Operational Patterns**: Discover deployment, monitoring, and maintenance approaches

### Common Repository Patterns

**Monorepo Patterns**
- **Workspace Configuration**: nx.json, lerna.json, pnpm-workspace.yaml, turbo.json
- **Package Organization**: apps/, packages/, libs/ directories with multiple package.json files
- **Shared Dependencies**: Root-level lock files and shared tooling
- **Cross-Package Dependencies**: Internal packages and shared libraries

**Frontend-Dominant Patterns**
- **Component Organization**: src/components/, src/pages/, src/styles/
- **Build Configuration**: webpack, vite, rollup, or framework-specific configs
- **Asset Management**: public/, static/, media/ directories
- **Framework Patterns**: React hooks, Vue composition, Angular services

**Backend-Dominant Patterns**
- **API Structure**: routes/, controllers/, services/, models/ directories
- **Database Integration**: migrations/, seeds/, schema/ directories
- **Service Architecture**: microservice boundaries, API gateways, service discovery
- **Configuration Management**: environment configs, deployment manifests

**Microservices Patterns**
- **Service Boundaries**: Clear separation between independent services
- **Container Configuration**: Multiple Dockerfiles, docker-compose patterns
- **Communication Patterns**: API contracts, message queues, event streaming
- **Deployment Patterns**: Kubernetes manifests, Helm charts, infrastructure as code

## Skill Creation Guidance

### Pattern-to-Skill Mapping

**High-Frequency Patterns** (Consider Dedicated Skills)
- Repeated architectural decisions across multiple components
- Complex workflows that benefit from codified knowledge
- Team-specific conventions that differ from standard practices
- Integration patterns that require coordination across teams

**Medium-Frequency Patterns** (Consider Pattern Skills)
- Technology-specific implementations unique to the project
- Development workflows that need team alignment
- Testing and deployment patterns
- Documentation and communication patterns

**Low-Frequency Patterns** (Add to Existing Skills)
- One-off implementations or experimental features
- Personal preferences rather than team conventions
- Generic patterns well-documented elsewhere
- Temporary solutions or workarounds

### Skill Selection Considerations

**Complexity Assessment**
- **Simple Patterns**: May fit in existing skills or don't need dedicated skills
- **Complex Patterns**: Benefit from dedicated skills with detailed guidance
- **Cross-Cutting Patterns**: May need multiple skills or coordination between skills

**Team Value**
- **Personal Patterns**: Consider personal skills vs project skills
- **Team Patterns**: Project skills benefit from team sharing and collaboration
- **Organizational Patterns**: Consider sharing across multiple projects

**Maintenance Considerations**
- **Evolving Patterns**: Skills that need frequent updates may require more maintenance
- **Stable Patterns**: Established patterns benefit from documentation and sharing
- **Experimental Patterns**: Consider skills that can adapt to changing requirements

## Tool Selection Insights

### Essential Toolset Considerations

**File Operations** (Universal Need)
- Read, Write, Edit, Glob, Grep for repository exploration
- Essential for understanding code structure and patterns
- Foundation for all other tool selection decisions

**Research and Documentation**
- Context7 and WebSearch for understanding technologies and patterns
- Important for learning new technologies and best practices
- Helps teams stay current with evolving practices

### Enhanced Tool Selection Based on Patterns

**Structural Analysis Tools**
- **sg (ast-grep)**: For structural code search and pattern recognition
- **grit (gritql)**: For declarative code transformation and refactoring
- Consider when dealing with complex codebases or frequent refactoring needs

**Repository Analysis Tools**
- **Git Analysis**: For understanding development patterns and team workflows
- **Dependency Analysis**: For mapping technology relationships and impacts
- **Build System Tools**: For understanding build and deployment patterns

**Collaboration Tools**
- **Documentation Tools**: For capturing and sharing team knowledge
- **Communication Integration**: For coordinating across teams and projects
- **Code Review Tools**: For maintaining quality and consistency

## Common Discovery Scenarios

### New Project Analysis
When analyzing a new repository:
1. Start with surface analysis to understand basic structure
2. Look for configuration files that indicate project type
3. Examine directory organization and naming patterns
4. Identify key technologies and frameworks
5. Consider team patterns and collaboration approaches

### Skill Planning
When planning skill creation:
1. Identify recurring patterns across the codebase
2. Assess pattern frequency and complexity
3. Consider team value and sharing opportunities
4. Evaluate maintenance requirements and evolution needs
5. Plan skill scope and boundaries

### Tool Selection
When selecting tools for repository work:
1. Start with essential toolset (file operations, research)
2. Consider project-specific needs and complexity
3. Evaluate tool learning curves and team adoption
4. Plan for tool integration and workflow coordination
5. Consider performance and resource requirements

## Related Resources

### Related Skills
- **universal-technology-discovery**: For identifying specific technologies and frameworks
- **convention-extraction**: For understanding coding conventions and patterns
- **architectural-pattern-discovery**: For analyzing architectural patterns and decisions
- **tool-selection-guidance**: For detailed tool selection recommendations

### Related Agents
- **architecture-specialist**: For deep analysis of architectural patterns
- **frontend-specialist**: For frontend-specific patterns and conventions
- **backend-specialist**: For API and backend service patterns

### External Resources
- [Repository Pattern Documentation](https://martinfowler.com/eaaCatalog/repository.html)
- [Monorepo Tools and Patterns](https://monorepo.tools/)
- [Microservices Patterns](https://microservices.io/patterns/)

## Notes

Repository pattern recognition provides the foundation for informed skill creation and tool selection. By understanding project characteristics and patterns, teams can make better decisions about where to invest in skill development and tool adoption. The key is to balance comprehensive analysis with practical value, focusing on patterns that provide real benefit to development workflows and team collaboration.