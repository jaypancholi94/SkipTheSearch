# Prettier: The Key to Beautifully Consistent Code 🌈

Ever spent more time formatting code than actually writing it? Say hello to [**Prettier**](https://prettier.io/), the opinionated code formatter that handles code styling for you! Prettier automates formatting, making sure your code is consistent, readable, and, well, _pretty_.

## 💡 What is Prettier?

Prettier is a code formatter that enforces a consistent style across your codebase. It handles indentation, line breaks, spacing, and even punctuation in supported languages like JavaScript, TypeScript, HTML, CSS, Markdown, and more. Prettier’s rules are _opinionated_, meaning it follows a strict style guideline to eliminate debates over code style.

## 🎬 Setting Up Prettier

1. **Install Prettier**: Add Prettier as a dev dependency in your project:
   ::: code-group

```zsh[npm]
npm install prettier --save-dev
```

```zsh[pnpm]
pnpm add -D prettier
```

```zsh[yarn]
yarn add -D prettier
```

```zsh[bun]
bun add prettier --dev
```

::: 2. **Create a Prettier Config**: Prettier works with zero configuration, but you can create a `.prettierrc` file to customize its behavior. Some common options include:

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

1. **Add Scripts**: Add a script to `package.json` to run Prettier across your project:

```json
"scripts": {
  "format": "prettier --write ."
}
```

1. **Run Prettier**: To format your code, simply run:
   ::: code-group

```zsh[npm]
npm run format
```

```zsh[pnpm]
pnpm run format
```

```zsh[yarn]
yarn format
```

```zsh[bun]
bun format
```

:::

## 📋 Prettier Options You Should Know

While Prettier is opinionated, you still have some flexibility. Here are a few key options you can set in `.prettierrc`:

- **`printWidth`**: Max line length. Default is 80 characters.
- **`tabWidth`**: Number of spaces per indentation level.
- **`semi`**: `true` for semicolons, `false` to omit them.
- **`singleQuote`**: Use single quotes (`true`) or double quotes (`false`).
- **`trailingComma`**: Controls trailing commas (`"none"`, `"es5"`, or `"all"`).
- **`arrowParens`**: Controls parentheses around a single arrow function parameter (`"avoid"` or `"always"`).

These options allow you to set preferences while still benefiting from Prettier’s strict and reliable styling.

## 🔗 Integrating Prettier with ESLint

Wanna know how it is done? [Follow steps mentioned here](/House%20Keeping/ESLint.html#🔗-eslint-with-prettier).

## 🔄 Automate with Prettier Hooks

Prettier formats code, but ESLint ensures code quality. Together, they’re unstoppable! Here’s how to make them work side by side:

1. **Install Husky and lint-staged**:
   ::: code-group

```zsh[npm]
npm install husky lint-staged --save-dev
```

```zsh[pnpm]
pnpm add -D husky lint-staged
```

```zsh[yarn]
yarn add -D husky lint-staged
```

```zsh[bun]
bun add husky lint-staged --dev
```

::: 2. **Update `package.json`**: In `package.json`, set up a lint-staged configuration:

```json
"lint-staged": {
  "*.js": ["prettier --write", "git add"]
}
```

1. Activate Husky: Set up Husky to run on the pre-commit hook:

:::code-group

```zsh[npm]
npmx husky install
```

```zsh[pnpm]
pnpm dlx husky install
```

```zsh[yarn]
yarn dlx husky install
```

```zsh[bun]
bun x husky install
```

:::

Now, every time you make a commit, Prettier will format staged files automatically, ensuring that all code stays consistent.

## 🛠 Prettier in Your Editor

Prettier plugins are available for most editors, so you can see the magic happen in real-time as you write code:

### VS Code

Install the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension. Set Prettier as your default formatter in VS Code by adding the following to your settings:

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
```

### Vim/Neovim

Integrate Prettier with Vim or Neovim using plugins like [ALE](https://github.com/dense-analysis/ale) or [null-ls](https://github.com/jose-elias-alvarez/null-ls.nvim):

- With ALE, add this to `.vimrc`:

```vim
let g:ale_fixers = {'javascript': ['prettier'], 'typescript': ['prettier']}
let g:ale_fix_on_save = 1'
```

- With null-ls in Neovim:

```lua
require("null-ls").setup({
  sources = {require("null-ls").builtins.formatting.prettier},
})
```

## 💥 Prettier Pro Tips for Maximum Efficiency

1. **Use Prettier with CI/CD**: Add Prettier as a step in your CI/CD pipeline to ensure consistent styling in all pull requests and prevent unformatted code from merging.
2. **Handle Markdown and JSON**: Prettier can format Markdown and JSON files, making it a great tool for keeping documentation clean and readable.
3. **Ignore Files**: Use a `.prettierignore` file to prevent certain files from being formatted, such as large JSON datasets or auto-generated files.
4. **Combine with TypeScript**: Prettier works well with TypeScript out of the box, making it a valuable tool for TypeScript projects by ensuring stylistic consistency.

## 🎉 Wrapping Up

Prettier is an essential tool for modern JavaScript and TypeScript projects. By handling code formatting automatically, it allows you to focus more on writing functional, clean code while ensuring it always looks great. Give it a go, and let Prettier bring the sparkle to your codebase!
