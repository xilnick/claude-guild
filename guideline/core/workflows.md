# Workflow Patterns Module
**Version**: 5.0.0 | **Last Updated**: 2025-01-18 | **Dependencies**: principles.md, agents.md, parallel.md, planning-router.md

## Purpose
Hierarchical workflow patterns with planning router orchestration for efficient Guild system execution. All complex reasoning happens in planning router using think-harder/ultrathink, while specialized agents use think mode only for efficient parallel execution.

## Default Guild Usage Pattern

**ITERATIVE UNDERSTANDING CONFIRMATION**: Guild must confirm task understanding before activating planning agent.

### Standard User Interaction Flow

```yaml
default_usage_workflow:
  step_1_user_prompt:
    user_action: "User asks Guild to set up with written prompt"
    guild_response: "Receive and analyze user prompt"
    
  step_2_reasoning_confirmation:  
    guild_action: "Guild reasons through prompt using think-harder/ultrathink"
    guild_output: "Present understanding in clear, structured format"
    guild_question: "Ask if it properly understands what to do"
    
  step_3_iterative_correction:
    user_response: "User confirms or corrects understanding"  
    guild_response: "Adjust understanding based on user feedback"
    iteration: "Repeat until clear mutual understanding achieved"
    
  step_4_planning_activation:
    trigger: "When Guild has clear task understanding"
    action: "Call planning agent for task orchestration and execution"
```

### Understanding Confirmation Template

**Guild Understanding Presentation Format**:
```
Based on your request, I understand you want me to:

**Primary Objective**: [main goal]
**Key Requirements**: 
- [requirement 1]
- [requirement 2] 
- [requirement N]

**Scope Boundaries**:
- Included: [what will be done]
- Excluded: [what won't be done]

**Success Criteria**: [how to measure completion]

Is this understanding correct? Please clarify any misunderstandings before I proceed with planning and execution.
```

## Core Workflow Philosophy

**PLANNING ROUTER ORCHESTRATION**: Planning router handles all complex analysis and coordination while specialized agents focus on efficient execution.

**COGNITIVE LOAD SEPARATION**: Heavy thinking upfront in planning phase, light execution in parallel agents using think mode only.

**HIERARCHICAL COORDINATION**: Planning router spawns domain leads, which spawn sub-agents based on workload analysis.

**PROACTIVELY PARALLEL EXECUTION**: Target 10-20x speedup through intelligent task decomposition and distributed execution.

## Embedded Intelligence

### Enhanced Hierarchical Workflow with Planning Router

**Hierarchical Execution Pattern** (with Planning Router Orchestration & Think-Only Agents):

<parallel_execution_phases>

<phase number="1" name="Reasoning & Understanding Analysis" parallel="false">
<thinking_framework>
Use structured chain-of-thought reasoning with extended thinking for logical analysis of user prompts.
Apply XML tags to organize thinking process and enable verification of understanding.
Focus exclusively on understanding the user's intent and identifying potential logical issues.
</thinking_framework>

<execution_pattern>
```yaml
executor: main thread (single agent for reasoning only)
agent_spawning: none (reasoning is single-threaded for focus)
thinking_mode: 
  - ultrathink: for complex, ambiguous tasks with multiple interpretations
  - think-harder: for medium complexity tasks with potential contradictions
  - think: for clear tasks requiring validation of understanding
duration: 30-120 seconds (adaptive based on prompt complexity)
responsibility: EXCLUSIVELY reasoning and understanding - NO implementation planning
output: structured reasoning result for user confirmation
```
</execution_pattern>

<logical_reasoning_framework>
<reasoning_template>
<prompt_analysis>
- Parse user requirements word by word for complete understanding
- Identify explicit requirements vs implied expectations  
- Detect scope boundaries and what is/isn't included
- Recognize success criteria and completion definitions
</prompt_analysis>

<logical_consistency_check>
- Identify potential contradictions within the request
- Detect missing prerequisites or dependencies
- Check for conflicting requirements or impossible combinations
- Identify ambiguous terms that need clarification
</logical_consistency_check>

<feasibility_assessment>
- Assess technical feasibility within project context
- Identify potential implementation challenges or blockers
- Recognize resource requirements and constraints
- Detect integration complexity and potential conflicts
</feasibility_assessment>

<clarification_needs>
- List unclear aspects requiring user clarification
- Identify assumptions that need validation
- Highlight potential interpretations of ambiguous requirements
- Document areas where user intent is unclear
</clarification_needs>
</reasoning_template>
</logical_reasoning_framework>

<reasoning_output_format>
```yaml
understood_requirements: clear articulation of what user is requesting
logical_issues_identified: contradictions, ambiguities, or missing information found
assumptions_made: any assumptions required to proceed
clarification_questions: specific questions to resolve ambiguities
feasibility_assessment: technical feasibility and potential challenges
proposed_interpretation: how the task will be understood if confirmed
```
</reasoning_output_format>
</phase>

<phase number="1.5" name="Explicit Reasoning Confirmation" parallel="false">
<thinking_framework>
Present reasoning results clearly and obtain explicit user confirmation before proceeding.
Focus on transparent communication of understanding and identified logical issues.
</thinking_framework>

