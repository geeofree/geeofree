---
tags: angular
title: 'Chapter 1: Basics'
description: Basics of components, templates, and how to get started using the CLI.
---

#### What is AngularJS?

[AngularJS](https://angular.io/) is a framework for developing web application UIs.

It provides features such as components, route management, 
form management, etc.

Angular applications are written using [TypeScript](https://www.typescriptlang.org/).

----

#### Components

Components are the basic building blocks of any Angular application. 

A component in Angular is defined as a class that is decorated with 
the `@Component` decorator and is comprised of these properties:

* **selector** the name of the component that other components can refer to.

* **template/templateUrl** the markup of the component.

* **style/styleUrl** *(optional)* the styles or design of the component

For example:

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-my-component',
  template: `<h1>Hello my component!</h1>`,
})
export class MyComponent {}
```

In order for other components to refer to the `MyComponent` component in 
their templates, we must refer to it using its **selector**.

For example:

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-another-component',
  template: `
  <app-my-component></app-my-component>
  <p>This is from another component</p>
  `,
})
export class AnotherComponent {}
```

When Angular renders `AnotherComponent` it should render:

```html
<h1>Hello my component!</h1>
<p>This is from another component</p>
```

----

#### Templates

Templates are the markup of a component and is defined by 
an extended HTML syntax (informally) called *Angular Markup* 
that allows the component class to provide data to the 
template.

There are three types of _data binding_ that can be done in a
template. These are namely:

##### Interpolation

Interpolation substitutes a value from a component's property
and is defined by the syntax {% raw %}`{{ someValue }}`{% endraw %}.

For example:

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-interpolating',
  template: `
  <p>Hi, I am {%raw%}{{ name }}{%endraw%} and I am {%raw%}{{ age }}{%endraw%} years old!</p>
  `,
})
export class InterpolatingComponent {
  name = 'Lexie'
  age = 2
}
```

Here the `name` and `age` properties in the component are _interpolated_ 
or substituted to whatever values they hold. This should in effect 
render the ff. markup:

```html
<p>Hi, I am Lexie and I am 2 years old!</p>
```

##### Property Binding

Property binding connects a component's property to an element's 
attribute.

This is defined by the ff. syntax: `[someAttribute]="someValue"`

For example we can `disable` a `<button>` or provide an `id` and 
`name` to an `<input>` using property binding:

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-property-binding',
  template: `
  <input [id]="inputID" [name]="inputID" placeholder="Enter some text">
  <button type="submit" [disable]="!canSubmit">Submit</button>
  `,
})
export class PropertyBindingComponent {
  inputID = 'myInput'
  canSubmit = false
}
```

##### Event Binding

Event binding connects methods of a component to an element's event 
handler attributes.

This is defined by the ff. syntax `(someEventHandler)="someMethod()"`.

For example:

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-event-binding',
  template: `
  <button type="button" (click)="sayHello()">Press Me</button>
  `,
})
export class EventBindingComponent {
  sayHello() {
    alert('Hello!')
  }
}
```

#### Directives

Directives provide additional behaviour such as control fllow in a 
component's template.

The most common directives that Angular provides are `*ngIf` and 
`*ngFor` which can conditionally render an element or iterate 
over items respectively.

For example:

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-directives',
  template: `
  <p *ngIf="!apples.length">There are no apples!</p>
  <ul *ngFor="let apple in apples">
    <li>{{ apple }}</li>
  </ul>
  <button type="button" (click)="addApple()">Add Apple</button>
  `,
})
export class DirectivesComponent {
  apples = []

  addApple() {
    this.apples.push('Apple')
  }
}
```

----

#### Getting Started

> **Prerequisites:** you should have the Angular CLI installed globally.
> If you don't have this yet just run `npm i -g @angular/cli`.

To generate a new Angular application run:

```shell
$ ng new <app-name>
```

To run the development server invoke:

```shell
$ npm start
```

The ff. are commands that allow you to generate different entities 
for your Angular application:

```shell
$ # Generate a new component
$ ng generate component <component-name>
$
$ # Generate a new module
$ ng generate module <module-name>
$
$ # Generate a new service
$ ng generate service <service-name>
```
