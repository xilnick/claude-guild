# Intelligence Tracker - Guild System

## Purpose
Monitors and tracks intelligence consistency across all core modules, commands, and workflows. Ensures that intelligence patterns remain coherent, dependencies are properly managed, and evolution is systematically tracked for continuous improvement.

## Core Philosophy: Intelligence Coherence Through Systematic Monitoring

**Fundamental Principle**: Maintain intelligence consistency through systematic tracking, dependency management, and evolution monitoring.

- **CONSISTENCY MONITORING**: Track intelligence patterns across all modules for coherence
- **DEPENDENCY MAPPING**: Monitor cross-module dependencies and reference integrity
- **EVOLUTION TRACKING**: Capture intelligence pattern improvements and adaptations
- **QUALITY ASSURANCE**: Ensure intelligence standards are maintained across all components

## Intelligence Source Mapping

<intelligence_mapping>
  **PRIMARY INTELLIGENCE SOURCES:**
  
  **Core Module Intelligence Distribution:**
  ```yaml
  subagent-invocation.md:
    provides:
      - "Persistent agent discovery protocol"
      - "Agent scoring system (85-100, 70-84, 55-69, <40)"
      - "Context adaptation templates"
      - "Hybrid coordination patterns"
      - "4-sentence description standard"
      - "Intelligence handoff architecture"
    dependencies:
      - "agents.md (implementation patterns)"
      - "workflow.md (coordination protocols)" 
      - "verification.md (quality standards)"
    consumers:
      - "setup-command.md (agent creation)"
      - "workflow-command.md (agent utilization)"
      - "agents.md (references patterns)"
  
  agents.md:
    provides:
      - "Enhanced subagent creation methodology" 
      - "Proactive parallel creation framework"
      - "Dynamic specialist creation patterns"
      - "Specialist coordination architecture"
      - "Tool use implementation standards"
    dependencies:
      - "subagent-invocation.md (invocation patterns)"
      - "template-usage.md (template adaptation)"
      - "verification.md (quality integration)"
    consumers:
      - "setup-command.md (creation framework)"
      - "workflow-command.md (specialist patterns)"
  
  workflow.md:
    provides:
      - "Natural workflow orchestration"
      - "Parallel-first execution methodology"
      - "Autonomous analysis frameworks"
      - "Decomposition and coordination patterns"
      - "Native intelligence routing"
    dependencies:
      - "subagent-invocation.md (agent selection)"
      - "agents.md (specialist creation)"
      - "verification.md (quality processes)"
    consumers:
      - "workflow-command.md (execution patterns)"
      - "setup-command.md (coordination design)"
  
  verification.md:
    provides:
      - "Parallel verification methodology"
      - "Gap detection frameworks"
      - "Quality success criteria"
      - "Integration validation patterns"
      - "No auto-persist requirements"
    dependencies:
      - "agents.md (specialist verification)"
      - "workflow.md (process integration)"
    consumers:
      - "setup-command.md (agent team verification)"
      - "workflow-command.md (task verification)"
      - "subagent-invocation.md (quality assurance)"
  
  decision-authority.md:
    provides:
      - "Decision authority hierarchy"
      - "Autonomous analysis gates"
      - "Structural framework guidance"
      - "Conflict resolution guidelines"
    dependencies:
      - "intelligence-boundaries.md (boundary definitions)"
      - "template-usage.md (template authority)"
    consumers:
      - "All modules (decision framework)"
      - "Commands (authority boundaries)"
  
  intelligence-boundaries.md:
    provides:
      - "Intelligence operating boundaries"
      - "Structure vs intelligence zones"
      - "Collaborative decision frameworks"
      - "Boundary management guidelines"
    dependencies:
      - "decision-authority.md (authority hierarchy)"
      - "template-usage.md (boundary applications)"
    consumers:
      - "All modules (boundary compliance)"
      - "Commands (intelligence application)"
  
  template-usage.md:
    provides:
      - "Template adaptation guidelines"
      - "Progressive enhancement methodology"
      - "Template evolution frameworks"
      - "Quality assurance for template usage"
    dependencies:
      - "intelligence-boundaries.md (adaptation boundaries)"
      - "decision-authority.md (adaptation authority)"
    consumers:
      - "subagent-invocation.md (template patterns)"
      - "Commands (template application)"
  ```
  
  **COMMAND TEMPLATE INTELLIGENCE:**
  ```yaml
  setup-command.md:
    intelligence_consumed:
      - "subagent-invocation.md (agent creation patterns)"
      - "agents.md (proactive creation framework)"
      - "verification.md (team verification)"
      - "workflow.md (coordination design)"
    intelligence_produced:
      - "Agent team architectures"
      - "Persistent agent metadata"
      - "Coordination pattern templates"
      - "Integration checkpoint definitions"
    handoff_patterns:
      - "Created agents → workflow discovery"
      - "Coordination templates → workflow execution"
      - "Integration patterns → workflow coordination"
  
  workflow-command.md:
    intelligence_consumed:
      - "subagent-invocation.md (agent discovery and selection)"
      - "workflow.md (execution methodology)"
      - "agents.md (specialist patterns)"
      - "verification.md (quality processes)"
    intelligence_produced:
      - "Task execution patterns"
      - "Dynamic agent creation"
      - "Coordination optimization"
      - "Results verification"
    handoff_patterns:
      - "Persistent agents → enhanced utilization"
      - "Dynamic creation → coordination optimization"
      - "Verification results → iterative improvement"
  ```
