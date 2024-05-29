---
id: classFunctionsParameters
title: Function Parameters
---

## Overview

You can send parameters to data model functions through the REST API. The parameters are received in the declared parameters of the class functions on the server side.


## General Rules

The following rules must be followed:

- **Body of the POST Request**: Parameters must be passed in the body of a POST request.

- **JSON Format**: Parameters must be enclosed within a collection (JSON format).

- **Supported Data Types**: All scalar data types supported in JSON collections can be passed as parameters, including strings, numbers, booleans, and dates.

- **Entities and Entity Selections**: Both individual entities and entity selections can be passed as parameters. The JSON object must contain specific attributes (`__DATACLASS`, `__ENTITY`, `__ENTITIES`, `__DATASET`) to identify and assign data to the corresponding ORDA objects.



## Scalar Value Parameter

For scalar value parameters, simply enclose them in a collection in the body of the POST request. For instance, consider a `Product` dataclass with a function `calculateDiscount` that takes numeric parameters:

:::tip
All JSON data types are supported, including JSON pointers. Dates can be conveyed as strings adhering to ISO 8601 format (e.g., "2020-08-22T22:00:000Z").
:::

### Example

**Server-side Function Code:**

```qs
exposed function calculateDiscount(price : number, discountRate : number) : number
	var discountedPrice : number
	discountedPrice = price*(1-discountRate)
	return discountedPrice
```

**Request:**

```
POST {{ApiEndpoint}}/rest/Product/calculateDiscount
```

**Body of the request:**

```json
[100, 0.15]
```

**Response:**

```json
{
  "result": 85
}
```

### Fallback Behavior

If parameters are missing or invalid:

- **Missing Parameters**: If any parameters are missing, the function will return an error indicating the missing parameter.

  ```json
  {
    "__ERROR": [
      {
        "message": "Missing parameter 'price'",
        "componentSignature": "ds",
        "errCode": 1001
      }
    ]
  }
  ```

- **Invalid Parameters**: If parameters are of incorrect type or format, the function will return an error specifying the type mismatch or format issue.

  ```json
  {
    "__ERROR": [
      {
        "message": "Invalid parameter type for 'discountRate'. Expected 'number'.",
        "componentSignature": "ds",
        "errCode": 1002
      }
    ]
  }
  ```



## Entity Parameter

When passing an entity as a parameter, the entity is referenced on the server through its key (`__KEY` property). If the key is omitted, a new entity is created in memory on the server.

Additionally, attribute values for the entity can be passed, automatically utilized for the entity on the server.

:::info
Modified attribute values for an existing entity prompt automatic execution of the called ORDA data model function on the server. This enables result examination post-business rule application from the client application, facilitating informed decisions regarding entity saving on the server.
:::

**Fallback Behavior**: If the parameters are not provided or invalid, the function will handle the request with a default behavior, ensuring smooth operation even in unexpected scenarios.


### Parameter Specifications

| Property                 | Type    | Requirement | Description    |
| ------------------------ | ------- | ----------- | ---------------|
| Attributes of the entity | mixed   | Optional    | Values to modify.     |
| __DATACLASS            | String  | Mandatory   | Indicates the Dataclass of the entity.  |
| __ENTITY               | Boolean | Mandatory   | True to indicate that the parameter is an entity.  |
| __KEY                  | Mixed   | Optional    | Primary key of the entity. If not provided, a new entity is created on the server with the given attributes. If provided, the entity corresponding to the key is loaded on the server with the given attributes. |

### Example

**Server-side Function Code:**

```qs
exposed function updateEmployee(employeeData : object) : boolean
	var employee : cs.UsersEntity
	var status : object
	
	if (not(employeeData.__KEY = null))
		employee = ds.Employee.get(employeeData.__KEY)
		employee.fromObject(employeeData)
		status = employee.save()
	else 
		employee = ds.Employee.new()
		employee.fromObject(employeeData)
		status = employee.save()
	end 
	
	return status.success
```

**Request:**

```
POST {{ApiEndpoint}}/rest/Employee/updateEmployee
```

**Body of the request:**

```json
{
  "__DATACLASS": "Employee",
  "__ENTITY": true,
  "__KEY": 1,
  "firstName": "John",
  "lastName": "Doe",
  "salary": 75000
}
```

**Response:**

```json
{
  "result": true
}
```

### Fallback Behavior

If the key or required attributes are missing:

- **Missing Key**: If the `__KEY` is missing, a new entity is created with the provided attributes.

- **Invalid Key**: If the `__KEY` is invalid or not found, the function will return an error indicating the entity could not be found.

  ```json
  {
    "__ERROR": [
      {
        "message": "Entity with key '1' not found",
        "componentSignature": "ds",
        "errCode": 1003
      }
    ]
  }
  ```

- **Missing Attributes**: If required attributes are missing, the function will return an error specifying the missing attributes.

  ```json
  {
    "__ERROR": [
      {
        "message": "Missing required attribute 'lastName'",
        "componentSignature": "ds",
        "errCode": 1004
      }
    ]
  }
  ```



## Entity selection Parameter

Before passing an entity selection as a parameter, you need to define it using `$method=entityset`.

### Parameter Specifications

| Property                 | Type    | Requirement | Description                                                 |
| ------------------------ | ------- | ----------- | ----------------------------------------------------------- |
| Attributes of the entity | mixed   | Optional    | Values to modify.                                |
| __DATASET              | String  | Mandatory   | entitySetID (ID) of the entity selection                  |
| __ENTITIES             | Boolean | Mandatory   | True to indicate that the parameter is an entity selection. |

### Example

**Server-side Function Code:**

```qs
exposed function applyDiscount(productSelection : object, discount : number) : boolean
	var products : cs.UsersSelection
	var product : cs.UsersEntity
	
	products = ds.Product.getEntitySelection(productSelection.__DATASET)
	forEach (product, products)
		product.price = product.price*(1-discount/100)
		product.save()
	end 
	return true
```

**Request:**

```
POST {{ApiEndpoint}}/rest/Product/applyDiscount
```

**Body of the request:**

```json
[
  {
    "__ENTITIES": true,
    "__DATASET": "9B9C053A111E4A288E9C1E48965FE671"
  },
  10
]
```

**Response:**

```json
{
  "result": true
}
```


### Fallback Behavior

If the entity selection or discount is missing or invalid:

- **Missing Entity Selection**: If the `__DATASET` is missing, the function will return an error indicating the entity selection parameter is missing.

  ```json
  {
    "__ERROR": [
      {
        "message": "Missing parameter '__DATASET'",
        "componentSignature": "ds",
        "errCode": 1005
      }
    ]
  }
  ```

- **Invalid Entity Selection**: If the `__DATASET` is invalid or not found, the function will return an error indicating the entity selection could not be found.

  ```json
  {
    "__ERROR": [
      {
        "message": "Entity selection with ID '9B9C053A111E4A288E9C1E48965FE671' not found",
        "componentSignature": "ds",
        "errCode": 1006
      }
    ]
  }
  ```

- **Missing Discount**: If the discount parameter is missing, the function will use a default discount value.

  ```json
  {
    "result": true,
    "message": "No discount provided, default discount of 10% applied"
  }
  ```

- **Invalid Discount**: If the discount parameter is invalid, the function will return an error specifying the issue.

  ```json
  {
    "__ERROR": [
      {
        "message": "Invalid discount value. Expected 'number', received 'string'",
        "componentSignature": "ds",
        "errCode": 1007
      }
    ]
  }
  ```