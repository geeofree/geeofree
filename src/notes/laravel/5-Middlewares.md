---
title: 'Chapter 5: Middlewares'
description: Intercepting requests using middlewares.
---

## Middlewares

Middlewares are classes in Laravel that intercept requests before 
a route can handle it.

To generate a middleware run:

```bash
php artisan make:middleware <MiddlewareName>
```

A middleware class should have a `handle` method that accepts a 
`Request` and `Closure` argument:

```php

class EnsureValidToken {
  function handle(Request $request, Closure $next)
  {
    if ($request->input('token') !== 'valid-token') {
      return redirect('home');
    }
    
    return $next($request);
  }
}
```

The `$next` argument in the `handle` method will forward the request 
to the next handler such as another middleware (if any) or the 
route handler.

## Registering Middlewares

A middleware can be registered either globally or just to a specific 
route within the `App\Http\Kernel`.

To register middlewares globally, add it to the `$middleware` property:

```php
<?php

class Kernel extends HttpKernel {
  protected $middleware = [
    EnsureValidToken,
    // ... other middlewares
  ]
}
```

To register middlewares to a specific route add it to the `$routeMiddleware` 
property and assign it with a key:

```php
<?php

class Kernel extends HttpKernel {
  protected $routeMiddleware = [
    'token_valid' => EnsureValidToken,
    // ... other middlewares
  ]
}
```

```php
<?php

Route::middleware('token_valid')->get('/foo', function() {
  // ...
});
```

Middlewares can also be grouped by assigning them in the `$middlewareGroups`
property:

```php
<?php

class Kernel extends HttpKernel {
  protected $middlewareGroups = [
    'auths' => [
      EnsureValidToken,
      // ... other middlewares
    ],
    // ... other middleware groups
  ]
}
```

## Middleware Parameters

Middlewares can accept parameters which are defined after the closure 
argument:

```php
<?php

class UserHasRole {
  function handle(Request $request, Closure $next, $role)
  {
    if (! $request->user()->hasRole($role)) {
      // do something
    }
    
    return $next($request);
  }
}
```

Values for middleware parameters are provided after the middleware name, 
separated by a colon(`:`) character:

```php
<?php

Route::middleware('role:admin')->get('/foo', function() {
  // ...
});
```
