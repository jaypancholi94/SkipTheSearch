# Authorization vs Authentication

When building modern applications, two security concepts often appear side-by-side: **Authentication** and **Authorization**. They might sound similar, but they play very different roles in keeping your systems secure.

Today, in this _Face-Off_ series ⚡, we’ll break down these two heavyweights, compare them side-by-side, and show you real-world examples so you can use them correctly — whether you’re building a login system, a multi-tenant SaaS app, or just curious about how websites protect your data.

## 🪄 The Basics

### What is Authentication?

**Authentication** is about **proving who you are**.

It answers the question: _Are you really who you say you are?_ 🤔

**Examples:**

- Entering your username and password to log in.
- Scanning your fingerprint to unlock your phone.
- Logging in with Google or Facebook.

> 🧙🏻‍♂️ _Think of authentication like showing your ID card to a security guard._

### What is Authorization?

**Authorization** is about **what you are allowed to do**.

It answers the question: _Now that we know who you are, what can you access?_ 🪪

**Examples:**

- Being able to view your own bank account but not someone else’s.
- Accessing the admin dashboard only if you are an admin.
- Downloading paid content only after purchasing it.

> 🧙🏻‍♀️ _Think of authorization like getting into a VIP lounge — only if your ticket says so._

## ⚔️ Authentication vs Authorization

| **Aspect**           | **Authentication**                                | **Authorization**                                             |
| -------------------- | ------------------------------------------------- | ------------------------------------------------------------- |
| **Purpose**          | Verify _who_ you are                              | Determine _what_ you can access                               |
| **Occurs When?**     | Before authorization                              | After successful authentication                               |
| **Data**             | User credentials (username, password, biometrics) | Access policies, user roles, permissions                      |
| **Visible to User?** | Yes (login screens)                               | Usually hidden (access restrictions)                          |
| **Example Failure**  | “Wrong password” error                            | “403 Forbidden” error                                         |
| **Tech Examples**    | OAuth2 login, SSO, Biometrics                     | Role-Based Access Control (RBAC), Access Control Lists (ACLs) |

## 💻 Real-World Example

Imagjine you’re using a project management tool like **Trello** or **Asana**:

1. **Authentication**: You log in with your email and password → _System confirms your identity._
2. **Authorization**: Based on your role (admin, editor, viewer), you:
   - Can create new boards (if admin),
   - Edit tasks (if editor),
   - Or only view tasks (if viewer).

If authentication fails → you can’t log in.

If authorization fails → you’re logged in but denied access to certain features.

## 🔥 Technical Deep Dive

### How Authentication Works (Under the Hood)

- You send your credentials to the server.
- The server verifies them against a **user database** (hashed passwords, security token).
- If valid, the server returns a **session token** (or a [[JWT]]) that says _“this user is authenticated”_.

#### Snippet: Basic Express.js Authentication Check

```JavaScript
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = findUserByUsername(username);

  if (user && verifyPassword(password, user.hashedPassword)) {
    const token = generateSessionToken(user.id);
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});
```

### How Authorization Works (Under the Hood)

- After authentication, the system checks your **role** or **permissions** before allowing access to resources.
- Authorization rules are often defined at the route, function, or database level.

#### Snippet: Basic Express.js Authorization Middleware

```JavaScript
function authorize(allowedRoles) {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (allowedRoles.includes(userRole)) {
      next();
    } else {
      res.status(403).json({ error: "Forbidden: Access denied" });
    }
  };
}

// Usage
app.get('/admin/dashboard', authenticateUser, authorize(['admin']), (req, res) => {
  res.send('Welcome to Admin Dashboard');
});
```

## **🧹 Common Mistakes to Avoid**

- **Mixing them up**: Authentication ≠ Authorization. They must be treated as separate steps!
- **Assuming authentication grants full access**: Just because someone logged in doesn’t mean they should do _everything_.
- **Skipping authorization checks on APIs**: APIs need strict authorization too, not just UI components.

## **🧠 Conclusion**

Authentication and Authorization are **two distinct but equally crucial** pillars of application security.

In simple terms:

- 🔐 **Authentication**: _Who are you?_
- 🎟️ **Authorization**: _What can you do?_

Get these right, and you’re on your way to building secure, scalable apps! 🚀

## **📚 Further Reading**

- [JWT.io](https://jwt.io/) — Learn about JSON Web Tokens
- [OAuth 2.0 Explained](https://oauth.net/2/)
- [Role-Based Access Control (RBAC) Concepts](https://auth0.com/docs/authorization/rbac)