<execution_pattern>
```yaml
executor: main thread (single agent for confirmation only)
agent_spawning: none (confirmation requires direct user communication)  
thinking_mode: think (focus on clear reasoning presentation)
duration: 15-45 seconds (time for user to read reasoning and respond)
interaction: mandatory synchronous user confirmation
next_step: invoke planning agent ONLY after user confirmation
```
</execution_pattern>

<reasoning_presentation_framework>
<reasoning_confirmation_template>
<reasoning_result_presentation>
**My Understanding of Your Request:**
- Present clear, structured summary of interpreted requirements
- Explain success criteria and completion definition as understood
- Identify scope boundaries: what IS and what ISN'T included
- Acknowledge any complexity or nuances discovered in the request

**Logical Issues Identified (if any):**
- Present any contradictions or ambiguities found in the request  
- Highlight missing prerequisites or unclear dependencies
- Note assumptions that need validation
- Explain potential interpretations of ambiguous requirements

**Clarification Needed (if any):**
- Ask specific questions to resolve unclear aspects
- Request validation of assumptions made
- Seek guidance on contradictory requirements
- Confirm interpretation of ambiguous terms
</reasoning_result_presentation>

<proposed_understanding>
**Based on my analysis, here's how I understand your task:**
- State final interpretation incorporating all reasoning
- Present proposed approach at high level (not detailed implementation)
- Acknowledge constraints and integration requirements
- Estimate complexity level and potential challenges
</proposed_understanding>

<explicit_confirmation_request>
**Confirmation Required:**
- "Is my understanding of your request correct?"
- "Have I identified the logical issues accurately?"
- "Should I proceed with this interpretation?"
- "Would you like me to adjust my understanding?"
- "Are there clarifications you'd like to provide?"

**Next Step Declaration:**
- "Once confirmed, I will call the planning agent to handle implementation planning and coordination."
</explicit_confirmation_request>
</reasoning_confirmation_template>
</reasoning_presentation_framework>

<reasoning_confirmation_examples>
<example task_type="ambiguous_request">
<scenario>User asks: "Make the app faster and add more features"</scenario>
<reasoning_presentation>
```
**My Understanding of Your Request:**
You want me to improve the application's performance and add new functionality.

**Logical Issues Identified:**
- "Faster" is ambiguous - could mean page load speed, server response time, or user interaction responsiveness
- "More features" is undefined - no specific functionality requested
- No priority specified between performance vs new features
- No success criteria defined for "faster"
- Potential conflict: adding features might impact performance

**Clarification Needed:**
- What specific performance metrics should I optimize?
- What specific features would you like added?
- What's the priority: performance optimization or new features?
- What would constitute "fast enough" for your needs?
- Are there any features you definitely DON'T want added?

**Based on my analysis, I need more specific requirements before proceeding.**

Is my understanding of the ambiguities correct? Could you provide more specific requirements for both performance improvements and desired features?

Once confirmed, I will call the planning agent to handle implementation planning and coordination.
```
</reasoning_presentation>
</example>

<example task_type="contradictory_request">
<scenario>User asks: "Add user authentication but don't modify the database"</scenario>
<reasoning_presentation>
```
**My Understanding of Your Request:**
You want to implement user authentication functionality without making any database changes.

**Logical Issues Identified:**
- Contradiction detected: User authentication typically requires database storage for user credentials, sessions, or tokens
- Possible interpretations:
  - Use external authentication service (OAuth, Auth0, etc.)
  - Use in-memory authentication (temporary, non-persistent)
  - Implement token-only authentication without user storage
  - Use existing database tables in a new way

**Clarification Needed:**
- How should user credentials/sessions be stored if not in database?
- Are you open to external authentication services?
- Should authentication be temporary/non-persistent?
- Are there existing database tables we could leverage?

**Based on my analysis, here's how I understand your task:**
Implement authentication using an approach that doesn't require database schema changes, likely through external services or alternative storage methods.

Is my understanding correct? Which approach would you prefer for handling authentication without database modifications?

Once confirmed, I will call the planning agent to handle implementation planning and coordination.
```
</reasoning_presentation>
</example>

<example task_type="well_defined_request">
<scenario>User asks: "Add a dark mode toggle to the user settings page"</scenario>
<reasoning_presentation>
```
**My Understanding of Your Request:**
You want me to implement a dark mode feature with a toggle control located on the user settings page.

**Logical Issues Identified:**
No logical issues or contradictions found. The request is clear and well-defined.

**Clarification Needed:**
No clarification needed - requirements are clear.

**Based on my analysis, here's how I understand your task:**
- Add dark mode styling/theming to the application
- Create a toggle control component
- Place the toggle on the user settings page
- Implement theme switching functionality
- Ensure consistent dark mode styling across all components
- Persist user's theme preference

This is a straightforward feature request with clear scope and requirements.

Is my understanding correct? Should I proceed with implementing dark mode with a toggle on the settings page?

Once confirmed, I will call the planning agent to handle implementation planning and coordination.
```
</reasoning_presentation>
</example>
</reasoning_confirmation_examples>

