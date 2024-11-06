---
id: getStarted
title: Home
---



The Qodly Dashboard is the portal from which you can [manage](application-management.md) all your Qodly applications and [create](creating-apps.md) new Qodly applications. It also displays your pending invitations.

After [logging in to your Qodly account](../concepts/quickstart.md), the Dashboard presents an organized display of your Qodly applications on a single page.

<img src={require('./img/invitations.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />


## Sandbox

The Sandbox application serves as a trial application where you can freely explore Qodly's features and experiment. 

Note that you can only create a single Sandbox per user and the Sandbox is accessible only in a [single environment](#environments-and-services). 

To create your sandbox application, click on the New sandbox button. 

<img src={require('./img/new-sandbox.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />



### Sleep Mode for Sandbox Applications

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


## My Apps

This section lists all applications you've created, excluding the Sandbox. 


## Shared Applications

Here, you'll find applications developed by other collaborators and shared with you through [invitations]. For these applications, you can access the Studio and view other details but you cannot manage [billing]. 


## Invitations to own new applications pending

This section lists invitations your received to own and pay for an application. Someone invited you to pay for an app, in which case you will become the owner of that app and they will be added as a developer in it. You can pay or decline.

## Invitations Awaiting Response

This section lists invitations you sent to other people and that are awaiting for payment. A pending invitation can be either resent or cancelled.


## Environments and services

For each application (except the SandBox), the Qodly Server can be deployed across several instances, referred to as **environments**. You can [create as many environments as necessary](#add-environment), depending on your needs. 

Environments usually match the main steps or states of an application and you can enable services related to each state. For example, you can create three environments: 

- **Development**: for developers to create, design, and enhance their Qodly applications.
- **Staging**: developers, product managers, or quality teams can thoroughly test application features in a configuration that closely simulates the production environment.
- **Production**: where users can access and utilize your finalized application.

Each environment could offer the following set of services:

||Development|Staging|Production|
|---|---|---|---|
|Access to Qodly Studio|X|||
|Invite developers|X|||
|Invite users||X|X|
|Data Backup and Restore|||X|
|Updates|X|X|X|

When an environment is created, you can check its [status] at any moment.  


