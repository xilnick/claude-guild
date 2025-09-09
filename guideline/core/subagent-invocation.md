# Subagent Invocation Intelligence - Guild System

## Purpose
Central reference for subagent invocation patterns, discovery protocols, scoring systems, and coordination architectures. Provides unified intelligence for setup and workflow commands.

## Core Philosophy
**Fundamental Principle**: Optimize agent selection through intelligent assessment combining persistent expertise with dynamic flexibility.

**AGENT TYPES:**
- **Persistent Agents**: Established domain expertise and proven coordination patterns
- **Dynamic Agents**: Creative adaptation and novel requirement handling  
- **Hybrid Coordination**: Intelligent integration of persistent + dynamic approaches
- **Intelligent Selection**: Systematic scoring and context analysis for optimal choice

## Persistent Agent Discovery Protocol

<discovery_protocol>
  **MANDATORY PRE-EXECUTION SEQUENCE:**
  
  **Discovery Process:**
  1. **Directory Scan**: Recursively scan `.claude/agents/guild/` for available agents
  2. **Metadata Extract**: Parse agent files for capability markers and intelligence indicators  
  3. **Capability Assessment**: Map domains, patterns, coordination readiness, adaptation flexibility
  
  **Metadata Markers Template:**
  ```html
  <!-- PERSISTENT_AGENT_METADATA:
    domain: "[primary-expertise]", secondary_domains: ["area1", "area2"],
    coordination_protocols: ["protocol1"], parallel_ready: true/false,
    adaptation_level: "high|medium|low", success_patterns: ["context1"]
  -->
  ```
</discovery_protocol>

## Agent Selection Scoring System

<scoring_system>
  **INTELLIGENT AGENT ROUTING DECISION:**
  
  **Scoring Formula:**
  ```
  TOTAL_SCORE = domain_match(40%) + adaptation_capability(30%) + parallel_compatibility(20%) + coordination_intelligence(10%)
  ```
  
  **Score Ranges & Actions:**
  - **85-100**: Direct persistent utilization (exact domain match, high adaptation)
  - **70-84**: Context-adapted persistent (strong overlap, medium adaptation) 
  - **55-69**: Hybrid coordination (partial match, coordination needed)
  - **40-54**: Dynamic preferred (minimal match, major adaptation)
  - **<40**: Pure dynamic creation (no meaningful alignment)

</scoring_system>

## Agent Selection Decision Thresholds

<decision_thresholds>
  **SELECTION STRATEGY BY SCORE:**
  - **85-100**: Direct persistent utilization with minimal adaptation
  - **70-84**: Context-adapted persistent with enhancement guidance
  - **55-69**: Hybrid coordination combining persistent + dynamic
  - **40-54**: Dynamic preferred with optional persistent consultation  
  - **<40**: Pure dynamic creation for maximum flexibility
</decision_thresholds>

## Context Adaptation Templates

<adaptation_templates>
  **TEMPLATE STRUCTURE (4-sentence standard):**
  1. **Specialized Purpose**: Domain expertise + unique capabilities + Tool Use Implementation compliance
  2. **Intelligent Coordination**: When to use vs other agents + adaptive reasoning + creative problem-solving  
  3. **Context Boundaries**: Important limitations + structured JSON error handling + domain boundaries
  4. **Expected Outcomes**: Deliverables + context-aware decision making + parallel specialist integration
  
  **ADAPTATION BY SCORE:**
  - **85-100**: [template-direct-persistent] Leverage established patterns with minimal context adaptation
  - **70-84**: [template-adapted-persistent] Domain expertise enhanced with context-specific guidance
  - **55-69**: [template-hybrid-coordination] Mixed persistent + dynamic with integration specialist
  - **40-54**: [template-dynamic-preferred] Dynamic leadership with optional persistent consultation
  - **<40**: [template-pure-dynamic] Full dynamic creation with maximum flexibility
</adaptation_templates>

## Unified Agent Description Standard

<description_standard>
  **MANDATORY 4-SENTENCE STRUCTURE:**
  1. **Specialized Purpose**: Primary function + capabilities + Tool Use Implementation compliance
  2. **Intelligent Coordination**: When to use vs other agents + adaptive reasoning + creative problem-solving
  3. **Context Boundaries**: Limitations + structured JSON error handling + domain boundaries  
  4. **Expected Outcomes**: Deliverables + context-aware decisions + parallel specialist integration
  
  **TEMPLATE:** `[Domain] specialist with [capability], coordinates through [methods], includes [error-handling] limited to [boundaries], delivers [outcomes] with [innovation-level].`
</description_standard>

## Parallel Execution Coordination

<parallel_coordination>
  **COORDINATION PATTERNS:**
  - **Persistent-to-Persistent**: Use embedded coordination protocols and known checkpoints
  - **Persistent-to-Dynamic**: Persistent provides context, dynamic adapts with bridging protocols
  - **Dynamic-to-Dynamic**: Creative collaboration with organic coordination development
  - **Mixed-Agent**: Integration specialist manages unified protocols across agent types
</parallel_coordination>

## Intelligence Handoff Architecture

<intelligence_handoff>
  **SETUP → WORKFLOW INTELLIGENCE TRANSFER:**
  
  **HANDOFF PATTERNS:**
  - **Direct Persistent**: [template-setup-creates] → [template-workflow-discovers] → Direct utilization
  - **Hybrid Coordination**: [template-setup-mixed] → [template-workflow-coordinates] → Mixed agent workflow
  - **Enhanced Dynamic**: [template-setup-templates] → [template-workflow-applies] → Template-enhanced creation
  
  **INTELLIGENCE PRESERVATION:**
  - [preserve-context] Domain knowledge across sessions
  - [preserve-patterns] Coordination protocols availability  
  - [preserve-expertise] Advanced execution capabilities
  - [preserve-quality] Consistent standards across agent types
