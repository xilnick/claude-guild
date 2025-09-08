# /guild:setup

---
name: guild-setup  
model: inherit
thinking_mode: ultrathink
description: "Intelligent project analysis and dynamic agent creation using native intelligence with mandatory understanding confirmation, verification, and iterative refinement until user satisfaction"
---

## Command Purpose
Use Claude's native intelligence to analyze project needs and create a **comprehensive team of specialized agents** covering all major aspects of the project, following Anthropic's Tool Use Implementation best practices for optimal performance and reliability.

## 🔄 ITERATIVE WORKFLOW (MANDATORY)

<iterative_workflow>
  <phase_1_understanding_confirmation>
    **MANDATORY: Always confirm understanding first**
    
    1. Analyze the project structure and technology stack
    2. Present understanding of agent team needs:
       "I understand you want me to create a comprehensive agent team for your project.
        This involves:
        - Analyzing your project architecture and technology stack
        - Identifying specialized domains requiring dedicated agents
        - Creating agents with proper Tool Use Implementation standards
        - Ensuring complete coverage of all project aspects
        Is this understanding correct?"
    3. Wait for user confirmation
    4. Ask clarifying questions if needed
    5. Iterate until user approves understanding
  </phase_1_understanding_confirmation>
  
  <phase_2_project_analysis>
    After approval, analyze project for:
    - Technology boundaries and frameworks
    - Service and component architectures  
    - Domain-specific requirements
    - Integration and coordination needs
  </phase_2_project_analysis>
  
  <phase_3_agent_creation>
    Create comprehensive agent team following Tool Use Implementation
  </phase_3_agent_creation>
  
  <phase_4_verification>
    **MANDATORY: Run verification after agent creation**
    
    1. Check all project aspects are covered
    2. Verify each agent follows Tool Use Implementation standards
    3. Look for gaps in team capabilities
    4. Present findings to user
  </phase_4_verification>
  
  <phase_5_gap_resolution>
    **MANDATORY: Iterate until satisfied**
    
    If gaps found or user not satisfied:
    1. Identify missing capabilities or coverage areas
    2. Create additional agents to fill gaps
    3. Refine existing agents based on feedback
    4. Re-verify team completeness
    5. Continue until user confirms satisfaction
  </phase_5_gap_resolution>
</iterative_workflow>

## 🧠 **NATIVE INTELLIGENCE APPROACH**

<philosophy>
  Comprehensive agent team creation following Tool Use Implementation:
  - Create specialized agents for ALL major project aspects
  - Use 3-4 sentence descriptions per tool definition guidelines
  - Enable parallel execution through team coordination
  - Implement robust error handling in each agent
  - Cover every technical layer and domain area
  - Ensure no gaps in expertise coverage
</philosophy>

## **DYNAMIC AGENT CREATION**

### **Intelligence-Driven Discovery**

<discovery>
  Claude naturally analyzes the project to understand:
  
  🔍 **What exists:**
  - Technologies and frameworks present
  - Project structure and patterns
  - Testing and deployment setup
  - Documentation approach
  
  🎯 **What's needed:**
  - Where specialized expertise would help
  - Which tasks benefit from dedicated agents
  - When dynamic specialists suffice
  - How to optimize for efficiency
  
  📂 **Natural boundaries:**
  - [Technology layers discovered in your project]
  - [Service boundaries identified in architecture]
  - [Domain boundaries found in business logic]
  - [Workflow patterns observed in codebase]
  - [Integration points between components]
  - [Any other natural divisions Claude discovers]
</discovery>

### **Agent Creation Principles**

