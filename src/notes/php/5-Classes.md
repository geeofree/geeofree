---
title: 'Chapter 5: Classes'
description: OOP in PHP.
---

## Basic Syntax

```php
<?php
class Dog {
  public string $name;
  public string $breed;
  public string $age;
  
  function __construct(string $name, string $breed, int $age) {
    $this->name = $name;
    $this->breed = $breed;
    $this->age = $age;
  }
  
  function sayHello() {
    echo "Hello. My name is $this->name, a $this->breed, and I'm $this->age year(s) old.";
  }
}

$lexie = new Dog(name: 'Lexie', age: 2, breed: 'Shih Tzu');
$lexie->sayHello();
?>
```

## Visibility

Properties, methods, and class constants may be modified using 
the `public`, `private`, or `protected` visibility modifiers.

The `public` visibility modifier is used by default if none are 
explicitly defined.

## Separate Property And Method Namespace

Properties and methods live in separate _namespaces_ ie. 
the same name can be used to define a property and a method.

```php
<?php
class Sample {
  public string $foo = 'Foo';
  
  function foo() {
    echo "foo is: $this->foo";
  }
}

$sample = new Sample();
echo $sample->foo;
$sample->foo();
?>
```

## Inheritance

```php
<?php
class Dog {
  function bark() {
    echo 'Bark! Bark!';
  }
}

class ShihTzu extends Dog {
  function bark() {
    echo 'Ruff! Ruff';
  }
}
?>
```

Any constants, properties, or methods from the parent 
class can be referred to by the child class using the 
`parent` keyword:

```php
<?php
class Dog {
  function bark() {
    echo 'Bark! Bark!';
  }
}

class ShihTzu extends Dog {
  function parentBark() {
    parent::bark();
  }
  
  function bark() {
    echo 'Ruff! Ruff';
  }
}
?>
```

The `final` attribute modifier may be used to define 
an attribute that cannot be overriden.

## Class Name Resolution

The name of a class can be retrieved by using the special 
class constant `::class`.

```php
<?php
class MyClass {}
echo MyClass::class; // Outputs 'MyClass'
?>
```

> **NOTE:** The name of a class is generated at compile time.

## Safe Traversal

A syntax that allows for traversing nested class attributes 
without producing a runtime error if any attribute path 
is `NULL`.

```php
<?php
$ownerName = $dog?->getOwner()?->name;
?>
```

## Constants

```php
<?php
class Example {
  const FOO = 'foo';
}

echo Example::FOO;

$example = new Example();
echo $example::FOO;
?>
```

## Scope Resolution

The double colon `::` expression allows retrieval of a class' 
static, constant, and overridden properties or methods of a 
parent class.

```php
<?php
class Sample {
  static string $thing = 'Thing';
  
  static function getThing() {
    echo self::$thing;
  }
}

echo Sample::$thing;
Sample::getThing();

$sample = new Sample;
echo $sample::$thing;
$sample::getThing();
?>
```

## Traits

Traits are _reusable attributes_ that can be inserted into class 
definitions.

Traits work the same as classes but promotes composability over 
inheritance (horizontal vs. vertical composition).

```php
<?php
trait Foo {
  public string $foo = 'foo';
  
  function foo() {
    echo $this->foo;
  }
}

trait Bar {
  public string $bar = 'bar';
  
  function bar() {
    echo $this->bar;
  }
}

class Sample {
  use Foo, Bar;
}

$sample = new Sample;
$sample->foo();
$sample->bar();
```

### Trait Precedence

The precedence of overriden attributes in a child class 
are as follows:

1. Child class
2. Trait
3. Parent class

### Conflict Resolution

If 2 or more traits define attributes with the same name, 
the `insteadof` and `as` operators can be used to resolve 
the name conflict issue:

```php
<?php
trait Foo {
  function getValue() {}
  function setValue() {}
}

trait Bar {
  function getValue() {}
  function setValue() {}
}

class Sample {
  use Foo, Bar {
    Bar::getValue insteadof Foo;
    Foo::setValue insteadof Bar;
    Bar::setValue as setval;
  }
}
?>
```
