# Enhanced Technology Detection

## Deep Code Analysis System

### Technology Detection Patterns

```yaml
detection_patterns:
  # Frontend Technologies
  react:
    imports: ['react', 'react-dom', '@testing-library/react']
    files: ['*.jsx', '*.tsx']
    dependencies: ['react', 'react-dom']
    patterns:
      - 'import React'
      - 'from "react"'
      - 'useState'
      - 'useEffect'
      - 'Component'
    confidence_boost:
      - next.config.js: 0.3
      - .babelrc with react preset: 0.2
      
  vue:
    imports: ['vue', '@vue']
    files: ['*.vue']
    dependencies: ['vue', '@vue/cli']
    patterns:
      - '<template>'
      - 'new Vue'
      - 'createApp'
      - 'export default {'
    confidence_boost:
      - vue.config.js: 0.3
      - nuxt.config.js: 0.2
      
  angular:
    imports: ['@angular/core']
    files: ['*.component.ts']
    dependencies: ['@angular/core', '@angular/cli']
    patterns:
      - '@Component'
      - '@Injectable'
      - '@NgModule'
      - 'import { Component }'
    confidence_boost:
      - angular.json: 0.5
      - ng-package.json: 0.2
      
  # Backend Technologies
  express:
    imports: ['express']
    files: ['server.js', 'app.js', 'index.js']
    dependencies: ['express']
    patterns:
      - 'app.use('
      - 'app.get('
      - 'app.post('
      - 'express.Router()'
      - 'res.send('
    confidence_boost:
      - middleware usage: 0.2
      - routes directory: 0.3
      
  fastapi:
    imports: ['fastapi', 'pydantic']
    files: ['*.py']
    dependencies: ['fastapi', 'uvicorn']
    patterns:
      - 'from fastapi import'
      - '@app.get'
      - '@app.post'
      - 'FastAPI()'
      - 'BaseModel'
    confidence_boost:
      - requirements.txt with fastapi: 0.3
      - pyproject.toml: 0.2
      
  django:
    imports: ['django']
    files: ['manage.py', 'settings.py', 'urls.py']
    dependencies: ['django']
    patterns:
      - 'from django.'
      - 'django.contrib'
      - 'urlpatterns'
      - 'INSTALLED_APPS'
    confidence_boost:
      - manage.py: 0.5
      - wsgi.py: 0.2
      
  # Database Technologies
  postgresql:
    imports: ['pg', 'postgres', 'psycopg2']
    files: ['*.sql', 'migrations/*.sql']
    dependencies: ['pg', 'postgres', 'psycopg2']
    patterns:
      - 'CREATE TABLE'
      - 'PostgreSQL'
      - 'psql'
      - 'pg_'
    confidence_boost:
      - database.yml with postgres: 0.3
      - docker-compose.yml with postgres: 0.2
      
  mongodb:
    imports: ['mongodb', 'mongoose']
    files: ['*.js', '*.ts']
    dependencies: ['mongodb', 'mongoose']
    patterns:
      - 'new MongoClient'
      - 'mongoose.connect'
      - 'mongoose.model'
      - 'collection.'
    confidence_boost:
      - .env with MONGO: 0.2
      - docker-compose.yml with mongo: 0.2
      
  # Testing Frameworks
  jest:
    imports: ['jest', '@jest']
    files: ['*.test.js', '*.spec.js', 'jest.config.js']
    dependencies: ['jest']
    patterns:
      - 'describe('
      - 'it('
      - 'expect('
      - 'test('
      - 'beforeEach'
    confidence_boost:
      - jest.config.js: 0.5
      - package.json with jest: 0.3
      
  cypress:
    imports: ['cypress']
    files: ['*.cy.js', 'cypress.json']
    dependencies: ['cypress']
    patterns:
      - 'cy.'
      - 'describe('
      - 'it('
      - 'beforeEach('
    confidence_boost:
      - cypress.json: 0.5
      - cypress directory: 0.4
```

### Convention Detection

```yaml
convention_patterns:
  # Code Style
  prettier:
    files: ['.prettierrc', '.prettierrc.json', 'prettier.config.js']
    confidence: 0.9
    
  eslint:
    files: ['.eslintrc', '.eslintrc.json', '.eslintrc.js']
    confidence: 0.9
    
  # Project Structure
  mvc:
    directories:
      - controllers/
      - models/
      - views/
    confidence: 0.8
    
  microservices:
    indicators:
      - services/ directory
      - multiple package.json
      - docker-compose.yml
      - api-gateway/
    confidence: 0.7
    
  monorepo:
    indicators:
      - lerna.json
      - packages/ directory
      - workspaces in package.json
      - nx.json
    confidence: 0.9
```

### Framework Version Detection

```yaml
version_detection:
  react:
    18.x:
      patterns: ['createRoot', 'hydrateRoot', 'useId', 'useSyncExternalStore']
      dependencies: ['"react": "^18', '"react": "~18']
    17.x:
      patterns: ['ReactDOM.render', 'useEffect with cleanup']
      dependencies: ['"react": "^17', '"react": "~17']
    16.x:
      patterns: ['Hooks', 'Suspense', 'lazy']
      dependencies: ['"react": "^16.8', '"react": "~16']
      
  node:
    check_files:
      - .nvmrc
      - .node-version
      - package.json engines field
    patterns:
      - engines.node in package.json
      - FROM node: in Dockerfile
```

### Confidence Scoring

```yaml
confidence_calculation:
  base_score:
    dependency_found: 0.4
    import_found: 0.3
    pattern_found: 0.2
    file_extension_match: 0.1
    
  multipliers:
    multiple_indicators: 1.5
    config_file_present: 1.3
    extensive_usage: 1.4
    
  thresholds:
    high_confidence: 0.8
    medium_confidence: 0.5
    low_confidence: 0.3
```

## Enhanced Detection Process

```yaml
process: enhanced-technology-detection
  description: Deep analysis of project technology stack
  inputs: [project_root, existing_detection]
  steps:
    - scan_dependencies:
        action: Parse package.json, requirements.txt, go.mod, etc.
        output: dependency_list
        
    - analyze_imports:
        action: Scan source files for import statements
        output: import_patterns
        
    - detect_file_patterns:
        action: Analyze file extensions and naming patterns
        output: file_pattern_matches
        
    - search_code_patterns:
        action: Search for framework-specific code patterns
        output: code_pattern_matches
        
    - check_config_files:
        action: Look for framework configuration files
        output: config_indicators
        
    - calculate_confidence:
        action: Score each technology based on evidence
        output: technology_scores
        
    - detect_versions:
        action: Identify specific framework versions
        output: version_info
        
    - detect_conventions:
        action: Identify project conventions and structure
        output: convention_patterns
        
  outputs: 
    - detected_technologies
    - confidence_scores
    - version_information
    - project_conventions
    - recommended_agents
```

## Usage Integration

### In Setup Process

```yaml
setup_enhancement:
  1. Run basic detection (package.json)
  2. Run enhanced detection (deep analysis)
  3. Merge and validate results
  4. Present to user for confirmation
  5. Create specialized agents with confidence scores
```

### Confidence-Based Agent Creation

```yaml
agent_creation_rules:
  high_confidence (> 0.8):
    - Create specialized agent automatically
    - Apply full context injection
    - Enable all capabilities
    
  medium_confidence (0.5 - 0.8):
    - Create agent with confirmation
    - Apply standard context
    - Enable core capabilities
    
  low_confidence (< 0.5):
    - Suggest agent creation
    - Minimal context injection
    - User approval required
```