<principles>
  **USER-DRIVEN CREATION MANDATE:**
  Create agents based entirely on user requests and specifications:
  - No predetermined agent counts or limitations
  - No predefined agent lists or concrete specifications
  - Abstract capability domains only - user chooses implementations
  - Unlimited agent creation as needs evolve
  - Complete flexibility in specializations and focus areas
  
  **Capability Domain Approach:**
  Present abstract domains, let users specify:
  - Which domains need agent coverage
  - How many agents per domain (no limits)
  - What specializations within each domain
  - Custom configurations for unique needs
  - Additional agents as requirements change
  
  **On-Demand Agent Generation:**
  - Respond to specific user requests for agents
  - Create agents with exact specifications provided
  - Allow unlimited agents per capability domain
  - Support custom agent roles and specializations
  - Enable continuous agent creation as projects evolve
  
  **Each agent MUST include (per Tool Use Implementation):**
  - 3-4 sentence comprehensive description
  - Clear success criteria and domain boundaries
  - Error handling capabilities within their domain
  - Integration points with other domain agents
  - Parallel execution readiness with team coordination
  
  **Examples of User-Driven Creation:**
  - "Create 5 frontend agents: React, Vue, styling, state management, and performance"
  - "I need database agents for PostgreSQL optimization and MongoDB queries"  
  - "Set up testing domain with however many agents needed for complete coverage"
  - "Create security specialists for authentication, authorization, and vulnerability scanning"
  - "Generate DevOps agents for AWS, Docker, and CI/CD - as many as needed"
</principles>

### **Category-Based Organization**

<category_organization>
  **Directory Structure Based on Project Discovery:**
  
  Claude analyzes your project and creates logical categories:
  
  ```bash
  .claude/agents/guild/
  ├── [discovered-category-1]/    # First domain Claude identifies
  │   ├── [specialist-name-A].md
  │   ├── [coordinator-name-B].md
  │   └── [expert-name-C].md
  ├── [discovered-category-2]/    # Second domain found
  │   ├── [specialist-name-D].md
  │   ├── [specialist-name-E].md
  │   └── [coordinator-name-F].md
  ├── [discovered-category-3]/    # Third area discovered
  │   ├── [specialist-name-G].md
  │   └── [optimizer-name-H].md
  └── [discovered-category-N]/    # Additional domains as needed
      └── [specialist-name-X].md
  ```
  
  **Categories are determined by:**
  - Technologies discovered in your project
  - Natural architectural boundaries
  - Team workflow patterns
  - NOT by predefined templates or lists
  - NOT by team size (minimal/balanced/comprehensive)
  
  **Abstract Examples (actual names discovered at runtime):**
  - `[technology-layer]/` - Based on tech stack layers found
  - `[business-domain]/` - Based on domain boundaries identified
  - `[service-boundary]/` - Based on service architecture discovered
  - `[workflow-area]/` - Based on workflow patterns observed
</category_organization>

### **Natural Agent Generation**

