# Guild System Instructions

These are simple instructions that all Guild agents and commands follow.

## Single Source of Truth

This file is the DEFINITIVE source for all Guild system behavior configuration. All commands, agents, and workflows must read and strictly follow these instructions.

## Concurrency Settings
- Run up to 3 instances of each agent type in parallel
- Maximum 20 total agents running at the same time
- Balance tasks evenly across available agents
- Scale down idle agents after 30 seconds

## Agent Model Settings
- Planning agent always uses opus model
- All other agents use inherit model by default
- Research agents can run up to 3 instances
- Implementation agents can run up to 3 instances

## Workflow Settings
- Always start with reasoning in main thread
- Run project and technology research in parallel
- Plan tasks before implementation
- Execute implementation in parallel when possible
- Testing is optional unless explicitly requested
- Verification is optional unless explicitly requested

## Task Routing Rules
- Interface work goes to interface specialists
- Service work goes to service specialists
- Data work goes to data specialists
- Integration work goes to integration specialists
- Testing work goes to quality specialists

## Quality Standards
- Follow existing project patterns
- Maintain code consistency
- Validate all implementations
- Create tests when requested
- Document complex logic

## Context Management
- Each agent gets only needed context
- Avoid context duplication
- Share research results with planning
- Provide task-specific context to implementation

## Coordination Rules
- No blocking between research agents
- Planning waits for research completion
- Implementation runs independently
- Integration validates completed work

## Performance Settings
- Optimize for parallel execution
- Minimize coordination overhead
- Progressive result collection
- Early feedback when possible

## Project-Specific Rules
[Add your project-specific instructions here]