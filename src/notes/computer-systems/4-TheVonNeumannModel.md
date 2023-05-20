---
title: "Chapter 4: The von Neumann Model"
description: "The von Neumann Computer Model."
---

## The von Neumann Model

The [von Neumann model](https://en.wikipedia.org/wiki/Von_Neumann_architecture) is a computer model or architecture that is  
widely used in many modern computer systems.

The model describes five (5) components for a computer:

### Memory

The component for storing instructions to be executed or data to be 
operated on.

The memory contains two (2) registers:

1. **Memory Address Register (MAR)** for indexing or locating an address 
   cell in the memory.
2. **Memory Data Register (MDR)** for either loading or writing data from/to 
   the indexed address cell by the MAR.

### Processing Unit

The component that processes or operates on values to transform them into 
different values.

The simplest processing unit in the von Neumann model is called the **ALU** 
or **Arithmetic Logic Unit** which can do arithmetic operations such as divide, 
square root, multiply, etc., and also do basic boolean logic operations.

The ALU usually processes values using a fixed size of bits called a *word* 
which is again a size that is dependent based on the necessary design 
decisions for a computer architecture.

ALUs are commonly also accomodated with storage facilities (registers) that 
are in very close proximity to it which are used as temporary storage when 
doing operations.

For example calculating $(a + b) * c$ would require a register to temporarily 
store the results of $a + b$ so that it could be processed with the next 
instruction which is to multiply it with $c$.

The close proximity of the registers to the ALU is also important so that 
read/write times are greatly decreased vs. when an ALU reads or writes data 
from/to the actual memory component.

ALU registers are also uniquely identifiable and can be indexed ie. for $n$ 
registers, there are $2^n$ uniquely identifiable registers.

### Input/Output

The input/output (or I/O) components are external devices or peripherals 
that can provide information (input) to the computer system from a user 
and do something with the information in the computer system (output) 
for the user ie. displaying text, persistent storage, or printing.

An example of an input device could be a mouse or a keyboard.

For the output device it could be a monitor or a printer.

### Control Unit

This component manages which instruction is being executed or is going to 
be executed next by the processing unit.

The control unit contains two registers that does these things respectively 
and are the:

- **Instruction Register (IR)** stores the instruction currently being executed.
- **Program Counter (PC)** stores the address of the instruction that is going 
  to be executed next.

![The von Neumann Architecture Scheme](/images/figures/computer-systems/von-neumann-architecture-scheme.png)

### Instruction Processing

*Instructions* are the basic unit of computer processing and is made up of 
two components: the **opcode** and the **operand**.

There are fundamentally three (3) types of instructions that can be done 
in a computer system:

#### Operate

**Operate** instructions are instructions that transform data into a different 
value in a computer system.

Examples of operate instructions are `ADD`, `SUB`, and `AND`.

#### Data Move

**Data Move** instructions are instructions that move data in different 
storage facilities such as in a register or a memory unit.

An example of a data move instruction is the `LD` or load instruction.

#### Control

**Control** instructions are instructions that changes how instructions 
are to be executed by the processing unit.

For example instead of sequentially executing instructions it can 
execute instructions in an *arbitrary* order.

These instructions are the basic building blocks for loops and branching 
statements in high-level programming languages.

An example of a control instruction is the `BR` or branch instruction.

### The Instruction Cycle

Instructions are processed in a processing unit in a systematic manner.

Typically processing units have a six (6) phase instruction cycle where 
each phase could perform $0$ or more steps in it.

> Having $0$ steps means a phase is skipped for execution as an instruction 
> might not necessarily need it.

#### FETCH

The **fetch** phase in the instruction cycle does three (3) things:

1. Indexes the address cell in the memory unit by loading the value stored 
   in the program counter (PC) to the MAR. Increments the PC afterwards.
2. The memory unit is then asked to load the contents of the indexed address 
   cell in the MDR.
3. The contents of the MDR are then loaded into the instruction register (IR) 
   of the control unit.

#### DECODE

The **decode** phase determines which action is to be done by the processing 
unit from the IR in the control unit ie. do an operate, data move, or 
control instruction.

#### EVALUATE ADDRESS

The **evaluate address** phase computes the memory location that is needed 
by the instruction process.

For example the `LD` instruction requires indexing of an address cell on 
the memory unit for the data that is going to be moved.

It should be noted that not all instructions require this phase ie. for 
an operate instruction whose operands are in the ALU registers or within 
the instruction itself.

#### FETCH OPERANDS

The **fetch operands** phase retrieves the source operands needed to process 
the instruction.

For example an `LD` instruction which fetches the data for its operand from 
the memory unit or an `ADD` instruction which fetches the data for its 
operands from the ALU registers or in its own instruction info.

#### EXECUTE

The **execute** phase simply executes the given instruction.

#### STORE RESULT

The **store result** final phase stores of the instruction into some storage 
facility such as the ALU registers or the memory unit.

### Trap Instructions

A **trap** (or [interrupt](https://en.wikipedia.org/wiki/Interrupt)) instruction is an instruction that halts (*interrupts*) 
a processor's current execution.
