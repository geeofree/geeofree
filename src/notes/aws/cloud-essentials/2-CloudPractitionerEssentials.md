---
title: 'CLF-C01: Cloud Practitioner Essentials'
description: AWS Cloud concepts, services, security, architecture, pricing, and support.
---

# Table of Contents

**Module 1: Introduction to Cloud Computing**
* [Cloud Computing](#cloud-computing)
  * [Cloud Deployment Models](#cloud-deployment-models)
    * [Cloud Deployment (Public Cloud)](#cloud-deployment-(public-cloud))
    * [On-Premise Deployment (Private Cloud)](#on-premise-deployment-(private-cloud))
    * [Hybrid Deployment](#hybrid-deployment)
* [Benefits of Cloud Computing](#benefits-of-cloud-computing)

**Module 2: Cloud Computing Services**

* [AWS Elastic Cloud Compute (EC2)](#aws-elastic-cloud-compute-(ec2))
  * [Instance Types](#instance-types)
  * [Pricing](#pricing)
  * [EC2 Auto Scaling](#ec2-auto-scaling)
* [AWS Elastic Load Balancing (ELB)](#aws-elastic-load-balancing-(elb))
* [AWS Simple Notification Service (SNS)](#aws-simple-notification-service-(sns))
* [AWS Simple Queue Service (SQS)](#aws-simple-queue-service-(sqs))
* [AWS Lambda (Serverless)](#aws-lambda-(serverless))
* [AWS Elastic Container Service (ECS)](#aws-elastic-container-service-(ecs))
* [AWS Elastic Kubernetes Service (EKS)](#aws-elastic-kubernetes-service-(eks))
* [AWS Fargate](#aws-fargate)

**Module 3: Global Infrastructure**

* [Regions and Availability Zones](#regions-and-availability-zones)
* [Edge Locations](#edge-locations)
* [Provisioning AWS Services](#provisioning-aws-services)
  * [AWS Management Console (Web)](#aws-management-console-(web))
  * [AWS Command Line Interface (CLI)](#aws-command-line-interface-(cli))
  * [AWS Software Development Kit (SDK)](#aws-software-development-kit-(sdk))
  * [AWS Elastic Beanstalk](#aws-elastic-beanstalk)
  * [AWS CloudFormation](#aws-cloudformation)

**Module 4: Networking**

* [AWS Virtual Private Cloud (VPC)](#aws-virtual-private-cloud-(vpc))
* [Subnets and Packet Filtering](#subnets-and-packet-filtering)
  * [Network Access Control Lists (ACLs)](#network-access-control-lists-(acls))
  * [Security Groups](#security-groups)

# Module 1: Introduction to Cloud Computing

## Cloud Computing

Provides an on-demand and pay-as-you-go model for IT resources.

### Cloud Deployment Models

Cloud Deployment Models are ways IT resources are deployed and consumed.

There are three (3) deployment models, namely:

#### Cloud Deployment (Public Cloud)

Resources are deployed to a Cloud provider and are available to more than one entity.

#### On-Premise Deployment (Private Cloud)

Resources are deployed to the Cloud using virtualization and resource management 
tools and are only available to a single organization.

#### Hybrid Deployment

Uses a combination of Public and Private deployments.

This is beneficial for cases where there are resources that are sensitive which 
should be kept in an on-premise infrastructure that also integrates with Cloud 
services for any non-sensitive resources.

## Benefits of Cloud Computing

1. **Trade Upfront Cost over Variable Cost:** instead of paying for and managing 
   on-premise IT infrastructure upfront, with Cloud Computing entities will 
   only pay for the resources that they use.
2. **No more managing of Infrastructure:** instead of having to build the foundations 
   of a business' IT Infrastructure, Cloud providers handle the management of the 
   infrastructure while business' focus on building their products.
3. **Stop guessing capacity:** instead of planning how much infrastructure is needed 
   to deploy an application, Cloud Computing provides and easy way to scale up and 
   down as needed for services to work.
4. **Benefits from massive economies at scale:** as more and more customers move 
   into the Cloud, pay-as-you-go prices will be lower.
5. **Increase speed and agility:** focus more on what's important for your product 
   rather than building the Infrastructure that it runs on.
6. **Go global in minutes:** provide services at a global scale seamlessly.

# Module 2: Cloud Computing Services

## AWS Elastic Cloud Compute (EC2)

A secure and resizable Virtual Private Server (VPS).

#### Instance Types

Each EC2 instance has different computing capabilities based on their type:

| EC2 Instance Type         | Description                                               |
|---------------------------|-----------------------------------------------------------|
| **General Purpose**       | Contains a balanced configuration of computing resources. |
| **Compute Optimized**     | Contains a high-performance processor.                    |
| **Memory Optimized**      | Contains a large-volume RAM.                              |
| **Accelerated Computing** | Contains a high-performance GPU.                          |
| **Storage Optimized**     | Contains a large-volume disk.                             |

#### Pricing

There are different pricing models for EC2 compute, namely:

##### On-Demand

Pay for the amount of compute usage that an instance works on. Suitable for unsteady 
workloads or for testing purposes.

##### AWS EC2 Savings Plan

Compute costs are discounted based on a committed amount of compute usage for either a 1 
or 3-year term. Suitable for steady workloads with known capacities.

Any usage up to the committed amount is discounted, going over the commitment however will 
be priced using the On-Demand compute costs.

##### Reserved Instances

Compute costs of On-Demand instances are discounted by committing to a 1 or 3-year term. 
This can be paid in three ways:

* Upfront where you pay the full amount.
* Partial where you pay a portion.
* No-upfront payment where you only pay at the end of the term.

At the end of the term you can keep using the instance but will pay On-Demand pricing unless:

* The instance is terminated.
* A new Reserved Instance is made with the same attributes (instance type, Region, tenancy, 
  and platform).

##### Spot Instance

Uses spare or unused EC2 capacity with a discount of up to 90% off of On-Demand prices.

This has the caveat of workloads being interrupted if AWS decides to reclaim the instance 
capacity at any time.

##### Dedicated Hosts

Reserves a physical machine. Suitable for compliance requirements.

#### EC2 Auto Scaling

AWS EC2 Auto Scaling provides scalability and elasticity on-demand.

There are two scaling approaches that can be used:

* **Dynamic Scaling** scales instances on-demand.
* **Predictive Scaling** scales instances on a given period.

There are three (3) things to configuring an EC2 Auto Scaling Group:

1. **Minimum Capacity** which defines the least amount of instances to 
   be available.
2. **Desired Capacity** is the initial number of instances that are 
   ran when the service is started.
3. **Maximum Capacity** defines the max number of instances in the 
   auto scaling group.

# Module 2: Cloud Computing Services

## AWS Elastic Load Balancing (ELB)

AWS ELB is a cloud service that distributes incoming traffic to different 
service nodes such that no service node handles the bulk of most of the requests.

## AWS Simple Notification Service (SNS)

A publish/subscriber service where publishers send data to subscribers (service nodes) 
that subscribe to certain topics (ie. a record was recently updated).

## AWS Simple Queue Service (SQS)

SQS enables asynchronous request handling by storing, sending, and receiving messages 
to and from service nodes.

## AWS Lambda (Serverless)

A service that handles the provisioning and handling of servers/instances and lets 
customers focus on building features rather than the infrastructure.

In this service, functions are *triggered* through some event like incoming requests or 
database updates.

## AWS Elastic Container Service (ECS)

Container orchestration cloud service; manages containerized applications in different 
instances.

## AWS Elastic Kubernetes Service (EKS)

Container orchestration cloud service using Kubernetes.

## AWS Fargate

Serverless compute engine for containers; handles the infrastructure that uses containerization 
to run applications such that customers can focus only on the features.

# Module 3: Global Infrastructure

## Regions and Availability Zones

### Regions

A geographical area that contains AWS resources.

When selecting a Region make sure to consider the following:

1. Compliance with data governance and legal requirements
2. Proximity to customers
3. Available services within a Region.
4. Pricing.

### Availability Zones

A single or group of data centers within a Region.

## Edge Locations

Are sites that provide CDNs (AWS CloudFront) and DNS (AWS Route 53) services.

## Provisioning AWS Services

There are several different ways to provision AWS services, namely:

### AWS Management Console (Web)

A web-based application that allows users to view, configure, and use different 
AWS services in the browser.

### AWS Command Line Interface (CLI)

A CLI application to provision AWS services. Best option if using shell scripts 
is preferred to automate provisioning.

### AWS Software Development Kit (SDK)

A software library that integrates with AWS services. Best option if using programming 
languages is preferred.

### AWS Beanstalk

An AWS service that takes in an application code and some configuration which will then 
automaticaly provision the infrastructure that the application will run on.

### AWS CloudFormation

An Infrastructure as Code (IaC) service: provisioning is done by defining them in a config 
file (YAML).

# Module 4: Networking

## AWS Virtual Private Cloud (VPC)

A service that provides a virtual network within the cloud.

In order for resources within the VPC to be available to the public, a 
*public internet gateway (IWG)* must be established on the VPC.

To make the resources in the virtual network to be available privately 
(as in only available to a few handful of people), a *private* IWG must 
be established on the VPC which the users can then connect to through 
a VPN.

## AWS Direct Connect

A networking service that connects private, on-premises networks directly 
to AWS. This requires coordination with a Direct Connect provider.

## Subnets and Packet Filtering

A subnet is a section of a network that contains a range of IP addresses that 
are available.

A common network configuration is to have a public and private subnets where 
public subnets are resources that can be used publicly ie. a website, and 
private subnets are resources that are available only within the network ie. 
a database instance.

### Network Access Control Lists (ACLs)

Stateless packet filtering of inbound and outbound traffic in a subnet.

By default, ACLs are configured to allow any inbound or outbound traffic.

### Security Groups

Stateful packets filtering of inbound traffic to an instance.

By default, Security Groups are configured to deny any inbound 
traffic.
