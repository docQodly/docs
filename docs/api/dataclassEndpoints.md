---
id: dataclassEndpoints
title: Endpoints and Data Access
---

import Column from '@site/src/components/Column'


This section outlines the operations available for interacting with `dataClass` entities through REST API requests. It includes direct interactions with entities, manipulation through class functions, and detailed querying capabilities.


## Available Endpoints

### Overview

| Endpoint                                            | Example                              | Description                                                                                      |
|-----------------------------------------------------|--------------------------------------|--------------------------------------------------------------------------------------------------|
| [`/rest/dataClass`](#dataclass)                                 | `/Employee`                          | Retrieves all entities within the `dataClass`, defaulting to the first 100 entities.             |
| [`/rest/dataClass[key]`](#dataclasskey)                          | `/Employee[22]`                      | Fetches details for a specific entity identified by the primary key within the `dataClass`.      |
| [`/rest/dataClass:attribute(value)`](#dataclassattributevalue)              | `/Employee:firstName(John)`          | Retrieves entities where a specific attribute matches the given value.                           |
| `/rest/dataClass/dataClassClassFunction`        | `/City/getCity`                      | Executes a class function that affects the entire data class.                                    |
| `/rest/dataClass/entitySelectionClassFunction`  | `/City/getPopulation/?$filter="ID<3"`| Executes a function on a selection of entities, with optional filter parameters.                 |
| `/rest/dataClass[key]/entityClassFunction`    | `City[2]/getPopulation`              | Performs a function on a specific entity identified by the key within the `dataClass`.           |

:::info
For detailed descriptions and usage of class functions, refer to the [Class Functions documentation](classFunctionsOverview.md).
:::


### rest/dataClass

#### Purpose

The endpoint `rest/{{dataClass}}` returns all entities within a `dataClass`, such as `Company`. By default, the system fetches the first 100 entities unless specified otherwise through query parameters like [`$top` or `$limit`](./$top$limit).

#### Properties Returned

The `rest/{{dataClass}}` endpoint returns structured information as outlined in the following table:

| Property            | Type          | Description                                                        |
|---------------------|---------------|--------------------------------------------------------------------|
| `__DATACLASS`       | String        | Specifies the data class targeted by the query.                    |
| `__entityModel`     | String        | Specifies the entity model used in the query.                      |
| `__GlobalStamp`     | Integer       | Server-wide modification timestamp.                                |
| `__COUNT`           | Integer       | Number of entities affected by the query.                          |
| `__FIRST`           | Integer       | Index of the first entity in the query results.                    |
| `__ENTITIES`        | Array         | Array of objects, each representing an entity within the dataClass with all its attributes and relational links.            |

Each entity includes:

| Key           | Type   | Description                                              |
|---------------|--------|----------------------------------------------------------|
| `__KEY`       | String | Unique key for the entity.                               |
| `__TIMESTAMP` | String | Timestamp of the last update to the entity.              |
| `__STAMP`     | Integer| Version stamp for the entity.                            |
| `ID`          | Integer| Identifier of the entity.                                |
| `Name`    | Integer| Example attribute, e.g., name of user.           |
| `Orders`   | Object | Example attribute, e.g., details about the orders, using deferred loading.     |


#### Sample Usage Example in Postman

How to Use:

- **Method**: GET
- **URL**: `{{ApiEndpoint}}/rest/Users`

<img src={require('./img/restDataclass.png').default} style={{borderRadius: '6px'}} />


The response structure for the `/rest/Users` endpoint looks something like this in practice:

```json
{
    "__DATACLASS": "Users",
    "__entityModel": "Users",
    "__GlobalStamp": 0,
    "__COUNT": 2,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "2",
            "__TIMESTAMP": "2024-05-09T16:50:24.070Z",
            "__STAMP": 3,
            "ID": 2,
            "Name": "user2",
            "Email": "user2@example.com",
            "Orders": {
                "__deferred": {
                    "uri": "/rest/Users[2]/Orders?$expand=Orders"
                }
            }
        },
        {
            "__KEY": "1",
            "__TIMESTAMP": "2024-05-09T16:50:24.070Z",
            "__STAMP": 3,
            "ID": 1,
            "Name": "user1",
            "Email": "user1@example.com",
            "Orders": {
                "__deferred": {
                    "uri": "/rest/Users[1]/Orders?$expand=Orders"
                }
            }
        }
    ],
    "__SENT": 2
}
```



### rest/dataClass[key]


#### Purpose

The `rest/{{dataClass}}[{{key}}]` endpoint fetches detailed information for a single entity within a `dataClass` using its primary `key`.

:::info
The properties returned mirror those in [`/rest/{{dataClass}}`](#properties-returned), focused on a single specified entity.
:::

#### Sample Usage Example in Postman

How to Use:

- **Method**: GET
- **URL**: `{{ApiEndpoint}}/rest/Users[2]`

<img src={require('./img/restDataclassKey.png').default} style={{borderRadius: '6px'}} />


The response structure for the `/rest/{{dataClass}}[2]` endpoint looks something like this in practice:

```json
{
    "__entityModel": "Users",
    "__DATACLASS": "Users",
    "__KEY": "2",
    "__TIMESTAMP": "2024-05-09T16:50:24.070Z",
    "__STAMP": 3,
    "ID": 2,
    "Name": "user2",
    "Email": "user2@example.com",
    "Orders": {
        "__deferred": {
            "uri": "/rest/Users[2]/Orders?$expand=Orders"
        }
    }
}
```


### rest/dataClass:attribute(value)

#### Purpose

The `rest/{{dataClass}}:{{attribute}}({{value}})` endpoint retrieves entities within a dataClass where a specific `attribute` matches a given `value`.

:::info
The properties returned mirror those in [`/rest/{{dataClass}}`](#properties-returned), focused on a single specified entity.
:::

#### Sample Usage Example in Postman

How to Use:

- **Method**: GET
- **URL**: `{{ApiEndpoint}}/rest/Users:Name(user1)`

<img src={require('./img/restDataclassAttributeValue.png').default} style={{borderRadius: '6px'}} />

The response structure for the `/rest/Users:Name(user1)` endpoint looks something like this in practice:

```json
{
    "__entityModel": "Users",
    "__DATACLASS": "Users",
    "__KEY": "1",
    "__TIMESTAMP": "2024-05-09T16:50:24.070Z",
    "__STAMP": 3,
    "ID": 1,
    "Name": "user1",
    "Email": "user1@example.com",
    "Orders": {
        "__deferred": {
            "uri": "/rest/Users[1]/Orders?$expand=Orders"
        }
    }
}
```


## Attribute Retrieval

### Selecting Specific Attributes

You can specify which attributes to include in the response directly in the API request URL. This capability allows users to retrieve only necessary data, reducing bandwidth and improving response times.

#### Syntax and Examples

| Use Case                      | Syntax                                                                                   | Example                                                               |
|-------------------------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| **Dataclass**                 | Specify attributes directly after the data class in the URL.                             | `GET {{ApiEndpoint}}/rest/Employee/Name,Department`                   |
| **Collection of Entities**    | Specify attributes for a collection of entities, using filters.                 | `GET {{ApiEndpoint}}/rest/Employee/Name,Department/?$filter="Department='HR'"` |
| **Specific Entity**           | Retrieve attributes for a specific entity by ID.                                         | `GET {{ApiEndpoint}}/rest/Employee[123]/Name,Department`              |
| **Attribute Matching**        | Fetch entities where a specific attribute matches a given value.                         | `GET {{ApiEndpoint}}/rest/Employee:Department(HR)/Name,Title`         |
| **Entity Selection**          | Specify attributes when accessing an entity set.                                         | `GET {{ApiEndpoint}}/rest/Employee/Name,Department/$entityset/528BF90F10894915A4290158B4281E61` |


:::tip
Attributes must be delimited by commas, e.g., `/Employee/Name,Department,Salary`.
:::


### Including Related Entities

Beyond direct attributes, the REST API supports fetching related entity attributes using the [`$attributes`](./$attributes) parameter, which can streamline obtaining comprehensive entity details in a single request.

#### Example

To include the employer's name and address along with employee details:

```
GET {{ApiEndpoint}}/rest/Employee?$attributes=name,employer.name,employer.address
```
