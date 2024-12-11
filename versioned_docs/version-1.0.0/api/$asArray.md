---
id: $asArray
title: $asArray
---



## Functionality

### Definition

The `$asArray` endpoint allows you to receive the results of a query in an array format instead of the default JSON object format. This will modify the structure of the response to be an array of entities rather than a JSON object with metadata and entity details.


### Syntax

```
GET /rest/{{dataClass}}?$asArray=true
```


## Combining with Other Parameters

You can combine `$asArray=true` with other parameters to refine your data retrieval:

- **$filter:** Retrieve filtered data in an array.

- **$orderby:** Order data and receive it as an array.

- **$skip:** Paginate data and receive it as an array.


## Use Cases


### Query Results In Array Format

**Request:**

To fetch users whose names start with the letter 'u' and limit the results to the top 3 entries:

```
GET /rest/Users?$filter="Name begin u"&$top=3&$asArray=true
```

**Response:**

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


## Best Practices

**Use Only When Necessary**: Employ `$asArray=true` only when your application specifically requires array responses.

**Minimize Metadata Overhead**: Use `$asArray=true` to reduce the overhead of metadata when only the data is needed.

**Combine with Other Parameters**: Leverage other query parameters (`$filter`, `$orderby`, `$top`, `$skip`) for optimal data retrieval and performance.

