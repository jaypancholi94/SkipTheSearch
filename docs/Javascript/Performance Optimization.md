# Performance Optimization

Memoization in React is a technique used to **optimize performance** by caching values or functions so that React can skip unnecessary re-renders. Let’s break down the three primary tools for memoization in React: `React.memo`, `useMemo`, and `useCallback`.

## `React.memo`

`React.memo` is a [higher-order component (HOC)](Terminology.md#higher-order-component-hoc) that memoizes a **functional component**. It prevents the component from re-rendering unless its **props** change. It’s similar to `PureComponent` for class components.

### How it works

- React.memo checks if the props of a component have changed. If not, it skips rendering the component, thus optimizing performance.

### Example

```JavaScript
import React from 'react';

// A functional component that only re-renders when `title` changes.
const Title = React.memo(({ title }: { title: string }) => {
  console.log("Title component re-rendered");
  return <h1>{title}</h1>;
});

const App = () => {
  const [count, setCount] = React.useState(0);
  const [title, setTitle] = React.useState("My Title");

  return (
    <div>
      <Title title={title} />
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <button onClick={() => setTitle("New Title")}>Change Title</button>
    </div>
  );
};

export default App;
```

## `useMemo`

`useMemo` is used to **memoize values**. It prevents expensive computations from being recalculated on every render unless the dependencies change.

### How it works

- `useMemo` only recalculates the value if one of the dependencies has changed. It is often used for **expensive calculations** or **derived state**.

### Example

```JavaScript
import React from 'react';

const App = () => {
  const [count, setCount] = React.useState(0);
  const [number, setNumber] = React.useState(10);

  // Memoize the result of an expensive calculation
  const expensiveCalculation = React.useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]); // Only recalculate if `number` changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h2>Expensive Calculation: {expensiveCalculation}</h2>
      <button onClick={() => setNumber(number + 1)}>Increment Number: {number}</button>
    </div>
  );
};

export default App;

```

## `useCallback`

`useCallback` is used to **memoize functions**. It prevents the function from being recreated on every render unless its dependencies change. This is useful when passing **callback functions** to child components to avoid unnecessary re-renders.

### How it works

- `useCallback` returns a **memoized version** of a function that will only change if its dependencies change.

### Example

```JavaScript
import React from 'react';

// A child component that accepts a callback function
const Button = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Button component re-rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const App = () => {
  const [count, setCount] = React.useState(0);

  // Memoize the handleClick function
  const handleClick = React.useCallback(() => {
    console.log("Button clicked");
  }, []); // Dependencies are empty, so the function is memoized and won't change

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* Pass the memoized function to the child component */}
      <Button onClick={handleClick} />
    </div>
  );
};

export default App;

```

## Summary

- `React.memo` prevents a component from re-rendering unless its props change.
- `useMemo` memoizes the result of expensive calculations to avoid recalculating them unnecessarily.
- `useCallback` memoizes callback functions to prevent them from being recreated on every render.

## When to Use These Tools

- Use `React.memo` when you want to prevent a component from re-rendering if its **props** haven’t changed.
- Use `useMemo` when you have an **expensive calculation** that should only be recalculated when its dependencies change.
- Use `useCallback` when you’re passing a **function** as a prop to a child component and want to prevent the function from being recreated unless necessary.
