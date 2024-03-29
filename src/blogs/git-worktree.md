---
title: "Git Worktree"
description: "A quick introduction to the git-worktree command."
---

[git-worktree](https://git-scm.com/docs/git-worktree) is a command that allows you to checkout and work 
on multiple branches on the same repository concurrently.

This works by creating _linked worktrees_ of a repository; a separate 
directory that can be checked out to different branches in the repository.

> Note that each linked worktree can only check out branches that are not 
> yet checked out by other worktrees.

The most common use case for this command is a more convenient alternative 
to the common context switching flow that we do during development.

That is, when we have to stash then unstash unfinished work in order to do a 
different one, like so:

$stash \rightarrow checkout \rightarrow recheckout \rightarrow unstash$

With worktrees the process is more seamless as we no longer have to stash 
then unstash our current work since it's only a matter of switching worktree 
directories instead of changing branches on the same worktree.

> *Why not just use `git-clone`?*
> 
> The advantage of git-worktree over git-clone is that the bare repository is shared 
> between each worktree.
> 
> This means that the git config, metadata, commit history, branches, etc. are all 
> shared to each worktree which removes the overhead of trying to synchronize them 
> to each worktree.
