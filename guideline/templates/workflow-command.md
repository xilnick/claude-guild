# /guild

---
name: guild-workflow  
model: sonnet
thinking_mode: ultrathink
description: "Intelligent task execution using persistent project-specific agents"
---

## Purpose

Execute tasks efficiently using persistent, project-specialized agents with **mandatory human-in-the-middle approval**. Always reasons about user requirements first, presents comprehensive understanding and approach for approval, then executes with persistent agents. No execution begins without explicit user confirmation.

## 🚀 **HUMAN-IN-THE-MIDDLE EXECUTION FRAMEWORK**

### **Phase 0: MANDATORY REQUIREMENT REASONING & APPROVAL**
**Claude Code MUST reason about user prompt and get approval before ANY execution:**
🧠 **Requirement Analysis** (30-60s):
- Deep analysis of user prompt to understand true intent and goals
- Identify potential ambiguities, missing context, or unclear requirements  
- Reason about optimal approach and expected outcomes
- Present comprehensive understanding for user validation

📋 **Approval Gate** (USER DECISION REQUIRED):
- **Requirements Understanding**: "Here's what I understand you want..."
- **Proposed Approach**: "Here's how I plan to accomplish this..."
- **Expected Outcomes**: "Here's what you can expect as results..."
- **🚨 MANDATORY USER APPROVAL**: No execution begins until user confirms understanding is correct

### **Phase 1: Agent Availability Check & Auto-Setup**
**Only after user approval, Claude Code checks for persistent agents:**
⚡ **Agent Discovery** (5-10s): 
- Check for existing persistent agents in `.claude/agents/guild/`
- If no agents exist, automatically trigger setup using workflow intelligence
- Load project context and agent specializations
- Plan optimal agent coordination for approved task

### **Phase 2: Intelligent Agent Selection & Coordination**
**Claude Code activates relevant persistent agents for approved parallel execution:**

#### **Direct Execution** (Simple tasks - single persistent agent)
```
🧠 Requirement Analysis: [detailed understanding of user intent] (30s)
📋 APPROVAL REQUIRED: "I understand you want [X]. I'll approach this by [Y]. Expected outcome: [Z]. Proceed?"
👤 USER APPROVES ✅

⚡ Task Analysis: Simple - Using single specialist (5s)
🤖 Activating: [ProjectSpecific]-Specialist
🔧 Executing with embedded project knowledge (1-2min)
✅ Complete - [summary of changes made]
```

#### **Coordinated Execution** (Multi-component tasks - multiple persistent agents)
```  
🧠 Requirement Analysis: [comprehensive understanding with scope breakdown] (45s)
📋 APPROVAL REQUIRED: "I understand you need [multi-component analysis]. My approach: [coordination strategy]. Expected: [integrated outcome]. Proceed?"
👤 USER APPROVES ✅

⚡ Task Analysis: Multi-component - Coordinating specialists (10s)
🤖 Activating Persistent Agents:
  ├─ 🤖 [Backend-Specialist]: [specific backend scope]
  ├─ 🤖 [Frontend-Specialist]: [specific frontend scope]  
  └─ 🤖 [Integration-Specialist]: [specific integration scope]
🔧 Parallel Implementation (2-5min) - All specialists working simultaneously
🔗 Coordinating Results (30s) - Integrating work streams
✅ Complete - [comprehensive summary]
```

#### **Comprehensive Execution** (Complex architectural tasks - full persistent team)
```
🧠 Requirement Analysis: [deep architectural understanding with risk assessment] (60s)
📋 APPROVAL REQUIRED: "I understand this complex request: [architectural analysis]. Strategy: [orchestration plan]. Deliverables: [comprehensive outcomes]. This is a significant change - proceed?"
👤 USER APPROVES ✅

⚡ Task Analysis: Architectural - Orchestrating full specialist team (15s)
🤖 Activating Full Persistent Team:
  ├─ 🤖 [Research-Specialist]: [investigation & discovery]
  ├─ 🤖 [Architecture-Specialist]: [design & patterns]
  ├─ 🤖 [Implementation-Specialists]: [parallel development work]
  ├─ 🤖 [Integration-Specialists]: [system connections]
  └─ 🤖 [Quality-Specialist]: [validation & testing]
🔧 Orchestrated Implementation (5-12min) - Coordinated parallel execution
🔗 Results Integration (1-2min) - Unifying all specialist outputs
✅ Complete - [architectural delivery summary]
```

