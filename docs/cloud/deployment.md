---
id: deployment
title: Release Management and Deployment
---

Managing releases and deployments involves a unique approach that links releases between different environments, such as development and staging. This behavior is designed to ensure the integrity and consistency of your deployment pipeline but may lead to specific constraints when it comes to deleting releases.

## Creating a Release in Development

When initiating a **release** within the **development** environment, it begins as a standalone release that has not yet been pushed to any other environment. The steps involved include:

1. Navigate to the **Deploy** tab.

2. Click on the <img src={require('./img/NewRelease.png').default} style={{borderRadius: '6px',  width: '10%'}} /> button, where you can provide a title and a brief description for the release.

![release](img/release.png)

:::info
During this phase, you have the freedom to delete <img src={require('./img/releaseCouldBeDeleted2.png').default} style={{borderRadius: '6px',  width: '4%'}} />  this release as needed.
<img src={require('./img/releaseCouldBeDeleted1.png').default} style={{borderRadius: '6px'}} />
This is particularly useful for cases where a release in development may have issues or requires modifications before being promoted to other environments.
:::


## Release Deployment

To commence the deployment of a release, simply click on the deployment icon <img src={require('./img/deploy.png').default} style={{borderRadius: '6px',  width: '4%'}} /> positioned adjacent to the release in question.

<img src={require('./img/releaseCouldBeDeleted1.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::info
A distinct behavior emerges when a release is deployed to the **staging** environment. Qodly establishes a connection between the releases in the **development** and **staging** environments, linking the release in **staging** with the one in **development**. This linkage is replicated when deploying to the **production** environment, ensuring a continuous deployment process.
:::

## Inability to Delete a Release

Once a release becomes connected or is deployed <img src={require('./img/deployed.png').default} style={{borderRadius: '6px',  width: '4%'}} /> to a subsequent environment, such as the <strong>staging</strong> phase, deletion of the release is no longer an available option. This restriction is evident through the icon <img src={require('./img/releaseCantBeDeleted2.png').default} style={{borderRadius: '6px',  width: '4%'}} /> next to the release, which signifies the inability to remove it from either the **development** or **staging** environments. 

<img src={require('./img/releaseCantBeDeleted1.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::info
This is a deliberate design choice made to ensure that releases are not accidentally removed, which could lead to disruptions or inconsistencies in the deployment process.
:::