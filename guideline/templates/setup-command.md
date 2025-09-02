# /guild:setup

---
name: guild-setup
model: sonnet
description: "Intelligent project analysis and specialist team hiring"
---

## Purpose

Analyze THIS specific project and hire exactly the right specialist team for its unique needs, challenges, and goals.

## Core Intelligence

**Team Building Intelligence**:
{{core/agents}}

**Team Coordination Intelligence**:
{{core/workflow}}

## Intelligent Hiring Process

### Phase 1: Deep Project Intelligence

**Understand THIS Specific Project:**

1. **Project Nature Analysis**
   - What kind of project is this? (web app, API, library, tool, etc.)
   - What business domain does it operate in?
   - What scale and complexity does it have?
   - What are the main technical challenges?

2. **Technology Discovery**
   - What technologies, frameworks, and tools are actually used here?
   - What programming languages are in use?
   - What databases and data stores exist?
   - What external services and APIs are integrated?
   - What build tools and deployment systems are configured?

3. **Business Context Analysis**
   - What business problems does this project solve?
   - Who are the end users and stakeholders?
   - What regulatory or compliance requirements exist?
   - What performance and scalability needs are there?

4. **Challenge Identification**
   - What are the main technical challenges this project faces?
   - What knowledge gaps exist in the current setup?
   - What implementation bottlenecks are slowing progress?
   - What quality or reliability issues need addressing?

5. **Opportunity Assessment**
   - What improvements would have the biggest impact?
   - What expertise could accelerate development?
   - What consultancy could prevent common pitfalls?
   - What research could unlock new capabilities?

### Phase 2: Intelligent Team Design

**Design the optimal specialist team for THIS project:**

1. **Core Implementation Team**
   - Which technical specialists does this project need?
   - What implementation expertise is required?
   - Which integration specialists are needed?
   - What deployment and operations expertise is required?

2. **Advisory Board**
   - Which domain consultants would provide valuable guidance?
   - What business expertise is needed for decision-making?
   - Which technical advisors could prevent costly mistakes?
   - What industry experts could navigate regulatory requirements?

3. **Support Network**
   - Which research specialists are needed for knowledge gaps?
   - What documentation experts would capture key decisions?
   - Which testing specialists ensure quality and reliability?
   - What security experts are needed for threat assessment?

4. **Specialized Consultants**
   - What unique expertise does this specific project require?
   - Which niche specialists would solve critical challenges?
   - What external domain knowledge is needed?
   - Which emerging technology experts could provide advantage?

### Phase 3: Specialist Hiring

**For each identified need, hire a specialist with:**

1. **Project-Specific Context**
   - Deep understanding of this project's goals and constraints
   - Knowledge of the business domain and requirements
   - Awareness of technical challenges and opportunities
   - Familiarity with the existing codebase and architecture

2. **Targeted Expertise**
   - Skills precisely matched to discovered needs
   - Experience relevant to identified challenges
   - Knowledge appropriate for the technology stack
   - Capability to deliver required outcomes

3. **Clear Mission**
   - Specific objectives for this project
   - Measurable success criteria
   - Understanding of their role in the larger team
   - Commitment to project goals and timeline

4. **Collaboration Framework**
   - Clear communication channels with other specialists
   - Understanding of dependencies and coordination needs
   - Protocols for sharing knowledge and progress
   - Integration with overall project management

**Specialist Location**: `$PROJECT_ROOT/.claude/agents/guild/`

### Phase 4: Team Validation

**Ensure optimal team composition:**
- Every discovered need has appropriate specialist coverage
- Team has right balance of implementation and advisory roles
- Specialists have clear, non-overlapping responsibilities
- Team can collaborate effectively toward common goals
- All critical project areas have expert support

## Specialist Creation Process

**For each hired specialist:**

```markdown
---
name: [role-based-on-discovered-need]-specialist
description: "[Specific role] for [this project's context]"
model: sonnet
thinking_mode: deep
---

## Mission
[One-line mission specific to this project's needs]

## Project Context
- Project Type: [What this specialist discovered about the project]
- Key Challenge: [Specific challenge they're hired to solve]
- Business Context: [Relevant business knowledge for this project]
- Technical Context: [Relevant technical knowledge for this project]

## Core Responsibilities
[List of 3-5 responsibilities specific to this project's needs]

## Required Expertise
[List of knowledge and skills needed for this specific project]

## Success Criteria
[Measurable outcomes this specialist will deliver for this project]

## Collaboration Framework
- Coordinates with: [Other specialists they work with]
- Provides: [What they deliver to the team]
- Requires: [What they need from other specialists]
```

## Success Output

```
🎯 Project-Specific Team Assembled!

📊 Project Analysis Complete:
- Project Type: [Discovered project nature]
- Domain: [Identified business domain] 
- Technologies: [All discovered technologies in use]
- Main Challenges: [Key challenges identified]
- Critical Needs: [Most important expertise gaps]

🏢 Specialized Team Hired ([total count]):

Implementation Specialists ([count]):
- [role-1]: [What they do for this specific project]
- [role-2]: [What they do for this specific project]
[List all implementation specialists hired]

Advisory Specialists ([count]):
- [advisor-1]: [What expertise they provide this project]
- [advisor-2]: [What expertise they provide this project]  
[List all advisory specialists hired]

Support Specialists ([count]):
- [support-1]: [How they enable the core team]
- [support-2]: [How they enable the core team]
[List all support specialists hired]

📂 Team Directory: .claude/agents/guild/
🎯 Team Mission: [Overall objective for this project]
🚀 Ready for Action: /guild "your task"

Next: Your team is ready to tackle any challenge specific to this project!
```

## Remember

This is intelligent hiring for THIS specific project. Every specialist is chosen based on what THIS project actually needs, faces, and could benefit from. The team is custom-built for maximum effectiveness on THIS project's unique challenges and opportunities.