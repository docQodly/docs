---
id: sandbox
title: Sandbox
---

import Column from '@site/src/components/Column'

## Overview

The Sandbox in Qodly is a free environment designed for exploring, testing, and learning. It’s ideal for trying out new templates, previewing Qodly features, and experimenting with the platform without any cost or commitment. However, it has limitations to ensure it's used for trial purposes only:

:::info
The Sandbox environment is restricted and has specific limitations to prevent long-term use or complex deployment scenarios.
:::

## Usage Rules

Using the Sandbox environment comes with certain rules and limitations:

- **Trial Usage**: Ideal for trying out Qodly features, familiarizing yourself with the platform, or creating a demo for stakeholders.

- **Limited to One Sandbox per User**: Each user can only create one Sandbox application. However, if needed, you can delete your current Sandbox and create a new one at any time.

- **Single Development Environment**: Unlike regular applications, the Sandbox only includes a single development environment. Additional environments cannot be added.

- **No Backup or Support**: The Sandbox environment is not backed up, and no official support is provided. It is designed for exploration and testing.

- **Watermarked Pages**: All pages within the Sandbox display a watermark, indicating that it is a trial environment.

- **Resource Restrictions**: The Sandbox environment is set to the default configuration, similar to the lowest-tier paid environment (Power 1, 100GB storage, and 1GB data outbound).


## Creating the Sandbox

To create a new Sandbox, follow these steps:

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
        <ul>
            <li> <strong>Access the Console</strong>: Open the Console.</li>
            <br/>
            <li> <strong>Click on "New Sandbox"</strong>: Select the "New Sandbox" button to initiate the creation process.</li>
        </ul>
    </Column.Item>
    <Column.Item width="45%">
    <img src={require('./img/newSandbox.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


- **Select a Template**: 

    1. Browse through the list of templates to find one that fits your project needs. Templates come with pre-configured code and settings suited for different types of projects.
    <img src={require('./img/templates.png').default} style={{borderRadius: '6px'}} />

    2. **Blank Template**: If you prefer a completely custom setup without any pre-built code, select the Blank Template.

    3. **More Info**: Click **More Info** under a template to view additional details, such as images, a description, author information, and the supported language.
    <img src={require('./img/templateMoreInfo.png').default} style={{borderRadius: '6px'}} />

    4. Once you’ve chosen a template, click **Create** to proceed.

Once created, you’ll see an overview of your Sandbox in the cosole homepage.


## Sleep Mode

To optimize resource usage, the Sandbox utilize an automatic Sleep Mode feature, which helps conserve resources when the environment is inactive:

- **Automatic Sleep Mode**: If the Sandbox remains inactive for more than 7 days, it will automatically enter Sleep Mode.

- **Manual Wake Up**: You can reactivate the Sandbox by clicking the `Wake Up` button, making it operational immediately. Each manual wake-up action is documented in the Activity log, including the time and user information.

- **Notifications**: Qodly sends email notifications to inform you when your Sandbox enters or exits Sleep Mode.


## Deletion Policy

If a Sandbox environment remains inactive for an extended period, Qodly may permanently delete it according to the following policy:

- **3-Month Inactivity Threshold**: If the Sandbox is not reactivated within 3 months, it will be permanently deleted.

- **Notification Prior to Deletion**: Before deletion, Qodly will send an email notification, giving you an opportunity to save any necessary data or take other actions.

