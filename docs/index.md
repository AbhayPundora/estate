# Estate REST API

Express.js backend service for the Full Stack Estate platform.

## Responsibilities

- User authentication with JWT cookies and bcrypt password hashing
- CRUD operations for property listings (posts)
- Saving and unsaving posts to a user's profile
- Real-time chat between users via Socket.IO
- Notification count for unread messages

## Tech Stack

| Layer       | Technology                  |
|-------------|-----------------------------|
| Runtime     | Node.js (ESM)               |
| Framework   | Express.js 4                |
| ORM         | Prisma 5                    |
| Database    | PostgreSQL                  |
| Auth        | JWT + HTTP-only cookies     |
| Hashing     | bcrypt                      |

## Running Locally

```bash
cd api
npm install
npx prisma generate
npm start
```

The API runs on `http://localhost:8800` by default.

## Environment Variables

| Variable       | Description                        |
|----------------|------------------------------------|
| `DATABASE_URL` | PostgreSQL connection string       |
| `JWT_SECRET_KEY` | Secret used to sign JWT tokens   |
