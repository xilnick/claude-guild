# User Extensibility Guide

## Overview

Claude Guild is designed to be **fully extensible** at every level, allowing users to customize workflows, create custom agents, define new processes, and adapt the system to unique project needs.

## Extension Points

### System Extension Map

```yaml
Extension Levels:
  Configuration:
    - Model assignments
    - Thinking modes
    - Feature flags
    - Routing rules
    
  Processes:
    - Custom workflows
    - New process steps
    - Modified behaviors
    - Error handlers
    
  Agents:
    - Custom agents
    - Modified roles
    - New specializations
    - Boundary adjustments
    
  Commands:
    - New commands
    - Modified workflows
    - Custom flags
    - Special modes
```

## Configuration Customization

### Instructions File

```yaml
# .guild/instructions.md

# Model Configuration
models:
  # Assign specific models to agent types
  reasoning: opus           # Best for analysis
  planning: opus            # Best for coordination
  implementation: sonnet    # Balance of speed/quality
  research: haiku          # Fast for research
  
  # Custom model assignments
  custom:
    guild-security-engineer: opus  # High accuracy needed
    guild-test-engineer: sonnet    # Good balance

# Thinking Modes
thinking:
  # Enable thinking modes per agent type
  modes:
    reasoning: ultrathink    # Deep analysis
    planning: ultrathink     # Complex coordination
    implementation: think    # Standard thinking
    research: think         # Quick research
  
  # Custom thinking assignments
  custom:
    complex_tasks: ultrathink
    simple_tasks: none

# Parallel Execution
parallel:
  enabled: true
  max_agents: 5              # Maximum parallel agents
  strategy: adaptive         # adaptive | aggressive | conservative
  
  # Task-specific parallelization
  rules:
    - pattern: "database migration"
      parallel: false        # Force sequential
    - pattern: "performance"
      parallel: true
      max_agents: 3

# Routing Customization
routing:
  # Custom routing rules
  custom_routes:
    - pattern: "payment|billing|stripe"
      agents:
        primary: guild-payment-engineer
        review: guild-security-engineer
      sequential: true       # Force sequential execution
    
    - pattern: "auth|login|security"
      agents: [guild-security-engineer, guild-auth-engineer]
      parallel: false
  
  # Always include certain agents
  always_include:
    testing: guild-test-engineer
    documentation: guild-docs-engineer
  
  # Never use certain combinations
  exclusions:
    - [guild-junior-engineer, production_code]
    - [guild-experimental-engineer, critical_path]

# Workflow Customization
workflows:
  # Stage configuration
  stages:
    reasoning:
      enabled: true
      timeout: 30s
      retries: 2
    
    research:
      enabled: true
      parallel: true
      sources: [project, web, mcp]
      max_time: 60s
    
    planning:
      enabled: true
      detail_level: comprehensive
      save_plans: true
      plan_format: markdown
    
    implementation:
      quality_checks: true
      test_coverage: true
      documentation: true
  
  # Custom stage injection
  custom_stages:
    - name: security-review
      after: implementation
      before: verification
      agent: guild-security-engineer
      required_for: [auth, payment, data]
    
    - name: performance-check
      after: implementation
      agent: guild-performance-engineer
      optional: true

# Project-Specific Configuration
project:
  # Technology stack
  stack:
    frontend: [react, typescript, tailwind]
    backend: [node, express, graphql]
    database: [postgres, redis]
    infrastructure: [aws, docker, k8s]
  
  # Coding standards
  standards:
    style_guide: airbnb
    linting: eslint
    formatting: prettier
    testing: jest
  
  # Special requirements
  requirements:
    accessibility: wcag-aa
    performance: lighthouse-90
    security: owasp-top-10
    browser_support: [chrome, firefox, safari, edge]
  
  # Ignore patterns
  ignore:
    - node_modules
    - .git
    - dist
    - build
    - "*.min.js"
    - "*.generated.*"

# Research Configuration
research:
  # MCP server configuration
  mcp:
    enabled: true
    servers:
      - name: context7
        priority: high
        use_for: [documentation, examples]
      - name: github
        priority: medium
        use_for: [code_search, issues]
  
  # Web search configuration
  web_search:
    enabled: true
    max_results: 10
    prefer_recent: true     # Prefer recent results
    trusted_sources:
      - developer.mozilla.org
      - reactjs.org
      - nodejs.org
      - stackoverflow.com
  
  # Caching configuration
  caching:
    enabled: true
    ttl: 3600              # Cache for 1 hour
    max_size: 100MB
    strategy: lru          # Least recently used

# Performance Tuning
performance:
  # Memory limits
  memory:
    per_agent: 100MB
    total: 500MB
    cache: 200MB
  
  # Timeout configuration
  timeouts:
    stage_timeout: 120s
    total_timeout: 600s
    agent_timeout: 60s
  
  # Optimization flags
  optimization:
    preload_common: true
    stream_large_results: true
    compress_cache: true
    parallel_research: true

# Feature Flags
features:
  # Experimental features
  experimental:
    predictive_routing: false
    auto_parallelization: false
    smart_caching: true
  
  # Debug features
  debug:
    verbose_logging: false
    performance_tracking: true
    error_details: true
  
  # UI features
  ui:
    progress_indicators: true
    color_output: true
    emoji_markers: true
```

## Custom Processes

### Creating Custom Processes

```yaml
# .guild/processes.md (append custom processes)

# Custom Process Example
process: validate-accessibility
  description: Check accessibility compliance
  inputs: [html_files, css_files, compliance_level]
  steps:
    - scan_markup:
        action: analyze HTML for ARIA attributes
        output: markup_issues
    - check_contrast:
        action: verify color contrast ratios
        output: contrast_issues
    - test_keyboard:
        action: ensure keyboard navigation
        output: keyboard_issues
    - generate_report:
        action: create accessibility report
        output: a11y_report
  outputs: [compliance_report, issues_list, recommendations]
  error_handling: log_and_continue

# Domain-Specific Process
process: validate-payment-flow
  description: Validate payment implementation
  inputs: [payment_code, test_credentials]
  steps:
    - security_check:
        action: scan for security issues
        output: security_findings
    - pci_compliance:
        action: verify PCI compliance
        output: compliance_status
    - test_flow:
        action: test payment flow
        output: test_results
    - verify_webhooks:
        action: check webhook handling
        output: webhook_status
  outputs: [validation_report, security_status]
  parallel: false  # Must be sequential for security
```

### Using Custom Processes

```yaml
# Reference in custom agent
---
name: guild-accessibility-engineer
role: quality
processes: [validate-accessibility, implement-solution]
context: accessibility-standards
---

# Reference in workflow
workflow:
  custom_stages:
    - name: accessibility-check
      process: validate-accessibility
      agent: guild-accessibility-engineer
      required_for: [ui_changes]
```

## Custom Agents

### Creating Custom Agents

```yaml
# .guild/agents/guild-custom-engineer.md

---
name: guild-performance-engineer
role: optimization
processes: [analyze-performance, optimize-code, validate-improvements]
context: performance-optimization
technologies: [lighthouse, webpack, profiling]
parallel: true
scope: performance
boundaries:
  - Performance analysis
  - Optimization implementation
  - Benchmark validation
---

# Agent can reference custom processes
# and have specialized context
```

### Agent Registration

```yaml
# Register in routing configuration
routing:
  custom_agents:
    - name: guild-performance-engineer
      triggers: [slow, performance, optimize]
      priority: high
    
    - name: guild-accessibility-engineer
      triggers: [a11y, accessibility, wcag]
      required_for: [ui_changes]
```

## Custom Commands

### Creating Custom Commands

```markdown
# .claude/commands/guild-audit.md

**Usage**: `/guild:audit [type] "audit scope"`

**Purpose**: Perform specialized audits (security, performance, accessibility)

## Workflow

1. **Audit Type Detection**
   - Parse audit type
   - Determine scope
   - Select specialists

2. **Comprehensive Analysis**
   - Run specialized scans
   - Collect metrics
   - Identify issues

3. **Report Generation**
   - Create detailed report
   - Prioritize findings
   - Generate recommendations

## Implementation

When executing this command:
- Load audit-specific processes
- Route to specialist agents
- Generate comprehensive report
```

### Command Registration

```javascript
// In install.js or setup
const customCommands = [
  'guild-audit.md',
  'guild-migrate.md',
  'guild-optimize.md'
];

// Copy to .claude/commands/
customCommands.forEach(cmd => {
  fs.copySync(
    path.join(__dirname, 'custom-commands', cmd),
    path.join('.claude/commands', cmd)
  );
});
```

## Custom Routing Rules

### Advanced Routing

