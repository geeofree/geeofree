---
title: 'Chapter 1: Fundamental Concepts'
description: 'Introductory concepts related to Linux/UNIX system programming.'
---

## The Kernel

The core component of an Operating System is its [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)) which handles crucial 
system management tasks such as:

1. Process scheduling
2. Process management
3. Memory management
4. File system provisioning
5. Access to devices
6. Networking
7. System call handling

### Kernel mode and user mode

Modern processor architectures typically allow the CPU to operate in at least two 
different modes: *user mode* and *kernel mode* (or sometimes called *supervisor mode*).

Hardware instructions allow switching from one mode to the other.

These modes allow the machine to have guard rails such that only trusted processes (the 
kernel) can directly access system resources.

Areas of virtual memory can also be marked as being apart of *user space* or *kernel space*.

When running in kernel mode, the CPU can access both user and kernel memory space.

Certain operations can only be performed during kernel mode such as:

- Halt instructions to stop the system.
- Accessing memory-management hardware.
- Initiating device I/O operations.

## The Shell

A [shell](https://en.wikipedia.org/wiki/Shell_(computing)) (or _command interpreter_) is a special-purpose program designed to read commands 
typed by the user and execute appropriate programs in response to those commands.

The term _login shell_ is used to denote the process that is created to run a shell when 
the user first logs in.

There are a number of shell programs available. One of the most prominent one used today 
is the _bourne again shell_ or [bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)).

Shells may also interpret scripts written in text files that contain shell commands and 
are useful for [somewhat] complicated shell instructions.

## Users and Groups

Each user on the system is uniquely identified, and users may belong to groups.

### Users

Every user of the system has a unique _login name_ (username) and a corresponding numeric 
_user ID_ (UID).

For each user, these are defined by a line in the system _password file_, `/etc/passwd`, 
which includes the ff. information:

- **Group ID**: the numeric groupd ID of the first of the groups of which the user is a 
  member.
  
- **Home directory**: the initial directory into which the user is placed after logging 
  in.

- **Login shell**: the name of the program to be executed to interpret user commands.

The password record may also include the user's encrypted password. However, in most 
cases due to security reasons, the password is often stored in a separate 
_shadow password file_, which is readable only by privileged users.

### Groups

For administrative purposes — specifically for controlling access to files and other 
resources — it is useful to organize users into groups.

Each group is identified by a single line in the system _group file_, `/etc/group`, which 
includes the ff. information:

- **Group name**: the (unique) name of the group.
- **Groupd ID (GID)**: the numeric ID associated with this group.
- **User list**: a comma-separated list of login names of users who are members of this 
  group.

### Superuser

The _superuser_ is a type of user which contains special privileges in the system.

The superuser account has user ID `0`, and normally has the login name `root`.

On typical UNIX systems, the superuser bypasses all permission checks in the system. 

This means that the superuser can, for example, access any file in the system regardless 
of the permission on that file.

## Single Directory Hierarchy, Directories, Links, and Files

The kernel maintains a single hierarchical directory structure to organize all files in 
the system. (Contrast this with operating systems such as Windows where each disk space 
has its own directory hierarchy.)

At the base of this hierarchy is the _root directory_ named `/` (slash) to which all files 
and directories within the system are descendants of.

### File Types

Within the file system, each file is marked with a _type_ that indicates what kind of file 
it is.

One of these file types denotes ordinary data files usually called _regular_ or _plain_ 
files to distinguish them from other file types.

These other file types includes devices, pipes, sockets, directories, and symbolic links.

The term _file_ is commonly used to denote any type of file, not just a regulard file.

### Directories and links

A _directory_ is a special file whose contents take the form of a table of filenames 
coupled with references to the corresponding files.

This _filename-plus-pointer_ association is called a _link_, and files may have multiple 
links, and thus multiple names in the same or different directories.

Directories may contain links to both files and to other directories.

