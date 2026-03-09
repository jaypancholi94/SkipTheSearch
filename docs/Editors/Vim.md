# Vim

A guide to using Vim, a powerful and configurable text editor. This documentation covers essential commands, navigation, and customization to enhance your productivity with Vim. Vim has total 12 modes.

1. **Normal mode**: For navigation and manipulation of text.
2. **Insert mode**: For inserting and editing text.
3. **Visual mode**: For selecting blocks of text.
4. **Select mode**: Similar to Visual mode but behaves like selecting text in a typical text editor.
5. **Command-line mode**: For executing commands.
6. **Ex mode**: For executing Ex commands.
7. **Replace mode**: For replacing existing text.
8. **Operator-pending mode**: For waiting for an operator command to complete.
9. **Insert Normal mode**: A temporary mode within Insert mode to execute Normal mode commands.
10. **Visual Select mode**: A combination of Visual and Select modes.
11. **Visual Replace mode**: A combination of Visual and Replace modes.
12. **Normal Operator-pending mode**: A combination of Normal and Operator-pending modes.

[[LazyVim]] is an "incredibly speedy" Neovim setup packed with an _overwhelming_ number of features you'll never use.

## Most used vim modes

1. **Normal Mode**: The default mode for navigation and text manipulation.'

- **Enter Normal Mode**: Press `Esc` from any other mode

2. **Insert Mode**: For inserting and editing text

- **Enter Insert Mode**:
- `i` insert before cursor
- `I` insert at the beginning of the line
- `a` append after cursor
- `A` append at the end of the line
- `o` open a new line below
- `O` open a new line above from Normal mode
- **Exit Insert Mode**: Press `Esc`

3. Visual Mode: For selecting blocks of text

- **Enter Visual Mode**:
- `v` character-wise selection
- `V` line-wise selection
- `Ctrl+v` block-wise selection from Normal mode
- **Exit Visual Mode**: Press `Esc`

4. **Command-line Mode**: For executing commands.

- **Enter Command-line Mode**:
- `:` for commands
- `/` for search
- `?` for reverse search from Normal mode.
- **Exit Command-line Mode**: Press `Esc` or `Enter` after typing the command.

## 📝Cheat Sheet

`<C...` : Control button

### Basics

| Key        | Description                    | Mode           |
| ---------- | ------------------------------ | -------------- |
| `:q`       | Close file                     | `Command-Line` |
| `:qa`      | Close all files                | `Command-Line` |
| `:w`       | Save                           | `Command-Line` |
| `:wq`/`:x` | Save and close file            | `Command-Line` |
| `ZZ`       | Save and quit                  | `Command-Line` |
| `:q!`/`ZQ` | Quite without checking changes | `Command-Line` |

### Editing

#### Editing

| Key     | Description                         | Mode     |
| ------- | ----------------------------------- | -------- |
| `a`     | Append                              | `Normal` |
| `A`     | Append from end of line             | `Normal` |
| `i`     | Insert                              | `Normal` |
| `o`     | Next line                           | `Normal` |
| `O`     | Previous line                       | `Normal` |
| `s`     | Delete char and insert              | `Normal` |
| `S`     | Delete line and insert              | `Normal` |
| `C`     | Delete until end of line and insert | `Normal` |
| `r`     | Replace one character               | `Normal` |
| `R`     | Enter Replace mode                  | `Normal` |
| `u`     | Undo changes                        | `Normal` |
| `<C-R>` | Redo changes                        | `Normal` |

#### Clipboard

| `x`             | Delete character            | `Normal` |
| --------------- | --------------------------- | -------- |
| `dd`            | Delete line *(Cut)*         | `Normal` |
| `yy`            | Yank line *(Copy)*          | `Normal` |
| `p`             | Paste                       | `Normal` |
| `P`             | Paste before                | `Normal` |
| `"*p` */* `"+p` | Paste from system clipboard | `Normal` |
| `"*y` */* `"+y` | Paste to system clipboard   | `Normal` |

#### Visual mode

| `v`         | Enter visual mode       | `Normal` |
| ----------- | ----------------------- | -------- |
| `V`         | Enter visual line mode  | `Normal` |
| `<C-V>`     | Enter visual block mode | `Normal` |
| `d` */* `x` | Delete selection        | `Visual` |
| `s`         | Replace selection       | `Visual` |
| `y`         | Yank selection *(Copy)* | `Visual` |

### Navigation

#### Directions

| Key                | Description       | Mode     |
| ------------------ | ----------------- | -------- |
| `h`, `j`, `k`, `l` | Arrow keys        | `Normal` |
| `<C-u>` / `<C-d>`  | Half-page up/down | `Normal` |
| `<C-B>` / `<C-F>`  | Page up/down      | `Normal` |

#### Words

| `b` / `w`  | Previous/next word        | `Normal` |
| ---------- | ------------------------- | -------- |
| `ge` / `e` | Previous/next end of word | `Normal` |

#### Line

| `0` | Start of line                    | `Normal` |
| --- | -------------------------------- | -------- |
| `^` | Start of line (after whitespace) | `Normal` |
| `$` | End of line                      | `Normal` |

#### Character

| `fj` | To highlight all occurrences of the character `j` forward and move the cursor to the first upcoming `j`, press `f`. Press `f` again to jump to the next occurrence of `j` | `Normal` |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `Fj` | To highlight all occurrences of the character `j` backward and move the cursor to the last `j`, press `f`. Press `f` again to jump to the previous occurrence of `j`      | `Normal` |

#### Document

| `gg`        | First line             | `Normal` |
| ----------- | ---------------------- | -------- |
| `G`         | Last line              | `Normal` |
| `:{number}` | Go to line {number}    | `Normal` |
| `{number}G` | Go to line {number}    | `Normal` |
| `{number}j` | Go down {number} lines | `Normal` |
| `{number}k` | Go down {number} lines | `Normal` |

#### Search

| `n` | Next matching search pattern     | `Normal` |
| --- | -------------------------------- | -------- |
| `N` | Previous match                   | `Normal` |
| `*` | Next whole word under cursor     | `Normal` |
| `#` | Previous whole word under cursor | `Normal` |

### Operators

#### Operators list

| Key  | Description                     | Mode               |
| ---- | ------------------------------- | ------------------ |
| `d`  | Delete                          | `Normal`, `Visual` |
| `y`  | Yank *(copy)*                   | `Normal`, `Visual` |
| `c`  | Change *(delete then insert)*   | `Normal`           |
| `>`  | Indent right                    | `Normal`, `Visual` |
| `<`  | Indent left                     | `Normal`, `Visual` |
| `=`  | Autoindent                      | `Normal`, `Visual` |
| `g~` | Swap case                       | `Normal`, `Visual` |
| `gU` | Uppercase                       | `Normal`, `Visual` |
| `gu` | Lowercase                       | `Normal`, `Visual` |
| `!`  | Filter through external program | `Normal`, `Visual` |

#### Examples

Combine operators with motion to use them
See: `:help motion.txt`

| Key                    | Description                               |
| ---------------------- | ----------------------------------------- |
| `d`_d_                 | *(repeat the letter)* Delete current line |
| `d`_w_                 | Delete to next word                       |
| `d`_b_                 | Delete to beginning of word               |
| _2_`dd`                | Delete 2 lines                            |
| `d`_ip_                | Delete a text object *(inside paragraph)* |
| *(in visual mode)* `d` | Delete selection                          |
