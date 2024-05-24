---
id: $orderby
title: $orderby
---

## Functionality

### Definition

The `$orderby` endpoint sorts the data returned by the REST request based on specified attributes and sorting order. You can specify the order as ASC (or asc) for ascending and DESC (or desc) for descending.


### Syntax

To sort data using `$orderby`, use the following syntax:

```
GET /rest/{{dataClass}}?$orderby="{{attribute}} {{order}}, {{attribute2}} {{order2}}, ..."
```

:::tip
The `$orderby` endpoint accepts one or more attributes for sorting in ascending or descending order. For example, `$orderby="lastName desc, salary asc"` sorts entities by last name in descending order and salary in ascending order.
:::


## Detailed Behavior

### Default Sorting

Data is sorted in ascending order by default.

### Using the `$orderby` Parameter

When `$orderby` is specified, the following occurs:

- Entities returned by the REST request are sorted according to the attributes and sorting order provided.

### Using Sorting by Multiple Attributes

To sort entities by multiple attributes, separate the attributes with a comma and specify the sorting order (ASC or DESC) for each attribute.

:::tip
You can specify multiple attributes for sorting. The attributes are processed in the order they are listed.
:::


## Combining with Other Parameters

The `$orderby` parameter can be combined with other parameters:

- **$filter**: Narrow down the dataset before applying sorting.

- **$top/$limit** and **$skip**: Limit and navigate through the sorted dataset.

- **$expand**: Include related data in the sorted results.

- **$attributes**: Specify which attributes to include in the sorted response.

- **$method=entityset**: Create an entity set with sorted results and save it in the server's cache.


## Use Cases

### Retrieving and Sorting Entities

Retrieve entities and sort them by salary in descending order, last name in ascending order, and first name in ascending order:

**Request:**

```
GET /rest/Employee?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"
```

**Response:**

```json
{
  "__DATACLASS": "Employee",
  "__entityModel": "Employee",
  "__GlobalStamp": 0,
  "__COUNT": 10,
  "__SENT": 10,
  "__FIRST": 0,
  "__ENTITIES": [
    {
      "__KEY": "1",
      "__TIMESTAMP": "2024-05-09T16:50:24.072Z",
      "__STAMP": 1,
      "firstName": "Alice",
      "lastName": "Adams",
      "salary": 90000
    },
    {
      "__KEY": "2",
      "__TIMESTAMP": "2024-05-09T16:50:24.072Z",
      "__STAMP": 2,
      "firstName": "Bob",
      "lastName": "Brown",
      "salary": 80000
    },
    {
      "__KEY": "3",
      "__TIMESTAMP": "2024-05-09T16:50:24.072Z",
      "__STAMP": 3,
      "firstName": "Carol",
      "lastName": "Clark",
      "salary": 55000
    }
  ]
}
```

### Sorting by a Single Attribute

Sort entities by the lastName attribute in ascending order:

**Request:**

```
GET /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"
```

**Response:**

```json
{
  "__entityModel": "Users",
  "__COUNT": 10,
  "__SENT": 10,
  "__FIRST": 0,
  "__ENTITIES": [
    {
      "__KEY": "1",
      "__TIMESTAMP": "2024-05-09T16:50:24.072Z",
      "__STAMP": 1,
      "firstName": "John",
      "lastName": "Smith",
      "salary": 90000
    },
    {
      "__KEY": "2",
      "__TIMESTAMP": "2024-05-09T16:50:24.072Z",
      "__STAMP": 2,
      "firstName": "Susan",
      "lastName": "O'Leary",
      "salary": 80000
    }
    ...
  ]
}
```

### Sorting an Entity Set

Sort an entity set by the `lastName` attribute in ascending order:

**Request:**

```
GET /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"
```

**Response:**

```json
{
    "__DATACLASS": "Employee",
    "__entityModel": "Employee",
    "__COUNT": 10,
    "__SENT": 10,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__TIMESTAMP": "2024-05-09T16:50:24.072Z",
            "__STAMP": 1,
            "firstName": "John",
            "lastName": "Smith",
            "salary": 90000
        },
        {
            "__KEY": "2",
            "__TIMESTAMP": "2024-05-09T16:50:24.072Z",
            "__STAMP": 2,
            "firstName": "Susan",
            "lastName": "O'Leary",
            "salary": 80000
        }
        ...
    ]
}
```



## Best Practices

- **Specify Attributes Clearly**: Ensure that the attributes you are sorting by exist in the data model.

- **Use Multiple Attributes for Sorting**: Combine multiple attributes to achieve more precise sorting.

- **Combine with Filtering**: Use `$filter` to narrow down the dataset before applying sorting for better performance and relevance.

- **Monitor Performance**: Be aware that sorting large datasets can impact performance, especially if combined with complex filtering and expansions.