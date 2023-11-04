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

Another way is using a _file header_ from the beginning of the file that contains 
metadata and store what is a called a _free-list_ containing addresses of block 
sections that are available.

This free-list could then be iterated whenever new records are inserted:

![Figure 2: insertion free list](/images/figures/database/insertion-free-list.png)

### Variable-Length Records

Variable-length records arise due to the presence of variable-length fields such as 
strings as well as types that contain repeating fields such as arrays or multisets.

In general, there are two main problems that must be solved when trying to implement 
variable-length records:

1. How is a single record represented such that attributes can be extracted easily 
   despite having variable lengths.
2. How should a record be stored within a block such that records can be extracted 
   easily from them.

In both of these cases, metadata is commonly used to easily query positions of a 
variable-length field in a record or a record within a block.

#### Record Structure

The first issue can be addressed by dividing each record into two sections: the first 
section containing fixed-length values and the second section containing the 
variable-length values.

A variable-length field in this case is represented in the fixed-length section of the 
record where its offset and length are defined.

![variable-length record structure](/images/figures/database/variable-length-record-structure.png)

In this example the $ID$ attribute is represented in the fixed-length section as being 
at the offset position of $21$ and having a length of $5$.

Note also the existence of the **null bitmap** which represents which attributes have 
`null` values in them where the left-most and right-most bit represents the first 
and last attributes of each record respectively.

#### Block Structure

The second issue is commonly solved using the *slotted-page structure* where the block 
contains a header at the beginning and the records span from the end.

The block header in this structure commonly contains the ff. information:

- The number of record entries
- The end of free space in the block
- An array containing the location and size of each record

![variable length block structure](/images/figures/database/variable-length-block-structure.png)

Records inserted in this structure are allocated from the end of free space location. 
Removing records frees them from the list and records preceding them move forward to 
occupy the new remaining space(s).
