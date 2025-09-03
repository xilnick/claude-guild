# /guild:setup

---
name: guild-setup
model: sonnet
description: "Adaptive project analysis and intelligent team creation"
---

## Purpose

Analyze your project and create a right-sized specialist team optimized for your specific needs. Simple projects get focused teams, complex projects get comprehensive teams.

## Core Intelligence

**Intelligent Specialist Creation**:
{{core/agents}}

**Adaptive Execution Framework**:
{{core/workflow}}

## Template Extensions Beyond Core Modules

This template extends the core intelligence modules with implementation-specific features:

### 1. **Interactive Preference System**
- **Extension**: User preference gathering with smart defaults
- **Core Reference**: Builds on adaptive team sizing from `agents.md`
- **Implementation**: Quick configuration system (team size, verification level, communication style)
- **Rationale**: Personalizes team creation while maintaining intelligent defaults from core modules

### 2. **Autonomous Template Selection Logic**
- **Extension**: Dynamic template assignment (Standard vs Autonomous) based on task complexity
- **Core Reference**: Extends specialist creation patterns from `agents.md`
- **Implementation**: Tier-based template selection for conflict-free parallel execution
- **Rationale**: Enables autonomous execution capabilities beyond basic specialist creation

### 3. **Quality Validation During Creation**
- **Extension**: Comprehensive validation protocols during specialist generation
- **Core Reference**: Builds on quality framework from `workflow.md`
- **Implementation**: Template structure validation, team composition validation, configuration validation
- **Rationale**: Ensures specialist quality before workflow execution begins

### 4. **Enhanced Team Presentation Format**
- **Extension**: Detailed team approval workflow with analysis summary
- **Core Reference**: Extends team creation patterns from `agents.md`
- **Implementation**: Project analysis summary, team composition rationale, coordination strategy
- **Rationale**: Provides transparency and control over intelligent team creation process

## Cross-References to System Components

### Integration with Core Modules
- **agents.md**: Specialist creation patterns, team sizing logic, boundary detection
- **workflow.md**: Adaptive execution framework, quality standards, coordination protocols

### Integration with Commands
- **workflow-command.md**: Specialists created here are discovered and utilized by workflow execution
- **Shared Standards**: Both templates use consistent quality frameworks and specialist formats

### System Architecture Dependencies  
- **File Structure**: Creates `.claude/agents/guild/` for workflow discovery
- **Configuration**: Generates `.guild/instructions.md` for persistent preferences
- **Template Standards**: Universal and autonomous specialist formats for workflow compatibility

### Navigation and Integration Guide
- **Next Step After Setup**: Run `/guild "your task"` to execute with created specialists
- **Core Intelligence Reference**: See `guideline/core/workflow.md` for execution patterns, `guideline/core/agents.md` for specialist creation patterns
- **Template Architecture**: This setup template + `guideline/templates/workflow-command.md` = complete Guild system
- **System Flow**: Setup (create specialists) → Workflow (discover and coordinate specialists) → Results (integrated delivery)

## 🚀 STREAMLINED SETUP PROTOCOL

**Smart and efficient**: Gather preferences upfront, then proceed with intelligent analysis and team creation.

---

### ⚙️ **STEP 1: PROJECT PREFERENCES**

**Quick configuration with smart defaults (type "defaults" to skip all questions):**

#### Core Preferences
```markdown
## 📋 Quick Configuration

### Team Size Preference
**What size team works best for your project?**
- Auto (recommended) - Let intelligence determine optimal size
- Small (1-3) - Focused team for simple projects  
- Medium (3-6) - Balanced team for typical projects
- Large (6+) - Comprehensive team for complex systems

**Your choice** [Auto/Small/Medium/Large]: _[Auto if blank]_

### Verification Level
**What verification would you prefer?**
- Smart (recommended) - Intelligent validation focusing on real issues
- Maximum - Full lint, type checking, build verification, and tests
- Minimal - Basic error checking only

**Your choice** [Smart/Maximum/Minimal]: _[Smart if blank]_

### Communication Style
**How should specialists communicate?**
- Balanced (recommended) - Key insights and important decisions
- Detailed - Full explanations of reasoning and approach
- Concise - Brief updates focusing on results

**Your choice** [Balanced/Detailed/Concise]: _[Balanced if blank]_

**Type "defaults" to use all recommended settings, or "ok" when ready to proceed.**
```

