---
title: 'Chapter 1: Request Lifecycle'
description: How Laravel handles each request.
---

![Laravel's Request Lifecycl](/images/figures/laravel/laravel-request-lifecycle.png)

## Bootstrapping

The first thing Laravel does when it receives a request is to 
bootstrap the application.

Every request comes from an HTTP server like Nginx or Apache 
which is then passed down and handled by Laravel that's defined 
in the `public/index.php` file which autoloads namespaces and 
instantiates the application class that is done via the 
`bootstrap/app.php` file.

## Kernel Handling

Each request is then handled by the _kernel_ (either HTTP or Console 
kernels).

The role of the Kernel is to run a list of `bootstrappers` which will 
be ran before the request is executed.

These `bootstrappers` handle error handling, logging configuration, 
detect the application environment, etc.

The HTTP Kernel also runs a list of middlewares that all requests 
must pass through. These middlewares handle session management, 
verifying the _CSRF_ token, etc.

## Service Providers

Bootstraps the application components like the database, queue, 
validation, and routing components.

The main goal of the service provider is to register and boot 
various application components.

All the service providers are defined under the `config/app.php` 
file in the `providers` array of the class.

Laravel will iterate over the `providers` list, calling `register` 
on each of them and then `boot` afterwards.

## Route Handling

The route service provider is a provider that handles the request 
and maps it to some router for dispatching ie. making a response.

Routes may also run its own list of `middlewares` for example 
doing authentication/authorization to a route endpoint.

The route service provider is available in the `app/Providers/RouteServiceProvider.php` 
file.

## Responding

Once a response has been generated for a request, Laravel then sends 
it back to the web server which then forwards it to the client.
