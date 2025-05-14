---
id: deployment
title: Deployment
---

## Publish Your App: Deploy your app to a live environment

When you're ready to deploy your application, you need to do two things: [add a deployment environment](../console/myApps.md#adding-additional-environments) and [create a release](../console/releaseManagementDeployment.md#creating-a-release-in-development) for your application.

To add a new environment, go to the Subscription page and click the "New Environment" button.

To create a new release, go to the Deploy tab in your development environment and click "Create New Release."

Once your new environment is ready, go to its Deploy tab and [deploy the release](../console/releaseManagementDeployment.md#deploying-a-release). Your app will be live in this environment. You can [add your own domain](../console/resourceMonitoring.md#application-access) and configure it with your DNS to make your app accessible with your custom domain. [Data](../console/dataManagement.md) and [users](../console/userAccountManagement.md) are managed by the environment. 


## Version Control: Manage different versions of your app

In the [Deploy section](../console/releaseManagementDeployment.md), you'll find all the releases you've created. You can organize them however you like: by feature version, client, environment, etc. It's very flexible. You can also restore any release at any time and by environment.

## Monitor Performance

In the ["Metrics" tab](../console/resourceMonitoring.md#metrics-tab), you can track important metrics for each environment. Monitor your application's CPU and memory usage to understand its behavior. You'll receive an email alert if consumption reaches 80%. This helps you decide if you need to upgrade your environment's power. You can upgrade anytime on the Subscription page.

Another key metric is data transfer to the Internet, which includes all data your application sends online. Data consumption is billed per GB each month. You can optimize your budget by selecting an Internet data pack on the Subscription page. You can also set a specific email for notifications here.

## Multi-environments App

For each app, you start with the Development environment. You can then add as many environments as you want without any limitations. For each environment, you can choose the power and storage size, and you can upgrade them at any time. This flexibility allows you to organize your application according to your needs and context.

If you're working alone, your app might only need a single [deployment environment](../console/releaseManagementDeployment.md). If you need a staging environment for testing a new release, simply [add an additional environment](../console/myApps.md#adding-additional-environments) and delete it when you're done testing. If you have one release per client, you can add one environment per client. For a SaaS, you might have one environment per release.

Define your architecture as you like.
