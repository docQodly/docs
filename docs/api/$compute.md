---
id: $compute
title: $compute 
---


## Functionality

### Definition

The `$compute` endpoint allows you to perform calculations on attributes within a dataclass. This can be done on simple attributes or on properties of object attributes. The calculations are specified using various keywords.

:::tip
This is useful for obtaining statistical information such as sum, average, count, minimum, and maximum values for numerical attributes, and count, minimum, and maximum values for string attributes.
:::

### Keywords

The following keywords can be used with `$compute` to perform different calculations:

| Keyword | Description |
|---------|-------------|
| $all    | A JSON object that defines all the functions for the attribute (average, count, min, max, and sum for numerical attributes, and count, min, and max for string attributes) |
| average | Get the average of a numerical attribute |
| count   | Get the total number of entries in the collection or dataclass (must specify an attribute) |
| min     | Get the minimum value of a numerical attribute or the lowest value of a string attribute |
| max     | Get the maximum value of a numerical attribute or the highest value of a string attribute |
| sum     | Get the sum of a numerical attribute |

### Syntax

To perform a calculation on an attribute, you use the following format:

```
GET {{ApiEndpoint}}/rest/{{dataClass}}/{{attribute}}?$compute={{keyword}}
```

If you want to perform a calculation on an object attribute, specify one of its properties:

```
GET {{ApiEndpoint}}/rest/{{dataClass}}/{{objectAttribute}}.{{property}}?$compute={{keyword}}
```



## Use Cases

### Get All Computations for a Numerical Attribute

**Request:**

```
GET {{ApiEndpoint}}/rest/Payments?$attributes=Amount&$compute=$all
```

**Response:**

```json
{
    "Amount": {
        "count": 20,
        "sum": 12,
        "average": 0.6,
        "min": -128,
        "max": 124
    }
}
```

### Get All Computations for a String Attribute

**Request:**

```
GET {{ApiEndpoint}}/rest/Users?$attributes=Name&$compute=$all
```

**Response:**

```json
{
    "Name": {
        "count": 11,
        "min": "Harry",
        "max": "user8"
    }
}
```

### Get All Computations for a Date Attribute

**Request:**

```
GET {{ApiEndpoint}}/rest/Payments?$attributes=PaymentDate&$compute=$all
```

**Response:**

```json
{
    "PaymentDate": {
        "count": 20,
        "min": "2024-01-01T00:00:00.000Z",
        "max": "2024-01-29T00:00:00.000Z"
    }
}
```


### Get Sum of a Numerical Attribute

**Request:**

```
GET {{ApiEndpoint}}/rest/Payments?$attributes=Amount&$compute=sum
```

**Response:**

```json
12
```



### Get Count of a Numerical Attribute

**Request:**

```
GET {{ApiEndpoint}}/rest/Payments?$attributes=Amount&$compute=count
```

**Response:**

```json
20
```




## Detailed Behavior

### Using `$compute=$all`

When using `$compute=$all`, the response includes all possible calculations for the attribute:

- For numerical attributes: count, sum, average, min, max

- For string attributes: count, min, max

- For date attributes: 


### Using Specific Keywords

You can specify a particular calculation by replacing `$all` with one of the specific keywords (`average`, `count`, `min`, `max`, `sum`). The response will then include only the result of the specified calculation.

### Object Attributes

If you need to perform calculations on a property of an object attribute, you must specify the property in the request URL. The calculation will be performed on the specified property.



## Best Practices

- **Specify Only Necessary Calculations:** Limit the calculations to those necessary for your application to optimize performance and reduce payload size.

- **Combine with Other Query Parameters:** Use other query parameters (`$filter`, `$orderby`) to refine your data retrieval and calculations.

- **Handle Errors Gracefully:** Implement proper error handling to manage cases where the calculations cannot be performed or data cannot be retrieved.

