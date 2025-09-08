# Subagent Invocation Intelligence - Guild System

## Purpose
Central reference for all subagent invocation patterns, persistent agent discovery, scoring systems, and coordination architectures. This module provides unified intelligence for both setup and workflow commands to ensure consistent and effective subagent utilization.

## Core Philosophy: Intelligent Hybrid Agent Architecture

**Fundamental Principle**: Optimize agent selection through intelligence-driven assessment combining persistent expertise with dynamic flexibility.

- **PERSISTENT AGENTS**: Leverage established domain expertise and proven coordination patterns
- **DYNAMIC AGENTS**: Enable creative adaptation and novel requirement handling  
- **HYBRID COORDINATION**: Bridge persistent expertise with dynamic flexibility through intelligent integration
- **INTELLIGENT SELECTION**: Apply systematic scoring and context analysis for optimal agent choice

## Persistent Agent Discovery Protocol

<discovery_protocol>
  **MANDATORY PRE-EXECUTION DISCOVERY SEQUENCE:**
  
  **Phase 1: Comprehensive Agent Inventory**
  1. **DIRECTORY SCANNING**: Recursively scan `.claude/agents/guild/` and all subdirectories
  2. **METADATA EXTRACTION**: Parse agent files for capability markers and intelligence indicators
  3. **INTELLIGENCE PATTERN RECOGNITION**: Extract embedded metadata using standard markers:
     ```html
     <!-- PERSISTENT_AGENT_METADATA:
       domain: "[primary-expertise-area]"
       secondary_domains: ["area1", "area2", "area3"]  
       workflow_patterns: ["pattern1", "pattern2"]
       coordination_protocols: ["protocol1", "protocol2"]
       parallel_ready: true/false
       adaptation_level: "high|medium|low"
       last_updated: "YYYY-MM-DD"
       success_patterns: ["context1", "context2"]
       integration_points: ["checkpoint1", "checkpoint2"]
     -->
     ```
  
  **Phase 2: Capability Assessment Matrix**
  1. **DOMAIN EXPERTISE MAPPING**: Identify primary and secondary knowledge domains
  2. **WORKFLOW PATTERN DETECTION**: Extract established coordination and execution patterns
  3. **INTEGRATION CAPABILITY EVALUATION**: Assess coordination readiness and parallel execution compatibility
  4. **ADAPTATION FLEXIBILITY ANALYSIS**: Determine agent ability to handle context variations
  5. **PERFORMANCE HISTORY INTEGRATION**: Incorporate success metrics and usage patterns if available
</discovery_protocol>

## Agent Selection Scoring System

<scoring_system>
  **INTELLIGENT AGENT ROUTING DECISION MATRIX:**
  
  **Primary Scoring Categories:**
  ```
  TOTAL_SCORE = (
    domain_match_score * 0.4 +
    adaptation_capability * 0.3 +
    parallel_compatibility * 0.2 + 
    coordination_intelligence * 0.1
  )
  ```
  
  **Domain Match Assessment (0-100 points):**
  - **EXACT MATCH (90-100)**: Direct domain overlap with task requirements
  - **STRONG OVERLAP (80-89)**: Significant domain synergy with minor gaps
  - **PARTIAL MATCH (60-79)**: Some domain relevance with adaptation needs
  - **MINIMAL MATCH (30-59)**: Limited domain connection requiring major adaptation
  - **NO MATCH (0-29)**: No meaningful domain alignment
  
  **Context Adaptation Capability (0-100 points):**
  - **HIGH ADAPTATION (85-100)**: Context-aware decision making, creative problem-solving embedded
  - **MEDIUM ADAPTATION (70-84)**: Some flexibility with moderate guidance requirements
  - **LOW ADAPTATION (50-69)**: Limited flexibility, needs significant context support
  - **MINIMAL ADAPTATION (30-49)**: Rigid patterns requiring extensive modification
  - **NO ADAPTATION (0-29)**: Fixed approach incompatible with context variation
  
  **Parallel Execution Compatibility (0-100 points):**
  - **PARALLEL-OPTIMIZED (90-100)**: Embedded coordination protocols, autonomous collaboration
  - **COORDINATION-READY (75-89)**: Good collaboration with clear integration checkpoints
  - **COORDINATION-DEPENDENT (50-74)**: Requires integration support for parallel work
  - **SEQUENTIAL-PREFERRED (25-49)**: Works better in sequential workflow patterns
  - **SEQUENTIAL-ONLY (0-24)**: Cannot coordinate effectively in parallel execution
  
  **Coordination Intelligence (0-100 points):**
  - **INTELLIGENT-COORDINATION (90-100)**: Adaptive coordination, creative conflict resolution
  - **STRUCTURED-COORDINATION (75-89)**: Reliable coordination with established protocols
  - **GUIDED-COORDINATION (50-74)**: Needs coordination direction and support
  - **LIMITED-COORDINATION (25-49)**: Basic coordination capability only
  - **NO-COORDINATION (0-24)**: Cannot coordinate effectively with other agents
