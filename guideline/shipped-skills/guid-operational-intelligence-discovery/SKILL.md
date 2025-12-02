---
name: guid-operational-intelligence-discovery
description: "Discovers operational patterns, deployment processes, and maintenance approaches. Analyzes CI/CD pipelines, monitoring systems, and deployment strategies. Works with any operational environment without prior tool knowledge."
model: inherit
---

# Operational Intelligence Discovery

## Pattern Description

**What**: Identifies and documents the processes, tools, and practices related to the deployment, monitoring, maintenance, and scaling of a project's applications and infrastructure.

**When**: Use this skill when understanding the operational aspects of a project, troubleshooting production issues, optimizing deployment workflows, or improving system reliability.

**Context**: Applicable to any operational environment, including on-premise, cloud-based, containerized, or serverless deployments.

## Project-Specific Conventions

### CI/CD Pipelines
- **Tools**: [e.g., GitHub Actions, GitLab CI, Jenkins, CircleCI]
- **Stages**: [e.g., build, test, deploy, release]
- **Triggers**: [e.g., push to main, pull request merge, scheduled]
- **Deployment Targets**: [e.g., staging, production, specific cloud regions]

### Monitoring and Alerting
- **Tools**: [e.g., Prometheus, Grafana, Datadog, CloudWatch]
- **Key Metrics**: [e.g., CPU utilization, memory usage, request latency, error rates]
- **Alerting Channels**: [e.g., Slack, PagerDuty, email]
- **Log Management**: [e.g., ELK Stack, Splunk, Loki]

### Deployment Strategies
- **Methods**: [e.g., blue/green, canary, rolling updates, all-at-once]
- **Automation**: [e.g., Terraform, CloudFormation, Ansible]
- **Rollback Procedures**: [e.g., automated rollback, manual intervention]

## Common Pitfalls

### ❌ Undocumented Runbooks
**Problem**: Critical operational procedures are not documented or are outdated.
**Why It Fails**: Leads to delayed incident response, inconsistent operations, and reliance on 'heroics'.
**Better Approach**: Maintain living runbooks for common incidents and deployment procedures.

### ❌ Alert Fatigue
**Problem**: Too many alerts that are not actionable or indicate non-critical issues.
**Why It Fails**: Leads to ignored alerts and missed critical incidents.
**Better Approach**: Focus on actionable alerts; use alert correlation and suppression.

## Related Resources

### Related Skills
- **integration-mapping-discovery**: To understand the interconnectedness of operational components.
- **universal-technology-discovery**: To identify the underlying infrastructure and operational tools.

### Related Agents
- **devops-specialist**: For designing and implementing operational best practices.

### External Resources
- [Site Reliability Engineering (SRE) Principles](https://sre.google/sre-book/table-of-contents/)
- [The Twelve-Factor App](https://12factor.net/)
