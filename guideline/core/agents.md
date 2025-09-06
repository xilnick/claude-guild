# Dynamic Agent Creation

## Purpose
Create specialists dynamically based on actual task requirements using Claude's native intelligence.

## Core Principle

<principle>
  Don't use templates or pre-defined agents.
  Create specialists based on what you discover in the project and task.
</principle>

## Agent Creation (Natural)

<creation>
  <analyze>
    Look at the actual task requirements
    Consider the project's technology
    Understand the specific needs
  </analyze>
  
  <create>
    Design specialists with clear, specific roles
    Give them detailed context about the project
    Use Task tool with comprehensive prompts
  </create>
</creation>

## Specialist Types (Dynamic)

<specialists>
  Create based on what you find:
  - Technology specialists (based on project stack)
  - Domain specialists (based on task area)
  - Integration specialists (when coordination needed)
  - Quality specialists (when validation needed)
  
  No pre-defined types - create what's actually needed
</specialists>

## Task Tool Integration

<task_usage>
  <parameters>
    subagent_type: "general-purpose"
    description: Specific, clear task description
    prompt: Full context and detailed requirements
  </parameters>
  
  <prompt_content>
    - Project context and technology
    - Specific task requirements
    - Expected outcomes
    - Any constraints or patterns to follow
  </prompt_content>
</task_usage>

## Natural Boundaries

<boundaries>
  Specialists naturally work within:
  - File boundaries (who works on what files)
  - Technical boundaries (frontend vs backend)
  - Feature boundaries (distinct features)
  - Let Claude identify these naturally
</boundaries>

## Coordination (Simple)

<coordination>
  - Independent work runs in parallel
  - Dependent work runs sequentially
  - Integration points are explicit
  - No complex orchestration needed
</coordination>

## Best Practices

<practices>
  - Create specialists for actual needs, not hypothetical ones
  - Give clear, explicit instructions
  - Include project context in prompts
  - Let specialists work independently where possible
  - Trust Claude's coordination abilities
</practices># Dynamic Agent Creation

## Purpose
Create specialists dynamically based on actual task requirements using Claude's native intelligence.

## Core Principle

<principle>
  Don't use templates or pre-defined agents.
  Create specialists based on what you discover in the project and task.
</principle>

## Agent Creation (Natural)

<creation>
  <analyze>
    Look at the actual task requirements
    Consider the project's technology
    Understand the specific needs
  </analyze>
  
  <create>
    Design specialists with clear, specific roles
    Give them detailed context about the project
    Use Task tool with comprehensive prompts
  </create>
</creation>

## Specialist Types (Dynamic)

<specialists>
  Create based on what you find:
  - Technology specialists (based on project stack)
  - Domain specialists (based on task area)
  - Integration specialists (when coordination needed)
  - Quality specialists (when validation needed)
  
  No pre-defined types - create what's actually needed
</specialists>

## Task Tool Integration

<task_usage>
  <parameters>
    subagent_type: "general-purpose"
    description: Specific, clear task description
    prompt: Full context and detailed requirements
  </parameters>
  
  <prompt_content>
    - Project context and technology
    - Specific task requirements
    - Expected outcomes
    - Any constraints or patterns to follow
  </prompt_content>
</task_usage>

## Natural Boundaries

<boundaries>
  Specialists naturally work within:
  - File boundaries (who works on what files)
  - Technical boundaries (frontend vs backend)
  - Feature boundaries (distinct features)
  - Let Claude identify these naturally
</boundaries>

## Coordination (Simple)

<coordination>
  - Independent work runs in parallel
  - Dependent work runs sequentially
  - Integration points are explicit
  - No complex orchestration needed
</coordination>

## Best Practices

<practices>
  - Create specialists for actual needs, not hypothetical ones
  - Give clear, explicit instructions
  - Include project context in prompts
  - Let specialists work independently where possible
  - Trust Claude's coordination abilities
</practices>