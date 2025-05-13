---
id: dataManagement
title: Data Management
---

import Column from '@site/src/components/Column'

## Overview

The **Data** tab provides essential tools for managing and monitoring backups within your application's environment. This feature allows you to schedule regular backups, view backup history, and monitor backup activities. Note that the **Data** tab and backup functionalities are only available with a subscription. 

## Subscription Requirement

- If you are viewing a shared application, you’ll see a message prompting you to ask the app owner to upgrade the application for backup access.

- For owned applications without an active subscription, the tab will display an option to **Upgrade subscription**, allowing you to unlock the backup features directly.

## Data Administration

The **Data Administration** section includes settings for managing the backup frequency and viewing details about the latest backup.

- **Frequency**: Displays the current backup schedule, such as daily or weekly, including the specific time (GMT) when backups are performed. This frequency can be set according to your data protection requirements.

- **Last Backup**: Shows the date and time of the most recent backup, ensuring you can keep track of the latest data preservation point.


There are additional actions available to help you manage your backups effectively:

- **Refresh**: Updates the displayed information to reflect any recent changes to backup settings or the last backup.

- **Settings (gear icon)**: Opens a dialog where you can configure the backup frequency and other backup-related settings.


## Configuring Backup Frequency

To adjust the backup frequency:

1. Click the **Settings** (gear) icon within the **Backup Info** section.

2. Set the desired frequency (e.g., daily, weekly) and specify the time for the backup to occur.

3. Click **Save** to confirm your changes.

This configuration ensures that your application data is periodically backed up based on the schedule that best fits your operational needs.


## Backup History

The **Backup History** section provides a log of all completed backups, allowing you to review each backup's details and status.

- **Time**: Displays the exact timestamp of each backup event.

- **Type**: Indicates the type of backup (e.g., full backup or incremental backup).

- **Size**: Shows the size of the backup, helping you manage storage usage.

- **Qodly Version**: Reflects the application version at the time of backup, allowing for version tracking.

- **Release**: Displays the release associated with the backup, if applicable.

- **Status**: Displays the verification status of each backup. Backup verification involves checking data integrity, which may include verifying records and/or indexes to ensure that data can be restored accurately.


Each backup entry provides essential actions to manage your backups efficiently:

- **Download**: Available for each backup entry, allowing you to download a copy of the backup for offline storage or testing.

- **Restore**: Allows you to restore the application to the state captured in the backup. Note that this action should be used with caution as it will revert your data to the specified backup point.


## Activity Log

At the bottom of the **Data** tab, the **Activity** section tracks recent actions related to data management and backup settings.

- **Set Backup Frequency**: Logs changes to the backup frequency, including the user who made the change and the specific schedule set.

- **Create Backup**: Records each instance of a manual or scheduled backup, showing the timestamp and user involved.

This log helps maintain an audit trail for data management activities, providing transparency and accountability for any changes to backup configurations or data state.