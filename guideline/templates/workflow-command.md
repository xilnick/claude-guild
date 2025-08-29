# /guild:workflow

---
name: guild-workflow
model: inherit
description: "Execute tasks through ultrathink reasoning and parallel agent invocation"
---

## Purpose

Intelligence-first task execution: analyze user prompt (`$ARGUMENTS`) via ultrathink reasoning → comprehensive MCP research → maximum parallel cognitive agent execution.

## User Input Processing

**User Prompt**: `$ARGUMENTS` contains the task description provided by the user.

**Intelligence-First Processing Flow**:
1. **Receive User Prompt**: Extract and understand the task from `$ARGUMENTS`
2. **Ultrathink Analysis**: Apply comprehensive reasoning and cognitive decomposition
3. **Agent Scaling Decision**: Determine optimal cognitive agent count (1-20) based on analysis
4. **Research Planning**: Plan MCP research scope for discovered technologies
5. **Create Execution Plan**: Transform analysis into intelligent cognitive coordination (parallel/sequential/hybrid)
6. **Get User Approval**: Present plan and wait for explicit confirmation
7. **Execute Research Phase**: Conduct comprehensive MCP research
8. **Execute Cognitive Agents**: Invoke 1-20 cognitive agents using optimal execution strategy (parallel/sequential/hybrid)

## Core Intelligence

**CRITICAL**: This intelligence enables proper reasoning and execution.

**Workflow Intelligence**:
{{core/workflow}}

**Agent Specialization Intelligence**:
{{core/agents}}

## Execution Protocol

### Phase 1: Mandatory Ultrathink Reasoning on User Prompt

🛑 **CRITICAL WARNING**: NEVER skip this phase. Always use ultrathink or sequential reasoning.

⚠️ **NON-NEGOTIABLE**: Reasoning phase is absolutely mandatory - no exceptions.

**Analyze User Input**: The task description in `$ARGUMENTS` must be thoroughly analyzed using ultrathink reasoning.

1. **Ultrathink Everything** (30-90 seconds minimum - REQUIRED):
   - Break down exactly what the user wants accomplished (from `$ARGUMENTS`)
   - **Discover ALL parallelization opportunities** 
   - **Determine which cognitive personas are needed**
   - **Plan maximum parallel execution (default strategy)**
   - **Only sequence when dependencies absolutely require it**
   - **Use ultrathink/sequential thinking mode - MANDATORY**

2. **Intelligence-Driven Agent Planning**:
   - Let intelligence determine how many agents to create
   - Let intelligence assign exclusive file ownership to prevent conflicts
   - Let intelligence decide when sequencing is necessary
   - Default to maximum parallelization for speed
   - Trust Claude's intelligence completely - no hardcoded rules

3. **Simple Execution Plan**:
   ```
   ## 🛑 EXECUTION PLAN - APPROVAL REQUIRED
   
   **User Request Analysis:**
   [Analysis of the task described in $ARGUMENTS]
   
   **Task Understanding:**
   [Clear summary of what will be accomplished]
   
   **Parallelization Strategy:**
   ⚡ MAXIMUM PARALLEL EXECUTION (Default)
   - Intelligence determines agent count and distribution
   - All agents run simultaneously unless dependencies block
   - Intelligence prevents conflicts through file ownership
   
   **Cognitive Agent Assignments:**
   [Intelligence-determined agent assignments with file ownership]
   
   **Research Scope:**
   [Technologies to research via MCP tools]
   
   **Expected Outcomes:**
   [What will be delivered]
   
   🛑 **CRITICAL**: Proceed with this plan? (Must answer "yes" to continue)
   ```

4. **🛑 MANDATORY APPROVAL GATE**:
   - Present plan clearly and wait for user confirmation
   - **HALT execution until user explicitly says "yes"**
   - Ask clarifying questions if requirements are unclear
   - Revise plan based on user feedback
   - **⚠️ NEVER PROCEED WITHOUT EXPLICIT APPROVAL**

### Phase 2: Research & Documentation Gathering

🔍 **MANDATORY RESEARCH**: Comprehensive documentation research before agent execution.

**Research Protocol**:
1. **Library Documentation**: Use context7 MCP (resolve-library-id + get-library-docs) for all detected technologies
2. **Community Examples**: Use WebSearch MCP for current implementation patterns and best practices
3. **API Documentation**: Use WebFetch MCP for official API documentation and specifications
4. **Version Validation**: Verify latest versions and compatibility requirements
5. **Knowledge Caching**: Store research results in `.guild/research_cache/` for agent access
6. **Pattern Analysis**: Identify current best practices and implementation conventions

**Intelligence-First Research Execution**:
- **Technology Discovery**: Use Claude intelligence to identify ALL project technologies
- **Comprehensive Coverage**: Library docs, community examples, official APIs for discovered tech
- **Knowledge Sharing**: Research results available to all cognitive agents in Phase 3
- **Cognitive Context**: Research includes cognitive approaches for each technology
- **Cache Management**: Persistent storage for future workflow sessions

### Phase 3: Maximum Parallel Execution

🛑 **ONLY execute after receiving explicit user approval.**

**Intelligence-Driven Execution:**
1. **Launch All Agents**: Intelligence determines how many agents to create and start them simultaneously
2. **Prevent Conflicts**: Intelligence assigns exclusive file ownership to each agent
3. **Coordinate Dependencies**: Only sequence when dependencies absolutely require it
4. **Trust Intelligence**: No hardcoded coordination rules - pure Claude reasoning