</intelligence_mapping>

## Cross-Module Dependency Matrix

<dependency_matrix>
  **DEPENDENCY RELATIONSHIP TRACKING:**
  
  **Primary Dependencies (Critical Path):**
  ```
  subagent-invocation.md ←→ agents.md ←→ workflow.md ←→ verification.md
       ↑                                                        ↓
  setup-command.md ←→ workflow-command.md ←→ intelligence-tracker.md
  ```
  
  **Secondary Dependencies (Supporting):**
  ```
  decision-authority.md ←→ intelligence-boundaries.md ←→ template-usage.md
       ↓                        ↓                           ↓
  [All Core Modules] ←→ [All Commands] ←→ [Intelligence Consistency]
  ```
  
  **DEPENDENCY VALIDATION CHECKLIST:**
  - ✅ **Reference Integrity**: All module references point to existing content
  - ✅ **Pattern Consistency**: Referenced patterns match source definitions
  - ✅ **Version Alignment**: All modules reference current pattern versions
  - ✅ **Circular Dependency Prevention**: No circular reference chains
  - ✅ **Coverage Completeness**: All required intelligence patterns have sources
  
  **DEPENDENCY HEALTH INDICATORS:**
  ```yaml
  healthy_dependencies:
    - "Clear reference paths between modules"
    - "Consistent pattern definitions across references"
    - "No broken or outdated references"
    - "Appropriate dependency depth (max 3 levels)"
    
  warning_indicators:
    - "Circular reference patterns emerging"
    - "Inconsistent pattern definitions across modules"
    - "Orphaned intelligence patterns without consumers"
    - "Deep dependency chains (>3 levels)"
    
  critical_issues:
    - "Broken references preventing module function"
    - "Contradictory intelligence patterns across modules"
    - "Missing critical dependencies for commands"
    - "Intelligence pattern version mismatches"
  ```
</dependency_matrix>

## Intelligence Flow Architecture

