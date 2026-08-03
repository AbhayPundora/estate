# Data Models

Defined via Prisma schema, backed by PostgreSQL.

## User

| Field      | Type     | Notes                  |
|------------|----------|------------------------|
| id         | String   | UUID, primary key      |
| email      | String   | Unique                 |
| username   | String   | Unique                 |
| password   | String   | bcrypt hashed          |
| avatar     | String?  | Optional URL           |
| createdAt  | DateTime | Auto                   |

Relations: `posts`, `savedPosts`, `chats`

## Post

| Field     | Type     | Notes                         |
|-----------|----------|-------------------------------|
| id        | String   | UUID                          |
| title     | String   |                               |
| price     | Int      |                               |
| images    | String[] | Array of image URLs           |
| address   | String   |                               |
| city      | String   |                               |
| bedroom   | Int      |                               |
| bathroom  | Int      |                               |
| latitude  | String   |                               |
| longitude | String   |                               |
| type      | Enum     | `buy` or `rent`               |
| property  | Enum     | `apartment`, `house`, `condo`, `land` |
| createdAt | DateTime | Auto                          |
| userId    | String   | FK → User                     |

## PostDetail

Extended info attached to a Post (1-to-1).

| Field      | Type    | Notes              |
|------------|---------|--------------------|
| desc       | String  | Rich text          |
| utilities  | String? |                    |
| pet        | String? | Pet policy         |
| income     | String? | Income requirement |
| size       | Int?    | sqft               |
| school     | Int?    | Distance in meters |
| bus        | Int?    | Distance in meters |
| restaurant | Int?    | Distance in meters |

## SavedPost

Junction table linking Users and Posts they bookmarked.

| Field     | Type     |
|-----------|----------|
| id        | String   |
| userId    | String   |
| postId    | String   |
| createdAt | DateTime |

## Chat

| Field       | Type     | Notes                  |
|-------------|----------|------------------------|
| id          | String   | UUID                   |
| createdAt   | DateTime |                        |
| seenBy      | String[] | User IDs who have read |
| lastMessage | String?  | Preview                |

Relations: `users` (many-to-many), `messages`

## Message

| Field     | Type     |
|-----------|----------|
| id        | String   |
| text      | String   |
| userId    | String   |
| chatId    | String   |
| createdAt | DateTime |
