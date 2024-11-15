---
id: myApps
title: My Apps
---

import Column from '@site/src/components/Column'

## Overview

The **My Apps** area is where you can manage all the applications you’ve created in Qodly, including paid applications and any cloned from the Sandbox environment. This area provides access to essential management options, configuration settings, and monitoring tools, enabling you to control every aspect of your applications.


## Creating a New Application

To create an app in the Console, follow the steps below, using the provided screenshots for guidance. Each step includes specific details on the configuration options available during setup.

### Step 1: Navigate to "My Apps"

1. Go to the **My Apps** section in the Console.
2. Click the **New App** button on the right side of the page or in the sidebar to begin the application creation process.

### Step 2: Choose a Template

After selecting **New App**, you’ll be directed to the **Template Selection** page, where a variety of templates are available to serve as starting points. 

1. Browse through the list of templates to find one that fits your project needs. Templates come with pre-configured code and settings suited for different types of projects.
2. **Blank Template**: If you prefer a completely custom setup without any pre-built code, select the Blank Template.
3. **More Info**: Click **More Info** under a template to view additional details, such as images, a description, author information, and the supported language.
4. Once you’ve chosen a template, click **Select** to proceed.


### Step 3: Configure Application Details

You’ll now enter the **Application Configuration** page, where you’ll provide essential information and allocate resources for your new app, like:

- **Application Name**: Enter a unique name for your application. This name will be visible in the Console and can be updated later if needed.
- **Field**: Select the global domain or purpose of your application (e.g., "E-commerce" or "Project Management").
- **Description**: Provide a short description of your app’s purpose to help identify it within the Console.
- **Tags**: Add tags to categorize your app. This feature is useful for organizing and searching for applications. To add a tag, type it in and press **Enter**.

#### Environment Configuration

The next section allows you to configure resources for each environment associated with the app. By default, only the **Development Environment** is available.

1. **Qodly Power**: Choose the required computing power for your environment. Options vary by memory and CPU configurations (e.g., Power 1 with 2 GB memory and 2 CPU, Power 2 with 4 GB memory and 2 CPU).
2. **Storage**: By default, you receive 100 GB of free storage. Additional storage can be added based on the anticipated needs of your app.
3. **Backup**: Enable the backup feature if needed. By default, backups are not available but can be purchased as an add-on based on the storage size.
4. **Network**: Configure the data transferred over the network. The default allocation is 1 GB, with options to add more data if your application requires it.

As you make selections for each environment resource, the total estimated cost will be displayed on the upper-right side of the page, allowing you to budget effectively.

#### Adding Additional Environments

1. Click the **Add Environment** button if you want to configure deployment environments like Staging or Production.
2. For each new environment, provide a **Name** and a **Description**.
3. Customize the configuration separately for each environment, allowing you to tailor resources to specific development stages.


### Step 4: Finalize Billing

1. **Billing Options**: Choose between two billing options:
   - **Pay on Your Own**: Select this option if you plan to cover the app’s expenses with your own payment method.
   - **Transfer Ownership**: If someone else will be responsible for payment, you can transfer ownership to that individual.

2. **Payment Confirmation**: After selecting your billing option, you’ll be prompted to confirm the payment method.


### Step 5: Access Your New App

After completing the configuration and payment steps:

1. Your development environment will be created, and the app will be listed under **My Apps**.
2. **Studio Access**: You’ll see an option to open the app in the Qodly Studio, where you can start building and customizing your application.


Once created, the application will appear in the My Apps list. This list, displays all applications you have created, excluding the Sandbox environment. 