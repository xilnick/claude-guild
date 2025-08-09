# Performance Guide

## Performance Optimization

### Quick Wins

1. **Enable Parallelization**
```yaml
# .guild/instructions.md
parallel:
  enabled: true
  max_agents: 3
```

2. **Use Specific Task Descriptions**
- Good: "Add user authentication to the login endpoint"
- Bad: "Fix the login"

3. **Skip Unnecessary Stages**
```bash
# Skip reasoning for simple tasks
/guild --no-reason "update package version"

# Planning only for analysis
/guild --no-implement "analyze optimization opportunities"
```

## Context Optimization

### Automatic Optimizations

Guild automatically:
- Filters irrelevant context (85% reduction)
- Compresses verbose data
- Caches frequently used information
- Removes outdated context

### Manual Optimization

Configure context limits:
```yaml
# .guild/instructions.md
context:
  max_size: 10KB
  compression: aggressive
  cache: enabled
```

## Parallel Execution

### When Parallelization Helps

✅ **Good for Parallel**:
- Independent features
- Multiple components
- Separate concerns
- Testing suites

❌ **Better Sequential**:
- Dependent changes
- Small fixes
- High coordination
- Debugging

### Parallel Configuration

```yaml
# .guild/instructions.md
parallel:
  strategies:
    - independent  # Separate scopes
    - pipeline     # Overlapping stages
    - adaptive     # Dynamic adjustment
```

## Monitoring Performance

### Key Metrics

Watch for:
- Time to first result
- End-to-end completion
- Context transfer size
- Agent utilization
- Cache hit rates

### Performance Indicators

```yaml
Good Performance:
  first_result: < 5 seconds
  completion: < 2 minutes
  context_size: < 10KB
  cache_hits: > 70%

Needs Optimization:
  first_result: > 30 seconds
  completion: > 5 minutes
  context_size: > 100KB
  cache_hits: < 30%
```

## Troubleshooting

### Slow First Response

**Causes**:
- Large context gathering
- Complex analysis
- Sequential research

**Solutions**:
- Use `--no-reason` for simple tasks
- Provide specific descriptions
- Enable streaming mode

### High Memory Usage

**Causes**:
- Context accumulation
- No compression
- Cache overflow

**Solutions**:
- Enable context decay
- Increase compression
- Clear cache periodically

### Coordination Overhead

**Causes**:
- Too many parallel agents
- Complex dependencies
- Frequent synchronization

**Solutions**:
- Reduce max_agents
- Use sequential for dependent tasks
- Optimize routing rules

## Optimization Strategies

### By Task Type

**Feature Development**
```yaml
strategy: parallel
max_agents: 4
context: filtered
```

**Bug Fixing**
```yaml
strategy: sequential
max_agents: 1
context: comprehensive
```

**Refactoring**
```yaml
strategy: adaptive
max_agents: 3
context: compressed
```

**Testing**
```yaml
strategy: parallel
max_agents: 5
context: minimal
```

## Advanced Optimization

### Predictive Loading

Guild predicts and preloads:
- Common processes
- Frequent agents
- Popular context
- Typical patterns

### Adaptive Execution

System adjusts based on:
- Current load
- Task complexity
- Historical performance
- Resource availability

### Streaming Pipeline

Enable continuous flow:
```yaml
streaming:
  enabled: true
  buffer_size: 1KB
  no_waiting: true
```

## Performance Tuning

### For Speed
```yaml
performance_preset: speed
parallel:
  enabled: true
  max_agents: 5
context:
  compression: maximum
  filtering: aggressive
```

### For Accuracy
```yaml
performance_preset: accuracy
parallel:
  enabled: false
  max_agents: 1
context:
  compression: minimal
  filtering: conservative
```

### For Balance
```yaml
performance_preset: balanced
parallel:
  enabled: true
  max_agents: 3
context:
  compression: moderate
  filtering: smart
```

## Benchmarks

Typical performance improvements:

| Metric | Sequential | Parallel | Improvement |
|--------|------------|----------|-------------|
| Simple Task | 30s | 10s | 3x |
| Medium Task | 2m | 45s | 2.7x |
| Complex Task | 5m | 2m | 2.5x |
| Context Size | 100KB | 15KB | 85% reduction |
| Memory Usage | 500MB | 200MB | 60% reduction |

## Best Practices

1. **Start Simple**: Begin with defaults, optimize as needed
2. **Measure First**: Profile before optimizing
3. **Iterate**: Small improvements compound
4. **Monitor**: Watch metrics during execution
5. **Adapt**: Different tasks need different strategies

## Optimization Checklist

- [ ] Parallelization enabled
- [ ] Context filtering active
- [ ] Compression configured
- [ ] Cache enabled
- [ ] Streaming mode on
- [ ] Adaptive execution enabled
- [ ] Monitoring metrics
- [ ] Regular performance review