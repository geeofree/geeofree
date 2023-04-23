---
title: "Some Vim Commands"
description: "A list of neat vim commands that I keep forgetting about."
---

## Text Editing

### Toggling letter cases

| Command     | Description                                            |
|-------------|--------------------------------------------------------|
| `~`         | Toggle the character's letter casing under the cursor. |
| `g~~`       | Toggle letter casing of all characters in a line.      |
| `{Visual}U` | Make visual selection texts uppercase.                 |
| `gUU`       | Make all characters in a line uppercased.              |
| `guu`       | Make all characters in a line lowercased.              |

### Incrementing/Decrementing

| Command            | Description                                             |
|--------------------|---------------------------------------------------------|
| `Ctrl-A`           | Increment a number under the cursor.                    |
| `Ctrl-X`           | Decrement a number under the cursor.                    |
| `{Visual}g Ctrl-A` | Monotonically increase the numbers in visual selection. |
| `{Visual}g Ctrl-X` | Monotonically decrease the numbers in visual selection. |

### Search/Replace

| Command     | Description                          |
|-------------|--------------------------------------|
| `:s` or `&` | Repeat last substitute.              |
| `g&`        | Repeat last substitute on all lines. |

## Motion

### Line motions

| Command    | Description                                              |
|------------|----------------------------------------------------------|
| `f{char}`  | Moves the cursor to the first occurance of the `{char}`. |
| `;`        | Repeat latest `f`, `t,` `F`, or `T` jump command.        |
| `,`        | Converse of `;`.                                         |
| `:[range]` | Jump to line at `[range]`.                               |

### Jumps

| Command                            | Description                                         |
|------------------------------------|-----------------------------------------------------|
| `:ju`                              | View jump list stack.                               |
| `Ctrl-I`                           | Go to next cursor position in the jump list.        |
| `{count}Ctrl-O` or `{count}Ctrl-I` | Go to cursor position in the jump list at {count}. |
