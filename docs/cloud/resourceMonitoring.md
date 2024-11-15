---
id: resourceMonitoring
title: Resource Monitoring
---

import Column from '@site/src/components/Column'


## Overview

Each application environment is an isolated instance in which you can configure specific resources and settings tailored to different stages of development. 


## General Tab

The **General Tab** contains core information and key actions, providing an at-a-glance view of the environment's current state.

### Environment Info

1. **Usage**:
   - **Disk Usage**: Shows the percentage of disk storage currently used by the environment, useful for tracking storage limits and understanding data volume.
   - **Memory Usage**: Displays the memory consumption percentage, allowing you to monitor memory use and scale resources as needed.

2. **Users**: Indicates the number of users with access to this environment.

3. **Server Status**:
   - **Online**: The server is operational and accessible.
   - **Control Buttons**:
     - **Stop**: Stops the server, making it unavailable temporarily.
     - **Restart**: Restarts the server, which can be useful for troubleshooting or applying configurations.
     - **Refresh**: Updates the server status display, allowing you to check the latest status.


### Application Access

This section provides links for accessing the application through different URLs, depending on the environment's authentication and access configuration:

- **Studio URL**: Opens the environment directly in the Studio, where you can develop and configure the application. You can either open this in a new tab or copy the URL.

- **Authenticated URL**: Directs to a login-protected version of the application, where only users in the application’s user registry have access. This link ensures that only authorized users can access this environment securely. You can either open this in a new tab or copy the URL.


- **Public URL: Development Environment Only**: Provides a publicly accessible URL, allowing anyone to access the application without authentication. This is useful for exposing specific pages to the public or setting up custom login management.

  - **Activate Public Access**: Click to enable public access. A confirmation dialog will appear to verify your choice.
  
  - **Deactivate Public Access**: Click to remove public access, making the environment private again.
  
  - **Copy Link**: Copies the URL for easy sharing.

    :::note
    By default, the public URL is disabled. You can **Activate public access** to make the environment publicly accessible, suitable for applications that don't require authentication for end users.
    :::

- **Custom Domain: Deployment Environments Only**: Allows you to use a custom domain for the application in deployment environments (such as Staging or Production) to create a professional, branded experience.

  - **Add Custom Domain**:
    1. Click the **Add Custom Domain** button, which opens a dialog for setting up your custom domain.
    2. In the **Set Custom Domain** dialog, enter your domain name.

  - **Domain Validation**:
    - Qodly provides instructions to configure your domain provider’s DNS settings for validation:
      - **Step 1**: Add a CNAME entry in your DNS with the provided values.
      - **Step 2**: Once validated, add a second CNAME entry to complete the setup.

  - **Using Your Own SSL Certificate**:
    - For enhanced security, you can add a custom SSL certificate by selecting "I want to use my own certificate file," which opens fields to enter:
      - **Certificate Body**: Paste the content of your SSL certificate.
      - **Certificate Chain (optional)**: Provide the certificate chain if required by your SSL provider.
      - **Private Key**: Input the private key associated with your certificate.


### Activity

The **Activity** section logs significant events and actions taken within the environment, offering an audit trail for tracking changes. Typical entries include:

- **Create Application**: Logs the creation of the environment.
- **Server Actions**: Logs actions like server start, stop, or restart.
- **Updates**: Tracks version updates and configuration changes.

Each activity entry includes:
- **Description**: Summarizes the action taken (e.g., server start).
- **Timestamp**: Provides the date and time the action occurred.
- **User**: Indicates which user performed the action.


## Metrics Tab

In the **Metrics** tab, you have access to detailed monitoring graphs for various performance metrics in your application environment. This tab allows you to visualize resource consumption over time, enabling effective tracking and optimization. 

At the top of the Metrics tab, there is a date range selector where you can specify the time period you want to analyze. The refresh button allows you to reload the metrics for the most up-to-date data. Also, each graph includes an export icon, allowing you to save the graph as an image. This feature is helpful for reporting or further analysis outside the Console.

