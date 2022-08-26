---
title: 'Chapter 6: Observables'
description: An introduction to Observables.
---

## Observables

Is a type that allows us to work with streams of data either 
synchronously or asynchronously.

Observables uses the [Observer](https://en.wikipedia.org/wiki/Observer_pattern) pattern for pushing streams 
of data from an [Iterator](https://en.wikipedia.org/wiki/Iterator).

Observables are implemented in many languages/platforms. 
In JavaScript for example there is the `rxjs` library.

## Getting Started

To create an observable we define it using the `Observable` 
class like so:

```ts
import { Observable } from 'rxjs'

const myObservable = new Observable(subscriber => {
  subscriber.next('Quas')
  subscriber.next('Wex')
  subscriber.next('Exort')
  subscriber.complete()
})
```

The `Observable` class takes in a callback with a `Subscriber` 
object that must have the ff. properties:

| Property     | Description                                          |
|--------------|------------------------------------------------------|
| `next()`     | Gets the current data in the stream.                 |
| `error()`    | Runs when an error occurrs in the observable stream. |
| `complete()` | Runs when the observable has completed its stream.   |

To run an observable it must have at least one(1) subscriber. 
To do this we invoke the `subscribe` method of the `Observable` 
instance.

For example:

```ts
const subscriberOne = {
  next(data) {
    console.log('S1:', data)
  },
  complete() {
    console.log('S1-Finished')
  },
}

const subscriberTwo = {
  next(data) {
    console.log('S2:', data)
  },
  complete() {
    console.log('S2-Finished')
  },
}

myObservable.subscribe(subscriberTwo)
myObservable.subscribe(subscriberOne)
```

This should print:

```shell
S2: Quas
S2: Wex
S2: Exort
S2-Finished
S1: Quas
S1: Wex
S1: Exort
S1-Finished
```

## Operators

Observable operators are immutable functions that operate 
on an observable instance that then returns a new 
observable instance.

To compose operators we use the `pipe()` function which 
is available as a method in the `Observable` instance or 
as a stand-alone function from the `rxjs` library.

For example:

```ts
import { Observable, map, filter } from 'rxjs'

const getNumberRange = (min, max) => new Observable(subscriber => {
  if (min >= max) {
    subscriber.error(`'min' must be less than 'max'. ${min} >= ${max}`)
  }
  
  let current = min
  while (current <= max) {
    subscriber.next(current)
    current++
  }
})

const squaredEvenNumbers = getNumberRange(1, 10)
  .pipe(
    filter(n => n % 2 === 0),
    map(n => n * n)
  )
  
squaredEvenNumbers.subscribe({
  next: (n) => console.log('Got number:', n)
})
```

This should print:

```shell
Got number: 4
Got number: 16
Got number: 36
Got number: 64
Got number: 100
```

## Cleanup

Observables may return values that allow for cleanup.

For example:

```ts
import { Observable } from 'rxjs'

const delay = (seconds) => new Observable(subscriber => {
  let number = 0
  
  let intervalID = setInterval(() => {
    subscriber.next(number)
    number++
  }, seconds)
  
  return () => clearInterval(intervalID)
})

const myDelay = delay(1000)

const unsubscribe = myDelay.subscribe({
  next: number => console.log('Got number: ', number)
})

setTimeout(unsubscribe, 5000)
```
