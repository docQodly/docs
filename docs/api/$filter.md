---
id: $filter
title: $filter 
---


## Functionality

### Definition

The `$filter` endpoint allows you to query data within a dataclass or method using various criteria. This endpoint is versatile, supporting both simple and complex filters, as well as filters using parameters. 

### Syntax

To use the `$filter` parameter, follow this format:

```
GET /rest/{{dataClass}}?$filter="{{filterExpression}}"
```

### Attribute

Attributes can be directly specified if they belong to the same dataclass. For attributes from related dataclasses, you must include the relation path. The attribute names are case-sensitive.


- Filtering by a related dataclass attribute:

    ```
    GET /rest/Employee?$filter="employer.name=Acme"
    ```

- Filtering by an object attribute using dot notation:

    ```
    GET /rest/Person?$filter="objAttribute.prop2=9181"
    ```


### Comparator

The comparator in a filter specifies the type of comparison to be made. The following comparators are supported:

| Comparator | Description                  |
|------------|------------------------------|
| =          | Equals to                    |
| !=         | Not equal to                 |
| >          | Greater than                 |
| >=         | Greater than or equal to     |
| <          | Less than                    |
| <=         | Less than or equal to        |
| begin      | Begins with                  |


### Handling Special Characters

When using quotes in filter values, you must escape them using their character codes:

- Single quotes ('): `\u0027`
- Double quotes ("): `\u0022`

#### Example

To filter by last name "O'Reilly":

- Using the params property:

    ```
    GET /rest/Person?$filter="lastName=:1"&$params='["O\u0027Reilly"]'
    ```

- Directly in the filter expression:

    ```
    GET /rest/Person?$filter="lastName=O'Reilly"
    ```


## Use Cases


### Using a Simple Filter

A simple filter consists of an attribute, a comparator, and a value.

#### Syntax

```
{attribute} {comparator} {value}
```

#### Example

To filter employees with the first name "John":

```
GET /rest/Employee?$filter="firstName=john"
```


### Using a Complex Filter

A complex filter joins two or more conditions using logical operators (AND, OR, EXCEPT).

#### Syntax

```
{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}
```

#### Example

To filter employees named John with a salary greater than 20,000:

```
GET /rest/Employee?$filter="firstName=john AND salary>20000"
```


### Using the Params Property

You can use placeholders in your filter expressions and provide their values using the `$params` property. This method is useful for dynamic queries where values are provided at runtime.

#### Syntax

```
{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params='["{value1}","{value2}"]'
```

#### Example

To filter employees named John with a salary greater than 20,000 using placeholders:

```
GET /rest/Employee?$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'
```




## Best Practices

- **Combine Filters:** Use logical operators to combine multiple conditions and refine your queries.

- **Use Placeholders:** Utilize the `$params` property for dynamic queries to improve readability and maintainability.

- **Escape Special Characters:** Ensure proper escaping of quotes in filter values to avoid syntax errors.

- **Specify Relation Paths:** When querying related dataclass attributes, always include the correct relation path.

