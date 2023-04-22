---
title: 'Chapter 3: Digital Logic Structures'
description: Transistors, Circuits, and Logic Gates.
---

## The Transistor

Transistors are *semiconductor* devices that can amplify or toggle (switch) electrical 
signals and are the basic units in any modern Computing System.

There are two types of transistors that are commonly in used:

1. Bipolar Junction Transistor (**BJT**)
2. Field-Effect Transistor (**FET**)

Some of their main differences are:

| BJT                                                | FET                                                |
|----------------------------------------------------|----------------------------------------------------|
| Electrical current is controlled with **current**. | Electrical current is controlled with **voltage**. |
| Affected by temperature quickly.                   | Affected by temperature less.                      |
| Breaks quickly.                                    | Durable.                                           |
| Suitable for hobby electronic devices.             | Suitable for commercial products.                  |
| Low switching speed.                               | High switching speed.                              |

In both cases these transistors have three [terminals](https://en.wikipedia.org/wiki/Terminal_(electronics)) that have the same characteristics:

| BJT       | FET    | Terminal Description                                                 |
|-----------|--------|----------------------------------------------------------------------|
| Base      | Gate   | Control terminal; controls the current of electrical signal.         |
| Emitter   | Source | Input terminal; supplies the transistor with electrical current.     |
| Collector | Drain  | Output terminal; the electrical current going out of the transistor. |

Both transistors also contain *N-Type* or *P-Type* semiconductors that changes the behaviour of 
the current flowing to the transistor based on the configuration:

| BJT | FET       | Current Flow Description                                         |
|-----|-----------|------------------------------------------------------------------|
| NPN | N-Channel | Current flows from the *output* terminal to the *input* terminal |
| PNP | P-Channel | Current flows from the *input* terminal to the *output* terminal |

![Terminal differences between BJT and FET](/images/figures/computer-systems/bjt-vs-fet-terminals.png)

In general, N-Type and P-Type transistors are *complimentary* of each other:

* N-Type transistors **allows** the flow of electrical current if voltage is given.
* P-Type transistors **stops** the flow of electrical current if voltage is given.

A common circuit design that takes advantage of these properties of transistors 
is called the **CMOS (Complimentary Metal-Oxide Semiconductor)** circuit and 
is the basis for most *Logic Gates*.

## Logic Gates

Logical operators built from transistors.

![Logic Gates](/images/figures/computer-systems/logic-gates.png)

> TODO: Provide sample schematics for different boolean logic gates using 
> CMOS circuits.

## Combinational Logic Circuits

A *combinational* (sometimes called *combinatorial*) logic circuit is a type 
of [digital logic](https://en.wikipedia.org/wiki/Digital_logic) whose operations are [pure](https://en.wikipedia.org/wiki/Pure_function) ie. it doesn't have state or 
use memory and only generates outputs.

### Decoder

A decoder is a combinational logic circuit that contains $2^n$ outputs where 
$n$ is the number of inputs.

Each output terminal in a decoder corresponds to the bit permutation of the 
input terminals.

![Decoder Schematic](/images/figures/computer-systems/decoder.png)

Decoder truth table:

| a   | b   | s0  | s1  | s2  | s3  |
|-----|-----|-----|-----|-----|-----|
| $0$ | $0$ | $1$ | $0$ | $0$ | $0$ |
| $0$ | $1$ | $0$ | $1$ | $0$ | $0$ |
| $1$ | $0$ | $0$ | $0$ | $1$ | $0$ |
| $1$ | $1$ | $0$ | $0$ | $0$ | $1$ |

### Multiplexer (Mux)

A multiplexer (or *mux*) is a combinational logic circuit that contains $2^n$ inputs, 
$n$ select terminals, and $1$ output terminal.

A multiplexer's output is determined by the permutation of the select signals 
from given input signals.

![Multiplexer Schematic](/images/figures/computer-systems/multiplexer.png)

Multiplexer truth table:

| s0  | C   |
|-----|-----|
| $0$ | $a$ |
| $1$ | $b$ |

Here, whenever $s0$ is $0$ the output of the multiplexer is whatever value $a$ has, 
and whenever $s0$ is $1$ the output of the multiplexer is whatever value $b$ has.

Conversely there is also the [demultiplexer](https://en.wikipedia.org/wiki/Multiplexer#Digital_demultiplexers) which contains a single input, 
$2^n$ outputs, and $n$ select terminals.

### Full-Adder

A full-adder (or *1-bit adder*) is a combinational logic circuit that contains:

1. Three (3) input terminals: two (2) of which are the operands for the sum 
   operation and the other is the *carry-over* bit.
2. Two (2) output terminals: one (1) for the *carry* bit and the other the 
   sum bit.

![Full-Adder Schematic](/images/figures/computer-systems/full-adder.png)

Full-adder truth table:

| $a$ | $b$ | $C$ | $S$ | $Cr$ |
|-----|-----|-----|-----|------|
| $0$ | $0$ | $0$ | $0$ | $0$  |
| $0$ | $0$ | $1$ | $1$ | $0$  |
| $0$ | $1$ | $0$ | $1$ | $0$  |
| $0$ | $1$ | $1$ | $0$ | $1$  |
| $1$ | $0$ | $0$ | $1$ | $0$  |
| $1$ | $0$ | $1$ | $0$ | $1$  |
| $1$ | $1$ | $0$ | $0$ | $1$  |
| $1$ | $1$ | $1$ | $1$ | $1$  |

There is also the notion of a [half-adder](https://en.wikipedia.org/wiki/Adder_(electronics)#Half_adder) which is essentially a 
full-adder but without a *carry-over* input terminal.

## Basic Storage Elements

The ff. are digital logic structures that can store/persist values which are 
building blocks for memory devices.

### SR Latch

The SR (set/reset) Latch is a digital logic structure that *persists* a
single bit of information.

One of the most common way to implement SR Latches in a digital circuit 
is to use two (2) NAND gates whose output of each is one of the inputs 
of the other.

![SR Latch Schematic](/images/figures/computer-systems/sr-latch.png)

To build a basic intuition about how this can work we can imagine an 
OR gate whose output feeds into one of its input:

![OR Gate Persistence](/images/figures/computer-systems/or-gate-persistance.png)

Recall that the truth table of the OR logical operator is as follows:

| $a$ | $b$ | $C$ |
|-----|-----|-----|
| $0$ | $0$ | $0$ |
| $0$ | $1$ | $1$ |
| $1$ | $0$ | $1$ |
| $1$ | $1$ | $1$ |

For the OR gate in this case: if the input terminal $a$ is given a high input 
signal (a value of 1), then the output $C$ will equal to $1$ as $a \lor b = 1 \lor 0 = 1$ 
which consequently will set $b = 1$.

Once at this state, $C$ will always be $1$ regardless of the value of $a$.

Please see [Ben Eater: SR Latch](https://www.youtube.com/watch?v=KM0DdEaY5sY0) for a video demonstration of this and a more 
indepth explanation of the SR Latch.