### CPU Usage (%)
This chart displays the percentage of CPU capacity utilized by the application over a selected time period. It helps you identify peaks in CPU demand, allowing you to understand processing load and optimize your application’s performance accordingly.

### Memory Usage (%)
The memory usage graph shows the percentage of RAM currently being used by the application. Monitoring memory helps ensure your application has sufficient resources and can inform you if additional memory allocation is needed.

### Disk Usage (%)
This metric illustrates the percentage of disk storage currently occupied. Disk usage monitoring is crucial for applications with large datasets or significant storage requirements.

### Network RX IN (Bytes)
Network RX IN shows the incoming data received by your environment, measured in bytes. This metric is useful for tracking inbound data, which can help identify if your application is receiving high volumes of data at any given time.

### Network TX OUT (Bytes)
Network TX OUT displays the outgoing data transmitted from your environment. This metric is essential for monitoring outbound data usage, particularly if your application regularly sends data to external sources.

### Network Transmitted (Kilobytes)
This metric indicates the total data transmitted over the network, aggregated over time in kilobytes. It provides a broader view of your network usage, helping you manage data transmission and avoid potential network bottlenecks.


## Logs Tab

The **Logs Tab** in the Console provides access to detailed log records for monitoring, debugging, and tracking system events within your application environments. This tab allows you to filter and download logs based on a specific date range and log file type.

:::tip
The Date Range Selection feature allows you to filter log entries to a specific period:

- Start Date: Select the beginning date and time for the logs you want to view.

- End Date: Select the ending date and time for the logs.

Using the date range filter helps focus on specific periods, which is especially helpful when investigating incidents or tracking performance over time.
:::

### Log File Type

This section provides a drop-down menu where you can select the type of logs to view. The available log types include:

  - **qodlySTDOUTLog**: Contains standard output logs from the application, capturing routine system and application messages.

  - **4DDiagnosticLogServer**: Includes diagnostic data related to server performance and behavior, useful for more technical troubleshooting and server analysis.

Once you select a log type, click Refresh to update the log data based on the selected type and date range.

:::info
The Refresh Button updates the log display with the latest entries that match your selected date range and log type. This is especially useful after changing filters or when logs are dynamically updated during active monitoring.
:::

### Log Entries Display

The Log Entries Display shows a list of log events that match your selected filters. Each entry contains:

- **Date**: The date and time of the log event.
- **Log Details**: Describes the event or action, including any associated identifiers, error messages, and user actions. Like:
    - `INFO - New user connected`: Indicates a successful user connection to the system, along with specific identifiers like task ID and hostname.
    - `ERROR - cannot create socket`: Shows an error with details on the task attempting the action, which helps in diagnosing network or socket issues.


### Downloading Logs

The Download Button enables you to export the filtered log entries:

- After specifying the date range and log type, click Download to save the log data as a file.

- This file is useful for offline analysis, reporting, or archiving log data for future reference.


## Team Tab

The **Team** tab in Qodly enables you to manage user access within each environment, allowing for efficient collaboration with defined roles and permissions. Here’s how the Team tab works:

### Adding Users

To add a user to the environment:

1. Click the **Add User** button on the right.
2. Choose to either **Select from existing users** or **Add a new user**.

   - **Select from existing users**: Pick a user who has previously been added to other environments or applications.
   - **New user**: If the user is not yet registered in the application, select this option to add their details manually.

3. When adding a new user, provide the following details:
   - **Email address**: Required email address for inviting the user.
   - **First Name** and **Last Name**: Helps in identifying the user.
   - **Profile**: Choose the user’s profile based on the roles defined in your Qodly application. By default, the profile is set to Admin, but you can select other roles as defined in your app.

4. Click **Submit** to finalize the addition. The user will receive an invitation to access the environment.

### Managing Users

Once users are added, they are listed in the **Team** tab with columns for **First Name**, **Last Name**, **Email**, and **Profile**. For each user, you have the following actions available:

