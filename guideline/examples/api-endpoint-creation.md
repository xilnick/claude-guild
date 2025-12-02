---
name: api-endpoint-creation
description: "Use when creating REST API endpoints, routes, or HTTP handlers in Express, Fastify, Koa, or NestJS. Apply for API design, request validation, error handling, and response formatting. Relevant for backend routes, controllers, and API services."
model: inherit
---

# API Endpoint Creation

## Pattern Description

**What**: Systematic approach to creating RESTful API endpoints with proper request handling, validation, error handling, and response formatting for Node.js backend frameworks.

**When**: Use this pattern when adding new API routes, creating REST endpoints, implementing HTTP request handlers, or designing API interfaces.

**Context**: Designed for Express.js, Fastify, Koa, and similar Node.js frameworks with TypeScript support, focusing on maintainability and scalability.

## RESTful API Design Principles

### 1. Resource-Based Design
**Focus**: Design endpoints around resources and their relationships.

**RESTful Patterns**:
- **GET /resources**: List all resources
- **GET /resources/:id**: Get specific resource
- **POST /resources**: Create new resource
- **PUT /resources/:id**: Update entire resource
- **PATCH /resources/:id**: Partial resource update
- **DELETE /resources/:id**: Delete resource

### 2. HTTP Method Semantics
**Focus**: Use HTTP methods correctly according to their intended semantics.

**Method Guidelines**:
- **GET**: Safe operations, no side effects, cacheable
- **POST**: Create resources, non-idempotent
- **PUT**: Update resources, idempotent
- **PATCH**: Partial updates, idempotent
- **DELETE**: Remove resources, idempotent

## Request Validation Patterns

### 1. Input Validation
**Purpose**: Validate incoming request data before processing.

**Validation Libraries**:
- **Joi**: Schema validation and description language
- **Zod**: TypeScript-first schema validation
- **class-validator**: Decorator-based validation for classes
- **express-validator**: Express middleware validation

### 2. Parameter Validation
**Purpose**: Validate URL parameters and query strings.

## Error Handling Patterns

### 1. Centralized Error Handling
**Purpose**: Handle errors consistently across all API endpoints.

### 2. Service Layer Error Handling
**Purpose**: Handle business logic errors appropriately.

## Response Formatting Patterns

### 1. Consistent Response Structure
**Purpose**: Standardize API response format for better client experience.

### 2. Pagination Support
**Purpose**: Implement consistent pagination for list endpoints.

## Security Patterns

### 1. Input Sanitization
**Purpose**: Prevent injection attacks and ensure data integrity.

### 2. Rate Limiting
**Purpose**: Prevent abuse and protect API resources.

## Common Pitfalls

### ❌ Inconsistent Error Responses
**Problem**: Different endpoints return errors in different formats.
**Why It Fails**: Makes error handling difficult for API consumers.
**Better Approach**: Use consistent error response structure across all endpoints.

### ❌ Missing Input Validation
**Problem**: Trusting client input without proper validation.
**Why It Fails**: Leads to security vulnerabilities and data integrity issues.
**Better Approach**: Always validate and sanitize input data before processing.

### ❌ Improper HTTP Status Codes
**Problem**: Using wrong HTTP status codes for different scenarios.
**Why It Fails**: Confuses API clients and violates REST principles.
**Better Approach**: Use appropriate HTTP status codes (200, 201, 400, 404, 500, etc.).

### ❌ No Pagination for Large Lists
**Problem**: Returning all items in a single response.
**Why It Fails**: Causes performance issues and timeouts.
**Better Approach**: Implement pagination for all list endpoints.

## Related Resources

### Related Skills
- **working-with-express**: For Express-specific patterns.
- **creating-tests**: For testing API endpoints.

### Related Agents
- **backend-specialist**: For API architecture and implementation.

### External Resources
- [REST API Best Practices](https://restfulapi.net/)
- [Express.js Documentation](https://expressjs.com/)
