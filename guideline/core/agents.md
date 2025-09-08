# Intelligent Agent Management

## Purpose
Use Claude's native intelligence to determine when to create dynamic specialists or use persistent agents, with integrated verification requirements.

## Enhanced Subagent Invocation Strategy

<subagent_strategy>
  **INTELLIGENCE-DRIVEN SUBAGENT COORDINATION:**
  
  **PRIMARY INTELLIGENCE SOURCE:** `@guideline/core/subagent-invocation.md`
  This module provides comprehensive subagent invocation patterns:
  - Persistent agent discovery protocol with systematic scanning and metadata extraction
  - Agent scoring system (85-100 direct, 70-84 adapted, 55-69 hybrid, <40 dynamic)
  - Context adaptation templates for each score range
  - Hybrid coordination architecture for mixed agent types
  - Intelligence handoff patterns from setup to workflow commands
  
  **ENHANCED SUBAGENT UTILIZATION INTEGRATION:**
  - **SYSTEMATIC DISCOVERY**: Reference `subagent-invocation.md` for comprehensive discovery protocol
  - **INTELLIGENT MATCHING**: Apply scoring system from `subagent-invocation.md` for optimal agent selection
  - **PERFORMANCE OPTIMIZATION**: Leverage established coordination patterns and context adaptation templates
  - **HYBRID WORKFLOW INTELLIGENCE**: Use mixed agent type coordination from consolidated intelligence source

  **PROACTIVE CREATION WITH INTELLIGENT SELECTION:**
  - Execute discovery protocol BEFORE creating any dynamic agents
  - Apply systematic scoring to determine optimal agent mix (persistent vs dynamic vs hybrid)
  - Use context adaptation templates based on agent scores
  - Implement hybrid coordination when persistent + dynamic combination optimal
  - Create dynamic agents only when scoring indicates optimal strategy
</subagent_strategy>

## Proactive Parallel Creation Framework

<proactive_approach>
  **MANDATORY PROACTIVE ANALYSIS:**
  FIRST: How many specialists can I create simultaneously? PRIORITY: What parallel batches are possible? DEFAULT: Create multiple specialists unless coordination prevents it. ASSUMPTION: More specialists = better parallelization until proven otherwise.
  
  **DECISION FRAMEWORK:**
  For each task component: Can this be done independently? Can multiple specialists work simultaneously? What coordination needed? Dynamic or persistent? How to batch for parallel execution? DEFAULT: Create specialist for each independent work unit.
  
  **BATCHING PATTERNS:**
  Layer-Based: Frontend + Backend + Database (simultaneous) | Feature-Based: Feature-A + Feature-B + Feature-C (simultaneous) | Domain-Based: Auth + Data + UI + Test (simultaneous)
  RULE: Default to maximum parallel specialist creation
</proactive_approach>

## Dynamic Specialist Creation

<dynamic_creation>
  **INTELLIGENT DYNAMIC CREATION INTEGRATION:** `@guideline/core/subagent-invocation.md`
  
  **DYNAMIC CREATION DECISION FRAMEWORK:**
  Dynamic specialist creation is applied when persistent agent discovery and scoring indicates it as the optimal strategy:
  - **PURE DYNAMIC (Score <40)**: No suitable persistent agents, maximum flexibility required
  - **DYNAMIC PREFERRED (Score 40-54)**: Dynamic leads with optional persistent consultation
  - **HYBRID DYNAMIC COMPONENT (Score 55-69)**: Dynamic specialists complement persistent expertise
  
  **CREATION CRITERIA INTEGRATION:**
  Reference consolidated intelligence for:
  - Systematic agent selection decision matrix from `subagent-invocation.md`
  - Context adaptation requirements and creative problem-solving needs
  - Parallel execution opportunities with coordination protocol design
  - Novel requirement handling requiring maximum flexibility and innovation
  
  **ENHANCED CREATION PROCESS:**
  1. **DISCOVERY FIRST**: Execute persistent agent discovery protocol before dynamic creation
  2. **SCORING APPLICATION**: Apply systematic scoring to validate dynamic creation as optimal strategy  
  3. **TEMPLATE SELECTION**: Use appropriate dynamic creation template based on context requirements
  4. **COORDINATION DESIGN**: Implement coordination protocols for dynamic agents (pure or hybrid)
  5. **QUALITY INTEGRATION**: Apply 4-sentence description standard from consolidated intelligence
  
  **UNIFIED DESCRIPTION STANDARD:** `@guideline/core/subagent-invocation.md`
  All agents (persistent and dynamic) must follow the 4-sentence description standard:
  1. Specialized Purpose (Tool Use Implementation compliance)
  2. Intelligent Coordination (when to use vs others, adaptive reasoning)
  3. Context Boundaries (limitations, structured JSON error handling)
  4. Expected Outcomes (deliverables through context-aware decision making)
  
  **VERIFICATION REQUIREMENTS INTEGRATION:** `@guideline/core/verification.md`
  Every specialist MUST include comprehensive verification integration:
  - Success criteria with systematic assessment approaches
  - Gap detection capabilities for parallel work streams
  - Integration checks with other specialists and coordination protocols
  - Structured reporting format with JSON error handling
  - Iteration instructions for continuous improvement
