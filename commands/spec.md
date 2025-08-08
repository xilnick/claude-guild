# /guild:spec

**Usage**: `/guild:spec [level] "specification description"`

**Interactive Mode**: `/guild:spec [level]` - If no description is provided, Guild will prompt you interactively

**Purpose**: Create detailed technical specifications at various abstraction levels for documentation and implementation guidance.

**Specification Levels**:
- `project` - Project-level specifications and architecture
- `component` - Component-level specifications and interfaces  
- `model` - Data model and business logic specifications

## Configuration Check

First, check if Guild is configured for this project by looking for `.guild/instructions.md`.

### If Guild NOT Configured

Display this message:

```
🏛️ **Guild Not Configured**

Guild is not yet set up for this project. To use specification management:

1. **Run Setup**: Use `/guild:setup` to analyze your project and create appropriate agents
2. **Specification Ready**: After setup, use `/guild:spec [level] "description"` to create/update specifications
3. **Spec Management**: Specifications are saved to .guild/specs/ for documentation and agent access

**To get started**: `/guild:setup [optional-guidance]`
```

### If Guild IS Configured

**CHECK FOR SPECIFICATION DESCRIPTION**: If no description provided, enter interactive mode:

```
🏛️ **Guild Specification Mode - [Level: {provided level or 'not specified'}]**

What specification would you like to create or update?

**Specification Examples:**
• Project: Overall architecture and system design
• Component: UI component interfaces and contracts
• Model: Data models and business logic rules
• API: Endpoint specifications and contracts
• Database: Schema and relationship definitions

**Available Levels:** project, component, model

Enter specification description:
```

After receiving description (and level if not provided), proceed with specification workflow.

**CRITICAL**: This command MUST activate the specialized 5-stage specification workflow for the provided specification requirements.

Execute comprehensive specification creation/update through the optimized Guild specification system with systematic analysis and structured documentation generation.

## Specification Workflow

**MANDATORY SPECIFICATION WORKFLOW**: You MUST follow the specialized 5-stage specification process:

**CRITICAL**: This command executes the specialized 5-stage specification workflow using the following workflow composition from `.guild/overview.md`:

### Workflow Composition: Specialized Specification Process

This command executes the following mandatory workflow sequence:

1. **🧠 Prompt Reasoning**: guild-reasoning-agent analyzes specification description, corrects typos, clarifies scope and level requirements, aligns with project context
2. **🔍 Context Research**: guild-research-agents gather comprehensive background information and technical context
3. **🎯 Strategic Planning**: guild-planning-agent creates detailed specification structure and content approach
4. **📝 Specification Creation**: framework-coupled engineers generate structured specifications in `.guild/specs/` directory
5. **✅ Validation**: Final specification validation and quality assurance

Each stage must be completed before proceeding to the next, with reasoning agent ALWAYS engaged first to ensure specification requirements clarity and project alignment.

**STAGE EXECUTION DETAILS**: All agents MUST follow the complete stage definitions provided in `.guild/overview.md` "Workflow Step Definitions" section. Commands reference but do not redefine these canonical stage specifications.

**SPECIFICATION SPECIALIZATION**: This workflow composition optimizes the standard Guild stages for comprehensive specification management with emphasis on level-appropriate documentation (project/component/model), technical accuracy, and structured file organization in `.guild/specs/` directory.

## Specification File Structure

Specifications are organized by level in `.guild/specs/` directory:

```
.guild/specs/
├── project/           # Project-level specifications
├── component/         # Component-level specifications  
└── model/            # Model-level specifications
```

### Project-Level Specifications
**File**: `.guild/specs/project/[name]-spec.md`

```markdown
# Project Specification: [Project Name]

**Level**: Project
**Created**: [Timestamp]
**Last Updated**: [Timestamp]
**Status**: [Draft/Active/Deprecated]

## Project Overview
- **Purpose**: [Project purpose and objectives]
- **Scope**: [Project scope and boundaries]
- **Architecture**: [High-level architecture overview]

## Technology Stack
- **Backend**: [Backend technologies and frameworks]
- **Frontend**: [Frontend technologies and frameworks]
- **Database**: [Database systems and data storage]
- **Infrastructure**: [Infrastructure and deployment]

## System Architecture
### Core Components
[Component descriptions and relationships]

### Integration Patterns
[Integration approaches and protocols]

### Quality Requirements
[Performance, security, and reliability requirements]

## Future Roadmap
[Planned enhancements and future functionality]
```

