---
id: $timeout
title: $timeout
---

## Functionality

### Definition

The `$timeout` endpoint defines the number of seconds to save an entity set in the server's cache. This parameter works in conjunction with `$method=entityset` to control the lifespan of the cached entity set.


### Syntax

To set a timeout for an entity set, use the following format:

```
GET {{ApiEndpoint}}/rest/{{dataClass}}?$filter="{{filterExpression}}"&$method=entityset&?$timeout={{seconds}}
```

### Supported Formats

The `$timeout` endpoint accepts a numerical value representing the number of seconds the entity set should remain in the cache. For example, 1800 seconds for 30 minutes.



## Detailed Behavior

### Default Timeout

By default, the timeout is set to two (2) hours.

### Using the `$timeout` Parameter

When an entity set is created with a specified timeout, the following occurs:

- The entity set is stored in the cache for the defined number of seconds.

- Each time the entity set is accessed, the timeout is recalculated from the current time.

- If the entity set is recreated using `$savedfilter`, the new default timeout is 10 minutes.

### Using Specific Formats

To set different timeout durations for an entity set, adjust the number of seconds in the `$timeout` parameter.

### Combining with `$expand`

The `$timeout` parameter can be used alongside `$expand` to manage the lifespan of expanded entity sets. Ensure that the `$expand` parameter is properly defined to retrieve related entities within the specified timeout period.



## Combining with Other Parameters

The `$timeout` parameter can be combined with other query parameter:

- **$expand**: Retrieve related entities within the specified timeout period.

- **$filter**: Define specific criteria for the entities included in the entity set.

- **$orderby**: Sort the entities in the entity set.

- **$top/$limit**: Limit the number of entities returned in the entity set.

- **$skip**: Skip a specified number of entities in the result set.

- **$savedfilter** and **$savedorderby**: Save the filter and order by criteria to recreate the entity set with the same reference ID.




## Use Cases

### Setting a Custom Timeout

**Request:**

To create an entity set that expires after 20 minutes:

```
GET /rest/Employee/?$filter="salary>50000"&$method=entityset&$timeout=1200
```

**Response:**

```json
{
    "__ENTITYSET": "/rest/Employee/$entityset/ABC123",
    "__COUNT": 50,
    "__SENT": 50,
    "__FIRST": 0,
    "__ENTITIES": [ ... ]
}
```


### Default Timeout Behavior

If no `$timeout` parameter is specified, the default timeout of 2 hours is applied:

**Request:**

```
GET /rest/Employee/?$filter="department='HR'"&$method=entityset
```

**Response:**

```json
{
    "__ENTITYSET": "/rest/Employee/$entityset/XYZ456",
    "__COUNT": 20,
    "__SENT": 20,
    "__FIRST": 0,
    "__ENTITIES": [ ... ]
}
```


### Recreating an Entity Set with `$savedfilter`

If an entity set is removed and then recreated using `$savedfilter`, the timeout is reset to 10 minutes:

**Request:**

```
GET /rest/Employee/?$filter="salary>50000"&$method=entityset&$savedfilter=true
```

**Response:**

```json
{
    "__ENTITYSET": "/rest/Employee/$entityset/DEF789",
    "__COUNT": 50,
    "__SENT": 50,
    "__FIRST": 0,
    "__ENTITIES": [ ... ]
}
```




## Best Practices

- **Set Appropriate Timeouts:** Choose a timeout duration that balances performance and resource utilization.

- **Monitor Cache Usage:** Regularly check the cache for expired or unused entity sets to optimize memory usage.

- **Handle Timeouts Gracefully:** Implement logic to handle cases where the entity set may have expired or been removed from the cache.