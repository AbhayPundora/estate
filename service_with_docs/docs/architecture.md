# Architecture

## Request Flow

```
React Client (axios)
      │
      │  HTTP + JWT cookie
      ▼
Express Router
      │
verifyToken middleware (protected routes)
      │
Controller
      │
Prisma ORM
      │
PostgreSQL
```

## Folder Structure

```
api/
├── app.js              # Express app entry point, CORS, cookie-parser setup
├── routes/             # Route definitions
│   ├── auth.route.js
│   ├── post.route.js
│   ├── user.route.js
│   ├── chat.route.js
│   └── message.route.js
├── controllers/        # Business logic per resource
│   ├── auth.controller.js
│   ├── post.controller.js
│   ├── user.controller.js
│   ├── chat.controller.js
│   └── message.controller.js
├── middleware/
│   └── verifyToken.js  # JWT validation middleware
├── lib/
│   └── prisma.js       # Prisma client singleton
└── prisma/
    └── schema.prisma   # Database schema
```

## Authentication

- On login, a signed JWT is placed in an HTTP-only cookie named `token`
- `verifyToken` middleware reads the cookie, verifies the JWT, and attaches `userId` to the request
- Protected routes require this middleware

## CORS

The API is configured to accept requests from `http://localhost:5173` (the Vite dev server) with credentials enabled.
