# /guild:setup

---
name: guild-setup
model: inherit
description: "Analyze project and create specialized agents"
---

## Purpose

Pure intelligence-first project analysis and cognitive agent creation. No hardcoded technology patterns - discovers ANY project through Claude's intelligence and MCP research.

## Intelligence-First Philosophy

**PURE DISCOVERY**: No assumptions about technologies, frameworks, or architectures - let Claude's intelligence understand the project completely.

**COGNITIVE FOCUS**: Create agents based on required thinking approaches, not specific technologies.

**MCP RESEARCH INTEGRATION**: Use MCP tools to research discovered technologies and create comprehensive knowledge base.

**DOMAIN AGNOSTIC**: Works with any project type, technology stack, programming language, or business domain.

## Research Infrastructure Preparation

**Knowledge Base Setup**:
1. **Cache Directory Creation**: Create `.guild/research_cache/` for shared knowledge management
2. **MCP Tool Integration**: Prepare context7, WebSearch, and WebFetch for technology research
3. **Intelligence Discovery**: Let Claude identify technologies to research (no hardcoded lists)
4. **Shared Knowledge**: Create research results accessible to all cognitive agents

**Research-Enabled Agent Framework**:
```yaml
Cognitive Agent Capabilities:
  intelligence_driven: true          # Pure intelligence, no hardcoded patterns
  research_enabled: true             # Full MCP research integration
  cognitive_specialization: true     # Thinking-based specialization
  
Research Integration:
  cache_access: ".guild/research_cache/"
  discovery_method: "intelligent_analysis"  # Not hardcoded patterns
  mcp_tools: ["context7", "WebSearch", "WebFetch"]
  knowledge_sharing: true            # Shared between all agents
```

## Setup Intelligence

**Cognitive Agent Creation Intelligence**:
{{core/agents}}

## Setup Protocol

### Phase 1: Pure Intelligence Project Discovery

**🧠 INTELLIGENCE-FIRST ANALYSIS** (No Hardcoded Patterns):
1. **Project Purpose Understanding**: What does this project do? Who are the users?
2. **Technology Stack Discovery**: Use Claude's intelligence to identify ALL technologies
3. **Architecture Comprehension**: Understand system structure, boundaries, and patterns
4. **Domain Recognition**: Identify business domain, industry context, and requirements
5. **Quality Assessment**: Extract performance, security, reliability, and testing needs

**🔍 COMPREHENSIVE DISCOVERY PROCESS**:
1. **Intelligent Code Analysis**: Analyze entire codebase to understand technologies and patterns
2. **Dependency Intelligence**: Understand technology relationships and interdependencies  
3. **Convention Discovery**: Extract coding standards and project-specific approaches
4. **Business Logic Analysis**: Understand domain requirements and business context
5. **Quality Standards Extraction**: Identify testing strategies and quality requirements

**Intelligence Capabilities**:
- **Any Technology**: Detect emerging, custom, proprietary, or experimental technologies
- **Any Framework**: Understand in-house, modified, or cutting-edge frameworks
- **Any Architecture**: Comprehend microservices, monolithic, serverless, or hybrid architectures
- **Any Domain**: Work with e-commerce, fintech, healthcare, gaming, IoT, or any business domain
- **Any Language**: Support any programming language or technology stack

### Phase 2: Cognitive Agent Generation

**MANDATORY**: All agents must be created in `$PROJECT_ROOT/.claude/agents/guild/` directory.

**🧬 COGNITIVE-FIRST AGENT CREATION**:
1. **Cognitive Requirement Analysis**: Determine which thinking approaches are needed
2. **Domain Grouping**: Group project areas by cognitive requirements, not technologies
3. **Persona Assignment**: Assign appropriate cognitive personas based on analysis
4. **Context Embedding**: Include discovered technologies, patterns, and project conventions
5. **Boundary Intelligence**: Define clear, conflict-free responsibilities through analysis

