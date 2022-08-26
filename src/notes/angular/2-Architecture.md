---
title: 'Chapter 2: Architecture'
description: Angular's module system, services, and its usage of dependency injection.
---

![Angular Architecture](/images/figures/angular/ng-architecture-overview.png)

> Figure 1: An overview of Angular's architecture. 
> Image taken from [here](https://angular.io/guide/architecture#whats-next).

#### NgModules

Angular uses a module system called [NgModules](https://angular.io/guide/ngmodules) that provides a 
_compilation context_ for components (or directives).

This helps organize information that components can use in an 
isolated manner.

A module is a class that is decorated with the `@Modules` decorator 
and has these ff. properties:

| Property       | Description                                                                   |
|----------------|-------------------------------------------------------------------------------|
| `declarations` | Components or directives that the module provides a context to.               |
| `imports`      | Modules that can be used by entities declared in the `declarations` property. |
| `exports`      | Modules that other consuming modules can use in their `imports` statement.    |
| `providers`    | **Services** that entities in the `declarations` property can use.            |
| `bootstrap`    | The entry component(s) for an Angular application.                            |

> **NOTE:** that `bootstrap` should only be used by the **Root Module**.

Every Angular application must have at least one(1) **Root Module** that 
essentially bootstraps all other modules within the system.

In most cases the **Root Module** is referred to as the `AppModule` class 
and is found in the generated `app.module.ts` file.

----

#### Dependency Injection

[Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection) is a design pattern where an instance of an object 
is provided to another object as an argument to it, granted the class of 
the instance implements some interface that the consuming object defines. 

Angular uses this pattern to provide or inject **Services** to its components 
(or to other **Services**).

----

#### Services

**Services** are classes that holds values, functions, or features that an application 
needs.

This is useful to make the component lean and enable it to be solely responsible for 
data binding to its template only; components should use a service for things that 
doesn't concern the view or application logic.

A class is defined as a service using the `@Injectable` decorator.
