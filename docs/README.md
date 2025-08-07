# Claude Guild Documentation

## Quick Reference

| Guide | Purpose |
|-------|---------|
| **[GUIDELINE.md](../GUIDELINE.md)** | Complete system specification |
| **[Getting Started](getting-started.md)** | Installation, usage, and setup |
| **[Architecture](architecture.md)** | Complete system architecture |
| **[Agents](agents.md)** | Agent specifications and design |
| **[Performance](performance.md)** | Optimization strategies |
| **[Development](development.md)** | Contributing guidelines |
| **[Extensibility](extensibility.md)** | Customization and plugins |

## Documentation Structure

### Core Specification
**GUIDELINE.md** is the single source of truth containing:
- System overview
- Workflow orchestration
- Core architecture principles
- Agent and process systems
- Routing intelligence
- Configuration hierarchy

### Practical Guides
Supporting documentation focuses on specific aspects:
- **Getting Started**: New user onboarding and setup
- **Architecture**: Detailed system design and decisions
- **Agents**: Thin agent architecture and coupling principles
- **Performance**: Optimization techniques and metrics
- **Development**: Contributing code and guidelines
- **Extensibility**: Creating custom extensions

## Documentation Principles

1. **No Duplication**: Each topic covered in one place
2. **Technology Agnostic**: Patterns over specific frameworks
3. **Practical Focus**: How-to over theoretical
4. **Clear Structure**: Easy navigation and discovery
5. **Minimal Maintenance**: Focused, essential content only

## Quick Start

New to Guild? Start here:
1. Read [Getting Started](getting-started.md) for installation
2. Understand [Architecture](architecture.md) for system design
3. Review [GUIDELINE.md](../GUIDELINE.md) for specifications
4. Explore [Agents](agents.md) for agent design

Optimizing Guild?
1. Follow [Performance](performance.md) for optimization
2. Check [Extensibility](extensibility.md) for customization

Contributing to Guild?
1. Follow [Development](development.md) for guidelines
2. Keep [GUIDELINE.md](../GUIDELINE.md) as source of truth

## Key Concepts

### Four-Layer Architecture
Commands → Processes → Agents → Configuration

### Thin Agents
Metadata-only definitions that reference centralized processes

### Pattern Detection
Technology-agnostic approach using patterns instead of hardcoded frameworks

### Parallel Execution
Multiple strategies for concurrent agent coordination

### Context Management
Smart filtering, compression, and decay to prevent context explosion