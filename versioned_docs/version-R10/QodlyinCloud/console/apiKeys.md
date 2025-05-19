---
id: apiKeys
title: API Keys
---

import Column from '@site/src/components/Column'


## Overview

The API Keys tab in Qodly allows you to create and manage API keys for secure, programmatic access to your application’s resources. These keys enable external systems or scripts to interact with your application in a controlled and secure manner. 


### API Endpoint

The API endpoint serves as a gateway, allowing developers to interact with Qodly applications programmatically. Using standard HTTP methods, the endpoint can facilitate data access, trigger actions, or retrieve information by integrating with Qodly’s [`openDatastore`](../qodlyScript/commands/openDatastore.md) command or [REST requests](../../Integrations/api/overview.md).

### API Key

An API key acts as a unique identifier for authenticating external clients. Each key is linked to a specific [**role**](../../4DQodlyPro/roles/rolesPrivilegesOverview.md), controlling the scope of access and actions permitted within the application. It must be included in the HTTP headers of all REST requests to validate the requester’s permissions. [See below](#using-api-keys) for more information.


## Managing API Keys

To set up secure access, generate API keys and retrieve the relevant endpoint.

### Accessing API Keys

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        In your environment setup, navigate to the API keys tab, where you’ll see the API endpoint and a list of any previously created keys.
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/api1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<br/>

The initial API key management screen shows the environment’s API endpoint and provides an interface for creating new keys.

<img src={require('./img/apiNothing.png').default} style={{borderRadius: '6px'}} />


### Creating a New API Key

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        Click the <img src={require('./img/api5.png').default} style={{borderRadius: '6px', width: '20%'}} /> button to open the API key configuration dialog. Define properties such as the key’s description, type, assigned role, expiration date, and allowed hosts.
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/api2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


| Property           | Description                                                                                                            |
|--------------------|------------------------------------------------------------------------------------------------------------------------|
| **Description**    | A brief identifier for the key to help recognize its purpose. |
| **API Type** | Choose between two types:<br/><br/>1. **Standard**: This is the regular type, appropriate for most users, where access permissions are managed according to the assigned role.<br/><br/>2. **Administration**: Intended for developers of custom components, offering extended privileges that allow for comprehensive access and management of application data, bypassing standard role-based restrictions. |
| **Role**           | Assigns access level based on [application-defined roles](../../4DQodlyPro/roles/rolesPrivilegesOverview.md). Default is Admin. |
| **Expiration Date** | Sets a validity period up to one year for security purposes. |
| **Allowed Hosts**  | Restrict the API key’s use to specific IPs by adding IP addresses under this setting. |


:::tip

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        This API key is initially configured for public access, allowing usage from any host. To specify restrictions to specific hosts, add their IP addresses.
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/api-ip.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::

Once complete, click `Submit` to create the API key.


### Copying API Endpoint

Click the copy button beside the endpoint URL to use it in your application's REST calls.

<img src={require('./img/api3.png').default} style={{borderRadius: '6px'}} />


### API Management Table

In the API management section, each key includes options to:

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <ul>
            <li><strong>Show API Key</strong>: This button <img src={require('./img/api-show.png').default} style={{borderRadius: '6px', width: '7%'}} /> reveals the API key in the interface and includes a copy button <img src={require('./img/api-copy.png').default} style={{borderRadius: '6px', width: '6%'}} />, enabling easy duplication of the API key for use in configuring your application or services.<br/></li>
            <li><strong>Delete API Key</strong>: Positioned next to the API key, this button <img src={require('./img/api-delete.png').default} style={{borderRadius: '6px', width: '7%'}} /> removes the key upon confirmation, safeguarding against unintended deletions.<br/></li>
            <li><strong>Edit API Key</strong>: Also adjacent to the API display, the edit button <img src={require('./img/api-edit.png').default} style={{borderRadius: '6px', width: '7%'}} /> opens a configuration dialog for modifying the API key's details.<br/></li>
        </ul>
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/api4.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


## Using API Keys

To authenticate REST requests to the Server, the API key must be included in the **HTTP header**. Here are two ways to handle API key integration:

- **Using the [`openDatastore`](../qodlyScript/commands/openDatastore.md) Command**: When connecting to another Qodly application, use the `openDatastore` command. Simply pass the API endpoint and key through the `hostname` and `api-key` properties in the `connectionInfo` parameter. This method automatically includes the API key in the HTTP headers for underlying REST requests.

- **Using the REST API Directly**: Insert the `api-key` into the HTTP header with the API endpoint URL in all REST requests. For a practical example, refer to the [API endpoint usage example in Postman](../../Integrations/api/overview.md#api-endpoint-usage-example-in-postman).


## How to Manage Your API Access - Tutorial Video

This tutorial video provides a step-by-step guide on managing API access:

- Accessing the API Key in the Qodly Console.
- Authenticating requests with role-based permissions.
- Reading data based on user permissions.
- Creating new records via the API.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0NafveAMEHg?si=JfA7PYZnJYZVdwJ7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
