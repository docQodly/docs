---
id: server-architecture
title: Server Architecture
---

## Overview


The Qodly platform backend relies on **Qodly Server**. Qodly Server is actually a full stack of integrated servers and development layers and supports all necessary requirements to develop, test, and deploy business web applications. 

![full stack of servers](img/full-stack.png)

Qodly Server includes, in particular:

- an HTTP server,
- a REST server with a comprehensive API,
- a Web server,
- the Datasource manager,
- DB4D, a built-in relational database, directly available through the ORDA (Object Relational Data Access) technology. 
- the **Qodly language**, that can be used in all layers of the application. 

All these elements are included in one single executable, providing the best performances by elimnating any unnecessary intermediary connector.

In the development environment, Qodly Studio connects to Qodly Server and interacts with all the server layers to develop and build the application through dedicated editors (model, web forms, etc.).

In the test and deployment environment, the same Qodly Server is also used to handle and process requests from the browsers. 

## HTTP Server

The HTTP server provides a high level of security by managing user sessions and their associated roles. 

## REST Server

The Qodly REST server handles the requests sent from the web application, for example to get data from the datastore or to execute functions.

The REST server exposes an automatically generated REST API to access and manipulate data. For example, if you have an exposed dataclass named "Product", it can automatically return its entities using the `/Product` request. 

The REST server also includes a memory binding between web and datastore layer.


## Datasource manager

Qodly Server includes a datasource manager that automatically handles interactions between web forms and the datastore so that the most accurate information is always available to the users with a minimum of code. 

Datasources are a central concept to Qodly's architecture and are intended to make developping Web applications as simple as possible. **A datasource contains data and automatically generates events when this data is changed**. Your components and code can subscribe to these events and take appropriate actions. Different kind of events can be subscribed to separately.


## DB4D and ORDA


## Qodly language

The Qodly language is an object-oriented language 



## Qodly Studio

