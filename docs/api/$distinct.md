---
id: $distinct
title: $distinct 
---


## Functionality

### Definition

The `$distinct` endpoint enables you to return a collection containing the distinct values for a query on a specific attribute. You can specify only one attribute in the dataclass for this operation. This parameter works best with attributes of type String, but it can also be used with any attribute type that can contain multiple values.

### Syntax

To retrieve distinct values for an attribute, use the following format:

```
GET /rest/{{dataClass}}/{{attribute}}?$filter="{{filterExpression}}"&$distinct=true
```

You can also use `$skip` and `$top/$limit` parameters to navigate the selection before it's placed in an array.



## Use Cases

### Retrieve Distinct Values for a String Attribute

**Request:**

```
GET /rest/Users/Name?$filter="Name=J@"&$distinct=true
```

**Response:**

```json
[
    "John",
    "James"
]
```

### Retrieve Distinct Values with Pagination

**Request:**

```
GET /rest/Users/Name?$filter="Name=J*"&$distinct=true&$skip=1&$top=1
```

**Response:**

```json
[
    "John"
]
```

### Retrieve Distinct Values for a Numerical Attribute

**Request:**

```
GET /rest/Employee/salary?$distinct=true
```

**Response:**

```json
[
    50000,
    60000,
    70000
]
```

### Retrieve Distinct Values for an Object Attribute's Property

**Request:**

```
GET /rest/Employee/address.city?$distinct=true
```

**Response:**

```json
[
    "New York",
    "Los Angeles",
    "Chicago"
]
```



## Best Practices

- **Specify Only Necessary Filters:** Use the `$filter` parameter to limit the dataset to relevant entries, which helps in optimizing performance and reducing payload size.

- **Combine with Pagination:** Use `$skip` and `$top/$limit` to manage large result sets effectively and implement pagination.

- **Handle Errors Gracefully:** Implement proper error handling to manage cases where the distinct operation cannot be performed or data cannot be retrieved.