</dynamic_creation>

## Enhanced Persistent Agent Framework

<persistent_agents>
  **CONSOLIDATED PERSISTENT AGENT INTELLIGENCE:** `@guideline/core/subagent-invocation.md`
  
  **CORE PERSISTENT AGENT CAPABILITIES:**
  All persistent agent discovery, scoring, selection, and coordination patterns are consolidated in the subagent-invocation module. Key capabilities include:
  
  **Intelligent Discovery & Selection:**
  - Comprehensive agent inventory with metadata extraction
  - Systematic scoring system: 85-100 (direct), 70-84 (adapted), 55-69 (hybrid), <40 (dynamic)
  - Context adaptation assessment and parallel execution compatibility analysis
  - Performance optimization through established domain expertise reuse
  
  **Advanced Coordination Patterns:**
  - Direct persistent utilization for high-match scenarios (85-100 score)
  - Context-adapted persistent for medium-match scenarios (70-84 score)  
  - Hybrid approaches combining persistent expertise with dynamic flexibility (55-69 score)
  - Enhanced error handling and recovery strategies across all agent types
  
  **Intelligence Handoff Architecture:**
  - Setup → Workflow intelligence transfer patterns
  - Context bridging and pattern reuse mechanisms
  - Expertise scaling and coordination continuity
  - Performance optimization through agent reuse and caching
  
  **IMPLEMENTATION REFERENCE:**
  - See `@guideline/core/subagent-invocation.md` for complete discovery protocol
  - Apply scoring system and adaptation templates from consolidated intelligence
  - Use hybrid coordination patterns for mixed agent type workflows
  - Implement intelligence handoff patterns for setup → workflow coordination
</persistent_agents>

## Specialist Decision Framework

<decision_framework>
  **MANDATORY PARALLEL-FIRST ANALYSIS:**
  For each component: What independent work units exist? How many specialists can work simultaneously? How to batch for parallel creation? What coordination needed? Dynamic or persistent? How to handle verification? What merge/handoff requirements?
  
  **CREATION DECISIONS:**
  ALWAYS CREATE: Independent work units (AUTOMATIC), parallel execution possible (MANDATORY multiple), different expertise domains (AUTOMATIC domain specialists), separate technology layers (AUTOMATIC layer specialists), multiple features (AUTOMATIC feature specialists)
  
  USE PERSISTENT: Standardized processes with existing agents, team consistency needs, recurring patterns with proven templates, complex captured domain knowledge
  
  DEFAULT: Create dynamic specialists aggressively, use persistent strategically
  
  **COORDINATION PROTOCOL:**
  Create in parallel batches, define integration contracts upfront, establish handoff procedures, plan merge checkpoints, design conflict resolution, coordinate verification, synchronize delivery
</decision_framework>

## Specialist Coordination Architecture