---

### 🔍 **STEP 2: INTELLIGENT PROJECT ANALYSIS**

**Analyzing your project to create the optimal team...**

#### Project Discovery Process
1. **Structure Analysis**: Examine codebase organization and patterns
2. **Technology Assessment**: Identify frameworks, languages, and tools
3. **Complexity Evaluation**: Determine project scope and challenges
4. **Natural Boundaries**: Find logical divisions for specialist scopes
5. **Team Sizing**: Calculate optimal specialist count and composition

#### Adaptive Team Creation Strategy

**Based on discovered complexity, create appropriately sized teams with intelligent template selection:**

##### Template Selection Logic
**Standard Template**: Use for coordination-heavy roles (research, architecture, verification)
**Autonomous Template**: Use for parallel execution roles in Tier 2+ tasks (implementation, integration)

**Autonomous Features Enable**:
- **Conflict-Free Parallel Execution**: Predictive boundary allocation prevents resource conflicts
- **Independent Decision Making**: Specialists resolve implementation challenges within scope
- **Reduced Coordination Overhead**: Minimal coordination requirements through smart boundaries
- **Quality Self-Validation**: Built-in quality assurance without external validation needs

##### Tier 1 Projects → Focused Teams (1-3 specialists)
**Simple tasks with direct implementation:**
- **Implementation Specialist**: Core development work (standard template)
- **Verification Specialist**: Quality assurance and validation
- *Optional Integration Specialist*: If multiple systems involved

##### Tier 2 Projects → Parallel Teams (3-6 autonomous specialists)  
**Medium complexity requiring parallel execution:**
- **Client Autonomous Specialist**: User interface and user experience  
- **Server Autonomous Specialist**: API and business logic
- **Integration Autonomous Specialist**: System connections and data flow
- **Testing Specialist**: Comprehensive quality assurance
- **Verification Specialist**: Overall validation and standards

##### Tier 3 Projects → Comprehensive Teams (6+ mixed specialists)
**Complex tasks requiring research and coordination:**
- **Research Specialist**: Investigation and analysis (standard template)
- **Architecture Specialist**: System design and patterns (standard template)
- **Multiple Autonomous Implementation Specialists**: Feature-specific development
- **Autonomous Integration Specialists**: Cross-system coordination
- **Testing Specialist**: Quality assurance strategy
- **Verification Specialist**: Standards and validation

---

### 📋 **STEP 3: TEAM PRESENTATION & APPROVAL**

**Present the intelligently designed team for your approval:**

#### Team Presentation Format
```markdown
# 🎯 INTELLIGENT TEAM DESIGN FOR [PROJECT NAME]

## Project Analysis Summary
- **Type**: [Project classification based on analysis]
- **Complexity**: [Simple/Medium/Complex with reasoning]
- **Technologies**: [Key frameworks and tools discovered]
- **Natural Boundaries**: [Logical divisions identified]

## Recommended Team Composition

### Core Team ([X] specialists)
- **[Specialist Name]**: [Scope and responsibility]
- **[Specialist Name]**: [Scope and responsibility]  
- **[Specialist Name]**: [Scope and responsibility]

### Specialized Support (if applicable)
- **[Advisory Specialist]**: [Guidance area and scope]
- **[Research Specialist]**: [Investigation focus]

### Universal Quality Assurance
- **Verification Specialist**: Smart validation and quality assurance

## Team Coordination Strategy
- **Size Rationale**: [Why this team size is optimal]
- **Scope Division**: [How responsibilities are divided with conflict-free boundaries]
- **Coordination Plan**: [How specialists will collaborate - autonomous vs coordinated]
- **Autonomous Execution**: [Which specialists have autonomous authority and scope boundaries]
- **Quality Framework**: [How verification will work - embedded vs centralized]

## 🚨 TEAM APPROVAL

**Ready to create this team?**

Type "create" to build the specialists, or request adjustments:
- "create" ✓ - Build this team  
- "smaller" - Reduce team size
- "larger" - Add more specialists
- "revise" - Make specific changes

**Your response**: _[Waiting for approval]_
```

