---
title: 'Chapter 6: Namespaces'
description: Grouping modules using namespaces.
---

## Namespaces

A _namespace_ groups constants, classes, and functions in a PHP 
module and is used to prevent name collisions in a PHP application.

```php
<?php
// core/http.php
namespace Core\Http;

class Request {}
class Response {}
?>
```

Usage:

```php
<?php
require_once 'core/http.php';

$request = new Core\Http\Request;
$response = new Core\Http\Response;
?>
```

## Terminology

| Term                   | Description                                       | Example          |
|------------------------|---------------------------------------------------|------------------|
| _Unqualified Name_     | No namespace definition.                          | `foo()`          |
| _Qualified Name_       | Specified with a namespace.                       | `Path\To\foo()`  |
| _Fully Qualified Name_ | Specifies a namespace in the current global space | `\Path\To\foo()` |

## Multiple Namespaces

Multiple namespaces can be defined in the same PHP module like so:

```php
<?php
namespace Foo {
  const THING = 'thing';
  function my_function() {}
  class MyClass {}
}

namespace Bar {
  const THING = 'thing';
  function my_function() {}
  class MyClass {}
}
?>
```

Note that if multiple namespaces are defined in a module then non-namespace 
code are disallowed within that module.

In order to write global variables when multiple namespaces are defined use 
the anonymouse namespace definition:

```php
<?php
namespace Foo {
  // stuff under Foo namespace goes here
}

namespace Bar {
  // stuff under Bar namespace goes here
}

namespace {
  // global declarations go here
}
?>
```

## Namespace Resolution

```php
<?php
// foobarbaz.php
namespace Foo\Bar\Baz;

const THING = 'thing';
function foo() {}
class Foo() {}
?>
```

```php
<?php
// foobar.php
namespace Foo\Bar;
require_once 'foobarbaz.php';

const THING = 'thing';
function foo() {}
class Foo() {}

// Unqualified Name: Resolves to Foo\Bar\*
foo();
$my_foo = new Foo;
echo THING;

// Qualified Name: Resolves to Foo\Bar\Baz\*
Baz\foo();
$my_foo = new Baz\Foo;
echo Baz\THING;

// Fully Qualified Name: Resolves to Foo\Bar\*
\Foo\Bar\foo();
$my_foo = new \Foo\Bar\Foo;
echo \Foo\Bar\THING;
?>
```

## Namespace Aliasing/Importing

The `use` keyword can be used to alias/import namespaced constants, 
functions, or classes:

```php
<?php
use Path\To\MyClass as Another;
use Path\To\MyClass; // Same as `use Path\To\MyClass as MyClass`.

// Importing a global class
use SomeClass;

// Importing a function
use function Path\To\some_function;
use function Path\To\some_function as my_function;

// Importing a constant
use const Path\To\SOME_CONSTANT;
?>
```

Namespace imports/aliases can also be grouped:

```php
<?php
use Path\To\{Foo, Bar, Baz};
?>
```
