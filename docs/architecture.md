# Architecture

## Component Overview

```
Browser (React + Vite)
       │  REST (axios)
       ▼
Express API  ──── Prisma ORM ──── PostgreSQL
       │
  JWT cookies (auth)
```

## Components

### estate-ui (Frontend)
- React 18 with React Router v6 for client-side routing
- Zustand for global auth state
- Leaflet / React-Leaflet for interactive property maps
- Socket.IO client for real-time chat
- SCSS for styling

### estate-api (Backend)
- Express.js REST API
- JWT authentication via `jsonwebtoken` and `cookie-parser`
- Passwords hashed with `bcrypt`
- Prisma ORM for type-safe database access
- PostgreSQL as the database

## Request Flow

1. User visits the React app
2. On login, the API sets an HTTP-only JWT cookie
3. Subsequent requests include the cookie automatically
4. `verifyToken` middleware on protected routes validates the JWT
5. Controllers query PostgreSQL through Prisma and return JSON