### **Phase 3: Agent Learning & Optimization**
**After each approved execution:**
- Update persistent agents with learned patterns and successful strategies
- Record effective coordination protocols for future reuse
- Note optimal agent combinations for different task types
- Enhance agent project knowledge and execution efficiency

## 🧠 **MANDATORY REQUIREMENT REASONING PROCESS**

### **Critical Requirement: ALWAYS REASON FIRST**
**Before any execution, Claude Code MUST:**

#### **Step 1: Deep User Intent Analysis**
```markdown
## Requirement Understanding Process

### What I Understand:
- [Detailed breakdown of user's actual request]
- [Identified goals and success criteria]
- [Context and constraints considered]

### Potential Ambiguities:
- [Areas that need clarification]
- [Assumptions I'm making]
- [Alternative interpretations possible]

### My Proposed Approach:
- [Specific strategy and methodology]
- [Tools and agents I'll use]
- [Expected timeline and deliverables]

### Expected Outcomes:
- [Concrete results user can expect]
- [Files that will be modified/created]
- [Quality standards that will be applied]
```

#### **Step 2: MANDATORY APPROVAL GATE**
**🚨 EXECUTION BLOCKER: User must explicitly confirm:**
- ✅ "Yes, your understanding is correct"
- ✅ "Yes, proceed with this approach" 
- ✅ "Yes, I approve this plan"

**❌ NO EXECUTION without explicit user approval**

#### **Step 3: Reasoning Quality Standards**
**Every reasoning phase must include:**
- **Complete Understanding**: Demonstrate full comprehension of request
- **Clear Approach**: Specific methodology and tool selection
- **Realistic Expectations**: Honest assessment of outcomes and timeline
- **Risk Assessment**: Potential issues or complications identified
- **Quality Assurance**: Standards and validation approaches defined

### **Example Reasoning Templates**

#### **For Simple Tasks:**
```
🧠 I understand you want me to: [specific task]
📋 My approach: [methodology] using [specific agents/tools]
⏱️ Expected timeline: [realistic time estimate]
🎯 You'll get: [specific deliverables]
❓ Any questions or adjustments before I proceed?
```

#### **For Complex Tasks:**
```
🧠 I understand this complex request involves: [detailed breakdown]
📊 Scope analysis: [components, dependencies, risks]
📋 My approach: [detailed methodology with phases]
👥 Team plan: [specific agents and coordination strategy]
⏱️ Expected timeline: [realistic breakdown by phase]
🎯 Deliverables: [comprehensive outcome list]
⚠️ Potential challenges: [honest risk assessment]
✅ Quality measures: [validation and testing approach]
❓ Does this align with your vision? Any adjustments needed?
```

#### **For Ambiguous Requests:**
```
🧠 I see several possible interpretations of "[user request]":
   1. [Interpretation A with rationale]
   2. [Interpretation B with rationale] 
   3. [Interpretation C with rationale]

🤔 Questions for clarification:
   - [Specific question 1]
   - [Specific question 2]
   - [Specific question 3]

📋 Once clarified, I'll propose a specific approach and timeline.
❓ Which interpretation matches your intent, or could you clarify?
```

## 🤖 **PERSISTENT AGENT ACTIVATION**

**Claude Code intelligently selects relevant persistent agents based on:**

### **Task-Agent Matching Indicators**
- **File Scope**: Multiple files/directories = activate relevant domain specialists
- **Technology Stack**: Frontend + Backend = activate corresponding persistent specialists
- **System Integration**: Multiple services = activate integration specialists
- **Architecture Impact**: Cross-cutting changes = activate architecture + implementation specialists
- **Research Needed**: Unknowns = activate research + implementation specialists