<generation>
  **Following Tool Use Implementation from recommendations.md:**
  
  **Agent Template Structure (Embedded in Setup Command):**
  ```markdown
  ---
  name: [descriptive-agent-name]
  model: inherit
  thinking_mode: ultrathink
  description: "[3-4 SENTENCES MANDATORY: Primary purpose and what this agent does. When it should be used vs other agents in the team. Important limitations or constraints. Expected outcomes and deliverables from this agent.]"
  ---
  
  ## Purpose
  [Abstract description of this agent's role in the team and primary responsibilities]
  
  ## Role Description
  <role>
    **Primary Function:**
    - [High-level responsibility without specific implementation details]
    - [Core workflow patterns this agent handles]
    - [Abstract problem domains within scope]
    
    **Team Position:**
    - [Relationship to other agents in abstract terms]
    - [Coordination responsibilities without specifics]
    - [Decision-making authority boundaries]
    
    **Scope Boundaries:**
    - [What this agent handles vs delegates]
    - [Abstract complexity levels managed]
    - [Domain expertise coverage areas]
  </role>
  
  ## Expertise Areas
  <expertise>
    **Domain Knowledge:**
    - [Abstract technical domains without specific tools]
    - [Conceptual frameworks and methodologies]
    - [Problem-solving approaches and patterns]
    
    **Skill Categories:**
    - [High-level capability areas]
    - [Abstract reasoning and analysis skills]
    - [Communication and coordination abilities]
    
    **Integration Capabilities:**
    - [Abstract interface patterns]
    - [Workflow coordination approaches]
    - [Information processing and transformation]
  </expertise>
  
  ## Success Criteria
  <success_criteria>
    **Abstract Outcomes:**
    - [Conceptual deliverable categories]
    - [Quality measure types]
    - [Value delivery patterns]
    
    **Quality Standards:**
    - [Abstract quality principles]
    - [Consistency and reliability measures]
    - [Stakeholder satisfaction criteria]
    
    **Verification Approach:**
    - [Abstract validation methods]
    - [Quality assurance patterns]
    - [Feedback integration processes]
  </success_criteria>
  
  ## Error Handling
  <error_handling>
    **Error Response Structure:**
    \`\`\`json
    {
      "type": "error",
      "agent": "[agent-name]",
      "error": {
        "type": "[abstract-error-category]",
        "message": "Clear description",
        "details": "Context without specific implementations",
        "suggestions": ["Abstract recovery option 1", "Abstract recovery option 2"]
      }
    }
    \`\`\`
    
    **Recovery Strategies:**
    - For requirement ambiguity: [Abstract clarification approach]
    - For coordination failures: [Abstract resolution patterns]
    - For resource constraints: [Abstract adaptation strategies]
    
    **Escalation Path:**
    - [Abstract decision tree for issue resolution]
    - [Communication protocols for complex problems]
    - [Delegation patterns for specialized needs]
  </error_handling>
  
  ## Coordination Patterns
  <coordination>
    **Collaboration Approach:**
    - [Abstract methods for working with other agents]
    - [Information sharing and synchronization patterns]
    - [Conflict resolution and decision-making processes]
    
    **Communication Protocols:**
    - [Abstract formats for status updates]
    - [Handoff procedures between agents]
    - [Reporting and documentation standards]
    
    **Integration Methods:**
    - [Abstract approaches to system integration]
    - [Data flow and processing patterns]
    - [Quality assurance and verification workflows]
  </coordination>
  
  ## Task Execution Pattern
  <execution_pattern>
    **Abstract Workflow:**
    1. **Understanding Phase**
       - [Abstract requirement analysis approach]
       - [Scope clarification methods]
       - [Dependency identification patterns]
    
    2. **Planning Phase**
       - [Abstract decomposition strategies]
       - [Resource and timeline planning approaches]
       - [Risk assessment and mitigation patterns]
    
    3. **Implementation Phase**
       - [Abstract execution methodologies]
       - [Quality assurance integration]
       - [Progress monitoring and reporting]
    
    4. **Verification Phase**
       - [Abstract validation approaches]
       - [Quality measure evaluation]
       - [Stakeholder feedback integration]
    
    5. **Delivery Phase**
       - [Abstract completion criteria]
       - [Handoff and documentation patterns]
       - [Continuous improvement processes]
  </execution_pattern>
  
  ## Best Practices
  <best_practices>
    **Abstract Principles:**
    - [High-level quality and effectiveness guidelines]
    - [Collaboration and communication standards]
    - [Continuous learning and adaptation approaches]
    
    **Operational Guidelines:**
    - [Abstract workflow optimization methods]
    - [Quality assurance and verification patterns]
    - [Problem-solving and decision-making frameworks]
    
    **Team Integration:**
    - [Abstract coordination and communication approaches]
    - [Knowledge sharing and documentation standards]
    - [Conflict resolution and consensus-building methods]
  </best_practices>
  ```
  
  **Agent Generation Process:**
  1. Analyze project to identify needed expertise domains (abstract)
  2. Create agent using above template structure (abstract only)
  3. Customize based on abstract capability requirements
  4. Place in appropriate category directory
  5. Document abstract integration points with other agents
  
  **Each agent focuses on abstract concepts, roles, and patterns**
  **All agents avoid specific code samples, file structures, or implementation details**
  **Error handling and coordination built into every agent at abstract level**
</generation>

### **Interactive Process**

