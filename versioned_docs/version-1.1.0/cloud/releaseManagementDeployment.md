---
id: deployManagement
title: Deploy Management 
---

import Column from '@site/src/components/Column'


## Overview

The **Deploy** tab offers crucial tools for managing and deploying application versions in a controlled and organized way. Each step in the deployment process helps ensure your application’s integrity and functionality before it reaches end-users. This tab is typically used to manage staging and production environments, where stable and tested versions are essential.

The key difference between development and deployment environments is the availability of Qodly Studio:

<img src={require('./img/environments.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />


## Creating a Release in Development

When creating a **release** in the **development** environment, it initially exists as an independent release that hasn’t yet been pushed to other environments. The steps to create a release include:

1. Go to the **Deploy** tab.

2. Click on the <img src={require('./img/NewRelease.png').default} style={{borderRadius: '6px',  width: '10%'}} /> button, then provide a title and a brief description for the release.

![release](img/release.png)

:::info
At this stage, you can freely delete <img src={require('./img/releaseCouldBeDeleted2.png').default} style={{borderRadius: '6px',  width: '4%'}} /> the release if needed.
<img src={require('./img/releaseCouldBeDeleted1.png').default} style={{borderRadius: '6px'}} />
This flexibility is useful when a release in development has issues or requires modifications before it is promoted to other environments.
:::


## Deploying a Release

To deploy a release, simply click on the deployment icon <img src={require('./img/deploy.png').default} style={{borderRadius: '6px',  width: '4%'}} /> next to the release you wish to deploy.

<img src={require('./img/releaseCouldBeDeleted1.png').default} style={{borderRadius: '6px'}} />

&nbsp; &nbsp; 

:::info
When deploying to the **staging** environment, Qodly creates a link between the releases in the **development** and **staging** environments. This connection ensures that the release in **staging** corresponds to the one in **development**. The same linkage occurs when deploying to **production**, supporting a seamless deployment process.
:::


## Restrictions on Deleting a Release

Once a release is deployed <img src={require('./img/deployed.png').default} style={{borderRadius: '6px',  width: '4%'}} /> to a subsequent environment, such as **staging**, it can no longer be deleted. This restriction is indicated by the icon <img src={require('./img/releaseCantBeDeleted2.png').default} style={{borderRadius: '6px',  width: '4%'}} /> beside the release, signifying that it cannot be removed from the **development** or **staging** environments.

<img src={require('./img/releaseCantBeDeleted1.png').default} style={{borderRadius: '6px'}} />

&nbsp; &nbsp; 

:::info
This design choice helps prevent accidental removal of releases, which could cause disruptions or inconsistencies in the deployment process.
:::