<confirmation_response_handling>
```yaml
user_responses:
  confirmation_approved:
    action: invoke_planning_agent_with_validated_understanding
    log: "User confirmed understanding, transferring to planning agent"
    
  clarification_requested:
    action: re_analyze_with_additional_context
    process: incorporate_user_feedback_and_re_present_reasoning
    
  understanding_adjustment_needed:
    action: modify_interpretation_based_on_feedback
    process: update_reasoning_and_re_confirm
    
  task_cancellation:
    action: graceful_exit_with_reasoning_summary
    log: "User indicated misunderstanding, task cancelled"
    
  no_response_timeout:
    action: request_clarification_before_proceeding
    timeout: 60_seconds_default
    warning: "I need confirmation before proceeding. Should I continue with my current understanding?"
```
</confirmation_response_handling>
</phase>

<phase number="2" name="Planning Agent Invocation & Orchestration" parallel="false">
<thinking_framework>
**INVOKED ONLY AFTER USER CONFIRMATION**: This phase begins only after explicit user confirmation of reasoning.
**PLANNING-ONLY AGENT**: The planning router NEVER implements - it exclusively plans, coordinates, and orchestrates.
**RESEARCH FIRST**: Begin with parallel research agent spawning to gather comprehensive intelligence.
Use think-harder/ultrathink for comprehensive task decomposition and agent spawning decisions.
All complex cognitive work happens here to enable think-only execution agents.
**MULTI-INSTANCE ORCHESTRATION**: Plan context overflow prevention through intelligent instance multiplication.
</thinking_framework>

<execution_pattern>
```yaml
executor: planning_router (dedicated orchestration agent - INVOKED AFTER CONFIRMATION)
invocation_trigger: receives validated understanding from main thread reasoning phase
input_context: confirmed user requirements, identified issues, and approved interpretation
thinking_mode:
  - ultrathink: for massive parallel coordination (10+ agents, complex architecture)
  - think-harder: for complex multi-agent coordination (3-8 agents)
  - think: for simple coordination (1-2 agents)
duration: 30-120 seconds (adaptive based on coordination complexity)
research_agent_spawning: 2-5 research agents in parallel for comprehensive intelligence gathering
agent_spawning: 1-5 domain leads based on pattern analysis enhanced by research findings
sub_agent_potential: domain leads can spawn 2-3 sub-agents each
multi_instance_potential: 3-8 instances per specialist type for large tasks
coordination_strategy: hierarchical with file ownership, conflict prevention, and context overflow management
```
</execution_pattern>

<handoff_protocol>
<main_thread_to_planning_agent>
**Input from Confirmed Reasoning Phase**:
```yaml
validated_understanding:
  user_requirements: confirmed and clarified requirements from reasoning phase
  logical_issues_resolved: any ambiguities or contradictions addressed
  scope_definition: clear boundaries and success criteria
  constraints_identified: technical and project limitations
  
handoff_information:
  reasoning_summary: key insights from logical analysis phase
  user_preferences: any preferences expressed during confirmation
  clarifications_received: specific guidance from user interaction
  assumptions_validated: confirmed assumptions and interpretations
  
planning_constraints:
  confirmed_approach: high-level approach approved by user
  priority_guidance: user-specified priorities or preferences
  risk_tolerance: user's attitude toward identified risks
  timeline_expectations: any time constraints or urgency specified
```

**Planning Agent Responsibilities After Handoff**:
- Accept validated understanding as authoritative input
- Focus exclusively on implementation planning and coordination
- Do NOT re-analyze user requirements (already confirmed)
- Proceed with task decomposition based on confirmed understanding
- Handle all complex planning and agent orchestration decisions
</main_thread_to_planning_agent>
</handoff_protocol>

<planning_router_orchestration>
<orchestration_template>
<parallel_research_phase>
**RESEARCH FIRST APPROACH**:
- Spawn 3-4 project research agents to analyze codebase patterns and architecture
- Spawn 2-3 external research agents to gather documentation and best practices
- Execute research in parallel while planning router synthesizes findings
- Duration: 30-60 seconds parallel intelligence gathering
- Output: Comprehensive context for optimal execution planning
</parallel_research_phase>

<micro_task_decomposition>
**RESEARCH-ENHANCED TASK BREAKDOWN**:
- Break work into 10-100 micro-tasks (5-15 minute execution units) based on research findings
- Ensure task independence to enable parallel execution
- Group similar tasks for batch processing efficiency based on discovered patterns
- Plan dependency ordering to minimize blocking using research insights
- Apply work chunking strategies for multi-instance execution
</micro_task_decomposition>

<domain_lead_spawning>
**RESEARCH-INFORMED SPECIALIST SPAWNING**:
- Analyze project patterns to identify required specialization areas based on research findings
- Spawn 1-5 domain coordination agents based on discovered architecture patterns
- Plan multi-instance spawning: 3-8 instances per specialist type for large tasks
- Assign clear domain boundaries and file ownership with context overflow prevention
- Plan coordination protocols between domain leads and instance lifecycle management
- Design work chunking strategies to prevent context overflow across instances
</domain_lead_spawning>

