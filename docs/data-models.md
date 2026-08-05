# Data Models

Defined in `api/prisma/schema.prisma`, backed by PostgreSQL.

## User

| Field     | Type     | Notes                    |
|-----------|----------|--------------------------|
| id        | String   | UUID, primary key        |
| email     | String   | Unique                   |
| username  | String   | Unique                   |
| password  | String   | bcrypt hashed            |
| avatar    | String?  | Optional profile picture URL |
| createdAt | DateTime | Auto-set on creation     |

Relations: has many `Post`, has many `SavedPost`, belongs to many `Chat`

---

## Post

| Field     | Type     | Notes                                         |
|-----------|----------|-----------------------------------------------|
| id        | String   | UUID, primary key                             |
| title     | String   |                                               |
| price     | Int      |                                               |
| images    | String[] | Array of image URLs                           |
| address   | String   |                                               |
| city      | String   |                                               |
| bedroom   | Int      |                                               |
| bathroom  | Int      |                                               |
| latitude  | String   |                                               |
| longitude | String   |                                               |
| type      | Enum     | `buy` or `rent`                               |
| property  | Enum     | `apartment`, `house`, `condo`, `land`         |
| createdAt | DateTime | Auto-set on creation                          |
| userId    | String   | FK → User                                     |

Relations: has one `PostDetail`, has many `SavedPost`

---

## PostDetail

Extended details attached to a Post (one-to-one).

| Field      | Type    | Notes                             |
|------------|---------|-----------------------------------|
| id         | String  | UUID                              |
| desc       | String  | Rich text description             |
| utilities  | String? | Who pays utilities                |
| pet        | String? | Pet policy                        |
| income     | String? | Income requirement                |
| size       | Int?    | Size in sqft                      |
| school     | Int?    | Distance to nearest school (m)    |
| bus        | Int?    | Distance to nearest bus stop (m)  |
| restaurant | Int?    | Distance to nearest restaurant (m)|
| postId     | String  | FK → Post (unique)                |

---

## SavedPost

Junction table — a user bookmarks a post.

| Field     | Type     | Notes              |
|-----------|----------|--------------------|
| id        | String   | UUID               |
| userId    | String   | FK → User (unique) |
| postId    | String   | FK → Post (unique) |
| createdAt | DateTime | Auto-set           |

Unique constraint on `(userId, postId)`.

---

## Chat

| Field       | Type     | Notes                              |
|-------------|----------|------------------------------------|
| id          | String   | UUID                               |
| createdAt   | DateTime | Auto-set                           |
| seenBy      | String[] | Array of userIds who have read it  |
| lastMessage | String?  | Preview of the last message        |

Relations: many-to-many with `User`, has many `Message`

---

## Message

| Field     | Type     | Notes                |
|-----------|----------|----------------------|
| id        | String   | UUID                 |
| text      | String   |                      |
| userId    | String   | Sender's user ID     |
| chatId    | String   | FK → Chat            |
| createdAt | DateTime | Auto-set             |
