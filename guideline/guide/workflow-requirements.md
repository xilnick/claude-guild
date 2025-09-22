# Workflow Requirements

## Parallel Execution Enforcement Protocol

<parallel_execution_mandatory>
**CRITICAL REQUIREMENT**: ALL workflow execution MUST implement parallel-first processing

### Ultrathink Mandatory Linkage
**INSEPARABLE PAIRING**: thinking_mode: ultrathink MUST ALWAYS be accompanied by parallel execution directives:
```
MANDATORY: Use thinking_mode: ultrathink for all reasoning
MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
MANDATORY: Use single messages with multiple tool calls when possible
MANDATORY: Batch operations for maximum efficiency
```

**FORBIDDEN**: Using ultrathink without parallel execution instructions - these requirements are inseparable

### Task Tool Parallel Execution Enforcement
**CRITICAL REQUIREMENT**: Every Task tool invocation must include explicit parallel execution instructions

#### Mandatory Parallel Execution Configuration
Every subagent prompt MUST include these directives:
```
MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
MANDATORY: Use single messages with multiple tool calls when possible
MANDATORY: Batch operations for maximum efficiency
MANDATORY: Challenge sequential assumptions - most tasks can parallelize
```

#### Enforcement Validation Rules
1. **Pre-delegation check**: Verify parallel execution directives present before Task tool invocation
2. **Zero sequential tolerance**: No subagents allowed to execute tools one-by-one
3. **Batch enforcement**: All independent operations must be batched into single messages
4. **Efficiency mandate**: Subagents must optimize for maximum parallel throughput
5. **Validation required**: Check all Task tool invocations include parallel execution requirements
6. **Fail fast protocol**: Stop and correct any Task tool calls missing parallel execution directives

### Tool Batching Optimization Requirements

#### Batching Strategies
- **File Operations**: Batch all independent file reads, writes, searches in single messages
- **Analysis Tasks**: Combine multiple analysis streams into parallel execution
- **Discovery Operations**: Execute project discovery, documentation research, web intelligence simultaneously
- **Verification Streams**: Run all verification processes (functional, integration, quality, gaps) in parallel

#### Optimization Enforcement
- **Single Message Preference**: Use single messages with multiple tool calls when operations are independent
- **Sequential Challenge**: Question all sequential assumptions - default to parallel execution
- **Efficiency Monitoring**: Continuously optimize parallelization effectiveness
- **Resource Optimization**: Match tasks to optimal tool combinations for parallel processing

### Agent Utilization Compliance

#### Mandatory Specialist Coordination
- **NEVER direct execution**: ALL work MUST be delegated through Task tool to specialists
- **Dynamic agent creation**: Create task-specific specialists when no existing match
- **Parallel specialist deployment**: Launch multiple specialists simultaneously for complex tasks
- **Ultrathink enforcement**: ALL specialists MUST use thinking_mode: ultrathink with parallel execution

#### Subagent Configuration Requirements
Every Task tool call must follow this pattern:
```
Task tool with:
  subagent_type: [specialist-type]
  description: [task-description]
  prompt: |
    MANDATORY: Use thinking_mode: ultrathink for all reasoning
    MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
    MANDATORY: Use single messages with multiple tool calls when possible
    MANDATORY: Batch operations for maximum efficiency
    You are a [specialist-type] with deep reasoning and parallel execution capabilities...
    [rest of prompt with ultrathink and parallel execution requirements embedded]
```

### Research Protocol Integration Requirements

#### Mandatory Research Phase
- **FIRST PHASE**: Execute comprehensive research before any task delegation
- **Parallel research streams**: Run all discovery operations simultaneously
- **Research synthesis**: Combine findings before specialist delegation
- **Evidence-based decisions**: Base all work coordination on research findings

#### Research-Informed Parallel Execution
- **Multi-dimensional analysis**: Execute project discovery, documentation research, web intelligence, MCP assessment in parallel
- **Resource-informed coordination**: Use research findings to optimize specialist deployment
- **Context-enriched delegation**: Embed research intelligence in all specialist prompts
- **Synthesis-driven approach**: Apply comprehensive understanding to all parallel work streams

### Implementation Gap Resolution Protocol

#### Mandatory Post-Implementation Verification
- **Gap detection streams**: Execute all verification processes in parallel after specialist work completion
- **Comprehensive review**: Requirements audit, integration completeness, edge case coverage, dependency validation, performance verification
- **Parallel resolution**: Implement gap fixes simultaneously when independent
- **Iterative verification**: Continue gap detection → resolution → re-verification until complete

#### Enforcement Requirements
- **Mandatory timing**: Execute after ALL specialist work completion, before user reporting
- **Parallel execution**: Run all detection streams simultaneously for efficiency
- **Specialist coordination**: Use Task tool for ALL gap detection and resolution work
- **Completion criteria**: Continue until comprehensive review finds no remaining gaps

### Anti-Pattern Prevention

<forbidden_patterns>
❌ **Sequential tool execution** - NEVER execute tools one-by-one when parallel possible
❌ **Missing ultrathink linkage** - NEVER use ultrathink without parallel execution directives
❌ **Sequential subagent deployment** - NEVER deploy specialists one-at-a-time when simultaneous possible
❌ **Unbatched operations** - NEVER split independent operations across multiple messages
❌ **Direct execution** - NEVER perform work directly without Task tool delegation
❌ **Missing parallel enforcement** - NEVER delegate without explicit parallel execution requirements
❌ **Sequential assumptions** - NEVER assume operations must be sequential without verification
❌ **Efficiency negligence** - NEVER ignore opportunities for parallel optimization
</forbidden_patterns>

### Compliance Validation

#### Pre-Execution Validation
- Verify every Task tool call includes thinking_mode: ultrathink
- Confirm every subagent prompt contains parallel execution directives
- Check all independent operations are batched appropriately
- Validate research phase completion before delegation

#### During-Execution Monitoring
- Monitor specialist adherence to parallel execution requirements
- Track batching efficiency and optimization opportunities
- Ensure ultrathink and parallel execution remain linked
- Validate research intelligence integration in all work streams

#### Post-Execution Verification
- Confirm all gap detection streams executed in parallel
- Verify gap resolution implemented via parallel specialist coordination
- Validate completion criteria met through parallel verification processes
- Ensure no sequential anti-patterns introduced during execution

## Success Criteria

**FULLY COMPLIANT WORKFLOW REQUIREMENTS**:
- ✅ ALL Task tool invocations include thinking_mode: ultrathink + parallel execution directives
- ✅ ALL subagents execute tools in parallel batches, never sequentially
- ✅ ALL research phases execute discovery streams simultaneously
- ✅ ALL gap detection and resolution processes run in parallel
- ✅ ALL workflow coordination optimized for maximum parallel throughput
- ✅ ZERO tolerance for sequential execution when parallel execution is possible