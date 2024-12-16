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


