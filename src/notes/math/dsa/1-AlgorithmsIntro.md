---
title: 'Chapter 1: Introduction to Algorithms'
description: Introduction to Algorithms, Techniques, and Analysis.
---

## Algorithms

An **algorithm** is a set of procedures or steps that processes input(s) into 
some desired output.

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

### Pseudocode

A *pseudocode* is an abstract language that contains common features available
to most programming languages ie. data, variables, operators, branching, and 
control-flow structures.

For example:

```py
# Variables
x := 4
y := x

# Arithmetic Operations
x + y
x - y
x * y
x / y
x % y

# Branching Statements

if P:
  # body of if-statement
else if S:
  # body of else-if-statement
else:
  # body of else-statement
  
# Loops

for i to n:
  # body of for-loop

while P:
  # body of while-loop
```

## Analysis

### Big-O

An *asymptotic notation* that describes an *upper bound* of a function.

**Formally:**

For a function $f: \mathbb{N} \to \mathbb{R}^{+}$ and another function 
$g: \mathbb{N} \to \mathbb{R}^{+}$, it is said that $f$ is **Big-O of** 
$g$, or:

$$
f(n) = O(g(n))
$$

Which can also be simply written as:

$$
f = O(g)
$$

Or just:

$$
O(g)
$$

> **NOTE:**
> 
> The $=$ signs described means "is" instead of "is equal to" as the relation
> isn't symmetric.
>
> See: [Wikipedia: Big-O Equal Signs](https://en.wikipedia.org/wiki/Big_O_notation#Equals_sign)

If there exists a positive constant $C$ and some positive integer $k$
such that:

$$
f(n) \leq Cg(n)\\ \forall \\ n \geq k
$$

Here, $f = O(g)$ describes that *$f$ grows no faster than $g$ at point $k$ 
onwards when $g$ is multiplied by some constant $C$*.

**Example:**

Let $f: \mathbb{N} \to \mathbb{R}^{+}$ and $g: \mathbb{N} \to \mathbb{R}^{+}$ 
where:

$$
f(n): 2n + 6
$$

$$
g(n): n^{2}
$$

To prove $f = O(g)$ we must prove:

$$
2n + 6 \leq Cn^{2}\\ \forall n \geq k
$$

Proof:

$$
\begin{align}
&(1)\\ n + 3 \leq n^{2}\\ \text{for}\\ n \geq 3\newline\newline
&(2)\\ 2(n + 3) \leq 2(n^{2})\\ \text{for}\\ n \geq 3\newline\newline
\end{align}
$$

Therefore:

$$
\begin{align}
&(3)\\ 2n + 6 = 2(n + 3) \leq 2(n^{2})
\end{align}
$$

For $C = 2$ and $k = 3$

![Figure: Big-O Graph](/images/figures/dsa/big-o.png)

A common ordered list of Big-O functions with its common name is shown in the ff. table, 
ordered from slowest growth rate at the top to fastest at the bottom:

> **NOTE:** Slower = better.

| Function        | Common Name        |
|-----------------|--------------------|
| $O(1)$          | Constant           |
| $O(log(n))$     | Logarithmic        |
| $O(n)$          | Linear             |
| $O(n\\ log(n))$ | Linear-Logarithmic |
| $O(n^{2})$      | Quadratic          |
| $O(n^{c})$      | Polynomial         |
| $O(n!)$         | Factorial          |

> See [Big-O Cheatsheet](https://www.bigocheatsheet.com/) for a graph and other information on Big-O.

### Big-Theta

Describes the *tight bound* or both the *upper* and *lower* bound of a function.

**Formally:**

For two given functions: $f: \mathbb{N} \to \mathbb{R}^{+}$ and $g: \mathbb{N} \to \mathbb{R}^{+}$, 
it is said the function $f$ is **Big-Theta function** of $g$, or:

$$
f(n) = \Theta(g(n))
$$

Or simply:

$$
f = \Theta(g)
$$

Or just:

$$
\Theta(g)
$$

iff. for some positive constants $C_{1}$ and $C_{2}$ and a positive integer $k$, 
such that:

$$
C_{1}g(n) \leq f(n) \leq C_{2}g(n)\\ \forall n \geq k
$$

Here, $\Theta(g)$ describes that *$f$ and $g$ grow at the same rate* or 
*$f$ is within bounds of $g$*.

**Example:**

Let $f: \mathbb{N} \to \mathbb{R}^{+}$ and $g: \mathbb{N} \to \mathbb{R}^{+}$ where:

$$
f(n) = 2n
$$

$$
g(n) = 3n + 6
$$

Proof:

1. First we prove $f = O(g)$ by showing $2n \leq C_{2}(3n + 6)$. We do this through a 
   proof by contradiction:
   
   Suppose $2n > 3n + 6$, this means:
   
   $$
   \begin{align}
   2n = 2n + 0 + 0\newline
   3n + 6 = 2n + n + 6\newline
   2n + 0 + 0 > 2n + n + 6
   \end{align}
   $$
   
   However:
   
   $$
   \begin{align}
   0 < n \in \mathbb{N}\newline
   0 < 6
   \end{align}
   $$
   
   Therefore it cannot be true that $2n > 3n + 6$ and thus: $2n \leq 3n + 6$ 
   where $C_{2} = 1$ and $k = 1$.

2. Next we prove $g = O(f)$ by showing $3n + 6 \leq C2n$:
   
   $$
   3n + 6 \leq 3n + 3n = 3(2n) \forall n \geq 2
   $$
   
   Therefore $g = O(f)$ when $C = 3$ and $k = 2$.

   Consequently:
   
   $$
   \begin{align}
   g &= O(f)\newline
   &= 3n + 6 \leq 3(2n)\newline
   &= 2n \geq \frac{1}{3}(3n + 6)\newline
   &= \frac{1}{3}(3n + 6) \leq 2n
   \end{align}
   $$
   
   Which gives us $C_{1} = \frac{1}{3}$ and $k = 2$.
   
3. Finally: $f = \Theta(g)$ when $C_{1} = \frac{1}{3}$, $C_{2} = 1$ and $k = 2$ or:

   $$
   \frac{1}{3}(3n + 6) \leq 2n \leq 3n + 6 \square
   $$

![Figure: Big-Theta Graph](/images/figures/dsa/big-theta.png)

In general, when describing functions using asymptotic notations the 
terms in the polynomial expression can be neglected such as:

1. Terms less than the highest degree term.
2. The constants of the highest degree term.

This is for the simple reason that they will have less significant 
impact when larger values are provided to the expression.

For example:

$$
3n^{2} + 6
$$

Using the rule we can simply just describe it as:

$$
O(n^{2})
$$

## Complexities

In theoretical computer science, *Complexity Theory* describes how much 
resources, such as time and space, are required to run a computation.

**Time Complexity** refers to how long a computation will run.

**Space Complexity** refers to how much space (ie. memory allocation) will be 
needed when a computation executes.

In most cases, the important resource between the two is time complexity as 
time does not have a physical analog unlike space which can increase as [the] 
technology gets better.

### Analysis: Bubble Sort

[Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort) is a [sorting algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm) that passes through a list of elements, 
swapping unsorted adjacent elements until the list is *completely sorted*.

**Pseudocode:**

```py
def bubble_sort(A):
  should_loop := True

  while should_loop:
    should_loop := False
    for i := 1 to A.length - 1:
      if A[i - 1] > A[i]:
        # Swap A[i - 1] and A[i]
        temp = A[i]
        A[i] = A[i - 1]
        A[i - 1] = temp
        
        # This indicates that we should keep sorting
        should_loop := True
```

**Analysis:**

In the **best case**, when the bubble sort algorithm receives an already (or almost) 
sorted array of items it will have a time complexity of $O(n)$ as it will 
only pass through the outer loop once because the comparisons will never be true 
and therefore `should_loop := False` once the *for-loop* ends and will not rerun 
the outer *while-loop*.

On the **worse case** however, when the algorithm receives an unsorted array of 
items ie. an array in descending order, then it will have a time complexity of 
$O(n^{2})$ since it will have to keep looping until all the items have been sorted.

```py
bubble_sort([5,4,3,2,1])
# Execution:
# (1) [4,3,2,1,5]
# (2) [3,2,1,4,5]
# (3) [2,1,3,4,5]
# (4) [1,2,3,4,5]
# (5) [1,2,3,4,5] <- This pass is done because the previous iteration compared 2 > 1 which sets `should_loop := True`.
```

## Techniques

### Loop Invariants

A **loop invariant** is method of proving the correctness of an algorithm by stating an 
*invariant* (a condition on some variable) that will hold true before and after a loop.

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

Here is an example of this method written in C:

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

### Divide-and-Conquer

A problem solving technique that:

- **Divides** the problem into smaller subproblems.
- **Conquers** the original problem by solving each subproblem.
- **Combines** the solution to each subproblem to solve the 
  original problem.

For example a very popular algorithm that uses this technique is the 
[merge sort](https://en.wikipedia.org/wiki/Merge_sort) algorithm which goes as follows:

Given a list of numbers:

- **Divide:** recursively divide the list of numbers into half until its length 
  reaches one (1).
- **Conquer:** Sort each sublist.
- **Combine:** Combine each sorted sublist.

```py
def merge_sort(A):
  if A.length == 1:
    return A
    
  middle = Math.floor(A.length / 2)
  
  # Divide
  left_half = merge_sort(A[0, middle])
  right_half = merge_sort(A[middle + 1, A.length])
  
  # Conquer and Combine
  return merge(left_half, right_half);
  
def merge(Left, Right):
  left_index = 0
  right_index = 0
  sorted = []
  
  while (left_index < Left.length && right_index < Right.length):
    left = Left[left_index]
    right = Right[right_index]
    
    if left < right:
      sorted.push(left)
      left_index += 1
      continue
    
    if right < left:
      sorted.push(right)
      right_index += 1
      continue
      
    if left == right:
      sorted.push(left)
      sorted.push(right)
      left_index += 1
      right_index += 1
      
      
  while (left_index < Left.length):
    left = Left[left_index]
    left_index += 1
    sorted.push(left)
    
  while (right_index < Right.length):
    right = Right[right_index]
    right_index += 1
    sorted.push(right)
    
  return sorted
```
