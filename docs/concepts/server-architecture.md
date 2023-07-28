---
id: server-architecture
title: Qodly Server
---

## Overview


The Qodly platform backend relies on **Qodly Server**. Qodly Server is actually a full stack of integrated servers and development layers and supports all necessary requirements to develop, test, and deploy business web applications. 

Qodly Server includes:

- an HTTP server,
- a REST server with a comprehensive API,
- a Web application server,
- the Datasource manager,
- Qodly Database, a built-in relational database, directly available through the ORDA (Object Relational Data Access) technology. 
- the **QodlyScript language**, that can be used in all layers of the project. 


![full stack of servers](img/full-stack.png)



All these elements are included in one single executable running under Linux OS, providing the best performances by eliminating unnecessary intermediary connectors.

In the development environment, Qodly Studio connects to Qodly Server and interacts with all the server layers to develop and build the application through dedicated editors (model, web forms, etc.).

In the staging and production environments, the same Qodly Server is also used to handle and process requests from the browsers. 

## HTTP Server

The HTTP server handles all incoming requests. It provides a high level of security by supporting user sessions and their associated roles, connected to your own user directory in the cloud through **Amazon Cognito**. 

## REST Server

The REST server handles requests that access the resources of the Qodly application, for example to get data from the datastore or to execute functions.

The REST server exposes an automatically generated REST API to access and manipulate data. For example, if you have an exposed dataclass named "Product", it can automatically return its entities using the `/Product` request. 

The REST server also has a memory link between the web and the datastore layer to achieve very short processing times.

## Datasource manager

Qodly Server includes a datasource manager that automatically handles interactions between web forms and the datastore so that the most accurate information is always available to the users with a minimum of code. 

Datasources are a central concept to Qodly's architecture and are intended to make developping Web applications as simple as possible. **A datasource references data and automatically generates events when this data is changed**. Your components and code can subscribe to these events and take appropriate actions. Different kind of events can be subscribed to separately.


## Qodly Database and ORDA

The Qodly Database has extended capabilities to store and process data. 

Data access is done through ORDA (*Object Relational Data Access*), an enhanced technology allowing to handle both the model and the data of a database as **objects**. With ORDA, the database is accessed through an abstraction layer, the **datastore** (which is an object itself). The ORM is natively included in the ORDA concept. 


## QodlyScript language

The QodlyScript language can be used at all levels of the application development on the server: to configure the model, the application layer, the datasources, the web forms, the events. No other language is required to develop a Qodly application. 

QodlyScript is an object-oriented language containing built-in classes that you can extend, and also user classes. ORDA provides data model classes that are very efficient to handle data.  


