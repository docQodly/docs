---
id: creating-apps
title: Creating Applications
---


To create a new application, open the [Qodly Console](getStarted.md) and click on the **New App** button on the right side of the page or in the sidebar. 

<img src={require('./img/new-app.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />

A list of available templates is displayed. 

<img src={require('./img/templates.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />

Templates are pre made applications with a starting code for different types of projects. You can select a template and use it as a starting point to customize for your needs. Click on the **More info** button under a template to get additional information about the template application. You can also select the Blank Template to create an emtpy application. 

When you click on **Select**, you enter the application configuration page. 

:::note

The application configuration page is not displayed when you create your [Sandbox application](getStarted.md#sandbox). 

:::

## Configuration

<img src={require('./img/configure.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}}/>

This panel allows you to configure the new application.

### General info

- **Application name**: Enter the name of your application. This name will be used for your application on the Qodly Cloud platform and could be changed afterwards.
- **Field**: Select the global domain for your application. 
- **Description**: Enter a short description of your application purpose (ex: "car rental")
- **Tags**: Enter one or more tags that will help finding your application. To add a tag, type in and press Enter.

<img src={require('./img/tags.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />

### Environments

Use this area to configure resources required for every environment of your application. By default, only the "Development environment" is available.

You can adjust values depending on your needs. When you select a package, the price is calculated in the upper right area. You can modify these options at any moment if necessary. 


#### Qodly Power

Memory size and number of CPU instances that will be used for the environment.


#### Storage

By default you get a 100 GB of storage for free, depending on the size of your database you can add more storage.


#### Backup

Enables the backup feature.

By default, backup is not available for applications. Select this option to purchase it as an addon. The price depends on the size of your storage (see [managing applications] for more details).


#### Network

Size of data sent over the network from the environment.

By default, you get 1 GB of outbound data to the internet from your database. 

Anything above the prepaid network is billed on use. So, if you prepaid for 100 GB of network and used 150 GB, the 50 GB surplus will be billed. Note that extra data is billed on a higher rate at the end of the month. 



:::note

The Sandbox has a resource configuration similar to the default environment (Power 1, 100 GB storage, 1 GB data sent to the network), so that you can use your Sandbox application to evaluate your needs. 

:::

### Add environment


You can use the **Add environment** button to add as many [deployment environments](getStarted.md#environments-and-services) as required for your application.

For each added environment, you need to enter a **Name** and a **Description**. You can then [configure](#configuration) the environment separately. 

## Cloning Applications

Rather than starting from scratch, you have the option to clone any existing application and kickstart a new project based on the same codebase.

To initiate application cloning, locate the desired application in the Apps list and click the **Clone** button:

<img src={require('./img/clone.png').default} style={{borderRadius: '6px', borderColor: '#1D1B49', borderStyle: 'solid'}} />

The cloning process duplicates all your code, except data and resources.

## Billing

### Pay on your own

### Transfert ownership

## Payment confirmation