Every directory contains at least two entries: `.` (dot), which is a link to the directory 
itself, and `..` (dot-dot), which is a link to its parent directory.

Every directory has a parent except the root directory.

### Symbolic links

Symbolic links are links that only references names of another file (in contrast to a 
normal link whose references are the file itself).

Symbolic links are also called _soft links_, and normal links are called _hard links_.

### Pathnames

A pathname describes the location of a file within the single directory hierarchy and 
is either _absolute_ or _relative_:

- An _absolute pathname_ starts with the root path (`/`) ie. `/home/foobar/sample.txt`.
- A _relative pathname_ starts from the _current working directory_ ie. `./sample.txt`,
  `../foo/bar/sample.txt`, or `./a/b/c/sample.txt`.

### File ownership and permissions

Each file has an associated user ID and group ID that defines the owner of the file and 
the group to which it belongs to.

The ownership of a file is used to determine the access rights available to users of the 
file.

The system divides users into three categories: the _owner_ of the file, users of the 
group matching the file's group ID, and the rest of the world (_other_).

Three permission bits may be set for each of these categories:

- _read_ permission to view the contents of the file,
- _write_ permission to update the contents of the file,
- _execute_ permission to execute a file as a script.

These permissions may also be set on directories.

## File I/O Model

The most distinguishing feature of the I/O model on UNIX systems is the concept of 
_universality of I/O_.

This means that the same system calls (ie. `open()`, `read()`, `write()`, `close()`, etc.) 
are used to perform I/O operations on all types of files, including devices.

The kernel essentially provides a stream of bytes, which, in the case of disk files, 
disks, and tape devices, can be randombly accessed using the `lseek()` system call.

### File descriptors

The I/O system calls refer to open files using a _file descriptor_, a (usually small) 
non-negative integer.

Normally, a process inherits three open file descriptors when it is started by the 
shell:

- stdin(`0`): the file descriptor that the process uses to take its input
- stdout(`1`): the file descriptor that the process uses to provide its output
- stderr(`2`): the file descriptor that the process uses to provide its error messages 
  and abnormal conditions.

### The `stdio` library

To perform file I/O, C programs typically employ I/O functions contained in the standard 
C library.

This set of functions are referred to as the `stdio` library which includes `fopen()`, 
`fclose()`, `scanf()`, `printf()`, `fgets()`, `fputs()`, etc.

> These stdio functions are usually layered ontop of the `read()`, `write()`, `open()`, 
> and `close()` system calls.

## Programs

Programs are static data that can be executed by the machine. A program is either a 
binary machine-language instruction (from a compiled language) or a _script_ which 
directly gets executed by an interpreter.

## Processes

A process is a running instance of a program. When a program is executed, the kernel 
loads it into virtual memory, allocates space for program variables, and sets up kernel 
bookkeeping data structure to record various information (such as PIDs, termination 
status, user IDs, and group IDs) about the process.

From the kernel's perspective: processes are entities that the kernel must share various 
system resources with.

For resources that are limited such as memory, the kernel initially allocates some amount 
of it and adjusts its allocation over the lifetime of the process in response to its 
demands for the resource.

When the process terminates, all such resources are released for reuse by other processes. 

Other resources such as the CPU and network bandwidth, are renewable, but must be shared 
equitably among all processes.

### Process memory layout

A process is logically divided into the ff. parts known as _segments_:

- **Text**: the instructions of the program.
- **Data**: the static variables used by the program.
- **Heap**: an area from which programs can dynamically allocate extra memory.
- **Stack**: a piece of memory that grows and shrinks as functions are called and return 
  and is used to allocate storage for local variables and function call linkage info.

### Process creation and program execution

A process can create a new process using the `fork()` system call.

The process that executes `fork()` is called the _parent process_ and the new process is 
referred to as the _child process_.

The kernel creates the child process by making a duplicate of the parent process. The 
child inherits copies of the parent's data, stack, and heap segments, which it may then 
modify independently of the parent's copies.

