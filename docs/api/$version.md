---
id: $version
title: $version 
---


## Functionality

### Definition

The `$version` parameter is used to specify the version number of an image returned by the server. This helps bypass the browser's cache, ensuring that the most recent version of the image is retrieved.

### Syntax

To retrieve a specific version of an image, use the following syntax:

```
GET /rest/{{dataClass}}({{id}})/{{imageAttribute}}?$version={{versionNumber}}&$imageformat={{imageFormat}}&$expand={{imageAttribute}}
```


## Detailed Behavior

### Ensuring Correct Image Retrieval

The `$version` parameter helps to avoid issues with browser caching by specifying the version number of the image. When the version number is included in the request, the server ensures that the latest version of the image is returned, even if the image has been updated.

### Server-Modified Version Value

The server modifies the value of the image's version parameter whenever the image is updated. This ensures that clients always receive the most up-to-date version of the image.



## Combining with Other Parameters

To retrieve an image in a specific format and ensure you get the correct version, combine `$version` with `$imageformat` and `$expand` parameters.



## Use Cases

### Retrieving an Image with a Specific Version

**Request:**

To retrieve an image in JPEG format with a version number of 3, use the following request:

```
GET /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo
```

**Response:**

The server returns the image in JPEG format with the specified version.

```json
{
    "photo": {
        "__KEY": "1",
        "__STAMP": 3,
        "uri": "/rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo",
        "__deferred": {
            "uri": "/rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo"
        }
    }
}
```

:::tip Retrieving an Updated Image Version

If the image has been updated and the version number has changed, use the new version number in the request to ensure you retrieve the latest image:

```
GET /rest/Employee(1)/photo?$imageformat=jpeg&$version=4&$expand=photo
```

:::

## Best Practices

- **Always Use $version:** To avoid caching issues, always use the `$version` parameter when retrieving images.

- **Combine with $imageformat and $expand:** For optimal results, combine `$version` with `$imageformat` and `$expand` to specify the desired image format and ensure the full image is retrieved.

- **Monitor Version Changes:** Keep track of version changes to ensure that clients are always retrieving the most recent version of the image.





