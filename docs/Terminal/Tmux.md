# Tmux

tmux is a powerful terminal multiplexer that lets you manage multiple terminal sessions from a single window. Imagine having the ability to run several tasks simultaneously and switch between them effortlessly - tmux makes this a reality! Whether you’re working on a project, monitoring logs, or running scripts, tmux helps keep your workflow organised and efficient.

## 💡Features

- **Session Management**: Easily create, switch, and manage multiple terminal sessions. You can work on different tasks simultaneously and keep them organised. 🗂️
- **Window Management**: Split your terminal window horizontally or vertically to view multiple terminal outputs at once. 🖥️
- **Pane Management**: Resize and move around panes within your windows for a customised workspace. 🖱️
- **Customisation**: Tailor tmux to your needs with configuration files and scripts. 🛠️
- **Persistence**: Detach from your session when you need a break and reattach later without losing your progress. ⏳

## 🛠 Installation

::: code-group

```zsh [brew]
brew install tmux
```

```zsh [apt]
apt install tmux
```

:::
**Windows**: Use [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) and follow the Linux instructions.

## 🚀 Basic Usage

**Starting tmux**: Launch a new session with the command `tmux`.
**Super Key**: by default, it is `ctrl + b`
**Detaching/Attaching**:

- Detach: Press `Super + d`
- Reattach: Use `tmux attach`
  **Session Navigation**: List and switch between sessions effortlessly.

## 📘 How-To Hacks

**Creating a New Window**: Hit `Super + c` to open a new window within your session.

**Splitting Windows**:

- Horizontal Split: `Super + %`
- Vertical Split: `Super "`

**Navigating Panes**: Move between panes using `Ctrl-b` and arrow keys. However, I am using [[Vim]] for my default editor, I have rebind it to `h`, `j`, `k`, & `l` in my [config](https://github.com/jaypancholi94/configs/blob/main/tmux/.tmux.conf).

**Customising tmux**: Edit `~/.tmux.conf` to add custom key bindings, colours, and more. 🎨

**Using Plugins**: Enhance tmux with plugins like `tmux-resurrect` for session persistence and `tpm` (tmux plugin manager) for easy plugin management. 🧩

## 📝 Cheat Sheet