</scoring_system>

## Agent Selection Decision Thresholds

<decision_thresholds>
  **SELECTION STRATEGY BY TOTAL SCORE:**
  
  **SCORE 85-100: DIRECT PERSISTENT UTILIZATION**
  ```yaml
  strategy: "direct_persistent"
  approach: "Use persistent agent with minimal adaptation"
  coordination: "Leverage embedded coordination protocols"
  context_handling: "Agent adapts autonomously to context"
  expected_performance: "Exceptional - leverages established expertise"
  ```
  
  **SCORE 70-84: CONTEXT-ADAPTED PERSISTENT** 
  ```yaml
  strategy: "adapted_persistent"
  approach: "Use persistent agent with context enhancement"
  coordination: "Enhanced guidance for novel coordination patterns"
  context_handling: "Provide adaptation prompts and context bridges"
  expected_performance: "Strong - domain expertise with creative adaptation"
  ```
  
  **SCORE 55-69: HYBRID APPROACH**
  ```yaml
  strategy: "hybrid_coordination"
  approach: "Combine persistent foundation with dynamic specialists"
  coordination: "Integration specialist manages mixed agent workflow"
  context_handling: "Persistent provides expertise, dynamic handles novelty"
  expected_performance: "Balanced - optimal mix of expertise and flexibility"
  ```
  
  **SCORE 40-54: DYNAMIC PREFERRED**
  ```yaml
  strategy: "dynamic_preferred"  
  approach: "Create dynamic agent with optional persistent consultation"
  coordination: "Dynamic agent leads, persistent provides domain context"
  context_handling: "Maximum flexibility with expertise guidance available"
  expected_performance: "Flexible - innovative solutions with domain support"
  ```
  
  **SCORE <40: PURE DYNAMIC CREATION**
  ```yaml
  strategy: "pure_dynamic"
  approach: "Create dynamic agent for maximum flexibility"
  coordination: "Dynamic coordination protocols and creative integration"  
  context_handling: "Full context adaptation with creative problem-solving"
  expected_performance: "Innovative - breakthrough solutions for novel contexts"
  ```
</decision_thresholds>

## Context Adaptation Templates

