---
id: httpHandlers
title: HTTP Handlers
---

import Column from '@site/src/components/Column'

## Overview

HTTP Request Handlers let you define how your application responds to HTTP requests by:

- Listening for specific URL patterns (e.g., /api/users).

- Handling different HTTP methods (e.g., GET, POST, PUT).

- Linking these requests to specific logic in your application.


## Why Use HTTP Request Handlers?

HTTP Request Handlers are ideal when:

- **Server-Side Logic is Required**: Use HTTP Request Handlers to process server-side operations, such as interacting with databases, performing complex calculations, or handling business rules.

    :::info Example
        Processing user authentication or generating reports dynamically.
    :::

- **API-Like Behavior is Needed**: HTTP Request Handlers allow you to create RESTful endpoints that external systems or frontend applications can call.

    :::info Example
        A mobile app might send a POST request to /api/login to authenticate a user.
    :::

- **Scalable Interactions Across Multiple Clients**: Unlike UI events (which are specific to the client session), HTTP Request Handlers work server-side and can handle multiple client requests simultaneously.

    :::info Example
        Processing orders submitted from multiple web users simultaneously.
    :::

- **Custom URL Patterns and Verbs**: Handlers let you define flexible URL patterns and handle different HTTP methods like GET or POST for the same URL.

    :::info Example
        Using GET /products for listing products and POST /products for adding a new product.
    :::


:::tip When NOT to use HTTP Request Handlers:

- **For purely UI-based interactions**, such as button clicks or navigating between pages in your app. These should be handled by front-end navigation events or on-click handlers.

- **For real-time interactions**, like live updates to a page. Consider using WebSockets or a similar real-time communication mechanism instead.
:::


## Setting Up HTTP Request Handlers

1. **Open HTTP Handlers**: In Qodly Studio, locate the HTTP Handlers menu item in the Explorer.

    - If the menu item is greyed out <img src={require('./img/HTTPHandlersGreyed.png').default} style={{borderRadius: '6px', width:'15%'}} />, click it to create the HTTPHandlers.json file.

    - Once created, the file will open for editing <img src={require('./img/HTTPHandlersCreated.png').default} style={{borderRadius: '6px', width:'15%'}} />.

2. **Define Your Handlers**: Each handler in the `HTTP Handlers` file must include:

    - Class: The class containing the business logic.

    - Method: The specific method that processes the request.

    - Pattern: A URL prefix to listen for.

    - RegexPattern (optional): A regular expression for more precise URL matching.

    - Verbs: HTTP methods that trigger the handler (e.g., GET, POST). If omitted, the handler listens for all methods.


:::tip Example Configuration

```json
[
    {
        "class": "CustomerHandler",
        "method": "getCustomer",
        "pattern": "customers",
        "verbs": "GET"
    },
    {
        "class": "CustomerHandler",
        "method": "updateCustomer",
        "pattern": "customers/update",
        "verbs": "POST"
    },
    {
        "class": "AuthHandler",
        "method": "login",
        "regexPattern": "/auth/login",
        "verbs": "POST"
    }
]
```

:::


## Matching Rules 

Handlers can define URL patterns in two ways:

- **Prefix (pattern)**: Matches any URL that starts with the specified prefix.

    :::info Example
        A handler with "pattern": "products" matches /products, /products/list, and /products/123.
    :::

- **Regular Expression (regexPattern)**: Matches URLs that satisfy the specified regular expression.

    :::info Example
        A handler with "regexPattern": "/products/[0-9]+" matches /products/123 and /products/456, but not /products/list.
    :::


:::tip Matching Scenarios

Given the following configuration:

```json
[
    {
        "class": "OrderHandler",
        "method": "getOrder",
        "regexPattern": "/orders/[0-9]+",
        "verbs": "GET"
    },
    {
        "class": "OrderHandler",
        "method": "listOrders",
        "pattern": "orders",
        "verbs": "GET"
    }
]
```

- `GET /orders/123`: Matches the first handler (getOrder) because `/orders/123` satisfies the regular expression `/orders/[0-9]+`.

- `GET /orders`: Matches the second handler (listOrders) because `/orders` is a prefix of the URL.

- `POST /orders/123`: Does not match any handler because neither handler supports the POST method.

:::



## Execution Flow

When an HTTP request is received, the system evaluates each handler in the order they appear in the HTTPHandlers.json file. The execution flow follows these steps:

- The URL of the request is matched against the pattern or regexPattern of each handler.

- The HTTP method (verb) of the request is checked against the verbs property of the handler.

- Only the first matching handler is executed, even if subsequent handlers also match the request.

:::tip Example of First Match Execution

Given the following configuration:

```json
[
    {
        "class": "ProductHandler",
        "method": "getProductDetails",
        "regexPattern": "/products/[0-9]+",
        "verbs": "GET"
    },
    {
        "class": "ProductHandler",
        "method": "listProducts",
        "pattern": "products",
        "verbs": "GET"
    }
]
```

A request to GET `/products/123` will match both handlers:

- The first handler matches because the URL `/products/123` satisfies the regular expression `/products/[0-9]+`.

- The second handler matches because `/products` is a prefix of the URL.


However, only the first handler (getProductDetails) is executed, as it appears first in the configuration.

:::


## HTTP Methods (Verbs)

Handlers can limit the HTTP methods they respond to using the verbs property. Supported methods include GET, POST, PUT, DELETE, and others. Specifying verbs ensures that only requests with matching methods trigger the handler.

:::info Default Behavior
If the verbs property is omitted, the handler applies to all HTTP methods.

```json
{
    "class": "GeneralHandler",
    "method": "catchAll",
    "pattern": "*"
}
```

This handler matches all methods (GET, POST, PUT, etc.) for any URL.
:::


## Handling Errors

If no handler matches a request, the system automatically returns a 404 error. This behavior ensures that unexpected or unsupported requests do not disrupt the application.

To handle unmatched requests explicitly, you can define a fallback handler. Fallback handlers can be used to return custom error messages, redirect requests, or log unexpected behavior.

```json
{
    "class": "ErrorHandler",
    "method": "handleNotFound",
    "regexPattern": "/.+",
    "verbs": "*"
}
```

This handler catches all requests that are not matched by earlier handlers. It can be used to:

- Return a custom 404 page.

- Log details about unmatched requests.

- Redirect users to a default page.