---
id: $asArray
title: $asArray
---


## Overview

The `$asArray` endpoint allows you to receive the results of a query in an array format instead of the default JSON object format. This can be particularly useful when working with data collections in environments that expect array structures.

## Description

To receive the response in an array, you need to add `$asArray=true` to your REST request. This will modify the structure of the response to be an array of entities rather than a JSON object with metadata and entity details.

### Syntax

```
GET {{ApiEndpoint}}/rest/{{dataClass}}?$asArray=true
```

### Request Example

To fetch users whose names start with the letter 'u' and limit the results to the top 3 entries:

```
GET {{ApiEndpoint}}/rest/Users/?$filter="Name begin u"&$top=3&$asArray=true
```

### Response Request

The response will be an array of entities:

```json
[
    {
        "__KEY": 10,
        "__STAMP": 5,
        "ID": 10,
        "Name": "user10",
        "Email": "user10@example.com"
    },
    {
        "__KEY": 9,
        "__STAMP": 5,
        "ID": 9,
        "Name": "user9",
        "Email": "user9@example.com"
    },
    {
        "__KEY": 8,
        "__STAMP": 5,
        "ID": 8,
        "Name": "user8",
        "Email": "user8@example.com"
    }
]
```

### Default JSON Format

Without `$asArray=true`, the same request would return a JSON object with metadata and entity details:

```json
{
    "__DATACLASS": "Users",
    "__entityModel": "Users",
    "__GlobalStamp": 0,
    "__COUNT": 9,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "10",
            "__TIMESTAMP": "2024-05-09T16:50:24.072Z",
            "__STAMP": 5,
            "ID": 10,
            "Name": "user10",
            "Email": "user10@example.com",
            "Orders": {
                "__deferred": {
                    "uri": "/rest/Users[10]/Orders?$expand=Orders"
                }
            }
        },
        {
            "__KEY": "9",
            "__TIMESTAMP": "2024-05-09T16:50:24.072Z",
            "__STAMP": 5,
            "ID": 9,
            "Name": "user9",
            "Email": "user9@example.com",
            "Orders": {
                "__deferred": {
                    "uri": "/rest/Users[9]/Orders?$expand=Orders"
                }
            }
        },
        {
            "__KEY": "8",
            "__TIMESTAMP": "2024-05-09T16:50:24.072Z",
            "__STAMP": 5,
            "ID": 8,
            "Name": "user8",
            "Email": "user8@example.com",
            "Orders": {
                "__deferred": {
                    "uri": "/rest/Users[8]/Orders?$expand=Orders"
                }
            }
        }
    ],
    "__SENT": 3
}
```

## Combining with Other Query Parameters

You can combine `$asArray=true` with other query parameters to refine your data retrieval:

- **Filtering:** Retrieve filtered data in an array.
  ```
  GET {{ApiEndpoint}}/rest/Users/?$filter="Name begin u"&$asArray=true
  ```

- **Sorting:** Order data and receive it as an array.
  ```
  GET {{ApiEndpoint}}/rest/Users/?$orderby="Name desc"&$asArray=true
  ```

- **Pagination:** Paginate data and receive it as an array.
  ```
  GET {{ApiEndpoint}}/rest/Users/?$top=10&$skip=20&$asArray=true
  ```

## Best Practices

**Use Only When Necessary**: Employ `$asArray=true` only when your application specifically requires array responses.

**Minimize Metadata Overhead**: Use `$asArray=true` to reduce the overhead of metadata when only the data is needed.

**Combine with Other Parameters**: Leverage other query parameters (`$filter`, `$orderby`, `$top`, `$skip`) for optimal data retrieval and performance.

