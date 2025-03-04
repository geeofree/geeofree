---
title: "Chapter 2: The Cluster"
description: "The Cluster!"
---

# Managing your cluster
A PostgreSQL cluster is a collection of several databases that all run under the 
very same PostgreSQL service or instance.

Managing a cluster means being able to start, stop, take control, and get information 
about the status of a PostgreSQL instance.

## pg_ctl
The `pg_ctl` command-line utility allows you to perform different actions on a cluster, 
mainly initialize, start, restart, stop, etc.

`pg_ctl` accepts the command to execute as the first argument, followed by other specific 
arguments — the main commands are as follows:

* `start`, `stop`, `restart` execute the corresponding actions on the cluster.
* `status` reports the current status (running or not) of the cluster.
* `initdb` (or `init` for short) executes the initialization of the cluster, possibly 
  removing any previously existing data.
* `reload` causes the PostgreSQL server to reload the configuration, which is useful when 
  you want to apply configuration changes.
* `promote` is used when the cluster is running as a replica server (namely a standby 
  node) and, from now on, must be detached from the original primary becoming independent.

Generally speaking, `pg_ctl` interacts mainly with the postmaster, which in turn redirects 
commands to other existing processes.

For instance, when `pg_ctl` starts a server instance, it makes the postmaster process run, 
which in turn completes all the startup activities, including launching other utility 
processes.

On the other hand, when `pg_ctl` stops a cluster, it issues a halt command to the 
postmaster, which in turn requires other active processes to exit, waiting for them to 
finish.

`pg_ctl` needs to know where `PGDATA` is located.

Interacting with a cluster status is an action that not every user must be able to 
perform; usually, only an operating system administrator must be able to interact with 
services including PostgreSQL.

PostgreSQL, in order to mitigate the side effects of privilege escalation, does not allow 
a cluster to be run by privileged users, such as root. Therefore, PostgreSQL is run by a 
**normal** user, usually named `postgres` on all operating systems.

This unprivileged user owns the `PGDATA` directory and runs the postmaster process, and, 
therefore, also the processes launched by the postmaster itself.

`pg_ctl` must be run by the same unprivileged operating system user that is going to run 
the cluster.

### pg_ctl Commands

#### status
The `status` command just queries the cluster to get information.

```bash
$ pg_ctl status
pg_ctl: server is running (PID: 1)
/usr/lib/postgresql/16/bin/postgres
```

Here, the command reported that the server is running and has a PID of $1$ and provided 
the executable file used to launch the server (`/usr/lib/postgresql/16/bin/postgres`).

It can also report that the server is not running:

```bash
$ pg_ctl status
pg_ctl: no server running
```

In order to report the status of the cluster, `pg_ctl` needs to know where `PGDATA` is 
on disk.

#### start
The `start` command can be used to start a cluster.

```bash
$ pg_ctl start
waiting for server to start....
[27765] LOG:
starting PostgreSQL 16.0 on x
86_64-pc-linux-gnu, compiled by gcc (GCC) 12.1.0, 64-bit
[27765] LOG:
listening on IPv6 address "::1", port 5432
[27765] LOG: listening on IPv4 address "127.0.0.1", port 5432 [27765]
LOG: listening on Unix socket "/tmp/.s.PGSQL.5432"
[27768] LOG:database system was shut down at 2023-07-19 07:20:24 EST
[27765] LOG:database system is ready to accept connections
done
server started
```

The `pg_ctl` command launches the postmaster process, which prints out a few log lines 
before redirecting the logs to the appropriate log file.

#### stop
The `stop` command can be used to stop a running cluster.

```bash
$ pg_ctl stop
waiting for server to shut down....
[27765] LOG:received fast shutdown request
[27765] LOG:aborting any active transactions
[27765] LOG: background worker "logical replication launcher" (PID 27771)
exited with exit code 1
[27766] LOG:shutting down
[27766] LOG:checkpoint starting: shutdown immediate
[27766] LOG: checkpoint complete: wrote 0 buffers (0.0%); 0 WAL file(s)
added, 0 removed, 0 recycled; write=0.001 s, sync=0.001 s, total=0.035
s; sync files=0, longest=0.000 s, average=0.000 s; distance=0 kB,
estimate=237 kB; lsn=0/1529DC8, redo lsn=0/1529DC8
[27765] LOG:
database system is shut down
done
server stopped
```

There are three modes for the `stop` command:
1. The `smart` mode means that the cluster will wait for all the connected clients to 
   disconnect and only then will it shut the cluster down.
2. The `fast` mode means that it will immediately disconnect every client and will shut 
   down the server without having to wait.
3. The `immediate` mode will abort every PostgreSQL process, including client connections, 
   and shut down the cluster in a dirty way.

In order to provide the mode for the `stop` command the `-m` flag can be provided:

```bash
$ pg_ctl stop -m smart
waiting for server to shut down........................ done
server stopped
```

The default mode is `fast` which forces an immediate disconnection of the clients but 
ensures data integrity.
