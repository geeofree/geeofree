---
tags: blogs
title: TypeScript Basics
description: Everything you need to know to get started with TypeScript.
---

### Contents
* [What is TypeScript?](#what-is-typescript%3F)
* [Declaring Types](#declaring-types)
  * [Type Primitives](#type-primitives)
  * [Arrays](#arrays)
  * [Objects](#objects)
  * [Literal Types](#literal-types)
  * [The _any_ type](#the-any-type)
  * [Type Inferrence](#type-inferrence)
* [Typing Functions](#typing-functions)
* [Type Operators](#type-operators)
  * [Union Operator](#union-operator)
  * [Intersection Operator](#intersection-operator)
* [Typing Aliases](#type-aliases)
* [Typing Interfaces](#type-interfaces)
* [Generics](#generics)
  * [Generic Types](#generic-types)
* [More Resources](#more-resources)

### What is TypeScript?

[TypeScript](https://www.typescriptlang.org/) is a statically typed superset of JavaScript.

It allows us to explicitly define what each of our objects 
are and provides us with information of what data we're 
working with during development.

### Declaring Types

In order to declare types for variables in TypeScript we 
use the following syntax:

```ts
let name: string = 'Lexie'
```

Here we assign the variable `name` to a `string` type. If 
we reassign this to a value of a different type, say the number 
`5`, TypeScript will show an error:

```ts
name = 5 // Error, `number` is not a valid `string` type.
```

#### Type Primitives

```ts
let isDog: boolean = true     // `true` or `false` values
let age: number = 2           // `integer` or `floating` values
let name: string = 'Lexie'    // string values (🤷)
let nothing: void = undefined // undefined value
```

#### Arrays

There are two syntaxes to define arrays in TypeScript:

```ts
let fib: number[] = [1, 2, 3, 5, 8]
let names: string[] = ['Lexie', 'Daisy', 'Mohgwyn']

// OR

let fib: Array<number> = [1, 2, 3, 5, 8]
let names: Array<string> = ['Lexie', 'Daisy', 'Mohgwyn']
```

#### Objects

The syntax for defining object types is as follows:

```ts
{ propOne: typeOfPropOne, propTwo: typeOfPropTwo, ..., propN: typeOfPropN }
```

For example:

```ts
let dog: { name: string, age: number } = {
  name: 'Lexie',
  age: 2,
}
```

We can also define _optional properties_ like so:

```ts
let dog: { name: string, age: number, breed?: string } = {
  name: 'Lexie',
  age: 2,
}
```

Here the `breed` property is an _optional property_ meaning 
we don't have to assign it a value, but if we do, it must 
be a `string` type.

#### Literal Types

In TypeScript, we can use concrete values to assign objects with. 

For example:

```ts
let name: 'Lexie'       // `name` is defined with a literal string type `'Lexie'`
name = 'Lexie'          // Okay: 'Lexie' === 'Lexie'
name = 'Something else' // Not okay: 'Lexie' !== 'Something else'

let one: 1
one = 1 // Okay
one = 2 // Not okay.
```

#### The _any_ type

The `any` type is a type that accepts any value. Basically 
removing type checking for an object.

```ts
let foo: any;

foo = true
foo = 3.14
foo = 'Hello'
foo = [1, 2, 4, 8, 16]
foo = { quas: 1, wex: 2, exort: 3 }

// etc.
```

#### Type Inferrence

We can omit defining types explicitly and still have TypeScript assign 
a type to an object due to _type inferrence_: meaning TypeScript will make 
a (very good) guess of what type an object is based on certain information.

For example:

```ts
let name = 'Lexie'
name = 'Daisy' // Okay.
name = 3.14    // Error, `number` is not a valid `string` type.
```

Here, even though the type wasn't defined for the `name` variable, 
TypeScript still assigned it with a `string` type because of the 
value that the variable was initialized to.

So when `name` was assigned with the value `'Daisy'`, TypeScript 
didn't show errors because `'Daisy'` is a valid `string` type.

When `name` was assigned with the value `3.14` however, TypeScript
showed an error because `name` was assigned a `number` value.

### Typing Functions

To declare a type for a function, we use the ff. syntax:

```ts
function functionName(argOne: typeOfArgOne, argTwo: typeOfArgTwo, ..., argN: typeOfArgN): returnType {
  // body of function goes here.
}
```

For arrow functions:

```ts
let functionName = (argOne: typeOfArgOne, argTwo: typeOfArgTwo, ..., argN: typeOfArgN): returnType => {
  // body of function goes here.
}
```

For example:

```ts
function greet(name: string): void {
  console.log(`Hello, ${name}`)
}

let add = (a: number, b: number): number => a + b
```

We can omit the _returnType_ and have TypeScript infer its type instead:

```ts
let add = (a: number, b: number) => a + b    // Returns a `number` type
let concat = (a: string, b: number) => a + b // Returns a `string` type
```

### Type Operators

In TypeScript there are two type operators that we can use to compose types 
with, these are namely:

#### Union Operator

An operator that assigns exactly one(1) type that is matched in a set of two 
or more types.

The syntax for this operator is as follows:

```ts
typeOne | typeTwo | ... | typeN
```

For example:

```ts
let nameOrAge: string | number;

nameOrAge = 'Lexie' // Okay.
nameOrAge = 2       // Also okay.
nameOrAge = true    // Error, `boolean` is not a valid `string` or `number` type.
```

#### Intersection Operator

An operator that combines properties of two or more types.

The syntax for this operator is as follows:

```ts
typeOne & typeTwo & ... & typeN
```

For example:

```ts
let dog: { name: string, age: number } & { breed: string, gender?: string } = {
  name: 'Lexie',
  age: 2,
  breed: 'Shih Tzu',
}
```

### Type Aliases

We can define new types using **Type Aliases**.

The syntax for this is as follows:

```ts
type NameOfThisType = theType
```

For example:

```ts
type NameOrAge = string | number
let nameOrAge: NameOrAge;

nameOrAge = 'Lexie'
nameOrAge = 2
nameOrAge = false // Error, `boolean` is not a valid `NameOrAge` type

type Color = 'red' | 'green' | 'blue'
let myColor: Color;

myColor = 'red'
myColor = 'green'
myColor = 'blue'
myColor = 'magenta' // Error, 'magenta' is not a valid `Color` type

type Dog = {
  name: string,
  age: number,
  breed: string,
}

let dog: Dog = {
  name: 'Lexie',
  age: 2,
  breed: 'Shih Tzu',
  furColors: ['black', 'white, 'brown'], // Error, `furColors` is not in type `Dog`
}
```

### Type Interfaces

Similar to a **Type Alias**, a **Type Interface** allows us to define new types. But 
unlike a Type Alias, a Type Interface can only define types with a set of properties.

The syntax for this is as follows:

```ts
interface MyInterface {
  propOne: typeOfPropOne
  propTwo: typeOfPropTwo
  ...
  propN: typeOfPropN
}
```

For example:

```ts
interface Dog {
  name: string,
  age: number,
  breed: string,
}

let dog: Dog = {
  name: 'Lexie',
  age: 2,
  breed: 'Shih Tzu',
  furColors: ['black', 'white, 'brown'], // Error, `furColors` is not in type `Dog`
}
```

> **NOTE:** There are a few more differences to aliases and interfaces. If you want 
> to learn more about this please read TypeScript's Official Docs regarding 
> [Aliases vs. Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

### Generics

Say we have a function like the [Identity Function](https://en.wikipedia.org/wiki/Identity_function) which simply returns whatever input 
we provide to it:

```ts
let identity = (arg) => arg
```

How should we type this?

If, for example, we provide it with a type like `number`.

```ts
let identity = (arg: number): number => arg
```

Then this will only account for the `number` values; neglecting all other value types 
such as `strings`, `booleans`, `arrays`, etc.

If we type it with the `any` type however, then we can match all the types.

```ts
let identity = (arg: any): any => arg
```

When we do this though, we add back ambiguity to our code: giving rise to questions 
such as _When we input it a `number` value, what will it give us?_

To mitigate this problem, we can use **Generic Types**.

#### Generic Types

TypeScript provides the **Generic** type: a type that allows us to define the type 
of an object based on how we use it.

The syntax for this for a function is as follows:

```ts
function myFunction<NameOfGeneric>(argOne: typeOfArgOne, ..., argN: typeOfArgN): returnType {
  // body of the function goes here
}
```

For arrow functions:

```ts
let myFunction = <NameOfGeneric,>(argOne: typeOfArgOne, ..., argN: typeOfArgN): returnType => {
  // body of the function goes here
}
```

> **NOTE** the `,` after the Generic name declaration.

The **Generic** type can be assigned to arguments, the return type, or to any objects 
within the function.

Using this on the `identity` function example:

```ts
let identity = <T,>(arg: T): T => arg
```

Now, when we use the `identity` function we must define what type the Generic type `T` is,
like so:

```ts
// Okay.
identity<boolean>(false)
identity<number>(5)
identity<string>('Hello')
identity<number[]>([1, 2, 3])
identity<{ name: string }>({ name: 'Lexie' })

// Not okay.
identity<boolean>('Hello') // Error, `string` is not a valid `boolean` type
```

### More Resources

If you want to learn more about how to use TypeScript and all of its other features, 
please take a look at the [Official TypeScript Docs](https://www.typescriptlang.org/docs/)

Thanks for reading.
