---
id: $catalog
title: $catalog
---

# Accessing Dataclass Catalog


## Overview 

The `$catalog` endpoint provides metadata about the dataclasses and attributes available in your Qodly application's datastore. This metadata facilitates the discovery of data structures and access points essential for client applications interacting with the API.


## `$catalog` Endpoint Variants

The `$catalog` endpoint offers several variants to retrieve different levels of information based on your requirements:

| Endpoint                        | Description                                                   |
|---------------------------------|---------------------------------------------------------------|
| [**$catalog**](#catalog)                    | Lists [shared singletons](#singletons) (if any) and all dataclasses with basic access URIs. |
| [**$catalog/$all**](#catalogall)            | Lists [shared singletons](#singletons) (if any) and provides detailed information about all dataclasses and their attributes. |
| [**$catalog/{{dataClass}}**](#catalogdataclass)      | Delivers detailed information about a specific dataclass.     |
| [**$catalog/{{dataStoreClassFunction}}**](./classFunctionsOverview.md) | Executes a specific datastore class function if available.   |

## Properties Returned

### Common Properties 

Each response from the `$catalog` endpoint variants includes some common properties:

| Key                  | Type            | Description                                                            |
|----------------------|-----------------|------------------------------------------------------------------------|
| `__UNIQID`           | String          | A unique identifier for the API response session.                       |
| `__BASEID`           | null/String     | Base identifier, typically null, indicating no base is used.           |
| `__NAME`            | String          | The name of the Qodly application to identify the session context.   |
| `properties`         | Object          | Contains additional settings or flags relevant to the response.         |
| &#x21AA; `supportJSONEntityKey` | Boolean       | Indicates if JSON entity keys are supported, here it is `true`.         |
| `methods`            | Array of Objects| Lists methods available for execution through the data store. For more details, please refer to the [Methods Array Details](#methods-array) section. |
| `dataClasses`     | Array of Objects   | Lists dataclasses exposed through the API.                      |

### `Methods` Array

The `methods` array provides details about specific functionalities that can be executed through the REST API. Each method object includes the following attributes:

| Property            | Type    | Description |
|---------------------|---------|-------------|
| `name`              | String  | Name of the method. |
| `applyTo`           | String  | Indicates the target of the method (e.g., "dataStore"). |
| `scope`             | String  | Scope of accessibility (e.g., "public"). |
| `from`              | String  | Origin of the method execution capability, such as "remoteServer". |
| `allowedOnHTTPGET`  | Boolean | Specifies whether the method can be called via HTTP GET requests. |
| `exposed`           | Boolean | Indicates if the method is exposed to the API. |

## `$catalog`

### Purpose

Fetches a list of all dataclasses within the project, providing essential URIs for accessing more detailed metadata.

### Properties Returned

Each dataclass listed by the `$catalog` endpoint returns the following properties:

| Key               | Type               | Description                                                       |
|-------------------|--------------------|-------------------------------------------------------------------|
| `name`            | String             | The name of the dataclass, here it is "Users".                    |
| `uri`             | String             | URI to obtain detailed metadata about the dataclass.              |
| `dataURI`         | String             | URI to access the actual data directly from the dataclass.        |


:::tip
Only the exposed dataclasses are shown in this list for your project's datastore. For more information, please refer to [Configuring Data Access](./overview#configuring-data-access) section.
:::

### Sample Usage Example in Postman

How to Use:

- **Method**: GET
- **URL**: `{{APIEndpoint}}/rest/$catalog`

<img src={require('./img/restCatalog.png').default} style={{borderRadius: '6px'}} />


The response structure for the `$catalog` endpoint looks something like this in practice:

```json
{
    "__UNIQID": "F182BFDB899C45A587EFA25AE271891D",
    "__BASEID": null,
    "__NAME": "plum-rap",
    "properties": {
        "supportJSONEntityKey": true
    },
    "methods": [
        {
            "name": "checkAvailability",
            "applyTo": "dataStore",
            "scope": "public",
            "from": "remoteServer",
            "allowedOnHTTPGET": false,
            "exposed": true
        }
    ],
    "dataClasses": [
        {
            "name": "Users",
            "uri": "/rest/$catalog/Users",
            "dataURI": "/rest/Users"
        }
    ]
}
```



## `$catalog/$all`

### Purpose

Provides exhaustive details on each dataclass and their attributes, enhancing understanding of data structure and types.

### Properties Returned

This endpoint enriches the response with detailed attributes of each dataclass:

| Key                  | Type          | Description                                                                                  |
|----------------------|---------------|----------------------------------------------------------------------------------------------|
| `dataClasses`        | Array         | Lists all data classes exposed through the API, detailing each class and its associated data and metadata. |  

:::info
For a detailed breakdown of individual dataclasses and their specific attributes, please refer to the detailed documentation in the [$catalog/{{dataClass}}](#properties-returned-dataclasses-array) section.
:::


### Sample Usage Example in Postman

How to Use:

- **Method**: GET
- **URL**: `{{APIEndpoint}}/rest/$catalog/$all`

<img src={require('./img/restAll.png').default} style={{borderRadius: '6px'}} />


The response structure for the `$catalog/$all` endpoint looks something like this in practice:

```json
{
    "__UNIQID": "F182BFDB899C45A587EFA25AE271891D",
    "__BASEID": null,
    "__NAME": "plum-rap",
    "properties": {
        "supportJSONEntityKey": true
    },
    "methods": [
        {
            "name": "checkAvailability",
            "applyTo": "dataStore",
            "scope": "public",
            "from": "remoteServer",
            "allowedOnHTTPGET": false,
            "exposed": true
        }
    ],
    "dataClasses": [
        {
            "name": "Users",
            "className": "Users",
            "collectionName": "UsersSelection",
            "exposed": true,
            "tableNumber": 4,
            "scope": "public",
            "uuid": "FA61573F7FB84A8D83CD04215B757F34",
            "dataURI": "/rest/Users",
            "extraProperties": {
                "panelColor": "rgb(68,68,68)",
                "position": {
                    "x": -169.20168158481,
                    "y": 246.41374517022
                }
            },
            "attributes": [
                {
                    "name": "ID",
                    "kind": "storage",
                    "fieldPos": 1,
                    "scope": "public",
                    "exposed": true,
                    "uuid": "94A7339AE34D4C4C8B0F870D975717EC",
                    "indexed": true,
                    "unique": true,
                    "not_null": true,
                    "autosequence": true,
                    "type": "long",
                    "identifying": true
                },
                {
                    "name": "Name",
                    "kind": "storage",
                    "fieldPos": 2,
                    "scope": "public",
                    "exposed": true,
                    "uuid": "40ED3EBC298147FBA23CA0C03107A2C6",
                    "type": "string"
                }
            ],
            "key": [
                {
                    "name": "ID"
                }
            ]
        }
    ]
}
```


## `$catalog/{{dataClass}}`

### Purpose

Fetches comprehensive information about a specific dataclass, including its attributes and their properties.

### Properties Returned (`dataClasses` Array)

The properties of the dataclasses returned by the API are:

| Key                 | Type                 | Description                                                      |
|---------------------|----------------------|------------------------------------------------------------------|
| `name`              | String               | The name of the dataclass.                                       |
| `className`         | String               | The class name as defined in the datastore.                      |
| `collectionName`    | String               | The name used for entity collections derived from this dataclass.|
| `exposed`           | Boolean              | Indicates if the dataclass is exposed to the API.                |
| `tableNumber`       | Integer              | Numerical identifier for the table in the database.              |
| `scope`             | String               | Visibility scope of the dataclass (e.g., 'public').              |
| `uuid`              | String               | A unique identifier for the dataclass.                           |
| `dataURI`           | String               | API endpoint URI for accessing the dataclass's data.             |
| `extraProperties`   | Object               | Contains additional, non-standard properties of the dataclass.   |
| &#x21AA; `panelColor`        | String               | Color configuration for UI elements, if applicable.              |
| &#x21AA; `position`          | Object               | Position settings for UI elements, defined by coordinates `x` and `y`. |
| `attributes`        | Array of Objects     | Defines the attributes (fields) available within the dataclass.  |

:::info
Each dataclass includes various attributes, the details of which are described in the subsequent section on [attributes properties](#attributes-array-details).
:::

### `attributes` Array Details

Each attribute within a dataclass has properties that describe its configuration and purpose within the datastore:

| Key                 | Type            | Description                                                          |
|---------------------|-----------------|----------------------------------------------------------------------|
| `name`              | String          | The name of the attribute.                                           |
| `kind`              | String          | The type of attribute (e.g., 'storage', 'relatedEntities').          |
| `fieldPos`          | Integer         | Position of the attribute in the database table.                     |
| `scope`             | String          | Visibility scope of the attribute (e.g., 'public').                  |
| `exposed`           | Boolean         | Indicates if the attribute is exposed to the API.                    |
| `uuid`              | String          | A unique identifier for the attribute.                               |
| `indexed`           | Boolean         | Indicates if the attribute is indexed.                               |
| `unique`            | Boolean         | Indicates if the attribute must be unique.                           |
| `not_null`          | Boolean         | Indicates if the attribute must not be null.                         |
| `autosequence`      | Boolean         | Indicates if the attribute uses auto-incrementing.                   |
| `type`              | String          | Data type of the attribute (e.g., 'long', 'string').                 |
| `identifying`       | Boolean         | Indicates if the attribute is a primary key.                         |
| `reversePath`       | Boolean         | For related entities, indicates if the relationship is inverse.      |
| `path`              | String          | Path to the related dataclass for relationship definitions.          |
| `key`               | Array           | Defines the primary key attributes for the dataclass.                |


### Sample Usage Example in Postman

How to Use:

- **Method**: GET
- **URL**: `{{APIEndpoint}}/rest/$catalog/{{dataClass}}`, e.g., `{{APIEndpoint}}/rest/$catalog/Users`

<img src={require('./img/restCatalogDataclass.png').default} style={{borderRadius: '6px'}} />


The response structure for the `$catalog/{{dataClass}}` endpoint looks something like this in practice:

```json
{
    "__UNIQID": "F182BFDB899C45A587EFA25AE271891D",
    "__BASEID": null,
    "__NAME": "plum-rap",
    "properties": {
        "supportJSONEntityKey": true
    },
    "methods": [
        {
            "name": "checkAvailability",
            "applyTo": "dataStore",
            "scope": "public",
            "from": "remoteServer",
            "allowedOnHTTPGET": false,
            "exposed": true
        }
    ],
    "dataClasses": [
        {
            "name": "Users",
            "className": "Users",
            "collectionName": "UsersSelection",
            "exposed": true,
            "tableNumber": 4,
            "scope": "public",
            "uuid": "FA61573F7FB84A8D83CD04215B757F34",
            "dataURI": "/rest/Users",
            "extraProperties": {
                "panelColor": "rgb(68,68,68)",
                "position": {
                    "x": -169.20168158481,
                    "y": 246.41374517022
                }
            },
            "attributes": [
                {
                    "name": "ID",
                    "kind": "storage",
                    "fieldPos": 1,
                    "scope": "public",
                    "exposed": true,
                    "uuid": "94A7339AE34D4C4C8B0F870D975717EC",
                    "indexed": true,
                    "unique": true,
                    "not_null": true,
                    "autosequence": true,
                    "type": "long",
                    "identifying": true
                },
                {
                    "name": "Name",
                    "kind": "storage",
                    "fieldPos": 2,
                    "scope": "public",
                    "exposed": true,
                    "uuid": "40ED3EBC298147FBA23CA0C03107A2C6",
                    "type": "string"
                }
            ],
            "key": [
                {
                    "name": "ID"
                }
            ]
        }
    ]
}
```

## singletons

If you have defined [shared singletons](../language/basics/lang-classes.md#singleton-classes) containing at least one [exposed function](../orda/data-model.md#exposed-vs-non-exposed-functions), a `singletons` section is added to the returned json for both the `/$catalog` and `/$catalog/$all` syntaxes. It contains the collection of singleton classes as objects with their **name** and **methods** (i.e., exposed functions).

Singleton functions can be called by REST requests using the [`$singleton` command]($singleton.md).


### Example  

`GET  /rest/$catalog/$all`

**Result**:

```json
{...
	singletons": [
    {
      "name": "VehicleFactory",
      "methods": [
        {
          "name": "buildVehicle",
          "allowedOnHTTPGET": false,
          "exposed": true
        }
      ]
    }
  ],

	dataClasses: [...]
}
```
