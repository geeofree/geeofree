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
