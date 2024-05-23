---
id: $savedfilter
title: $savedfilter 
---


## Functionality

### Definition

The `$savedfilter` endpoint allows you to save the filter defined by `$filter` when creating an entity set. This ensures that even if the entity set is removed from the server's cache, it can be recreated with the same filter.

### Syntax

To save a filter when creating an entity set, use the following format:

```
GET /rest/{{dataClass}}?$filter="{{filterExpression}}"&$savedfilter="{{filterExpression}}"&$method=entityset
```

To retrieve the entity set with the saved filter:

```
GET /rest/{{dataClass}}/$entityset/{{entitySetID}}?$savedfilter="{{filterExpression}}"
```

### Supported Formats

The `$savedfilter` parameter accepts a filter expression that matches the one used in `$filter`.



## Detailed Behavior

### Using the `$savedfilter` Parameter

When an entity set is created with a saved filter, the following occurs:

- The filter is stored with the entity set.

- If the entity set is removed from the cache, it can be recreated using the saved filter.

- The new default timeout for the recreated entity set is 10 minutes.



## Combining with Other Parameters

The `$savedfilter` parameter can be combined with other query parameters to manage the entity set:

- **$expand**: Retrieve related entities within the specified filter.

- **$orderby**: Sort the entities in the entity set.

- **$top/$limit**: Limit the number of entities returned in the entity set.

- **$skip**: Skip a specified number of entities in the result set.



## Use Cases

### Creating an Entity Set with a Saved Filter

To create an entity set and save the filter:

**Request:**

```
GET /rest/People?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset
```

**Response:**

```json
{
    "__ENTITYSET": "/rest/People/$entityset/CC6B48EDBFD64CD694F8EFBFC93F73FC",
    "__DATACLASS": "People",
    "__entityModel": "People",
    "__GlobalStamp": 0,
    "__COUNT": 13,
    "__FIRST": 0,
    "__ENTITIES": [ ... ],
    "__SENT": 13
}
```


### Retrieving an Entity Set with a Saved Filter

To retrieve the entity set using the saved filter:

**Request:**

```
GET /rest/People/$entityset/CC6B48EDBFD64CD694F8EFBFC93F73FC?$savedfilter="employer.name=Apple"
```

**Response:**

```json
{
    "__DATACLASS": "People",
    "__entityModel": "People",
    "__GlobalStamp": 0,
    "__COUNT": 13,
    "__FIRST": 0,
    "__ENTITIES": [ ... ],
    "__SENT": 13
}
```

### Recreating an Entity Set After Timeout

If the entity set is removed from the cache due to timeout, it can be recreated with the saved filter:

**Request:**

```
GET /rest/People/$entityset/CC6B48EDBFD64CD694F8EFBFC93F73FC?$savedfilter="employer.name=Apple"
```




## Best Practices

- **Always Save Critical Filters:** Save important filters to ensure entity sets can be recreated if they are removed from the cache.

- **Monitor Entity Set Usage:** Regularly check the status of entity sets and recreate them as needed using saved filters.

- **Combine with $savedorderby:** Use `$savedorderby` along with `$savedfilter` to maintain consistent ordering when recreating entity sets.

- **Set Appropriate Timeouts:** Use the `$timeout` parameter to control the lifespan of cached entity sets and avoid unintentional deletions.