<process>
  1. **Project Discovery Phase**
     - Analyze project structure and architecture
     - Identify technology stack and frameworks
     - Map application boundaries and domains
     - Discover workflow patterns and integrations
     - Note capability areas present in project
  
  2. **Mode Selection Phase**
     "Based on project analysis, I can create agents in two approaches:
     
     🎯 **Extended Mode** (Comprehensive - Default)
     Covers ALL capability domains discovered in your project:
     - Technical implementation across all layers
     - Complete quality assurance coverage
     - Full infrastructure and operations support
     - Comprehensive maintenance and optimization
     - User experience and business intelligence
     - Domain-specific and regulatory requirements
     
     ⚖️ **Balanced Mode** (Essential)
     Focuses on core capability domains:
     - Primary technical implementation needs
     - Essential quality and security practices
     - Key operational and deployment capabilities
     - Basic maintenance and documentation
     
     Which approach would you prefer? 
     
     After mode selection, you can specify:
     - Which capability domains need agents
     - What specific specializations within domains
     - How many agents per domain area
     - Custom agent configurations for your needs"
  
  3. **User-Driven Agent Creation**
     Based on mode and user requests:
     
     **For Extended Mode:**
     - Present all discovered capability domains
     - Allow user to select specific areas of focus
     - Enable custom agent specializations
     - Create agents based on user specifications
     
     **For Balanced Mode:**
     - Present essential capability domains
     - Allow user to prioritize specific areas
     - Focus on core technical and operational needs
     - Create streamlined agent set per user requests
     
     **Agent Creation Process:**
     - User specifies domain: "I need frontend agents"
     - User defines specialization: "React with TypeScript focus"
     - User requests quantity: "Create 2-3 specialized agents"
     - System generates agents per specifications
</process>

### **Abstract Capability Coverage**

<capability_domains>
  ## 🎯 **EXTENDED MODE** (Default - Comprehensive Coverage)
  
  **Technical Implementation Domains:**
  - User interface and experience layers
  - Business logic and application services  
  - Data persistence and management systems
  - API and integration interfaces
  - Build, deployment, and tooling systems
  
  **Quality Assurance Domains:**
  - Automated testing across all levels
  - Performance and load validation
  - Security and compliance verification
  - Accessibility and usability validation
  - Cross-platform and compatibility testing
  
  **Infrastructure & Operations Domains:**
  - Deployment and orchestration
  - Cloud and infrastructure management
  - Monitoring and observability
  - Environment and configuration management
  - Scaling and reliability systems
  
  **Code Quality & Maintenance Domains:**
  - Code review and standards enforcement
  - Refactoring and technical debt management
  - Performance optimization and analysis
  - Documentation and knowledge management
  - Dependency and security management
  
  **Integration & Communication Domains:**
  - External service integration
  - Event-driven and asynchronous systems
  - Data transformation and pipeline systems
  - Service coordination and orchestration
  
  **User Experience & Design Domains:**
  - User interface design and implementation
  - User experience optimization
  - Cross-device and responsive design
  - Localization and internationalization
  
  **Business Intelligence Domains:**
  - Analytics and measurement systems
  - Reporting and visualization
  - Experimentation and optimization
  - Business metrics and KPI tracking
  
  **Domain-Specific Capabilities:**
  - Industry-specific requirements
  - Business domain expertise
  - Regulatory and compliance needs
  - Custom workflow and process automation
  
  ## ⚖️ **BALANCED MODE** (Essential Coverage)
  
  **Core Technical Domains:**
  - Primary application layers (as discovered)
  - Essential data management
  - Key integration points
  - Fundamental API interfaces
  
  **Essential Quality Domains:**
  - Core testing capabilities
  - Basic security practices
  - Code quality standards
  - Essential documentation
  
  **Key Operations Domains:**
  - Deployment and release processes
  - Basic monitoring and alerts
  - Environment management
  - Essential maintenance tasks
  
  **User-Driven Agent Creation:**
  - Users specify which domains need agents
  - Users request specific agent types within domains
  - Users define agent specializations and focus areas
  - No predetermined agent counts or specifications
  - Flexible agent generation based on actual needs
  
  **Request Format Examples:**
  - "Create agents for frontend React development"
  - "I need database optimization specialists"
  - "Set up testing agents for API validation"
  - "Create security-focused agents for authentication"
  - "Generate DevOps agents for AWS deployment"
</capability_domains>

### **Flexible Setup Process**

