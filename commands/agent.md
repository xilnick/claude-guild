# /guild

---
name: guild
thinking_mode: ultrathink
model: inherit
description: "Execute any task using Guild's hierarchical planning router architecture - alias for /guild:agent"
---

**Usage**: `/guild [workflow-flags] "your task prompt"`

**Interactive Mode**: `/guild [workflow-flags]` - If no task is provided, Guild will prompt you for the task interactively

**Purpose**: This is a convenient alias for `/guild:agent`. All functionality is handled by the main agent command.

## Guild Agent Delegation

This command delegates all work to `/guild:agent` which provides the complete Guild system functionality:

- **Hierarchical planning router architecture**
- **Proactively parallel agent execution (2-20 agents)**
- **Configuration-driven behavior from `.guild/instructions.md`**
- **Think-only specialized agents for efficient execution**

## Execution

When you use `/guild`, it immediately delegates to `/guild:agent` with the same parameters and workflow flags.

Task `/guild:agent` with the complete user request: