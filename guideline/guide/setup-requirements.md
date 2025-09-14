# Setup Command Requirements

## Command Purpose
The `/guild:setup` command analyzes project structure and creates specialized agents based on discovered project needs through systematic discovery and intelligent agent generation.

## Core Requirements

### 1. **Universal Pattern Discovery Mandatory**
- **MUST** analyze project characteristics through multi-dimensional observation without predefined assumptions about technology or structure
- **MUST** discover structural patterns through systematic file organization, hierarchy depth, and naming convention analysis
- **MUST** identify behavioral patterns through interaction analysis, data flow mapping, and execution sequence discovery
- **MUST** extract dependency patterns through relationship mapping, import/export analysis, and integration point discovery
- **MUST** capture naming patterns through terminology extraction, concept identification, and domain vocabulary analysis
- **MUST** generate comprehensive project signature for evolution tracking and pattern-based understanding
- **MUST** persist discovered patterns in pattern registry for continuous learning and system evolution

### 2. **Dynamic Agent Generation Mandatory**
- **MUST** generate agents dynamically based on discovered patterns rather than selecting from predefined templates
- **MUST** create pattern-to-capability mappings that transform discovered patterns into agent specializations without predetermined knowledge
- **MUST** embed comprehensive project context in each generated agent including discovered patterns, architectural understanding, and domain concepts
- **MUST** generate agents with ultrathinking capabilities (`thinking_mode: ultrathink`) for enhanced multi-perspective reasoning
- **MUST** follow 4-sentence description standards that capture agent's pattern-derived specialization and context-aware capabilities
- **MUST** embed mandatory parallel tool execution capabilities with Anthropic compliance prompts in all created agents
- **MUST** organize agents through category directory structure based on discovered domain boundaries rather than predetermined categories
- **NEVER** execute created agents during setup process - maintain strict architectural boundary between creation and utilization

#### **Agent File Persistence Requirements**
- **MUST** write agent files as persistent `.md` files to filesystem using Write or MultiEdit tools
- **MUST** store agents at exact path: `./[agent-directory]/agents/guild/[category]/[agent-name].md`
- **MUST** include proper YAML frontmatter in each agent file with: name, model: inherit, 4-sentence description
- **MUST** create at least one agent per discovered domain category
- **MUST** verify files exist and are readable after creation using Read tool
- **NEVER** rely solely on Task tool for agent creation (temporary agents only)
- **MUST** write complete agent content including specialist prompt with embedded project context

### 3. **Pattern Registry and Evolution Readiness Mandatory**
- **MUST** maintain persistent pattern registry that stores discovered patterns with metadata about frequency, importance, and relationships
- **MUST** generate project signature capturing essential project characteristics for change detection and evolution triggering
- **MUST** create agent capability matrix mapping discovered patterns to required capabilities for intelligent agent generation
- **MUST** implement pattern significance scoring for evolution trigger detection and adaptation timing
- **MUST** establish baseline pattern snapshot for future comparison and evolution assessment
- **MUST** validate pattern discovery completeness through coverage analysis and gap identification
- **MUST** prepare evolution-ready data structures that support incremental, adaptive, and regenerative evolution strategies

### 4. **Context Management and Token Optimization Mandatory**
- **MUST** implement context compression algorithms that activate when token usage exceeds 6000-token threshold
- **MUST** establish priority-based context management for intelligent information retention and optimization
- **MUST** create shared context repositories that minimize duplication across agents while maintaining necessary specialization
- **MUST** optimize context distribution to balance agent autonomy with resource efficiency
- **MUST** implement context synthesis that consolidates multi-dimensional discoveries into coherent understanding

### 5. **Architectural Boundaries**
- **SETUP = AGENT FACTORY**: Creates agents with embedded parallel capabilities
- **NEVER EXECUTES AGENTS**: Setup creates, workflow executes
- **CREATION-ONLY BOUNDARY**: No runtime operations or agent coordination
- **FLAT HIERARCHY ENFORCEMENT**: No subagent creation allowed

### 6. **Multi-Perspective Validation Requirements**
- **MUST** implement ultrathinking multi-perspective analysis across technical, UX, business, security, and evolution dimensions
- **MUST** analyze each discovered pattern and generated agent from all five perspectives for comprehensive validation
- **MUST** implement conflict resolution mechanisms when different perspectives provide contradictory assessments
- **MUST** synthesize multiple perspectives into coherent agent specifications and pattern understanding
- **MUST** use multi-perspective validation for pattern discovery quality assessment and agent generation adequacy

