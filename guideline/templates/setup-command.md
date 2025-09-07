# /guild:setup

---
name: guild-setup  
model: inherit
thinking_mode: ultrathink
description: "Discover project needs and create optimal agent teams using native intelligence"
---

## Command Purpose
Use Claude's native intelligence to discover project architecture, technology stack, and patterns, then create an optimal team of specialized agents with ultrathinking capabilities.

## 🧠 **NATIVE INTELLIGENCE DISCOVERY**

<discovery_philosophy>
  Claude naturally analyzes the project without rigid templates.
  Trust Claude's intelligence to:
  - Discover technologies, frameworks, and patterns
  - Identify natural boundaries and components
  - Determine optimal specialist composition
  - Create perfectly tailored agent teams
</discovery_philosophy>

## **INTELLIGENT TEAM COMPOSITION**

### **Three-Tier Team Options**

<team_composition>
  Claude offers three team compositions based on project needs:
  
  1. **SUFFICIENT** (Minimal Viable Team)
     - Core agents only
     - Covers essential functionality
     - 3-5 specialists typical
     - For simple projects or quick starts
  
  2. **OPTIMAL** (Default - Balanced Coverage)
     - Comprehensive yet focused
     - All major components covered
     - 5-10 specialists typical
     - Best performance/coverage ratio
  
  3. **EXTENDED** (Maximum Coverage)
     - Specialized agents for every aspect
     - Deep expertise distribution
     - 10-15+ specialists typical
     - For complex enterprise projects
</team_composition>

### **Phase 1: Native Project Discovery**

<discovery_process>
  Use Claude's intelligence to naturally discover:
  
  🔍 **Technology Stack Analysis**
  Let Claude explore and identify:
  - Languages and frameworks
  - Build systems and tooling
  - Testing frameworks
  - Deployment patterns
  - Documentation systems
  
  📊 **Architecture Understanding**
  Claude naturally maps:
  - Component boundaries
  - Service relationships
  - Data flow patterns
  - Integration points
  - Critical workflows
  
  🎯 **Specialization Identification**
  Claude determines needed expertise:
  - Technical domain specialists
  - Process and workflow experts
  - Quality and review specialists
  - Integration coordinators
</discovery_process>

### **Phase 2: Intelligent Agent Creation**

<agent_creation>
  **MANDATORY AGENT CONFIGURATION:**
  ```markdown
  ---
  name: [agent-name]
  model: inherit              # ALWAYS inherit
  thinking_mode: ultrathink   # ALWAYS ultrathink
  description: [specific purpose]
  ---
  # No tools specification - inherits from parent
  ```
  
  **Directory Structure:**
  ```bash
  .claude/agents/guild/
  ├── sufficient/     # Minimal team
  ├── optimal/        # Default team
  └── extended/       # Full team
  ```
</agent_creation>

### **Agent Templates with Native Intelligence**

<intelligent_templates>
  <specialist_template>
    ```markdown
    ---
    name: [discovered-tech]-specialist
    model: inherit
    thinking_mode: ultrathink
    description: Expert in [discovered technology/domain]
    ---
    
    You are a [technology] specialist with ultrathinking capabilities.
    
    ## Native Intelligence
    Use your natural intelligence to:
    - Understand [technology] patterns in this project
    - Identify optimal solutions
    - Think deeply about implications
    - Coordinate with other specialists naturally
    
    ## Discovered Context
    [Claude fills this based on discovery]
    - Technology version: [discovered]
    - Patterns found: [discovered]
    - Key directories: [discovered]
    - Integration points: [discovered]
    
    ## Approach
    Trust your intelligence to:
    - Analyze requirements deeply
    - Find natural solutions
    - Maintain consistency
    - Optimize for project needs
    ```
  </specialist_template>
  
  <coordinator_template>
    ```markdown
    ---
    name: [aspect]-coordinator
    model: inherit
    thinking_mode: ultrathink
    description: Coordinates [discovered workflow/integration]
    ---
    
    You are an integration coordinator with ultrathinking.
    
    ## Native Coordination
    Use natural intelligence to:
    - Understand component relationships
    - Coordinate specialist work
    - Ensure seamless integration
    - Maintain architectural coherence
    
    ## Discovered Patterns
    [Claude discovers and fills]
    - Integration points: [discovered]
    - Data flows: [discovered]
    - Dependencies: [discovered]
    ```
  </coordinator_template>
</intelligent_templates>

### **Phase 3: Team Composition Selection**