**Cognitive Agent Execution:**
- All agents access shared research cache from Phase 2
- Intelligence determines which cognitive personas are needed
- Intelligence assigns file ownership to prevent conflicts
- Default to maximum parallelization for speed
- Each agent applies specialized thinking to assigned areas

**Result Integration:**
- Combine outputs from all cognitive approaches
- Validate compatibility between different cognitive perspectives
- Ensure coherent final solution

### Phase 4: Verification & Quality Assurance

**🔍 CRITICAL**: Validate all cognitive agent outputs through comprehensive verification protocols.

1. **XML-Structured Verification Process**:
   ```xml
   <verification_phase>
     <quote_grounding>Extract and verify all factual claims against research documentation</quote_grounding>
     <uncertainty_assessment>Identify and express areas of low confidence</uncertainty_assessment>
     <consistency_validation>Verify cognitive agent outputs are compatible and coherent</consistency_validation>
     <quality_compliance>Validate against discovered project quality standards</quality_compliance>
   </verification_phase>
   ```

2. **Grounding & Fact Verification**:
   - Extract direct quotes from research documentation for all factual claims
   - Validate implementation decisions against latest library documentation
   - Ensure all technical details have source backing from Phase 2 research
   - Flag any claims that cannot be grounded in documentation

3. **Uncertainty Expression & Confidence Assessment**:
   - Express confidence levels for major technical decisions
   - Explicitly state "I don't know" when information is uncertain
   - List assumptions made during cognitive agent execution
   - Identify knowledge gaps that require additional research

4. **Cross-Cognitive Validation**:
   ```xml
   <cross_validation>
     <ux_systems_compatibility>Verify UI designs work with proposed architecture</ux_systems_compatibility>
     <security_quality_alignment>Ensure security measures don't compromise testing strategies</security_quality_alignment>
     <performance_architecture_coherence>Validate optimization approaches match system design</performance_architecture_coherence>
     <domain_technical_consistency>Confirm business logic aligns with technical implementation</domain_technical_consistency>
   </cross_validation>
   ```

5. **Integration Quality Assurance**:
   - Verify final solution addresses original user request from `$ARGUMENTS`
   - Ensure all cognitive perspectives combine into coherent implementation
   - Validate solution follows discovered project patterns and conventions
   - Confirm implementation meets quality standards identified in Phase 1

**Verification Success Criteria**:
- ✅ **Grounded Accuracy**: All technical claims backed by research documentation
- ✅ **Expressed Uncertainty**: Clear confidence levels and knowledge gap identification
- ✅ **Cognitive Coherence**: Compatible outputs from different thinking approaches
- ✅ **Quality Compliance**: Implementation meets discovered project standards
- ✅ **User Requirement Fulfillment**: Solution addresses original task in `$ARGUMENTS`

## Cognitive Agent Selection

**Intelligence-Driven Selection:**
- Intelligence analyzes task requirements and selects appropriate cognitive personas
- Intelligence determines how many agents are needed
- Intelligence assigns file ownership to prevent conflicts
- No hardcoded patterns - pure Claude reasoning drives all decisions

**Available Cognitive Personas:**
- **UX Expert**: User experience and interface design
- **Systems Architect**: System design and integration
- **Analytical Thinker**: Performance and data optimization
- **Quality Guardian**: Testing and validation
- **Security Specialist**: Security and protection
- **Domain Expert**: Business logic and requirements

## Command Usage

```bash
# Basic usage - user prompt passed as $ARGUMENTS
/guild:workflow "your task description"

# Examples - $ARGUMENTS contains these task descriptions
/guild:workflow "Add user authentication to the API with JWT tokens"
/guild:workflow "Create responsive dashboard components with data visualization"
/guild:workflow "Optimize database queries for better performance"  
/guild:workflow "Add comprehensive testing for the entire checkout flow"
/guild:workflow "Implement real-time notifications using WebSockets"
```

## Configuration

Simple configuration (if `.guild/instructions.md` exists):

```yaml
reasoning:
  mandatory: true                    # Always use ultrathink reasoning
  approval_required: true            # Always require user approval
  
research:
  mcp_integration: true              # Use MCP tools for research
  shared_knowledge: true             # Share research across agents
  
execution:
  max_parallelization: true          # Default to maximum parallel execution
  intelligence_driven: true          # Let Claude decide everything
  conflict_prevention: true          # Intelligence prevents file conflicts
```

## Coordination Strategy

**Intelligence-Only Coordination:**
- Intelligence assigns exclusive file ownership to each agent
- Intelligence determines when agents can work in parallel
- Intelligence prevents conflicts through smart file assignment
- Intelligence integrates results into coherent solution

**No Hardcoded Rules:**
- No complex coordination protocols
- No predefined file ownership patterns
- No XML coordination structures
- Pure Claude reasoning manages everything

## Success Criteria

- ✅ **Intelligence-First**: Pure Claude intelligence drives all decisions
- ✅ **Maximum Parallelization**: Default to maximum parallel execution for speed
- ✅ **User Approval**: No execution without explicit "yes" confirmation
- ✅ **Comprehensive Research**: Complete MCP documentation research before execution
- ✅ **Conflict-Free**: Intelligence prevents conflicts through smart file assignment
- ✅ **Simple Execution**: Clean workflow without complex rules or algorithms

## Error Handling

**Missing Agents**: If agents not available, inform user to run `/guild:setup`
**🛑 Approval Bypass**: **NEVER PROCEED** - Always halt until user explicitly approves
**Invalid Input**: If `$ARGUMENTS` unclear, ask user for clarification during reasoning phase

⚠️ **CRITICAL**: This workflow uses ultrathink reasoning → comprehensive MCP research → maximum parallel cognitive agent execution for speed.