<hierarchical_coordination>
**MULTI-INSTANCE HIERARCHICAL COORDINATION**:
- Design planning router → domain leads → multi-instance specialists hierarchy
- Pre-compute file ownership assignments to prevent conflicts across instances
- Plan integration points and validation checkpoints with instance handoff protocols
- Create work stealing protocols for load balancing across multiple instances
- Design context overflow prevention through proactive instance spawning
- Plan seamless work continuation across instance generations
</hierarchical_coordination>

<context_package_distribution>
**MULTI-INSTANCE CONTEXT MANAGEMENT**:
- Create domain-specific context packages with complete task breakdowns
- Include research-enhanced project patterns, conventions, and quality standards
- Design context packages for multi-instance consumption with work chunking
- Define clear handoff protocols for instance transitions and escalation procedures
- Structure all information for think-mode agent consumption across instances
- Plan context overflow prevention strategies and instance lifecycle management
- Create work continuation packages for seamless instance handoffs
</context_package_distribution>
</orchestration_template>
</planning_router_orchestration>

<hierarchical_spawning_strategy>
```yaml
simple_coordination_1_2_agents:
  structure: planning_router → single_domain_lead
  thinking_mode: think for domain lead
  coordination: minimal through router
  
moderate_coordination_3_8_agents:
  structure: planning_router → multiple_domain_leads → sub_agents
  thinking_mode: think for all agents
  coordination: hierarchical through domain leads
  
complex_coordination_9_20_agents:
  structure: planning_router → all_domains → multiple_sub_agents
  thinking_mode: think for execution, think-harder/ultrathink for router only
  coordination: full hierarchical with work stealing
  
ultra_aggressive_coordination_20plus_agents:
  structure: planning_router → research_agents + domain_leads → multi_instance_specialists
  agent_count: 20-30 total agents with 3-8 instances per specialist type
  thinking_mode: ultrathink for router, think for all execution agents
  multi_instance_patterns: context_overflow_prevention with seamless handoffs
  coordination: advanced hierarchical with instance lifecycle management
```
</hierarchical_spawning_strategy>

<planning_router_output>
```yaml
research_synthesis: comprehensive intelligence from parallel research agents (project + external)
domain_lead_assignments: specific domains and agents to spawn based on research findings
task_decomposition: micro-tasks grouped by domain and complexity with work chunking strategies
multi_instance_planning: specialist instance counts (3-8 per type) and context overflow prevention
coordination_plan: file ownership, integration points, escalation protocols, instance lifecycle management
context_packages: research-enhanced domain-specific context with complete task information
work_continuation_protocols: seamless handoff strategies for instance transitions
performance_targets: 20-30x speedup expectations through ultra-aggressive parallelization
context_overflow_management: proactive instance spawning and seamless work continuation strategies
```
</planning_router_output>
</phase>

<phase number="3" name="Multi-Instance Hierarchical Parallel Execution" parallel="true" max_agents="30">
<thinking_framework>
All execution agents use think mode only for efficient parallel processing.
Domain leads coordinate specialist instances using simple think-mode decisions.
Multi-instance specialists execute work chunks with seamless context handoffs.
Planning router monitors progress, handles escalations, and manages instance lifecycle.
Context overflow prevention through proactive instance spawning and work continuation.
</thinking_framework>

<execution_pattern>
```yaml
executor: ULTRA-AGGRESSIVE MULTI-INSTANCE PARALLEL EXECUTION (2-30 agents total)
hierarchy_structure:
  planning_router: monitors progress, handles escalations, manages instance lifecycle (think-harder when needed)
  domain_leads: 1-5 leads spawned based on research findings (think mode)
  multi_instance_specialists: 3-8 instances per specialist type for large tasks (think mode)
  context_overflow_agents: fresh instances spawned proactively before context exhaustion
multi_instance_coordination:
  instance_multiplication: 3-8 instances per specialist type based on task size
  work_chunking: divide tasks into context-appropriate portions per instance
  seamless_handoffs: transfer work state between instance generations
  context_monitoring: real-time tracking of context usage across instances
thinking_mode_distribution:
  planning_router: think-harder/ultrathink for escalations and instance management
  all_execution_agents: think mode exclusively across all instances
  coordination_overhead: maximum 10% of total execution time (optimized)
performance_target: 20-30x speedup through ultra-aggressive multi-instance coordination
```
</execution_pattern>

<hierarchical_execution>
<domain_lead_coordination>
**RESEARCH-ENHANCED COORDINATION**:
- Receive complete task breakdown and research-enhanced context from planning router
- Spawn multi-instance specialists when 5+ similar tasks detected within domain
- Plan work chunking strategies to prevent context overflow across instances
- Distribute work using affinity grouping, complexity balancing, and context capacity analysis
- Monitor specialist instance progress and manage instance lifecycle
- Coordinate seamless handoffs between instance generations
- Aggregate results from multiple instances ensuring quality consistency
- Escalate complex issues to planning router with context overflow alerts
</domain_lead_coordination>