<adaptation_templates>
  **TEMPLATE A: DIRECT PERSISTENT UTILIZATION (Score 85-100)**
  ```yaml
  subagent_type: "[exact-persistent-agent-name]"
  description: "Leveraging established [domain] expertise with proven coordination patterns and adaptive intelligence. This specialist brings deep domain mastery, established workflow templates, and seamless coordination capabilities for parallel execution. Expected to deliver exceptional results through domain expertise while adapting to current context requirements. Includes embedded coordination protocols and comprehensive error handling."
  prompt: |
    CONTEXT ADAPTATION FRAMEWORK:
    - Current project context: [specific details]
    - Task-specific requirements: [unique aspects]
    - Coordination architecture: [other specialists in workflow]
    - Integration checkpoints: [specific synchronization points]
    - Adaptive success criteria: [context-specific metrics]
    
    LEVERAGE ESTABLISHED PATTERNS:
    - Apply proven [domain] methodologies with context awareness
    - Utilize embedded coordination protocols for parallel execution
    - Adapt quality assurance patterns for current requirements
    - Demonstrate creative problem-solving within domain expertise
    
    PARALLEL EXECUTION COORDINATION:
    - Coordinate with: [list other specialists]
    - Integration points: [specific checkpoints]  
    - Communication protocols: [established or adapted patterns]
  ```
  
  **TEMPLATE B: CONTEXT-ADAPTED PERSISTENT (Score 70-84)**
  ```yaml
  subagent_type: "[persistent-agent-name]"
  description: "Adapting established [primary-domain] expertise to [target-context] requirements with enhanced flexibility and coordination intelligence. This specialist brings proven [capability] patterns and adapts methodologies to address [specific needs]. Coordinates effectively with parallel specialists through flexible collaboration approaches, with enhanced context awareness for novel requirements. Expected to deliver strong results through domain foundation plus creative adaptation to new contexts."
  prompt: |
    ADAPTATION REQUIREMENTS:
    - Primary domain strength: [established expertise area]
    - Adaptation target: [new context/requirements]
    - Bridge patterns needed: [specific adaptations required]
    - Novel coordination needed: [new collaboration requirements]
    
    GUIDED ADAPTATION APPROACH:
    - Start with proven [domain] foundations
    - Adapt methodologies for [specific new context]
    - Create bridging strategies for [gap areas]
    - Develop enhanced coordination for [new specialist interactions]
    
    ENHANCED COORDINATION:
    - New specialist interactions: [novel coordination needs]
    - Adapted integration points: [modified checkpoints]
    - Context-specific communication: [enhanced protocols]
  ```
  
  **TEMPLATE C: HYBRID COORDINATION (Score 55-69)**
  ```yaml
  # PERSISTENT FOUNDATION SPECIALIST
  subagent_type: "[partial-match-persistent-agent]"
  description: "Providing [core-domain] expertise foundation for hybrid execution approach with intelligent coordination across persistent and dynamic agents. This specialist contributes established [core-capability] while coordinating with dynamic specialists for [novel-aspects]. Brings proven domain knowledge as foundation while enabling flexible adaptation through intelligent collaboration with custom-created specialists."
  prompt: |
    HYBRID ROLE DEFINITION:
    - Core responsibility: [established domain expertise]
    - Hybrid coordination: Work with dynamic specialists for [novel aspects]
    - Foundation provision: Establish [domain patterns] for dynamic specialists
    - Knowledge transfer: Guide dynamic specialists in [domain principles]
    
  # DYNAMIC ADAPTATION SPECIALIST
  subagent_type: "general-purpose"
  description: "Dynamic adaptation specialist handling novel requirements in coordination with persistent domain experts. This specialist provides maximum flexibility for unique contexts while leveraging established domain patterns through intelligent collaboration with persistent agents. Expected to deliver creative solutions through adaptive reasoning while maintaining coordination with established expertise patterns."
  prompt: |
    HYBRID COLLABORATION:
    - Coordinate with persistent [domain] specialist for [core patterns]
    - Provide flexible adaptation for [novel requirements]
    - Bridge established patterns with new context needs
    - Apply creative problem-solving for innovative solutions
    
  # HYBRID COORDINATION SPECIALIST
  subagent_type: "general-purpose"
  description: "Hybrid coordination specialist managing collaboration between established persistent agents and dynamic specialists. This coordinator bridges proven domain patterns with novel requirements, facilitates knowledge transfer between persistent and dynamic agents, and ensures seamless integration of established and adaptive approaches. Expected to optimize hybrid workflow through intelligent pattern bridging and collaborative synthesis."
  prompt: |
    HYBRID COORDINATION RESPONSIBILITIES:
    - Manage persistent + dynamic agent collaboration
    - Bridge established patterns with novel adaptations
    - Facilitate knowledge transfer between agent types
    - Ensure integration coherence across hybrid workflow
    - Optimize coordination efficiency for mixed agent teams
  ```
  
  **TEMPLATE D: DYNAMIC CREATION (Score <55)**
  ```yaml
  subagent_type: "general-purpose"
  description: "[UNIFIED 4-SENTENCE STANDARD]: 1) Specialized Purpose - [Domain] intelligence specialist with adaptive reasoning and creative problem-solving capabilities, following Tool Use Implementation best practices for optimal performance. 2) Intelligent Coordination - Used for [component] tasks requiring breakthrough solutions, coordinates organically with [other specialists] through intelligent collaboration versus rigid template approaches. 3) Context Boundaries - Includes structured JSON error handling with recovery strategies, limited to [domain boundaries], requires context-aware decision making adaptation. 4) Expected Outcomes - Delivers exceptional results through continuous adaptive learning and cross-specialist coordination protocols, provides innovative insights beyond standard approaches."
  prompt: |
    DYNAMIC CREATION FRAMEWORK:
    - Task context: [specific requirements]
    - Innovation needs: [creative problem-solving areas]
    - Coordination partners: [other specialists if any]
    - Success criteria: [context-specific goals]
    
    CREATIVE INTELLIGENCE REQUIREMENTS:
    - Apply adaptive reasoning for novel solutions
    - Demonstrate context-aware decision making  
    - Coordinate organically with other specialists
    - Provide innovative insights beyond standard approaches
    - Use structured JSON error handling with recovery strategies
  ```
