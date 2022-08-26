---
title: 'Chapter 1: Basics'
description: The very basics of AngularJS and how to get started.
---

#### What is AngularJS?

[AngularJS](https://angular.io/) is a framework for developing web application UIs.

It provides features such as composable UIs, route management, 
form management, etc.

Angular applications are written using [TypeScript](https://www.typescriptlang.org/).

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

#### Templates

Templates are the markup for a component and is defined by 
an extended HTML syntax called *Angular Markup* which allows 
us to provide data from classes to the template.

There are three types _data binding_ that can be done in a
component template. These are namely:

##### Interpolation

Interpolation substitutes a value provided by the class in the template 
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

Property binding modifies the attributes of an element and is defined 
by the ff. syntax: `[someAttribute]="someValue"`

For example we can `disable` a `<button>` or provide an `id` and 
`name` to an `<input>` using property binding:

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-property-binding',
  template: `
  <input [id]="inputID" [name]="inputID" placeholder="Enter some text">
  <button type="submit" [disable]="isDisabled">Submit</button>
  `,
})
export class PropertyBindingComponent {
  inputID = 'myInput'
  isDisabled = true
}
```

##### Event Binding

Similar to _property binding_, _event binding_ modifies attributes of 
an element. The only difference however is that it can only modify 
attributes that are event handlers and must be provided with a 
method of the component.

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

The most common directive that Angular provides are `*ngIf` and `*ngFor` 
which can conditionally render an element or iterate over items 
respectively.

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
