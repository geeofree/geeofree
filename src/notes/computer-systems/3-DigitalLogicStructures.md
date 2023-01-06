---
title: 'Chapter 3: Digital Logic Structures'
description: Transistors, Circuits, and Logic Gates.
---

## The Transistor

Transistors are *semiconductor* devices that can amplify or toggle (switch) electrical 
signals and are the basic units in any modern Computing Systems.

There are two types of transistors that are commonly in used:

1. Bipolar Junction Transistor (**BJT**)
2. Field-Effect Transistor (**FET**)

Some of their main differences are:

| BJT                                     | FET                                     |
|-----------------------------------------|-----------------------------------------|
| Current is controlled with **current**. | Current is controlled with **voltage**. |
| Affected by temperature quickly.        | Affected by temperature less.           |
| Breaks quickly.                         | Durable.                                |
| Suitable for hobby electronic devices.  | Suitable for commercial products.       |
| Low switching speed.                    | High switching speed.                   |

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

* N-Type transistors **allows** the flow of current if a given voltage is provided.
* P-Type transistors **stops** the flow of current if a given voltage is given.

A common circuit design that takes advantage of these properties of transistors is 
called the **CMOS (Complimentary Metal-Oxide Semiconductor)** circuit and is the basis 
for most *Logic Gates*.
