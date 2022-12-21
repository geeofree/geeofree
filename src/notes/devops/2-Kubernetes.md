---
title: 'Chapter 2: Kubernetes'
description: Introduction to Kubernetes.
---

[Kubernetes](https://kubernetes.io) is a tool for orchestrating containers: automating deployment, 
scaling, monitoring, and management of containers.

## Cluster

A [cluster](https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/) in Kubernetes is a set of containers that act as a single unit.

A Kubernetes cluster can be deployed in either a virtual or physical machine.

Clusters contain two entities:

* The **Control Plane** that manages the cluster
* **Nodes** which are the workers in the cluster

![Kubernetes Cluster](/images/figures/devops/kubernetes-cluster.png)

### Control Plane

The control plane is responsible for coordinating all activities in the 
cluster such as scheduling applications, maintaining applications' state, 
scaling applications, and rolling out new updates.

### Nodes

A node is a VM or physical computer that serves as a worker in the cluster that 
hosts application containers.

Each node is managed by its own **Kubelet** which is responsible for communicating 
with the Control Plane.

## Deployments

Deployments are configurations that instruct the Control Plane on how to create 
and update instances of applications in the cluster.

Once a Deployment is made, the Control Plane schedules the applications included 
in the Deployment to run on individual Nodes in the cluster.

Once the application instances are created in the Nodes, the **Deployment Controller** 
within the Control Plane then monitors the instances, for example: if any instances 
fail then an instance from another Node is used as its replacement. This allows 
the cluster to have a *self-healing* mechanism.

## Pods

Pods are instances of running containers within a Node where each container shares resources 
such as:

* Storage and volume
* Networking (Subnet)
* Information about how to run each container ie. the container image version or specific 
  ports to use

![Kubernetes Pods](/images/figures/devops/kubernetes-node.png)
