---
title: 'Chapter 5: Routing'
description: Route management in Angular.
---

## Basics

Angular provides a module that allows for components to be 
rendered based on the current URL path.

To do this, a _routing module_ must be created that imports 
and exports the `RouterModule` like so:

```ts
// app-routing.module.ts
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [RouterModule.forRoot(/** Define routes here */)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Routes

A route is an object that has at least a `path` and a `component` 
property:

```ts
// app-routing.module.ts
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from '../components/home.component'
import { SignInComponent } from '../components/sign-in.component'
import { AboutComponent } from '../components/about.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'about', component: AboutComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

Routes may also be nested using the `children` property:

```ts
// app-routing.module.ts
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from '../components/home.component'
import { AdminComponent } from '../components/admin/admin.component'
import { AdminUsersComponent } from '../components/admin/admin-users.component'
import { AdminSettingsComponent } from '../components/admin/admin-settings.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'users', component: AdminUsersComponent },
      { path: 'settings', component: AdminSettingsComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

This should generate the ff. URL paths with its associated 
component:

| URL Path          | Component                |
|-------------------|--------------------------|
| `/`               | `HomeComponent`          |
| `/admin`          | `AdminComponent`         |
| `/admin/users`    | `AdminUsersComponent`    |
| `/admin/settings` | `AdminSettingsComponent` |

> **NOTE:** that routes are matched from left-to-right meaning 
> if there are similar route paths, then the route in the
> lower index is matched first.

## Path Matching & Redirects

Route paths can be matched either using `prefix` or `full`:

| Matching Strategy | Description                                                                         |
|-------------------|-------------------------------------------------------------------------------------|
| `prefix`          | Default matching strategy. Prepends child route paths with its parent's route path. |
| `full`            | Matches the entire URL path.                                                        |

The `full` matching strategy can be used to redirect a user 
to a different path:

```ts
// app-routing.module.ts
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SignInComponent } from '../components/signIn.component'
import { AdminUsersComponent } from '../components/admin/admin-users.component'
import { AdminSettingsComponent } from '../components/admin/admin-settings.component'

const routes: Routes = [
  { path: '', redirectTo: '/sign-in' },
  { path: '/sign-in', component: SignInComponent },
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: '/users' },
      { path: 'users', component: AdminUsersComponent },
      { path: 'settings', component: AdminSettingsComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Organizing Routing Modules

Routing modules can be organized to separate areas of 
concern by defining a _root routing module_ (using the 
`RouterModule.forRoot` static method) and a _child routing module_ 
(using the `RouterModule.forChild`) static method.

The `forRoot` static method creates a new `Router` instance 
while `forChild` reuses the same `Router` instance.

```ts
// admin-routing.module.ts
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdminHomeComponent } from '../components/admin/admin-home.component'
import { AdminUsersComponent } from '../components/admin/admin-users.component'
import { AdminSettingsComponent } from '../components/admin/admin-settings.component'

const adminRoutes: Routes = [
  {
    path: 'admin',
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'settings', component: AdminSettingsComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.child(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
```

```ts
// app-routing.module.ts
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SignInComponent } from '../components/signIn.component'

const routes: Routes = [
  { path: '', redirectTo: '/sign-in' },
  { path: '/sign-in', component: SignInComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

These modules can now be imported in the root module like so:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/signIn.component'
import { AdminHomeComponent } from './components/admin/admin-home.component'
import { AdminUsersComponent } from './components/admin/admin-users.component'
import { AdminSettingsComponent } from './components/admin/admin-settings.component'

import { AppRoutingModule } from './modules/app-routing.module';
import { AdminModule } from './modules/admin-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminUsersComponent,
    AdminSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

> **NOTE:** the order of the routing module imports.
