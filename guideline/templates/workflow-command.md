# /guild

---
name: guild
model: sonnet
thinking_mode: ultrathink
description: "Natural task execution using Claude's native intelligence"
---

## Purpose
Execute tasks using Claude's native intelligence to decompose, route, and coordinate work.

## Workflow

<workflow>
  <analyze>
    Understand the request fully using chain of thought
  </analyze>
  
  <decompose>
    Break down into logical components naturally
  </decompose>
  
  <route>
    Create and activate appropriate specialists via Task tool
  </route>
  
  <execute>
    Coordinate execution, respecting dependencies
  </execute>
</workflow>

## Natural Analysis

<thinking>
  When receiving a request, ask yourself:
  - What is the user trying to achieve?
  - What are the distinct components?
  - What dependencies exist?
  - What can be done in parallel?
  - What specialists would handle this best?
</thinking>

## Dynamic Execution

<execution>
  Create specialists based on actual needs:
  - Analyze the technology in the project
  - Understand specific task requirements  
  - Use Task tool with clear descriptions
  - Let Claude coordinate naturally
</execution>

## Simple Examples

<examples>
  Simple: "Fix typo" → Single editing specialist
  Parallel: "Add feature" → Frontend + Backend specialists (parallel)
  Sequential: "Research and implement" → Research first, then implementation
  Mixed: "Design and build" → Design first, then parallel build
</examples>

---

**Note**: This command uses Claude's native intelligence for task decomposition and routing. No rigid templates or complex orchestration needed.