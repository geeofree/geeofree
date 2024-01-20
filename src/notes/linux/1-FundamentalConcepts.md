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
