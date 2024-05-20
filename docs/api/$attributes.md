---
id: $attributes
title: $attributes 
---


## Overview

The `$attributes` endpoint allows you to specify and select related attributes from a dataclass in a REST request. This endpoint is useful when you want to retrieve specific attributes of related entities or related entities themselves.

## Functionality

### Definition

When you have relation attributes in a dataclass, use `$attributes` to define the path of attributes whose values you want to get for the related entity or entities. You can apply `$attributes` to an entity (e.g., `People(1)`) or an entity selection (e.g., `People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`).

### Basic Usage

If `$attributes` is not specified in a query, or if the `*` value is passed, all available attributes are extracted. The related entity attributes are extracted in a simple form: an object with property `__KEY` (primary key) and `URI`. Related entities attributes are not extracted.

### Syntax

```
GET {{ApiEndpoint}}/rest/{{dataClass}}(id)?$attributes={{attributePath}}
```



## Use Cases

### Fetching Normal Attributes of an Entity

**Request:**

```
{{ApiEndpoint}}/rest/Payments[1]?$attributes=Amount,PaymentDate
```

**Response:**

```json
{
    "__entityModel": "Payments",
    "__DATACLASS": "Payments",
    "__KEY": "1",
    "__TIMESTAMP": "2024-05-09T17:01:51.479Z",
    "__STAMP": 1,
    "Amount": 124,
    "PaymentDate": "!!2024-01-01!!"
}
```



### Fetching Related Entity Attribute

Returns the related entity with simple form (deferred `__KEY` property and `URI`).

**Request:**

```
GET {{ApiEndpoint}}/rest/Orders(1)?$attributes=Purchaser
```

**Response:**

```json
{
    "__entityModel": "Orders",
    "__DATACLASS": "Orders",
    "__KEY": "1",
    "__TIMESTAMP": "2024-05-09T17:01:36.984Z",
    "__STAMP": 1,
    "Purchaser": {
        "__deferred": {
            "uri": "/rest/Users[1]",
            "__KEY": "1"
        }
    }
}
```

### Fetching All Attributes of a Related Entity

**Request:**

```
GET {{ApiEndpoint}}/rest/Orders(1)?$attributes=Purchaser.*
```

**Response:**

```json
{
    "__entityModel": "Orders",
    "__DATACLASS": "Orders",
    "__KEY": "1",
    "__TIMESTAMP": "2024-05-09T17:01:36.984Z",
    "__STAMP": 1,
    "Purchaser": {
        "__KEY": "1",
        "__TIMESTAMP": "2024-05-09T16:50:24.070Z",
        "__STAMP": 3,
        "ID": 1,
        "Name": "user1",
        "Email": "user1@example.com",
        "Orders": {
            "__deferred": {
                "uri": "/rest/Users[1]/Orders?$expand=Orders"
            }
        }
    }
}
```

### Fetching Related Entities Attributes

**Request:**

```
GET {{ApiEndpoint}}/rest/Orders(1)?$attributes=Purchaser.Name
```

**Response:**

```json
{
    "__entityModel": "Orders",
    "__DATACLASS": "Orders",
    "__KEY": "1",
    "__TIMESTAMP": "2024-05-09T17:01:36.984Z",
    "__STAMP": 1,
    "Purchaser": {
        "__KEY": "1",
        "__TIMESTAMP": "2024-05-09T16:50:24.070Z",
        "__STAMP": 3,
        "Name": "user1"
    }
}
```


### Fetching Nested Related Entity Attributes

**Request:**

```
{{ApiEndpoint}}/rest/Payments[1]?$attributes=Order.OrderedProduct.Name
```

**Response:**

```json
{
    "__entityModel": "Payments",
    "__DATACLASS": "Payments",
    "__KEY": "1",
    "__TIMESTAMP": "2024-05-09T17:01:51.479Z",
    "__STAMP": 1,
    "Order": {
        "__KEY": "1",
        "__TIMESTAMP": "2024-05-09T17:01:36.984Z",
        "__STAMP": 1,
        "OrderedProduct": {
            "__KEY": "5",
            "__TIMESTAMP": "2024-05-09T16:50:24.074Z",
            "__STAMP": 5,
            "Name": "product5"
        }
    }
}
```

## Best Practices

- **Specify Only Necessary Attributes:** Limit the attributes you fetch to those necessary for your application to optimize performance and reduce payload size.

- **Combine with Other Query Parameters:** Leverage other query parameters (`$filter`, `$orderby`) to refine your data retrieval and performance.

- **Handle Nested Attributes Carefully:** Be mindful of the complexity and potential performance implications when fetching nested related attributes.

