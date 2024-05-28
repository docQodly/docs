---
id: classFunctionsParameters
title: Function Parameters
---

## Overview

Function parameters within ORDA user classes offer flexible customization options for data retrieval and manipulation. These parameters are integral for tailoring requests, enabling various data types and operations.

**Usage Syntax**

When making a POST request to an ORDA user class function, adhere to this syntax:

```
POST /rest/{{dataClass}}/{{functionName}}
```

:::info
Parameters should be enclosed within a JSON collection in the request body.\*
:::

## General rules

You can pass parameters to functions defined in ORDA user classes, and these parameters will be received by the server-side class functions.

The following rules must be followed:

- Use POST Request Body: Parameters must be included in the body of a POST request.
- JSON Format: Parameters must be formatted as a JSON collection.
- Supported Data Types: All scalar data types supported in JSON collections, such as strings, numbers, booleans, and null values, can be passed as parameters. Make sure the data types are compatible with JSON standards.
- Entities and Selections: Parameters can include entity and entity selection objects. The JSON object must contain specific attributes (DATACLASS, ENTITY, ENTITIES, DATASET) that the REST server uses to map the data to the corresponding ORDA objects.For example :

  **Body of the request**

```
[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"Ann",
"lastname":"Brown"
}]
```

## Parameter Types

### Scalar Value Parameter

For scalar value parameters, encapsulate them within a collection in the request body. For instance, when invoking the `getCities()` function with text parameters, utilize this structure:

**Request:**

```
POST /rest/City/getCities
```

**Body of the request:**

```
["Aguada"]
```

**Response**

```
{
    "__entityModel": "City",
    "__DATACLASS": "City",
    "__KEY": "1",
    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",
    "__STAMP": 1,
    "ID": 1,
    "name": "Aguada",
    "countyFIPS": 72003,
    "county": {
        "__deferred": {
            "uri": "/rest/County(72003)",
            "__KEY": "72003"
        }
    },
    "zips": {
        "__deferred": {
            "uri": "/rest/City(1)/zips?$expand=zips"
        }
    }
}
```

:::info
All JSON data types are supported, including JSON pointers. Dates can be conveyed as strings adhering to ISO 8601 format (e.g., "2020-08-22T22:00:000Z").
:::

### Entity Parameter

Entities conveyed as parameters are referenced by their key (\_\_KEY property) on the server. Omitting the key parameter loads a new entity into server memory. Additionally, attribute values for the entity can be passed, automatically utilized for the entity on the server.

:::info
Modified attribute values for an existing entity prompt automatic execution of the called ORDA data model function on the server. This enables result examination post-business rule application from the client application, facilitating informed decisions regarding entity saving on the server.\*
:::

**Fallback Behavior**: If the parameters are not provided or invalid, the function will handle the request with a default behavior, ensuring smooth operation even in unexpected scenarios.

**Parameter Specifications**

| Property                 | Type    | Requirement | Description                                                                                                                                                                                                      |
| ------------------------ | ------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attributes of the entity | mixed   | Mandatory   | Optional - Values to modify.                                                                                                                                                                                     |
| \_\_DATACLASS            | String  | Mandatory   | Indicates the Dataclass of the entity.                                                                                                                                                                           |
| \_\_ENTITY               | Boolean | Mandatory   | True to indicate that the parameter is an entity.                                                                                                                                                                |
| \_\_KEY                  | Mixed   | Optional    | Primary key of the entity. If not provided, a new entity is created on the server with the given attributes. If provided, the entity corresponding to the key is loaded on the server with the given attributes. |

**Example**

**Body of the request:**

```json
{
  "__DATACLASS": "Employee",
  "__ENTITY": true,
  "__KEY": 1,
  "firstName": "John",
  "lastName": "Doe",
  "salary": 75000
}
```

### Entity selection parameter

Before passing an entity selection as a parameter, you need to define it using `$method=entityset`.

| Property                 | Type    | Requirement | Description                                                 |
| ------------------------ | ------- | ----------- | ----------------------------------------------------------- |
| Attributes of the entity | mixed   | Optional    | Optional - Values to modify.                                |
| \_\_DATASET              | String  | Mandatory   | entitySetID (UUID) of the entity selection                  |
| \_\_ENTITY               | Boolean | Mandatory   | True to indicate that the parameter is an entity selection. |

**Example**

**Body of the request:**

```json
[
  {
    "__ENTITIES": true,
    "__DATASET": "9B9C053A111E4A288E9C1E48965FE671"
  },
  "Passed"
]
```

## Use cases
