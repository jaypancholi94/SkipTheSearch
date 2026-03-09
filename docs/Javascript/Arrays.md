# Arrays []

an array is like a magical box that holds multiple values under one roof. Think of it as your go-to container for storing lists, be it numbers, strings, or even other arrays. 🎩✨

Arrays aren't [primitives](Primitives) but are instead `Array` objects with the
following core characteristics:

- **JavaScript arrays are resizable** and **can contain a mix of different [data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)**.
- **JavaScript arrays are not associative arrays** and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using non-negative integers (or their respective string form) as indexes.
- **JavaScript arrays are [zero-indexed](https://en.wikipedia.org/wiki/Zero-based_numbering)**: the first element of an array is at index `0`, the second is at index `1`, and so on — and the last element is at the value of the array's [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) property minus `1`.
- **JavaScript [array-copy operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copy_an_array) create [shallow copies](Copy%20-%20Shallow%20vs.%20Deep.html#shallow-copy)**. (All standard built-in copy operations with *any* JavaScript objects create shallow copies, rather than [deep copies](Copy%20-%20Shallow%20vs.%20Deep.html#deep-copy)).

Basic syntax: `let myArray = [];`

## 📦 Creating an array

Creating arrays is as easy as pie. Just use square brackets `[]` and separate your items with commas.

```js
const fruits = ["Apple", "Banana", "Cherry"]
console.log(fruits) // ['Apple', 'Banana', 'Cherry']'
```

## 🔍 Array Methods: The Swiss Army Knife of JavaScript

JavaScript arrays come with a treasure trove of methods to manipulate and access data. Let’s explore some of the most commonly used ones:

### 1. `.push()` and `.pop()`: The Dynamic Duo 🍕🍔

- **`.push()`**: Adds one or more items to the end of an array.

```js
const numbers = [1, 2, 3]
numbers.push(4)
console.log(numbers) // [1, 2, 3, 4]
```

- **`.pop()`**: Removes the last item from an array and returns it.

```js
const fruits = ["Apple", "Banana", "Cherry"]
const lastFruit = fruits.pop()
console.log(lastFruit) // Cherry
console.log(fruits) // ['Apple', 'Banana']
```

### 2. `.shift()` and `.unshift()`: The Front Line 🚪🚀

- **`.shift()`**: Removes the first item from an array and returns it.

```js
const colors = ["Red", "Green", "Blue"]
const firstColor = colors.shift()
console.log(firstColor) // Red
console.log(colors) // ['Green', 'Blue']
```

- **`.unshift()`**: Adds one or more items to the beginning of an array.

```js
const animals = ["Lion", "Tiger"]
animals.unshift("Elephant")
console.log(animals) // ['Elephant', 'Lion', 'Tiger']
```

### 3. `.map()`: Transform Your Arrays Like a Pro ✨🔮

The `.map()` method creates a new array with the results of calling a function on every element of the original array (The copy always happens [shallowly](Copy%20-%20Shallow%20vs.%20Deep.html#shallow-copy)).

```js
const numbers = [1, 2, 3]
const doubled = numbers.map((num) => num * 2)
console.log(doubled) // [2, 4, 6]
```

### 4. `.filter()`: Only the Best Will Do ⭐

Use `.filter()` to create a new array with all elements that pass a test.

```js
const ages = [12, 16, 21, 25]
const adults = ages.filter((age) => age >= 18)
console.log(adults) // [21, 25]
```

### 5. `.reduce()`: The Ultimate Aggregator 💪

`.reduce()` executes a reducer function on each element of the array, resulting in a single output value.

```js
const numbers = [1, 2, 3, 4]
const sum = numbers.reduce((total, num) => total + num, 0)
console.log(sum) // 10
```

## 🌟 Advanced Techniques

Ready to level up? Let’s dive into some advanced array techniques that will make you look like a coding wizard 🧙🏽‍♂️

### 1. `.flat()`: Flattening Arrays Like a Boss 🧹

The `.flat()` method creates a new array with all sub-array elements concatenated into it.

```js
const nestedArray = [1, [2, [3, 4]]]
const flatArray = nestedArray.flat(2)
console.log(flatArray) // [1, 2, 3, 4]
```

### 2. `.find()` and `.findIndex()`: Finding the Needle in the Haystack 🔍

- **`.find()`**: Returns the first element that satisfies the provided testing function.

```js
const numbers = [1, 2, 3, 4]
const firstEven = numbers.find((num) => num % 2 === 0)
console.log(firstEven) // 2
```

- **`.findIndex()`**: Returns the index of the first element that satisfies the provided testing function.

```js
const numbers = [1, 2, 3, 4]
const index = numbers.findIndex((num) => num % 2 === 0)
console.log(index) // 1
```

### 3. `.some()` and `.every()`: The Array Detectives 🕵️‍♂️🕵️‍♀️

- **`.some()`**: Tests if at least one element in the array passes the test.

```js
const numbers = [1, 2, 3, 4]
const hasNegative = numbers.some((num) => num < 0)
console.log(hasNegative) // false
```

- **`.every()`**: Tests if all elements in the array pass the test.

```js
const numbers = [2, 4, 6]
const allEven = numbers.every((num) => num % 2 === 0)
console.log(allEven) // true
```

## 🛠️ Tips and Tricks

- **Avoid Modifying Original Arrays**: Use methods like `.concat()` and the spread operator to avoid modifying the original array.
- **Immutable Patterns**: Embrace immutability by using methods that return new arrays, preserving the original array’s state.

## ⚙️ Performance Considerations

Array operations vary in performance characteristics. For instance:

- **`.push()` and `.pop()`** are generally O(1) operations, making them efficient.
- **`.shift()` and `.unshift()`** involve reindexing elements, resulting in O(n) complexity.
- **`.map()`, `.filter()`, and `.reduce()`** involve iteration and have O(n) complexity.

Understanding these characteristics helps in choosing the appropriate method based on performance needs. ⚡
