---
id: $orderby
title: $orderby
---

## Functionality

### Definition

The `$orderby` endpoint sorts the data returned by the attribute and sorting order defined. It allows specifying the order of sorting, either in ascending or descending order, for one or more attributes.

### Syntax

To sort entities returned by a REST request, use the following format:

```
GET /rest/{{dataClass}}/?$filter="{{filterExpression}}"&$orderby="{{orderByExpression}}"
```

:::tip
The `$orderby` endpoint accepts one or more attributes for sorting in ascending or descending order. For example, `$orderby="lastName desc, salary asc"` sorts entities by last name in descending order and salary in ascending order.
:::

## Detailed Behavior

### Default Sorting

By default, data is sorted in ascending order.

### Using the `$orderby` Parameter

When `$orderby` is specified, the following occurs:

- The entities returned by the REST request are sorted based on the attributes and sorting order provided.

### Using Specific Formats

To sort entities by multiple attributes, delimit them with a comma and specify the sorting order for each attribute.

### Example Usage

In this example, entities are retrieved and sorted simultaneously:

```
GET /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"
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
      "__STAMP": 1,
      "firstName": "Alice",
      "lastName": "Adams",
      "salary": 90000
    },
    {
      "__KEY": "2",
      "__STAMP": 2,
      "firstName": "Bob",
      "lastName": "Brown",
      "salary": 80000
    },
    {
      "__KEY": "3",
      "__STAMP": 3,
      "firstName": "Carol",
      "lastName": "Clark",
      "salary": 55000
    }
  ]
}
```

The example below sorts the entity defined by the lastName attribute in ascending order:

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
      "__STAMP": 1,
      "firstName": "John",
      "lastName": "Smith",
      "salary": 90000
    },
    {
      "__KEY": "2",
      "__STAMP": 2,
      "firstName": "Susan",
      "lastName": "O'Leary",
      "salary": 80000
    }
    // more entities
  ]
}
```
