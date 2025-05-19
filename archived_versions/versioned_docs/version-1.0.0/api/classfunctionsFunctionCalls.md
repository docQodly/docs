---
id: classfunctionsFunctionCalls
title: Function Calls
---

## Datastore Class Endpoint

### Syntax

```
`/rest/$catalog/DataStoreClassFunction`
```

### Description

Datastore Class endpoint is used for invoking functions that are defined within a Datastore class. Datastore classes typically handle high-level operations related to data management.

### Example

```http
POST {{ApiEndpoint}}/rest/$catalog/getName
```

**Response:**

```json
{
  "result": "US cities and zip codes manager"
}
```

## Dataclass Class Endpoint

#### Syntax

```
/rest/{{dataClass}}/DataClassClassFunction
```

### Description

Dataclass Class endpoint is utilized for invoking functions defined within a Dataclass class. Dataclass classes typically represent structured data entities with associated operations.

### Example

```
POST {{ApiEndpoint}}/rest/City/getCity
```

**Response:**

```json
{
  "__entityModel": "City",
  "__DATACLASS": "City",
  "__KEY": "1",
  "__TIMESTAMP": "2020-03-09T08:03:19.923Z",
  "__STAMP": 1,
  "ID": 1,
  "name": "Aguada",
  "countyFIPS": 72003,
  "county": {
    "__deferred": {
      "uri": "/rest/County(72003)",
      "__KEY": "72003"
    }
  },
  "zips": {
    "__deferred": {
      "uri": "/rest/City(1)/zips?$expand=zips"
    }
  }
}
```

## EntitySelection Class Endpoint

#### Syntax

```
/rest/{{dataClass}}/EntitySelectionClassFunction
```

### Description

EntitySelection Class endpoint is for calling functions defined within an EntitySelection class. EntitySelection classes typically deal with queries and selections of entities based on certain criteria.

### Example

```
POST {{ApiEndpoint}}/rest/City/getPopulation/?$filter="ID<3"
```

**Response:**

```json
{
  "result": 87256
}
```

## Entity Class Endpoint

#### Syntax

```
/rest/{{dataClass}}(key)/EntityClassFunction
```

### Description

Entity Class endpoint is used for invoking functions defined within an Entity class. Entity classes represent individual instances of data entities.

### Example

```
POST {{ApiEndpoint}}/rest/City(2)/getPopulation
```

**Response:**

```json
{
  "result": 48814
}
```
