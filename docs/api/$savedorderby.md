---
id: $savedorderby
title: $savedorderby 
---


## Functionality

### Definition

The `$savedorderby` endpoint allows you to save the sort order defined by the `$orderby` parameter when creating an entity set. This ensures that the sort order is preserved even if the entity set is removed from the server's cache.

### Syntax

To save the order by when creating an entity set, use the following syntax:

```
GET /rest/{{dataClass}}?$filter="{{filterExpression}}"&$savedfilter="{{filterExpression}}"&$orderby="{{orderbyExpression}}"&$savedorderby="{{orderbyExpression}}"&$method=entityset
```



## Detailed Behavior

### Saving and Retrieving Sort Order

When you create an entity set with `$savedorderby`, the sort order is saved and can be retrieved later. If the entity set is removed and then recreated, the new entity set will have the same sort order applied.

:::tip
By using `$savedorderby`, the sort order defined when creating the entity set is preserved. When you retrieve the entity set, you must pass `$savedorderby` along with your call to ensure the sort order is applied.
:::

### Combining with $savedfilter

When using `$savedorderby`, it is recommended to also use `$savedfilter` to save the filter criteria. This combination ensures that both the filter and the sort order are applied consistently.



## Use Cases

### Creating an Entity Set with $savedorderby

**Request:**

```
GET /rest/People?$filter="lastName!=''"&$savedfilter="lastName!=''"&$orderby="salary"&$savedorderby="salary"&$method=entityset
```

**Response:**

```json
{
    "__ENTITYSET": "/rest/People/$entityset/FC0EB10EBC4A485DAF52267E30708724",
    "__DATACLASS": "People",
    "__entityModel": "People",
    "__GlobalStamp": 0,
    "__COUNT": 19,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__TIMESTAMP": "2024-05-09T16:50:24.070Z",
            "__STAMP": 1,
            "ID": 1,
            "firstName": "John",
            "lastName": "Smith",
            "salary": 50000
        },
        {
            "__KEY": "2",
            "__TIMESTAMP": "2024-05-09T16:50:24.070Z",
            "__STAMP": 2,
            "ID": 2,
            "firstName": "Jane",
            "lastName": "Doe",
            "salary": 60000
        }
    ]
}
```

### Accessing the Entity Set with $savedorderby

**Request:**

```
GET /rest/People/$entityset/FC0EB10EBC4A485DAF52267E30708724?$savedfilter="lastName!=''"&$savedorderby="salary"
```

**Response:**

```json
{
    "__DATACLASS": "People",
    "__entityModel": "People",
    "__GlobalStamp": 0,
    "__COUNT": 19,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__TIMESTAMP": "2024-05-09T16:50:24.070Z",
            "__STAMP": 1,
            "ID": 1,
            "firstName": "John",
            "lastName": "Smith",
            "salary": 50000
        },
        {
            "__KEY": "2",
            "__TIMESTAMP": "2024-05-09T16:50:24.070Z",
            "__STAMP": 2,
            "ID": 2,
            "firstName": "Jane",
            "lastName": "Doe",
            "salary": 60000
        }
    ]
}
```

## Best Practices

- **Consistent Use of $savedfilter and $savedorderby:** Always use `$savedfilter` and `$savedorderby` together to ensure that both the filter and sort order are preserved.

- **Regular Monitoring:** Monitor the status of entity sets in the server's cache to avoid unexpected removals.

- **Optimal Timeout Settings:** Adjust the timeout settings based on your application's requirements to balance performance and data availability.

