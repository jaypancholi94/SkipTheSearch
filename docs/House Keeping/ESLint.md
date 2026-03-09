---
title: "ESLint Setup Guide - JavaScript Linting Best Practices | SpellBook"
description: "Learn ESLint configuration for JavaScript and TypeScript. Set up linting rules, fix code quality issues, and maintain clean, bug-free code."
---

# ESLint: Keeping Code Clean and Bug-Free! 🧹💻

If you’ve ever run into frustrating code issues or puzzling syntax errors, ESLint is your new best friend! It’s a powerful tool that doesn’t just help enforce coding styles but also catches potential bugs before they creep into production./

## 🐣 What Is ESLint?

ESLint is a linting tool for JavaScript and TypeScript code. In simple terms, linting is the process of analyzing code for potential errors, stylistic issues, or patterns that can lead to bugs. ESLint examines your code, checking everything from syntax and formatting to best practices, helping you keep it **consistent**, **clean**, and **error-free**.

## 🎬 Setting Up ESLint

To get started, you’ll need Node.js and npm installed. Then, follow these steps:

1. **Install ESLint as a Dev Dependency**:
   ::: code-group

```zsh[npm]
npm install eslint --save-dev
```

```zsh[pnpm]
pnpm add -D eslint
```

```zsh[yarn]
yarn add -D eslint
```

```zsh[bun]
bun add -D eslint
```

::: 2. **Initialize ESLint**: Run the following command to create a `.eslintrc` configuration file:
::: code-group

```zsh[npm]
npmx eslint init
```

```zsh[pnpm]
pnpm dlx eslint --init
```

```zsh[yarn]
yarn dlx eslint --init
```

```zsh[bun]
bun x eslint --init
```

::: 3. **Configure Your Style**: You’ll be prompted with questions like:

- What type of modules do you use? (CommonJS or ES6)
- Do you use TypeScript?
- Are you using a framework like React?
- Do you prefer tabs or spaces?

Based on your responses, ESLint will create a basic configuration that fits your coding style and project needs. 4. **Add Scripts**: Add a script to your `package.json` for quick linting:

```json
"scripts": {
  "lint": "eslint ."
}
```

1. **Run ESLint**: Now, simply run:
   ::: code-group

```zsh[npm]
npm run lint
```

```zsh[pnpm]
pnpm run lint
```

```zsh[yarn]
yarn lint
```

```zsh[bun]
bun lint
```

:::
And watch as ESLint checks your code for issues!

## 🔧 Understanding `.eslintrc`

The `.eslintrc` file is where all the magic happens. This file can be in various formats (`JSON`, `YAML`, or `JS`), and it’s where ESLint’s rules and settings live. Here’s a breakdown of some key fields:

- **extends:** Allows you to extend configurations from popular presets like Airbnb, Standard, or Google.

```json
"extends": [
 "airbnb",
 "eslint:recommended",
 "plugin:@typescript-eslint/recommended"
]
```

- **plugins**: Add support for libraries or frameworks (React, Jest, etc.).

```json
"plugins": ["react", "@typescript-eslint"]
```

- **rules**: Enable, disable, or adjust the strictness of individual rules.

```json
"rules": {
  "no-console": "warn",
  "eqeqeq": ["error", "always"]
}
```

## 🔗 ESLint with Prettier

ESLint helps with code quality, while [Prettier](/House%20Keeping/Prettier) keeps your code pretty. They can work together! Here’s how:

1. **Install Prettier and ESLint Plugins:**
   ::: code-group

```zsh[npm]
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

```zsh[pnpm]
pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier
```

```zsh[yarn]
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

```zsh[bun]
bun add -D prettier eslint-config-prettier eslint-plugin-prettier
```

::: 2. **Update `.eslintrc`:** Configure ESLint to use Prettier's rules:

```json
"extends": ["plugin:prettier/recommended"]
```

1. **Create a `.prettierrc`** file for Prettier-specific settings.

Now, ESLint will handle quality, and Prettier will handle formatting, without stepping on each other’s toes.

## 🏆 Advanced ESLint: Custom Rules and Plugin Play

For those who want even more control:

- **Write Custom Rules**: ESLint allows you to create custom rules if there’s something unique to your project’s needs.
- **Use Environment Settings**: Define environments like `browser`, `node`, or `jest` to enable environment-specific globals.

```json
"env": {
  "browser": true,
  "node": true,
  "jest": true
}
```

- **Use ESLint in CI/CD Pipelines**: Set up ESLint as a required step in your CI/CD pipeline to enforce quality standards in every commit!

## 🚀 Pro Tips for ESLint Success

1. **Automate Fixes**: Run ESLint with the `--fix` flag to automatically fix problems it can handle:
   ::: code-group

```zsh[npm]
npmx eslint --fix .
```

```zsh[pnpm]
pnpm dlx eslint --fix .
```

```zsh[yarn]
yarn dlx eslint --fix .
```

```zsh[bun]
bunx eslint --fix .
```

::: 2. **Use VS Code Integration**: Install the [ESLint extension for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to get real-time linting feedback. The extension underlines issues in your code and provides quick fixes, making it faster and easier to correct errors as you code. 3. **Use Vim/Neovim Integration:** For Vim or Neovim users, you can integrate ESLint with the [ALE (Asynchronous Lint Engine)](https://github.com/dense-analysis/ale) or [null-ls](https://github.com/jose-elias-alvarez/null-ls.nvim) plugin. Here’s a quick setup:

- **ALE**: ALE will automatically run ESLint when you save or edit files. Just add this to your `.vimrc` or `init.vim`:

  ```vim
  let g:ale_linters = {'javascript': ['eslint'], 'typescript': ['eslint']}
  ```

````
- **null-ls (Neovim)**: With null-ls and the `nvim-lspconfig` plugin, you can set up ESLint as an LSP server for even more customization:
```lua
require("null-ls").setup({
  sources = {
    require("null-ls").builtins.diagnostics.eslint,
    require("null-ls").builtins.code_actions.eslint,
    require("null-ls").builtins.formatting.eslint,
  },
})
````

1. **Customize Error Levels**: ESLint rules can be set to “off,” “warn,” or “error” based on your project’s needs, so tailor it to match your team’s preferences.

### 🌐 ESLint Beyond JavaScript

Using TypeScript? ESLint can handle it too! With `@typescript-eslint`, you can lint TypeScript projects and enforce the same level of quality checks across your codebase.

1. **Install ESLint for TypeScript**:
   ::: code-group

```zsh[npm]
npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```

```zsh[pnpm]
pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```zsh[yarn]
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```zsh[bun]
bun add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

::: 2. **Update .eslintrc**: In `.eslintrc`, use `@typescript-eslint` as the parser and add its plugin:

```json
"parser": "@typescript-eslint/parser",
"plugins": ["@typescript-eslint"],
"extends": ["plugin:@typescript-eslint/recommended"]
```

## 🎉 Wrapping Up

ESLint might take a bit to set up, but the payoff is well worth it. Your codebase will be **consistent**, **clean**, and **bug-resistant** — qualities every developer dreams of! So, give ESLint a shot, and let it be your code's best friend.
