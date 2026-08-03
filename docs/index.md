# Full Stack Estate

A full-stack real estate listing platform where users can browse, post, and save property listings (buy or rent), with real-time chat between users.

## Overview

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | React 18, Vite, Leaflet, Zustand    |
| Backend  | Node.js, Express, Socket.IO         |
| Database | PostgreSQL via Prisma ORM           |
| Auth     | JWT stored in HTTP-only cookies     |

## Features

- **Property listings** — search, filter by city/type/price/rooms, view on interactive map
- **Post management** — create, edit, delete your own listings with image uploads
- **Saved posts** — bookmark listings to your profile
- **Real-time chat** — message other users directly from a listing
- **Authentication** — register/login with bcrypt-hashed passwords and JWT cookies

## Project Structure

```
full-stack-estate/
├── api/          # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── lib/
│   └── prisma/
└── client/       # React frontend
    └── src/
        ├── components/
        ├── context/
        ├── lib/
        └── routes/
```
