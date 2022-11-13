---
title: 'Chapter 2: Bits And Data Types'
description: Data representation and operations in a computer system.
---

## Bits

Binary digits (or _bits_) are the primitive unit of information in a 
computer system.

A bit is essentially the _existance_ or _non-existance_ of a voltage 
in a computer; any voltage which is measured close to zero(0) means 
a non-existant signal while anything bigger than one(1) means a 
the existance of a signal.

A **data type** provides context on what a string of bits represent ie. 
an integer, character code, or floating point number.

## Integers

A data type that represents the number zero, positive, and negative 
whole numbers.

### Unsigned Integers

Represents positive integers and zero only.

For some number of bits $k$, there can be $0$ to $2^k - 1$ unsigned 
integers to be represented.

For example, if there are three(3) bits, then it can represent 
the unsigned integers $0$ to $2^3 - 1  = 7$.

| Bit | Decimal |
|-----|---------|
| 000 | 0       |
| 001 | 1       |
| 010 | 2       |
| 011 | 3       |
| 100 | 4       |
| 101 | 5       |
| 110 | 6       |
| 111 | 7       |

### Signed Integers

There are three main ways to represent signed integers, these are 
namely:

#### Signed Magnitude

Represents integers by reserving the left-most bit (also known as the 
sign bit) as an indicator of whether it is a positive or negative number.

| Bit | Decimal |
|-----|---------|
| 000 | 0       |
| 001 | 1       |
| 010 | 2       |
| 011 | 3       |
| 100 | -0      |
| 101 | -1      |
| 110 | -2      |
| 111 | -3      |

#### 1's Complement

Represents integers by complementing the values ie. inverting the a $0$ 
to a $1$ and a $1$ to a $0$.

This representation also uses a sign bit to indicate whether it is positive 
or negative.

| Bit | Decimal |
|-----|---------|
| 000 | 0       |
| 001 | 1       |
| 010 | 2       |
| 011 | 3       |
| 100 | -3      |
| 101 | -2      |
| 110 | -1      |
| 111 | -0      |

#### 2's Complement

Represents integers the same way as the **1's Complement** (ie. inverting the 
values), but has an extra step of adding a $1$ to the result.

In this representation, the sign bit represents $-2^{k-1}$.

So for example to represent the decimal number $-2$ we first get its 
**1's Complement** which is $101$, then add $1$ which results in $110$:

$$
110 = -2^2 + 2^1 + 0^0 = -4 + 2 = -2
$$

| Bit | Decimal |
|-----|---------|
| 000 | 0       |
| 001 | 1       |
| 010 | 2       |
| 011 | 3       |
| 100 | -4      |
| 101 | -3      |
| 110 | -2      |
| 111 | -1      |

### Bit Integer Arithmetic

#### Addition

Given 4-bits, adding $5 + 4$ as unsigned integers results in:

$$
0101 + 0100 = 1001 = 9
$$

#### Subtraction

Given 4-bits, adding $6 - 3$ as signed integers results in:

$$
0110 - 1101 = 0011 = 3
$$

#### Bit Shifting

A property of binary arithmetic is that adding a number by itself 
shifts the bits to the left ie. $3 + 3 = 0011 + 0011 = 0110$, this is 
simply because:

$$
3 + 3 = 2(3) = 2[0(2^3) + 0(2^2) + 1(2^1) + 1(2^0)] = 0(2^4) + 0(2^3) + 1(2^2) + 1(2^1)
$$

### Sign Extension

Two bit strings with differing lengths can be processed by _extending_ the sign 
bit of the smaller length bit string.

For example, given the number $15$ as a 5-bit integer and the number $-3$ as 
a 3-bit integer:

1. Represent $21$ in binary: $21 = 01111$
2. Represent $-3$ in binary: $-3 = 101$
3. _Extend_ the sign-bit of $-3$ to 5-bits: $11101$
4. Now add: $01111 - 11101 = 01100 = 12$

### Overflow/Underflow

Since computers work with a finite length of bits, there comes a situation where 
processing bits would result in an error such as an **overflow** or **underflow** 
of values.

An **overflow** result would be when, for example, adding two signed integers goes 
over the maximum magnitude.

For example on a 5-bit string which has a maximum positive integer of $2^4 - 1 = 15$, 
adding two positive integers would result in a negative integer, for example $15 + 1 = -16$.

An **underflow** is the same but results in a positive integer if two negatives are 
processed and go over the minimum negative integer.
