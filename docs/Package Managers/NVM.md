[nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) is a common version manager for Node.

## 🛠 Installation

1. **Install Script**: Run the installation script from the NVM repository:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

1. **Reload Shell**: Close and reopen your terminal and run
   :::code-group

```bash[bash]
source ~/.bashrc
```

```zsh[macOS or Linux]
source ~/.zshrc
```

```zsh[omz]
omz reload
```

:::
::: tip Note
Do not use source `~/.zshrc` when using oh-my-zsh. [More details](Oh-my-zsh.html#📝cheat-sheet)
::: 3. **Verify Installation**: Check if NVM is installed correctly

```bash
nvm --version
```

## 📝 Basic Commands

- **Install a Node Version**: To install a specific version of Node.js:

```bash
nvm install 14.17.0
```

- **Use a Node Version**: To switch to a particular Node.js version:

```bash
nvm use 14.17.0
```

- **List Installed Versions**: To see all Node.js versions installed on your machine:

```bash
nvm ls
```

- **List Available Versions**: To see all available Node.js versions:

```bash
nvm ls-remote
```

- **Set Default Node Version**: To set a default Node.js version:

```bash
nvm alias defualt 20.17.0
```

## 🧙‍♂️ Advanced Tips and Tricks

- **Upgrade NVM**: Keep NVM up to date to enjoy the latest features and bug fixes:

```bash
nvm install-latest-npm
```

- **Uninstall a Node Version**: Remove a Node.js version you no longer need:

```bash
nvm uninstall 14.17.0
```

- **Run Specific Node Version Temporarily**: Run a specific Node.js version for a single command:

```bash
nvm run 14.17.0 my-script.js
```

- **Global Packages**: When switching Node.js versions, your global packages might differ. Use `nvm` to manage global packages for each version.

## 📂 Setting Up `.nvmrc` for Project-Specific Node Versions

When working on multiple projects, it’s often helpful to specify which Node.js version each project uses. This is where the `.nvmrc` file comes in handy.

1. **Create a `.nvmrc` File**: In the root directory of your project, create a file named `.nvmrc`:
   :::code-group

```bash[Specific Node Version]
echo "14.17.0" > .nvmrc
```

```bash[System Node Version]
node -v > .nvmrc
```

::: 2. **Use the `.nvmrc` File**: To automatically use the Node.js version specified in `.nvmrc`, navigate to your project directory and run:

```bash
nvm use
```

This command reads the `.nvmrc` file and switches to the specified version.

1. **Set Up Automatic Version Switching**: For a smoother workflow, you can use a tool like `nvm-auto` or `nvm-use` to automatically switch Node.js versions when you navigate into your project directory. Install `nvm-auto` globally:

```bash
npm install -g nvm-auto
```

Now, `nvm-auto` will automatically switch to the Node.js version specified in your `.nvmrc` file when you enter your project directory.
