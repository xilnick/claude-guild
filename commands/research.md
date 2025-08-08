# /guild:research

**Purpose**: Gather comprehensive context through intelligent research using available MCP servers, web search, and persistent memory management.

## Custom Prompt & Reasoning

**CRITICAL**: This command operates with intelligent reasoning for comprehensive context research:

### Reasoning Protocol
- **Query Intelligence**: Deep analysis of research requirements and optimal source selection
- **Context Synthesis Logic**: Strategic integration of multiple information sources for comprehensive context
- **Research Validation**: Systematic verification of information accuracy and relevance
- **Memory Management Strategy**: Intelligent caching and retrieval optimization for performance
- **Context Pipeline Logic**: Seamless integration with Guild workflow stages for optimal agent context delivery

### Research Reasoning Framework
1. **Query Analysis**: Parse research requirements and identify optimal information sources
2. **Source Selection**: Strategic choice between available MCP servers, web search, and cached contexts
3. **Information Synthesis**: Intelligent combination of multi-source data for comprehensive context
4. **Validation Logic**: Cross-reference verification and quality assurance protocols
5. **Context Optimization**: Prepare research findings for specific Guild workflow stage requirements

## Usage

```bash
c /guild:research <query> [options]
```

## Query Types

### Library Research
```bash
c /guild:research library react hooks
c /guild:research lib @tanstack/react-query
c /guild:research docs express.js middleware
```

### Topic Research  
```bash
c /guild:research topic "React 18 concurrent features"
c /guild:research web "Node.js performance optimization 2025"
c /guild:research pattern "microservices authentication"
```

### Project Context
```bash
c /guild:research project architecture
c /guild:research context patterns
c /guild:research standards coding-style
```

### Memory Management
```bash
c /guild:research validate all
c /guild:research cleanup outdated
c /guild:research index rebuild
c /guild:research stats usage
```

## Research Engine Capabilities

### 1. Multi-Source Intelligence
- **Available MCP Servers**: Primary source for library documentation
- **Web Search**: Fallback for gaps and current information  
- **Memory Cache**: Fast retrieval of validated contexts
- **Cross-Validation**: Information verification across sources

### 2. Persistent Memory System
```
.guild/research/
├── index.json              # Master index with fast lookup
├── libraries/              # MCP server library documentation
├── web-research/           # Web search results
├── project-context/        # Project-specific context
├── planning-contexts/      # Research context prepared for planning agents
├── implementation-contexts/ # Planning context prepared for implementation agents
└── validation.json         # Validation tracking
```

### 3. Intelligent Caching
- **Automatic Indexing**: Fast context lookup and retrieval
- **Time-Based Validation**: Scheduled freshness checks
- **Usage Analytics**: Optimize cache based on access patterns
- **Dependency Tracking**: Maintain context relationships

### 4. Research Workflow

**Standard Research Process**:
1. **Query Analysis**: Parse request for libraries, topics, requirements
2. **Cache Lookup**: Check existing validated context 
3. **MCP Integration**: Retrieve library documentation
4. **Web Search Fallback**: Fill knowledge gaps
5. **Context Synthesis**: Combine and validate all sources
6. **Memory Persistence**: Cache with indexing and metadata
7. **Context Delivery**: Provide structured validated context

## Options

### Research Scope
- `--fresh`: Skip cache, fetch from sources directly
- `--cached-only`: Use only cached context, no new fetching
- `--deep`: Comprehensive research with cross-validation
- `--quick`: Fast lookup with minimal validation

### Source Control
- `--mcp-only`: Use only MCP servers (no web search)
- `--web-only`: Use only web search (skip MCP)
- `--sources=list`: Specify allowed source types

### Memory Management
- `--save`: Force save to memory cache
- `--no-cache`: Don't cache results
- `--validate`: Force validation of existing cache
- `--cleanup`: Remove outdated cached contexts

### Output Format
- `--format=md`: Markdown formatted output (default)
- `--format=json`: JSON structured output
- `--format=summary`: Brief summary only
- `--metadata`: Include source metadata and timestamps

## Memory Management Commands

### Validation
```bash
c /guild:research validate libraries
c /guild:research validate web-research
c /guild:research validate all --force
```

