---
id: getStarted
title: Qodly Applications
---


## Application Overview

The Qodly Cloud Management Console (QCMC) is the portal from which you can manage all your Qodly applications. 

After [logging in to your Qodly account](../concepts/quickstart.md), the QCMC presents an organized display of your Qodly applications on a single page.


Your Qodly applications fall into three categories:

- **Sandbox**: This serves as a trial application where you can freely explore Qodly's features and experiment. Please note that the Sandbox is accessible only in the [development environment](../concepts/platform.md#environments-and-services). 
- **Applications**: This section lists all applications you've created, excluding the Sandbox.
- **Shared Applications**: Here, you'll find applications developed by other collaborators and shared with you through invitations.

<img src={require('./img/console.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />

## Environments and services

For each application, the [Qodly Server](../concepts/platform.md#qodly-server) is deployed across three distinct instances, referred to as environments:

- **Development**: This environment is ideal for developers to create, design, and enhance their Qodly applications.
- **Staging**: In this environment, developers, product managers, or quality teams can thoroughly test application features in a configuration that closely simulates the production environment.
- **Production**: The production environment is where users can access and utilize your finalized application.


Each environment offers a unique set of services:

||Development|Staging|Production|
|---|---|---|---|
|Access to Qodly Studio|X|||
|Invite developers|X|||
|Invite users||X|X|
|Data Backup and Restore|||X|
|Updates|X|X|X|



## Cloning Applications

Rather than starting from scratch, you have the option to clone any existing application and kickstart a new project based on the same codebase.

To initiate application cloning, locate the desired application in the Apps list and click the **Clone** button:

<img src={require('./img/clone.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />

The cloning process duplicates all your code, except data and resources.


## Sleep Mode for Sandbox Applications

Sandbox environments benefit from an automatic Sleep Mode feature, intended to enhance resource efficiency. 

The Sleep Mode feature is based upon the following principles:

- **Automatic Sleep Activation**: If your sandbox's Studio is not accessed for a continuous period of 7 days, it will automatically enter Sleep Mode. This is part of our strategy to optimize resource usage.

- **Easy Reactivation**: You can easily wake your sandbox from Sleep Mode during your next login, resuming your work seamlessly.

Entering and waking up from sleep mode is automatically handled by the Qodly Cloud. You are notified by messages on screen when accessing the QCMC.

:::important Important Notice - Deletion Policy

If the sandbox is not reactivated within 3 months, it will be subject to permanent deletion.
You will receive an email notification before any action is taken, ensuring you're informed at every step.
We believe this feature will not only improve our system's efficiency but also encourage more active engagement with your sandbox projects.

:::