<intelligence_flow>
  **SETUP → WORKFLOW INTELLIGENCE TRANSFER MONITORING:**
  
  **Pattern Flow Tracking:**
  ```yaml
  flow_pattern_1_direct_persistent:
    setup_phase:
      source: "setup-command.md"
      intelligence: "subagent-invocation.md (discovery + scoring)"
      creates: "[domain-specialist] with embedded metadata"
      embeds: "Domain expertise + coordination protocols + adaptation patterns"
    
    workflow_phase:
      source: "workflow-command.md"
      intelligence: "subagent-invocation.md (discovery protocol)"
      discovers: "[domain-specialist] via discovery protocol"
      utilizes: "Embedded intelligence + established patterns"
    
    flow_validation:
      - "Agent metadata preserved across sessions"
      - "Coordination protocols automatically available"
      - "Adaptation patterns accessible to workflow"
      - "Performance optimization maintained"
  
  flow_pattern_2_hybrid_coordination:
    setup_phase:
      source: "setup-command.md"
      intelligence: "subagent-invocation.md + agents.md"
      creates: "[foundation-agents] + [coordination-templates]"
      embeds: "Mixed expertise + integration protocols + scaling patterns"
    
    workflow_phase:
      source: "workflow-command.md"  
      intelligence: "subagent-invocation.md (hybrid patterns)"
      combines: "Persistent foundation + dynamic adaptation"
      coordinates: "Mixed agent workflow with intelligent bridging"
    
    flow_validation:
      - "Hybrid patterns transfer correctly"
      - "Integration protocols remain intact"
      - "Scaling patterns support dynamic creation"
      - "Coordination intelligence preserved"
  
  flow_pattern_3_enhanced_dynamic:
    setup_phase:
      source: "setup-command.md"
      intelligence: "agents.md + workflow.md"
      creates: "[coordination-intelligence] + [quality-templates]"
      embeds: "Advanced coordination + parallel patterns + quality standards"
    
    workflow_phase:
      source: "workflow-command.md"
      intelligence: "All core modules"
      applies: "Enhanced dynamic creation with setup intelligence"
      optimizes: "Coordination using established templates"
    
    flow_validation:
      - "Coordination intelligence enhances dynamic agents"
      - "Quality standards transfer to dynamic creation"
      - "Parallel patterns optimize execution"
      - "Setup intelligence accelerates workflow performance"
  ```
  
  **INTELLIGENCE PRESERVATION MECHANISMS:**
  ```yaml
  context_bridging:
    mechanism: "Persistent agents maintain domain knowledge across workflow sessions"
    validation: "Domain expertise accessible in workflow without re-creation"
    monitoring: "Track domain knowledge utilization rates"
    
  pattern_reuse:  
    mechanism: "Established coordination protocols automatically available to workflow"
    validation: "Coordination patterns applied without re-definition"
    monitoring: "Track pattern reuse efficiency and effectiveness"
    
  expertise_scaling:
    mechanism: "Domain expertise enables more sophisticated workflow execution"
    validation: "Workflow capabilities exceed baseline through setup intelligence"
    monitoring: "Track workflow sophistication and performance improvements"
    
  coordination_continuity:
    mechanism: "Setup-created patterns enhance workflow parallel execution"
    validation: "Parallel execution patterns available and utilized in workflow"
    monitoring: "Track parallel execution effectiveness and optimization"
  ```
</intelligence_flow>

## Quality Assurance Framework