<flexible_setup>
  **USER-DRIVEN AGENT CREATION:**
  
  "I've analyzed your project and identified these capability domains:
  
  🎯 **Extended Mode** (Comprehensive - Default)
  Complete coverage across all discovered domains:
   ✅ **Unlimited agent creation** - No count restrictions
   ✅ **Abstract capability domains** - You choose specific implementations  
   ✅ **User-specified agents** - Request exactly what you need
   ✅ **Flexible specializations** - Custom agent configurations
   ✅ **On-demand generation** - Create agents as needs evolve
   
   Available capability domains:
   - [Technical Implementation] - Choose your stack-specific agents
   - [Quality Assurance] - Select testing and validation approaches  
   - [Infrastructure Operations] - Define deployment and monitoring needs
   - [Code Maintenance] - Specify review and optimization requirements
   - [Integration Systems] - Request API and service coordination
   - [User Experience] - Define UI/UX and design requirements
   - [Business Intelligence] - Choose analytics and reporting needs
   - [Domain-Specific] - Request industry/business specific agents
   
   ⚖️ **Balanced Mode** (Essential)
   Focused on core discovered domains:
   ✅ **Essential capabilities** - Core domains only
   ✅ **User-selected focus** - You prioritize which areas
   ✅ **Streamlined approach** - Focused but unlimited count
   ✅ **Expandable foundation** - Add more agents anytime
   
   Available essential domains:
   - [Core Technical] - Your primary technology stack
   - [Essential Quality] - Basic testing and code standards
   - [Key Operations] - Deployment and basic monitoring
   - [Basic Maintenance] - Documentation and essential upkeep
   
   **How to proceed:**
   1. Choose mode (Extended recommended for full flexibility)
   2. Tell me which domains you want agents for
   3. Specify desired specializations within each domain
   4. Request additional agents anytime as needs change
   
   **Example requests:**
   - 'Create React specialists for frontend domain'
   - 'I need 3 database agents: PostgreSQL, Redis, and migration specialist'
   - 'Set up comprehensive testing domain with unit, integration, and e2e agents'
   - 'Create security-focused agents for authentication and authorization'
   
   Which mode would you prefer, and which domains should I start with?"
</flexible_setup>



### **Usage Examples**

<examples>
  <with_agents>
    When agents exist:
    ```yaml
    subagent_type: "[created-agent-name]"
    description: "Handle [specific task]"
    prompt: "Context: [task details]"
    ```
  </with_agents>
  
  <without_agents>
    Using dynamic specialists:
    ```yaml
    subagent_type: "general-purpose"
    description: "Expert in [discovered technology]"
    prompt: "You are a [tech] specialist. [Full context]"
    ```
  </without_agents>
</examples>

### **Best Practices**

<best_practices>
  ✅ **Follow user specifications exactly** - No predetermined structures
  ✅ **Unlimited agent creation** - No count restrictions or limits
  ✅ **Abstract domain presentation** - Let users choose implementations
  ✅ **User-driven specializations** - Create exactly what is requested
  ✅ **Follow Tool Use Implementation guidelines** - 3-4 sentence descriptions
  ✅ **Enable parallel execution** - All agents coordinate effectively
  ✅ **Include comprehensive error handling** - Every agent handles failures
  ✅ **Always use ultrathink and inherit models** - Consistent performance
  ✅ **Support continuous expansion** - Add agents anytime
  ✅ **Flexible category organization** - User-defined structures
  ✅ **Trust native intelligence** - Let Claude naturally verify agent creation
</best_practices>

### **Verification Process**

<setup_verification>
  **MANDATORY: Comprehensive verification after agent creation**
  
  1. **Coverage Verification:**
     - All major project aspects have dedicated agents
     - No gaps in technical domain coverage
     - Agent capabilities match project requirements
     - Integration points properly handled
  
  2. **Quality Verification:**
     - Each agent follows Tool Use Implementation standards
     - All agents have proper 3-4 sentence descriptions
     - Error handling implemented in every agent
     - Parallel execution capabilities documented
  
  3. **User Satisfaction Check:**
     - Present complete agent team to user
     - Explain coverage and capabilities
     - Ask for feedback on gaps or adjustments needed
     - Continue refining until user fully satisfied
  
  4. **Integration Verification:**
     - Agents coordinate effectively with each other
     - No redundant or conflicting specializations
     - Clear handoff procedures between agents
     - Team supports both persistent and dynamic workflows
</setup_verification>

---

**Philosophy**: Minimal overhead, maximum intelligence, dynamic adaptation
**Approach**: Create agents only when they add clear value over dynamic specialists