### **Agent Activation Patterns**
```yaml
Single Component Change:
  - Agents: 1 domain-specific persistent agent
  - Pattern: Direct specialist execution with embedded knowledge

Multi-Component Task:  
  - Agents: 2-4 persistent specialists (backend, frontend, integration, testing)
  - Pattern: Coordinated parallel execution with pre-configured boundaries

Architectural Change:
  - Agents: 4-8 persistent specialists (research, architecture, implementation, integration, QA)
  - Pattern: Orchestrated team execution with embedded coordination protocols
```

### **Available Persistent Agent Types**

#### **Project-Specific Technology Specialists**
- **[Framework]-Frontend-Specialist**: Project-specific component patterns, styling conventions, interaction logic
- **[Language]-Backend-Specialist**: Project-specific API patterns, business logic, data processing
- **[Database]-Data-Specialist**: Project schema design, query patterns, performance optimization
- **[Stack]-DevOps-Specialist**: Project deployment patterns, monitoring, infrastructure automation

#### **Project-Contextualized Domain Specialists** 
- **Project-Research-Specialist**: Investigation with embedded project knowledge and patterns
- **Project-Architecture-Specialist**: System design using project-specific architectural patterns
- **Project-Integration-Specialist**: Service connections optimized for project's integration patterns
- **Project-Quality-Specialist**: Testing strategies aligned with project's quality frameworks

#### **Project-Aligned Functional Specialists**
- **Project-Security-Specialist**: Security patterns specific to project's authentication and authorization
- **Project-Performance-Specialist**: Optimization strategies tailored to project's performance characteristics
- **Project-UX-Specialist**: User experience patterns aligned with project's design system and accessibility
- **Project-Documentation-Specialist**: Documentation following project's established patterns and standards

## 🚀 **OPTIMIZED PERSISTENT AGENT COORDINATION**

### **Agent Activation Strategy**
**Using Task tool with pre-configured persistent agents:**

```markdown
## Persistent Agent Coordination Pattern

### For Multi-Component Tasks:
1. **Analyze task scope** against existing persistent agent capabilities
2. **Activate relevant persistent agents** simultaneously using Task tool:
   - Backend changes → [Project]-Backend-Specialist (with embedded project knowledge)
   - Frontend changes → [Project]-Frontend-Specialist (with project patterns)
   - Integration needed → [Project]-Integration-Specialist (with project interfaces)
   - Testing required → [Project]-Quality-Specialist (with project standards)
3. **Coordinate execution** using pre-configured boundaries and protocols
4. **Integrate results** using established integration patterns

### Task Tool Usage with Persistent Agents:
- **Instant Activation**: Pre-configured agents start immediately with project context
- **Pre-Defined Boundaries**: Agents have established, conflict-free work areas
- **Optimized Integration**: Established protocols for seamless result coordination
```

### **Pre-Configured Conflict Prevention**
**Persistent agents have established, optimized coordination:**

#### **Embedded Boundary Intelligence**
- **Pre-Allocated Files**: Each persistent agent owns specific file/directory domains
- **Established Protocols**: Layer coordination already configured during setup
- **Domain Ownership**: Feature boundaries pre-established based on project analysis
- **Technology Alignment**: Agent specializations perfectly matched to project stack

#### **Optimized Resource Allocation**
```yaml
Pre-Configured Persistent Agent Boundaries:
  [Project]-Frontend-Specialist:
    - Dedicated Files: [project-specific frontend paths]
    - Embedded Scope: UI components, interactions, styling patterns for THIS project
    - Zero Overlap: Never conflicts with backend or integration work

  [Project]-Backend-Specialist:
    - Dedicated Files: [project-specific backend paths]
    - Embedded Scope: Business logic, APIs, data processing for THIS project
    - Zero Overlap: Never conflicts with frontend or UI work

  [Project]-Integration-Specialist:
    - Dedicated Files: [project-specific integration paths]
    - Embedded Scope: Data flow, interfaces, shared utilities for THIS project
    - Coordination Role: Bridges frontend and backend using established patterns
```