<multi_instance_specialist_execution>
**CONTEXT-AWARE EXECUTION WITH OVERFLOW PREVENTION**:
- Execute work chunks with research-enhanced context and patterns
- Use think mode for efficient implementation without complex coordination
- Monitor context usage and request fresh instance spawn at 60% capacity
- Execute seamless handoffs to fresh instances when context limits approached
- Report progress to domain lead asynchronously with context status updates
- Handle routine operations with minimal overhead across instance generations
- Follow established patterns and quality standards consistently across instances
- Maintain work continuity and quality across instance transitions
- Aggregate partial results for final integration by domain lead
</multi_instance_specialist_execution>

<multi_instance_work_stealing_protocols>
**ULTRA-AGGRESSIVE WORK REDISTRIBUTION**:
- Domain leads can redistribute work between specialist instances within domain
- Cross-instance work stealing: move work between instances of same specialist type
- Context-aware redistribution: consider context usage when redistributing work
- Cross-domain work stealing through planning router coordination
- Instance lifecycle stealing: transfer work from exhausted instances to fresh instances
- Automatic load balancing based on queue depth, performance, and context capacity
- Proactive instance spawning based on workload analysis and context prediction
- Dynamic scaling of instance count based on task volume and context overflow risk
- Emergency instance spawning for critical deadline management
</multi_instance_work_stealing_protocols>
</hierarchical_execution>

<multi_instance_integration_management>
```yaml
multi_instance_progress_aggregation:
  instance_level: specialist instances report progress and context status to domain leads
  domain_level: domain leads aggregate multi-instance progress and report to planning router
  system_level: planning router coordinates overall progress across all domains and instances
  
multi_instance_quality_validation:
  consistent_standards: uniform quality across all hierarchical levels and instances
  cross_instance_consistency: ensure coherent output across specialist instance generations
  handoff_quality_assurance: validate quality maintenance during instance transitions
  result_aggregation_validation: ensure seamless integration of multi-instance outputs
  
advanced_result_integration:
  real_time_aggregation: combine results from multiple instances as they complete
  quality_synthesis: ensure coherent integration across instance boundaries
  context_preservation: maintain work context and quality across handoffs
  planning_router_orchestration: coordinate final integration with full system awareness
  
multi_instance_conflict_resolution:
  file_ownership_across_instances: prevent conflicts between instances of same specialist
  context_handoff_conflicts: resolve issues during instance transitions
  work_continuation_conflicts: handle overlapping work between instance generations
  escalation_with_context: provide full context including instance history for complex issues
  emergency_instance_coordination: rapid response for critical conflicts or failures
```
</multi_instance_integration_management>
</phase>


</parallel_execution_phases>

### Confirmation Stage Integration

**Confirmation Stage as Bridge Between Reasoning and Planning**:

<confirmation_integration>
<workflow_transition>
**From Reasoning to Confirmation**:
```yaml
reasoning_output_to_confirmation:
  understanding_synthesis: Convert reasoning analysis into user-friendly summary
  approach_presentation: Transform technical strategy into accessible explanation
  risk_communication: Present potential issues in clear, non-technical language
  confirmation_request: Structured prompt for user validation
  
confirmation_processing:
  user_response_analysis: Parse user feedback for approval, clarification, or changes
  iterative_refinement: Re-run reasoning if significant changes requested
  approach_adjustment: Modify strategy based on user input
  final_validation: Ensure mutual understanding before planning phase
```

**From Confirmation to Planning**:
```yaml
confirmed_requirements_to_planning:
  validated_understanding: Confirmed task requirements and success criteria
  approved_approach: User-validated implementation strategy
  addressed_concerns: Resolved questions and clarifications
  planning_constraints: Any limitations or preferences expressed by user
  
enhanced_planning_input:
  user_preferences: Incorporate specific user feedback into planning
  risk_mitigation: Plan around user-identified concerns
  priority_alignment: Ensure planning reflects user priorities
  communication_style: Adapt agent communication based on user interaction
```
</workflow_transition>
</confirmation_integration>

**Confirmation Intelligence Patterns**:

<confirmation_patterns>
<adaptive_confirmation>
**Smart Confirmation Triggering**:
```yaml
auto_confirmation_skip:
  simple_tasks: Skip confirmation for well-understood, low-risk operations
  pattern_recognition: Skip for repetitive tasks following established patterns
  user_trust_level: Adapt based on user's demonstrated preferences
  confidence_threshold: Skip when reasoning confidence exceeds threshold
  
mandatory_confirmation:
  high_risk_operations: Always confirm for potentially breaking changes
  security_implications: Require confirmation for security-related modifications
  external_dependencies: Confirm when task involves external systems
  user_specified_patterns: Honor user-configured always-confirm patterns
  
adaptive_detail_level:
  user_expertise: Adjust confirmation detail based on user's technical level
  task_complexity: Provide more detail for complex, multi-faceted tasks
  previous_interactions: Learn from user's preferred communication style
  domain_specificity: Increase detail for unfamiliar technical domains
```
</adaptive_confirmation>
</confirmation_patterns>

### MCP-Enhanced Context Gathering with Verification

**During Reasoning Phase** (with MCP server integration and structured verification):

<mcp_context_gathering_framework>

