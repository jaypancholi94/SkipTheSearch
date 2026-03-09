# Primitives

Primitives are the basic building blocks in JavaScript, think of primitives as the simple Lego blocks. Without them, you can't build your dream Death Star! 🌟. It has 7 primitives

1. [string](#string)
2. [number](#number)
3. [boolean](#boolean)
4. [null](#null)
5. [undefined](#undefined)
6. [symbol](#symbol)
7. [bigint](#bigint)

## Types

### 1. String: Not Just for Text Messages 📱{#string}

`typeof` return value: `string`.

Strings represent text and are created using single quotes (`'Hello'`), double quotes (`"Hello"`), or backticks (`` `Hello` ``).

Tip: With backticks, you can embed expressions using `${expression}`.

#### Common Methods

- `length`: Returns the length of the string.
- `toUpperCase()`: Converts the string to uppercase.
- `includes()`: Checks if a substring is present.
- [More Methods](https://www.w3schools.com/js/js_string_methods.asp)

### 2. Number: More Than Just Math 🧮 {#number}

`typeof` return value: `number`.

JavaScript has a single number type, which can be an integer or a floating-point number. It also includes special values like `NaN` (Not-a-Number) and `Infinity`, because sometimes math just needs a little drama.

**Common Methods**:

- `toFixed()`: Formats a number using fixed-point notation, so your floating points stop floating around aimlessly.
- `toString()`: Converts a number to a string, because even numbers need to express themselves.
- `parseInt()`: Parses a string and returns an integer, making sense of the nonsense your users might input.
- [More Methods](https://www.w3schools.com/js/js_number_methods.asp)

### 3. Boolean: True or False, No Middle Ground 🚦{#boolean}

`typeof` return value: `boolean`.

Booleans represent one of two values: `true` or `false`. They are the digital equivalent of yes or no, on or off, and the answer to "Do I need coffee?" is always `true` ☕.

#### Common Use-case

Booleans are used in control flow statements like `if` statements. They help your code make decisions, because even computers have commitment issues.

### 4. Null: The Void Awaits 🌌 {#null}

`typeof` return value: `object`.

`null` is a special value that represents the intentional absence of any object value. It's JavaScript's way of saying, "There's nothing here, and I meant it."

#### Common Use-case

Use `null` as a default value for variables or to signify 'no result'. It's like a placeholder for your future regrets.

### 5. Undefined: The Unassigned Variable’s Best Friend 🤔 {#undefined}

`typeof` return value: `undefined`.

`undefined` indicates that a variable has been declared but not assigned a value. It's the JavaScript equivalent of a blank stare.

#### Common Use-case

`undefined` is the default return value of functions that don’t explicitly return something. It's like your code saying, "I showed up, but I didn't bring anything."

### 6. Symbols: Unique Snowflakes ❄️ {#symbols}

`typeof` return value: `symbol`.

Symbols are unique and immutable. They are used primarily as keys for object properties to avoid property name collisions. Think of them as the VIP members of your code—unique and irreplaceable.

#### Creation

```js
let sym = Symbol("addressed")
```

#### Common Use-case

Symbols are perfect for creating unique property keys. They ensure that your secret handshake remains secret.

### 7. BigInt: Because Regular Numbers Aren’t Big Enough 📈 {#bigint}

`typeof` return value: `bigint`.

BigInt is a special type for integers that are too large to be represented by the Number type. It's like numbers decided to hit the gym and bulk up.

#### Creation

```js
let big = BigInt(1234567890123456789012345678901234567890)
let big = 1234567890123456789012345678901234567890n
```

#### Common Use-case

BigInt is used for cryptography and high-precision calculations, because sometimes regular-sized numbers just don't cut it.

## Primitive vs. Object: The Great Debate ⚔️

**Mutability**: Primitives are immutable, meaning their values cannot be changed. Objects, on the other hand, are mutable and can be modified. It's like the difference between a rock (primitive) and a piece of clay (object).

**Performance**: Primitives are generally faster because they are simpler and stored directly in the variable. Objects are more complex and can be slower to process. Think of primitives as sprinters and objects as marathon runners—they're built for different tasks.
