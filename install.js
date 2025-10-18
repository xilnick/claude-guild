#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { select, intro, outro, isCancel, cancel } = require('@clack/prompts');

// Main installation function
async function install() {
  const args = process.argv.slice(2);

  // Simple argument parsing
  const options = {
    interactive: !args.includes('--no-interaction'),
    testMode: args.includes('--test-mode'),
    targetDir: args.includes('--path') ?
      path.resolve(args[args.indexOf('--path') + 1]) :
      require('os').homedir()
  };

  // Test mode - quick validation
  if (options.testMode) {
    console.log('🧪 Claude Guild - Test Mode');
    const valid = await fs.pathExists('guideline/core') &&
                  await fs.pathExists('guideline/templates');
    console.log(valid ? '✅ All validation checks passed' : '❌ Test failed');
    process.exit(valid ? 0 : 1);
  }

  // Interactive mode - ask where to install
  if (options.interactive) {
    intro('🏛️ Claude Guild Installation');

    const scope = await select({
      message: 'Where would you like to install?',
      options: [
        { value: 'home', label: '🏠 Home Directory (Recommended)' },
        { value: 'project', label: '📂 Current Project' },
      ]
    });

    if (isCancel(scope)) {
      cancel('Installation cancelled');
      process.exit(0);
    }

    options.targetDir = scope === 'home' ? require('os').homedir() : process.cwd();
  }

  // Set up paths
  const claudeDir = path.join(options.targetDir, '.claude');
  const commandsDir = path.join(claudeDir, 'commands');
  const guildDir = path.join(commandsDir, 'guild');

  console.log(`\n📍 Installing to: ${options.targetDir}`);

  try {
    // Clean existing installation
    if (await fs.pathExists(guildDir)) {
      console.log('🧹 Cleaning existing installation...');
      await fs.remove(guildDir);
    }

    // Remove old guild.md if exists
    const oldGuildPath = path.join(commandsDir, 'guild.md');
    if (await fs.pathExists(oldGuildPath)) {
      await fs.remove(oldGuildPath);
    }

    // Ensure directories exist
    await fs.ensureDir(guildDir);

    console.log('🏗️ Installing Guild commands...');

    // Load intelligence module
    const sharedIntelligence = await loadIntelligenceModule('shared-intelligence.md');

    // Generate agent inventory for workflow command
    const agentInventory = await generateAgentInventory(options.targetDir);

    // Generate skill inventory for workflow command
    const skillInventory = await generateSkillInventory(options.targetDir);

    // Generate and copy commands with intelligence embedding
    await copyAndEmbedCommand('workflow', guildDir, {
      sharedIntelligence,
      agentInventory,
      skillInventory
    });

    await copyAndEmbedCommand('setup', guildDir, {
      sharedIntelligence
    });

    // Create guild.md symlink to workflow
    const symlinkPath = path.join(commandsDir, 'guild.md');
    if (await fs.pathExists(symlinkPath)) {
      await fs.remove(symlinkPath);
    }
    await fs.symlink(path.join('guild', 'workflow.md'), symlinkPath);

    // Create Claude Code Skills awareness bridge
    await createAwarenessSkill(options.targetDir);

    outro(`✅ Guild commands installed successfully!

📂 Location: ${commandsDir}
🎯 Commands Available:
  • /guild "task" - Main workflow command
  • /guild:setup - Setup and project analysis command

💡 Next Steps:
  1. Run: /guild:setup to analyze your project
  2. Then use: /guild "your task" to execute work`);

  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    process.exit(1);
  }
}

