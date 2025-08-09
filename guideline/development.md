# Development Guide

## Contributing to Claude Guild

### Development Setup

```bash
# Clone repository
git clone https://github.com/your-org/claude-guild
cd claude-guild

# Install dependencies
npm install

# Test installation
npm run test-install
```

### Project Structure

```
claude-guild/
├── templates/       # Core templates (logic)
├── commands/        # Command definitions
├── docs/           # Documentation
├── install.js      # NPM installer
└── package.json    # NPM configuration
```

### Development Workflow

1. **Make Changes**: Edit templates or commands
2. **Test Locally**: Run `node install.js` to test
3. **Update Docs**: Keep guideline/README.md current
4. **Submit PR**: Include tests and documentation

## Adding Features

### New Process

Create in `templates/processes.md`:
```yaml
process: my-process
  description: what it does
  inputs: [required]
  steps: [actions]
  outputs: [results]
```

### New Agent

Add to `templates/agents.md`:
```yaml
---
name: my-agent
role: purpose
processes: [my-process]
---
```

### New Command

Create `commands/mycommand.md`:
```markdown
# /guild:mycommand

**Usage**: `/guild:mycommand [args]`

## Workflow
[Define workflow stages and execution]
```

## Testing

### Local Testing

```bash
# Test installation
npm run test-install

# Test in project
cd test-project
node ../claude-guild/install.js
```

### Test Checklist

- [ ] Installation completes
- [ ] Commands are registered
- [ ] Agents are created
- [ ] Workflows execute
- [ ] Performance acceptable

## Code Standards

### Principles

1. **Simplicity**: Prefer simple over clever
2. **Generic**: Patterns over specifics
3. **Reusable**: DRY principle
4. **Documented**: Clear explanations
5. **Tested**: Verify changes

### Guidelines

- Keep agents thin (metadata only)
- Put logic in processes
- Use technology patterns, not names
- Optimize for parallelization
- Document changes in guideline/README.md

## Publishing

### Version Management

```bash
# Patch version (bug fixes)
npm version patch

# Minor version (new features)
npm version minor

# Major version (breaking changes)
npm version major
```

### Publishing Process

```bash
# Run publish script
./publish.sh

# Or manually
npm publish
```

### Pre-publish Checklist

- [ ] Tests pass
- [ ] Documentation updated
- [ ] guideline/README.md current
- [ ] Version bumped
- [ ] Changelog updated

## Debugging

### Common Issues

**Installation Fails**
- Check Node.js version (18+)
- Verify npm permissions
- Clear npm cache

**Commands Not Found**
- Check `.claude/commands/` directory
- Verify command registration
- Restart Claude Code

**Agents Missing**
- Run `/guild:setup`
- Check `.claude/agents/guild/`
- Verify technology detection

### Debug Mode

Enable verbose logging:
```javascript
// In install.js
const DEBUG = true;
```

## Architecture Decisions

### Why Thin Agents?
- Easier maintenance
- Clearer separation
- Better reusability
- Simpler testing

### Why Process Centralization?
- Single source of truth
- Consistent behavior
- Easy updates
- Better debugging

### Why Pattern Detection?
- Technology agnostic
- Future-proof
- Broader compatibility
- Easier maintenance

## Maintenance

### Regular Tasks

- Update dependencies monthly
- Review performance metrics
- Prune unused code
- Update documentation
- Address user feedback

### Deprecation Policy

1. Mark as deprecated in documentation
2. Add console warnings
3. Maintain for 2 versions
4. Remove in major version

## Community

### Getting Help

- GitHub Issues for bugs
- Discussions for features
- Discord for chat
- Stack Overflow for Q&A

### Contributing

1. Check existing issues
2. Discuss major changes
3. Follow code standards
4. Include tests
5. Update documentation

## Release Process

### Release Types

- **Patch**: Bug fixes only
- **Minor**: New features, backward compatible
- **Major**: Breaking changes

### Release Checklist

- [ ] All tests passing
- [ ] Documentation complete
- [ ] Migration guide (if breaking)
- [ ] Changelog updated
- [ ] Version bumped
- [ ] Tag created
- [ ] NPM published
- [ ] GitHub release created# Development Guide

