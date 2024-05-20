---
id: $atomic$atOnce
title: $atomic/$atOnce 
---

import Column from '@site/src/components/Column'

## Overview

The `$atomic` and `$atOnce` endpoints allow you to execute multiple actions in a single REST request within a transaction. If any action fails, the entire transaction is canceled, ensuring data consistency and integrity.

## Description

When you have multiple actions to perform together, you can use `$atomic` or `$atOnce` to ensure that either all actions are successfully completed, or none are. This is crucial for maintaining data integrity, especially when dealing with operations that must be executed as a unit.

### Syntax

```
POST {{ApiEndpoint}}/rest/{{dataClass}}/?$atomic=true
```
or
```
POST {{ApiEndpoint}}/rest/{{dataClass}}/?$atOnce=true
```


### Request Example

To update multiple employee records within a transaction:

```
POST {{ApiEndpoint}}/rest/Users?$atomic=true
```

**POST data**:

```json
[
    {
        "__KEY": "9",
        "Name": "Harry"
    }
]
```

### Response Example

If the transaction is successful, you would get a response for each entity updated. For example, the successful response for the user with ID: 9 might look like this:

```json
{
    "__STATUS": {
        "success": true
    },
    "__KEY": "9",
    "__STAMP": 9,
    "uri": "/rest/Users[9]",
    "__TIMESTAMP": "!!2024-05-20!!",
    "ID": 9,
    "Name": "John",
    "Email": "user9@example.com",
    "Orders": {
        "__deferred": {
            "uri": "/rest/Users[9]/Orders?$expand=Orders"
        }
    }
}
```

#### Partial Success Scenario

In a scenario where one of the entities in the transaction fails, the entire transaction is canceled, and no changes are saved. If an error occurs for the user with '__KEY: 999', the response would indicate that the transaction failed:


**POST data**:

```json
[
    {
        "__KEY": "9",
        "Name": "test"
    },
    {
        "__KEY": "999",
        "Name": "John"
    }
]
```

If there is an error in one of the entities, the entire transaction is canceled, and no changes are saved. For example, if the second entity has an error:

```json
{
    "__STATUS": {
        "success": true
    },
    "__KEY": "9",
    "__STAMP": 10,
    "uri": "/rest/Users[9]",
    "__TIMESTAMP": "!!2024-05-20!!",
    "ID": 9,
    "Name": "test",
    "Email": "user9@example.com",
    "Orders": {
        "__deferred": {
            "uri": "/rest/Users[9]/Orders?$expand=Orders"
        }
    },
    "__ERROR": [
        {
            "message": "Error code: 1542 (dbmg)\nCannot find entity with \"999\" key in the \"Users\" dataclass\nDatabase Engine\nDatabase Engine\ntask 49, name: 'REST Handler: '\n",
            "componentSignature": "dbmg",
            "errCode": 1542
        }
    ]
}
```

Even though the first entity has valid data, it is not saved due to the error in the second entity. If you reload the first entity, you will see the previous values, confirming that no changes were made.


## Combining with Other Query Parameters

You can combine `$atomic` or `$atOnce` with other query parameters to refine your data manipulation operations:

- **Filtering:** Ensure that filtered data updates are transactional.
  ```
  POST {{ApiEndpoint}}/rest/Users?$method=update&$atomic=true&$filter="department='HR'"
  ```

- **Sorting:** Maintain transactional integrity while sorting data.
  ```
  POST {{ApiEndpoint}}/rest/Users?$method=update&$atOnce=true&$orderby="lastName desc"
  ```



## Example Scenarios

### Updating Multiple Records

Updating multiple records atomically to ensure all or none of the changes are applied:

**Request:**

```
POST {{ApiEndpoint}}/rest/Users?$method=update&$atomic=true
```

**POST data:**

```json
[
    {
        "__KEY": "200",
        "firstname": "John",
        "lastname": "Doe"
    },
    {
        "__KEY": "201",
        "firstname": "Jane",
        "lastname": "Smith"
    }
]
```

If any record update fails, neither record is updated.


### Inserting Multiple Records

Inserting multiple records in a single transaction:

**Request:**

```
POST {{ApiEndpoint}}/rest/Users?$method=insert&$atOnce=true
```

**POST data:**

```json
[
    {
        "firstname": "Alice",
        "lastname": "Brown"
    },
    {
        "firstname": "Bob",
        "lastname": "White"
    }
]
```

Both records are inserted only if both operations succeed.

### Deleting Multiple Records

Deleting multiple records within a transaction:

**Request:**

```
POST {{ApiEndpoint}}/rest/Users?$method=delete&$atomic=true
```

**POST data:**

```json
[
    {
        "__KEY": "200"
    },
    {
        "__KEY": "201"
    }
]
```

Both records are deleted only if both deletions succeed.



## Best Practices

- **Use Only When Necessary:** Employ `$atomic` or `$atOnce` only for operations that require strict transactional integrity.

- **Minimize Transaction Scope:** Limit the scope of transactions to essential actions to reduce the potential for conflicts and errors.

- **Combine with Other Parameters:** Leverage other query parameters (`$filter`, `$orderby`) to optimize data manipulation and performance.
