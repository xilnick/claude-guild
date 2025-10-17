# /guild:setup

---
name: guild-setup
model: inherit
thinking_mode: ultrathink
description: "Discover project structure and create specialized agents via systematic delegation"
---

MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
MANDATORY: Use single messages with multiple tool calls when possible
MANDATORY: Batch operations for maximum efficiency

## Command Entry Point
ultrathink $ARGUMENTS

<critical>
MANDATORY: Use Task tool for ALL work delegation. Never execute directly.
MANDATORY: Default to parallel execution unless explicit dependencies exist.
MANDATORY: Create specialists based on evidence, not assumptions.
MANDATORY: Generated agents MUST use ONLY [placeholder] patterns - NO specific examples or code structures.

CRITICAL FILE CREATION RESTRICTIONS:
- ✅ **ALLOWED**: ONLY agent files in ./.claude/agents/guild/ directory
- ❌ **FORBIDDEN**: Reports, analysis documents, project summaries, examples, documentation
- ❌ **FORBIDDEN**: Temporary files, working notes, discovery results files, recommendations files
- **DISPLAY ONLY**: Present ALL discovery, analysis, and recommendations in conversation, NEVER save to files
- **IN-MEMORY ONLY**: ALL working state, discovery results, and analysis are ephemeral, cleared after completion
</critical>

<purpose>
Initialize Guild system through evidence-based project discovery → specialist identification → abstracted agent creation → usage documentation workflow.
</purpose>

## Execution Framework

<system_design>
<principle>Discover project characteristics → Route specialist creation to Task tool → Generate abstracted agents → Report results</principle>
<execution>Parallel-first discovery, evidence-based analysis, systematic delegation, complete abstraction</execution>
</system_design>

<phase_1 name="discovery" mode="parallel_execution">

**DELEGATE ALL DISCOVERY TO TASK TOOL**

<discovery_operations>
Use Task tool to execute in parallel:
- **File Structure Analysis**: [project_organization], [component_architecture], [structural_patterns]
- **Technology Identification**: [discovered_frameworks], [detected_languages], [identified_tooling]
- **Pattern Discovery**: [code_conventions], [naming_patterns], [testing_approaches]
- **Convention Detection**: [build_systems], [deployment_configurations], [documentation_standards]
</discovery_operations>

<discovery_constraints>
- MUST use parallel tool execution for all independent operations
- MUST delegate discovery work through Task tool
- MUST collect evidence before making assumptions
- MUST document all findings with [placeholder] abstractions
</discovery_constraints>

</phase_1>

<phase_2 name="analysis">

**Identify Required Specialists Based on Discovery Evidence**

<specialist_categories>
- **Domain Experts**: [discovered_architecture_layers] specialists
- **Technology Specialists**: [identified_tech_stack] experts  
- **Task Specialists**: [detected_workflow_needs] automation
- **Project-Specific**: [unique_project_characteristics] handlers
</specialist_categories>

<analysis_criteria>
- Base on actual [project_evidence], not generic assumptions
- Match specialist expertise to [discovered_needs]
- Consider [workload_distribution] and [specialization_depth]
- Identify [cross_cutting_concerns] requiring coordination
</analysis_criteria>

</phase_2>

<phase_3 name="creation">

**DELEGATE AGENT CREATION TO TASK TOOL**

<abstracted_agent_generation>
Each generated specialist MUST contain ONLY:

1. **Proper YAML Frontmatter**:
   ```yaml
   ---
   name: [derived_specialist_name]
   model: inherit
   thinking_mode: ultrathink
   description: "[abstract_role_description] specialist for [project_context_type]"
   ---

   MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
   MANDATORY: Use single messages with multiple tool calls when possible
   MANDATORY: Batch operations for maximum efficiency
   ```

   **CRITICAL**: Every agent MUST have parallel execution directives immediately after frontmatter

2. **Abstracted Role Definition**:
   "You are a [specialist_expertise] specialist working on [project_type] following [discovered_conventions]. Your role focuses on [capability_area] while collaborating with [related_specialists] to achieve [project_objectives]."

3. **Abstract Capability Statement**:
   "Key responsibilities include [responsibility_patterns] and maintaining [quality_standards] throughout [work_scope]."

</abstracted_agent_generation>

<absolute_prohibitions>
❌ NO concrete XML structures or code examples
❌ NO specific file paths, technology names, or implementation details
❌ NO prescriptive content beyond [placeholder] patterns
❌ NO "how-to" guidance or implementation examples
❌ NO specific project references outside [placeholder] format
</absolute_prohibitions>

<creation_requirements>
- Save ALL agents to: ./.claude/agents/guild/ (MANDATORY)
- Embed [discovered_project_patterns] in abstracted form only
- Keep agents focused through [abstract_boundaries]
- Include [collaboration_protocols] in placeholder form
- Generate minimum viable abstracted content only
- MANDATORY directory: ./.claude/agents/guild/
- ALWAYS use guild subdirectory for all generated agents

