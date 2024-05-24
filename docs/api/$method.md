---
id: $method
title: $method 
---



## Functionality

### Definition

The `$method` parameter allows you to define the operation to execute on the returned entity or entity selection. This includes actions such as deleting entities, creating entity sets, releasing entity sets, creating sub-entity sets, and updating entities.

### Available Syntaxes

| Syntax | Example | Description |
|--------|---------|-------------|
| [**$method=delete**](#methoddelete) | `POST /Employee(11)?$method=delete` | Deletes the current entity, entity collection, or entity selection. |
| [**$method=entityset**](#methodentityset) | `GET /Employee(11)?$method=entityset&$timeout=600` | Creates an entity set in the server's cache based on the collection of entities defined in the REST request |
| [**$method=release**](#methodrelease) | `GET /Employee/$entityset/<entitySetID>?$method=release` | Releases an existing entity set stored in the server's cache |
| [**$method=subentityset**](#methodsubentityset) | `GET /Employee(11)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC` | Creates an entity set based on the collection of related entities defined in the REST request |
| [**$method=update**](#methodupdate) | `POST /Employee?$method=update` | Updates and/or creates one or more entities |






## $method=delete

### Description

The `$method=delete` parameter allows you to delete an entity or an entire entity collection. 

:::tip
You can define the collection of entities using `$filter` or specify one directly using `{dataClass}({key})` (e.g., `/Employee(22)`). 
:::

You can also delete entities in an entity set by calling `$entityset/{entitySetID}`.

### Examples

- Delete a specific entity:

    ```
    POST /rest/Employee(22)?$method=delete
    ```

- Delete entities using a filter:

    ```
    POST /rest/Employee?$filter="ID=11"&$method=delete
    ```

- Delete an entity set:

    ```
    POST /rest/Employee/$entityset/<entitySetID>?$method=delete
    ```

### Response

```json
{
    "ok": true
}
```






## $method=entityset

### Description

When you create a collection of entities in REST, you can save this collection as an entity set in the server's cache. 

:::tip
The entity set will have a reference number that you can use to access it later. By default, it is valid for two hours, but you can modify this duration by setting the `$timeout` parameter.
:::

### Examples

- Create an entity set with the default timeout:

    ```
    GET /rest/Employee?$filter="ID>320"&$method=entityset
    ```

- Create an entity set with a custom timeout:

    ```
    GET /rest/Employee?$filter="ID>320"&$method=entityset&$timeout=600
    ```

### Response

After creating an entity set, the first element, `__ENTITYSET`, is added to the object returned and indicates the URI to use to access the entity set:

```json
{
    "__ENTITYSET": "/rest/Employee/$entityset/207BE8235EC24623B98082CAA84CCB7C",
    ...
}
```



## $method=release

### Description

You can release an entity set, which you created using `$method=entityset`, from the server's cache.

### Example

Release an existing entity set:

```
GET /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release
```

### Response

If the request was successful:

```json
{
    "ok": true
}
```

If the entity set wasn't found:

```json
{
    "__ERROR": [
        {
            "message": "The \"207BE8235EC24623B982CAA84CCB7C\" entity set cannot be found",
            "componentSignature": "dbmg",
            "errCode": 1802
        }
    ]
}
```



## $method=subentityset

Creates an entity set in the server's cache based on the collection of related entities defined in the REST request.

### Description

The `$method=subentityset` parameter allows you to sort the data returned by the relation attribute defined in the REST request. 

:::tip
You can sort the data using the `$subOrderby` property. By default, the data is sorted in ascending order.
:::

### Example

Retrieve only the related entities for a specific entity:

```
GET /rest/Users(4)/Orders?$expand=Orders&$method=subentityset
```

### Response

```json
{
    "__ENTITYSET": "/rest/Orders/$entityset/6F245BB22D294281B9D394B876D4A6EE",
    "__DATACLASS": "Orders",
    "__entityModel": "Orders",
    "__GlobalStamp": 0,
    "__COUNT": 1,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "10",
            "__TIMESTAMP": "2024-05-09T17:01:36.990Z",
            "__STAMP": 1,
            "ID": 10,
            "Quantity": 2,
            "Purchaser": {
                "__deferred": {
                    "uri": "/rest/Users[4]",
                    "__KEY": "4"
                }
            },
            "OrderedProduct": {
                "__deferred": {
                    "uri": "/rest/Products[1]",
                    "__KEY": "1"
                }
            },
            "paymentsSelection": {
                "__deferred": {
                    "uri": "/rest/Orders[10]/paymentsSelection?$expand=paymentsSelection"
                }
            }
        }
    ],
    "__SENT": 1
}
```




## $method=update


### Description

The `$method=update` parameter allows you to update and/or create one or more entities in a single **POST** request. 

:::warning
If updating an entity, you must include the `__KEY` and `__STAMP` parameters. If these parameters are missing, a new entity will be created.
:::

### Examples

- Update a specific entity:

    **Request URL:**
    ```
    POST /rest/Person?$method=update
    ```

    **POST Data:**
    ```json
    {
        "__KEY": "340",
        "firstName": "Pete",
        "lastName": "Miller"
    }
    ```

- Create a new entity:

    **Request URL:**
    ```
    POST /rest/Person?$method=update
    ```

    **POST Data:**
    ```json
    {
        "firstName": "John",
        "lastName": "Smith"
    }
    ```

- Update and create multiple entities at the same time:

    **Request URL:**
    ```
    POST /rest/Person?$method=update
    ```

    **POST Data:**
    ```json
    [
        {
            "__KEY": "309",
            "firstName": "Penelope",
            "lastName": "Miller"
        },
        {
            "firstName": "Ann",
            "lastName": "Jones"
        }
    ]
    ```

### Response

When adding or modifying an entity, the server returns the updated entity with the attributes that were modified:

```json
{
    "__STATUS": {
        "success": true
    },
    "__KEY": "622", 
    "__STAMP": 1, 
    "uri": "/rest/Employee(622)", 
    "__TIMESTAMP": "!!2024-05-23!!",
    "ID": 622, 
    "firstName": "John", 
    "lastName": "Smith"
}
```

If there is an error, such as an incorrect key:

```json
{
    "__ERROR": [
        {
            "message": "Error code: 1542 (dbmg)\nCannot find entity with \"98712764\" key in the \"Employee\" dataclass\nDatabase Engine\nDatabase Engine\ntask 87, name: 'REST Handler: '\n",
            "componentSignature": "dbmg",
            "errCode": 1542
        }
    ]
}
```


## Combining with Other Parameters

The `$method` parameter can be combined with other parameters to perform various operations on entities or entity sets effectively:

- **$filter**: Apply filters to select specific entities before performing the method operation.

- **$orderby**: Sort the entities before performing the method operation.

- **$top/$limit** and **$skip**: Limit the number of entities and skip a certain number of entities before performing the method operation.

- **$expand**: Include related data in the operation.

- **$attributes**: Specify which attributes to include in the response after performing the method operation.

- **$lock**: Lock entities before performing the method operation to ensure data integrity.

- **$compute**: Perform calculations on related data before executing the method operation.

- **$entityset**: Create, modify, or release entity sets as part of the method operation.

- **$savedfilter**: Save filter criteria for recreating entity sets.

- **$savedorderby**: Save order by criteria for recreating entity sets.


## Best Practices

- **Use the Appropriate Method:** Choose the correct method (`delete`, `entityset`, `release`, `subentityset`, `update`) based on the operation you need to perform.

- **Check Responses:** Always check the response to ensure that the operation was successful and handle any errors gracefully.

- **Manage Timeouts:** When creating entity sets, manage timeouts appropriately to avoid unintended data retention or loss.