<coordination_architecture>
  **ADVANCED PARALLEL SPECIALIST MANAGEMENT:**
  Execute comprehensive agent discovery and intelligence assessment, create optimal mix of persistent and dynamic specialists for each work unit, batch creation for maximum efficiency across mixed agent types, coordinate hybrid integration contracts explicitly, design non-blocking collaboration between established and adaptive approaches, enable maximum concurrent execution with seamless persistent-dynamic coordination, synchronize results and integration across all agent types.
  
  **ENHANCED BATCHING STRATEGIES:**
  
  **Strategy 1: Hybrid Simultaneous Creation**
  - Launch persistent agents (high-match) + dynamic specialists (novel aspects) + coordination specialists simultaneously
  - Coordinate integration upfront with established patterns and adaptive approaches
  - Process results together with intelligence bridging across agent types
  
  **Strategy 2: Foundation-First Coordinated Waves** 
  - Wave 1: Persistent domain experts (established expertise foundation)
  - Wave 2: Dynamic adaptation specialists (novel requirement coverage) 
  - Wave 3: Hybrid integration and verification specialists
  
  **Strategy 3: Intelligent Load-Balanced Distribution**
  - Parallel deployment across all agent types with workload optimization
  - Real-time coordination adjustment based on agent type performance
  - Adaptive scaling of dynamic specialists while maintaining persistent foundation
  
  DEFAULT: Hybrid simultaneous creation unless coordination complexity requires foundation-first waves
  
  **ADVANCED COORDINATION DESIGN:**
  
  **Mixed Agent Type Coordination Protocols:**
  - **PERSISTENT-TO-PERSISTENT**: Leverage embedded coordination protocols and established integration patterns
  - **PERSISTENT-TO-DYNAMIC**: Enhanced bridging protocols with domain context transfer and adaptive guidance
  - **DYNAMIC-TO-PERSISTENT**: Novel requirement specification with domain expertise application handoffs
  - **HYBRID INTEGRATION**: Comprehensive coordination management across all agent types with conflict resolution
  
  **Integration Architecture:**
  - Define interfaces between specialists upfront with agent-type-specific considerations
  - Establish communication protocols optimized for mixed persistent-dynamic workflows
  - Create integration checkpoints with success criteria across different agent capabilities
  - Design conflict resolution procedures for established vs adaptive approach differences
  - Plan verification approach across domain expertise and novel adaptation areas
  - Coordinate final delivery with seamless integration of all agent contributions
  
  **Performance Optimization Patterns:**
  - **AGENT REUSE EFFICIENCY**: Leverage persistent agent capabilities for maximum domain expertise utilization
  - **COORDINATION OVERHEAD MINIMIZATION**: Optimize handoffs between established patterns and novel approaches
  - **PARALLEL EXECUTION MAXIMIZATION**: Enable concurrent work across all agent types with intelligent synchronization
  - **ADAPTIVE SCALING**: Dynamic specialist scaling while maintaining persistent expertise foundation
</coordination_architecture>

## Tool Use Implementation Standards

<tool_use_standards>
  **CONSOLIDATED TOOL USE INTELLIGENCE:** `@guideline/core/subagent-invocation.md`
  
  **UNIFIED SPECIALIST DESCRIPTION STANDARD (4 sentences MANDATORY):**
  All agent descriptions must follow the consolidated 4-sentence structure:
  
  **1. Specialized Purpose:**
  - Primary function and unique capabilities with Tool Use Implementation compliance
  - Core domain expertise identification with performance optimization focus
  - Specific capability areas and problem-solving approaches
  
  **2. Intelligent Coordination:**
  - When to use versus other agents with adaptive reasoning emphasis
  - Coordination through creative problem-solving and organic collaboration
  - Intelligent versus template-driven approaches with context awareness
  
  **3. Context Boundaries:**
  - Important limitations and domain boundaries clearly defined
  - Structured JSON error handling requirements with recovery strategies
  - Context-aware decision making needs and adaptation requirements
  
  **4. Expected Outcomes:**
  - Deliverables through context-aware decision making and intelligent integration
  - Integration with parallel specialists and coordination protocols
  - Innovative insights beyond standard approaches with continuous learning
  
  **ERROR HANDLING INTEGRATION:** `@guideline/core/subagent-invocation.md`
  Unified JSON error response structure for all agents:
  ```json
  {
    "type": "agent_error",
    "agent": "[agent-name]",
    "error": {
      "type": "[category]",
      "message": "Clear failure description",
      "details": "Context/debugging info", 
      "suggestions": ["Recovery option 1", "Recovery option 2"]
    },
    "coordination": {
      "affected_agents": ["agent-1", "agent-2"],
      "recovery_protocol": "Coordination recovery steps for mixed agent workflows"
    }
  }
  ```
  
  **CREATION TRIGGER INTEGRATION:**
  Systematic triggers reference consolidated intelligence:
  - Domain expertise needs → Apply discovery protocol and scoring system
  - Parallel work identification → Use coordination patterns from subagent-invocation
  - Complex coordination requirements → Apply hybrid coordination templates
  - Deep analysis needs → Reference context adaptation requirements
  - Quality assurance integration → Apply verification standards from verification.md
  
  **INTELLIGENCE MARKERS FOR AGENTS:**
  All created agents must include standardized intelligence markers:
  ```html
  <!-- INTELLIGENCE_SOURCE: core/subagent-invocation.md -->
  <!-- PERSISTENT_AGENT: [domain-type] -->
  <!-- COORDINATION_READY: parallel-enabled -->
  <!-- SCORING_COMPATIBLE: [scoring-range] -->
  <!-- ADAPTATION_LEVEL: [high|medium|low] -->
  ```
  
  **PRINCIPLE**: Systematic triggers ensure comprehensive coverage through consolidated intelligence, native intelligence optimizes execution through established patterns
