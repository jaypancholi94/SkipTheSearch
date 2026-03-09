# SQL

- SQL stands for Structured Query Language
- SQL lets you access and manipulate databases
- SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987

## What Can SQL do?

- SQL can execute queries against a database
- SQL can retrieve data from a database
- SQL can insert records in a database
- SQL can update records in a database
- SQL can delete records from a database
- SQL can create new databases
- SQL can create new tables in a database
- SQL can create stored procedures in a database
- SQL can create views in a database
- SQL can set permissions on tables, procedures, and views

## Wildcard Characters

| Symbol | Description                                                   |
| ------ | ------------------------------------------------------------- |
| %      | Represents zero or more characters                            |
| \_     | Represents a single character                                 |
| []     | Represents any single character within the brackets \*        |
| ^      | Represents any character not in the brackets \*               |
| -      | Represents any single character within the specified range \* |
| {}     | Represents any escaped character \*\*                         |

::: tip Note
\*Not supported in PostgreSQL and MySQL databases.
\*\* Supported only in Oracle databases.
:::

## Joins

- `(INNER) JOIN`: Returns records that have matching values in both tables
- `LEFT (OUTER) JOIN`: Returns all records from the left table, and the matched records from the right table
- `RIGHT (OUTER) JOIN`: Returns all records from the right table, and the matched records from the left table
- `FULL (OUTER) JOIN`: Returns all records when there is a match in either left or right table

## Relationships

1. `One-to-One Relationship`: In a **`one-to-one`** relationship, a single record in one table is associated with a single record in another table. This type of relationship is less common but can be used when one table’s data is a direct extension of another.
2. `One-to-Many Relationship`: A **`one-to-many`** relationship occurs when a single record in one table can be associated with multiple records in another table. This is the most common type of relationship in relational databases.
3. `Many-to-Many Relationship`: A **`many-to-many`** relationship occurs when multiple records in one table are associated with multiple records in another table. This relationship typically requires a **junction table** to store the associations between the tables.

## Keys: Unique Identifiers in SQL

In relational databases, a **key** is a unique identifier for records in a table. Keys are essential for establishing relationships and ensuring data integrity.

### **Primary Key**

A **Primary Key** is a column (or a set of columns) that uniquely identifies each row in a table. It must contain unique values and cannot contain **NULL** values. This ensures that each record is distinguishable from others.

For example, a `User` table might have a `user_id` column as the primary key, ensuring each user is uniquely identified.

### **Foreign Key**

A **Foreign Key** is a column (or a set of columns) in one table that links to the **Primary Key** of another table. It is used to establish and enforce a link between the data in two tables, creating relationships such as one-to-many or many-to-many.

For example, an `Orders` table may contain a `user_id` foreign key that links to the `id` primary key of the `Users` table. This ensures that each order is associated with a specific user.

## ACID Properties

- **Consistency**: A transaction takes the database from one valid state to another, ensuring that the database adheres to all defined rules, including constraints, before and after the transaction.
- **Isolation**: Transactions are isolated from each other, meaning the actions of one transaction do not interfere with those of another. Each transaction is executed as though it is the only one running.
- **Durability**: Once a transaction is committed, it’s permanent. Even in the event of a system crash or failure, the transaction will not be lost.

## 📝 SQL Syntax Cheat Sheet

### Select

```sql
SELECT column1, column2, ...
FROM table_name;
```

### Select Distinct

The `SELECT DISTINCT` statement is used to return only distinct (different) values.

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

### Where

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

### Order By

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

### And

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;
```

### Or

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
```

### Not

```sql
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
```

### Insert Into

It is possible to write the `INSERT INTO` statement in two ways:

1. Specify both the column names and the values to be inserted:

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);`
```

1. If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the `INSERT INTO` syntax would be as follows:

```sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

### Null Values

1. IS NULL

```sql
SELECT column_names
FROM table_name
WHERE column_name IS NULL;
```

1. IS NOT NULL

```sql
SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;
```

### Update

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

### Delete

```sql
DELETE FROM table_name WHERE condition;
```

::: warning
Be careful when deleting records in a table! Notice the `WHERE` clause in the `DELETE` statement. The `WHERE` clause specifies which record(s) should be deleted. If you omit the `WHERE` clause, all records in the table will be deleted!
:::

### Aggregate Functions

1. Min

```sql
SELECT MIN(column_name)
FROM table_name
WHERE condition;
```

1. Max

```sql
SELECT MAX(column_name)
FROM table_name
WHERE condition;
```

1. Count

```sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
```

1. Sum

```sql
SELECT SUM(column_name)
FROM table_name
WHERE condition;
```

1. Avg

```sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;
```

### Like

```sql
SELECT column1, column2, ...
FROM table_name
WHERE columnN LIKE pattern;
```
