# Conceptual

## key-value databases are useful for

- Websites storing data of user session: session identifier as the key- and all the infos as a value

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
{
    advertising: ["cola", "pepsi", "water"]
}]
```
