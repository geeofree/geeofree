---
title: GNU Makefiles
description: Everything I know about GNU Makefiles.
tags:
  - guides
---

> This page contains a summarization and verbatim of most parts from the 
> official GNU online document.
>
> I put this up to easily use as a reference for GNU Make so only the 
> parts that I deem important will be documented.
> 
> Please refer to the official docs for a more thorough guide on GNU
> Make.
> 
> Enjoy!

# Make

> The `make` utility automatically determines which pieces of a large 
> program need to be recompiled and issues commands to recompile them.

A `Makefile` tells `make` how to compile and link a program.

## Rules

A simple Makefile consists of *rules* with the ff. shape:

```txt
target ... : prerequisites ...
          recipe
          ...
          ...
```

A `target` is usually a name of a file that is generated by a program; examples 
of targets are executables or object files. A `target` can also be a name of an 
action to be carried out, such as `clean` (see [Phony targets](https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html)).

> Targets that do not refer to files but only run actions are called 
> *phony targets*.

A `prerequisite` is a file that is used as input to create the target. A target 
often depends on several files.

A `recipe` is an action that make carries out. A recipe may have more than one 
command, either on the same line or on each of its own line.

> **Please note**: That a tab character is necessary at the beginning of every 
> recipe line!

Usually a `recipe` is in a rule with prerequisites and serves to create a target 
file if any other prerequisites change. However, the rule that specifies a 
recipe for the target need not have any prerequisites.

A *rule*, then, explains how and when to remake certain files which are the targets 
of a particular rule.

`make` carries out the recipe on the prerequisites to create or update the target.

A *rule* can also explain how and when to carry out an action.

## A simple Makefile

```bash
exe: main.o module_a.o module_b.o module_c.o
    cc -o exe main.o module_a.o module_b.o module_c.o

main.o: main.c defs.h
      cc -c main.c

module_a.o: module_a.c module_a.h
      cc -c module_a.c

module_b.o: module_b.c module_b.h
      cc -c module_b.c

module_c.o: module_c.c module_c.h
      cc -c module_c.c

# Clean is a phony target that only runs a recipe
clean:
      rm exe main.o module_a.o module_b.o module_c.o
```

## How make processes a Makefile
By default, `make` starts with the very first target (not targets whose names starts 
with `.`, unless they contain one or more `/`). This is called the *default goal*.

**Goals** are targets that `make` strives to ultimately update. This can be overriden.

## Variables in Makefiles
Variables in `Makefiles` allow text strings to be substituted throughout the file.

To define a variable:

```bash
objects = main.o module_a.o module_b.o module_c.o
```

To use a variable, express the variable like so `$(variable)`:

```bash
objects = main.o module_a.o module_b.o module_c.o

exe: $(objects)
    cc -o exe $(objects)
    
main.o: main.c defs.h
      cc -c main.c

module_a.o: module_a.c module_a.h
      cc -c module_a.c

module_b.o: module_b.c module_b.h
      cc -c module_b.c

module_c.o: module_c.c module_c.h
      cc -c module_c.c

clean:
      rm exe $(objects)
```

## Letting make deduce the recipes
Make can implicitly compile object files based on their target names.

For example, make will automatically generate the recipe `cc -c main.c -o main.o` 
if the target name is provided as `main.o`, it will also implicitly provide `main.c` 
as one of the prerequisites.

This way we can omit certain values within the recipes and prerequisites sections.

```bash
objects = main.o module_a.o module_b.o module_c.o

exe: $(objects)
    cc -o exe $(objects)
    
module_a.o: module_a.h

module_b.o: module_b.h

module_c.o: module_c.h

clean:
      rm exe $(objects)
```
