---
id: $top$limit
title: $top/$limit 
---


## Functionality

### Definition

The `$top` and `$limit` parameters allow you to define the maximum number of entities to return in a response. These parameters can be used interchangeably and are useful for controlling the size of the result set.

### Syntax

To limit the number of entities returned, use the following syntax:

```
GET /rest/{{dataClass}}?$top={{number}}
```

or

```
GET /rest/{{dataClass}}?$limit={{number}}
```



## Detailed Behavior

### Limiting the Number of Entities

By default, the server returns up to 100 entities. You can specify a different limit by using `$top` or `$limit` to control the number of entities returned. For example, setting `$top=50` will limit the response to 50 entities.

### Using $top/$limit with $skip

You can combine `$top` or `$limit` with `$skip` to paginate through a large collection of entities. This combination allows you to navigate the result set by specifying the starting point and the number of entities to return.



## Combining with Other Parameters

The `$top/$limit` parameter can be combined with other parameters to control the number of entities returned in a query efficiently:

- **$skip**: Use in conjunction with `$top/$limit` to navigate through the dataset by specifying the starting point and the number of entities to return.

- **$filter**: Narrow down the dataset before limiting the number of entities returned.

- **$orderby**: Sort the dataset before applying the limit to ensure consistent results.

- **$expand**: Include related data in the results while limiting the number of entities returned.

- **$attributes**: Specify which attributes to include in the results after limiting the number of entities.

- **$method=entityset**: Create an entity set and control the number of entities returned from the set.

- **$savedfilter**: Apply a saved filter to the dataset before limiting the number of entities returned.

- **$savedorderby**: Apply a saved sorting order to the dataset before limiting the number of entities returned.

- **$compute**: Perform computations on a limited number of entities from the dataset.

- **$lock**: Limit the number of entities when locking or unlocking entities to ensure the operation applies to a specific subset of the dataset.

- **$distinct**: Limit the number of distinct values returned from a dataset.




## Use Cases

### Retrieving a Limited Number of Entities

**Request:**

```
GET /rest/Employee?$top=50
```

**Response:**

Returns the first 50 entities from the Employee dataclass.


### Paginating Through Results

Retrieve entities 51 to 60:

**Request:**

```
GET /rest/Employee?$skip=50&$top=10
```

**Response:**

Returns entities 51 to 60 from the Employee dataclass.


### Limiting Filtered Results

Retrieve the top 5 employees with the highest salaries:

**Request:**

```
GET /rest/Employee?$filter="salary>0"&$orderby="salary DESC"&$top=5
```

**Response:**

Returns the top 5 employees sorted by salary in descending order.



### Best Practices

- **Use Pagination:** When dealing with large datasets, use `$skip` and `$top` together to paginate results efficiently.

- **Specify Limits:** Always specify a reasonable limit to avoid performance issues and large payloads.

- **Combine with Filters:** Use `$filter` along with `$top` or `$limit` to refine the result set and return only the necessary data.
