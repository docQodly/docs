---
id: how-to
title: Guide for Developers on a Qodly Platform
---

## Overview

Qodly is a global platform for developing, deploying, and running web applications. It consists of three main components:

- **Studio**: Develop and test your application.
- **Qodly Server**: Backend including 4D database, Web Server, and ORDA.
- **Cloud Console**: Manage your deployments.

Everything you need is included in your subscription. You can create your application from start to finish without installing anything.
You can also extend your widgets by building or installing custom components in the Studio.
The best way to start is by creating your Sandbox. It's completely free and perfect for trying out Qodly, exploring samples, and testing new features. You can even create a quick demo for your client before beginning your application. You'll have the option to clone it or start from scratch.

## Creating your Sandbox

Creating your Sandbox is the first step for your journey in Qodly.

1. Sign Up and Log In: Create an account and log in to the platform.
2. Create your Sandbox
3. Start from scratch or choose a template from the catalog. You can delete and reinstall it as needed. The only limitation is one sandbox per user.

## Starting Your First Project or Application

1. Clone an existing app by clicking on "Clone" or start a new app and choose an application template.
2. Set Up App Details: Enter the project name, description, and other details.
3. Choose the resources you need for your development environment.
4. Add your billing details. You can add your own card or invite someone else to add theirs.
5. Subscribe.
6. Your development environment is installed. You can go to Studio and start building your app.
7. A welcome tour will begin for a quick overview of the studio.
8. Start from the frontend by dragging and dropping components (or widgets) or use pre-made templates. Alternatively, begin by preparing your data using the Data Model, code your functions, and then bind them with Qodly Sources to the frontend.
9. Manage roles and privileges in the editor.
10. Your app is ready for testing or deployment.

## Testing and Debugging

Different tools are available for testing at any time during your development, integration, and staging phases.
During development, you have two levels of preview: page level and application level.  During creating your page, you can preview it at any time. 
The previewer lets you view the entire application, making it easy to test all behaviors. If you find a bug, you can activate the debugger, which will guide you step by step to fix it. 
To check your data, use the Data Explorer to navigate or edit it.
You can also invite users with specific roles to test the application externally, which is the best way to gather their feedback.


## Deployment

### Publish Your App: Deploy your app to a live environment

When you're ready to deploy your application, you need to do two things: add a deployment environment and create a release for your application.

To add a new environment, go to the Subscription page and click the "New Environment" button.

To create a new release, go to the Deploy tab in your development environment and click "Create New Release."

Once your new environment is ready, go to its Deploy tab and deploy the release. Your app will be live in this environment. You can add your own domain and configure it with your DNS to make your app accessible with your custom domain.

### Version Control: Manage different versions of your app

In the Deploy section, you'll find all the releases you've created. You can organize them however you like: by feature version, client, environment, etc. It's very flexible. You can also restore any release at any time and by environment.

### Monitor Performance

In the "Metrics" tab, you can track important metrics for each environment. Monitor your application's CPU and memory usage to understand its behavior. You'll receive an email alert if consumption reaches 80%. This helps you decide if you need to upgrade your environment's power. You can upgrade anytime on the Subscription page.

Another key metric is data transfer to the Internet, which includes all data your application sends online. Data consumption is billed per GB each month. You can optimize your budget by selecting an Internet data pack on the Subscription page. You can also set a specific email for notifications here.

### Multi-environments App

For each app, you start with the Development environment. You can then add as many environments as you want without any limitations. For each environment, you can choose the power and storage size, and you can upgrade them at any time. This flexibility allows you to organize your application according to your needs and context.

If you're working alone, your app might only need one deployment environment. If you need a staging environment for testing a new release, simply add an additional environment and delete it when you're done testing. If you have one release per client, you can add one environment per client. For a SaaS, you might have one environment per release.

Define your architecture as you like.


## Data Management

Qodly offers various tools and services to manage and back up your data. You can use different assets for your app, such as icons, photos, videos, and documents, as well as your database data. In this section, you'll find everything you need to manage these types of data.

### Data Explorer

Allows you to access and manage your application data seamlessly. From within your studio, you can explore your environment comprehensively, view entities by DataClass, and perform updates or deletions as necessary.

### Automatic backup

In the Qodly Console you can activate the backup option. You can choose the frequency of your full backup. Incremental backup is created every hour in between. You can restore any backup at any time.

### sFTP access

For downloading or uploading your assets, you have secure access to your environment via sFTP. For additional information, please refer to the provided documentation. 

## Security & Data Access


## Maintenance and Updates

- Regular Updates: Keep your app updated with new features and bug fixes.
- User Support: Provide support and address user issues promptly.



## Advanced Features

- Custom login
- Custom Components
- Hybrid App: Public and Private Access
- Integration

## Templates

- Samples
- App templates
- Pages templates

## Community and Resources

- **Join the Community**: Participate in forums and user groups.
- **Documentation**: Refer to official documentation for detailed guides.
- **Training and Tutorials**: Take advantage of training sessions and tutorials.

## Billing


### Pricing Model

The pricing model in Qodly is simple and flexible. It is based on the environment, the configuration of the environment, and the data transferred to the internet.
Fixed price plan by environment includes standard settings for power, storage, and a pack of internet data. The price per environment increases if you upgrade the power or storage. At the beginning of the next month, we will calculate the data transferred, and you will be billed for any overage data consumed.
If you can estimate your data usage in advance, we recommend upgrading your data plan. The cost per GB is lower, which will save you money. You can decrease the plan at any time.

### Pricing & Account Management

For our most up-to-date information, please visit [Qodly pricing](https://qodly.com/pricing).

### Subscription & Upgrade

Once you created your new application, on the Subscription page, you can manage all your subscriptions, including creating new environments, upgrading, or deleting them. It provides a global view for each application.
The billing cycle starts at the beginning of the month. Depending on the day you subscribe or upgrade, the difference will be calculated and invoiced.

### Downgrade (coming soon)

### Cancelation

You can cancel at any time in any environment, except the development one, or even cancel the entire application. Your subscription is canceled immediately. 

:::warning

We highly recommend downloading your assets and exporting your backup before canceling.

:::


## Payment & Invoices

On the Billing page, you can view all your invoices, the amount of your next invoice, and your credit card information. Qodly uses Stripe to handle payments. If you have a Stripe account, you can use it, or you can add your own card. You can change your card at any time.
If there's an issue with the credit card during renewal, you will automatically receive email alerts from Stripe. You will have very limited access for one month, after which your application will be automatically deleted. Please address the problem promptly as soon as you receive the Stripe notification.


## Refunds

If you're not happy with your Qodly subscription, you can cancel at any time. For any more information, please contact our Sales team at [contact@qodly.com](contact@qodly.com)

No refunds are given for cancellations. If the Company suspends or terminates your Account or these Terms, you will not receive any refund for unused subscription time, fees, content, data, or anything else.