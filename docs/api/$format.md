---
id: $format
title: $format 
---


## Functionality

### Definition

The `$format` endpoint allows you to specify the format in which data from a dataclass should be returned. This parameter is essential for integrating with different systems that require data in specific formats, such as JSON or Looker Studio.

### Syntax

To use the `$format` parameter, append it to your GET request in the following manner:

```
GET {{ApiEndpoint}}/rest/{{dataClass}}?$format={{format}}
```

### Supported Formats

The following formats are supported by the `$format` parameter:

| Format   | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| `json`   | Standard REST server format (used by default)                            |
| `looker` | JSON format compliant with [Looker Studio](https://lookerstudio.google.com/) |


:::tip
- When using the `json` format, the data is returned in a simple, flat JSON structure. This is the default format if `$format` is not specified. It is ideal for most general-purpose applications and integrations.

- When using the `looker` format, the data is structured to be compliant with Looker Studio's requirements. It includes additional metadata such as schema definitions and semantic information. This format is particularly useful for visualizing data in Looker Studio.
:::




## Use Cases

### Using the Default JSON Format

If you do not specify the `$format` parameter, the data is returned in the standard JSON format by default.

**Request:**

```
GET /rest/Company
```

**Response:**

```json
[
    {
        "ID": 1,
        "name": "Alpha Astral Animations",
        "address": "Ullman Drive (82)"
    },
    {
        "ID": 2,
        "name": "Alpha Bart Computing",
        "address": "Lehigh Square (110)"
    },
    {
        "ID": 3,
        "name": "Alpha Business Clock-making",
        "address": "Larchmont Terrace (90)"
    }
]
```

### Using the Looker Format

To retrieve data in a format compliant with Looker Studio:

**Request:**

```
GET /rest/Company?$filter="name begin a"&$top=3&$format=looker
```

**Response:**

```json
{
    "schema": [
        {
            "name": "ID",
            "dataType": "NUMBER",
            "semantics": {
                "conceptType": "METRIC",
                "semanticGroup": "NUMERIC",
                "semanticType": "NUMBER"
            }
        },
        {
            "name": "Name",
            "dataType": "STRING",
            "semantics": {
                "conceptType": "DIMENSION",
                "semanticGroup": "TEXT",
                "semanticType": "TEXT"
            }
        },
        {
            "name": "Email",
            "dataType": "STRING",
            "semantics": {
                "conceptType": "DIMENSION",
                "semanticGroup": "TEXT",
                "semanticType": "TEXT"
            }
        }
    ],
    "rows": [
        {
            "values": [
                10,
                "Harry",
                "user10@example.com"
            ]
        },
        {
            "values": [
                9,
                "test",
                "user9@example.com"
            ]
        },
        {
            "values": [
                8,
                "user8",
                "user8@example.com"
            ]
        }
    ],
    "filtersApplied": false,
    "__COUNT": 10,
    "__FIRST": 0
}
```


