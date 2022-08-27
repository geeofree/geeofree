---
title: 'Chapter 1: Types'
description: PHP primitive types and their syntax.
---

## Primitive Types

There are about 10 types available in PHP which are namely:

### Scalar

* `bool`
* `int`
* `float`
* `string`

### Compound

* `array`
* `object`
* `callable`
* `iterable`

### Special

* `resource`
* `NULL`

## Boolean

Truth values. To specificy a `bool` literal use the `true` or `false`
constants (both are case-insensitive):

```php
<?php
$is_working = True;
$is_disabled = FALSE;
?>
```

When converting values to a `bool` the ff. values are considered 
`false`:

* `false`
* `0`
* `0.0` or `-0.0`
* the empty string: `""` or `''`
* the character zero: `"0"` or `'0'`
* arrays with no elements
* `NULL`

## Integer

Values which are positive and negative numbers as well as `0`.

These can be represented in either decimal, hexadecimal, 
octal, or binary:

```php
<?php
$a = 1234; // decimal number
$a = 0123; // octal number (equivalent to 83 decimal)
$a = 0o123; // octal number (as of PHP 8.1.0)
$a = 0x1A; // hexadecimal number (equivalent to 26 decimal)
$a = 0b11111111; // binary number (equivalent to 255 decimal)
$a = 1_234_567; // decimal number (as of PHP 7.4.0)
?>
```

> Example taken directly from the [Official Docs](https://www.php.net/manual/en/language.types.integer.php#example-33).

## Float

Represents `Real Numbers` and is defined with the ff. syntax:

```php
<?php
$a = 1.234; 
$b = 1.2e3; 
$c = 7E-10;
$d = 1_234.567; // as of PHP 7.4.0
?>
```

> [Official Docs Example](https://www.php.net/manual/en/language.types.float.php)

## Strings

Represents a sequence of characters and can be denoted using:

* Single quotes
* Double quotes
* Heredoc
* Nowdoc

PHP follows the same string semantics as bash ie. double quotes 
expand values while single quotes are literals.

## Arrays

An **ordered map**: key/value entries are ordered in sequence and 
is denoted using the `array()` function.

For example:

```php
<?php
$cart = array(
  "fruit" => "banana",
  "cleaning_product" => "soap",
  "condiment" => "ketchup"
);
?>
```

A shorthand syntax also exists which is denoted with `[]`:

```php
<?php
$cart = [
  "fruit" => "banana",
  "cleaning_product" => "soap",
  "condiment" => "ketchup"
];
?>
```

When keys are omitted PHP will automatically assign numeric 
keys in sequence (incrementing from the largest previously 
used int key) on the instance:

```php
<?php
$fruits = ["apple", "banana", "canteloupe"];
$fruits[0]; // "apple"
$fruits[1]; // "banana"
$fruits[2]; // "canteloupe"
?>
```

## Iterables

Is a newly defined type in PHP which are any objects that implement 
the `Traversable` interface (an array for example).

This can be operated with the `foreach` or `yield from` expression in 
a function generator.

```php
<?php
$squares = [1, 4, 9, 16, 25];

forreach ($squares as $square) {
  // do something
}
?>
```

## Enums

Provides a set of possible values.

```php
<?php
enum Color {
  case Red;
  case Green;
  case Blue;
}

function do_something(Color $color) {
  // do something here.
}

do_something(Color::Blue);
?>
```

## Null

Represents _no value_. A variable is considered `null` iff.:

* it has been assigned as `null`
* it is not set to any value
* it was called with `unset()`

## Type Declarations

Functions parameters and its return value can be specified with 
types using the following syntax:

```php
<?php
function someFunc(TypeOne argOne, TypeTwo argTwo, ..., TypeN argN): returnType {
  // body goes here.
}
?>
```

For example:

```php
<?php
function add(int a, int b): int {
  return a + b;
}
?>
```

