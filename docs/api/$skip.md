---
id: $skip
title: $skip 
---


## Functionality

### Definition

The `$skip` parameter defines the starting point within a collection of entities. By default, the collection starts with the first entity. To start with a different entity, you specify the number of entities to skip.

### Syntax

To use `$skip`, include it in your GET request with the number of entities you wish to skip:

```
GET /rest/{{dataClass}}/$entityset/{{entitySetID}}?$skip={{number}}
```

:::tip
Integer value indicating the number of entities to skip.
:::




## Detailed Behavior

### Starting Point

By default, entity collections start from the first entity. By using `$skip`, you can define a different starting point. For instance, `$skip=10` will start the collection from the 11th entity.




## Combining with Other Parameters

The `$skip` parameter can be combined with other parameters to navigate through a collection of entities efficiently:

- **$top/$limit**: Use in conjunction with `$skip` to control the number of entities returned after skipping a certain number.

- **$filter**: Narrow down the dataset before skipping a specified number of entities.

- **$orderby**: Sort the dataset before applying the skip operation to ensure consistent results.

- **$expand**: Include related data in the results while skipping a certain number of entities.

- **$attributes**: Specify which attributes to include in the results after skipping entities.

- **$method=entityset**: Create an entity set and navigate through it by skipping entities.

- **$savedfilter**: Apply a saved filter to the dataset before skipping entities.

- **$savedorderby**: Apply a saved sorting order to the dataset before skipping entities.

- **$compute**: Perform computations on a dataset after skipping a specified number of entities.

- **$lock**: Skip entities when locking or unlocking entities to ensure the operation starts from a specific point in the dataset.

- **$distinct**: Skip a number of entities when retrieving distinct values from a dataset.



## Use Cases

### Skipping Entities

To skip the first 20 entities and start the collection from the 21st entity:

**Request:**

```
GET /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20
```

**Response:**

This request would return entities starting from the 21st entity in the collection.


```json
{
    "__DATACLASS": "Employee",
    "__entityModel": "Employee",
    "__GlobalStamp": 0,
    "__COUNT": 50,
    "__FIRST": 20,
    "__ENTITIES": [...]
}
```

### Skipping and Limiting Results

To skip the first 10 entities and retrieve the next 2 entities:

**Request:**

```
GET /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=10&$top=5
```

**Response:**

This request would return the 11th through 15th entities in the collection.

```json
{
    "__DATACLASS": "Employee",
    "__entityModel": "Employee",
    "__GlobalStamp": 0,
    "__COUNT": 50,
    "__FIRST": 10,
    "__ENTITIES": [...],
    "__SENT": 5
}
```

## Best Practices

- **Combine with $top/$limit**: Use `$skip` in combination with `$top` or `$limit` for efficient pagination.

- **Optimize Queries**: Ensure your queries are optimized for performance, especially when working with large datasets.

- **Error Handling**: Implement error handling for cases where the skip value exceeds the number of entities in the collection.