```yaml
# .guild/routing.md (custom rules)

routing_rules:
  # Technology-based routing
  technology_routing:
    - technologies: [react, redux]
      agents: [guild-react-engineer, guild-state-engineer]
      strategy: parallel
    
    - technologies: [graphql, apollo]
      agents: [guild-graphql-engineer]
      include_also: [guild-api-engineer]
  
  # Complexity-based routing
  complexity_routing:
    - complexity: very_high
      agents: [guild-architect, guild-senior-engineer]
      require_review: true
      save_plan: true
    
    - complexity: trivial
      agents: [single_engineer]
      skip_planning: true
  
  # Risk-based routing
  risk_routing:
    - risk: critical
      sequential: true
      require_tests: true
      require_review: true
      agents: [senior_engineers_only]
    
    - risk: low
      parallel: true
      simplified_workflow: true
  
  # Custom patterns
  custom_patterns:
    - pattern: "migration"
      workflow: migration_workflow
      agents: [guild-migration-specialist]
      require_backup: true
    
    - pattern: "hotfix"
      workflow: emergency_workflow
      skip_stages: [research]
      expedite: true
```

## Workflow Extensions

### Custom Workflows

```yaml
# .guild/workflows/custom-migration.yml

workflow: database-migration
  stages:
    - analysis:
        agent: guild-database-engineer
        process: analyze-schema-changes
        outputs: [change_list, risk_assessment]
    
    - backup:
        agent: guild-devops-engineer
        process: create-backup
        outputs: [backup_location, restore_plan]
    
    - migration:
        agent: guild-database-engineer
        process: execute-migration
        checkpoints: [pre_check, post_check]
        rollback: automatic
    
    - validation:
        agent: guild-test-engineer
        process: validate-migration
        outputs: [validation_report]
  
  error_handling:
    strategy: rollback
    notification: immediate
    recovery: automatic
```

## Plugin System

### Plugin Architecture

```javascript
// Guild plugin structure
class GuildPlugin {
  constructor(name, config) {
    this.name = name;
    this.config = config;
  }
  
  // Lifecycle hooks
  async onInstall() {}
  async onSetup() {}
  async onCommand(command, args) {}
  async onWorkflowStart(workflow) {}
  async onWorkflowEnd(workflow, result) {}
  
  // Extension points
  registerAgents() { return []; }
  registerProcesses() { return []; }
  registerCommands() { return []; }
  registerRoutes() { return []; }
}

// Example plugin
class SecurityPlugin extends GuildPlugin {
  registerAgents() {
    return [{
      name: 'guild-security-scanner',
      role: 'security',
      processes: ['security-scan', 'vulnerability-check']
    }];
  }
  
  registerProcesses() {
    return [{
      name: 'security-scan',
      steps: ['scan_code', 'check_dependencies', 'report']
    }];
  }
  
  async onWorkflowEnd(workflow, result) {
    // Run security check after workflow
    if (workflow.includesCode) {
      await this.runSecurityScan(result);
    }
  }
}
```

### Plugin Installation

```bash
# Install a Guild plugin
npm install guild-plugin-security

# Register in .guild/plugins.yml
plugins:
  - name: guild-plugin-security
    enabled: true
    config:
      scan_level: comprehensive
      block_on_critical: true
```

## Best Practices

### Extension Guidelines

1. **Start Small**: Begin with configuration before custom code
2. **Test Thoroughly**: Validate custom processes and agents
3. **Document Changes**: Record all customizations
4. **Version Control**: Track .guild directory changes
5. **Share Solutions**: Contribute useful extensions back

### Customization Patterns

1. **Configuration First**: Use configuration options before custom code
2. **Compose Existing**: Combine existing processes before creating new
3. **Extend Gradually**: Add features incrementally
4. **Maintain Compatibility**: Ensure extensions work with updates
5. **Monitor Performance**: Track impact of customizations

## Examples

### Example 1: E-commerce Customization

```yaml
# Specialized for e-commerce
project:
  domain: e-commerce
  
custom_agents:
  - guild-payment-engineer
  - guild-inventory-engineer
  - guild-shipping-engineer
  
custom_processes:
  - process-payment
  - update-inventory
  - calculate-shipping
  
custom_workflows:
  - checkout-flow
  - order-fulfillment
  - returns-processing
```

### Example 2: ML Project Customization

```yaml
# Specialized for machine learning
project:
  domain: machine-learning
  
custom_agents:
  - guild-model-engineer
  - guild-data-engineer
  - guild-pipeline-engineer
  
custom_processes:
  - train-model
  - validate-model
  - deploy-model
  
custom_workflows:
  - experiment-workflow
  - training-pipeline
  - deployment-workflow
```

This extensibility system ensures Guild can adapt to any project's unique requirements while maintaining its core architecture and principles.