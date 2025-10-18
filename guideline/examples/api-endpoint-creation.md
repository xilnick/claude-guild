---
# Claude Code Native Fields (REQUIRED)
name: api-endpoint-creation
description: "Use when creating REST API endpoints, routes, or HTTP handlers in Express, Fastify, Koa, or NestJS. Apply for API design, request validation, error handling, and response formatting. Relevant for backend routes, controllers, and API services."

# Claude Code Optional Fields
model: inherit
tools: Read, Write, Edit, Grep, Glob, Bash

# Guild Enhancement Fields (Optional)
category: backend-integration
applicability:
  file_patterns: ["**/api/**/*.ts", "**/routes/**/*.js", "**/controllers/**"]
  technologies: ["express", "fastify", "koa", "nest"]
  task_types: ["api-endpoint", "route-handler", "controller-creation"]
related_skills: ["error-handling", "validation", "authentication"]
related_agents: ["backend-specialist", "api-architect"]
---

## Pattern Description

**What**: A systematic approach to creating RESTful API endpoints with proper request handling, validation, error handling, and response formatting.

**When**: Use this pattern when adding new API routes, creating REST endpoints, or implementing HTTP request handlers in backend services.

**Context**: Most relevant in Express-based or Fastify-based Node.js applications, but principles apply to any HTTP framework.

## Project-Specific Conventions

### Endpoint Structure
This project follows a layered architecture:
- **Routes** (`/api/routes/`): Define HTTP routes and map to controllers
- **Controllers** (`/api/controllers/`): Handle request/response, call services
- **Services** (`/api/services/`): Business logic and data operations
- **Models** (`/api/models/`): Data schemas and validation

### Naming Conventions
- **Route files**: `{resource}.routes.js` (e.g., `users.routes.js`)
- **Controller files**: `{resource}.controller.js`
- **Service files**: `{resource}.service.js`
- **HTTP methods**: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

### Standard Response Format
```javascript
// Success responses
{
  success: true,
  data: { ... },
  message: "Optional success message"
}

// Error responses
{
  success: false,
  error: {
    code: "ERROR_CODE",
    message: "Human-readable message",
    details: { ... }
  }
}
```

### Validation Approach
- Use Joi or Zod for request validation
- Validate in middleware before controller execution
- Return 400 Bad Request for validation failures
- Include detailed validation errors in response

### Error Handling
- Use centralized error handling middleware
- Throw custom error classes (BadRequestError, NotFoundError, etc.)
- Log errors with appropriate severity
- Never expose internal errors to clients

### Authentication & Authorization
- Apply `authenticate` middleware to protected routes
- Use `authorize(['roles'])` for role-based access control
- Include user context in `req.user`
- Return 401 Unauthorized or 403 Forbidden as appropriate

## Common Pitfalls

### ❌ Putting Business Logic in Controllers
**Problem**: Controllers contain complex business logic, database queries, or calculations.
**Why It Fails**: Violates separation of concerns, makes testing difficult, reduces reusability.
**Better Approach**: Move business logic to service layer, keep controllers thin.

```javascript
// ❌ Bad - Logic in controller
async createUser(req, res) {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) throw new Error('User exists');
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({ ...req.body, password: hashedPassword });
  res.json({ success: true, data: user });
}

// ✅ Good - Delegate to service
async createUser(req, res) {
  const user = await userService.createUser(req.body);
  res.json({ success: true, data: user });
}
```

### ❌ Missing Input Validation
**Problem**: Endpoints accept and process unvalidated user input.
**Why It Fails**: Security vulnerabilities, unexpected errors, data corruption.
**Better Approach**: Validate all inputs with schema validation middleware.

```javascript
// ❌ Bad - No validation
router.post('/users', userController.createUser);

// ✅ Good - Validation middleware
router.post('/users', validate(userSchema), userController.createUser);
```

### ❌ Inconsistent Error Handling
**Problem**: Some endpoints throw errors, others return error objects, no standard format.
**Why It Fails**: Confusing for API consumers, difficult to handle errors consistently.
**Better Approach**: Use centralized error handling with consistent response format.

```javascript
// ❌ Bad - Inconsistent error handling
async getUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

// ✅ Good - Throw typed errors, let middleware handle
async getUser(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) throw new NotFoundError('User not found');
  res.json({ success: true, data: user });
}
```

### ❌ Not Handling Async Errors
**Problem**: Async errors in route handlers cause unhandled promise rejections.
**Why It Fails**: Server crashes, unhandled exceptions, poor error reporting.
**Better Approach**: Use async wrapper or framework support for async routes.

```javascript
// ❌ Bad - Unhandled async errors
router.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id); // If this throws, unhandled!
  res.json(user);
});

// ✅ Good - Wrapped async handler
router.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json({ success: true, data: user });
}));
```

## Related Resources

### Related Skills
- **error-handling**: Centralized error handling patterns for this project
- **validation**: Input validation approaches and schema definitions
- **authentication**: JWT authentication and authorization patterns
- **database-operations**: Data access patterns and ORM usage

### Related Agents
- **backend-specialist**: For complex API design and architecture decisions
- **security-specialist**: For authentication, authorization, and security reviews
- **database-specialist**: For complex queries and data modeling

### External Resources
- Project API documentation: `/docs/api.md`
- Error handling guide: `/docs/error-handling.md`
- Express best practices: https://expressjs.com/en/advanced/best-practice-performance.html

## Implementation Checklist

When creating a new API endpoint:
- [ ] Define route in appropriate routes file
- [ ] Create controller method with thin logic
- [ ] Implement service layer with business logic
- [ ] Add request validation schema
- [ ] Apply authentication/authorization middleware if needed
- [ ] Handle errors using project error classes
- [ ] Return responses in standard format
- [ ] Write unit tests for service layer
- [ ] Write integration tests for endpoint
- [ ] Update API documentation

## Notes

- This pattern assumes Express.js or similar framework
- Adapt middleware and error handling to your specific framework
- Consider rate limiting for public endpoints
- Add request logging for debugging and monitoring
- Use TypeScript types/interfaces for better type safety
- Consider OpenAPI/Swagger documentation generation