> The program text, which is placed in memory as read-only, is shared by the two 
> processes.

The child process either executes a different set of functions in the same code as the 
parent or to load and execute an entirely new program (when the `execve()` system call is 
used).

> The `execve()` system call destroys the existing text, data, stack, and heap segments, 
> and replaces them with new segments based on the code of the new program.

### Process ID and parent process ID

Each process has a unique integer process identifier (PID).

Each process also has a parent process identifier (PPID) attribute, which identifies the 
process that requested the kernel to create the (sub) process.

### Process termination and termination status

A process can terminate in one of two ways:

1. By requesting its own termination using the `_exit()` system call.
2. Or by being killed by the delivery of a signal.

In either case, the process yields a _termination status_ which is a small nonnegative 
integer value that can be retrieved by the parent process using the `wait()` system call.

In the case of an explicit termination call using `_exit()`, the process can specify its 
own termination status.

If the process is killed by a signal, the termination status is set according to the type 
of signal that killed the process.

### Process user and group identifiers (credentials)

Each process has a number of associated user IDs (UIDs) and group IDs (GIDs). These 
include:

- **Real user ID** and **real group ID**: These identify the user and group to which the process 
  belongs. A new process inherits these IDs from its parent. A login shell gets its real 
  user ID and real group ID from the corresponding fields in the system password file.

- **Effective user ID** and **effective group ID**: These are used in determining the 
  permissions that the process has when accessing protected resources such as files and 
  interprocess communication objects. Typically, the process' effective user ID have the 
  same values as the corresponding real IDs. Changing the effective IDs is a mechanism 
  that allows a process to assume the privileges of another user or group.

- **Supplementary group IDs**: These IDs identify additional groups to which a process 
  belongs. A new process inherits its supplementary group IDs from its parent. A login 
  shell gets its supplementary group IDs from the system group file.

### Privileged processes

Traditionally on UNIX systems, a _privileged process_ is one whose effective user ID is 
`0` (superuser). Such a process bypasses the permission restrictions normally applied 
by the kernel.

A process may be privileged because it was created by another privileged process ie. 
by a login shell started by root.

Another way is via the set-user-ID mechanism which allows a process to assume an 
effective user ID that is the same as the user ID of the program file that it is 
executing.

### Capabilities

Since kernel 2.2, Linux divides the privileges traditionally accorded to the superuser 
into a set of distinct units called _capabilities_.

Each privileged operation is associated with a particular capability, and a process can 
perform an operation only if it has the corresponding capability.

A traditional superuser with an effective user ID of `0` corresponds to a process with 
all capabilities enabled.

Granting a subset of capabilities to a process allows it to perform some of the operations 
normally permitted to the superuser, while preventing it from performing others.

### The _init_ process

When booting the system, the kernel creates a special process called the _init_ which is 
the root process that manages all other processes within the system at runtime.

The init process always has the PID of `1` and runs with superuser privileges.

The init process can't be killed (not even by a superuser), and it terminates only when 
the system is shut down.

### Daemon processes

A _daemon_ is a special-purpose process that is created and handled by the system the 
same way as other processes but with a few distinctions:

- It is long-lived. A daemon process is often started at system boot and remains in 
  existence until the system is shut down.
  
- It runs in the background, and has no controlling terminal from which it can read 
  input from or write output to.

### Resource limits

Each process consumes resources such as open files, memory, and CPU time.

Using the `setrlimit()` system, a process can establish upper limits on its consumption 
of various resources.

Each such _resource limit_ has two associated values: a _soft limit_, which limits the 
amount of the resource that the process may consume; and a _hard limit_, which is a 
ceiling on the value to which the soft limit may be adjusted.

An unprivileged process may change its soft limit for a particular resource to any value 
in the range from zero up to the corresponding hard limit, but can only lower its hard 
limit.

When a new process is created with `fork()` it also inherits copies of its parents resource 
limits.
