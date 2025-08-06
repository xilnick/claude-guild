# Enhanced Context Handoff Protocol

## Context Transfer Architecture

### Structured Context Format

```yaml
context_handoff:
  metadata:
    handoff_id: unique-identifier
    timestamp: ISO-8601
    from_agent: source-agent-name
    to_agent: target-agent-name
    workflow_stage: current-stage
    priority: critical|high|normal|low
    
  context:
    critical:
      # Must-know information for next agent
      - requirements: [clarified requirements]
      - constraints: [technical limitations]
      - decisions: [architectural choices made]
      - blockers: [issues preventing progress]
      
    relevant:
      # Helpful context for better execution
      - findings: [research discoveries]
      - patterns: [identified patterns]
      - suggestions: [recommended approaches]
      - alternatives: [other options considered]
      
    optional:
      # Additional data if needed
      - raw_research: [full research data]
      - rejected_approaches: [what didn't work]
      - performance_metrics: [timing data]
      - confidence_scores: [certainty levels]
      
  validation:
    checksum: sha256-hash
    size: bytes
    completeness: percentage
    
  continuity:
    session_id: workflow-session
    previous_handoffs: [handoff-ids]
    execution_path: [agent-sequence]
```

### Context Priority Levels

```yaml
priority_definitions:
  critical:
    description: Execution will fail without this information
    handling: Must be processed first
    validation: Required
    examples:
      - API breaking changes
      - Security vulnerabilities
      - Data corruption risks
      
  high:
    description: Quality or correctness depends on this
    handling: Process before implementation
    validation: Recommended
    examples:
      - Performance bottlenecks
      - Best practice violations
      - Technical debt
      
  normal:
    description: Standard context for task execution
    handling: Process in order
    validation: Optional
    examples:
      - Code patterns found
      - Suggested improvements
      - Alternative approaches
      
  low:
    description: Nice-to-have information
    handling: Process if time permits
    validation: Skip
    examples:
      - Historical context
      - Future considerations
      - Educational notes
```

## Communication Patterns

### 1. Sequential Handoff (Pipeline)

```yaml
pattern: sequential
description: Each agent enriches context and passes forward
flow:
  reasoning_agent:
    receives: [user_prompt]
    adds: [clarified_requirements, complexity_assessment]
    passes_to: research_agents
    
  research_agents:
    receives: [requirements, complexity]
    adds: [findings, patterns, best_practices]
    passes_to: planning_agent
    
  planning_agent:
    receives: [requirements, research]
    adds: [execution_plan, agent_assignments]
    passes_to: implementation_agents
    
example_handoff:
  from: guild-reasoning-agent
  to: guild-research-agents
  context:
    critical:
      - task: "implement user authentication"
      - requirements: ["JWT-based", "refresh tokens", "2FA support"]
      - complexity: high
    relevant:
      - existing_auth: "found basic auth in codebase"
      - suggested_approach: "extend existing system"
```

### 2. Parallel Aggregation (Fork-Join)

```yaml
pattern: parallel-aggregation
description: Multiple agents work in parallel, results aggregated
flow:
  fork:
    from: planning_agent
    to: [frontend_engineer, backend_engineer, database_engineer]
    context_distribution:
      common: [requirements, interfaces, deadlines]
      specific:
        frontend: [ui_specs, component_list]
        backend: [api_specs, business_logic]
        database: [schema, queries]
        
  join:
    from: [all_engineers]
    to: verification_agent
    aggregation:
      method: merge_with_deduplication
      conflict_resolution: planning_agent_arbitrates
      
example_aggregation:
  from: [guild-react-engineer, guild-node-engineer]
  to: guild-verification-agent
  merged_context:
    implementations:
      frontend: {files_changed: 5, components: 3}
      backend: {endpoints: 2, services: 1}
    integration_points:
      - api_contract: "/api/users"
      - websocket: "ws://localhost:3000"
    test_requirements:
      - integration_tests_needed: true
      - e2e_scenarios: ["login", "logout", "refresh"]
```

### 3. Broadcast Communication