### Component-Level Specifications
**File**: `.guild/specs/component/[component-name]-spec.md`

```markdown
# Component Specification: [Component Name]

**Level**: Component
**Created**: [Timestamp]
**Last Updated**: [Timestamp]
**Status**: [Draft/Active/Deprecated]

## Component Overview
- **Purpose**: [Component purpose and responsibility]
- **Scope**: [Component boundaries and limitations]
- **Dependencies**: [Required dependencies and integrations]

## Interface Specification
### Public API
[API definitions, methods, and signatures]

### Data Contracts
[Input/output data structures and formats]

### Events and Messages
[Event definitions and message protocols]

## Implementation Guidelines
### Architecture Patterns
[Required patterns and design approaches]

### Error Handling
[Error handling strategies and requirements]

### Testing Requirements
[Testing approaches and coverage requirements]

## Future Enhancements
[Planned improvements and feature additions]
```

### Model-Level Specifications
**File**: `.guild/specs/model/[model-name]-spec.md`

```markdown
# Model Specification: [Model Name]

**Level**: Model
**Created**: [Timestamp]
**Last Updated**: [Timestamp]
**Status**: [Draft/Active/Deprecated]

## Model Overview
- **Purpose**: [Model purpose and business context]
- **Domain**: [Business domain and use cases]
- **Relationships**: [Relationships with other models]

## Data Structure
### Fields and Properties
[Field definitions, types, and constraints]

### Validation Rules
[Business rules and data validation requirements]

### Relationships
[Foreign keys, associations, and dependencies]

## Business Logic
### Operations
[Business operations and methods]

### Rules and Constraints
[Business rules and logical constraints]

### Lifecycle Management
[Create, update, delete, and state management]

## Future Evolution
[Planned model changes and enhancements]
```

## Command Execution

**EXECUTION FRAMEWORK**: This command follows the standardized execution patterns defined in `.guild/overview.md` "Standard Execution Framework" with the following specializations:

### Task Analysis
- **Parse specification description** for clarity, scope, and level requirements (Specifications pattern)
- **Agent Selection**: Determine specification type (new creation or existing update) and level requirements
- **Workflow Activation**: Activate specialized 5-stage specification workflow composition

### Execution Protocol
**REFERENCE**: See `.guild/overview.md` "Standard Workflow Execution Protocol" for complete execution requirements.

**COMMAND-SPECIFIC ADAPTATIONS**:
- **Level-Appropriate Documentation**: Focus on project/component/model-specific specification requirements
- **Technical Accuracy**: Emphasize accurate technical details and comprehensive implementation guidance
- **File Organization**: Generate structured MD files in appropriate `.guild/specs/` subdirectories

### Agent Coordination
**REFERENCE**: See `.guild/overview.md` "Standard Agent Coordination Patterns" for universal coordination protocols.

**SPECIFICATION WORKFLOW AGENTS**:
- **Core System Agents**: guild-task-routing-agent, guild-research-agent (always present)
- **Planning Focus**: Specialized planning agents for specification structure design and content organization
- **Quality Focus**: All agents prioritize accuracy, completeness, and technical correctness

## Example Usage

```
/guild:spec project "E-commerce platform with microservices architecture"
/guild:spec component "User authentication service with JWT and OAuth2"
/guild:spec model "Order management with payment processing and inventory tracking"
/guild:spec component "API gateway with rate limiting and request routing"
/guild:spec model "Product catalog with categories, variants, and pricing"
```

## Specification Principles

**EXECUTION COMPLIANCE**: See `.guild/overview.md` "Standard Compliance Requirements" for complete compliance protocols.

**SPECIFICATION BENEFITS**:
- 📋 **Structured Documentation**: Standardized format for consistency across levels
- 🎯 **Level-Specific Focus**: Tailored content appropriate for project, component, or model level
- 🔄 **Evolutionary Design**: Specifications support both current state and future planning
- 📈 **Quality Assurance**: Emphasis on technical accuracy and completeness
- ⚡ **Agent Integration**: Specifications accessible to Guild agents for informed decision-making

**COMPREHENSIVE SPECIFICATION**: This command provides specialized specification workflow with comprehensive analysis, structured documentation, and quality validation to ensure effective specification creation and maintenance at all levels.

The specification workflow engages appropriate planning agents based on the specification level and executes with systematic analysis, thorough research, and quality assurance throughout the entire 5-stage process.