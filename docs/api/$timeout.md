---
id: $timeout
title: $timeout
---

## Functionality

### Definition

The `$timeout` endpoint specifies the duration, in seconds, for which an entity set is retained in the server's cache (e.g., $timeout=1600). This adjusts the caching period for the entity set accordingly.

To set a timeout for an entity set, use `$method=entityset` parameter and specify the duration in seconds with `$timeout`.

:::info
By default, the timeout is two (2) hours.

Once the timeout has been defined, each time an entity set is called upon (by using `$method=entityset`), the timeout is recalculated based on the current time and the timeout.

If an entity set is removed and then recreated using `$method=entityset` along with `$savedfilter`, the new default timeout is 10 minutes regardless of the timeout you defined when calling `$timeout`.
:::

### Syntax

```
GET {{ApiEndpoint}}/rest/{{dataClass}}/$method=entityset&?$timeout={{time(s)}}
```

## Combining with Query Parameters

You can combine `$timeout` with a filtering query parameter:

```
GET /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1600
```

## Use Cases

**Request:**

In our entity set that we're creating, we define the timeout to 20 minutes:

```
GET /rest/Employee/?$method=entityset&$timeout=1200
```
