# Conceptual no-sql

## key-value databases are useful for

- Websites storing data of user session: session identifier as the key- and all the infos as a value
- user preferences
- shopping carts

```javascript
[{
  sessionId: ["number", "infos"]
  },
  {
//    user profiles and user preferences
    userID: [userPreferences: "dark mode", "language"]},
}
{
    // shopping cart infos
    shopingCartID: {[whats", "in", "it"], info: "string", shoppingCartValue: 100]}
},
// advertisments while scrolling along the website
{
    advertising: ["cola", "pepsi", "water"]
}]
```

Save informations
SET /user/497/preferences/ {"language": "en_US", "color":"green", "timezone": "GTM-4"}
Retrieve infos
GET /user/497/preferences/

key-value databases are not sutable for:

- searching data by value, they don't do it. SO if the users would be stored in single properties, we couldn't have the possibility to search users from specific city
- related data.

REDIS - key-value databases. Redis also offers by default asynchronous replication; that is, the data is first copied to the primary storage and then copied to the replica. Performs Atomic operations- eather to complete fully or not at all. Used for:

- caching -query results, objects frequently used like images,
- session storage - user profiles
- chatting, messanging, real time comments.

Clouds for redis:

- Amazon services- Elasticache
- Microsoft- Azure Cache

Editoo - personal business goals , migration from relational to redis- reduction in downtime, higher performance.
