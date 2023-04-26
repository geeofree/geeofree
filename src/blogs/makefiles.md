---
title: Makefiles
description: Basic Makefile concepts.
tags:
  - guides
---

This is a post on some basic concepts of Make that I wanted to write 
so that I can easily get myself started whenever I come back to writing 
C programs (or any other compiled programs in the future).

This isn't a complete or accurate guide. To learn more, read the official 
[GNU make](https://www.gnu.org/software/make/manual/html_node/index.html) document.

## Make

[make](https://www.gnu.org/software/make/) is a utility tool for compiling programs and can recompile programs 
that have actually change.

A **Makefile** is a configuration file that tells the **make** program what to do.

Makefiles usually contain **rules** with the syntax:

```makefile
target: pre-requisites
  recipes
```

Where:

**target** is a name of a file/list of files that will be generated.

**pre-requisites** are a list of file dependencies that will generate 
the *target* and will also be used for checking if the target should 
be recompiled.

**recipes** are a list of programs or executions to be ran.

For example:

```makefile
main: foo.c bar.c baz.c
  cc foo.c bar.c baz.c -o main
```

More formally, Makefiles are comprised of five (5) things:

1. **Explicit Rules** define target and pre-requisite files using
   concrete file names ie. `foo.c`, `bar.c`, `quas.h`
2. **Implicit Rules** are rules that `make` has to use assumptions with ie. 
   ```makefile
   # When `make` sees this:
   foo.o: foo.h
   
   # It assumes this:
   foo.o: foo.h
     cc foo.c -o foo.o
   ```
3. **Variable Definitions** are values that can be substituted. 
4. **Directives** define special instructions for `make` ie. conditionals, 
   loops, using other Makefiles, etc.
5. **Comments**, comments.

### Phony Targets

Are targets that aren't really names for files but rather *actions*, for example:

```makefile
clean: ; rm *.o main

# Define the `clean` target as a phony target
.PHONY: clean
```

### Variables

The syntax for defining variables is as follows:

```makefile
VARIABLE_NAME := VALUE
```

### Pre-Requisite Types

There are two (2) types of pre-requisites, namely:

```makefile
target: normal-prerequisites | order-only-prerequisites
  recipe
```

**normal-prerequisites** are what have been defined previously while 
**order-only-prerequisites** are pre-requisites that are not checked 
for the condition of recompiling the target.

This is useful if for example, there are object files that are 
needed to be put under a specific directory:

```makefile
# Define the directories
SRC_DIR := src
OBJECT_DIR := objects

# The order-only-prerequisite containing the objects directory 
# will ensure that it is created but will not be used to calculate 
# the condition to recompile the target.
$(OBJECT_DIR)/foo.o: $(SRC_DIR)/foo.c | $(OBJECT_DIR)
  cc $(SRC_DIR)/foo.c -o $(OBJECT_DIR)/foo.o

# Create the directory
$(OBJECT_DIR):
  mkdir -p $(OBJECT_DIR)
```

### Automatic Variables

[Automatic Variables](https://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html#Automatic-Variables) are special variables that hold values defined in a 
rule, a common use case is retrieving values from a [wildcard](#wildcards) definition.

### Wildcards

Wildcards can be used to match files using a pattern, same as in the 
shell environment.

```makefile
main: *.c
  cc $^ -o main
```

Rules can expand wildcards if they were defined within the rule but will not 
get expanded if the wildcard string is provided through a variable, for example:

```makefile
SOURCES := *.c

main: $(SOURCES)
  cc $^ -o main
```

This will result in a literal string `*.c` and will not get expanded.

To fix this, we can use the [wildcard](#wildcard-function) function:

```makefile
SOURCES := $(wildcard *.c)

main: $(SOURCES)
  cc $^ -o main
```

### Text Manipulation Functions

Make provides [utility functions](https://www.gnu.org/software/make/manual/html_node/Functions.html#Functions) for manipulating text.

#### Wildcard Function

The `wildcard` function expands wildcard texts.

```makefile
SOURCES := $(wildcard *.c)

all: ; $(info $(SOURCES))
```

#### String Substitution

The `patsubst` function replaces patterns of strings into a 
different string.

It has the syntax:

```makefile
$(patsubst pattern,replacement,text)
```

For example:

```makefile
SUBST := $(patsubst ea,ee,neat beat meat)

# Prints: neet beet meet
all: ; $(info $(SUBST))
```

### A *Complicated* Example

The following is a Makefile that compiles a project where:

- Files under `src/` contain C and header files.
- Files under `build/` contain object files generated from the source 
  file and the executable file called `main`

```makefile
SRC_DIR := src
BUILD_DIR := build

SOURCES := $(wildcard $(SRC_DIR)/*.c)
OBJECTS := $(patsubst $(SRC_DIR)/%.c,$(BUILD_DIR)/%.o,$(SOURCES))

TARGET := $(BUILD_DIR)/main

CC := cc
CFLAGS := -Wall -Werror -Wextra

all: $(TARGET)

$(TARGET): $(OBJECTS) | $(BIN_DIR)
	$(CC) $(CFLAGS) -o $@ $^

$(BUILD_DIR)/%.o: $(SRC_DIR)/%.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR): ; mkdir -p build
$(BIN_DIR): ; mkdir -p bin

clean: ; rm -r $(BUILD_DIR)

.PHONY: all clean
```