### 7. **Quality Assurance and Verification Requirements**
- **MUST** implement pattern discovery validation that ENSURE comprehensive project coverage and understanding depth
- **MUST** validate agent generation adequacy through capability assessment and specialization verification
- **MUST** verify pattern-to-agent mapping accuracy through systematic compatibility assessment and effectiveness prediction
- **MUST** implement gap analysis that identifies missing patterns or inadequate agent coverage
- **MUST** validate evolution readiness through pattern registry integrity and adaptation capability assessment

### 8. **Tool Coordination Requirements**
- **PARALLEL-FIRST EXECUTION**: Execute file scanning, configuration detection, and dependency analysis simultaneously
- **BATCH OPERATIONS**: Group project structure analysis, technology discovery, and tool inventory compilation
- **CHALLENGE SEQUENTIAL ASSUMPTIONS**: Verify all dependencies through systematic parallelization assessment
- **OPTIMIZE DISCOVERY PERFORMANCE**: Use resource coordination and batching intelligence

### 9. **Intelligence Requirements**
- **PATTERN DISCOVERY INTELLIGENCE**: Multi-dimensional observation analysis through systematic pattern recognition without predefined assumptions
- **DYNAMIC AGENT GENERATION INTELLIGENCE**: Pattern-to-capability transformation through context-rich specialist creation based on discovered evidence
- **EVOLUTION-READY INTELLIGENCE**: Pattern registry management and adaptation preparation through continuous learning frameworks
- **CONTEXT OPTIMIZATION INTELLIGENCE**: Token management and compression through priority-based context distribution and resource optimization
- **MULTI-PERSPECTIVE VALIDATION INTELLIGENCE**: Ultrathinking analysis across technical, UX, business, security, and evolution dimensions for comprehensive assessment
- **SETUP-SPECIFIC TOOL COORDINATION**: Discovery optimization through parallel execution mandate and resource coordination
- **SETUP-SPECIFIC CHAIN-OF-THOUGHT**: Pattern-discovery reasoning with transparent observation-based decision making
- **SETUP VERIFICATION**: Comprehensive assessment including pattern discovery validation, agent generation adequacy, and evolution readiness confirmation

### 10. **Success Criteria**
- **Universal Pattern Discovery Complete**: Multi-dimensional analysis reveals comprehensive project understanding through structural, behavioral, dependency, and naming pattern identification without predefined assumptions
- **Dynamic Agent Generation Complete**: All discovered domain patterns have corresponding dynamically-generated specialist agents with context-rich capabilities derived from observed patterns rather than template selection
- **Pattern Registry Established**: Persistent storage of discovered patterns with metadata, significance scoring, and evolution-ready data structures for continuous learning
- **Context Optimization Implemented**: Token management and compression systems operational with priority-based context distribution and resource efficiency
- **Evolution Readiness Confirmed**: Project signature generated, pattern baselines established, and adaptation mechanisms prepared for continuous system evolution
- **Multi-Perspective Validation Complete**: Ultrathinking analysis across all five dimensions validates pattern discovery quality and agent generation adequacy
- **Agent Files Created**: Physical `.md` files exist in agent directories with proper YAML frontmatter, ultrathink configuration, and complete pattern-derived specialist content
- **File Verification Complete**: All created agent files readable, properly formatted, contain embedded project context, and demonstrate pattern-based specialization
- **System Integration Ready**: Agent ecosystem prepared for workflow coordination with discovery-informed capabilities and evolution-ready architecture
- **Quality Standards Exceeded**: Pattern discovery accuracy, dynamic generation effectiveness, and evolution preparation meet Universal Guild excellence criteria

### 11. **Universal Guild Framework Compliance**
- **TB001 Compliance**: Simultaneous tool operations through parallel coordination protocols including multi-dimensional pattern discovery
- **AM001 Compliance**: Specialist assignment protocols enhanced with pattern-to-capability mapping through dynamic generation frameworks
- **PE001 Compliance**: Parallel-first execution through atomic unit decomposition including simultaneous pattern analysis across multiple dimensions
- **RP001 Compliance**: Comprehensive discovery through parallel exploration frameworks with observation-based pattern recognition
- **AR001 Compliance**: Flat hierarchy maintenance through prevention mechanisms while enabling pattern-derived agent specialization
- **OB001 Compliance**: Operation batching through strategic grouping, resource optimization, and pattern analysis coordination
- **PD001 Compliance**: Pattern discovery mandate through multi-dimensional observation protocols without predefined assumptions or template-based approaches
- **EM001 Compliance**: Evolution mechanism preparation through pattern registry establishment, project signature generation, and adaptation-ready architecture

## Command-Specific Behaviors