</intelligence_handoff>

## Error Handling Framework

<error_handling>
  **JSON ERROR STRUCTURE:** `[template-error-json]` with type, agent, selection_context, error details, coordination context
  
  **RECOVERY STRATEGIES:**
  - **Discovery Failures**: [recovery-discovery] Dynamic fallback + hybrid approaches + coordination specialists
  - **Adaptation Failures**: [recovery-adaptation] Enhanced context + integration specialists + hybrid coordination  
  - **Coordination Failures**: [recovery-coordination] Integration specialists + protocol adjustments + sequential fallback
</error_handling>

## Performance Optimization

<performance_optimization>
  **OPTIMIZATION PATTERNS:**
  - **Agent Caching**: [cache-capabilities] Domain mapping + template caching + metrics tracking + adaptation history
  - **Load Balancing**: [balance-workload] Persistent efficiency + dynamic flexibility + hybrid coordination
  - **Performance Metrics**: [track-performance] Execution efficiency + quality metrics + resource optimization
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

## Intelligence Reporting Requirements

<intelligence_reporting_requirements>
  **MANDATORY REPORTING STANDARDS:** `@guideline/core/intelligence-metrics.md` + `@guideline/core/intelligence-tracker.md`
  
  **SETUP COMMAND REPORTING:**
  - [report-agent-creation] Agent name, domain, scoring compatibility, metadata completeness
  - [report-intelligence-embedding] Discovery metadata, coordination templates, compliance verification
  - [report-session-summary] Total agents, domain coverage, handoff preparation quality
  
  **WORKFLOW COMMAND REPORTING:**
  - [report-discovery] Agent count, execution time, metadata quality, scoring effectiveness
  - [report-selection] Selection decisions, strategies, rationale, alternatives considered
  - [report-utilization] Assignments success, adaptations, challenges, performance outcomes
  - [report-handoff-assessment] Intelligence utilization, adaptation effectiveness, optimization achieved
  
  **CROSS-COMMAND INTELLIGENCE FLOW:**
  - [track-intelligence-transfer] Setup to workflow handoff completeness and quality
  - [track-feedback-loop] Workflow to setup insights and improvement opportunities
  - [track-framework-evolution] Pattern discoveries, innovations, enhancement methods
</intelligence_reporting_requirements>

## Quantitative Performance Metrics

<quantitative_metrics>
  **INTELLIGENCE-DRIVEN MEASUREMENT:** `@guideline/core/intelligence-metrics.md`
  
  **AGENT SELECTION METRICS:**
  - [track-score-accuracy] Predicted vs actual performance correlation by score range
  - [track-selection-optimization] Optimal selection rate, decision quality consistency
  
  **UTILIZATION ANALYTICS:**
  - [track-agent-roi] Creation vs utilization metrics, domain performance analysis
  - [track-coordination-efficiency] Coordination overhead and bridging efficiency
  - [track-quality-correlation] Score vs outcome analysis and reuse improvement gains
  
  **INTELLIGENCE EVOLUTION:**
  - [track-discovery-improvement] Protocol effectiveness and metadata quality evolution
  - [track-coordination-optimization] Success rate trends and integration efficiency
  - [track-adaptation-refinement] Template effectiveness and customization patterns
</quantitative_metrics>

## Persistent Agent Registry System

<persistent_agent_registry>
  **AGENT TRACKING FRAMEWORK:**
  
  **AGENT LIFECYCLE:**
  - [registry-identification] Name, ID, creation timestamp, creator context
  - [registry-capabilities] Primary domain, coordination protocols, adaptation level
  - [registry-performance] Utilization count, success rate, quality trend
  - [registry-evolution] Intelligence version, adaptations, optimizations
  
  **UTILIZATION ANALYTICS:**
  - [analytics-usage-frequency] Daily/weekly patterns, seasonal trends
  - [analytics-adaptation] Context scenarios, success rates, improvement trends
  - [analytics-coordination] Partner patterns, success combinations, efficiency trends
  
  **OPTIMIZATION RECOMMENDATIONS:**
  - [optimize-enhancement] Performance improvement candidates and impact estimates
  - [optimize-retirement] Decline patterns, alternatives, migration plans
  - [optimize-scaling] High-demand domains, capacity analysis, development priorities
</persistent_agent_registry>

## Intelligence Usage Analytics

<intelligence_usage_analytics>
  **FRAMEWORK UTILIZATION MEASUREMENT:**
  
  **MODULE INTELLIGENCE CONSUMPTION:**
  - [track-discovery-usage] Protocol execution frequency and effectiveness
  - [track-scoring-usage] Scoring frequency, distribution, accuracy correlation
  - [track-coordination-usage] Pattern application frequency and effectiveness
  - [track-template-usage] Template usage by score range and context effectiveness
  
  **CROSS-MODULE INTEGRATION:**
  - [assess-agents-integration] Pattern reference completeness and implementation consistency
  - [assess-workflow-integration] Discovery integration quality and selection pattern alignment
  - [assess-verification-integration] Quality standard alignment and cross-agent verification
  
  **INTELLIGENCE EVOLUTION IMPACT:**
  - [track-pattern-evolution] Successful improvements, failed attempts, adoption rates
  - [track-coordination-optimization] Efficiency improvements and scalability enhancements
  - [track-quality-enhancement] Consistency improvements and error reduction achievements
</intelligence_usage_analytics>

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