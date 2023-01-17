---
title: 'Chapter 1: Getting Started'
description: Introduction to Algorithms and Analysis.
---

## Algorithms

Are a set of well-defined procedures that processes a set of inputs to 
some output.

For example, to divide an integer with some other integer using [long division](https://en.wikipedia.org/wiki/Long_division):

1. Let $n$, $p$, $q$, and $r$ be some integer where $n$ is the *divisor* and 
   also $n > 0$, $p$ is the *dividend*, $q$ is the *quotient* and also $q = 0$, 
   and $r$ is the *remainder*.
2. Let $p'$ be the most significant place value in $p$ where a multiple 
   $m$ of $n$ is less than or equal to $p'$.
3. Add $m$ to $q$.
4. Subtract $p$ to $n * m$ and set the difference as the new value of $p$.
5. Go back to step 2 until $p < n$.
6. Set $r$ to $p$.

![Long Division Algorithm](/images/figures/dsa/long-division-algorithm.png)

## Loop Invariants

A method of proving the correctness of an algorithm by stating an *invariant* 
(a condition on some variable) that will hold true before and after a loop.

Formally, the method is as follows:

1. **Initialization:** The invariant is true prior to the first iteration of the loop.
2. **Maintenance:** The invariant is true at each iteration.
3. **Termination:** When the loop terminates, the invariant still holds true.

For example, an algorithm to get the largest number in a list $A$ of integers:

$$
max(A) = \\{ m \in A : \forall n \in A, m \geq n \\}
$$

Let $m$ be the *invariant* where $m$ is the largest value in $A$:

1. **Initialization:** Let $m$ be the first member in $A$.
2. **Maintenance:** For every item $n$ in $A$ from the second to the last, if 
   $n > m$, then let $m = n$.
3. **Termination:** Once the loop ends, $m$ should still hold, that is: it's 
   still the largest value in $A$.

```c
int max(int A[], int total) {
  // Initialization:
  // Set `m` as the first item in the array `A` and is the largest 
  // number (currently).
  int m = A[0];
  
  // Maintenance (1):
  // Before the iteration of the loop, `m` still holds.
  int i;
  for (i = 1; i < total; i++) {
    if (A[i] > m) {
      m = A[i];
    }
    
    // Maintenance (2):
    // Before the next iteration of the loop, `m` still holds.
  }

  // Termination:
  // Once the loop is finished, `m` still holds.
  return m;
}
```