### User Request Processing
When $ARGUMENTS is provided, treat it as ADDITIONAL context for pattern-enhanced discovery and generation:
- ALWAYS perform comprehensive multi-dimensional pattern discovery as the mandatory foundation regardless of $ARGUMENTS content
- Process $ARGUMENTS as supplementary context that may reveal additional patterns or specialization needs beyond systematic discovery
- Apply intelligent reasoning to integrate user-provided insights with discovered patterns for enhanced agent generation
- Use $ARGUMENTS to enrich pattern discovery but NEVER allow it to replace systematic observation-based analysis
- Generate additional pattern-derived specialists when $ARGUMENTS reveals patterns not captured by systematic discovery
- Maintain Universal Guild principle: all agents must be generated from discovered patterns, not predetermined templates

### Pattern-Derived Agent Generation Guarantee
- **PATTERN-BASED COVERAGE**: Setup MUST create specialists for every significant pattern discovered through multi-dimensional analysis, ensuring no discovered domain remains unaddressed
- **OBSERVATION-FIRST**: Multi-dimensional pattern discovery and domain identification is MANDATORY regardless of $ARGUMENTS - all agents derived from observed evidence
- **PATTERN-ENHANCED ARGUMENTS**: User requests via $ARGUMENTS are integrated with discovered patterns to create additional pattern-based specialists, never replacing systematic discovery
- **DYNAMIC BASELINE**: Specialists generated based on discovered patterns rather than predetermined categories - may include architecture specialists, domain experts, integration coordinators, or any pattern-derived specialization
- **ZERO TEMPLATE DEPENDENCY**: All agents generated from discovered patterns using dynamic capability mapping rather than template selection or predetermined agent types

### Universal Guild Setup Execution Flow
1. **DISCOVER** project patterns through parallel multi-dimensional analysis including structural, behavioral, dependency, and naming pattern recognition (MANDATORY baseline)
2. **SYNTHESIZE** comprehensive project signature and pattern registry with significance scoring and evolution-ready metadata (MANDATORY baseline)
3. **MAP** discovered patterns to specialist capabilities through dynamic pattern-to-capability transformation without template dependency (MANDATORY baseline)
4. **GENERATE** pattern-derived agents with context-rich specializations based on discovered evidence rather than predetermined categories (MANDATORY baseline)
5. **ENHANCE** agent generation with $ARGUMENTS context when provided, creating additional pattern-based specialists for user-identified needs (supplementary)
6. **EMBED** comprehensive project context, discovered patterns, and multi-perspective understanding in each generated agent (universal requirement)
7. **ESTABLISH** pattern registry, context optimization systems, and evolution-ready architecture for continuous learning (system preparation)
8. **VERIFY** pattern discovery completeness, agent generation adequacy, and evolution readiness through multi-dimensional validation (quality assurance)

### Universal Guild Excellence Targets
- **Pattern Discovery Excellence**: Comprehensive multi-dimensional understanding through systematic observation achieving complete project characterization without predefined assumptions
- **Dynamic Generation Excellence**: Pattern-derived agent quality through context-rich specialization, 4-sentence standards, ultrathink configuration, and framework dimensional compliance
- **Evolution Readiness Excellence**: Complete preparation for continuous learning through pattern registry integrity, project signature accuracy, and adaptation mechanism validation
- **Context Optimization Excellence**: Efficient resource utilization through priority-based context management, token compression, and intelligent information distribution
- **Multi-Perspective Validation Excellence**: Comprehensive assessment through ultrathinking analysis across technical, UX, business, security, and evolution dimensions
- **Integration Coordination Excellence**: Workflow readiness through pattern-informed agent ecosystem and discovery-enhanced coordination protocols
- **Performance Excellence**: Setup efficiency through parallel execution, pattern analysis optimization, and continuous improvement measurement

## Universal Guild Modification Guidelines

When modifying setup command template or intelligence:
1. **MUST** maintain all Universal Guild core requirements including pattern discovery mandate and dynamic generation protocols
2. **MUST** preserve architectural boundaries (pattern discovery and agent creation-only, no execution)
3. **MUST** ensure Universal Guild framework dimensional compliance (TB001-OB001, PD001, EM001)
4. **MUST** validate against pattern discovery success criteria and dynamic generation standards
5. **MUST** test parallel execution capabilities across multi-dimensional pattern analysis
6. **MUST** verify dynamic agent generation compliance and pattern-to-capability mapping accuracy
7. **MUST** maintain observation-based learning principles without template dependency or predefined assumptions
8. **MUST** ensure evolution readiness through pattern registry integrity and adaptation mechanism validation
9. **MUST** validate multi-perspective assessment capabilities and context optimization effectiveness

Any modification that violates Universal Guild requirements or introduces template-based approaches is **FORBIDDEN**.