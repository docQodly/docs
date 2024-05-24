---
id: $imageformat
title: $imageformat 
---


## Functionality

### Definition

The `$imageformat` endpoint allows you to specify the format in which images should be retrieved. You can choose from a variety of supported formats, including common image formats like PNG, JPEG, GIF, and TIFF. The format can be specified using either the file extension, MIME type, or OS type (Mac).

### Syntax

To use the `$imageformat` parameter, append it to your GET request:

```
GET /rest/{{dataClass}}({{id}})/{{imageAttribute}}?$imageformat={{format}}&$expand={{imageAttribute}}
```

### Supported Formats

The following formats are supported by the `$imageformat` parameter:

| Format                       | Description                              |
|------------------------------|------------------------------------------|
| "best"                       | Best format based on the image           |
| ".gif" or "image/gif"        | GIF format                               |
| ".png" or "image/png"        | PNG format                               |
| ".jpeg" or "image/jpeg"      | JPEG format                              |
| ".tiff" or "image/tiff"      | TIFF format                              |


### Additional Parameters

- `$version`: Optionally specify the version of the image to retrieve.


## Detailed Behavior

### Using the `best` Format

When using `$imageformat=best`, the server determines the optimal format for the image. This ensures the highest quality and compatibility based on the image's properties.

### Using Specific Formats

You can specify a particular image format by using one of the supported formats (e.g., `.gif`, `.png`, `.jpeg`, `.tiff`). The response will include the image in the specified format. 

:::tip
If the format is not supported or the image cannot be retrieved, an empty object `{}` will be returned.
:::

### Combining with `$expand`

The `$expand` parameter must be used in conjunction with `$imageformat` to fully load and retrieve the image attribute. Without `$expand`, the image attribute will not be expanded and the full image data will not be included in the response.



## Use Cases

### Retrieving an Image in JPEG Format

To retrieve an image in JPEG format, regardless of the actual type of the photo:

**Request:**

```
GET /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo
```

**Response:**

The image will be returned in JPEG format. If the image cannot be loaded or the format is incompatible, an empty object `{}` will be returned.

### Retrieving an Image in PNG Format

To retrieve an image in PNG format:

**Request:**

```
GET /rest/Employee(1)/photo?$imageformat=.png&$expand=photo
```

**Response:**

The image will be returned in PNG format. If the image cannot be loaded or the format is incompatible, an empty object `{}` will be returned.

### Retrieving the Best Format

To let the server decide the best format based on the image:

**Request:**

```
GET /rest/Employee(1)/photo?$imageformat=best&$expand=photo
```

**Response:**

The server will return the image in the best format based on the image characteristics. If the image cannot be loaded, an empty object `{}` will be returned.



## Best Practices

- **Specify the Required Format:** Always specify the `$imageformat` parameter to ensure the image is retrieved in the desired format.

- **Use `best` for Optimal Quality:** When the highest quality is required, use `$imageformat=best` to let the server determine the optimal format.

- **Combine with `$expand`:** Always use `$expand` with `$imageformat` to fully load the image attribute.

- **Handle Errors Gracefully:** Implement proper error handling to manage cases where the image cannot be retrieved or the format is not supported.

