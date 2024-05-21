---
id: $atomic$atOnce
title: $atomic/$atOnce 
---


## Functionality

### Definition

The `$atomic` and `$atOnce` endpoints allow you to execute multiple actions in a single REST request within a transaction. If any action fails, the entire transaction is canceled, ensuring data consistency and integrity.

:::tip
This is crucial for maintaining data integrity, especially when dealing with operations that must be executed as a unit.
:::


### Syntax

```
POST {{ApiEndpoint}}/rest/{{dataClass}}/?$atomic=true
```
or
```
POST {{ApiEndpoint}}/rest/{{dataClass}}/?$atOnce=true
```


## Combining with Other Query Parameters

You can combine `$atomic` or `$atOnce` with other query parameters to refine your data manipulation operations:

- **Filtering:** Ensure that filtered data updates are transactional.
  ```
  POST {{ApiEndpoint}}/rest/Users?$atomic=true&$filter="department='HR'"
  ```

- **Sorting:** Maintain transactional integrity while sorting data.
  ```
  POST {{ApiEndpoint}}/rest/Users?$atOnce=true&$orderby="lastName desc"
  ```



## Use Cases

### Updating Multiple Records

Updating multiple records atomically to ensure all or none of the changes are applied:

**Request:**

```
POST {{ApiEndpoint}}/rest/Users?$atomic=true
```

**POST data:**

```json
[
    {
        "__KEY": "1",
        "Name": "John"
    },
    {
        "__KEY": "2",
        "Name": "Jane"
    }
]
```

If any record update fails, neither record is updated.


:::tip Partial Success Scenario

In a scenario where one of the entities in the transaction fails, the entire transaction is canceled, and no changes are saved. If an error occurs for the user with '__KEY: 222', the response would indicate that the transaction failed:


**POST data**:

```json
[
    {
        "__KEY": "1",
        "Name": "John"
    },
    {
        "__KEY": "222",
        "Name": "Jane"
    }
]
```

If there is an error in one of the entities, the entire transaction is canceled, and no changes are saved. For example, if the second entity has an error:

```json
{
    "__STATUS": {
        "success": true
    },
    "__KEY": "1",
    "__STAMP": 4,
    "uri": "/rest/Users[1]",
    "__TIMESTAMP": "!!2024-05-20!!",
    "ID": 1,
    "Name": "John",
    "Email": "user1@example.com",
    "Orders": {
        "__deferred": {
            "uri": "/rest/Users[1]/Orders?$expand=Orders"
        }
    },
    "profilePicture": {
        "__deferred": {
            "uri": "/rest/Users[1]/profilePicture?$binary=true&$version=4&$expand=profilePicture"
        }
    },
    "__ERROR": [
        {
            "message": "Error code: 1542 (dbmg)\nCannot find entity with \"222\" key in the \"Users\" dataclass\nDatabase Engine\nDatabase Engine\ntask 48, name: 'REST Handler: '\n",
            "componentSignature": "dbmg",
            "errCode": 1542
        }
    ]
}
```

Even though the first entity has valid data, it is not saved due to the error in the second entity. If you reload the first entity, you will see the previous values, confirming that no changes were made.
:::

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