</tool_use_standards>

## Verification Integration

<verification_integration>
  All agents (dynamic or persistent) MUST:
  - Check their work for completeness using systematic approaches
  - Report gaps found through parallel gap detection
  - Suggest fixes for issues using reasoning capabilities
  - Verify integration points across parallel work streams
  - Confirm success criteria met across all verification domains
  
  **CRITICAL NO AUTO-PERSIST FOR AGENTS:**
  - **ANALYSIS ONLY IN CONVERSATION**: All agent analysis and findings presented in chat, never auto-saved
  - **NO AUTOMATIC SPECIALIST REPORTS**: Agent outputs remain in conversation unless user requests file creation
  - **USER CONTROLS PERSISTENCE**: Only create files when user explicitly asks for specific outputs
  - **CLEAN AGENT EXECUTION**: Agents run without creating unwanted filesystem artifacts
</verification_integration>

## Best Practices

<best_practices>
  **PROACTIVE CREATION:**
  DEFAULT to aggressive specialist creation for maximum parallelization, apply decision matrix to EVERY component, use decomposition methodology to identify ALL opportunities, batch for parallel efficiency, design integration architecture upfront
  
  **DECISION OPTIMIZATION:**
  Speed priority - don't overthink, prefer dynamic specialists for flexibility, use persistent for standardized processes, apply framework consistently
  
  **MANDATORY REQUIREMENTS:**
  ALWAYS provide comprehensive context and coordination requirements, include verification and gap detection, design integration procedures, include coordination protocols
  
  **EXECUTION OPTIMIZATION:**
  Batch creation for efficiency, design explicit coordination protocols, plan integration checkpoints upfront, include parallel verification capabilities, build remediation into coordination
</best_practices>

## Enhanced Examples with Persistent Agent Integration

