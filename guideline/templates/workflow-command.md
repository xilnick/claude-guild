# /guild:workflow

---
name: guild-workflow
model: inherit
description: "Execute tasks through ultrathink reasoning and parallel agent invocation"
---

## Purpose

Intelligence-first three-phase task execution: analyze user prompt (`$ARGUMENTS`) via ultrathink reasoning → comprehensive MCP research → intelligent cognitive agent execution (1-20 agents) with optimal parallel/sequential/hybrid strategy.

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

1. **Deep Task Analysis** (30-90 seconds minimum - REQUIRED):
   - Break down exactly what the user wants accomplished (from `$ARGUMENTS`)
   - Identify cognitive requirements (what types of thinking are needed)
   - **Analyze task dependencies (blocking vs non-blocking relationships)**
   - **Determine execution strategy (parallel/sequential/hybrid)**
   - Analyze task complexity and decomposition potential
   - Determine optimal cognitive agent scaling (1-20 agents)
   - **Use ultrathink/sequential thinking mode - MANDATORY**

2. **Cognitive Agent Planning**:
   - Determine which cognitive personas are needed for this specific task
   - **Analyze dependencies between cognitive tasks to determine execution order**
   - Plan optimal agent count based on parallelization potential and dependencies
   - Consider multiple instances of same cognitive persona for different areas
   - Identify research requirements for discovered technologies
   - **Plan intelligent execution strategy (parallel/sequential/hybrid) for optimal balance of speed and correctness**

3. **Execution Plan Creation**:
   ```
   ## 🛑 EXECUTION PLAN - APPROVAL REQUIRED
   
   **User Request Analysis:**
   [Analysis of the task described in $ARGUMENTS]
   
   **Task Understanding:**
   [Clear summary of what will be accomplished]
   
   **Execution Strategy:**
   [✅ Parallel | ➩ Sequential | 🔄 Hybrid] - [Rationale for chosen strategy]
   
   **Dependency Analysis:**
   - Independent tasks: [List of tasks that can run in parallel]
   - Blocking chains: [A → B → C sequences that must be sequential]
   - Hybrid groups: [Parallel groups of sequential chains]
   
   **Cognitive Agent Scaling:**
   [Determined agent count: X agents based on complexity and dependency analysis]
   
   **Cognitive Assignments:**
   - UX Expert (X instances): Will focus on [user experience aspects]
   - Systems Architect (X instances): Will handle [architectural concerns]
   - Analytical Thinker (X instances): Will optimize [performance/data aspects]
   - Quality Guardian (X instances): Will ensure [quality/testing aspects]
   - Security Specialist (X instances): Will secure [security aspects]
   - Domain Expert (X instances): Will handle [business logic aspects]
   
   **Execution Orchestration:**
   [How agents will be coordinated - simultaneous, sequential chains, or hybrid approach]
   
   **Research Scope:**
   [Technologies to research via MCP tools before execution]
   
   **Expected Outcomes:**
   [What will be delivered through cognitive collaboration]
   
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

### Phase 3: Intelligent Cognitive Agent Execution

🛑 **ONLY execute after receiving explicit user approval.**

1. **Research-Aware Cognitive Agent Invocation**:
   - All cognitive agents access research cache from Phase 2 before implementation
   - Call cognitive agents created by `/guild:setup` with research context
   - **Execute 1-20 cognitive agents using determined strategy (parallel/sequential/hybrid)**
   - Launch multiple instances of same cognitive persona when beneficial
   - Each cognitive agent applies specialized thinking approach to assigned areas
   - **Coordinate execution order for sequential dependencies while maximizing parallelism**

2. **Multiple Instances & Cognitive Specialization**:
   - Same cognitive persona can be called multiple times for different areas
   - Same cognitive persona can have multiple instances running in parallel
   - Each instance maintains cognitive consistency while working on different files/components
   - Clear separation prevents conflicts between instances
   - Cognitive coordination through shared research knowledge

3. **Cognitive Parallel Execution Examples**:
   ```yaml
   UX Expert Cognitive Persona - 3 Instances:
     instance_1: "User authentication flow optimization (src/auth/)"
     instance_2: "Dashboard user experience design (src/dashboard/)"
     instance_3: "Form interaction and feedback design (src/forms/)"
   
   Systems Architect Cognitive Persona - 2 Instances:
     instance_1: "API architecture and endpoints (routes/api/)"
     instance_2: "Database layer and service integration (services/data/)"
     
   Analytical Thinker Cognitive Persona - 2 Instances:
     instance_1: "Performance optimization and caching (utils/performance/)"
     instance_2: "Data processing and analytics (services/analytics/)"
   ```

4. **Cognitive Result Integration**:
   - Combine outputs from all cognitive approaches into coherent solution
   - Validate that different cognitive perspectives work together harmoniously
   - Ensure implementations follow researched best practices for each cognitive domain
   - Verify compliance with latest documentation standards
   - Present final integrated results showcasing cognitive collaboration

## Cognitive Agent Selection Logic

**Intelligence-First Selection Based on Cognitive Requirements**:

- **User Experience Requirements** → UX Expert cognitive personas for ANY UI technology
- **System Architecture Requirements** → Systems Architect cognitive personas for ANY technology stack
- **Performance/Optimization Requirements** → Analytical Thinker cognitive personas for ANY performance context
- **Quality/Reliability Requirements** → Quality Guardian cognitive personas for ANY testing context
- **Security/Protection Requirements** → Security Specialist cognitive personas for ANY security context
- **Business Logic Requirements** → Domain Expert cognitive personas for ANY business context

**Multiple Cognitive Instance Examples**:
- **UX Expert persona**: Multiple user flows, different interaction areas, various experience aspects
- **Systems Architect persona**: Different service boundaries, separate integration layers, various architectural concerns
- **Analytical Thinker persona**: Performance optimization, data analysis, algorithm efficiency across different areas
- **Quality Guardian persona**: Unit testing, integration testing, E2E testing, validation across different components

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

## Configuration Integration

Behavior adapts to project settings (if `.guild/instructions.md` exists):

```yaml
reasoning:
  mandatory: true                    # Always use ultrathink reasoning
  min_duration: 30                   # Minimum reasoning time
  thinking_mode: ultrathink          # Use comprehensive reasoning
  approval_required: true            # Always require user approval
  cognitive_analysis: true           # Analyze cognitive requirements
  scaling_analysis: true             # Determine optimal agent count (1-20)
  