</adaptation_templates>

## Unified Agent Description Standard

<description_standard>
  **MANDATORY 4-SENTENCE STRUCTURE FOR ALL AGENTS:**
  
  **Sentence 1: Specialized Purpose**
  - Primary function and unique capabilities
  - Tool Use Implementation compliance reference
  - Core domain expertise identification
  - Performance optimization focus
  
  **Sentence 2: Intelligent Coordination**
  - When to use versus other agents
  - Coordination through adaptive reasoning and creative problem-solving
  - Organic collaboration patterns
  - Intelligent versus template-driven approaches
  
  **Sentence 3: Context Boundaries** 
  - Important limitations and domain boundaries
  - Structured JSON error handling requirements
  - Context-aware decision making needs
  - Recovery strategy capabilities
  
  **Sentence 4: Expected Outcomes**
  - Deliverables through context-aware decision making
  - Integration with parallel specialists
  - Innovative insights beyond standard approaches
  - Continuous learning and adaptation capabilities
  
  **TEMPLATE APPLICATION:**
  ```markdown
  description: "[Domain] [specialist-type] with [core-capability] and [intelligence-features], following Tool Use Implementation best practices for optimal [performance-area]. This specialist [coordination-approach] through [intelligence-methods] and [creative-approaches], coordinates [collaboration-style] with [other-agents] versus [alternative-approaches]. Includes [error-handling] with [recovery-features], limited to [domain-boundaries], requires [adaptation-needs]. Expected to deliver [outcome-quality] through [learning-approach] and [coordination-protocols], provides [innovation-level] beyond [baseline-approaches]."
  ```
</description_standard>

## Parallel Execution Coordination