**Cognitive Agent Types** (Based on Thinking Requirements):
- **UX Experts**: For any user-facing technology requiring empathetic, user-centered thinking
- **Systems Architects**: For any technology requiring structural, integration-focused thinking  
- **Analytical Thinkers**: For any technology requiring data-driven, optimization-focused thinking
- **Quality Guardians**: For any technology requiring risk-aware, systematic thinking
- **Security Specialists**: For any technology requiring threat-aware, defensive thinking
- **Domain Experts**: For any technology requiring business-focused, context-aware thinking

### Phase 3: Cognitive Agent Validation

**🔍 INTELLIGENCE-DRIVEN QUALITY ASSURANCE**:
1. **Complete Coverage**: Ensure all project areas have appropriate cognitive persona coverage
2. **Cognitive Balance**: Verify appropriate mix of thinking approaches for project requirements
3. **Boundary Clarity**: Confirm clear, non-overlapping responsibilities through intelligent analysis
4. **Scaling Readiness**: Ensure agents support 1-20 parallel execution and multiple instances
5. **Integration Capability**: Verify cognitive personas can collaborate effectively

## Intelligence-First Discovery Examples

**No Hardcoded Patterns**: These examples show Claude's intelligence discovering ANY project type through analysis, not pattern matching.

### Example: Discovered Modern Web Application
```yaml
Intelligence Discovery:
  project_analysis: "E-commerce platform with React frontend, Node.js backend, PostgreSQL database"
  cognitive_requirements:
    - "User experience optimization for conversion rates"
    - "System architecture for scalability and performance"
    - "Security for payment processing and user data"
    - "Analytical thinking for performance optimization"
    - "Quality assurance for reliability"
    - "Domain expertise for e-commerce business logic"

Generated Cognitive Agents:
  - ux-expert-frontend-specialist: "User Experience Expert for React UI optimization"
  - architect-backend-specialist: "Systems Architect for Node.js API design"
  - security-payment-specialist: "Security Specialist for payment integration"
  - analytical-database-specialist: "Analytical Thinker for PostgreSQL optimization"
  - quality-testing-specialist: "Quality Guardian for comprehensive testing"
  - domain-ecommerce-specialist: "Domain Expert for e-commerce workflows"
```

### Example: Discovered Data Science Pipeline
```yaml
Intelligence Discovery:
  project_analysis: "ML pipeline with Python, Jupyter notebooks, scikit-learn, FastAPI serving"
  cognitive_requirements:
    - "Analytical thinking for data processing and model development"
    - "System architecture for ML pipeline design"
    - "Domain expertise for statistical validity"
    - "Quality assurance for model validation"

Generated Cognitive Agents:
  - analytical-data-specialist: "Analytical Thinker for data processing and ETL"
  - analytical-ml-specialist: "Analytical Thinker for model training and evaluation"
  - architect-pipeline-specialist: "Systems Architect for ML pipeline design"
  - domain-science-specialist: "Domain Expert for statistical analysis"
  - quality-validation-specialist: "Quality Guardian for model validation"
```

### Example: Discovered Custom Enterprise System
```yaml
Intelligence Discovery:
  project_analysis: "Custom in-house framework with proprietary technologies and legacy integrations"
  cognitive_requirements:
    - "Systems thinking for complex integrations"
    - "Domain expertise for business-specific requirements"
    - "Analytical thinking for performance optimization"
    - "Security awareness for enterprise compliance"

Generated Cognitive Agents:
  - architect-integration-specialist: "Systems Architect for complex integrations"
  - domain-business-specialist: "Domain Expert for enterprise requirements"
  - analytical-performance-specialist: "Analytical Thinker for optimization"
  - security-compliance-specialist: "Security Specialist for enterprise compliance"
```

## Cognitive Agent Creation Process

### Intelligence-Driven Generation

Each cognitive agent is created through pure intelligence analysis:

1. **Cognitive Requirement Analysis**: Determine which thinking approaches are needed
2. **Domain Context Integration**: Include discovered project patterns and conventions
3. **Persona Specialization**: Assign cognitive persona based on requirements
4. **Boundary Intelligence**: Define responsibilities through architectural understanding