#### **Result Integration Protocol**
```markdown
## Sub-Agent Integration Flow

### During Parallel Execution:
- **Independent Work**: Each sub-agent executes within defined boundaries
- **Progress Monitoring**: Main thread tracks all sub-agent progress
- **Interface Coordination**: Sub-agents coordinate on shared interfaces

### Integration Phase:
1. **Collect Results**: Gather all sub-agent outputs
2. **Validate Integration**: Ensure all components work together
3. **Resolve Conflicts**: Handle any integration issues
4. **Final Validation**: Test complete integrated solution
5. **Quality Assurance**: Comprehensive validation of final result
```

## 🧠 **INTELLIGENT SUB-AGENT COORDINATION**

### **Dynamic Sub-Agent Selection**
**Claude Code intelligently chooses optimal sub-agent combinations:**

#### **Task Pattern Recognition**
```yaml
"Add Authentication":
  - Auto-spawns: Backend Specialist, Frontend Specialist, Security Specialist
  - Parallel work: API endpoints + UI components + security validation
  - Integration: Authentication flow coordination

"Performance Optimization":
  - Auto-spawns: Performance Specialist, Database Specialist, Frontend Specialist
  - Parallel work: Code optimization + query optimization + UI optimization
  - Integration: End-to-end performance validation

"New Feature Implementation":
  - Auto-spawns: Research Specialist, Architecture Specialist, Implementation Specialists
  - Parallel work: Requirements research + design planning + feature development
  - Integration: Feature delivery with architecture alignment
```

### **Sub-Agent Communication Protocol**
**Non-blocking coordination between parallel sub-agents:**

#### **Shared Context System**
- **Project Context**: All sub-agents access .guild/context.md
- **Task Context**: Shared understanding of overall objective
- **Interface Contracts**: Clear definitions of integration points
- **Progress Updates**: Real-time coordination on shared interfaces

#### **Coordination Mechanisms**
```markdown
## Sub-Agent Coordination Pattern

### Autonomous Execution:
- Each sub-agent works independently within defined scope
- No waiting for other sub-agents to complete
- Self-sufficient execution with embedded quality validation

### Interface Negotiation:
- Sub-agents coordinate on shared interfaces (APIs, types, contracts)
- Automatic interface definition and validation
- Real-time conflict resolution on shared boundaries

### Result Handoff:
- Each sub-agent delivers complete, validated output
- Clear handoff protocols for integration phase
- Quality assurance embedded in each sub-agent's work
```

## 🛠️ **TASK TOOL USAGE PATTERNS**

### **Proactive Sub-Agent Spawning with Task Tool**
**Claude Code uses Task tool for true parallel execution:**

#### **Basic Parallel Pattern**
```markdown
## Multi-Component Task Example: "Add user authentication"

### Step 1: Analyze & Plan Sub-Agents
⚡ Analysis: Authentication requires backend API + frontend UI + security validation
🧠 Sub-Agent Plan: Backend Specialist + Frontend Specialist + Security Specialist

### Step 2: Spawn Sub-Agents Simultaneously
Using Task tool to launch parallel specialists:

Task 1 - Backend Specialist:
- subagent_type: "general-purpose" 
- description: "Backend authentication implementation"
- prompt: "Implement JWT authentication API endpoints for user login/signup/logout. Include password hashing, token generation, and middleware for protected routes. Follow project's existing API patterns and error handling."

Task 2 - Frontend Specialist:
- subagent_type: "general-purpose"
- description: "Frontend authentication interface"  
- prompt: "Create authentication UI components (login form, signup form, logout button) and authentication state management. Integrate with authentication API endpoints. Follow project's component patterns and styling."

Task 3 - Security Specialist:
- subagent_type: "general-purpose"
- description: "Authentication security validation"
- prompt: "Validate authentication implementation for security best practices. Check password requirements, JWT token security, input sanitization, and CORS configuration. Provide security improvements."

### Step 3: Coordinate Integration
- Monitor all sub-agents in parallel
- Collect results as they complete
- Integrate authentication flow (login → API → frontend state)
- Validate end-to-end authentication workflow
```

