---
title: "Chapter 5: Hostname Resolution and DNS"
description: "Resolving hostnames using DNS."
---

# DNS
The **Domain Name System (DNS)** is a hierarchical system that helps resolves values to other 
values ie. a hostname to an IPv4 address.

Each node in this system (including the requesting clients) stores a local cache of its 
resolved values and is stored at a set time which is called its **time-to-live (TTL)** value.

When a client makes a request to resolve some value it will first check its local cache, 
if no value is found then it queries it to the next node in the system which is its DNS 
server.

These DNS servers are provided to each client via an **Internet Service Provider (ISP)**.

The process of querying from the DNS server is as follows (assuming no node in the system 
has a local cache copy):

Given a client making a request to resolve `www.example.com` to an IPv4 address:

1. The client makes a query to its DNS server to resolve `www.example.com`, if the DNS 
   server does not know, then the client's DNS server asks the **root DNS server**.
2. The **root DNS server** provides a **Top-Level Domain (TLD) nameserver** to the client's 
   DNS server, this TLD nameserver then points it to the `.com` DNS server.
3. The client's DNS server then queries this `.com` TLD DNS server which then points to 
   an **authoritative nameserver** ie. `example.com`.
4. The **authoritative nameserver** is usually the last step in the system since it contains 
   all the information required to resolve a domain name. This makes it resolve the 
   `www.example.com` to some IP address.
5. Finally, once the client's DNS server receives this answer, it will store it in its 
   cache and return the value to the requesting client.

> See: [Cloudflare: DNS Server Types](https://www.cloudflare.com/learning/dns/dns-server-types/)

## DNS Record Types
There are different ways that a hostname can be resolved depending on the **record type**.

These record types describe how a hostname is resolved, for example an **A** record resolves
a hostname to an IPv4 address while a **AAAA** record resolves a hostname to an IPv6 address.

The ff. are some common record types available in a DNS server:

| Record Type | Description                  |
|-------------|------------------------------|
| A           | IPv4 address record          |
| AAAA        | IPv6 address record          |
| MX          | Mail exchange record         |
| CNAME       | Canonical name; record alias |

> See: [Wikipedia: List of DNS Records](https://en.wikipedia.org/wiki/List_of_DNS_record_types) for an exhaustive list.

# Name/address translation functions
The `getaddrinfo()` and `getnameinfo()` are networking APIs that convert domain names, 
hostnames, and IP names between human-readable text representations and structured binary 
formats.

## `getaddrinfo()`
`getaddrinfo()` converts human-readable text strings representing hostnames or IP addresses 
into a link list of `struct addrinfo` structures.

The function signature of `getaddrinfo()` is as follows:

```c
int getaddrinfo(
  const char *node,
  const char *service,
  const struct addrinfo *hints,
  struct addrinfo **res
);
```

- `node` specifies a hostname or address as a string ie. `example.com`, `192.168.1.1`, or
  `::1`.
- `service` specifies a port number as a string ie. `http` or `8080`.
- `hints` is a pointer to a `struct addrinfo` which specifies options for selecting the 
  address. The `addrinfo` structure has the ff. fields:
  
  ```c
  struct addrinfo {
    int              ai_flags;
    int              ai_family;
    int              ai_socktype;
    int              ai_protocol;
    socklen_t        ai_addrlen;
    struct sockaddr *ai_addr;
    char            *ai_canonname;
    struct addrinfo *ai_next;
  };
  ```
  
  The call to `getaddrinfo()` looks at only four ($4$) fields in `*hints`. The rest of the 
  structure should be zeroed-out. The relevant fields are `ai_family`, `ai_socktype`, 
  `ai_protocol`, and `ai_flags`.

  - `ai_family` specifies the desired address family. It can be `AF_INET` for IPv4, `AF_INET6` 
    for IPv6, or `AF_UNSPEC` for any address family.
  - `ai_socktype` could be a `SOCK_STREAM` for TCP or `SOCK_DGRAM` for UDP.
  - `ai_protocol` should be left to `0`.
  - `ai_flags` specifies additional options about how `getaddrinfo()` should work.
- The final parameter, `res`, is a double-pointer to a `struct addrinfo` and returns the 
  address(es) found by `getaddrinfo()`.

## `getnameinfo()`
`getnameinfo()` converts an `addrinfo` structure back into a text format.


The function signature of `getnameinfo()` is as follows:

```c
int getnameinfo(
  const struct sockaddr *addr,
  socklen_t addrlen,
  char *host,
  socklen_t hostlen,
  char *serv,
  socklen_t servlen,
  int flags
);
```

The first two parameters are passed in from the `ai_addr` and `ai_addrlen` fields of 
`struct addrinfo`.

The next two parameters, `host` and `hostlen`, specify a character buffer and buffer length 
to store the hostname or IP address text.

The ff. two parameters, `serv` and `servlen`, specify the buffer and length to store the 
service name.

Flags can be a bitwise OR combination of the following:
- `NI_NAMEREQD`
- `NI_DGRAM`
- `NI_NUMERICHOST`
- `NI_NUMERICSERV`
