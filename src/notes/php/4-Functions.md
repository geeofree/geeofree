---
title: 'Chapter 4: Functions'
description: Notable syntax and semantics about functions in PHP.
---

## Function Scoping

In PHP, all functions (and classes) are global regardless if they 
were defined within another function's scope.

```php
<?php
function foo() {
  function bar() {
    echo 'This is bar';
  }
}

foo();

// This can only be accessed once foo has executed.
bar();
?>
```

## Variable Functions

PHP allows variables to be invoked based on whatever value 
it evaluates to (this should be mostly strings).

```php
<?php
function my_function() {
  echo 'hello there';
}

$foo = 'my_function';
$foo();
?>
```

## Arguments

```php
<?php
// Default Values
function foo($arg = null) {
  /** body goes here */
}

// Variable-length arguments
function foo($a, $b, ...$rest) {
  /** body goes here */
}

// Named parameters
function foo($bar) {
  /** body goes here */
}
foo(bar: /** some value goes here */)
?>
```

## Anonymous & Arrow Functions

```php
<?php
// Anonymous Function
some_function(function() {
  /** do something */
})

// Arrow Function
some_function(() => {
  /** do something */
})
?>
```