research:
  intelligence_discovery: true       # Use Claude intelligence to discover technologies
  mcp_integration: true              # Full MCP research integration
  shared_knowledge: true             # Create shared knowledge base
  
execution:
  intelligent_strategy: true         # Automatically choose optimal execution strategy
  execution_modes:                   # Support for all execution patterns
    parallel: true                   # Default for independent tasks
    sequential: true                 # For blocking dependencies
    hybrid: true                     # Parallel groups of sequential chains
  max_agents: 20                     # Maximum cognitive agents (1-20 scaling)
  cognitive_specialization: true     # Use cognitive personas not technology templates
  parallel_instances: true           # Enable multiple instances of same cognitive persona
  multiple_invocations: true         # Allow multiple calls to same cognitive persona
  dependency_management: true        # Handle blocking relationships intelligently
  research_integration: true         # All agents use shared research knowledge
```

## Coordination Strategy

**Non-Blocking Tasks**:
- Each agent owns specific files or components
- Multiple instances work on different file sets
- Clear boundaries prevent simultaneous modifications  
- Agents can work on different parts of the same feature
- Results integrated after all agents/instances complete

**Cognitive File Ownership**:
- UX Expert agents: UI components, user interaction files, experience-related code
- Systems Architect agents: Architecture files, integration code, service boundaries
- Analytical Thinker agents: Performance code, optimization files, data processing
- Quality Guardian agents: Test files, validation code, quality assurance
- Security Specialist agents: Security code, authentication, authorization
- Domain Expert agents: Business logic, domain models, workflow code
- **Instances**: Each instance owns exclusive subset of cognitive persona's files

**Cognitive Integration Points**:
- UX ↔ Systems Architect: User interface contracts and API design
- Systems Architect ↔ Analytical Thinker: Performance requirements and architecture
- Quality Guardian ↔ All Personas: Testing strategies for each cognitive approach
- Security Specialist ↔ All Personas: Security requirements across all domains
- Domain Expert ↔ All Personas: Business requirement validation

## Success Criteria

- ✅ **User Input Analysis**: Thorough analysis of task in `$ARGUMENTS`
- ✅ **Intelligence-First Reasoning**: Every execution starts with comprehensive ultrathink and cognitive analysis
- ✅ **Cognitive Scaling**: Optimal agent count (1-20) determined through intelligent analysis
- ✅ **Comprehensive Research**: Complete MCP documentation research before execution  
- ✅ **User Approval**: No execution without explicit "yes" confirmation
- ✅ **Cognitive Specialization**: Agents use appropriate thinking approaches, not technology templates
- ✅ **Intelligent Execution**: Optimal execution strategy (parallel/sequential/hybrid) based on task dependencies
- ✅ **Multiple Instances**: Same cognitive persona can run multiple parallel instances
- ✅ **Multiple Invocations**: Cognitive personas handle different project areas effectively
- ✅ **Cognitive Integration**: All thinking approaches combine into comprehensive, high-quality solution

## Error Handling

**Missing Cognitive Agents**: If required cognitive personas not available, inform user to run `/guild:setup`
**Cognitive Conflicts**: Clear file ownership prevents conflicts; escalate if needed
**Integration Issues**: Validate cognitive compatibility; retry with coordination
**🛑 Approval Bypass**: **NEVER PROCEED** - Always halt until user explicitly approves
**Instance Conflicts**: Atomic file locking prevents simultaneous modifications
**Invalid Input**: If `$ARGUMENTS` unclear, ask user for clarification during reasoning phase

⚠️ **CRITICAL REMINDER**: This workflow analyzes user input through mandatory intelligence-first ultrathink reasoning with dependency analysis, conducts comprehensive MCP research, then executes 1-20 cognitive agents using optimal strategy (parallel/sequential/hybrid) for maximum efficiency while respecting task dependencies.