<mcp_verification_driven_collection>
Apply hallucination reduction techniques enhanced with MCP server validation.
Use direct quotes and citations from codebase AND MCP server responses for factual grounding.
Implement verification loops using multiple MCP servers to ensure accuracy and completeness.
Cross-reference findings across MCP servers to validate information consistency.
</mcp_verification_driven_collection>

<mcp_enhanced_context_collection>
<analysis_template_with_mcp>
<project_analysis_mcp>
<thinking>
I need to understand this project systematically using available MCP servers:
1. Use GitHub server to examine repository structure and patterns
2. Leverage documentation servers (Notion, Ref Tools) for team knowledge
3. Access database servers (Supabase, Neo4j) for data architecture understanding
4. Utilize monitoring servers (Sentry, Grafana) for performance baselines
</thinking>

<mcp_verification_steps>
- GitHub server: Quote specific repository patterns and architectural decisions
- Documentation servers: Reference team standards and established conventions
- Database servers: Analyze current schema and data relationships
- Monitoring servers: Gather performance baselines and error patterns
- Cross-validation: Verify consistency across multiple MCP server sources
</mcp_verification_steps>

<mcp_grounded_findings>
- Repository patterns: [cite GitHub server analysis with specific examples]
- Team conventions: [reference documentation server findings]
- Data architecture: [quote database server schema analysis]
- Performance baselines: [reference monitoring server metrics]
- Integration points: [identify through cross-server analysis]
</mcp_grounded_findings>
</project_analysis_mcp>

<requirement_clarification_mcp>
<thinking>
I need to ensure I understand requirements while leveraging MCP server intelligence:
1. Parse user requirements and validate against repository patterns via GitHub
2. Check team documentation via Notion/Ref Tools for established approaches
3. Validate technical feasibility using relevant MCP servers
4. Cross-reference with monitoring data for performance considerations
</thinking>

<mcp_verification_approach>
- Requirements validation: Use GitHub server to verify feasibility against existing patterns
- Documentation checking: Leverage documentation servers for established team approaches
- Technical validation: Utilize relevant MCP servers to confirm implementation viability
- Performance validation: Check monitoring servers for performance impact assessment
- Uncertainty acknowledgment: Explicitly state when MCP servers provide insufficient information
</mcp_verification_approach>

<mcp_grounded_understanding>
- Core requirements: [specific, measurable criteria validated via MCP servers]
- Technical feasibility: [confirmed through MCP server analysis]
- Team alignment: [verified against documentation server standards]
- Performance impact: [assessed using monitoring server baselines]
</mcp_grounded_understanding>
</requirement_clarification_mcp>

<implementation_preparation_mcp>
<thinking>
I need to gather implementation information enhanced with MCP server capabilities:
1. Use GitHub server to examine existing implementation patterns
2. Leverage Ref Tools for up-to-date best practices and documentation
3. Access database servers for data modeling insights
4. Utilize security servers (Semgrep) for security pattern validation
</thinking>

<mcp_evidence_based_planning>
- Implementation patterns: [cite GitHub server examples with specific file references]
- Best practices: [reference Ref Tools current documentation and standards]
- Data patterns: [quote database server schema and relationship analysis]
- Security requirements: [reference Semgrep security analysis and recommendations]
</mcp_evidence_based_planning>

<mcp_verified_implementation_strategy>
- Implementation approach: [based on GitHub server pattern analysis]
- Best practice integration: [following Ref Tools current standards]
- Data strategy: [aligned with database server schema analysis]
- Security compliance: [validated through Semgrep security scanning]
</mcp_verified_implementation_strategy>
</implementation_preparation_mcp>
</analysis_template_with_mcp>
</mcp_enhanced_context_collection>

<mcp_context_verification_protocol>
```yaml
Step 1 - MCP-Enhanced Evidence Gathering:
  github_analysis: Examine repository patterns, commit history, and architectural decisions
  documentation_access: Retrieve team standards and conventions via documentation servers
  data_analysis: Analyze current database schemas and relationships via data servers
  monitoring_insights: Gather performance baselines and error patterns via monitoring servers
  
Step 2 - Cross-Server Verification:
  consistency_checking: Validate findings across multiple MCP servers
  pattern_confirmation: Confirm architectural patterns through multiple sources
  requirement_validation: Verify requirements against multiple server capabilities
  integration_verification: Ensure compatibility across server-reported configurations

Step 3 - Enhanced Hallucination Prevention:
  multi_source_validation: Cross-reference findings across multiple MCP servers
  direct_server_citations: Quote specific MCP server responses for factual claims
  uncertainty_documentation: Acknowledge limitations in MCP server information
  verification_requests: Ask for clarification when MCP server data is ambiguous or conflicting
```
</mcp_context_verification_protocol>

<mcp_adaptive_context_strategies>
<mcp_minimal_context>
Purpose: Quick context gathering using essential MCP servers for simple tasks
Approach:
- GitHub server for basic pattern analysis
- One documentation server for team standards
- Essential domain-specific server (e.g., Supabase for database tasks)
- Focused MCP server usage to minimize overhead
</mcp_minimal_context>