<parallel_coordination>
  **HYBRID BATCH LAUNCH PATTERNS:**
  
  **Pattern 1: Persistent-First Parallel Launch**
  ```yaml
  sequence:
    1. "Identify high-match persistent agents (score 85-100)"
    2. "Identify medium-match persistent agents (score 70-84)"  
    3. "Identify hybrid opportunities (score 55-69)"
    4. "Create dynamic specialists for gaps (score <55)"
    5. "Launch all agents simultaneously in coordinated batches"
  
  coordination:
    - "Persistent agents use embedded coordination protocols"
    - "Dynamic agents receive coordination guidance"
    - "Integration specialist manages mixed-agent workflow"
    - "All agents work simultaneously with defined sync points"
  ```
  
  **Pattern 2: Capability-Balanced Distribution**
  ```yaml
  distribution_strategy:
    - "Map task components to optimal agent types"
    - "Balance persistent expertise with dynamic flexibility"
    - "Ensure coverage across all capability domains"
    - "Optimize coordination overhead versus capability benefits"
  
  launch_approach:
    - "Simultaneous deployment across all agent types"
    - "Coordinated integration checkpoints"
    - "Real-time coordination adaptation"
    - "Performance monitoring across mixed agent teams"
  ```
  
  **COORDINATION PROTOCOLS:**
  
  **Persistent-to-Persistent Coordination:**
  ```yaml
  pattern: "Use embedded coordination protocols from agent creation"
  communication: "Leverage established integration patterns"  
  synchronization: "Known checkpoint and handoff procedures"
  error_handling: "Established recovery and escalation patterns"
  ```
  
  **Persistent-to-Dynamic Coordination:**
  ```yaml
  pattern: "Persistent provides domain context, dynamic adapts to novel aspects"
  communication: "Enhanced bridging protocols with context transfer"
  synchronization: "Flexible checkpoints accommodating both agent types"
  error_handling: "Hybrid error handling with context-aware recovery"
  ```
  
  **Dynamic-to-Dynamic Coordination:**
  ```yaml
  pattern: "Creative collaboration with organic coordination development"
  communication: "Adaptive communication protocols established dynamically"
  synchronization: "Flexible sync points based on task requirements"
  error_handling: "Creative error recovery with innovative problem-solving"
  ```
  
  **Mixed-Agent Coordination:**
  ```yaml
  pattern: "Integration specialist manages persistent + dynamic collaboration"
  communication: "Unified communication protocols across agent types"
  synchronization: "Comprehensive integration management and conflict resolution"
  error_handling: "Sophisticated error handling across different agent capabilities"
  ```
</parallel_coordination>

## Intelligence Handoff Architecture

<intelligence_handoff>
  **SETUP → WORKFLOW INTELLIGENCE TRANSFER:**
  
  **Pattern A: Direct Persistent Utilization**
  ```yaml
  setup_phase:
    creates: "[domain-specialist]"
    embeds: "Domain expertise + coordination protocols + adaptation patterns"
    
  workflow_phase:  
    discovers: "[domain-specialist]" 
    utilizes: "subagent_type: '[domain-specialist]'"
    leverages: "Embedded expertise + established patterns + context adaptation"
    
  intelligence_flow:
    - "Domain knowledge preserved across sessions"
    - "Coordination protocols automatically available"
    - "Established patterns enable advanced workflow execution"
  ```
  
  **Pattern B: Hybrid Coordination**
  ```yaml
  setup_phase:
    creates: "[core-specialist] + [coordination-patterns]"
    embeds: "Foundation expertise + integration protocols + scaling readiness"
    
  workflow_phase:
    combines: "Persistent core + dynamic adaptation + hybrid coordination"  
    coordinates: "Mixed agent workflow with established foundation"
    scales: "Dynamic specialists with persistent expertise guidance"
    
  intelligence_flow:
    - "Core expertise provides stable foundation"
    - "Dynamic adaptation handles novel requirements"  
    - "Hybrid coordination optimizes both approaches"
  ```
  
  **Pattern C: Enhanced Dynamic Creation**
  ```yaml
  setup_phase:
    creates: "[coordination-templates] + [integration-patterns]"
    embeds: "Coordination intelligence + parallel execution patterns + quality standards"
    
  workflow_phase:
    applies: "Enhanced dynamic creation with established patterns"
    coordinates: "Advanced coordination using setup-created templates"
    optimizes: "Dynamic agent performance through established intelligence"
    
  intelligence_flow:
    - "Coordination templates accelerate dynamic agent effectiveness"
    - "Integration patterns enable sophisticated parallel execution"
    - "Quality standards ensure consistent dynamic agent performance"
  ```
  
  **INTELLIGENCE PRESERVATION MECHANISMS:**
  - **Context Bridging**: Persistent agents maintain domain knowledge across workflow sessions
  - **Pattern Reuse**: Established coordination protocols automatically available to workflow
  - **Expertise Scaling**: Domain expertise enables more sophisticated workflow execution
  - **Coordination Continuity**: Setup-created patterns enhance workflow parallel execution
  - **Quality Consistency**: Established standards maintain quality across agent types
