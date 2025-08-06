# Guild Template System

**ADVANCED TEMPLATE ARCHITECTURE**: Guild employs a sophisticated template system that combines clean development separation with runtime efficiency through intelligent template composition.

## Multi-Phase Template Architecture

### Development Phase - Clean Separation
- **Source Templates**: Individual template files in `templates/` directory for maintainability
- **Logic Isolation**: Setup commands contain only technology detection and agent creation logic
- **Template Modularity**: Each template serves specific system components (overview, instructions, agents, ignore)
- **Version Control**: Templates maintained separately for independent updates and modifications

### Installation Phase - Dynamic Composition
- **Template Embedding**: `install.js` automatically inlines all templates into setup command during installation
- **Content Injection**: Templates embedded as markdown code blocks directly within setup.md
- **Exclusion Logic**: workflow.md excluded (commands define their own workflow compositions)
- **Integrity Validation**: Template content verified during composition process

### Runtime Phase - Self-Contained Operation
- **Direct Access**: Setup command accesses templates inline without external dependencies
- **Technology Customization**: Templates dynamically customized based on discovered technologies
- **Research Integration**: Template content enhanced with discovered technology patterns
- **System Generation**: Complete `.guild/` system created from embedded templates

## Template Customization Engine

### Technology-Specific Adaptation
- **Dynamic Ignore Patterns**: Automatically generate ignore patterns based on detected technologies
- **Agent Template Customization**: Customize agent templates with research-backed expertise
- **Instructions Enhancement**: Enhance project instructions with discovered technology requirements
- **Overview Integration**: Update overview with project-specific agent capabilities and workflows

### Research-Enhanced Templates
- **Context7 Integration**: Template content enhanced with library-specific documentation
- **WebSearch Enrichment**: Templates updated with current best practices and trends
- **Community Standards**: Integration of community-driven patterns and recommendations
- **Future-Proofing**: Template evolution support for emerging technology integration

### Template Flow Architecture
```
Development: templates/*.md (modular) + commands/*.md (logic)
     ↓ install.js composition
Installation: setup.md (logic + embedded templates)
     ↓ /guild:setup execution
Runtime: .guild/ system generation (customized templates)
```

## Smart Template Features

### Adaptive Content Generation
- **Technology Detection**: Templates adapt content based on discovered tech stack
- **Research Integration**: Template sections enhanced with research findings
- **Capability Scaling**: Template complexity scales with project complexity
- **Agent Specialization**: Templates generate specialized agent capabilities

### Template Validation System
- **Content Integrity**: Verify template composition during installation
- **Technology Alignment**: Ensure templates match discovered technologies
- **Research Validation**: Validate research integration in template content
- **System Compliance**: Ensure generated content follows Guild architecture standards

## General Template Injection Guidelines

**CRITICAL PROJECT CONSIDERATIONS**: When developing Guild commands, apply these template separation rules to maintain clean architecture:

### Template Extraction Criteria
Commands should move template content to separate files and use install.js injection when:

- **Large Template Content**: Command contains substantial template definitions (>100 lines of template content)
- **Reusable Templates**: Template content could be shared across multiple commands or reused in different contexts
- **Complex Template Logic**: Template requires dynamic generation, variable substitution, or conditional content
- **Future Injection Potential**: Template content may need to be modified or extended after installation
- **Command Logic Clarity**: Template content obscures or complicates the core command logic

### Template Separation Process
1. **Extract Templates**: Move large/reusable template content from command files to `templates/` directory
2. **Create Template Files**: Store templates as separate `.md` files with descriptive names
3. **Update Install Script**: Modify install.js to inject templates into target commands during installation
4. **Command References**: Update commands to use embedded template content directly without extraction functions
5. **Clean Command Logic**: Ensure commands contain only essential logic with direct template embedding

### Template Injection Implementation
- **Install Phase**: install.js reads templates from `templates/` directory during `npx claude-guild`
- **Command Composition**: Templates injected into clean command files as embedded markdown code blocks
- **Direct Access**: Commands access templates directly from embedded markdown sections without functions
- **Runtime Generation**: Commands use embedded templates inline to generate required files during execution

### Architecture Benefits
- **Clean Separation**: Command logic separated from template content for better maintainability
- **Reusability**: Templates can be shared across multiple commands and use cases
- **Flexibility**: Templates can be modified independently without changing command logic
- **Consistency**: Centralized template management ensures consistent formatting and content
- **Scalability**: New templates can be added without modifying existing command structures

### Template Injection Flow
```
Development: commands/*.md (logic only) + templates/*.md (separate files)
    ↓ install.js execution
Installation: commands/*.md (logic + embedded templates) → user project
    ↓ command execution
Runtime: commands use embedded templates → generate required files
```

## Template Types & Purposes

### System Template Categories

#### Core System Templates
- **overview.md Template**: Master reference system with Standard Execution Framework
- **instructions.md Template**: User-configurable project settings and requirements
- **agents.md Template**: Agent creation standards and templates
- **ignore.md Template**: File exclusion patterns with technology-specific rules

#### Technology-Specific Templates
- **Frontend Framework Templates**: React, Vue, Angular, Svelte specialized configurations
- **Backend Framework Templates**: Node.js, Python, Go, Rust, PHP framework-specific setups
- **Build Tool Templates**: Webpack, Vite, Rollup, esbuild configuration templates
- **Testing Framework Templates**: Jest, Vitest, Cypress, Playwright testing configurations

#### Research-Enhanced Templates
- **Context7 Integration Templates**: Official documentation integration patterns
- **WebSearch Enhanced Templates**: Community standards and trend integration
- **Hybrid Research Templates**: Combined Context7 and WebSearch capability integration
- **Dynamic Discovery Templates**: Unknown technology research and integration templates

### Template Content Structure

#### Standard Template Sections
```markdown
# Template Header
<!-- Template metadata and purpose -->

## Technology-Specific Configuration
<!-- Technology detection and customization logic -->

## Research Integration Section
<!-- Context7 and WebSearch research integration -->

## Agent Capability Section
<!-- Specialized agent configuration and capabilities -->

## System Integration Section
<!-- Framework compliance and system integration -->
```

#### Research-Integrated Template Structure
```markdown
# Research-Enhanced Template

## Official Documentation Integration (Context7)
<!-- Library-specific documentation patterns -->

## Community Standards Integration (WebSearch)
<!-- Current best practices and community patterns -->

## Technology Trend Analysis
<!-- Emerging patterns and future-proofing considerations -->

## Specialized Agent Configuration
<!-- Research-backed agent capability definitions -->
```

## Template Maintenance & Evolution

### Template Versioning Strategy
- **Semantic Versioning**: Template versions aligned with Guild system versions
- **Backward Compatibility**: Template evolution maintains compatibility with existing installations
- **Migration Support**: Automatic template migration for system updates
- **Rollback Capability**: Template rollback support for compatibility issues

### Template Quality Assurance
- **Validation Testing**: Automated testing of template generation and customization
- **Technology Alignment**: Verification that templates match current technology standards
- **Research Integration Testing**: Validation of Context7 and WebSearch integration accuracy
- **Performance Testing**: Template processing performance and optimization validation

### Template Evolution Protocol
- **Community Feedback Integration**: Template improvements based on user feedback and usage patterns
- **Technology Trend Adaptation**: Template updates based on emerging technology patterns
- **Research Enhancement**: Continuous improvement of research integration capabilities
- **System Architecture Alignment**: Template evolution aligned with Guild system architecture improvements