---
title: 'Chapter 3: Components'
description: Components and templates in-depth.
---

## Lifecycles

Angular components (and directives) have lifecycles that 
start after the component class is instantiated and once 
the view has been rendered.

There are about eight(8) lifecycle events that an Angular 
component goes into that we can use, these are namely:

| Lifecycle Name            | Occurs At                                                                                  |
|---------------------------|--------------------------------------------------------------------------------------------|
| `ngOnChanges()`           | Occurs on every bound input change                                                         |
| `ngOnInit()`              | Occurs once and after `ngOnChanges()` (if a bound input exists)                            |
| `ngDoCheck()`             | Occurs after every `ngOnChanges()` or after `ngOnInit()` on its first run                  |
| `ngAfterContentInit()`    | Occurs once after the first `ngDoCheck()`                                                  |
| `ngAfterContentChecked()` | Occurs after every `ngDoCheck()` or after `ngAfterContentInit()` on its first run          |
| `ngAfterViewInit()`       | Occurs once after the first `ngAfterContentChecked()`                                      |
| `ngAfterViewChecked()`    | Occurs after every `ngAfterContentChecked()` or after `ngAfterViewInit()` on its first run |
| `ngOnDestroy()`           | Occurs immediately before the component or directive is destroyed.                         |

## @Input()

Components can expose properties to take inputs from a 
parent component using the `@Input` property decorator:

```ts
// child.component.ts
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-child-component',
  template: `
  <input type="text" [value]="inputValue">
  `
})
class ChildComponent {
  @Input() inputValue = '';
}
```

```ts
// parent.component.ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-parent-component',
  template: `
  <app-child-component [inputValue]="personName">
  `
})
class ParentComponent {
  personName = 'John Doe'
}
```

## @Output()

Components can also expose event handlers that parent components 
can use to update their data.

This requires the use of the `EventEmitter` class on the child 
component:

```ts
// child.component.ts
import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-child-component',
  template: `
  <button type="button" (click)="onClick.emit(message)">Send Message</button>
  `
})
class ChildComponent {
  @Output() onClick = new EventEmitter();
  message = 'Hello world!'
}
```

Using this in a parent component, we can get the emitted `message` value 
through the special `$event` variable:

```ts
// parent.component.ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-parent-component',
  template: `
  <app-child-component (onClick)="handleClick($event)">
  `
})
class ParentComponent {
  handleClick(message) {
    alert(`The message says: ${message}`)
  }
}
```

## Content Projection

**Content Projection** allows components to define places in 
the template that other views can render themselves into.

This is through the use of the `<ng-content>` directive.

For example:

```ts
// dashboard.component.ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-dashboard',
  template: `
  <nav>
    <a href="#foo">Foo</a>
    <a href="#bar">Bar</a>
    <a href="#baz">Baz</a>
  </nav>
  
  <main>
    <ng-content></ng-content>
  </main>
  `
})
class DashboardComponent {}
```

Then, we can wrap our other components using the dashboard 
component like so:

```ts
// foo.component.ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-dashboard',
  template: `
  <app-dashboard>
    <h1>Hello from foo!</h1>
    <p>This is foo's description</p>
  </app-dashboard>
  `
})
class FooComponent {}
```

This should render the ff. markup:

```html
<nav>
  <a href="#foo">Foo</a>
  <a href="#bar">Bar</a>
  <a href="#baz">Baz</a>
</nav>

<main>
  <h1>Hello from foo!</h1>
  <p>This is foo's description</p>
</main>
```

## Template Variables

We can refer to instances of elements in a template with 
**Template Variables** using the ff. syntax: `<someElement #templateVariable></someElement>`

For example:

```html
<input #personName placeholder="Type your name">
<p>{%raw%}{{ personName.value }}{%endraw%}</p>
```

Template variables have lexical scoping: meaning variables 
cannot be accessed outside of its scope.

For example the `*ngIf` directive creates a new scope. If a 
template variable were to be declared in this scope, then 
elements outside of it cannot access it, like so:

```html
<h1 *ngIf="isFoo" #heading>...</h1>
<p>{%raw%}{{ heading.textContent }}{%endraw%}</p>
```

Here, the `<p>` element cannot access the `#heading` template 
variable because it is scoped under child of the `<h1>` 
element only.
