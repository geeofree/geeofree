---
title: 'Chapter 2: Variables'
description: Syntax, scoping, static variables, and constants.
---

## Basic Syntax

Variables in PHP are prefixed with a `$` character and 
are case-sensitive.

Valid variable names start with a letter followed by 
any number of letters, numbers, or underscores.

For example:

```php
<?php
$foo = "Foo";
$foo1 = "Foo1";
$da_bar = "DaBar";
$foo_Bar1 = "FooBar1";
?>
```

## Reference Assignment

Variables can be passed by reference instead of by value 
by prefixing the variable with the `&` character:

```php
<?php
$foo = "foo";
$bar = &$foo;

echo $foo; // 'foo'
echo $bar; // 'foo'

$foo = "bar";

echo $foo; // 'bar'
echo $bar; // 'bar'
?>
```

## Scoping

Functions in PHP create new scope or context for variables 
defined within them.

```php
<?php
$a = 3.14;

function my_func() {
  $a = 1.12;
  echo $a; // Uses the locally scoped $a variable.
}
  $a = 1.12;
?>
```

## Static Variables

**Static variables** are variables that do not get recreated 
on every function execution; variables are that are referred 
by reference.

For example:

```php
<?php
function increment() {
  $i = 0;
  $i++;
  return $i;
}

increment(); // 1
increment(); // 1
increment(); // 1

function static_increment() {
  static $i = 0;
  $i++;
  return $i;
}

static_increment(); // 1
static_increment(); // 2
static_increment(); // 3
?>
```

## Constants

Constants are variables that cannot be reassigned and can only 
take in scalar values or an array of scalar values.

This is declared using the `define()` function:

```php
<?php
define('PI', 3.14);
echo PI;
define('PI', 3.1420); // Error.
?>
```

Constant variables can also be defined using the `const` keyword 
which must not have a `$` prefix.

```php
<?php
const PI = 3.14;
echo PI;
PI = 3.1420; // Error.
?>
```
