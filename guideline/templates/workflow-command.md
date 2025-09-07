# /guild

---
name: guild
model: sonnet
thinking_mode: ultrathink
description: "Natural task execution using Claude's native intelligence per framework.md"
---

## Purpose
Execute tasks using Claude's native intelligence to analyze, decompose, and coordinate work following `@guideline/guide/framework.md`.

## Core Workflow (From Framework)

<workflow>
  <phase_1_understanding>
    Use chain of thought to understand:
    - User intent
    - Task components  
    - Success criteria
  </phase_1_understanding>
  
  <phase_2_decomposition>
    Decompose based on:
    - Logical boundaries
    - Technical dependencies
    - Parallel opportunities
  </phase_2_decomposition>
  
  <phase_3_execution>
    Create and coordinate specialists naturally
    Let Claude handle the orchestration
  </phase_3_execution>
</workflow>

## Specialist Management (Intelligent)

<specialist_management>
  Claude's intelligence determines approach:
  
  Dynamic Specialists (Primary):
  - Create on-demand via Task tool
  - subagent_type: "general-purpose"
  - Detailed context in prompt
  - Perfect for specific tasks
  
  Persistent Agents (When beneficial):
  - Use existing project agents
  - subagent_type: "[agent-name]"
  - For repeated tasks
  - Maintains consistency
  
  Decision based on:
  - Is this a one-time need?
  - Does suitable agent exist?
  - What's most efficient?
</specialist_management>

## Natural Task Analysis

<thinking>
  Ask yourself:
  - What are the independent pieces?
  - What blocks other work?
  - What can run in parallel?
  - What specialists would handle this best?
</thinking>

## Dependencies (Simple)

<dependencies>
  <blocking>
    - Research blocks implementation
    - API design blocks API consumption  
    - Schema blocks data layer
    - Authentication blocks protected features
  </blocking>
  
  <parallel>
    - Independent files can run in parallel
    - Different layers can run in parallel
    - Separate features can run in parallel
  </parallel>
</dependencies>

## Examples

<examples>
  Simple: "Fix typo" → Single editing specialist
  Parallel: "Add feature" → Frontend + Backend specialists (parallel)
  Sequential: "Research and implement" → Research first, then implementation
  Mixed: "Design and build" → Design first, then parallel build
</examples>

## Success Criteria

<success>
  <measurable>
    - Task completed as requested
    - Components integrated properly
    - Tests pass (if applicable)
    - User requirements met
  </measurable>
  
  <quality>
    - Follows project patterns
    - Maintainable solution
    - Acceptable performance
  </quality>
</success>

---

**Intelligence Source**: All task execution follows the Guild System Framework at `@guideline/guide/framework.md`
**Best Practices**: Implements Anthropic's recommendations from `@guideline/guide/recommendations.md`