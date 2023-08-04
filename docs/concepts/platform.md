---
id: platform
title: Qodly Platform Overview
---

The Qodly platform is a fully integrated environment where you can develop, test, deploy, and monitor any web application.

Qodly is a hybrid low-code web application development platform. It means that, to develop a web application with Qodly, you will need a very small amount of code. In fact, you might sometimes need no piece of code, you just design the application and Qodly Studio creates all necessary code for you.

The Qodly plaform is made of a **Studio**, a **Server**, and a **Dashboard**, all working together flawlessly to provide you with an end-to-end software platform that can build web business apps in no time.

In the **development** environment, Qodly Studio connects to Qodly Server and interacts with all the server layers to develop and build the application through dedicated editors (model, web forms, etc.).

In the **staging** and **production** environments, the same Qodly Server is also used to handle and process requests from the browsers. 

![schema-cloud](img/cloud-schema.png)



## Qodly Studio

The Qodly Studio is a new way of building business web applications. Our vision is to provide developers a 100% web-browser-based experience by allowing them to:

* design web forms visually by drag and dropping components on a canvas
* preview pages instantly
* easily map data with ORDA dataclasses
* directly execute QodlyScript code on web events or datasource events
* code & debug in the browser
* and even edit a data model

At the end of the road, developers will be able to build complete web business applications using only a web browser and very few lines of QodlyScript code. There is no JavaScript involved.


## Qodly Server

The Qodly platform backend relies on **Qodly Server**. Qodly Server is actually a full stack of integrated servers and development layers and supports all necessary requirements to develop, test, and deploy business web applications. 

Qodly Server includes:

- an **HTTP server**, handling all incoming requests. It provides a high level of security by supporting user sessions and their associated roles, connected to your own user directory in the cloud through **Amazon Cognito**. 
- a **REST server** with a comprehensive API. The REST server handles requests that access the resources of the Qodly application, for example to get data from the datastore or to execute functions. The REST server exposes an automatically generated REST API to access and manipulate data. For example, if you have an exposed dataclass named "Product", it can automatically return its entities using the `/Product` request. The REST server also has a memory link between the web and the datastore layer to achieve very short processing times.
- a **Web application server**, handling your application webforms and features.
- **Qodly Database**, a built-in relational database. The Qodly Database has extended capabilities to store and process data. Model and data access is done through **ORDA** (*Object Relational Data Access*), an enhanced technology allowing to handle both the model and the data of a database as **objects**. With ORDA, the database is accessed through an abstraction layer, the **datastore** (which is an object itself). The ORM is natively included in the ORDA concept. 
- the **QodlyScript** language, that can be used in all layers of the project: to configure the model, the application layer, the datasources, the web forms, the events. No other language is required to develop a Qodly application. QodlyScript is an object-oriented language containing built-in classes that you can extend, and also user classes. ORDA provides data model classes that are very efficient to handle data.  

All these elements are included in one single executable running under Linux OS, providing the best performances by eliminating unnecessary intermediary connectors.




## Qodly Dashboard 

### Cloud Architecture


//



### Security and User management

Security encompasses more than risk elimination and blocking unauthorized access or unlawful disclosure of information, it covers data loss prevention and protection against destruction.

Qodly's key features to protect your data from breaches, loss and failure events include:
- **Authentication**: Qodly supports built-in and customized authentication, as well as authentication via Active Directory and LDAP.
- **Access control with a low level authorization system**: a per session, built-in user authorization system is included in Qodly, allowing you to assign different permissions and roles to users connecting to the database.
- **Data Encryption**: ensures the confidentiality of your data by encrypting tables that contain sensitive information.
- **Backup and logs**: the Qodly platform includes administration tools that verify, maintain, and backup your data and model, ensuring data integrity in case of failure, data corruption or accidental deletion.


### Services

//