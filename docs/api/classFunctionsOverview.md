---
id: classFunctionsOverview
title: Overview
---


## Introduction

ORDA (Object Relational Data Access) allows developers to interact with the data model of an application through REST APIs. By defining class functions within the ORDA data model, these functions can be exposed and called via REST requests. This allows external systems and clients to leverage the data and business logic encapsulated within an application.


## Prerequisites

### Exposed Functions

Only functions marked with the `exposed` keyword can be called from REST requests. This ensures that only intended functions are available for external access.

:::tip Example: Exposing a Function

```qs
exposed function getTest() : string
    return "test"
```
:::

:::info
For more details, refer to the section on [Exposed vs. Non-Exposed Functions](../orda/data-model#exposed-vs-non-exposed-functions).
:::


## Key Concepts

### Function Call Syntax

Functions are called using POST requests on the appropriate ORDA interface without parentheses. The URL and body of the request vary depending on the type of class function being called.

```
POST {{ApiEndpoint}}/rest/Product/getProductDetails
```

### Handling Non-Exposed Functions

If a class function is not marked as exposed, it is treated as an attribute rather than a function, resulting in an error response.

```json
{
    "__ERROR": [
        {
            "message": "The \"getProductDetails\" attribute cannot be found in The \"Product\" dataclass",
            "componentSignature": "dbmg",
            "errCode": 1500
        },
        {
            "message": "Cannot completely build a list of attributes with \"getProductDetails\" for the \"Product\" dataclass",
            "componentSignature": "dbmg",
            "errCode": 1804
        }
    ]
}
```

## REST API Endpoints

The ORDA REST API provides several endpoints to call class functions:

|Class function|Syntax|
|---|----|
|[Datastore Class](../orda/data-model#datastore)|`/rest/$catalog/DataStoreClassFunction`|
|[Dataclass Class](../orda/data-model#dataclass)|`/rest/{dataClass}/DataClassClassFunction`|
|[EntitySelection Class](../orda/data-model#entityselection-class)|`/rest/{dataClass}/EntitySelectionClassFunction`|
|[Entity Class](../orda/data-model#entity-class)|`/rest/{dataClass}(key)/EntityClassFunction`|



## Calling Dataclass or Entity Selection Functions

The endpoint `{{ApiEndpoint}}/rest/{dataClass}/Function` is versatile and can be used to call either a dataclass function or an entity selection function. When making a call to this endpoint, the following process is followed to determine which function to execute:

1. **Entity Selection Search**: The REST API first checks if the function exists in the entity selection class associated with the specified `dataClass`. 

    :::info
    An entity selection represents a collection of entities from the dataClass and provides functions that can operate on this collection.
    :::


2. **Dataclass Search**: If the function is not found in the entity selection class, the API then searches for the function in the `dataClass` itself. 

    :::info
    The dataclass represents the blueprint of the data entities and can have class functions that provide various operations related to the `dataClass`.
    :::

3. **Function Execution**:

   - If the function is found in the entity selection class, it is executed with the context of the entity selection.

   - If the function is not found in the entity selection class but exists in the `dataClass`, it is executed with the context of the `dataClass`.

   - If the function exists in both the `dataClass` and the entity selection class, the function in the entity selection class will be executed, and the `dataclass` function will be ignored. This prioritization ensures that operations intended for collections of entities are given precedence over those intended for individual entities or the `dataClass` structure.

4. **Fallback Behavior**: If the function is not found in either the entity selection class or the `dataClass`, an error is returned indicating that the function does not exist.



## Use Case

### Step 1: Defining and Exposing a Function

Consider a scenario where we have a `Customer` dataClass with a function to retrieve customer details based on their ID:

```qs
exposed Function getCustomerDetails(customerID : Integer) : cs.CustomerEntity
    return ds.Customer.query("ID = :1", customerID).first()
```

In this example, the `getCustomerDetails` function is exposed and can be called via the REST API to fetch details of a specific customer.

### Step 2: Calling the Function via REST API

To call the `getCustomerDetails` function for a customer with ID "123", you would use the following request:

### Step 3: Request

**Method:** POST  
**URL:** `{{ApiEndpoint}}/rest/Customer/getCustomerDetails`

**Body:**

```json
[123]
```

#### Equivalent Code

This call is equivalent to:

```qs
customerDetails = ds.Customer.getCustomerDetails(123)
```

### Step 4: Sample Response

The response from the server would look something like this:

```json
{
    "__entityModel": "Customer",
    "__DATACLASS": "Customer",
    "__KEY": "123",
    "__TIMESTAMP": "2024-05-23T18:11:34.485Z",
    "__STAMP": 1,
    "ID": 123,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "orders": {
        "__deferred": {
            "uri": "/rest/Order?$filter=customerID=123",
            "__COUNT": 5
        }
    },
    "profilePicture": null
}
```

## Error Handling

When making REST API calls to ORDA class functions, proper error handling should be implemented to manage cases where the function call fails or returns an unexpected result. 

:::tip
Ensure that your client application can gracefully handle errors and retries as necessary.
:::


<!--

## /rest/{{dataClass}}/{{DataClassClassFunction}}

### Purpose

This endpoint executes a class function that is defined within the dataClass. 


### Properties Returned


### Sample Usage in Postman

How to Use:

- **Method**: GET
- **URL**: `{{ApiEndpoint}}/rest/Users/{{DataClassClassFunction}}`

<img alt="explorer" src={require('./img/restQueryPath.png').default} style={{borderRadius: '6px'}} />


### Sample Response

The response structure for the `/rest/Users/{{DataClassClassFunction}}` endpoint looks something like this in practice:

```json

```


## /rest/{{dataClass}}/{{EntitySelectionClassFunction}}

### Purpose

This endpoint executes a function on a selection of entities within the dataClass, potentially using filters to define which entities are affected.


### Properties Returned


### Sample Usage in Postman

How to Use:

- **Method**: GET
- **URL**: `{{ApiEndpoint}}/rest/Users/{{EntitySelectionClassFunction}}`

<img alt="explorer" src={require('./img/restQueryPath.png').default} style={{borderRadius: '6px'}} />


### Sample Response

The response structure for the `/rest/Users/{{EntitySelectionClassFunction}}` endpoint looks something like this in practice:

```json

```

## /rest/{{dataClass}}[{{key}}]/{{EntitySelectionClassFunction}}

### Purpose

This endpoint performs a class function on a specific entity within the dataClass identified by the key.


### Properties Returned


### Sample Usage in Postman

How to Use:

- **Method**: GET
- **URL**: `{{ApiEndpoint}}/rest/Users[2]/{{EntitySelectionClassFunction}}`

<img alt="explorer" src={require('./img/restQueryPath.png').default} style={{borderRadius: '6px'}} />


### Sample Response

The response structure for the `/rest/Users[2]/{{EntitySelectionClassFunction}}` endpoint looks something like this in practice:

```json

```

-->