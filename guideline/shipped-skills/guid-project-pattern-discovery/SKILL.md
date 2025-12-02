---
name: guid-project-pattern-discovery
description: "Use when identifying project-specific recurring architectural patterns and solution approaches. Analyzes component interactions, data flow, and common problem-solving approaches unique to this codebase. Complements architectural-pattern-discovery by focusing on project-specific implementations rather than generic patterns."
model: inherit
---

# Project Pattern Discovery

## Pattern Description

**What**: Focuses on identifying higher-level, project-specific architectural and design patterns that emerge from how components interact and common problems are solved within this particular codebase.

**When**: Use this skill to gain a deep understanding of the project's unique design philosophy, to maintain consistency in new feature development, or to facilitate large-scale refactoring.

**Context**: Builds upon generic design patterns by finding their concrete manifestations and adaptations within the project, including common solutions for specific business domains or technical challenges.

## Project-Specific Conventions

### Foundational Architectural Patterns
- **Overall Structure**: [e.g., Monolithic, Microservices, Layered, Event-Driven]
- **Data Management**: [e.g., Centralized Database, Distributed Databases, CQRS]
- **Communication**: [e.g., RESTful APIs, gRPC, Message Queues]

### Foundational Design Patterns
- **Structural**: [e.g., Adapter, Decorator, Facade]
- **Behavioral**: [e.g., Observer, Strategy, Command]
- **Creational**: [e.g., Factory, Singleton, Builder]

### Recurring Solution Approaches
- **Feature Modules**: [e.g., how new features are encapsulated and integrated]
- **Data Fetching Strategy**: [e.g., use of specific hooks, data loaders, or API clients]
- **Configuration Management**: [e.g., centralized config service, `.env` files, build-time injection]
- **Error Reporting**: [e.g., custom error logging service, integration with Sentry/Bugsnag]

### Component Interaction Patterns
- **Service-to-Service Communication**: [e.g., standard request/response cycles, event bus usage]
- **UI-Backend Synchronization**: [e.g., polling, WebSockets, optimistic updates]
- **Authentication Flow**: [e.g., JWT, OAuth, session management, refresh tokens]

### Data Flow Patterns
- **State Propagation**: [e.g., how global state changes impact various parts of the application]
- **Event Sourcing**: [e.g., if domain events are used for state changes or inter-service communication]
- **Data Transformation**: [e.g., common utility functions for transforming API responses to UI models]

## Common Pitfalls

### ❌ Undocumented Context
**Problem**: Project patterns are tribal knowledge, not explicitly documented.
**Why It Fails**: Slows down onboarding, leads to inconsistent implementations, and makes large-scale changes risky.
**Better Approach**: Create a living project playbook or architectural decision log; document discovered patterns, perhaps using architectural decision records (ADRs).

### ❌ Pattern Drift
**Problem**: New code deviates from established project patterns without clear rationale.
**Why It Fails**: Increases technical debt and reduces the predictability and maintainability of the codebase.
**Better Approach**: Regular code reviews focused on pattern adherence; establish clear guidelines for when to deviate.

### ❌ Over-Engineering Patterns
**Problem**: Applying complex patterns where simpler solutions would suffice.
**Why It Fails**: Increases complexity, development time, and maintenance overhead.
**Better Approach**: Choose patterns that match the problem's complexity; prioritize simplicity and clarity.

## Pattern Intelligence for Skill and Agent Development

### Skill Creation Opportunities
Project patterns often suggest valuable skill opportunities:
- **Architectural Patterns**: Create skills for specific architectural implementations
- **Integration Patterns**: Document how different components and services interact
- **Domain Patterns**: Capture business logic and domain-specific approaches
- **Data Flow Patterns**: Codify data transformation and processing workflows

### Agent Specialization Insights
Discovered patterns can inform agent creation:
- **Complexity-Based**: Create specialized agents for highly complex patterns
- **Domain-Specific**: Develop agents for business domain patterns
- **Cross-Cutting**: Build agents for patterns that span multiple domains
- **Workflow Coordination**: Create agents that manage pattern-based workflows

### Tool Selection Considerations
Architectural patterns influence tool needs:
- **Distributed Systems**: Consider service mesh, monitoring, and debugging tools
- **Event-Driven**: Look for event streaming, message queue, and processing tools
- **Data-Intensive**: Evaluate database, analytics, and data pipeline tools
- **Security-Focused**: Select tools that support security pattern implementations

## Related Resources

### Related Skills
- **convention-extraction**: Identifies lower-level stylistic patterns.
- **repository-pattern-recognition**: For understanding architectural context at repository level.
- **skill-creation**: For creating skills based on discovered architectural patterns.
- **tool-selection-guidance**: For selecting tools that support identified patterns.
- **agent-creation**: For creating agents that can implement and maintain architectural patterns.

### Related Agents
- **lead-architect-agent**: For defining and evolving project-specific patterns.
- **frontend-specialist**: For frontend architectural pattern expertise.
- **backend-specialist**: For backend and service architecture patterns.

### External Resources
- [Architectural Decision Records (ADR)](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
- [Domain-Driven Design (DDD)](https://martinfowler.com/bliki/DomainDrivenDesign.html)
