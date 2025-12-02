---
name: guid-integration-mapping-discovery
description: "Maps how different components and systems connect and interact. Analyzes service relationships, data flow, and dependencies. Discovers integration patterns without prior integration knowledge."
model: inherit
---

# Integration Mapping Discovery

## Pattern Description

**What**: Identifies and visualizes the connections, communication protocols, and data flow between various components, services, and external systems within a project.

**When**: Use this skill when understanding system architecture, debugging distributed issues, planning refactoring that involves multiple services, or onboarding to complex microservice environments.

**Context**: Applicable to any system with interacting parts, from internal module dependencies to external API integrations.

## Project-Specific Conventions

### Communication Protocols
- **Internal Services**: [e.g., gRPC, REST over HTTP/2, Message Queues (Kafka, RabbitMQ)]
- **External Integrations**: [e.g., REST, Webhooks, GraphQL]
- **Data Formats**: [e.g., JSON, Protocol Buffers, XML]

### Data Flow Patterns
- **Synchronous**: [e.g., direct API calls, request-response cycles]
- **Asynchronous**: [e.g., event-driven architectures, pub-sub models]
- **Database Interactions**: [e.g., direct ORM calls, dedicated data access layers]

### Dependency Management
- **Runtime Dependencies**: [e.g., service discovery, environment variables]
- **Build-time Dependencies**: [e.g., shared libraries, client SDKs]

## Common Pitfalls

### ❌ Undocumented Integrations
**Problem**: Critical service interactions are not clearly documented.
**Why It Fails**: Leads to ' tribal knowledge', difficult debugging, and breaking changes during refactoring.
**Better Approach**: Maintain living documentation for all major integrations; use code comments for specifics.

### ❌ Tight Coupling
**Problem**: Components are heavily dependent on each other's internal implementations.
**Why It Fails**: Makes independent deployment, scaling, and testing difficult.
**Better Approach**: Design for loose coupling using well-defined interfaces and clear contracts.

## Related Resources

### Related Skills
- **universal-technology-discovery**: To identify the underlying technologies involved in integrations.
- **operational-intelligence-discovery**: For understanding deployment and monitoring of integrated systems.

### Related Agents
- **architecture-specialist**: For designing and reviewing integration strategies.

### External Resources
- [Microservices Architecture](https://microservices.io/)
- [Event-Driven Architecture](https://aws.amazon.com/event-driven-architecture/)
