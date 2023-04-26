---
title: Git Gud
description: A summary of selected topics discussed in the book "Pro Git" by Scott C. & Ben S.
---

This post is an excerpt of selected topics discussed in the free e-book: 
[Pro Git](https://git-scm.com/book/en/v2) by Scott Chacon & Ben Straub.

Please see the referenced materials to learn more.

## Version Control Systems

A **Version Control System (VCS)** is a software that records changes of files
over time in a file system; VCSs keep track of file changes that can then be 
reverted to at any point.

There are many classes of VCS:

- **Local VCS**: A VCS that runs on a single local computer.
- **Centralized VCS**: A VCS that runs as a centralized server that client hosts 
  can connect to to manage their repositories; a client-server VCS.
- **Distributed VCS**: A VCS that *clones* the repository, copying the contents of 
  a project to each host; a peer-to-peer VCS.

Git is a Distributed VCS.

## Git's Workflow

The process of managing repositories in Git is through a 3-step workflow:

1. **Working Tree**: Files that have changes or are *untracked* (have not been 
   added to the commit history) are put into this state.
2. **Staging Area**: Modified files are selected and added in this state 
   in preparation of being of being *committed* or added as a new 
   snapshot in the commit history.
3. **Commit History**: Once the staged files are committed they are added 
   as a new snapshot in the commit history.

![Git Workflow](/images/git-workflow.png)

## Viewing The Commit History

To view the commit history: `git log`

To view the commit history with the changes made in each commit: `git log -p`

To view the last $n$ commits in the commit history: `git log -<n>`

To view the commit history with the statistic of the changes made in each commit: `git log --stat`

To view the commit history with a simple output: `git log --oneline`

To view the commit history with a graph of the branches each commit emerged from: `git log --graph`

To view the commits with the occurrences of some string: `git log -S <string>`

To view all the commits of some file: `git log -- <path/to/file>`

## Tagging

Tagging is the notion of marking a specific point in the commit history ie. 
for releases.

In Git there are two types of tags:

1. **Lighweight Tags**: are tags that just point to a specific commit.
2. **Annotated Tags**: are full objects in the Git database and contain
   metadata such as the name, email, date, and optional message.

To create a lightweight tag: `git tag <tagname>`.

To create an annotated tag provide either `-a`, `-s`, or `-m` flags.

To push a tag to a remote host: `git push origin <tagname>`.

To delete a tag use the `-d` option.

## Branching

Git uses pointers to a specific commit hash when it does branching.

When Git is initialized it creates a default branch (usually called `master`).

Git has a pointer called `HEAD` that it uses to identify the branch that 
it currently points to.

For example, the ff. `git log --oneline`:

```git
69dea327 (HEAD -> master) Update docs
395cbde4 Fix a bug
f123b15c Add a new feature
ab1b23fe Initial commit
```

![Git commit tree sample](/images/git-commit-tree-sample.png)

If a new branch is created using `git branch quas`:

![Git commit tree with new branch](/images/git-commit-tree-with-new-branch.png)

Here the current branch is still `master` since the `HEAD` pointer still 
points to it.

To change the current branch to the new branch use `git checkout quas`:

![Git commit tree with new HEAD](/images/git-commit-tree-new-head.png)

When new commits are made in this current branch `quas`, it will move 
the pointer to that latest commit's hash.

For example when two new commits are made:

![Git commit tree with new branch commits](/images/git-new-branch-commits.png)

While in this branch, the `master` branch might have changes added to it.
This causes a *divergence*:

![Git branch divergence](/images/git-branch-divergence.png)

### Merging

There are three (3) common situations when commits of diverging branches 
are *merged*:

1. **Fast-forwarding**: If the merge is simple enough Git just moves the pointer 
   of the target branch to the latest commit hash of the source branch.
2. **Recursive**: If the source branch's parent commit node is on an older commit 
   node in the target branch: Git will try to resolve this by creating a merge tree
   on the common ancestor of the two branches and using that to resolve the 
   3-way merge.
3. **Conflicts**: If Git cannot find a way to resolve the merge itself then manual 
   intervention is required.

> Please see [Git: Merge Strategies](https://git-scm.com/docs/merge-strategies) for a reference.

### Rebasing

A rebase is another way to apply commits to divergent branches.

Unlike merges which can create new commits on a target branch, 
rebasing reapplies the commits on a source branch to the latest 
commit of a target branch.

## Git Tools

A list of useful Git commands and syntax.

### Revision Selection

#### Git's Reflog

The `reflog` is a history of all references made in a local machine 
ie. where the `HEAD` or branch pointers pointed to at a particular 
point in time.

To view the reflog: `git reflog`

#### Referencing Commits

To refer to a commit's parent use either the `~` or `^` commit 
identifier.

For example:

```git
# Get the parent of the HEAD pointer
git show HEAD^

# Get the parent of the commit with SHA-1 ID "bed2681f"
git show bed2681f~
```

To refer to a range of commits the `<sha1_from>..<sha1_to>` syntax 
can be used:

```git
# Get all the commits that are unique to `quas` and are not
# in the `master` branch.
git show master..quas

# Get all the commits that are unique to the `master` branch 
# and are not in the `quas` branch.
git show quas..master
```

### Searching

Git provides the `grep` comman to search for various strings in 
its database; in the working tree, staging area, or commit 
history.

To search for a string in Git: `git grep <string>`

To print the line number use the `-n` flag.

To only print the number of occurences in each file use 
the `-c` flag.

To show the *context* of where the search string is executed 
in use `-p` or the `--show-function` options.

### Rewriting History

#### Git's filter-branch

The `filter-branch` git command rewrites branches using *filter* 
options.

> **NOTE**: This command **SHOULD BE USED WITH CAUTION** as misusing 
> it may cause irreversible damage and/or corruption to 
> your project's Git database.
> 
> Please refer to the **SAFETY** section in the filter-branch's 
> help page: `git filter-branch --help` for more.

##### Removing a file from every commit

To remove a file from every commit using `git filter-branch` run:

```git
git filter-branch --tree-filter 'rm -f <path/to/file>' HEAD
```

This should be useful for situations where sensitive data was 
committed in the repository.

## Git Internals

In essence, Git is a [content-addressable filesystem](https://en.wikipedia.org/wiki/Content-addressable_storage) with a VCS interface 
on top of it.

This section describes all the objects in the `.git` directory that allows 
it to do its work.

### Plumbing & Porcelain

Plumbing and porcelain commands in Git are essentially just 
low-level and high-level commands respectively.

### The .git Directory

When a Git repository is initialized in a project it creates a `.git` 
directory with more or less the ff. files:

| File/Directory | Description                                                                                       |
|----------------|---------------------------------------------------------------------------------------------------|
| `config`       | A file that contains all Git related configurations.                                              |
| `index`        | The staging area file.                                                                            |
| `HEAD`         | A file that stores the current branch/commit hash.                                                |
| `hooks/`       | A directory that stores files for several Git hooks or events.                                    |
| `info/`        | A directory that stores global exclude files for ignored patterns not tracked under `.gitignore`. |
| `objects/`     | The directory that stores all content in the Git database.                                        |
| `refs/`        | The directory that stores all pointers into commit objects.                                       |

### Git Objects

There are three (3) main objects that are created in Git:

1. `blob` - Blob objects store the content of a file.
2. `tree` - Tree objects store blob objects or other trees and information 
   about their *filename* (blobs) or *dirname* (trees).
3. `commit` - Commit objects store tree objects and metadata of the commit.

### Viewing Objects

The Git `cat-file` command is used to view details about objects.

To view an object's content run the command with the `-p` flag.

To view the type of an object run the command with the `-t` flag.

#### Blob Creation

The Git `hash-object` command is used to create blob objects.

To create a blob object using contents of a file: `git hash-object -w <path/to/file>`.

To create a blob through a stdin pipe: `echo 'Hello Git!' | git hash-object -w --stdin`.

As mentioned, blobs don't really carry any metadata about the content like 
its filename or directory name as it's really only an object that stores 
information about contents.

For this the tree object has to be created.

#### Tree Creation

To create a tree, blobs or tree objects have to be added to the *index* or 
*staging area* with a *mode* and a *path*.

To do this run: `git update-index --add --cacheinfo <mode> <object_sha1_hash> <path>`

The ff. options used in this are as follows:

- `--add` adds the blob or tree object to the index.
- `--cacheinfo <mode> <object_sha1_hash> <path>` registers a file that is not in the current working directory.

Once the files are indexed the tree can now be created by running: `git write-tree`.

#### Commit Creation

Finally, once the tree objects have been constructed the commit object 
can now be created.

This is done by running the `commit-tree` command.

To create a commit object with no parent commits: `git commit-tree -m <message> <tree>`

To create a commit with a parent commit: `git commit-tree -m <message> -p <parent_commit_sha1> <tree>`

> An object can also be manually created using tools for hashing and compression.
> See [Pro Git - Git Internals: Object Storage](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_object_storage) for more information.
