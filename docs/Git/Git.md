---
title: "Git Complete Guide - Version Control Mastery | SpellBook"
description: "Master Git version control with comprehensive guides on setup, commits, branches, merging, and workflows. Essential Git commands and best practices."
---

# Git

Picture this: you're a developer without Git. It's like being a pirate without a parrot—utterly incomplete and slightly less cool. Git, the unsung hero of the coding universe, is here to save the day. In this journey, we'll uncover why Git is every developer's secret weapon, the Gandalf 🧙‍♂️ to your Frodo 🌋 on your quest for version-controlled glory. So, prepare for a whimsical ride through commits 📜, branches 🌿, and 'git blame' comedy 😄 – Git, the tool you never knew you couldn't live without! 😎🚀👨‍

## ⚙ Installation

::: code-group

```zsh[Homebrew]
brew install git
```

```zsh[Ubuntu]
apt-get install git
```

:::

## 🛠 Setup

Configuring user information used across all local repositories

```zsh
git config --global user.name “[firstname lastname]”
```

_Set a name that is identifiable for credit when review version history_

```zsh
git config --global user.email “[valid-email]”
```

_Set an email address that will be associated with each history marker_

```zsh
git config --global color.ui auto
```

_Set automatic command line coloring for Git for easy reviewing_

### Init

Configuring user information, initializing and cloning repositories

```zsh
git init
```

_Initialize an existing directory as a Git repository_

```zsh
git clone [url]
```

_Retrieve an entire repository from a hosted location via URL_

### Stage & Snapshot

Working with snapshots and the Git staging area

```zsh
git status
```

_Show modified files in working directory, staged for your next commit_

```zsh
git add [file]
```

_Add a file as it looks now to your next commit (stage)_

```zsh
git reset [file]
```

_Unstage a file while retaining the changes in working directory_

```zsh
git diff
```

_Diff of what is changed but not staged_

```zsh
git diff --staged
```

_Diff of what is staged but not yet commited_

```zsh
git commit -m “[descriptive message]”
```

_Commit your staged content as a new commit snapshot_

### Branch & Merge

Isolating work in branches, changing context, and integrating changes

```zsh
git branch
```

_List your branches. a _ will appear next to the currently active branch\*

```zsh
git branch [branch-name]
```

_Create a new branch at the current commit_

```zsh
git checkout
```

_Switch to another branch and check it out into your working directory_

```zsh
git merge [branch]
```

_Merge the specified branch’s history into the current one_

```zsh
git log
```

_Show all commits in the current branch’s history_

### Inspect & Compare

Examining logs, diffs and object information

```zsh
git log
```

_Show the commit history for the currently active branch_

```zsh
git log branchB..branchA
```

_Show the commits on branchA that are not on branchB_

```zsh
git log --follow [file]
```

_Show the commits that changed file, even across renames_

```zsh
git diff branchB...branchA
```

_Show the diff of what is in branchA that is not in branchB_

```zsh
git show [SHA]
```

_Show any object in Git in human-readable format_

### Tracking Path Changes

Versioning file removes and path changes

```zsh
git rm [file]
```

_Delete the file from project and stage the removal for commit_

```zsh
git mv [existing-path] [new-path]
```

_Change an existing file path and stage the move_

```zsh
git log --stat -M
```

_Show all commit logs with indication of any paths that moved_

### Ignoring Patterns

Preventing unintentional staging or commiting of files

```
logs/
*.notes
pattern*/
```

_Save a file with desired patterns as .gitignore with either direct string matches or wildcard globs._

```zsh
git config --global core.excludesfile [file]
```

_System wide ignore pattern for all local repositories_

### Share & Update

Retrieving updates from another repository and updating local repos

```zsh
git remote add [alias] [url]
```

_Add a git URL as an alias_

```zsh
git fetch [alias]
```

_Fetch down all the branches from that Git remote_

```zsh
git merge [alias]/[branch]
```

_Merge a remote branch into your current branch to bring it up to date_

```zsh
git push [alias] [branch]
```

_Transmit local branch commits to the remote repository branch_

```zsh
git pull
```

_Fetch and merge any commits from the tracking remote branch_

### Rewrite History

Rewriting branches, updating commits and clearing history

```zsh
git rebase [branch]
```

_Apply any commits of current branch ahead of specified one_

```zsh
git reset --hard [commit]
```

_Clear staging area, rewrite working tree from specified commit_

### Temporary Commits

Temporarily store modified, tracked files in order to change branches

```zsh
git stash
```

_Save modified and staged changes_

```zsh
git stash list
```

_List stack-order of stashed file changes_

```zsh
git stash pop
```

_Write working from top of stash stack_

```zsh
git stash drop
```

_Discard the changes from top of stash stack_

## 🫠Overwhelmed?

If all those features seem a bit overwhelming, then [[LazyGit]] is your go-to terminal-based UI project. Because, obviously, who wouldn’t want to streamline their Git experience to the point where it practically does everything for you? 😅🚀
