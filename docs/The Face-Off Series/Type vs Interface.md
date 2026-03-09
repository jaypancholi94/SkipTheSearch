# TypeScript: type vs interface in React

When working with TypeScript in React, you'll often need to define the shape of objects, props, or component states. This is where `type` and `interface` come in. Both are used to define the structure of data, but there are subtle differences between the two, and understanding when to use one over the other can be a bit tricky.

## 🧩 Basics

### `interface`

An `interface` in TypeScript is a way to define the structure of an object. It describes the shape of an object and is typically used to define contracts within your code, especially when interacting with external libraries.

```TypeScript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'Jay',
  age: 25
};
```

### `type`

A `type` in TypeScript is similar to an `interface` in that it describes the shape of an object, but it goes beyond that. It can describe more complex structures like unions, intersections, or even conditional types.

```TypeScript
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: 'Jay',
  age: 25
};

```

At first glance, they both do the same thing! So, why do we need both?

## 🔍 Key Difference

### 1. Extending or Combining

- **`interface`**: You can extend multiple interfaces, making it very flexible for scenarios where you need to build on existing structures.

```TypeScript
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: 'Jay',
  age: 25,
  role: 'Admin'
};
```

- **`type`**: With `type`, you can't extend directly, but you can combine multiple types using intersection (`&`).

```TypeScript
type User = {
  name: string;
  age: number;
};

type Admin = User & {
  role: string;
};

const admin: Admin = {
  name: 'Jay',
  age: 25,
  role: 'Admin'
};
```

While `interface` uses `extends` for inheritance, `type` uses `&` to combine types. Pretty close, but subtly different.

### 2. Merging

- **`interface`**: One of the most powerful features of `interface` is its ability to merge declarations. If you declare the same `interface` multiple times, TypeScript will merge them.

```TypeScript
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: 'Jay',
  age: 25
};
```

- **`type`**: On the other hand, `type` declarations cannot be merged. If you try to declare the same `type` twice, you'll get an error.

```TypeScript
type User = {
  name: string;
};

// Error: Duplicate identifier 'User'
type User = {
  age: number;
};
```

If you need to add properties to an existing structure, `interface` has you covered. If you prefer the `type` syntax, you’d have to use a different name or create a new intersection type.

### 3. Complex Types and Features

- **`type`**: One of the biggest advantages of type is that it can represent complex types like unions, intersections, or mapped types.

```TypeScript
type Status = 'success' | 'error' | 'loading';

type User = {
  name: string;
  status: Status;
};
```

- **`interface`**: Interfaces can't handle these advanced scenarios like unions or mapped types.
  If you're working with more complex types or need a lot of flexibility in defining your types, `type` is usually the better choice.

## 🧠 When to Use Which?

Now that you know the differences, when should you use `type` or `interface` in React?

### Use `interface` when

1. You are defining the shape of objects, especially for props or state in React components.
2. You need declaration merging (e.g., extending or adding fields to existing interfaces).
3. You are creating libraries or modules where flexibility and extensibility are important.

```TypeScript
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
```

### Use `type` when

1. You need unions, intersections, or more complex types.
2. You want to create utility types or aliases for unions of string literals or other primitives.
3. You want to be explicit about combining types in non-hierarchical ways.

```TypeScript
type Status = 'success' | 'error' | 'loading';

type ButtonProps = {
  label: string;
  status: Status;
};
```

## 🌏 Real-World Example

Let’s take a look at a practical React example using both `type` and `interface`.

### Using `interface` for props in a React component

```TypeScript
interface UserCardProps {
  name: string;
  age: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => (
  <div>
    <h2>{name}</h2>
    <p>Age: {age}</p>
  </div>
);
```

### Using `type` for more complex type combinations

```TypeScript
type Status = 'success' | 'error' | 'loading';

type UserCardProps = {
  name: string;
  age: number;
  status: Status;
};

const UserCard: React.FC<UserCardProps> = ({ name, age, status }) => (
  <div>
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Status: {status}</p>
  </div>
);
```

## 📋Summary Table

| Feature                 | `type`                                             | `interface`                                    |
| ----------------------- | -------------------------------------------------- | ---------------------------------------------- |
| **Basic Use**           | Alias for any type (primitive, object, etc.)       | Used to define the structure of an object      |
| **Extending**           | Can combine types using intersections (`&`)        | Can extend multiple interfaces using `extends` |
| **Declaration Merging** | Cannot merge multiple declarations                 | Supports merging multiple declarations         |
| **Complex Types**       | Supports unions, intersections, mapped types       | Does not support unions or mapped types        |
| **React Props/State**   | Can define props/state for React components        | Can define props/state for React components    |
| **Combining Types**     | Supports unions (`\|`) and and intersections (`&`) |                                                |
| **Flexibility**         | More flexible for advanced or complex types        | Better suited for defining object shapes       |
| **Use Cases**           | Best for unions, intersections, utility types      | Best for declaring object-like structures      |