<examples>
  **Enhanced Hybrid Authentication Example:** "Add authentication to API"
  ```yaml
  # AGENT DISCOVERY RESULTS:
  # Found: existing-auth-specialist (score: 88, high domain match)
  # Found: security-audit-specialist (score: 76, medium coordination match)
  # Missing: Frontend integration, Modern framework adaptation
  
  # HYBRID BATCH DEPLOYMENT:
  - subagent_type: "existing-auth-specialist"  # PERSISTENT AGENT
    description: "Leveraging established authentication expertise with proven JWT implementation patterns and security coordination protocols. This specialist brings deep authentication domain mastery, established API security patterns, and seamless backend coordination for parallel execution. Expected to deliver exceptional authentication functionality through domain expertise while adapting to current tech stack requirements."
    prompt: |
      CONTEXT ADAPTATION FRAMEWORK:
      - Current tech stack: [Node.js/Express/MongoDB]
      - Integration requirements: [Frontend auth flows, API middleware]
      - Coordination architecture: [Frontend specialist, Database specialist]
      - Adaptive success criteria: [Modern auth patterns, mobile-ready implementation]
      
  - subagent_type: "security-audit-specialist"  # PERSISTENT AGENT  
    description: "Adapting established security audit expertise to authentication implementation oversight with enhanced coordination for parallel development workflow. This specialist bridges proven security assessment patterns with novel authentication architecture through intelligent collaboration with implementation specialists."
    prompt: |
      ADAPTIVE BRIDGE FRAMEWORK:
      - Core strength: Security vulnerability assessment and compliance
      - Adaptation target: Real-time authentication implementation review
      - Enhanced coordination: Parallel oversight with auth and frontend specialists
      
  - subagent_type: "general-purpose"  # DYNAMIC CREATION
    description: "Frontend authentication integration specialist handling modern React patterns with seamless backend coordination. This specialist provides maximum flexibility for current frontend architecture while leveraging established auth patterns through intelligent collaboration with persistent authentication expert. Expected to deliver modern, user-friendly auth flows through creative adaptation of proven backend patterns."
    
  - subagent_type: "general-purpose"  # HYBRID COORDINATION
    description: "Authentication workflow coordinator managing collaboration between persistent auth expert, security specialist, and dynamic frontend specialist. This coordinator bridges established authentication patterns with modern frontend requirements, facilitates knowledge transfer between agent types, and ensures seamless integration across the authentication system."
  ```
  
  **Enhanced Code Quality Review Example:** "Comprehensive codebase quality assessment"
  ```yaml  
  # AGENT DISCOVERY RESULTS:
  # Found: code-reviewer-agent (score: 92, excellent match for standards)
  # Found: performance-audit-specialist (score: 81, good technical analysis match)
  # Found: security-scanner-agent (score: 85, high security review match)
  # Missing: Modern framework-specific patterns, Accessibility assessment
  
  # PERSISTENT-FIRST BATCH DEPLOYMENT:
  - subagent_type: "code-reviewer-agent"  # PERSISTENT AGENT
    description: "Leveraging established code quality assessment expertise with proven review methodologies and comprehensive standards compliance protocols."
    prompt: "Apply your established quality patterns to [specific codebase context] with focus on [current priorities]. Coordinate findings with performance and security specialists."
    
  - subagent_type: "performance-audit-specialist"  # PERSISTENT AGENT
    description: "Utilizing proven performance analysis patterns adapted for current codebase architecture and technology stack."
    
  - subagent_type: "security-scanner-agent"  # PERSISTENT AGENT  
    description: "Applying established security scanning methodologies with coordination across quality and performance review streams."
    
  - subagent_type: "general-purpose"  # DYNAMIC FOR NOVEL ASPECTS
    description: "Modern framework accessibility specialist providing cutting-edge a11y assessment not covered by existing agents, with coordination across established quality review patterns."
  ```
  
  **Advanced User Management Implementation:** "Complete user management system"
  ```yaml
  # COMPREHENSIVE AGENT DISCOVERY & HYBRID ARCHITECTURE:
  # Persistent Agents Found: backend-api-specialist (90), database-schema-expert (87), testing-coordinator (82)
  # Dynamic Needs: Modern frontend patterns, Advanced permissions, Real-time features
  
  # SIMULTANEOUS HYBRID DEPLOYMENT (8 specialists):
  - subagent_type: "backend-api-specialist"     # PERSISTENT (CRUD operations)
  - subagent_type: "database-schema-expert"    # PERSISTENT (User data modeling)  
  - subagent_type: "testing-coordinator"       # PERSISTENT (Test strategy oversight)
  - subagent_type: "general-purpose"           # DYNAMIC (Modern React UI patterns)
  - subagent_type: "general-purpose"           # DYNAMIC (Advanced permission system)
  - subagent_type: "general-purpose"           # DYNAMIC (Real-time user features)
  - subagent_type: "general-purpose"           # DYNAMIC (Integration testing execution)
  - subagent_type: "general-purpose"           # HYBRID COORDINATION (Persistent + Dynamic orchestration)
  
  # COORDINATION ARCHITECTURE:
  # - Persistent agents provide domain expertise foundation
  # - Dynamic agents handle novel/modern requirements  
  # - Hybrid coordinator manages seamless integration
  # - All specialists work in parallel with defined integration checkpoints
  ```
  
  **Performance Comparison Example:**
  ```markdown
  ## Agent Selection Performance Impact
  
  **TRADITIONAL APPROACH (All Dynamic Creation):**
  - 6 specialists × 30s creation overhead = 3 minutes setup time
  - No domain expertise foundation = Higher implementation risk  
  - No established coordination patterns = Higher integration overhead
  
  **ENHANCED HYBRID APPROACH (Persistent + Dynamic):**
  - 3 persistent agents (instant deployment) + 3 dynamic specialists = 1.5 minutes setup time  
  - Established domain expertise foundation = Lower implementation risk
  - Proven coordination patterns + novel adaptation = Optimal integration efficiency
  
  **PERFORMANCE GAIN:** 50% faster deployment with higher quality and lower risk
  ```
</examples>