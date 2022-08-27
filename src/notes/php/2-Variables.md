---
title: 'Chapter 2: Variables'
description: Syntax, scoping, and static.
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
by prefixing the variable `&` character:

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
on every function execution.

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

Constant variables are defined using the `const` keyword and must 
not have a `$` prefix.

```php
<?php
const PI = 3.14;
echo PI;
PI = 3.1420; // Error.
?>
```
