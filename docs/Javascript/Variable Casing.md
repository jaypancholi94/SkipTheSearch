# Variable Casing

When coding, the way you name your variables is crucial not only for readability but also for maintaining consistent, bug-free code. One of the most important aspects of naming is **casing**, which refers to how you capitalize the characters in your variable names.

## 🐫 camelCase

This is one of the most commonly used conventions in JavaScript. The first word is all lowercase, and each subsequent word starts with a capital letter. It's named after a camel because of the "humps" created by the capital letters.

```JavaScript
let myVariableName = "camelCase is cool";
```

#### When to use it?

Use camelCase for variables, function names, and method names.

> Example: `let userName = 'Jay'`, `function getUserDetails() {}`

## 🏛️ PascalCase

PascalCase is similar to camelCase, but the difference is that the first letter of the first word is also capitalized. This casing style is popular for class names.

```JavaScript
class MyClass {
    constructor() {
        this.name = "PascalCase is classy!";
    }
}
```

#### When to use it?

Use PascalCase for class names and constructor functions.

> Example: `class UserProfile {}`, `function CreateAccount() {}`

## 🐍 snake_case

In snake_case, all letters are lowercase, and words are separated by underscores. This style is not common in JavaScript but is often used in other programming languages like Python & Java.

```JavaScript
let my_variable_name = "I slither through my code";
```

#### When to use it?

Rarely in JavaScript. You might see it in environment variable names (`process.env`) or in older codebases.

> Example: `const API_KEY = 'abc123'`

## 🥙 kebab-case

kebab-case uses hyphens between words and is mostly found in URLs and CSS class names. It isn't allowed in JavaScript variable names because hyphens are interpreted as minus signs.

```html
<!-- Kebab case is frequently seen in HTML and CSS -->
<div class="my-css-class">This is kebab-case</div>
```

#### When to use it?

Kebab-case is mostly for CSS classes and HTML attributes.

> Example: `<div class="menu-item"></div>`

## 😱 SCREAMING_SNAKE_CASE

This style is essentially snake_case but written in all uppercase. It's typically reserved for constants that should not change throughout the program.

#### When to use it?

Use SCREAMING_SNAKE_CASE for constants, especially those that are application-wide.

> Example: `const TIMEOUT_DURATION = 5000;`

## 🌟 **Which One Should You Use?**

Choosing the right casing convention depends on the context:

- **camelCase** for most variables and functions.
- **PascalCase** for classes and constructors.
- **SCREAMING_SNAKE_CASE** for constants.

Maintaining consistency is key. Pick a style guide and stick to it to avoid confusing other developers (and future you) when reading your code.

## 🚨 Common Mistakes to Avoid

- Mixing casing styles within the same codebase or even within the same function can lead to confusion. Stick to one style per context.

```JavaScript
let user_name = 'John'; // 🛑 not camelCase
let UserAge = 25; // 🛑 should not use PascalCase for variables
```

- Using **kebab-case** in JavaScript variables. As mentioned earlier, hyphens aren’t allowed in variable names.

```JavaScript
// Invalid JavaScript
let my-variable = 'Invalid'; // ❌
```

- Forgetting to follow casing conventions when working with libraries or frameworks. Most frameworks like React follow specific conventions (e.g., PascalCase for components).
