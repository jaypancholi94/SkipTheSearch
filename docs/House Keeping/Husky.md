# Setting Up Husky for Your Project 🐺

Husky is a popular tool that helps enforce quality standards in your codebase by running scripts at different stages of your Git workflow. By using Husky, you can automatically run tests, linters, or formatters before commits, pushes, and other Git actions, ensuring that your code stays clean and consistent.

## 🤔 Why Use Husky?

- **Pre-commit Checks**: Prevent bad code from being committed by running tests, linters, and formatters before each commit.
- **Consistency**: Ensure every developer follows the same rules and standards automatically.
- **Save Time**: Catch errors early instead of waiting until after a commit is made.

## 🛠️ Installing Husky

1. **Install Husky**: Run the following command to install Husky as a development dependency:
   ::: code-group

```zsh[npm]
npm install husky --save-dev
```

```zsh[pnpm]
pnpm add -D husky
```

```zsh[yarn]
yarn add -D husky
```

```zsh[bun]
bun add husky --dev
```

::: 2. **Enable Git hooks**: Husky uses Git hooks to run scripts. To enable them, run this command:
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

## 🧩 Setting Up Git Hooks with Husky

You can configure Husky to run specific scripts when certain Git events happen, such as before a commit, before a push, etc.

1. **Create a Pre-commit Hook**: For example, to run ESLint and Prettier before every commit, run:

:::code-group

```zsh[npm]
npmx husky add .husky/pre-commit "npx lint-staged"
```

```zsh[pnpm]
pnpm dlx husky add .husky/pre-commit "npx lint-staged"
```

```zsh[yarn]
yarn dlx husky add .husky/pre-commit "npx lint-staged"
```

```zsh[bun]
bun x husky add .husky/pre-commit "npx lint-staged"
```

:::
This ensures that the linter and formatter will check staged files before committing.

1. **Create a Pre-push Hook**: You can also add a pre-push hook to run tests before pushing code to the remote repository:

:::code-group

```zsh[npm]
npmx husky add .husky/pre-push "npm test"
```

```zsh[pnpm]
pnpm dlx husky add .husky/pre-push "npm test"
```

```zsh[yarn]
yarn dlx husky add .husky/pre-push "npm test"
```

```zsh[bun]
bun x husky add .husky/pre-push "npm test"
```

:::
This prevents pushing code if the tests fail.

## 🛠️ Customizing Husky for Your Workflow

- **Enforce Commit Message Standards**: You can use Husky to ensure all commit messages follow a conventional format (e.g., using `commitlint`).

1.  Install `commitlint`:
    ::: code-group

```zsh[npm]
npm install @commitlint/config-conventional @commitlint/cli --save-dev
```

```zsh[pnpm]
pnpm add -D @commitlint/config-conventional @commitlint/cli
```

```zsh[yarn]
yarn add -D @commitlint/config-conventional @commitlint/cli
```

```zsh[bun]
bun add @commitlint/config-conventional @commitlint/cli --dev
```

::: 2. Add a configuration file `.commitlintrc.json`:

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

1.  Then, add a `commit-msg` hook:
    :::code-group

```zsh[npm]
npmx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

```zsh[pnpm]
pnpm dlx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

```zsh[yarn]
yarn dlx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

```zsh[bun]
bun x husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

:::

- **Prevents Unwanted Commits**: You can set up a pre-commit hook to ensure that certain files or patterns aren’t committed, like large files, sensitive data, or temporary files.

## 🚀 Pro Tips for Husky

- **Use with Linting & Formatting**: Integrate Husky with linters (like ESLint) and formatters (like Prettier) to enforce code quality before every commit.
- **Don’t Overdo It**: Keep hooks focused on essential tasks, like running tests or linters. Overloading them can slow down your development process.
- **Automate with GitHub Actions**: Combine Husky with GitHub Actions for additional automated checks after pushing changes.