<mcp_comprehensive_context>
Purpose: Deep context gathering using full MCP server capabilities for complex tasks
Approach:
- Multi-server documentation research (Notion, Ref Tools, Inkeep)
- Comprehensive repository analysis via GitHub server
- Full data architecture analysis via database servers
- Security and performance validation via monitoring servers
- Cross-server synthesis for complete understanding
</mcp_comprehensive_context>

<mcp_progressive_context>
Purpose: Incremental context gathering with dynamic MCP server engagement
Approach:
- Initial foundational analysis using core MCP servers
- Just-in-time MCP server engagement during implementation
- Continuous validation through real-time MCP server feedback
- Adaptive MCP server usage based on discovered implementation needs
</mcp_progressive_context>
</mcp_adaptive_context_strategies>

</mcp_context_gathering_framework>

**MCP-Enhanced Natural Context Flow with Verification**:
```yaml
MCP Context Collection Process:
  server_enhanced_analysis: Use MCP servers for accurate, real-time project understanding
  pattern_verification: Validate architectural understanding through GitHub and documentation servers
  requirement_grounding: Ensure understanding incorporates MCP server insights and team standards
  integration_validation: Verify compatibility through comprehensive MCP server analysis

MCP Quality Assurance:
  multi_server_citation: Quote specific MCP server responses for factual claims
  cross_server_validation: Verify findings across multiple relevant MCP servers
  server_limitation_acknowledgment: Clearly indicate when MCP servers provide insufficient data
  dynamic_verification: Use MCP servers for iterative validation throughout analysis
```

### MCP-Enhanced Agent Delegation

**Proactive Agent Detection with MCP Intelligence**:
```yaml
Automatic Expert Engagement with MCP Capabilities:
  pattern_based: engage agents when project patterns detected, enhanced with MCP servers
  task_based: route tasks to appropriate expert types with relevant MCP server access
  mcp_enhanced: leverage MCP servers for real-time context and capability enhancement
  parallel_ready: identify tasks suitable for parallel execution with MCP coordination

Dynamic Specialization Composition with MCP Enhancement:
  ui_technology_patterns: 
    detection: React/Vue/Angular components, UI frameworks, styling approaches
    dynamic_specialization: Create specialist based on discovered frontend stack
    mcp_servers: [GitHub, Ref Tools, Notion]
    enhancement: Real-time component analysis and design system access
    
  api_technology_patterns:
    detection: REST/GraphQL endpoints, server frameworks, business logic patterns
    dynamic_specialization: Compose specialist expertise from discovered backend stack
    mcp_servers: [GitHub, Supabase, Sentry, Semgrep]
    enhancement: Security analysis, database integration, error tracking
    
  data_technology_patterns:
    detection: Database schemas, ORM patterns, migration approaches
    dynamic_specialization: Create data specialist aligned with discovered data stack
    mcp_servers: [Supabase, Neo4j, BigQuery, GitHub]
    enhancement: Schema analysis, relationship modeling, performance insights
    
  quality_assurance_patterns:
    detection: Testing frameworks, quality tools, validation approaches
    dynamic_specialization: Compose QA specialist from discovered testing patterns
    mcp_servers: [GitHub, Sentry, Supabase]
    enhancement: Test pattern analysis, error scenario discovery
    
  deployment_technology_patterns:
    detection: CI/CD tools, containerization, infrastructure patterns
    dynamic_specialization: Create deployment specialist from discovered DevOps stack
    mcp_servers: [GitHub, Sentry, Grafana]
    enhancement: Pipeline analysis, monitoring setup, observability patterns

Smart Delegation Rules with MCP Integration:
  single_agent: when task is focused on one domain with specific MCP server needs
  multiple_agents: when task crosses domain boundaries requiring different MCP servers
  parallel_agents: when independent work can be distributed with MCP coordination
  sequential_agents: when work must be coordinated in order with MCP validation
```

**MCP-Enhanced Context Gathering Integration**:
```yaml
Enhanced Research Phase:
  mcp_server_orchestration:
    documentation_research: 2-3 agents using Notion, Ref Tools, Inkeep servers
    code_analysis: 2-4 agents using GitHub, Semgrep, DeepView servers
    data_analysis: 1-2 agents using Supabase, Neo4j, BigQuery servers
    synthesis_coordination: 1 agent integrating all MCP-enhanced findings
    
  real_time_intelligence:
    pattern_discovery: Use MCP servers to discover current patterns and best practices
    validation_checking: Leverage MCP servers for real-time validation and verification
    performance_insights: Access monitoring servers for performance baseline data
    security_analysis: Utilize security servers for vulnerability and compliance checking
    
  context_package_enhancement:
    mcp_enriched_context: Include MCP server insights in agent context packages
    real_time_updates: Dynamic context updates from MCP servers during execution
    cross_server_synthesis: Combine insights from multiple MCP servers for comprehensive context
    performance_optimization: Balance MCP server usage with execution efficiency
```

### Aggressive Multi-Agent Spawning & Parallel Execution

**CORE PHILOSOPHY**: Use parallel execution when it provides clear benefits - typically 2-20 agents working on independent tasks with proper isolation and realistic scaling expectations.

