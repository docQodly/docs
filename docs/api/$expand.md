---
id: $expand
title: $expand 
---



## Functionality

### Definition

The `$expand` endpoint allows you to expand attributes within a dataclass, such as images or BLOBs, to retrieve their full content. This feature is particularly useful for viewing image attributes or saving BLOB attributes to disk. 

:::tip
`$expand` can be used for expanding relational attributes, although using `$attributes` is recommended for this purpose.
:::

### Syntax

To expand an attribute, use the following format:

```
GET {{ApiEndpoint}}/rest/{{dataClass}}(id)/{{attribute}}?$expand={{attribute}}&additionalParameters
```

### Additional Parameters

#### $binary

The `$binary=true` parameter is used when expanding BLOB attributes. It specifies that the BLOB should be treated as binary data and is typically used when saving BLOBs to disk.

#### $imageformat

The `$imageformat` parameter is used to specify the desired format for an image attribute. Common values include `best`, which retrieves the image in the highest quality available.

#### $version

The `$version` parameter is used to specify the version of the attribute to retrieve. This is often used with image attributes to get a specific version of the image.



## Use Cases


### Viewing an Image Attribute

To view an image attribute in its entirety, you can use the `$expand` parameter along with optional parameters such as `$imageformat` and `$version`.

#### Syntax

```
GET {{ApiEndpoint}}/rest/{{dataClass}}(id)/{{imageAttribute}}?$imageformat=best&$version=1&$expand={{imageAttribute}}
```

:::info
- `imageAttribute`: The name of the image attribute.
- `$imageformat`: Specifies the desired image format (e.g., best).
- `$version`: Specifies the version of the image attribute.
- `$expand`: The attribute to expand (same as `imageAttribute`).
:::

#### Example

To view an employee's photo in the best format:

```
GET /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo
```

:::info
Refer to the [`$imageformat`]($imageformat.md) and [`$version`]($version.md) documentation for more details on these parameters.
:::


### Saving a BLOB Attribute to Disk

To save a BLOB stored in your dataclass, use the `$expand` parameter along with `$binary=true` to retrieve the BLOB content and prompt for saving it to disk.

#### Syntax

```
GET {{ApiEndpoint}}/rest/{{dataClass}}(id)/{{blobAttribute}}?$binary=true&$expand={{blobAttribute}}
```

:::info
- `blobAttribute`: The name of the BLOB attribute.
- `$binary`: Set to `true` to indicate the BLOB should be treated as binary data.
- `$expand`: The attribute to expand (same as `blobAttribute`).
:::

#### Example

To save a company's BLOB attribute to disk:

```
GET /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt
```

### Expanding Relational Attributes

For compatibility reasons, `$expand` can also be used to expand relational attributes, although using `$attributes` is recommended for this purpose. This allows you to retrieve related entities in your data.

#### Syntax

```
GET {{ApiEndpoint}}/rest/{{dataClass}}(id)?$expand={{relationalAttribute}}
```

:::info
- `relationalAttribute`: The name of the relational attribute.
- `$expand`: The relational attribute to expand.
:::

#### Example

To expand a company's staff attribute:

```
GET /rest/Company(1)?$expand=staff
```

To expand an employee's employer attribute with a filter:

```
GET /rest/Employee?$filter="firstName BEGIN a"&$expand=employer
```


## Best Practices

- **Use `$attributes` for Relational Attributes:** Although `$expand` can expand relational attributes, it is recommended to use the `$attributes` parameter for better clarity and functionality.

- **Specify Image and Version Parameters:** When expanding image attributes, use `$imageformat` and `$version` to ensure you retrieve the desired format and version.

- **Combine with `$binary` for BLOBs:** When dealing with BLOB attributes, always combine `$expand` with `$binary=true` to handle binary data properly.

