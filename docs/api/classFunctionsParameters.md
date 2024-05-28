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

### Example

**Scalar Value Parameter**

For scalar value parameters, encapsulate them within a collection in the request body. For instance, when invoking the `getCities()` function with text parameters, utilize this structure:

```
POST /rest/City/getCities
```

_Body Parameters:_

["Aguada","Paris"]

:::info
All JSON data types are supported, including JSON pointers. Dates can be conveyed as strings adhering to ISO 8601 format (e.g., "2020-08-22T22:00:000Z").
:::

## Entity Parameter

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
