---
title: "Chapter 1: Introduction"
description: Introduction to Operating Systems
---

# Introduction

A computer is comprised of several components such as:
1. One or more processors
2. Some main memory
3. Disks
4. Various input/output devices such as a keyboard, a mouse, 
   a network interface, a display, etc.

An **Operating System**'s job is to manage all these resources and provide 
a simple and easier model to work with them.

Users typically interact with the Operating System through two interfaces:
1. The *shell* which is a text-based interface
2. A Graphical User Interface (GUI)

Most computers have two modes of operation: the **Kernel** mode and **User** mode.

The OS runs in Kernel mode which gives it complete access to the underlying 
hardware resources.

The rest of the software runs in User mode which has limited (or in some cases, 
no access) to the hardware resources. These commands have to be requested to 
the OS.

An OS contains many drivers to handle different I/O devices. These drivers provide 
a set of abstractions to control the underlying hardware.
