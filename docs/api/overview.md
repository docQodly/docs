---
id: overview
title: Getting Started
---

import Column from '@site/src/components/Column'


Qodly provides a sophisticated REST server that facilitates direct access to data stored within Qodly applications. This functionality is enabled by default once proper configuration settings are applied.


## Locating API Keys and Endpoint URLs

To effectively use the Qodly REST API, you will need to obtain the API Key and Endpoint URL, which are essential for authenticating and directing your API calls.

:::info
To fetch these credentials, please refer to the detailed steps in the [API Keys](../cloud/api-key#managing-api-keys) section of this documentation.
:::

## Configuring Data Access 

Access to dataclasses and their attributes is granted by default via the REST server, enhancing integration capabilities with external applications.

### Managing Dataclass Exposure

To restrict access to sensitive dataclasses such as those containing user credentials, follow these steps:

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ol>
            <li>Open the Model Editor.</li> <br/>
            <li>Access the properties panel of the dataclass you intend to modify.</li> <br/>
            <li>Enable the <code>Do not Expose as REST</code> option within the Scope property.</li>
        </ol>
    </Column.Item>
    <Column.Item width="30%">
		<img src={require('./img/dataclass-exposeAsRest.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


### Managing Attribute Exposure

By default, attributes within these dataclasses are also exposed. To limit exposure of specific attributes:

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ol>
            <li>In the Model Editor, select the attribute you intend to hide.</li> <br/>
            <li>Enable the <code>Do not Expose as REST</code> option in the Scope property.</li>
        </ol>
    </Column.Item>
    <Column.Item width="30%">
		<img src={require('./img/attribute-exposeAsRest.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::tip
Attributes can only be accessed via REST if their parent dataclass is also exposed. Hiding the dataclass will restrict access to all its attributes.
:::


## REST Requests

### Structure

REST requests are structured to provide flexibility in accessing and manipulating data:

- Base URL followed by specific parameters: `{{APIEndpoint}}/rest/{{dataClass}}`

- Common Operations: [$filter](./$filter), [$attributes](./$attributes), [$skip](./$skip), [$method](./$method)...

### Parameters

REST request parameters follow a structured format, beginning with the base URL and appending query parameters to tailor the request. 

Parameters start with a `?` symbol, followed by additional parameters separated by `&`:

```
GET {{APIEndpoint}}/rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600
```

In the above example:

- [**$filter**](./$filter): Narrows the returned data based on specific criteria.
- [**$method**](./$method): Determines the type of operation to be performed.
- [**$timeout**](./$timeout): Sets a limit on the time the server should wait before aborting the request.


### Handling Ambiguities

To avoid ambiguities, particularly with string values, it is advisable to enclose parameters in quotes. For instance, if querying a last name that includes an apostrophe, you might specify it as `"lastName='O'Connor'"` to ensure the query is parsed correctly.

### Data Modifications

While `GET` methods are primarily used for retrieving data, `POST` methods can be employed to add, update, or delete entities within a dataclass:

- **POST** to create new entities.
- **PUT** or **PATCH** to update existing entities.
- **DELETE** to remove entities.

### Data Formatting

By default, REST APIs return data in JSON format. If an array format is preferred, the [`$asArray`](./$asArray) parameter can be used. This is particularly useful when integrating with frontend frameworks that may expect data in a specific format.

### Server Responses Codes

Each REST request is met with a server response that includes a status code indicating the result of the request—ranging from successful operations to various errors that might have occurred during the process. This feedback is vital for error handling and ensuring robust API integration:

| Status Code | Type                                | Message                                                       | Description                                                                                    |
|-------------|-------------------------------------|---------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| 200         | **Success**                         |                                                               | Request processed without error.                                                               |
| 400         | **Missing API Key**                 | Some headers are missing, required headers [api-key]          | If the API key is not included, you will encounter an "Authentication Token Missing" message.   |
| 401         | **Invalid API Key**                 | Api-key Not Valid                                             | This response occurs when an incorrect API key is provided.                                     |
|             | **Expired API Key**                 | Api-key expired                                               | If the API key has expired, the error message "Authentication Token Expired" is returned.       |
|             | **Unauthorized**                    | No permission to read for the Users dataclass                  | Permissions error (check user's permissions).                                                  |
|             | **No permission to access Dataclass** | No permission to read for the Users dataclass                 | Permissions error (check user's permissions).                                                  |
|             | **No permission to access Attributes** | No permission to read for "Name" attribute in the Users dataclass | Permissions error (check user's permissions).                                              |
| 402         | **No Session**                      |                                                               | Maximum number of sessions has been reached.                                                    |
| 403         | **Access Denied**                   | 403 - Forbidden                                               | The `403` error surfaces when the API key is valid but lacks necessary permissions.              |
| 404         | **Resource Not Found**              | Appid or env not found in Table.                              | The `404` error is shown if the endpoint URL is incorrect or the endpoint does not exist.       |
|             | **Dataclass Not Exposed**           | The "Users" dataclass cannot be found                         | A `404` error occurs if the dataclass does not exist on the server or is not exposed as REST.   |
|             | **Attribute Not Exposed**           | The "Name" attribute cannot be found in The "Users" dataclass | If an attribute is not exposed in REST, this also results in a `404` error.                      |
| 500         | **Server Error**                    |                                                               | The `500` error indicates server-side issues; contacting the API provider is recommended.        |
| 502         | **Request Not Processed**           | 502 Bad Gateway                                               | Server might not be started.                                                                   |


## API Endpoint Usage Example in Postman


### Setting Up Postman for API Requests

To use Postman for testing REST APIs:

1. Launch Postman and initiate a new API request setup.

2. Enter the appropriate API endpoint URL from the Qodly Cloud application.

3. Select the desired HTTP method (GET, POST, etc.) for your API call.

<img src={require('./img/postman1.png').default} style={{borderRadius: '6px'}} />


### Authenticating API Requests

Secure API requests by adding an API key:

1. In the Authorization tab of your request setup, select `API Key` from the Type dropdown.

2. Enter `api-key` in the "Key" field and input your API key in the "Value" field.

3. Ensure the API key is included in the request header for authentication.

<img src={require('./img/postman2.png').default} style={{borderRadius: '6px'}} />

This setup automatically adds the API key to each request from this configuration, minimizing manual errors and simplifying the process.