### Cognitive Agent Specification Format

```markdown
---
name: {cognitive_persona}-{domain_area}-specialist  
description: "Cognitive {persona_type} for {discovered_domain} with research capabilities"
model: inherit
thinking_mode: think
---

## Cognitive Role
{cognitive_persona_description}

## Thinking Approach
**Mental Models**: {persona_mental_models}
**Problem-Solving Style**: {persona_approach}
**Priority Framework**: {persona_priorities}

## Project Context
**Domain Understanding**: {discovered_project_domain}
**Technology Stack**: {discovered_technologies}  
**Service Boundaries**: {discovered_boundaries}
**Quality Requirements**: {discovered_quality_standards}

## Research Protocol
**MCP Integration**:
1. Access shared research cache from workflow Phase 2
2. Research unfamiliar technologies using context7, WebSearch, WebFetch
3. Validate against discovered project patterns
4. Implement using latest documentation and best practices

## Cognitive Responsibilities
- Apply {cognitive_persona} thinking to all assigned tasks
- Work within {intelligent_file_boundaries} 
- Coordinate through {discovered_integration_patterns}
- Maintain {intelligent_quality_requirements}

## Multiple Invocation Strategy
- Support parallel instances on different file sets
- Handle sequential invocations for different features  
- Share cognitive insights between invocations
- Prevent conflicts through clear file ownership
```

## Project Intelligence Integration

**Intelligence-Based Pattern Discovery**:
- Extract coding standards through intelligent code analysis, not pattern matching
- Identify architectural approaches through contextual understanding
- Learn testing strategies through intelligent analysis of existing tests
- Understand business patterns through intelligent component relationship analysis

**Cognitive Agent Context Embedding**:
- Each agent contains cognitive approach specialized for project context
- Project-specific intelligence embedded through discovery, not templates
- Clear understanding of implementation patterns through analysis
- Quality standards derived from intelligent codebase analysis

## Setup Completion with Intelligence Verification

**Success Criteria**:
- ✅ All cognitive agents created in `$PROJECT_ROOT/.claude/agents/guild/` directory
- ✅ Complete cognitive coverage through intelligence analysis
- ✅ Clear boundaries defined through architectural intelligence
- ✅ Project conventions embedded through intelligent discovery
- ✅ Cognitive specialization aligned with project requirements
- ✅ Multiple invocation and parallel instance support enabled (1-20 agents)

**Intelligence Validation**:
- Verify cognitive agents understand actual project architecture
- Confirm agents can apply appropriate thinking approaches
- Check that cognitive specialization matches project needs
- Ensure agents can coordinate through shared research knowledge

**Output Message**:
```
🎉 Guild Setup Complete - Pure Intelligence!

🧠 Project Intelligence Analysis:
- Discovered Technologies: {intelligence_discovered_tech_list}
- Business Domain: {intelligent_domain_analysis}
- Architecture: {intelligent_architecture_analysis}
- Quality Standards: {intelligent_quality_analysis}

🧬 Generated Cognitive Agents ({agent_count}):
- {cognitive_agent_list_with_specializations}

📂 Agent Location: .claude/agents/guild/
🔍 Research Cache: .guild/research_cache/

🚀 Ready for cognitive execution: /guild "your task description"
```

## Error Handling with Intelligence

**Discovery Intelligence**:
- Continue with intelligent analysis even if project structure is unusual
- Adapt to ANY project type through pure intelligence
- Provide guidance for unique architectures through intelligent understanding

**Generation Intelligence**:
- Create cognitive agents appropriate for ANY discovered requirements
- Warn user about potential cognitive gaps through intelligent analysis
- Provide intelligent troubleshooting and suggestions

**Integration Intelligence**:
- Ensure directory creation with intelligent error handling
- Handle any issues through intelligent problem-solving
- Provide context-aware error resolution guidance

This pure intelligence-first setup process ensures adaptive cognitive agent creation that works with ANY project, technology, or domain through Claude's intelligence rather than hardcoded patterns.