// Load intelligence module by filename
async function loadIntelligenceModule(filename) {
  const modulePath = path.join(__dirname, 'guideline', 'core', filename);

  if (await fs.pathExists(modulePath)) {
    const content = await fs.readFile(modulePath, 'utf-8');
    // Remove the title line and return the content
    return content.replace(/^# .*\n+/m, '').trim();
  }

  throw new Error(`${filename} not found - required for Guild system`);
}

// Simple agent inventory generation
async function generateAgentInventory(targetDir) {
  const agentsGuildPath = path.join(targetDir, '.claude', 'agents', 'guild');

  if (!await fs.pathExists(agentsGuildPath)) {
    return {
      totalAgents: 0,
      agentsByCategory: {},
      scanTimestamp: new Date().toISOString()
    };
  }

  console.log('🔍 Scanning existing agents...');
  try {
    const { glob } = require('glob');
    const agentFiles = await glob('**/*.md', { cwd: agentsGuildPath });

    const inventory = {
      totalAgents: agentFiles.length,
      agentsByCategory: {},
      scanTimestamp: new Date().toISOString()
    };

    // Group agents by directory (category)
    for (const agentFile of agentFiles) {
      const category = path.dirname(agentFile);
      if (!inventory.agentsByCategory[category]) {
        inventory.agentsByCategory[category] = [];
      }
      inventory.agentsByCategory[category].push(path.basename(agentFile, '.md'));
    }

    console.log(`✅ Found ${inventory.totalAgents} agents`);
    return inventory;
  } catch (error) {
    console.log('⚠️  Could not scan agents, using empty inventory');
    return { totalAgents: 0, agentsByCategory: {}, scanTimestamp: new Date().toISOString() };
  }
}

/**
 * Format agent inventory for embedding in command templates
 */
function formatAgentInventory(inventory) {
  if (!inventory || inventory.totalAgents === 0) {
    return 'No existing agents found. Create ephemeral specialists via Task tool as needed.';
  }

  let formatted = `### Available Guild Agents (${inventory.totalAgents} total)\n\n`;
  formatted += `*Last scanned: ${inventory.scanTimestamp}*\n\n`;

  for (const [category, agents] of Object.entries(inventory.agentsByCategory)) {
    if (agents.length > 0) {
      formatted += `**${category}**: ${agents.join(', ')}\n`;
    }
  }

  formatted += '\n';
  return formatted;
}

// Simple skill inventory generation (Official SKILL.md format)
async function generateSkillInventory(targetDir) {
  const skillsGuildPath = path.join(targetDir, '.claude', 'skills', 'guild');

  if (!await fs.pathExists(skillsGuildPath)) {
    return {
      totalSkills: 0,
      skillsByCategory: {},
      scanTimestamp: new Date().toISOString()
    };
  }

  console.log('🔍 Scanning existing skills...');
  try {
    const { glob } = require('glob');
    // Look for SKILL.md files in category directories (official format)
    const skillFiles = await glob('*/SKILL.md', { cwd: skillsGuildPath });

    const inventory = {
      totalSkills: skillFiles.length,
      skillsByCategory: {},
      scanTimestamp: new Date().toISOString()
    };

    // Group skills by directory (category)
    for (const skillFile of skillFiles) {
      const category = path.dirname(skillFile);
      if (!inventory.skillsByCategory[category]) {
        inventory.skillsByCategory[category] = [];
      }

      // Read SKILL.md to extract YAML frontmatter metadata
      const skillPath = path.join(skillsGuildPath, skillFile);
      try {
        const content = await fs.readFile(skillPath, 'utf-8');

        // Parse YAML frontmatter (official Claude Code format)
        const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
        let name = category;
        let description = null;

        if (frontmatterMatch) {
          const frontmatter = frontmatterMatch[1];
          const nameMatch = frontmatter.match(/^name:\s*(.+)$/m);
          const descMatch = frontmatter.match(/^description:\s*["'](.+?)["']$/m);

          if (nameMatch) name = nameMatch[1].trim();
          if (descMatch) description = descMatch[1].trim();
        }

        const skillInfo = {
          name,
          category,
          description,
          path: `${category}/SKILL.md`
        };

        inventory.skillsByCategory[category].push(skillInfo);
      } catch (readError) {
        // If we can't read the file, just add the category name
        inventory.skillsByCategory[category].push({
          name: category,
          category,
          description: null,
          path: skillFile
        });
      }
    }

    console.log(`✅ Found ${inventory.totalSkills} skills`);
    return inventory;
  } catch (error) {
    console.log('⚠️  Could not scan skills, using empty inventory');
    return { totalSkills: 0, skillsByCategory: {}, scanTimestamp: new Date().toISOString() };
  }
}

/**
 * Format skill inventory for embedding in command templates
 */
function formatSkillInventory(inventory) {
  if (!inventory || inventory.totalSkills === 0) {
    return 'No existing skills found. Skills can be created as needed for reusable patterns.';
  }

  let formatted = `### Available Guild Skills (${inventory.totalSkills} total)\n\n`;
  formatted += `*Last scanned: ${inventory.scanTimestamp}*\n\n`;

  for (const [category, skills] of Object.entries(inventory.skillsByCategory)) {
    if (skills.length > 0) {
      const categoryName = category === '.' ? 'General' : category;
      formatted += `**${categoryName}**:\n`;
      for (const skill of skills) {
        formatted += `  - **${skill.name}**`;
        if (skill.description) {
          formatted += `: ${skill.description}`;
        }
        formatted += '\n';
      }
      formatted += '\n';
    }
  }

  return formatted;
}

// Copy template and embed intelligence
async function copyAndEmbedCommand(commandType, outputDir, intelligenceModules) {
  const templatePath = path.join(__dirname, 'guideline', 'templates', `${commandType}-command.md`);
  let template = await fs.readFile(templatePath, 'utf8');

  // Replace shared intelligence placeholder
  template = template.replace('{SHARED_INTELLIGENCE}', intelligenceModules.sharedIntelligence);

  // Replace agent inventory placeholder (for workflow command)
  if (intelligenceModules.agentInventory) {
    const inventorySection = formatAgentInventory(intelligenceModules.agentInventory);
    template = template.replace('{AGENT_INVENTORY}', inventorySection);
  } else {
    // Remove placeholder if no inventory
    template = template.replace('{AGENT_INVENTORY}', 'No agent inventory available.');
  }

  // Replace skill inventory placeholder (for workflow command)
  if (intelligenceModules.skillInventory) {
    const skillSection = formatSkillInventory(intelligenceModules.skillInventory);
    template = template.replace('{SKILL_INVENTORY}', skillSection);
  } else {
    // Remove placeholder if no inventory
    template = template.replace('{SKILL_INVENTORY}', 'No skill inventory available.');
  }

  // Write the embedded command
  await fs.writeFile(path.join(outputDir, `${commandType}.md`), template);

  const inventories = [];
  if (intelligenceModules.agentInventory) inventories.push('agent inventory');
  if (intelligenceModules.skillInventory) inventories.push('skill inventory');
  const inventoryMsg = inventories.length > 0 ? inventories.join(' + ') : 'no inventory';

  console.log(`✅ ${commandType} command generated with ${inventoryMsg}`);
}

/**
 * Create Claude Code Skills awareness bridge
 * This allows Claude to autonomously discover Guild skills
 */
async function createAwarenessSkill(targetDir) {
  const skillsDir = path.join(targetDir, '.claude', 'skills');
  const guildPatternsDir = path.join(skillsDir, 'guild-patterns');

  // Ensure directories exist
  await fs.ensureDir(guildPatternsDir);

  const awarenessSkillContent = `---
name: guild-project-patterns
description: Apply project-specific conventions from .claude/skills/guild/. Use when working on features, refactoring, or following project standards. Guild skills follow official Claude Code SKILL.md format with progressive loading (metadata, instructions, documentation resources).
model: inherit
tools: Read, Bash
---

## Purpose

This project uses **Guild-managed skills** following the official Claude Code SKILL.md format with progressive loading architecture.

Guild skills contain:
- **Level 1 (Metadata)**: Always-loaded skill metadata in YAML frontmatter
- **Level 2 (Instructions)**: Main SKILL.md content with patterns and conventions
- **Level 3 (Resources)**: On-demand DOCS.md, REFERENCE.md, EXAMPLES.md files

## Skill Structure (Official Format)

Each skill is organized as:
\`\`\`
.claude/skills/guild/
├── [category]/
│   ├── SKILL.md          # Main skill (metadata + instructions)
│   ├── DOCS.md           # Library documentation (optional)
│   ├── REFERENCE.md      # API references (optional)
│   └── EXAMPLES.md       # Code examples (optional)
\`\`\`

## How to Use Guild Skills

### 1. Discover Available Skills

\`\`\`bash
# List skill categories
ls .claude/skills/guild/

# Example categories:
# - frontend-patterns/    (React, Vue, component patterns)
# - backend-integration/  (Express, API patterns)
# - testing-patterns/     (Jest, testing protocols)
# - library-specific/     (Framework-specific skills)
\`\`\`

### 2. Read Skills When Relevant

**For library/framework work:**
\`\`\`bash
# Example: Working with React
cat .claude/skills/guild/frontend-patterns/SKILL.md

# If skill references documentation:
cat .claude/skills/guild/frontend-patterns/DOCS.md
\`\`\`

**For pattern application:**
\`\`\`bash
# Example: API endpoint creation
cat .claude/skills/guild/backend-integration/SKILL.md
\`\`\`

### 3. Application Modes

**Direct Application** (simple tasks):
- Read SKILL.md for pattern knowledge
- Apply project conventions from skill content
- Reference DOCS.md for library documentation
- No delegation needed

**Agent Integration** (complex tasks):
- Guild agents reference relevant skills automatically
- Use \`/guild\` command for specialist coordination
- Agents apply skill patterns to their work

**Subagent Reference** (ad-hoc delegation):
\`\`\`javascript
Task({
  prompt: "Implement user profile component.
          Reference: .claude/skills/guild/frontend-patterns/SKILL.md
          Apply React conventions from that skill.",
  subagent_type: "general-purpose"
})
\`\`\`

## Skill Types

Guild creates two types of skills:

**1. Tech Stack Skills** (library/framework-specific):
- **Format**: "working-with-[library]" (gerund naming)
- **Examples**: working-with-react, working-with-express, working-with-prisma
- **Includes**: Library documentation (DOCS.md from Context7), project conventions
- **When to Use**: Working with specific libraries or frameworks

**2. Pattern Skills** (project conventions):
- **Format**: "processing-[pattern]", "testing-[component]"
- **Examples**: processing-api-requests, managing-component-state
- **Includes**: Project-specific patterns and best practices
- **When to Use**: Following project conventions and patterns

## Progressive Loading

Skills use official Claude Code progressive loading:

**Metadata (always loaded)**:
- YAML frontmatter with name, description, category
- Enables skill discovery without loading full content

**Instructions (load when relevant)**:
- Main SKILL.md content
- Pattern descriptions, conventions, anti-patterns
- Keep under 500 lines

**Resources (on-demand)**:
- DOCS.md: Library documentation (fetched from Context7)
- REFERENCE.md: Detailed API specs
- EXAMPLES.md: Code examples
- Load only when needed for detailed information

## Integration

**Skills work everywhere:**
- ✅ Claude Code discovers them autonomously (via metadata)
- ✅ Guild workflow presents them (\`/guild\` command)
- ✅ Agents reference them in prompts
- ✅ Subagents can reference them in task descriptions
- ✅ Official Claude Code SKILL.md format

## Creating New Skills

Use \`/guild:setup\` to:
- Analyze project and detect tech stack
- Create library-specific skills with documentation
- Document project patterns as skills
- Fetch library docs via Context7
- Organize skills by category

## When to Use \`/guild\` Command

**Use \`/guild\` for:**
- Complex multi-domain features
- Tasks needing specialist coordination
- Architectural changes
- Full verification workflow

**Direct skill application for:**
- Simple pattern application
- Library-specific guidance
- Quick convention checks
`;

  await fs.writeFile(
    path.join(guildPatternsDir, 'SKILL.md'),
    awarenessSkillContent
  );

  console.log('✅ Guild patterns awareness skill created');
}

// Run installation
if (require.main === module) {
  install().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = {
  install,
  generateAgentInventory,
  generateSkillInventory
};