</intelligence_handoff>

## Error Handling Framework

<error_handling>
  **UNIFIED JSON ERROR RESPONSE STRUCTURE:**
  ```json
  {
    "type": "agent_selection_error|agent_coordination_error|agent_adaptation_error",
    "agent": "[agent-name-or-planned-name]",
    "selection_context": {
      "task_component": "[component-description]",
      "scoring_results": {
        "domain_match": "[score]/100",
        "adaptation_capability": "[score]/100", 
        "parallel_compatibility": "[score]/100",
        "coordination_intelligence": "[score]/100",
        "total_score": "[score]/100"
      },
      "selection_strategy": "[direct_persistent|adapted_persistent|hybrid|dynamic_preferred|pure_dynamic]"
    },
    "error": {
      "type": "[discovery_failure|scoring_error|coordination_conflict|adaptation_failure]",
      "message": "Clear description of the selection or coordination issue",
      "details": "Context about scoring, discovery, or coordination challenges",
      "suggestions": [
        "Alternative agent selection strategy",
        "Hybrid approach recommendation", 
        "Dynamic creation with specific guidance"
      ]
    },
    "coordination": {
      "affected_agents": ["agent-1", "agent-2"],
      "integration_points": ["checkpoint-1", "checkpoint-2"],
      "recovery_protocol": "Coordination recovery steps for mixed agent workflows"
    }
  }
  ```
  
  **RECOVERY STRATEGIES:**
  
  **Agent Discovery Failures:**
  ```yaml
  issue: "No suitable persistent agents found"
  recovery: 
    - "Fall back to dynamic agent creation with enhanced context"
    - "Use hybrid approach with partial-match persistent agents"
    - "Create coordination specialist to manage pure dynamic team"
  ```
  
  **Context Adaptation Failures:**  
  ```yaml
  issue: "Persistent agent cannot adapt to context requirements"
  recovery:
    - "Switch to hybrid approach with dynamic adaptation support"
    - "Enhance context guidance with specific adaptation prompts"
    - "Create integration specialist to bridge context gaps"
  ```
  
  **Coordination Integration Failures:**
  ```yaml
  issue: "Mixed agent types cannot coordinate effectively"
  recovery:
    - "Deploy integration specialist for mixed-agent coordination"
    - "Adjust coordination protocols for agent type compatibility"
    - "Fall back to sequential execution with explicit handoffs"
  ```
</error_handling>

## Performance Optimization

<performance_optimization>
  **AGENT REUSE EFFICIENCY PATTERNS:**
  
  **Intelligent Agent Caching:**
  ```yaml
  capability_indexing:
    - "Domain expertise mapping for quick pattern matching"
    - "Workflow template caching for established coordination patterns"  
    - "Performance metrics tracking for agent selection optimization"
    - "Context adaptation history for improved future matching"
    
  reuse_optimization:
    - "Capability score caching to avoid repeated analysis"
    - "Context adaptation template reuse for similar scenarios"
    - "Coordination pattern template application for known workflows"
    - "Performance history integration for agent selection decisions"
  ```
  
  **Load Balancing Across Agent Types:**
  ```yaml
  workload_distribution:
    persistent_optimization:
      - "Leverage established expertise for maximum efficiency"
      - "Utilize proven coordination patterns to minimize overhead"
      - "Apply domain knowledge for accelerated execution"
      
    dynamic_optimization:
      - "Handle novel requirements requiring maximum flexibility"
      - "Provide creative adaptation for unique contexts"
      - "Enable experimental approaches for innovation"
      
    hybrid_optimization:
      - "Balance established patterns with adaptive requirements"
      - "Optimize handoffs between persistent and dynamic agents"
      - "Maximize benefits of both agent types through intelligent coordination"
  ```
  
  **Selection Performance Metrics:**
  ```javascript
  performance_tracking = {
    execution_efficiency: {
      persistent_agent_speed: "Average task completion time for persistent agents",
      dynamic_creation_overhead: "Time cost of creating new dynamic agents",
      hybrid_coordination_cost: "Additional overhead for mixed agent workflows"
    },
    
    quality_metrics: {
      domain_expertise_accuracy: "Quality of results from domain-matched persistent agents", 
      adaptation_effectiveness: "Success rate of context adaptations",
      coordination_seamlessness: "Integration quality between agent types"
    },
    
    resource_optimization: {
      agent_reuse_rate: "Percentage of tasks using persistent vs dynamic agents",
      coordination_overhead: "Resource cost of managing mixed agent workflows",
      parallelization_efficiency: "Effective parallel execution across agent types"
    }
  }
  ```
