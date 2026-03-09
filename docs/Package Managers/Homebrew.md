# Homebrew 🍺

Homebrew is a popular package manager for macOS and Linux that simplifies the installation and management of software. It allows you to easily install, update, and manage various command-line tools and applications.

## 🛠 Installation

1. **Open Terminal**: You’ll need to use the command line interface to install Homebrew.
2. **Run the Installation Command**: Enter the following command to install Homebrew:

```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

1. **Follow the Prompts**: The script will guide you through the installation process. It may ask for your password and provide instructions on how to add Homebrew to your system PATH.
2. **Verify Installation**: Once installed, verify it by running:

```zsh
brew --version
```

_This should display the installed version of Homebrew._

## ⚙ Configuration

1. **Update Homebrew**: Keep Homebrew and its formulae up to date with:

```zsh
brew update
```

1. **Install Packages**: To install a package, use:

```zsh
brew install package_name
```

1. **Upgrade Packages**: Upgrade installed packages with:

```zsh
brew upgrade
```

1. **Uninstall Packages**: Remove a package with:

```zsh
brew uninstall package_name
```

1. **Check for Issues**: If you encounter problems, run:

```zsh
brew doctor
```

_This command will diagnose and suggest fixes for any issues._