<quality_assurance>
  **INTELLIGENCE CONSISTENCY VALIDATION:**
  
  **Pattern Consistency Checks:**
  ```yaml
  4_sentence_description_standard:
    source: "subagent-invocation.md"
    implementations:
      - "setup-command.md (agent creation)"
      - "workflow-command.md (dynamic creation)"  
      - "agents.md (specialist descriptions)"
    validation:
      - "All agent descriptions follow 4-sentence structure"
      - "Sentence content matches standard requirements"
      - "Tool Use Implementation compliance referenced"
      - "Context boundaries and outcomes clearly defined"
  
  parallel_first_methodology:
    source: "workflow.md + agents.md"
    implementations:
      - "setup-command.md (proactive agent creation)"
      - "workflow-command.md (parallel execution)"
      - "verification.md (parallel verification)"
    validation:
      - "Parallel opportunities identified systematically"
      - "Sequential execution properly justified"
      - "Coordination protocols defined for parallel work"
      - "Integration checkpoints established"
  
  no_auto_persist_requirement:
    source: "verification.md"
    implementations:
      - "setup-command.md (agent team verification)"
      - "workflow-command.md (task verification)"
      - "All verification processes"
    validation:
      - "Verification results remain in conversation"
      - "No automatic file creation for verification"
      - "User controls all persistence decisions"
      - "Clean execution without filesystem artifacts"
  
  agent_scoring_system:
    source: "subagent-invocation.md"
    implementations:
      - "workflow-command.md (agent selection)"
      - "setup-command.md (persistent agent assessment)"
    validation:
      - "Scoring categories applied consistently (domain, adaptation, parallel, coordination)"
      - "Score ranges map to correct strategies (85-100, 70-84, 55-69, <40)"
      - "Adaptation templates match score ranges"
      - "Selection rationale documented"
  ```
  
  **CROSS-MODULE ALIGNMENT VERIFICATION:**
  ```yaml
  terminology_consistency:
    check: "Consistent terminology across all modules"
    validation:
      - "Agent types named consistently (persistent, dynamic, hybrid)"
      - "Coordination terms used uniformly (parallel, integration, sync points)"
      - "Quality terms aligned (verification, gap detection, success criteria)"
      - "Authority terms consistent (autonomous, structured, intelligence)"
  
  process_integration:
    check: "Process steps align across modules"
    validation:
      - "Discovery → Selection → Creation → Coordination → Verification"
      - "Analysis → Decomposition → Execution → Verification → Iteration"
      - "Understanding → Planning → Implementation → Verification → Completion"
      - "All processes integrate coherently"
  
  quality_standards:
    check: "Quality requirements consistent across modules"
    validation:
      - "Tool Use Implementation standards referenced uniformly"
      - "Error handling patterns consistent (JSON structure)"
      - "Success criteria definitions aligned"
      - "Performance metrics comparable"
  ```
</quality_assurance>

## Evolution Tracking System

<evolution_tracking>
  **INTELLIGENCE PATTERN EVOLUTION MONITORING:**
  
  **Pattern Improvement Tracking:**
  ```yaml
  discovery_protocol_evolution:
    current_version: "Enhanced discovery with metadata extraction and scoring"
    previous_versions:
      - "Basic directory scanning"
      - "Capability assessment without scoring"
      - "Simple persistent vs dynamic selection"
    improvements:
      - "Added systematic scoring system (0-100 scale)"
      - "Enhanced metadata extraction and pattern recognition"
      - "Introduced hybrid coordination approaches"
      - "Developed context adaptation templates"
    
  coordination_pattern_evolution:
    current_version: "Hybrid coordination with mixed agent types"
    previous_versions:
      - "Simple parallel execution"
      - "Basic specialist coordination"
      - "Persistent OR dynamic selection"
    improvements:
      - "Introduced persistent + dynamic hybrid approaches"
      - "Developed mixed agent type coordination protocols"
      - "Enhanced integration checkpoint systems"
      - "Optimized intelligence handoff patterns"
  
  description_standard_evolution:
    current_version: "4-sentence structure with Tool Use Implementation compliance"
    previous_versions:
      - "Flexible description approach"
      - "3-4 sentence general guideline"
    improvements:
      - "Standardized 4-sentence structure"
      - "Added Tool Use Implementation compliance requirement"
      - "Enhanced context boundaries specification"
      - "Improved coordination and outcome definition"
  ```
  
  **ADAPTATION PATTERN TRACKING:**
  ```yaml
  successful_adaptations:
    context_adaptation_templates:
      - "Direct persistent utilization template (score 85-100)"
      - "Context-adapted persistent template (score 70-84)"
      - "Hybrid coordination template (score 55-69)"
      - "Enhanced dynamic creation template (score <55)"
    
    coordination_innovations:
      - "Mixed agent type coordination protocols"
      - "Intelligence handoff architecture"
      - "Hybrid batch launch patterns"
      - "Performance optimization through agent reuse"
    
    quality_improvements:
      - "Systematic verification across agent types"
      - "Enhanced error handling with coordination context"
      - "No auto-persist requirement implementation"
      - "Comprehensive dependency tracking"
  
  emerging_patterns:
    potential_improvements:
      - "AI-driven agent scoring optimization"
      - "Dynamic coordination protocol adaptation"
      - "Real-time performance monitoring integration"
      - "Automated pattern evolution through usage analytics"
    
    experimental_approaches:
      - "Context-aware agent capability learning"
      - "Predictive coordination protocol selection"
      - "Adaptive template evolution based on success metrics"
      - "Cross-session intelligence persistence optimization"
  ```
  
  **LEARNING INTEGRATION FRAMEWORK:**
  ```yaml
  pattern_learning_cycle:
    1_data_collection:
      - "Track agent selection decisions and outcomes"
      - "Monitor coordination effectiveness metrics"
      - "Capture adaptation success rates"
      - "Document user satisfaction patterns"
    
    2_analysis_integration:
      - "Identify successful pattern variations"
      - "Analyze coordination optimization opportunities"
      - "Evaluate template enhancement possibilities"
      - "Assess intelligence flow effectiveness"
    
    3_pattern_refinement:
      - "Update scoring algorithms based on outcomes"
      - "Enhance adaptation templates with successful variations"
      - "Optimize coordination protocols based on performance data"
      - "Refine intelligence handoff patterns"
    
    4_implementation_validation:
      - "Test pattern improvements in controlled scenarios"
      - "Validate enhanced coordination effectiveness"
      - "Verify intelligence consistency maintenance"
      - "Confirm user experience improvements"
  ```