## Contributing to Claude Guild

### Development Setup

```bash
# Clone repository
git clone https://github.com/your-org/claude-guild
cd claude-guild

# Install dependencies
npm install

# Test installation
npm run test-install
```

### Project Structure

```
claude-guild/
├── templates/       # Core templates (logic)
├── commands/        # Command definitions
├── docs/           # Documentation
├── install.js      # NPM installer
└── package.json    # NPM configuration
```

### Development Workflow

1. **Make Changes**: Edit templates or commands
2. **Test Locally**: Run `node install.js` to test
3. **Update Docs**: Keep guideline/README.md current
4. **Submit PR**: Include tests and documentation

## Adding Features

### New Process

Create in `templates/processes.md`:
```yaml
process: my-process
  description: what it does
  inputs: [required]
  steps: [actions]
  outputs: [results]
```

### New Agent

Add to `templates/agents.md`:
```yaml
---
name: my-agent
role: purpose
processes: [my-process]
---
```

### New Command

Create `commands/mycommand.md`:
```markdown
# /guild:mycommand

**Usage**: `/guild:mycommand [args]`

## Workflow
[Define workflow stages and execution]
```

## Testing

### Local Testing

```bash
# Test installation
npm run test-install

# Test in project
cd test-project
node ../claude-guild/install.js
```

### Test Checklist

- [ ] Installation completes
- [ ] Commands are registered
- [ ] Agents are created
- [ ] Workflows execute
- [ ] Performance acceptable

## Code Standards

### Principles

1. **Simplicity**: Prefer simple over clever
2. **Generic**: Patterns over specifics
3. **Reusable**: DRY principle
4. **Documented**: Clear explanations
5. **Tested**: Verify changes

### Guidelines

- Keep agents thin (metadata only)
- Put logic in processes
- Use technology patterns, not names
- Optimize for parallelization
- Document changes in guideline/README.md

## Publishing

### Version Management

```bash
# Patch version (bug fixes)
npm version patch

# Minor version (new features)
npm version minor

# Major version (breaking changes)
npm version major
```

### Publishing Process

```bash
# Run publish script
./publish.sh

# Or manually
npm publish
```

### Pre-publish Checklist

- [ ] Tests pass
- [ ] Documentation updated
- [ ] guideline/README.md current
- [ ] Version bumped
- [ ] Changelog updated

## Debugging

### Common Issues

**Installation Fails**
- Check Node.js version (18+)
- Verify npm permissions
- Clear npm cache

**Commands Not Found**
- Check `.claude/commands/` directory
- Verify command registration
- Restart Claude Code

**Agents Missing**
- Run `/guild:setup`
- Check `.claude/agents/guild/`
- Verify technology detection

### Debug Mode

Enable verbose logging:
```javascript
// In install.js
const DEBUG = true;
```

## Architecture Decisions

### Why Thin Agents?
- Easier maintenance
- Clearer separation
- Better reusability
- Simpler testing

### Why Process Centralization?
- Single source of truth
- Consistent behavior
- Easy updates
- Better debugging

### Why Pattern Detection?
- Technology agnostic
- Future-proof
- Broader compatibility
- Easier maintenance

## Maintenance

### Regular Tasks

- Update dependencies monthly
- Review performance metrics
- Prune unused code
- Update documentation
- Address user feedback

### Deprecation Policy

1. Mark as deprecated in documentation
2. Add console warnings
3. Maintain for 2 versions
4. Remove in major version

## Community

### Getting Help

- GitHub Issues for bugs
- Discussions for features
- Discord for chat
- Stack Overflow for Q&A

### Contributing

1. Check existing issues
2. Discuss major changes
3. Follow code standards
4. Include tests
5. Update documentation

## Release Process

### Release Types

- **Patch**: Bug fixes only
- **Minor**: New features, backward compatible
- **Major**: Breaking changes

### Release Checklist

- [ ] All tests passing
- [ ] Documentation complete
- [ ] Migration guide (if breaking)
- [ ] Changelog updated
- [ ] Version bumped
- [ ] Tag created
- [ ] NPM published
- [ ] GitHub release created