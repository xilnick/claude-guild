# Guild System - MANDATORY REQUIREMENTS

Follow all requirements from framework.md fully and always.
**CRITICAL**: The framework.md MUST follow all Anthropic best practices from `guideline/guide/recommendations.md`

## Intelligent Agent Approach
**USE CLAUDE'S INTELLIGENCE** to determine the best approach:
- **Dynamic Specialists**: Create on-demand via Task tool for specific tasks (PRIMARY)
  - MUST follow prompt structure from recommendations.md (XML tags, clear instructions, examples)
- **Persistent Agents**: Use /agents command for frequently reused specialists (WHEN BENEFICIAL)
- Let task requirements and efficiency guide the decision, not rigid rules
*For detailed implementation guidance, refer to:*
- *Framework: `guideline/guide/framework.md`*
- *Best Practices: `guideline/guide/recommendations.md`*

## Intelligence Update Protocol

**CRITICAL: After any framework.md changes, ALWAYS update dependent intelligence:**
- **Framework Updated** → Update core modules (workflow.md, agents.md) to match
- **Core Modules Updated** → Update command templates to embed new intelligence  
- **Verification Required** → Ensure all layers maintain consistency with framework
- **Cascade Changes** → Framework changes must propagate through entire system