#### **Advanced Orchestration Pattern**
```markdown
## Complex Task Example: "Implement real-time chat system"

### Step 1: Comprehensive Analysis
⚡ Analysis: Chat system requires WebSocket server + real-time UI + message storage + user management
🧠 Sub-Agent Orchestration: Research + Architecture + Multiple Implementation Specialists

### Step 2: Research & Architecture Phase
Task 1 - Research Specialist:
- subagent_type: "general-purpose"
- description: "Chat system research and requirements"
- prompt: "Research real-time chat implementation patterns, WebSocket libraries for this tech stack, message storage strategies, and user presence management. Analyze project architecture for optimal integration approach."

Task 2 - Architecture Specialist:  
- subagent_type: "general-purpose"
- description: "Chat system architecture design"
- prompt: "Design chat system architecture including WebSocket connection management, message flow, data models, and integration with existing user system. Define clear interfaces between components."

### Step 3: Parallel Implementation (After Research/Architecture)
Task 3 - WebSocket Server Specialist:
- prompt: "Implement WebSocket server for real-time messaging with connection management, message broadcasting, user presence tracking, and room/channel support."

Task 4 - Chat UI Specialist:
- prompt: "Create chat interface components including message list, input form, user list, and typing indicators. Implement real-time message updates and optimistic UI updates."

Task 5 - Message Storage Specialist:
- prompt: "Implement message persistence with database schema, message history retrieval, and message search capabilities."

Task 6 - Integration Specialist:
- prompt: "Integrate all chat components ensuring proper WebSocket connection lifecycle, message synchronization, and error handling across the system."
```

### **Sub-Agent Coordination Strategies**

#### **Scope Isolation Pattern**
```yaml
File-Based Boundaries:
  Backend Specialist:
    - Exclusive access: /src/api/*, /src/services/*, /src/models/*
    - No conflicts with other specialists
    
  Frontend Specialist: 
    - Exclusive access: /src/components/*, /src/pages/*, /src/hooks/*
    - No conflicts with backend work
    
  Configuration Specialist:
    - Exclusive access: package.json, config files, environment setup
    - Coordinates with both backend and frontend needs
```

#### **Interface Coordination Pattern**
```markdown
## Shared Interface Management

### API Contract Definition:
1. **Interface Specialist** defines API contracts first
2. **Backend Specialist** implements API following contracts  
3. **Frontend Specialist** consumes API using same contracts
4. **Integration Specialist** validates contract compliance

### Type Definition Coordination:
1. **Type Specialist** defines shared TypeScript interfaces
2. All implementation specialists use shared types
3. **Validation Specialist** ensures type consistency across system
```

### **Result Integration Framework**

#### **Sequential Integration Pattern**
```markdown
## Integration Sequence for Multi-Component Tasks

### Phase 1: Parallel Execution
- All sub-agents work simultaneously on isolated scopes
- Real-time progress monitoring without blocking
- Interface coordination through shared contracts

### Phase 2: Integration Validation  
1. **Collect Results**: Gather all sub-agent outputs
2. **Interface Validation**: Verify all interfaces work together
3. **Integration Testing**: Test complete workflow end-to-end
4. **Conflict Resolution**: Handle any integration issues
5. **Final Validation**: Comprehensive system testing

### Phase 3: Quality Assurance
- **Performance Testing**: Validate system performance
- **Security Validation**: Comprehensive security review
- **User Experience**: End-to-end user workflow validation
```

#### **Continuous Integration Pattern**
```markdown
## Real-Time Integration During Parallel Execution

### Continuous Validation:
- **Interface Contracts**: Validated in real-time as sub-agents work
- **Integration Points**: Tested continuously during development  
- **Dependency Management**: Automatic coordination of shared dependencies

### Progressive Integration:
- **Component Integration**: Individual components integrated as completed
- **System Integration**: Full system integration once all components ready
- **Validation Integration**: Quality assurance integrated throughout process
```