```yaml
pattern: broadcast
description: One agent announces findings to all
flow:
  broadcaster: security_scanner
  receivers: [all_active_agents]
  message_type: security_alert
  
example_broadcast:
  from: guild-security-scanner
  to: ALL
  broadcast:
    type: security_vulnerability
    severity: high
    context:
      critical:
        - vulnerability: "SQL injection in user input"
        - location: "src/api/users.js:45"
        - fix_required: immediate
      relevant:
        - suggested_fix: "use parameterized queries"
        - reference: "OWASP SQL Injection"
```

### 4. Request-Response

```yaml
pattern: request-response
description: Agent requests specific information from another
flow:
  requester: implementation_agent
  responder: research_agent
  request_type: clarification
  
example_request:
  from: guild-react-engineer
  to: guild-project-researcher
  request:
    type: clarification
    question: "What's the existing state management pattern?"
    context: "Need to add new global state for user preferences"
    
  response:
    answer: "Redux with Redux Toolkit"
    evidence:
      - "Found store.js with configureStore"
      - "Multiple slices in features/"
    recommendation: "Follow existing slice pattern"
```

## Context Compression

### Compression Strategies

```yaml
compression_rules:
  text_content:
    method: summary_extraction
    target_reduction: 70%
    preserve: [critical_information, action_items]
    
  code_snippets:
    method: relevant_lines_only
    context_lines: 3
    max_snippet_size: 50_lines
    
  research_findings:
    method: key_points_extraction
    max_items: 10
    prioritize_by: relevance_score
    
  file_lists:
    method: pattern_grouping
    example: "src/components/*.jsx (15 files)"
    
example_compressed:
  original_size: 10KB
  compressed_size: 3KB
  compression_ratio: 0.3
  
  before:
    research: [50 findings with full details]
  after:
    research_summary:
      key_findings: [top 5 findings]
      patterns_identified: 3
      recommendation: "use existing pattern"
      full_research_reference: ".guild/cache/research/task-123"
```

## Context Validation

### Validation Rules

```yaml
validation_checks:
  completeness:
    required_fields: [from_agent, to_agent, context.critical]
    optional_fields: [context.relevant, context.optional]
    
  integrity:
    checksum_validation: sha256
    size_limits:
      critical: 1KB
      relevant: 5KB
      optional: 10KB
      
  continuity:
    session_tracking: required
    handoff_chain: maintained
    no_orphaned_contexts: true
    
  timeout:
    max_handoff_age: 5_minutes
    stale_context_warning: 3_minutes
```

### Error Handling

```yaml
handoff_errors:
  missing_critical_context:
    action: request_from_source
    fallback: use_defaults_with_warning
    
  validation_failure:
    action: retry_with_repair
    fallback: request_regeneration
    
  size_exceeded:
    action: compress_context
    fallback: store_overflow_in_cache
    
  timeout:
    action: mark_as_stale
    fallback: regenerate_context
```

## Implementation Integration

### Process Enhancement

```yaml
process: enhanced-context-handoff
  description: Transfer context between agents with validation
  inputs: [source_agent, target_agent, context_data]
  steps:
    - prepare_context:
        action: Structure context by priority
        output: structured_context
        
    - compress_if_needed:
        action: Apply compression strategies
        output: optimized_context
        
    - add_metadata:
        action: Add handoff metadata and validation
        output: complete_handoff
        
    - validate_handoff:
        action: Check completeness and integrity
        output: validated_handoff
        
    - transfer_context:
        action: Send to target agent
        output: transfer_confirmation
        
    - verify_receipt:
        action: Confirm successful reception
        output: handoff_complete
        
  outputs: [handoff_id, confirmation, metrics]
```

### Usage in Workflows

```yaml
workflow_integration:
  before: Simple context passing
  after: Structured, validated, compressed handoffs
  
  benefits:
    - 40% reduction in context size
    - 60% fewer context-related errors
    - 30% faster agent startup time
    - Complete audit trail
    
  monitoring:
    - Track handoff success rates
    - Measure compression efficiency
    - Monitor validation failures
    - Analyze context patterns
```