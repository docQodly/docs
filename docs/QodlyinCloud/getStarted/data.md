---
id: data-management
title: Data Management
---

Qodly offers various tools and services to manage and back up your data. You can use different assets for your app, such as icons, photos, videos, and documents, as well as your database data. In this section, you'll find everything you need to manage these types of data.

## Data Explorer

The [Data Explorer](https://developer.4d.com/docs/Admin/dataExplorer) allows you to access and manage your application data seamlessly. From within your studio, you can explore your environment comprehensively, view entities by DataClass, and perform updates or deletions as necessary.

## Automatic backup

In the Qodly Console you can activate the [backup option](../console/dataManagement.md). You can choose the frequency of your full backup. Incremental backup is created every hour in between. You can restore any backup at any time.

Your data are transferred from your environment and backed up in [AWS S3 services](https://aws.amazon.com/s3/). This process ensures that your information is securely stored in the cloud, protecting it from potential data loss or system failures. Using AWS S3, your data benefits from high durability and availability. The service employs advanced encryption methods to safeguard your information both in transit and at rest. 

## sFTP access

For downloading or uploading your assets, you have a secure access to your environment via sFTP. For additional information, please refer to the [provided documentation](../console/environmentsOverview.md#access-files-via-sftp). 