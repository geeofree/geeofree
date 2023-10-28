---
title: "Chapter 5: Data Storage Structures"
description: "Data structures on storage media."
---

## File Organization

A database is mapped into a number of different files managed by the underlying operating 
system. These files are organized logically as a sequence of records and are mapped onto 
disk blocks.

Each file is also logically partitioned into fixed-length storage units called _blocks_, 
which are file system units for both storage allocation and data transfer.

Records are also stored as either _fixed-length_ or _variable-length_ in size in any given 
file depending on the database implementation.

### Fixed-Length Records

Fixed-length records are simple and straightforward to manage.

For example, given an $instructor$ record:

```sql
type instructor = record
                    ID varchar(5);
                    name varchar(20);
                    dept_name varchar(20);
                    salary numeric(8, 2);
                  end
```

Assuming that each character is $1$-byte each and `numeric(8, 2)` occupies $8$-bytes, 
then each $instructor$ record stores a maximum of $53$-bytes.

![Figure 1: sample instructor record](/images/figures/database/instructor-record.png)

There are two issues with this approach however:

1. Unless the block size is a multiple of $53$, some records will be stored in cross-block 
   boundaries which would at least require two block accesses to read/write records in.
2. It is difficult to delete records from this structure as the space occupied from the 
   deleted record must be filled with some other record of the file (or we must have a 
   way of marking deleted records so that they can be ignored).

To avoid the first problem, we can allocate only as many records that would fit into a 
block by dividing the block size to the record size and ignore the remaining unused 
bytes of the block.

The deletion problem could be solved by moving the last record to the space of the 
recently deleted record.

Another way is defining a _file header_ in the beginning of the file that contains 
metadata and store what is a called a _free-list_ containing addresses of block 
sections that are available.

This free-list could then be iterated whenever new records are inserted:

![Figure 2: insertion free list](/images/figures/database/insertion-free-list.png)