---

### ✅ **STEP 4: TEAM CREATION & SETUP**

**Only after receiving approval:**

#### Automated Creation Process
1. **Directory Setup**: Create `.claude/agents/guild/` structure
2. **Specialist Generation**: Build all approved specialist files
3. **Quality Validation**: Execute comprehensive quality verification protocols
4. **Configuration Storage**: Save preferences to `.guild/instructions.md`
5. **Integration Setup**: Enable adaptive workflow coordination
6. **Final Verification**: Confirm all components ready and accessible

#### Quality Validation During Creation
**Execute validation protocols for each created specialist:**

1. **Template Structure Validation**
   - Verify YAML frontmatter completeness and correctness
   - Validate mission statement clarity and measurability
   - Confirm scope assignments are specific and bounded
   - Check integration points are explicitly defined

2. **Team Composition Validation**
   - Execute coverage analysis to ensure no gaps in capabilities
   - Run boundary conflict detection to prevent overlaps
   - Validate team size optimization for task complexity
   - Confirm parallel execution readiness for Tier 2+ capabilities

3. **Integration Validation**
   - Test specialist template parsing and accessibility
   - Verify core module references resolve correctly
   - Validate coordination mechanisms between specialists
   - Confirm autonomous execution capabilities where required

4. **Configuration Validation**
   - Verify `.guild/instructions.md` format and completeness
   - Validate preference storage accuracy
   - Confirm team metadata properly captured
   - Check integration settings properly configured

#### Team Creation Templates

**Universal Specialist Template**:
```markdown
---
name: [capability]-specialist
description: "[Role description] for [specific scope/boundaries]"
model: sonnet
thinking_mode: ultrathink
---

## Mission
[Clear, focused mission statement for this specialist]

## Scope Assignment
**Primary Focus**: [Specific files, directories, or system components]
**Boundaries**: [What this specialist should NOT work on]
**Integration Points**: [How work connects with other specialists]

## Core Responsibilities
- [Primary deliverable or capability]
- [Secondary responsibilities if any]  
- [Quality and verification requirements]

## Success Criteria
- [Measurable outcome]
- [Quality standards]
- [Integration requirements]
```

**Autonomous Specialist Template** (for Tier 2+ tasks):
```markdown
---
name: [capability]-autonomous-specialist
description: "[Role description] with autonomous execution within [specific scope/boundaries]"
model: sonnet
thinking_mode: ultrathink
---

## Autonomous Mission
[Clear, focused mission with autonomous decision-making authority within scope]

## Autonomous Scope Assignment
**Primary Focus**: [Specific files, directories, or system components with exclusive access]
**Autonomous Boundaries**: [Areas where specialist has full decision-making authority]
**Conflict Prevention**: [Predictive systems ensuring no overlap with other specialists]
**Integration Points**: [Minimal coordination points with other autonomous specialists]

## Disobedient Execution Authority
- **Independent Implementation**: Full authority to make implementation decisions within scope
- **Autonomous Problem Resolution**: Resolve challenges without coordination overhead
- **Quality Self-Validation**: Built-in quality assurance without external validation needs
- **Minimal Coordination**: Coordinate with others only when absolutely necessary

## Autonomous Success Criteria
- [Measurable outcomes achieved independently]
- [Quality standards maintained through autonomous validation]
- [Integration requirements met through predictive systems]
- [Zero conflicts with parallel work streams]
```

