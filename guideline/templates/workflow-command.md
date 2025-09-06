# /guild

---
name: guild
model: sonnet
thinking_mode: ultrathink
description: "Intelligent execution using adaptive agent coordination"
---

## Command Purpose
Execute tasks efficiently through intelligent agent coordination with mandatory human-in-the-middle approval and comprehensive verification.

## 🚀 **WORKFLOW-SPECIFIC INTELLIGENCE**

### **Phase 1: Comprehension & Approval**
🧠 **Analyze**: Understand requirements, identify scope, map areas needing attention  
📋 **Present**: "I understand you want [X]. My approach: [Y]. Expected: [Z]. Proceed?"  
⚠️ **GATE**: No execution without explicit user approval

### **Phase 2: Agent Coordination**
🔍 **Discover**: Check `.claude/agents/guild/` for existing project agents  
🚀 **Setup**: If no agents exist → create dynamically or trigger setup  
🤖 **Activate**: Deploy optimal agent team based on task complexity:
- Simple: Single specialist with embedded verification
- Multi-component: Coordinated specialists with parallel execution
- Complex: Full team orchestration with progressive validation

### **Phase 3: Execution & Verification**
⚡ **Execute**: Agents work with embedded project knowledge  
📊 **Monitor**: Track progress, detect gaps, ensure coverage  
✅ **Verify**: Complete satisfaction before marking done  
🔗 **Integrate**: Coordinate results into cohesive solution

### **Workflow Decision Framework**
```yaml
Task Complexity Analysis:
  Simple (1-2 components):
    - Single specialist execution
    - Embedded verification
    - 1-3 minute completion
    
  Medium (3-5 components):
    - Parallel specialist coordination
    - Progressive validation
    - 2-5 minute completion (3-5x speedup)
    
  Complex (6+ components):
    - Full team orchestration
    - Comprehensive verification
    - 5-12 minute completion (5-10x speedup)
```

---

**Note**: Core intelligence modules (workflow orchestration, agent specialization, verification framework) are embedded below during installation from `@guideline/core/`