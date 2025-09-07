# /guild:setup

---
name: guild-setup  
model: sonnet
thinking_mode: ultrathink
description: "Create specialized sub-agents following Claude Code best practices"
---

## Command Purpose
Analyze the project and create focused, single-purpose sub-agents using the official `/agents` command.

## 🎯 **SUB-AGENT CREATION PROCESS**

### **Phase 1: Project Analysis**

🔍 **Discovery** (1-2 min):
- Scan configuration files for technology stack
- Identify major components and boundaries
- Detect patterns and conventions
- Map critical workflows

📊 **Specialization Identification**:
- Determine needed expertise areas
- Define clear boundaries between agents
- Identify tool requirements per specialist

### **Phase 2: Sub-Agent Creation**

🤖 **Following Official Documentation**:
```yaml
For Each Identified Specialization:
  1. Design focused, single-purpose agent
  2. Define clear activation description
  3. Specify minimal required tools
  4. Write detailed system prompt
  5. Create using /agents command
```

### **Example Sub-Agents to Create**:

**Frontend Specialist**:
```markdown
---
name: frontend-specialist
description: Handles React/Vue/Angular components, styling, and UI logic
tools: Read, Edit, Write, Grep, Glob, Bash
---
You are a frontend development specialist focusing on [project's framework].
Key responsibilities:
- Component development and optimization
- State management
- UI/UX implementation
- Frontend testing
Follow project patterns found in [specific directories].
```

**Backend Specialist**:
```markdown
---
name: backend-specialist  
description: Manages API endpoints, database operations, and server logic
tools: Read, Edit, Write, Grep, Glob, Bash
---
You are a backend development specialist working with [project's backend tech].
Focus areas:
- API design and implementation
- Database operations
- Authentication/authorization
- Performance optimization
Maintain patterns from [project conventions].
```

**Code Reviewer**:
```markdown
---
name: code-reviewer
description: Reviews code for quality, security, and adherence to standards
tools: Read, Grep, Glob
---
You are a senior code reviewer ensuring high standards.
Review for:
- Code quality and maintainability
- Security vulnerabilities
- Performance issues
- Pattern consistency
- Test coverage
```

### **Phase 3: Documentation**

📁 **Create Reference File**:
```markdown
# Project Sub-Agents

## Created Agents
1. [agent-name]: [purpose and boundaries]
2. [agent-name]: [purpose and boundaries]

## Usage Patterns
- When to use each agent
- How agents complement each other
- Integration points

## Project Context
- Technology stack details
- Key patterns and conventions
- Critical paths
```

### **Best Practices** (Per Official Docs)
✅ Start with Claude-generated suggestions  
✅ Create focused, single-purpose agents  
✅ Write detailed, specific prompts  
✅ Limit tool access to necessary tools only  
✅ Version control project agents  
✅ Use clear naming (lowercase, hyphen-separated)
---

**Note**: Core intelligence modules (workflow orchestration, agent specialization, verification framework) are embedded below during installation from `@guideline/core/`