CRITICAL FILE CREATION RESTRICTIONS:
- ONLY create agent files in ./.claude/agents/guild/ directory
- NEVER persist discovery reports, analysis documents, or recommendations
- NEVER create project summary files, documentation, or examples
- ALL discovery results and analysis displayed in conversation only
- NO temporary files, working notes, or intermediate artifacts
</creation_requirements>

</phase_3>

<phase_4 name="reporting">

**Display Created Specialists and Usage Guidance (EPHEMERAL - NO PERSISTENCE)**

<reporting_structure>
CRITICAL: ALL reports are ephemeral - DISPLAY ONLY, NEVER SAVE TO FILES
1. **Specialist Inventory**: List created agents with [expertise_areas] (DISPLAY ONLY - NO PERSISTENCE)
2. **Discovery Summary**: Key [project_characteristics] found (DISPLAY ONLY - NO PERSISTENCE)
3. **Usage Patterns**: How to leverage [specialist_capabilities] (DISPLAY ONLY - NO PERSISTENCE)
4. **Integration Guidance**: [coordination_protocols] between specialists (DISPLAY ONLY - NO PERSISTENCE)

FORBIDDEN FILE CREATION:
- ❌ NO discovery-report.md or project-analysis.md files
- ❌ NO agent-inventory.md or specialist-roster.md files
- ❌ NO recommendations.md or usage-guide.md files
- ❌ NO temporary artifacts, working notes, or summary files
- ✅ ONLY agent files in ./.claude/agents/guild/ are permitted
</reporting_structure>

</phase_4>

## Verification Framework

<verification_streams>
1. **Abstraction Compliance**: All agents use ONLY [placeholder] patterns
2. **Frontmatter Validation**: Proper YAML structure with required fields
3. **Integration**: Agents can collaborate on [discovered_project_patterns]
4. **Completeness Check**: Verify all identified specialist needs are addressed
5. **CRITICAL File Creation Audit**: MANDATORY check that ONLY agent files were created, NO reports/analysis/documentation
6. **CRITICAL No Persistence Verification**: Confirm ZERO non-agent files were persisted (no discovery reports, summaries, guides)
7. **Ephemeral State Confirmation**: Verify all working memory, discovery results, and analysis were display-only
8. **Guild Directory Verification**: Confirm all agents saved to ./.claude/agents/guild/
9. **User Approval**: Explicit confirmation of specialist roster and capabilities
</verification_streams>

## Implementation Protocol

<workflow_execution>
<task>DELEGATE to Task tool: Parallel project discovery using [discovery_methods]</task>
<context>Analyze [current_project] structure and [project_characteristics]</context>  
<requirements>Evidence-based specialist identification and abstracted agent creation</requirements>
</workflow_execution>

<user_request_processing>
If user specifies additional specialists:
1. Perform complete project discovery FIRST via Task tool
2. Create evidence-based specialists from [discovery_results]
3. ADD user-requested specialists to the [evidence_based_roster]
4. Report complete [specialist_ecosystem]
</user_request_processing>

<anti_patterns>
❌ Direct execution without Task tool delegation
❌ Sequential operations when parallel execution possible
❌ Creating specialists based on assumptions vs [evidence_patterns]
❌ Generic specialists without [project_context] embedding
❌ Including specific examples or code structures in generated agents
❌ Using concrete references instead of [placeholder] abstractions
❌ **CRITICAL**: Persisting ANY discovery reports, analysis documents, or project summaries to files
❌ **CRITICAL**: Creating documentation files, usage guides, or recommendation files
❌ **CRITICAL**: Saving temporary artifacts, working notes, or intermediate results
❌ **CRITICAL**: Creating ANY files except agent files in ./.claude/agents/guild/
❌ **CRITICAL**: Saving working state or scratchpad data to files
</anti_patterns>

<critical>
SUCCESS PATTERN: Use Task tool → Parallel discovery → Evidence analysis → Abstracted specialist creation → Verification → User approval

KEY CONSTRAINTS:
- ALWAYS delegate work through Task tool
- ALWAYS use parallel execution for independent operations
- ALWAYS base specialists on [discovered_project_evidence]
- ALWAYS embed [discovered_patterns] in abstracted placeholder form
- ALWAYS save to ./.claude/agents/guild/ (MANDATORY path)
- NEVER include concrete examples or specific implementations in generated agents

CRITICAL FILE CREATION RULES:
- ONLY create agent files in ./.claude/agents/guild/ directory
- NEVER persist reports, analysis, summaries, documentation, or examples
- ALL discovery and analysis results are DISPLAY ONLY in conversation
- NO temporary files, working notes, or non-agent artifacts permitted
</critical>

{SHARED_INTELLIGENCE}