</performance_optimization>

## Integration Standards

<integration_standards>
  **COMMAND INTEGRATION REQUIREMENTS:**
  
  **For Setup Command (`@guideline/templates/setup-command.md`):**
  - Reference this module for all agent creation patterns
  - Embed intelligence markers in created agents using standard metadata format
  - Apply 4-sentence description standard consistently  
  - Create agents with coordination readiness for future workflow discovery
  
  **For Workflow Command (`@guideline/templates/workflow-command.md`):**
  - Execute discovery protocol before any agent creation
  - Apply scoring system for all agent selection decisions
  - Use appropriate adaptation template based on score ranges
  - Implement hybrid coordination when optimal
  
  **INTELLIGENCE MARKERS FOR AGENT CREATION:**
  ```html
  <!-- INTELLIGENCE_SOURCE: core/subagent-invocation.md -->
  <!-- PERSISTENT_AGENT: [domain-type] -->
  <!-- COORDINATION_READY: parallel-enabled -->
  <!-- SCORING_COMPATIBLE: [scoring-range] -->
  <!-- ADAPTATION_LEVEL: [high|medium|low] -->
  ```
  
  **CROSS-MODULE DEPENDENCIES:**
  - **Agents** (`core/agents.md`): References this module for all invocation patterns
  - **Workflow** (`core/workflow.md`): Uses discovery and coordination protocols
  - **Verification** (`core/verification.md`): Applies to agent team quality assurance
  - **Template Usage** (`core/template-usage.md`): Agent templates follow adaptation patterns
</integration_standards>

## Best Practices

<best_practices>
  **DISCOVERY EXCELLENCE:**
  - Always scan for persistent agents before creating dynamic alternatives
  - Apply systematic scoring to every agent selection decision  
  - Use context adaptation templates appropriately based on scores
  - Document agent selection rationale for learning and improvement
  
  **COORDINATION OPTIMIZATION:**
  - Design hybrid workflows when persistent + dynamic combination optimal
  - Establish integration checkpoints for mixed agent type coordination
  - Monitor coordination effectiveness and adjust patterns as needed
  - Preserve coordination intelligence for future workflow sessions
  
  **QUALITY ASSURANCE:**
  - Validate agent selection against task requirements systematically
  - Ensure all agents meet 4-sentence description standard
  - Verify coordination protocols are appropriate for agent mix
  - Track performance metrics for continuous improvement
  
  **INTELLIGENCE EVOLUTION:**
  - Capture successful adaptation patterns for future reuse
  - Document coordination innovations for template enhancement
  - Integrate lessons learned into scoring and selection algorithms
  - Maintain performance history for improved future agent selection
</best_practices>

---

**Dependencies**: 
- **Core Modules**: `agents.md` (references for implementation), `workflow.md` (coordination patterns), `verification.md` (quality standards)
- **Templates**: `setup-command.md` (agent creation), `workflow-command.md` (agent utilization)
- **Framework**: `@guideline/guide/framework.md` (execution principles)

**Provides Intelligence For**:
- Agent discovery and selection across all commands
- Persistent agent utilization optimization  
- Hybrid coordination architecture design
- Context adaptation and intelligence handoff patterns
- Performance optimization and quality assurance standards