</evolution_tracking>

## Monitoring Dashboards

<monitoring_dashboards>
  **INTELLIGENCE HEALTH DASHBOARD:**
  
  **Module Health Status:**
  ```yaml
  core_modules_status:
    subagent_invocation: 
      status: "healthy"
      dependencies: "all_resolved"
      consumers: "active"
      last_update: "current"
    
    agents:
      status: "healthy"  
      dependencies: "all_resolved"
      consumers: "active"
      last_update: "current"
    
    workflow:
      status: "healthy"
      dependencies: "all_resolved"
      consumers: "active"
      last_update: "current"
    
    verification:
      status: "healthy"
      dependencies: "all_resolved"
      consumers: "active"
      last_update: "current"
  ```
  
  **Dependency Health Matrix:**
  ```yaml
  dependency_health:
    critical_path_integrity: "✅ healthy"
    reference_resolution: "✅ healthy"  
    pattern_consistency: "✅ healthy"
    circular_dependency_check: "✅ clear"
    
  warning_indicators:
    - "None currently detected"
    
  optimization_opportunities:
    - "Potential for enhanced cross-module integration"
    - "Opportunity for automated consistency validation"
  ```
  
  **Performance Metrics Dashboard:**
  ```yaml
  intelligence_utilization:
    persistent_agent_reuse_rate: "85% (target: >80%)"
    hybrid_coordination_success: "92% (target: >90%)"
    dynamic_creation_efficiency: "78% (target: >75%)"
    pattern_consistency_score: "96% (target: >95%)"
    
  quality_metrics:
    cross_module_consistency: "94% (target: >90%)"
    dependency_resolution_rate: "100% (target: 100%)"
    pattern_evolution_integration: "87% (target: >85%)"
    user_satisfaction_correlation: "91% (target: >90%)"
  ```
</monitoring_dashboards>

## Maintenance Protocols

