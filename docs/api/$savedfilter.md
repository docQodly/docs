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

The `$savedfilter` parameter can be combined with other parameters to enhance and secure the filtering of entity sets:

- **$filter**: Define the initial filter criteria and save it using `$savedfilter` for consistency in future requests.

- **$orderby**: Combine with `$savedorderby` to save and apply sorting criteria along with the filter.

- **$top/$limit** and **$skip**: Navigate through the filtered entity set while maintaining the saved filter.

- **$expand**: Include related data in the filtered results, ensuring the filter criteria are consistently applied.

- **$attributes**: Specify which attributes to include in the filtered results, preserving the filter criteria.

- **$method=entityset**: Create an entity set with a saved filter, allowing for consistent retrieval of filtered data.

- **$compute**: Apply computations on the filtered dataset while ensuring the filter criteria are maintained.

- **$entityset**: Use the saved filter when accessing entity sets to maintain the filtering consistency.

- **$queryplan**: Analyze the query plan for the saved filter to understand and optimize its performance.

- **$querypath**: Trace the execution path of the query with the saved filter to identify optimization opportunities.



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
