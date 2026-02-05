---
title: "GraphQL API Guide - Queries, Mutations & Apollo Server | SpellBook"
description: "Learn GraphQL API development with queries, mutations, schemas, and resolvers. Set up Apollo Server and master modern API design with GraphQL."
---

# GraphQL

[GraphQL](https://graphql.org) is a query language for APIs and a server-side runtime for executing queries by providing a complete and understandable description of your data. Unlike REST, which uses multiple endpoints, GraphQL uses a single endpoint to handle all queries and mutations.

## 🤔 Why use GraphQL?

- **Flexible Queries**: Clients can request exactly the data they need.
- **Single Endpoint**: Reduces complexity and improves performance.
- **Strongly Typed Schema**: Ensures a clear contract between client and server.

## 🛠️ Getting started with GraphQL

### 📚 Basics

- **Queries**: Fetch data from the server.
- **Mutations**: Modify data on the server.
- **Schema**: Defines the structure of the data and the operations available.
- **Resolvers**: Functions that resolve a query to the actual data.
  📜 Example Query

```GraphQL
query {
	user(id: '1') {
		name
		email
	}
}
```

## 🏗️ Setting up a GraphQL server

Using Apollo Server 🚀

1. **Install apollo server**:

```bash
npm install apollo-server graphql
```

2. **Create a basic server:**

```JavaScript
const { ApolloServer, gql } = require('apollo-server');

// Define the schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define the resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// Create an Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

## 🧩 Intermediate concepts

### 🔔 Subscriptions

Subscriptions allow clients to subscribe to real-time updates. Here’s a simple example:

```GraphQL
type Subscription {
  messageAdded: Message
}
```

### 📱 Using Apollo Client

1. **Install Apollo Client:**

```bash
npm install @apollo/client graphql
```

2. **Setup Apollo client**

```JavaScript
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetUsers {
        users {
          name
        }
      }
    `,
  })
  .then(result => console.log(result));
```

## 🧙‍♂️ Advanced Topics

### 🛡️ TypeScript and GraphQL

Using TypeScript with GraphQL ensures type safety. Here’s a basic setup:

1. **Install Dependencies:**

```bash
npm install @types/graphql graphql-codegen
```

2. **Generate types:**

```bash
graphql-codegen --config codegen.yml
```

### ⚡Optimizing Performance

- **Batching**: Use data loader to batch requests and reduce database calls.
- **Caching**: Implement caching strategies to improve performance.
