# 📝 The Art of Writing Better Code Comments

Writing clean code is an art and comments are part of the brushwork. Used well, they help teammates (and future-you) understand your logic, avoid pitfalls, and extend your code without confusion. Used poorly? They clutter, mislead, or rot faster than your last TODO.

Let’s break down how to write comments that _actually help_.

## 🌟 Why Comments Matter

- 🧐 **Explain intent, not mechanics**  
    Code shows _what_ it does. Comments should explain _why_.
- 🔍 **Aid future debugging and maintenance**  
    Today’s clever hack is tomorrow’s “wtf is this” moment.
- 👯 **Improve onboarding and collaboration**  
    Your teammate shouldn’t need a seer stone to follow your logic.

## ✏️ Types of Comments

### `//` Single-Line Comments

Use these for:

- Quick inline clarifications
- TODOs or FIXME notes
- Section dividers

```
// Validate the user input before saving
const isValid = validateInput(data)
```

Keep them short and contextual. Avoid narrating the obvious:

```
// add 1 to i ❌
i += 1
```


### `/* */` Multi-Line Comments

Use these for:

- Block-level explanations
- Describing complex logic
- Disabling code temporarily (avoid leaving these in commits)

```
/*
  This handles the edge case when the user
  is reactivating their deleted account.
*/
```

Avoid nesting `/* */` inside each other — it breaks parsing in most languages. ::

### 🗞️ Function Comments & JSDoc

When used right, function comments are a _superpower_. JSDoc (or similar formats) adds structure to those comments and enables tooling like IntelliSense, linting, and API docs.

Example:

```
/**
 * Calculates total price with tax.
 * @param price - Base price in AUD
 * @param taxRate - Tax rate as decimal (e.g. 0.1 for 10%)
 * @returns Total price including tax
 */
function calculateTotal(price: number, taxRate: number): number {
  return price + price * taxRate
}
```

✨ Why it's great:

- Communicates intent, input, and output clearly
- Helps editors auto-suggest params and return types
- Standardises documentation across codebase

Even in TypeScript, this kind of context boosts understanding and helps non-TS-aware tools (like static analyzers or documentation generators).

## 🪄 Commenting Patterns That Help

### 1. Comment on "Why", not "What"

**👍🏻 Good:**

```
// Avoids duplicate submissions by locking button for 2s
setTimeout(() => enableSubmit(), 2000)
```

**👎🏻 Bad:**

```
// set timeout for 2s
setTimeout(() => enableSubmit(), 2000)
```


### 2. Use Section Headers

In longer files, use comments to visually break logic:

```
// ----- 🔐 Auth Logic -----

// ----- 📡 API Response Handlers -----
```

You can even combine with editor-folding magic in VS Code:

```
// #region 🧐 Validation Rules
// ...
// #endregion
```


### 3. Write TODO, FIXME, and NOTE consistently

Stick to uppercase keywords and track them in your issue tracker.

```
// TODO: Validate input fields before submission
// FIX: Handle null value for applicantId
// HACK: Hardcoded timeout for flaky API
// NOTE: This form only applies to F3 workflows
// REVIEW: Double-check date parsing for time zones
// IDEA: Support batch uploads here later
// DEPRECATED: Old CRM endpoint used here
// TEMP: Using mock response until API is ready
// DEBUG: console.log(formPayload)
// OPTIMIZE: Refactor to avoid double filtering
// WARNING: Mutating external state here!
```

Many linters or dev tools (like Raycast, Obsidian, or VS Code extensions) can surface these automatically if you’re consistent.

::: warning
Avoid using `// HACK:` or `// TEMP:` comments without linking to a follow-up task (like a Jira ticket or GitHub issue).

These tags usually indicate technical debt or shortcuts, so they **must be tracked**. Otherwise, they’re likely to be forgotten and left in production, which can lead to unstable or hard-to-maintain code.

✅ Always do this:  
`// HACK: fallback logic for API inconsistency (see FWC-1234)`
:::

::: tip
I would also recommend using [Better comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) for better visual representation. 
:::

## 🙎 Common Comment Smells

- ❌ **Outdated comments**  
    Don’t describe code that’s no longer accurate.
- ❌ **Noise over clarity**  
    Commenting every line is worse than none at all.
- ❌ **Sarcasm or jokes in production**  
    Fun in the moment, dangerous later.

## ✅ Real-World Use Cases

Here’s how great teams use comments effectively:

- **APIs or SDKs**: Exported functions always have JSDoc, aiding consumers.
- **Component Libraries**: Shared React components include notes on prop expectations and edge behavior.
- **Complex business rules**: Comments link logic back to Jira tickets, regulatory docs, or decisions.
- **Buggy areas**: Temporary workarounds are clearly flagged with `FIXME` and linked to backlog.

## 🧙🏻 Final Thoughts


The goal isn’t to _explain the code_, it’s to _explain the decisions_ behind the code.

Be kind to your future self and your team. Good comments save hours of Slack threads and guessing games.

## 📚 Further Reading

- JSDoc Reference
- TypeScript with JSDoc
- Clean Code: Meaningful Comments (Uncle Bob)
