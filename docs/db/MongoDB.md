# MongoDB

[MongoDB](https://www.mongodb.com/) is a popular document-oriented NoSQL database designed for modern applications. Unlike traditional relational databases, MongoDB stores data in flexible, JSON-like documents, making it ideal for handling diverse data types and rapidly evolving schemas.

## 🛠️ Getting Started

### 💻 Installation

To start using MongoDB, you need to install it on your machine. Follow these steps for installation:

- **Windows:** Download the MongoDB installer from the [MongoDB website](https://www.mongodb.com/try/download/community) and follow the installation wizard.
- **macOS:** Use Homebrew to install MongoDB with the command: `brew tap mongodb/brew && brew install mongodb-community`.
- **Linux:** Use your distribution’s package manager or download the binaries from the MongoDB website.

### 🏃‍♂ Running MongoDB

After installation, you can start MongoDB with the `mongod` command. To connect to your database, use the `mongo` shell command.

## 📚 Basics

### 📂 MongoDB Structure

- **Database:** A container for collections.
- **Collection:** A group of MongoDB documents, akin to a table in **relational** databases.
- **Document:** A single record in a collection, stored in BSON (Binary JSON) format.

### ✍️ CRUD Operations

CRUD stands for Create, Read, Update, and Delete. Here’s a basic overview:

- **Create:**

```JavaScript
db.collection.insertOne({name:'Jay Pancholi', age: 29})
```

- **Read:**

```JavaScript
db.collection.find({name:'Jay Pancholi'})
```

- **Update:**

```JavaScript
db.collection.updateOne({name:'Jay Pancholi', age: 30})
```

- **Delete:**

```JavaScript
db.collection.deleteOne({name:'Jay Pancholi'})
```

## 🚀 Advanced

### 📈 Indexing

Indexes improve query performance by allowing MongoDB to quickly locate data without scanning the entire collection.

- **Creating an Index:**

```JavaScript
db.collection.createIndex({id: 1})
```

- **Compound Indexes:** indexes on multiple fields to support complex queries

```JavaScript
db.collection.createIndex({id: 1, age: 30})
```

### 🔍 Aggregation Framework

Aggregation operations process data records and return computed results. Use the aggregation pipeline for complex data transformations.

```JavaScript
db.collection.aggregate([
  { $match: { age: { $gte: 30 } } },
  { $group: { _id: "$name", averageAge: { $avg: "$age" } } }
]);
```

### 🏗️ Schema Design

Design your schema to balance flexibility and performance. Consider embedding related data in documents or using references between documents.

- **Embedding:** Useful for one-to-few relationships.
- **Referencing:** Suitable for one-to-many or many-to-many relationships.

### 📦 Sharding

[Sharding](Terminology.md#Sharding) distributes data across multiple servers to handle large datasets and high-throughput operations.

```JavaScript
sh.enableSharding("myDatabase");
db.collection.createIndex({ shardKey: 1 });
sh.shardCollection("myDatabase.myCollection", { shardKey: 1 });
```

### 🔁 Replication

Recplication provides high availability by duplicating data across multiple servers

- Setting up Replica Sets:

```JavaScript
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "localhost:27017" },
    { _id: 1, host: "localhost:27018" },
    { _id: 2, host: "localhost:27019" }
  ]
});
```

## 💡 Best Practices

### 🧩 Data Modeling

Model your **data** based on access patterns and application requirements. Choose between embedding and referencing based on data relationships and query needs.

### ⚙️ Performance Tuning

Monitor query performance and use indexing wisely. Analyze query execution plans and optimize slow queries.

### 🔐 Security

Implement authentication and authorization to control access to your MongoDB instances. Use TLS/SSL for encrypted communication.
