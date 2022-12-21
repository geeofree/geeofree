---
title: 'Chapter 1.1: Docker Basics'
description: Basic terminologies and concepts in Docker.
---

## Docker

Docker is a tool that packages applications using a lightweight and 
isolated process called *containers*.

Containers make it easier to provide applications with its dependencies 
without having to provision to an entire OS and also connect with other 
containerized applications.

### Images

Are executable *isolated virtual environments* that contains the filesystem, 
configuration, and packages that exists within that environment.

### Containers

Instances of images.

## Common Commands

## Images

| Command                             | Description                                         |
|-------------------------------------|-----------------------------------------------------|
| `docker build <path> -t <tag-name>` | Build an image from a `Dockerfile` with a tag name. |
| `docker images`                     | View a list of available docker images.             |
| `docker rmi <image>`                | Remove an image.                                    |
| `docker image prune`                | Remove unused images.                               |

## Containers

| Command                 | Description         |
|-------------------------|---------------------|
| `docker ps -a`          | List all containers |
| `docker rm <container>` | Remove a container. |

## Execution

| Command                                                                       | Description                                                                                                                           |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `docker run -dp <host-port>:<container-port> --name <container-name> <image>` | Start a container from an image in the background and provide it with a name and export a port from the container to the host.        |
| `docker exec -it <container-name> <command>`                                  | Execute a command on a running container with an `interative (-i)` and `tty (-t)` flag.                                               |
| `docker start <container>`                                                    | Start a stopped container.                                                                                                            |
| `docker stop <container>`                                                     | Stop a running container.                                                                                                             |
| `docker kill <container>`                                                     | Kill a running container; sends a signal to the container, possibly not allowing for a _graceful_ exit.                               |

## Management

| Command                      | Description                                               |
|------------------------------|-----------------------------------------------------------|
| `docker system prune`        | Remove unused data such as images, networks, and volumes. |
| `docker logs -n <container>` | Get the most recent logs of a container.                  |