<team_selection>
  **Interactive Selection Process:**
  
  Claude presents discovered project analysis:
  ```
  Project Analysis Complete:
  - Technologies: [list discovered]
  - Architecture: [describe discovered]
  - Complexity: [assessed level]
  
  Team Composition Options:
  
  1. SUFFICIENT (3-5 agents):
     - [Core Agent 1]: Handles [primary tech]
     - [Core Agent 2]: Manages [critical component]
     - [Core Agent 3]: Coordinates [integration]
  
  2. OPTIMAL (5-10 agents) [RECOMMENDED]:
     - All from SUFFICIENT plus:
     - [Domain Agent 4]: Specializes in [area]
     - [Quality Agent 5]: Reviews [aspect]
     - [Process Agent 6]: Manages [workflow]
     ...
  
  3. EXTENDED (10-15+ agents):
     - All from OPTIMAL plus:
     - [Specialized Agent]: Deep expertise in [niche]
     - [Auxiliary Agent]: Handles [edge cases]
     ...
  
  Which composition? (sufficient/optimal/extended) [default: optimal]:
  ```
</team_selection>

### **Phase 4: Intelligent Context Distribution**

<context_optimization>
  **Context Management Strategy:**
  
  Claude intelligently distributes context:
  - **Shared Context**: Project overview, standards
  - **Specialist Context**: Domain-specific knowledge
  - **Boundary Context**: Integration touchpoints
  - **Minimal Overlap**: Avoid redundancy
  
  **Dynamic Context Loading:**
  ```markdown
  ## Context Awareness
  This agent has access to:
  - [Specific directories/files relevant to role]
  - [Patterns discovered in those areas]
  - [Dependencies that affect this domain]
  
  Related specialists:
  - [Agent X]: For [integration point]
  - [Agent Y]: For [dependency]
  ```
</context_optimization>

### **Phase 5: Team Documentation**

<documentation>
  **Auto-Generated Team Reference:**
  
  ```markdown
  # Project Agent Team - [Composition Level]
  
  ## Discovery Summary
  **Technologies Found**: [list]
  **Architecture Type**: [identified pattern]
  **Complexity Assessment**: [level]
  **Team Size**: [number] specialists
  
  ## Agent Roster
  
  ### Core Team (Sufficient)
  1. **[name]**: [purpose]
     - Expertise: [discovered needs]
     - Coverage: [files/components]
  
  ### Extended Coverage (Optimal)
  [Additional agents...]
  
  ### Specialized Experts (Extended)
  [Deep specialization agents...]
  
  ## Coordination Patterns
  
  ### Natural Workflows
  - Feature Development: [agent flow]
  - Bug Fixes: [agent flow]
  - Refactoring: [agent flow]
  
  ### Integration Points
  - [Component A ↔ B]: [coordinating agent]
  - [Service X ↔ Y]: [coordinating agent]
  
  ## Usage Examples
  
  ### Simple Task
  ```yaml
  subagent_type: "[agent-name]"
  description: "Fix bug in [component]"
  prompt: "Details: [specific issue]"
  ```
  
  ### Complex Task (Multiple Agents)
  ```yaml
  # Parallel execution
  - subagent_type: "[frontend-agent]"
    prompt: "Update UI for [feature]"
  - subagent_type: "[backend-agent]"  
    prompt: "Add API endpoint for [feature]"
  ```
  
  ## Maintenance
  - Created: [timestamp]
  - Based on: [project state]
  - Review when: [triggers]
  ```
</documentation>

### **Best Practices**

<best_practices>
  ✅ **ALWAYS use ultrathink for ALL agents**
  ✅ **ALWAYS inherit model - never specify**
  ✅ **NEVER specify tools - use inheritance**
  ✅ **Trust Claude's native intelligence for discovery**
  ✅ **Ask user for team composition preference**
  ✅ **Default to OPTIMAL if no preference given**
  ✅ **Create agents based on discovered needs, not templates**
  ✅ **Optimize context distribution for efficiency**
  ✅ **Document the team structure for future reference**
  ✅ **Use natural language in agent prompts**
</best_practices>

### **Intelligence Validation**

<validation>
  After creation, verify:
  - ✓ All agents have thinking_mode: ultrathink
  - ✓ All agents have model: inherit
  - ✓ No tools are specified (inheritance only)
  - ✓ Context is optimally distributed
  - ✓ Team covers all discovered needs
  - ✓ Natural intelligence is emphasized
  - ✓ Documentation captures discovery insights
</validation>

---

**Intelligence Source**: Native Claude intelligence for optimal project analysis and team composition
**Framework Alignment**: Follows `@guideline/guide/framework.md` and Anthropic best practices