## 🚀 **NON-BLOCKING EXECUTION EXCELLENCE**

### **Persistent Agent Performance Optimization**
```yaml
Execution Timing:
  Sequential Approach: 15-30 minutes for complex tasks
  Persistent Agent Approach: 3-8 minutes for same complexity
  Performance Gain: 5-10x faster through pre-configured coordination + project knowledge
```

### **Persistent Agent Effectiveness Metrics**
```yaml
Simple Tasks (1-2 components):
  - Persistent Agents: 1 specialist (instant activation with project context)
  - Performance Benefit: Very High (no setup overhead, embedded knowledge)

Medium Tasks (3-5 components):  
  - Persistent Agents: 2-4 specialists with pre-configured boundaries
  - Performance Benefit: Exceptional (5-8x speedup typical)
  - Sweet Spot: Maximum efficiency through established coordination

Complex Tasks (6+ components):
  - Persistent Agents: 4-8 specialists with embedded integration protocols
  - Performance Benefit: Outstanding (8-12x speedup typical)
  - Coordination: Pre-established protocols eliminate coordination overhead
```

### **Persistent Agent Learning & Enhancement**
```markdown
## Continuous Agent Intelligence Enhancement

### Execution Pattern Learning:
- **Successful Agent Combinations**: Track most effective specialist team configurations
- **Optimized Coordination**: Refine pre-established coordination protocols
- **Integration Patterns**: Enhance established integration strategies
- **Performance Metrics**: Continuously improve execution efficiency

### Agent Knowledge Enhancement:
- **Task-to-Agent Mapping**: Refine agent selection intelligence for different task types
- **Coordination Optimization**: Eliminate remaining coordination overhead through learning
- **Integration Mastery**: Perfect integration patterns through repeated execution
- **Quality Excellence**: Continuously improve quality standards through agent experience
```

## 🔗 **HUMAN-IN-THE-MIDDLE EXCELLENCE PRINCIPLES**

### **Mandatory Approval Intelligence**
- **Always Reason First**: Deep requirement analysis before any execution begins
- **Complete Understanding**: Demonstrate comprehensive grasp of user intent and goals
- **Clear Communication**: Present approach, timeline, and expected outcomes transparently  
- **Explicit Approval**: No execution without confirmed user authorization

### **Project-Optimized Intelligence** 
- **Instant Post-Approval Activation**: Persistent agents activate immediately after user approval
- **Optimal Team Composition**: Pre-configured teams perfectly sized for approved task complexity
- **Zero Setup Coordination**: Pre-established protocols enable immediate parallel execution after approval
- **Intelligent Integration**: Embedded integration patterns ensure seamless coordination of approved work

### **Persistent Agent Advantages**
- **Superior Speed**: 5-12x faster execution through embedded project knowledge + pre-configured coordination
- **Enhanced Quality**: Project-specific expertise ensures comprehensive domain coverage
- **Maximum Reliability**: Pre-established boundaries eliminate conflicts and errors
- **Perfect Scalability**: Handles any approved complexity through optimized persistent specialist orchestration

### **Exceptional User Experience**
- **Perfect Alignment**: Mandatory reasoning ensures 100% alignment with user intent
- **Transparent Process**: Complete visibility into understanding, approach, and expected outcomes
- **User Control**: Explicit approval gates give users full control over execution
- **Predictable Performance**: Consistent, exceptional speedup through persistent optimization after approval
- **Quality Assurance**: Project-specific specialists ensure comprehensive validation of approved work
- **Continuous Enhancement**: Both reasoning and persistent agents improve through experience over time

---

**Core Philosophy**: Combine **human-in-the-middle approval** with workflow intelligence and persistent, project-specialized agents. **NEVER execute without explicit user approval** of requirements understanding and approach. This ensures perfect alignment with user intent while delivering maximum efficiency, quality, and user experience through persistent agents with deep project expertise.