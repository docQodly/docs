---
id: dataclassManipulation
title: Data Manipulation
---

import Column from '@site/src/components/Column'


## Data Querying

### Simple Queries

Queries can be executed using the `$filter` query parameter to specify conditions. For example, to retrieve persons by last name:

```
GET {{ApiEndpoint}}/rest/Person/?$filter="lastName=Smith"
```

### Sorting Data

Data can be ordered using the `$orderby` parameter, which allows sorting by one or multiple attributes, and can also handle attributes of related entities:

```
GET {{ApiEndpoint}}/rest/Employee/?$orderby="lastName asc, department.name desc"
```

### Pagination in Data Queries

Pagination is managed through `$skip` and `$top` (or $limit) parameters to control the starting point and the number of records returned:

```
GET {{ApiEndpoint}}/rest/Employee/?$top=10&$skip=20
```



## Entity Manipulation

### Creating and Updating Entities

Entities can be added or modified using the POST or PUT methods with `$method=update`:

```
POST {{ApiEndpoint}}/rest/Employee?$method=update
```

### Deleting Entities

Entities can be removed by using the `DELETE` method:

```
DELETE {{ApiEndpoint}}/rest/Employee[123]
```

Or the `$method=delete` in a GET request:

```
GET {{ApiEndpoint}}/rest/Employee[123]?$method=delete
```



## Managing Entity Sets

Entity sets or selections are collections of entities accessed through REST and cached in the server. This approach enhances performance by avoiding repeated queries for the same data. 

### Entity Set Creation

Entity sets, which are cached selections of entities, are created with the `$method=entityset` for enhanced performance and reduced data re-fetching:

```
GET {{ApiEndpoint}}/rest/Employee?$method=entityset
```

:::tip
A new selection of entities is returned; however, you can also create a new entity set by calling $method=entityset at the end of the REST request.
:::

### Accessing an Entity Set

To retrieve a stored entity set:

```
GET {{ApiEndpoint}}/rest/Employee/$entityset/{{entitySetID}}
```

### Modifying and Maintaining Entity Sets

Modifications to entity attributes within a set are dynamically updated. If the modified attribute affects the original query result, the entity remains in the set unless removed or the query is rerun:

```
PATCH {{ApiEndpoint}}/rest/Employee/$entityset/{{entitySetID}}[123]
```

:::info
Updating attributes within an entity set affects only the stored data and does not alter the original query criteria. An entity will remain part of the set unless it is explicitly removed or the set is re-queried, even if changes to its attributes mean it no longer matches the initial query criteria. Deletions are immediately reflected, removing the entity from the set permanently.
:::

### Entity Set Expiry and Renewal

Entity sets have a default expiration of two hours, adjustable with `$timeout`:

```
GET {{ApiEndpoint}}/rest/Employee/$entityset/{{entitySetID}}?$timeout=7200
```

:::tip
Each time an entity set is accessed, its expiration timer is reset to the specified timeout value, whether it's the default setting or a custom duration defined by `$timeout`.
:::

### Deleting Entity Sets

An entity set could be removed from cache with `$method=release`:

```
GET {{ApiEndpoint}}/rest/Employee/$entityset/{{entitySetID}}?$method=release
```

:::info
If an entity set is accessed after it has been removed or expired, it will be automatically recreated with a new default expiration of 10 minutes. This process refreshes the set, potentially updating its contents based on the latest data available.
:::


### Combining Entity Sets

You can merge two previously created entity sets using logical operators. This functionality allows for the combination, intersection, or differentiation of entity sets based on specified conditions:

```plaintext
GET {{ApiEndpoint}}/rest/Employee/$entityset/{{entitySetID1}}?$logicOperator...&$otherCollection={{entitySetID2}}
```

:::info
This operation enables you to manipulate the resulting dataset by merging both sets, extracting common elements, or identifying unique records in either set.
:::


## Data Aggregation

Use `$compute` to perform aggregate functions like average, count, min, max, or sum on a specific attribute. The syntax is straightforward, for example:

Aggregative computations (average, count, min, max, sum) can be executed on specific attributes using `$compute`:

```
GET {{ApiEndpoint}}/rest/Employee/salary?$compute=max
```

To fetch all aggregate values in one request:

```
GET {{ApiEndpoint}}/rest/Employee/salary?$compute=$all
```


## Image and BLOB Handling

### Viewing Images

To access images at their best resolution, incorporating format and version control:

```
GET {{ApiEndpoint}}/rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo
```

:::info
For more information about the image formats, refer to $imageformat. For more information about the version parameter, refer to $version.
:::


### Storing BLOBs

For saving BLOB data to disk while ensuring the data is transferred in binary format:

```
GET {{ApiEndpoint}}/rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt
```

:::info
For more information about the image formats, refer to `$binary=true` and `$expand` sections.
:::