**Aggressive Agent Spawning Strategy**:
```yaml
Aggressive Agent Spawning Triggers:
  independent_tasks: IMMEDIATELY spawn separate agents for independent work
  similar_operations: CREATE MULTIPLE INSTANCES of same agent for batch work
  domain_separation: SPAWN agents simultaneously across all domains
  file_isolation: MAXIMIZE parallel agents through clear file ownership

Aggressive Scaling Strategy:
  2-5_agents: minimum baseline for any non-trivial task
  6-10_agents: standard scaling for medium complexity tasks
  11-15_agents: aggressive scaling for complex multi-domain tasks
  16-20_agents: maximum parallel execution for massive tasks

Multi-Instance Spawning:
  same_agent_scaling: create 2-5 instances of same agent type
  batch_operation_optimization: spawn multiple instances for similar work
  workload_distribution: automatically balance work across agent instances
  dynamic_scaling: add/remove instances based on queue depth

Proactively Parallel Distribution:
  domain_flooding: spawn all relevant agent types simultaneously
  instance_multiplication: create multiple instances per agent type
  work_stealing: agents automatically take work from overloaded peers
  conflict_prevention: advanced coordination prevents file ownership conflicts
  performance_target: achieve 10-20x speedup through massive parallelization
```

## Workflow Configuration Through Instructions

**Instructions-Driven Behavior**:
```yaml
Configurable Aspects:
  reasoning_depth: minimal | standard | comprehensive
  context_strategy: on-demand | proactive | progressive
  delegation_mode: manual | auto | aggressive
  parallel_threshold: number of tasks before parallel execution
  max_parallel_agents: 1-20 agents maximum
  agent_preferences: which experts to engage automatically

Default Configuration:
  reasoning: standard depth with proactive context gathering
  delegation: auto-engage agents when patterns detected
  parallelization: 2-20 agents when 3+ independent tasks found
  task_isolation: strict boundaries to prevent conflicts
  validation: implement testing when complexity warrants it
```

## Simplified Stage Processing

### Stage 1: Reasoning & Context Gathering

**Integrated Reasoning Process**:
```yaml
Requirements Analysis:
  - Parse user request and clarify intent
  - Identify scope, constraints, and success criteria
  - Understand integration points and dependencies

Contextual Preparation:
  - Examine existing codebase patterns
  - Identify relevant technologies and frameworks
  - Understand project structure and conventions
  - Gather information needed for implementation

Strategic Planning:
  - Determine implementation approach
  - Identify agent needs and parallel opportunities
  - Plan task isolation and conflict prevention
  - Prepare for intelligent agent delegation
```

### Stage 2: Planning & Agent Delegation

**Smart Execution Planning**:
```yaml
Task Decomposition:
  - Break work into logical, manageable units
  - Identify independent tasks suitable for parallelization
  - Plan task assignments with clear boundaries
  - Design conflict prevention strategies

Agent Selection:
  - Auto-detect agent needs based on project patterns
  - Choose appropriate number of agents (1-20)
  - Plan task distribution with skill matching
  - Ensure proper isolation and coordination

Execution Strategy:
  - Parallel execution when beneficial
  - Sequential execution when coordination required
  - Hybrid approach for mixed task types
  - Validation and integration planning
```

### Stage 3: Implementation

**Efficient Execution**:
```yaml
Single Agent Execution:
  - Focused tasks requiring no parallelization
  - Complex tasks requiring tight coordination
  - Simple tasks where parallelization adds overhead
  - Sequential operations with dependencies

Parallel Agent Execution:
  - Independent file modifications
  - Similar operations across multiple components
  - Domain-separated work (frontend/backend/database)
  - Batch operations with clear isolation

Smart Coordination:
  - File-level ownership to prevent conflicts
  - Progress monitoring and load balancing
  - Integration validation at completion
  - Quality assurance through appropriate testing
```

## Workflow Flag Controls

**Enhanced Flag System with Confirmation Controls**:
```yaml
Workflow Control:
  --no-reason: skip reasoning, go directly to planning
  --no-plan: reasoning and confirmation only, no implementation
  --no-implement: stop after planning, no execution
```

## Error Handling and Fallbacks

**Graceful Degradation**:
```yaml
Agent Availability:
  agent_missing: use main thread with appropriate context
  partial_agents: execute with available agents
  no_agents: full main thread execution with detailed planning

Task Failures:
  parallel_conflict: fall back to sequential execution
  agent_error: redistribute work to available agents
  integration_failure: validate and retry with different approach

Configuration Issues:
  invalid_settings: use sensible defaults with user notification
  missing_instructions: apply built-in reasonable defaults
  conflicting_flags: prioritize safety and simplicity
```

## Integration Points

### Setup Command Embedding
This module provides hierarchical workflow patterns with planning router orchestration for execution.

### Module Dependencies
- principles.md (core philosophy and think-only agent principles)
- agents.md (hierarchical agent framework)
- parallel.md (proactively parallel execution strategies)
- planning-router.md (master orchestration and coordination)

### Module Consumers
- Setup command (embeds hierarchical workflow patterns)
- Planning router (orchestrates workflow execution)
- Guild command (executes hierarchical workflows)
- Agent coordination (managed through planning router)