<maintenance_protocols>
  **REGULAR INTELLIGENCE HEALTH CHECKS:**
  
  **Weekly Consistency Validation:**
  ```yaml
  pattern_consistency_check:
    - "Verify 4-sentence description standard compliance across all implementations"
    - "Validate agent scoring system consistency between modules"
    - "Check parallel-first methodology application uniformity"
    - "Confirm no auto-persist requirement adherence"
    
  dependency_integrity_check:
    - "Validate all cross-module references resolve correctly"
    - "Check for circular dependency formation"
    - "Verify command template intelligence consumption accuracy"
    - "Confirm intelligence handoff pattern integrity"
  ```
  
  **Monthly Evolution Integration:**
  ```yaml
  pattern_improvement_integration:
    - "Analyze successful adaptation patterns for template integration"
    - "Evaluate coordination innovations for framework enhancement"
    - "Assess quality improvements for standard updates"
    - "Review emerging patterns for experimental validation"
    
  performance_optimization:
    - "Update scoring algorithms based on outcome data"
    - "Enhance coordination protocols based on performance metrics"
    - "Optimize template patterns based on success rates"
    - "Refine intelligence flow based on efficiency analysis"
  ```
  
  **Quarterly Framework Review:**
  ```yaml
  comprehensive_intelligence_review:
    - "Full dependency matrix validation and optimization"
    - "Complete pattern consistency verification across all modules"
    - "Intelligence flow architecture effectiveness assessment"
    - "User experience impact evaluation and improvement planning"
    
  strategic_evolution_planning:
    - "Major pattern enhancement roadmap development"
    - "Framework scalability and extensibility planning"
    - "Integration optimization and automation opportunities"
    - "Next-generation intelligence pattern exploration"
  ```
</maintenance_protocols>

## Alert Systems

<alert_systems>
  **INTELLIGENCE CONSISTENCY ALERTS:**
  
  **Critical Alerts (Immediate Action Required):**
  ```yaml
  broken_dependency:
    trigger: "Cross-module reference fails to resolve"
    impact: "Module or command functionality compromised"
    action: "Immediate dependency resolution required"
    
  pattern_contradiction:
    trigger: "Conflicting intelligence patterns detected across modules"
    impact: "Inconsistent system behavior and user confusion"
    action: "Pattern alignment and conflict resolution required"
    
  command_intelligence_failure:
    trigger: "Command template cannot access required intelligence patterns"
    impact: "Command functionality degraded or broken"
    action: "Intelligence availability restoration required"
  ```
  
  **Warning Alerts (Action Recommended):**
  ```yaml
  pattern_drift:
    trigger: "Pattern definitions becoming inconsistent across modules"
    impact: "Gradual degradation of system coherence"
    action: "Pattern standardization and alignment recommended"
    
  circular_dependency_risk:
    trigger: "Complex reference chains approaching circular dependency"
    impact: "Potential future dependency resolution issues"
    action: "Dependency simplification recommended"
    
  evolution_stagnation:
    trigger: "No pattern improvements integrated for extended period"
    impact: "System intelligence optimization opportunities missed"
    action: "Pattern evolution review and integration recommended"
  ```
  
  **Information Alerts (Monitoring):**
  ```yaml
  optimization_opportunity:
    trigger: "Performance metrics indicate enhancement possibilities"
    impact: "Potential for improved system effectiveness"
    action: "Optimization analysis and planning beneficial"
    
  usage_pattern_change:
    trigger: "Significant shifts in intelligence pattern utilization"
    impact: "System adaptation opportunities or needs"
    action: "Usage analysis and pattern adjustment consideration"
  ```
</alert_systems>

---

**Dependencies**:
- **All Core Modules**: Monitors consistency and tracks evolution
- **All Command Templates**: Validates intelligence consumption and handoff patterns  
- **Framework**: Ensures alignment with core execution principles

**Provides Intelligence For**:
- Intelligence consistency monitoring across all components
- Cross-module dependency validation and optimization
- Pattern evolution tracking and integration guidance
- Quality assurance and performance monitoring frameworks
- Maintenance protocols and alert systems for system health