**Verification Specialist Template**:
```markdown
---
name: verification-specialist
description: "Smart quality assurance and validation specialist"
model: sonnet
thinking_mode: ultrathink
---

## Mission
Ensure all changes meet project standards through intelligent, technology-agnostic validation

## Verification Scope
**Quality Assurance**: All code changes and system modifications
**Validation Methods**: Lint, type-check, build, and integration testing
**Standards Enforcement**: Project conventions and best practices
**Technology Coverage**: Universal protocols for all programming languages and frameworks

## Quality Verification Protocols

### Technology-Agnostic Quality Standards
- **Code Readability**: Clear naming conventions, appropriate comments, logical structure
- **Error Handling**: Proper error detection, handling, and recovery mechanisms
- **Resource Management**: Appropriate allocation, usage, and cleanup of system resources
- **Security Practices**: Input validation, secure data handling, appropriate access controls
- **Performance Considerations**: Efficient algorithms, minimal resource consumption

### Smart Verification Approach
- **Syntax Validation**: Code compiles/parses without errors for target language
- **Pattern Compliance**: Changes follow established project conventions and standards
- **Integration Verification**: Modified components work correctly with existing system
- **Performance Validation**: Changes maintain or improve system performance
- **Security Validation**: No security vulnerabilities introduced by changes
- **Rollback Readiness**: Changes can be safely reverted if issues discovered

### Validation Execution Framework
- **Pre-Change Analysis**: Understand impact and risk before validation begins
- **Targeted Validation**: Focus on areas actually affected by changes
- **Parallel Validation**: Run multiple validation checks simultaneously when possible
- **Progressive Validation**: Start with fast checks, then comprehensive validation
- **Real-Time Feedback**: Provide immediate feedback during validation process

### Quality Assurance Integration
- **Embedded Validation**: Work with autonomous specialists to validate during implementation
- **Interface Verification**: Ensure clean integration between specialist work areas
- **System Coherence**: Validate overall system integrity after all changes
- **Documentation Validation**: Ensure changes properly documented where needed

## Success Criteria
- **All changes validated**: Every modification verified against project standards
- **Zero deployment issues**: No breaking changes reach production
- **Efficient validation**: Fast feedback without development workflow disruption
- **Quality consistency**: Uniform standards maintained across all work streams
- **Technology adaptability**: Validation works effectively across all project technologies
```

#### Success Confirmation
```markdown
# ✅ TEAM SUCCESSFULLY CREATED!

## Setup Complete with Quality Verification
✅ **Team Created**: [X] specialists generated and validated
✅ **Quality Verified**: All specialists pass validation protocols
✅ **Directories**: `.claude/agents/guild/` structure ready
✅ **Configuration**: Preferences saved to `.guild/instructions.md`
✅ **Integration**: Adaptive 3-tier execution enabled
✅ **Validation Passed**: Setup integrity confirmed

## Your Team
- **Size**: [X] specialists (optimal for your project complexity)
- **Scope**: Conflict-free boundaries enable autonomous parallel execution
- **Templates**: Mix of standard and autonomous specialists based on task complexity
- **Quality**: Smart verification integrated into all work (embedded + centralized)
- **Adaptability**: Right-sized process for each task complexity

## Ready to Use

🚀 **Start working**: `/guild "describe your task"`
📁 **View team**: Check `.claude/agents/guild/` directory
⚙️ **Adjust settings**: Edit `.guild/instructions.md`
🔄 **Rebuild team**: Run `/guild:setup` again anytime

## How It Works

Your team uses adaptive execution with autonomous capabilities:
- **Tier 1 tasks**: Direct implementation with standard specialists and verification
- **Tier 2 tasks**: Brief planning + autonomous parallel execution with conflict-free boundaries
- **Tier 3 tasks**: Comprehensive analysis + mixed autonomous/coordinated implementation

**Autonomous Execution Features**:
- **Conflict Prevention**: Predictive boundary allocation ensures zero resource conflicts
- **Independent Decision Making**: Autonomous specialists resolve challenges within scope
- **Minimal Coordination**: Reduced overhead through intelligent boundary design
- **Quality Self-Validation**: Built-in quality assurance in autonomous specialists

Every task gets the right level of process and autonomy - no more, no less.

**Ready for intelligent, adaptive development!**
```