### Cleanup
```bash
c /guild:research cleanup outdated
c /guild:research cleanup unused --threshold=90d
c /guild:research cleanup broken-links
```

### Analytics
```bash
c /guild:research stats usage
c /guild:research stats validation
c /guild:research stats performance
```

### Index Management
```bash
c /guild:research index rebuild
c /guild:research index optimize
c /guild:research index verify
```

## Context Types

### Library Context
- **Documentation**: API references, guides, examples
- **Version Information**: Compatibility, breaking changes
- **Best Practices**: Usage patterns, common pitfalls
- **Integration Notes**: Framework compatibility, setup

### Web Research Context
- **Current Information**: Latest updates, community discussions
- **Tutorials**: Step-by-step guides, implementations
- **Comparisons**: Feature comparisons, alternatives
- **Troubleshooting**: Common issues, solutions

### Project Context
- **Architecture Patterns**: Current project structure
- **Coding Standards**: Style guides, conventions
- **Integration Points**: API contracts, data flows
- **Quality Requirements**: Testing, performance standards

## Research Quality Assurance

### Source Validation
- **Authority Check**: Official documentation prioritized
- **Freshness Verification**: Check for outdated information
- **Cross-Reference**: Validate across multiple sources
- **Version Compatibility**: Ensure current version relevance

### Cache Management
- **Automatic Validation**: Scheduled freshness checks
- **Smart Refresh**: Update only when changes detected
- **Dependency Updates**: Cascade updates to related contexts
- **Quality Metrics**: Track reliability and accuracy

### Performance Optimization
- **Parallel Research**: Concurrent source querying
- **Intelligent Caching**: Optimize based on usage patterns
- **Lazy Loading**: Load contexts on-demand
- **Compression**: Efficient storage of large documentation

## Integration with Guild Workflow

The Research Context Engine integrates seamlessly with the Guild comprehensive workflow:

- **Planning Phase**: Automatic research context gathering and synthesis for planning agents
- **Implementation Phase**: Context pipeline delivers research findings to implementation agents  
- **Validation Phase**: Verify against best practices and standards
- **All Agents**: Context research available to any Guild agent

### Context Pipeline Integration

**Research → Planning → Implementation Flow**:
```
Research Context Gathering → Planning Context Creation → Implementation Context Packages
```

**Automatic Integration**:
- **Stage 1 Planning**: Research agent automatically activated to gather context
- **Context Synthesis**: Research findings combined into planning-ready contexts
- **Context Flow**: Planning decisions packaged for implementation agents
- **Memory Persistence**: Full context pipeline cached for reuse and validation

**Context Types in Pipeline**:
- **Planning Contexts**: Research-informed architectural decisions and design guidance
- **Implementation Contexts**: Agent-specific implementation guidance with research backing

### Guild System Compliance

**CRITICAL COMPLIANCE REQUIREMENTS**: The Research Context Engine MUST operate within Guild system architecture:

#### Workflow Integration
1. **Follow research workflow stages defined in .guild/overview.md** for research context gathering and synthesis
2. **Respect .guild/ignore.md patterns** unless explicitly requested by user
3. **Follow .guild/instructions.md requirements** for research quality and source validation
4. **Guild System Authority**: Reference .guild/overview.md as master authority for all Guild system rules and research integration protocols

#### Agent Coordination
- **guild-task-routing-agent**: Coordinate research requests through proper task routing
- **guild-research-agent**: Execute research using available MCP servers and WebSearch capabilities
- **Context Pipeline**: Deliver research findings to appropriate Guild workflow stages
- **Master Reference Compliance**: All research operations must align with Guild system requirements defined in .guild/overview.md

## Examples

### Basic Library Research
```bash
c /guild:research library react
# Returns: React documentation, hooks guide, best practices
```

### Deep Topic Research
```bash
c /guild:research topic "React Server Components" --deep
# Returns: Comprehensive research from MCP servers + web sources
```

### Project Context Update
```bash
c /guild:research project patterns --validate --save
# Returns: Current project patterns with validated cache update
```

### Memory Cleanup
```bash
c /guild:research cleanup outdated --threshold=30d
# Removes contexts older than 30 days with low usage
```

The Research Context Engine ensures Guild agents always have access to current, validated, and comprehensive context for optimal task execution.