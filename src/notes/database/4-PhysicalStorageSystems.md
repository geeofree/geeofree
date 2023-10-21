---
title: "Chapter 4: Physical Storage Systems"
description: "Physicaly storage devices, interfaces, and block storage access."
---

## Physical Storage Devices

There are several types of data storage that exists in most modern computer systems. 
These storage media are classified by their speed of access, cost per unit of data, 
and reliability.

The ff. are some storage media that are typically available in most computer systems:

- **Caches/Registers**: The cache/register  is the fastest and most expensive form 
  of storage media. It is used by CPUs to store temporary data during its processing.

- **Main Memory**: The main memory (or RAM) is a volatile storage device used for larger 
  storage space for temporary data.

- **Flash Memory**: A non-volatile form of storage media used for storing persistent 
  data. Examples of flash memory devices are USB Flash Drives and Solid-State 
  drives (SSDs).

- **Magnetic-Disk Storage**: Magnetic-disks [or hard disk drives (HDD)] are non-volatile 
  storage media used for storing persistent data and contains an electro-mechanical 
  spinning disk with a _head_ that reads or writes to it.

- **Optical Storage**: The _digital video disk_ (DVD) is an optical storage medium with 
  data written and read using a laser light source.
  
  Some DVDs are read-only, with data written at the factory where it is produced while 
  others may be *write-once, read-many (WORM)*.

- **Tape Storage**: Tape storage is mainly used for archiving and backup data and have 
  _sequential-access_ where data must be read from the beginning (in contrast to HDDs 
  and SSDs which are _direct-access_ where data can be accessed at any location on 
  the device).

### Storage Hierarchy

The various storage media can be organized in a hierarchy where devices with faster 
access and costlier prices are at the top and the devices with slower access but 
cheaper cost is at the bottom:

![Storage Hierarchy](/images/figures/database/storage-hierarchy.png)

## Storage Interfaces

HDDs and SSDs are typically connected to a computer using a high-speed interconnection 
medium.

Disks for example uses the **Serial ATA (SATA)** or the **Serial Attached SCSI (SAS)** 
interfaces.

> **NOTE**: The SAS interface is typically used in servers or commercial devices.

The **Non-Volatile Memory Express (NVMe)** interface is a logical interface standard 
developed to better support SSDs and is typically used with the PCIe interface (an 
interface that supersedes SATA).

### Networked Storage Systems

Some storage systems can also be accessed remotely or through the internet.

#### Storage Area Network (SAN)

A networked storage system where a large number of disks are connected together to form 
a single disk unit that can be accessed remotely.

Typically these storage devices are organized using [RAID (Redundant Array of Independent Disks)](https://en.wikipedia.org/wiki/RAID).

#### Network Attached Storage (NAS)

NAS is a remote file system that is interfaced using network file system protocols such 
as NFS or CIFS.

## Magnetic Disks

TBD