---

## Quality Verification Protocols

### Specialist Creation Quality Criteria
**Validate each specialist meets quality standards:**

#### Template Validation Protocol
- **Structure Verification**: Confirm YAML frontmatter complete with name, description, model, thinking_mode
- **Mission Clarity**: Validate clear, focused mission statement with measurable objectives
- **Scope Definition**: Ensure specific file/directory assignments with clear boundaries
- **Integration Points**: Verify explicit handoff points and coordination mechanisms defined
- **Success Criteria**: Confirm measurable, testable success criteria specified

#### Capability Matching Validation
- **Technology Alignment**: Specialist skills match project technology stack requirements
- **Scope Appropriateness**: Specialist capabilities align with assigned scope complexity
- **Autonomous Readiness**: For autonomous specialists, verify independent execution capabilities
- **Quality Self-Validation**: Confirm specialists have embedded quality assurance protocols

### Team Composition Quality Validation
**Ensure optimal team structure and coverage:**

#### Coverage Analysis Protocol
- **Requirement Coverage**: Verify all project aspects covered by specialist assignments
- **Skill Gap Detection**: Identify and address any capability gaps in team composition
- **Redundancy Elimination**: Ensure no unnecessary overlap between specialist responsibilities
- **Integration Coverage**: Confirm all system integration points have assigned specialists

#### Boundary Conflict Detection
- **Overlap Analysis**: Validate no conflicting work areas between specialists
- **Resource Allocation**: Ensure exclusive file/component assignments where needed
- **Dependency Mapping**: Identify and properly plan inter-specialist dependencies
- **Communication Protocols**: Establish clear coordination mechanisms between specialists

#### Team Size Optimization
- **Complexity Matching**: Team size appropriate for actual task complexity (1-3 simple, 2-5 medium, 3-8 complex)
- **Efficiency Validation**: No over-staffing that would create coordination overhead
- **Capability Sufficiency**: Team has adequate skills without under-staffing
- **Parallel Execution Readiness**: For Tier 2+ tasks, minimum parallel work streams available

### Setup Completion Quality Assurance
**Verify successful setup before user handoff:**

#### File System Validation
- **Directory Structure**: Confirm `.claude/agents/guild/` structure created correctly
- **File Creation**: Validate all specialist files generated with proper naming
- **Template Integration**: Verify specialists properly reference core modules
- **Permission Verification**: Ensure files accessible and executable

#### Configuration Integrity
- **Instructions File**: Validate `.guild/instructions.md` properly formatted and complete
- **Preference Storage**: Confirm user preferences accurately captured
- **Team Metadata**: Verify team composition and coordination settings stored
- **Integration Settings**: Ensure adaptive workflow coordination enabled

#### Readiness Verification
- **Specialist Accessibility**: Confirm all specialists can be discovered and invoked
- **Template Validation**: Each specialist template parses correctly without errors
- **Integration Testing**: Basic validation that specialists can coordinate
- **User Interface**: Setup results properly presented to user with clear next steps

## Success Principles

✅ **Right-Sized Teams**: Match team size to actual project complexity
✅ **Conflict-Free Boundaries**: Each specialist has well-defined, non-overlapping responsibilities  
✅ **Adaptive Templates**: Standard for coordination, autonomous for parallel execution
✅ **Autonomous Execution**: Specialists work independently within intelligent boundaries
✅ **Quality Verification**: Comprehensive quality assurance embedded throughout setup process
✅ **Validated Setup**: All components verified before user handoff
✅ **Minimal Coordination**: Reduced overhead through predictive boundary allocation
✅ **Easy Reconfiguration**: Rebuild team anytime as project evolves

This setup creates specialist teams that are perfectly sized and scoped for your specific project needs