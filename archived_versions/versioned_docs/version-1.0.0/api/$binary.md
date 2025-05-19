---
id: $binary
title: $binary 
---



## Functionality

### Definition

The `$binary` endpoint enables you to save the BLOB data as a document. When making a request with `$binary=true`, the BLOB data will be saved to disk. This is particularly useful for handling files such as images, PDFs, and other binary data. 

:::tip
To use `$binary`, you must also include the `$expand` parameter with the name of the BLOB attribute.
:::

### Syntax

```
GET /rest/{{dataClass}}(id)/{{blobAttributeName}}?$binary=true&$expand={{blobAttributeName}}
```

When the request is made, the user will be prompted to choose a location on their disk to save the BLOB data. 

:::info
If viewed in a text editor or console, the response may appear as a long string of characters representing the binary data.
:::

### Mandatory Use of `$expand`

The `$expand` parameter is mandatory when using `$binary=true`. This ensures that the BLOB data is correctly expanded and retrieved from the specified attribute.


## Combining with Other Parameters

While `$binary=true` is primarily used for saving BLOB data, it can be combined with other parameters to refine the request:

- **$filter:** Ensure that the BLOB data is retrieved from a filtered set of records.

- **$orderby:** Retrieve and save BLOB data from a sorted set of records.


## Use Cases

### Saving an Image BLOB

**Request:**

To save an image BLOB from the `profilePicture` attribute of the `User` dataclass with ID `5`:

```
GET /rest/User(5)/profilePicture?$binary=true&$expand=profilePicture
```


### Saving a PDF BLOB

**Request:**

To save a PDF BLOB from the `contract` attribute of the `Documents` dataclass with ID `42`:

```
GET /rest/Documents(42)/contract?$binary=true&$expand=contract
```



## Best Practices

- **Always Include `$expand`:** Ensure that the `$expand` parameter is included with the BLOB attribute name to retrieve the correct data.

- **Handle Errors Gracefully:** Implement proper error handling to manage cases where the BLOB data cannot be retrieved or saved.

- **Specify Only Necessary Data:** Limit the request to only the necessary BLOB data to optimize performance and reduce payload size.