- **Edit User**: Click the edit icon to update the user's information, including changing their role. After making changes, click **Update** to confirm. This is useful for modifying a user’s access level or correcting details.

- **Delete User**: Click the delete icon to remove the user from the environment. A confirmation dialog will appear, prompting you to confirm the deletion to avoid accidental removal.

### Search and Filter

The Team tab includes a **Find User** search field, allowing you to quickly locate specific users by name or email. This feature is particularly helpful in larger teams where managing multiple users can become challenging.



## API Keys Tab

The API Keys tab in Qodly allows you to create and manage API keys for secure, programmatic access to your application’s resources. These keys enable external systems or scripts to interact with your application in a controlled and secure manner. 

:::tip
For more detailed information on configuring and using API keys, please refer to the dedicated [API Keys page](#).
:::

## Data Tab

The **Data** tab provides essential tools for managing and monitoring backups within your application's environment. This feature allows you to schedule regular backups, view backup history, and monitor backup activities. Note that the **Data** tab and backup functionalities are only available with a subscription. 

### Subscription Requirement

- If you are viewing a shared application, you’ll see a message prompting you to ask the app owner to upgrade the application for backup access.
- For owned applications without an active subscription, the tab will display an option to **Upgrade subscription**, allowing you to unlock the backup features directly.

### Data Administration

The **Data Administration** section includes settings for managing the backup frequency and viewing details about the latest backup.

#### Backup Info

- **Frequency**: Displays the current backup schedule, such as daily or weekly, including the specific time (GMT) when backups are performed. This frequency can be set according to your data protection requirements.
- **Last Backup**: Shows the date and time of the most recent backup, ensuring you can keep track of the latest data preservation point.

**Icons**:
- **Refresh**: Updates the displayed information to reflect any recent changes to backup settings or the last backup.
- **Settings (gear icon)**: Opens a dialog where you can configure the backup frequency and other backup-related settings.

### Configuring Backup Frequency

To adjust the backup frequency:

1. Click the **Settings** (gear) icon within the **Backup Info** section.

2. Set the desired frequency (e.g., daily, weekly) and specify the time for the backup to occur.

3. Click **Save** to confirm your changes.

This configuration ensures that your application data is periodically backed up based on the schedule that best fits your operational needs.

### Backup History

The **Backup History** section provides a log of all completed backups, allowing you to review each backup's details and status.

- **Time**: Displays the exact timestamp of each backup event.
- **Type**: Indicates the type of backup (e.g., full backup or incremental backup).
- **Size**: Shows the size of the backup, helping you manage storage usage.
- **Qodly Version**: Reflects the application version at the time of backup, allowing for version tracking.
- **Release**: Displays the release associated with the backup, if applicable.
- **Status**: Displays the verification status of each backup. Backup verification involves checking data integrity, which may include verifying records and/or indexes to ensure that data can be restored accurately.

**Actions**:
- **Download**: Available for each backup entry, allowing you to download a copy of the backup for offline storage or testing.
- **Restore**: Allows you to restore the application to the state captured in the backup. Note that this action should be used with caution as it will revert your data to the specified backup point.

### Activity Log

At the bottom of the **Data** tab, the **Activity** section tracks recent actions related to data management and backup settings.

- **Set Backup Frequency**: Logs changes to the backup frequency, including the user who made the change and the specific schedule set.
- **Create Backup**: Records each instance of a manual or scheduled backup, showing the timestamp and user involved.

This log helps maintain an audit trail for data management activities, providing transparency and accountability for any changes to backup configurations or data state.


## Deploy Tab

The Deploy tab provides essential tools for managing and deploying versions of your application in a controlled and organized manner. Each deployment step allows you to ensure the integrity and functionality of your application before releasing it to end-users. This tab is commonly used to manage environments like Staging and Production, where you need to maintain stable and tested versions.

:::tip
For more detailed information on Deploying apps, please refer to the dedicated [Deployment page](#).
:::
