# API Reference

Base URL: `http://localhost:8800`

All protected routes require a valid JWT cookie (set on login).

## Auth

| Method | Path                  | Auth | Description          |
|--------|-----------------------|------|----------------------|
| POST   | `/api/auth/register`  | No   | Register a new user  |
| POST   | `/api/auth/login`     | No   | Login, sets JWT cookie |
| POST   | `/api/auth/logout`    | No   | Clears JWT cookie    |

## Posts

| Method | Path             | Auth | Description                        |
|--------|------------------|------|------------------------------------|
| GET    | `/api/posts`     | No   | List posts (supports query filters) |
| GET    | `/api/posts/:id` | No   | Get a single post with details      |
| POST   | `/api/posts`     | Yes  | Create a new post                   |
| PUT    | `/api/posts/:id` | Yes  | Update your post                    |
| DELETE | `/api/posts/:id` | Yes  | Delete your post                    |

### Post Query Filters

`GET /api/posts?city=London&type=rent&property=apartment&bedroom=2&minPrice=500&maxPrice=2000`

## Users

| Method | Path                    | Auth | Description                       |
|--------|-------------------------|------|-----------------------------------|
| GET    | `/api/users/:id`        | Yes  | Get a user's profile              |
| PUT    | `/api/users/:id`        | Yes  | Update profile (username, avatar) |
| DELETE | `/api/users/:id`        | Yes  | Delete account                    |
| POST   | `/api/users/save`       | Yes  | Save or unsave a post             |
| GET    | `/api/users/profilePosts` | Yes | Get own posts + saved posts      |
| GET    | `/api/users/notification` | Yes | Get unread chat count            |

## Chats

| Method | Path            | Auth | Description                      |
|--------|-----------------|------|----------------------------------|
| GET    | `/api/chats`    | Yes  | List all chats for current user  |
| POST   | `/api/chats`    | Yes  | Create or get existing chat      |
| GET    | `/api/chats/:id`| Yes  | Get chat with all messages       |

## Messages

| Method | Path                   | Auth | Description               |
|--------|------------------------|------|---------------------------|
| POST   | `/api/messages/:chatId`| Yes  | Add a message to a chat   |
