---
id: platform
title: Qodly Platform Overview
---

The Qodly platform is a fully integrated environment where you can develop, test, deploy, and monitor any web application.

Qodly is a hybrid **low-code** web application development platform. It means that, to develop a web application with Qodly, you will need a very small amount of code. In fact, you might sometimes need no piece of code, you just design the application and Qodly Studio creates all necessary code for you.

The Qodly plaform is made of a **Studio**, a **Server**, and a **Cloud Management Console**, all working together flawlessly to provide you with an end-to-end software platform that can build web business apps in no time.

In the **development** environment, Qodly Studio connects to Qodly Server and interacts with all the server layers to develop and build the application through dedicated editors (model, web forms, etc.).

In the **staging** and **production** environments, the same Qodly Server is also used to handle and process requests from the browsers. 

![schema-cloud](img/cloud-schema.png)


## Qodly Cloud Management Console 

### Cloud Architecture


//



### Security and User management

Security encompasses more than risk elimination and blocking unauthorized access or unlawful disclosure of information, it covers data loss prevention and protection against destruction.

Qodly's key features to protect your data from breaches, loss and failure events include:

- **Authentication**: Qodly supports user authentication and identification through *Cognito*, the AWS Customer identity and access management (CIAM). 
- **Access control with a low level authorization system**: a per session, built-in user [authorization system](../studio/roles/dataAccessRestrictions.md) is included in Qodly, allowing you to assign different permissions and roles to users connecting to the database.
- **Data Encryption**: ensures the confidentiality of your data by encrypting dataclasses that contain sensitive information.
- **Backup and logs**: the Qodly platform includes administration tools that verify, maintain, and backup your data and model, ensuring data integrity in case of failure, data corruption or accidental deletion.


### Services

//


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


## Qodly Database

At the heart of the Qodly platform is the **Qodly Database**. Qodly Database is a powerful **relational database** (RDBMS) fully integrated to the ORDA technology. Qodly Database is an evolution of the 4D Database which has proven itself in terms of reliability and robustness for over 30 years. 

Qodly Database is a **nosql** database. Queries are expressed using a natural syntax and automatically optimized. 

Unlike other databases that require the addition and configuration of an external ORM (Object Relational Mapping) component, the Qodly Database is automatically available as an object thanks to the dynamic ORM layer implemented by the [ORDA technology](#the-orda-concept). In addition to performance, this architecture allows direct access to the datastore and the application API. Any change in the underlying model is automatically available in the API.

### Data types

The following table lists all available Qodly Database scalar data types and how they are handled in the QodlyScript language:

|Data Types	|Language support|Description|
|---|----|---|
|[Text]|`var string`	|A sequence of characters up to 2 GB|
|[String]	|`var string`	|A sequence of characters with properties|
|[UUID]|-|Universally Unique Identifier: a 16-bytes (128 bits) number containing 32 hexadecimal characters|
|[Date]|`var date`	|If the **Date only** property is selected for this attribute type, the date value will include only the "MM/DD/YYYY" format (e.g., "10/05/2023"). Otherwise, the date value including the time, stored in UTC. The date is expressed in the following format: YYYY-MM-DDTHH:MM:ss.SSSZ (e.g., "2023-10-05T23:00:00.000Z" for October 5, 2023 in the Central European Timezone). SSS represents the milliseconds, which can be between 0 to 999.	|
|[Duration]|`var long`	|A duration between two dates	|
|[Bool]|`var boolean`|A Boolean value: either true or false.|
|[Byte]	|-|A sequence of 8 bits.|
|[Word]|-|A 16-bit signed integer. Range: -32,767 to 32,768|
|[Number]|`var number`|A numeric value, can be a Real or a Long. Range: ±1.7e±308 (real), -2^31 to (2^31)-1 (long)|
|[Long]|`var nimber`	|A whole number, greater than or equal to a standard number. Range: -2,147,483,648 to 2,147,483,647 |
|[Object]|`var object`|Object containing any kind of property/value pairs, including collections. This data type can be indexed. Functions and recursive references are not supported|
|[Image]|`var picture`	|A path to an image file or an actual image.	|



### Capabilities

The following table lists the maximum capabilities of the Qodly Database per application:

|Capabilities|Maximum|
|---|---|
|Number of dataclasses|32,767|
|Number of attributes per dataclass|32,767|
|Number of entities per dataclass|1 billion|
|Number of index keys per dataclass|128 billion|
|Size of text attributes|2 GB|
|*Size BLOB fields*|2 GB|
|Size of object attributes|2 GB|
|Number of properties per object attribute|up to 128 billion*|
|Number of transaction levels|Unlimited|

* depending on the number of index keys


### Transactions

The Qodly Database supports **transactions**. A transaction represents a series of changes made within a context on interconnected data. A transaction is only permanently saved in the datastore when the transaction is validated as a whole by calling `ds.validateTransaction()`. If a transaction has not been validated, whether it was cancelled or because of some external event, the changes are not saved.





## The ORDA Concept


ORDA stands for **Object Relational Data Access**. It is an enhanced technology allowing to access both the model and the data of a database through objects.

Relations are transparently included in the concept, in combination with [lazy loading](#lazy-loading), to remove all the typical hassles of data selection or transfer from the developer.

With ORDA, data is accessed through an abstraction layer, the [datastore](../orda/data-model.md#datastore). A datastore is an object that provides an interface to the database model and data through objects and classes. For example, a table is mapped to a [dataclass](../orda/data-model.md#dataclass) object, a field is an [attribute](../orda/data-model.md##attribute) of a dataclass, and records are accessed through [entities](../orda/data-model.md#entity) and [entity selections](../orda/data-model.md#entity-selection). 


### Why use ORDA?  

Instead of representing information as tables, records, and fields, ORDA uses an alternate approach that more accurately maps data to real-world concepts.

Imagine the ability to denormalize a relational structure, yet not affect efficiency. Imagine describing everything about the business objects in your application in such a way that using the data becomes simple and straightforward and removes the need for a complete understanding of the relational structure.

In the ORDA data model, a single dataclass can incorporate all of the elements that make up a traditional relational database table, but can also include values from related parent entities, and direct references to related entities and entity selections.

A query returns a list of entities called an entity selection, which fulfills the role of a SQL query’s row set. The difference is that each entity "knows" where it belongs in the data model and "understands" its relationship to all other entities. This means that a developer does not need to explain in a query how to relate the various pieces of information, nor in an update how to write modified values back to the relational structure.


### How to use ORDA?  

Basically, ORDA handles objects. In ORDA, all main concepts, including the datastore itself, are available through objects. The datastore is automatically mapped upon the underlying database structure. 

ORDA objects can be handled like standard objects, but they automatically benefit from specific properties and methods.

ORDA objects are created and instanciated when necessary (you do not need to create them). However, ORDA data model objects are associated with [classes](../orda/orda-classes.md) where you can add custom functions and define [computed attributes](../orda/orda-classes.md#computed-attributes).



## Glossary

Here is an reminder for the main concepts handled by Qodly.

#### *any* data type  

In this documentation, "any" data type is used to designate the various type of values that can be stored within dataclass attributes. It includes:

*	number
*	string
*	null
*	boolean
*	date
*	object
*	collection
*	picture(\*)

*(\*) picture type is not supported by statistical methods such as* `entitySelection.max( )`.


#### Attribute 
 
An attribute is the smallest storage cell in a relational database (see also [Relation attribute](#relation-attribute)). Do not confuse dataclass attributes and entity attributes:

*	In a dataclass object, each property is a dataclass attribute that maps to a corresponding field in the corresponding table (same name and type).
*	In an entity object, entity attributes are properties that contain values for the corresponding datastore attributes.

*Attributes* and *properties* are similar concepts. "Attribute" is used to designate dataclass properties that store data, while "property" is more generic and defines a piece of data stored within an object. 

#### AttributePath  

An attributePath is the path of an attribute inside a given dataclass or entity. See also [PropertyPath](#propertyPath).

#### Calculated attribute

A calculated attribute doesn't actually store information. Instead, it determines its value based on other values from the same entity or from other entities, attributes or functions. When a calculated attribute is referenced, the underlying "calculation" is evaluated to determine the value. Calculated attributes may even be assigned values where user-defined code determines what to do during the assignment.

#### Class code

Code for the user class function(s). 

#### Class function

ORDA objects such as datastores, dataclasses, entity selections, and entities, define classes of objects. They provide specific functions to directly interact with them. These functions are called class functions. Such functions are used by calling them on an instance of the object.

For example, the `query()` function is a dataclass class function. If you have stored a dataclass object in the `$myClass` variable, you can write:

```code4d
$myClass.query("name = smith")
```

#### Data model class

Extended class available for a data model object. 

#### Data model object

Database objects available through the ORDA concept, i.e. datastore, dataclasses, entities and entity selections.

#### Data model function

Function of an ORDA data model class.

#### Dataclass  

A dataclass is an object model that describes the data. Tables in the database provided by the datastore are handled through dataclasses. Each table in the database provided by the datastore has a corresponding dataclass with the same name. Each field of the table is an attribute of the dataclass.

A dataclass is related to a single datastore.


#### DataClass class

Class for specific dataclass objects, in which you can add custom functions. 

#### Datastore  

A datastore is the interface object provided by ORDA to reference a model and access its data. The model, returned by the `ds` command, is available as a datastore (the main datastore).

A datastore provides:

*	a connection to a database
*	a set of dataclasses to work with the database


#### DataStore class

Class for datastore objects, in which you can add custom functions. 


#### DataStoreImplementation

Internal name of the generic DataStore class in the `4D` class store.

#### Deep copy 
 
A deep copy duplicates an object and all the references it contains. After a deep copy, a copied collection contains duplicated elements and thus, new references, of all of the orginal elements. See also [Shallow copy](#shallow-copy).

#### ds  

`ds` is the language command that returns a [datastore](../orda/data-model#datastore) object reference. It matches the datastore available upon the Qodly database.

#### Entity  

An entity is an object that corresponds to a dataclass model. An entity contains the same attributes as the dataclass.

An entity can be seen as an instance of the dataclass, like a record of the table matching the dataclass in its associated datastore. However, an entity also contains related data. The purpose of the entity is to manage data (create, update, delete).


#### Entity selection  

An entity selection is an object. When querying the datastore, an entity selection is returned. An entity selection is a set of references to entities related to the same dataclass.

An entity selection contains:

*	a set of 0 to X entity references,
*	a length property (always),
*	queryPlan and queryPath properties (if asked while querying).

An entity selection can also be empty.

#### Function

See [Class function](#class-function).

#### Generic class

Built-in class for ORDA objects such as entities, or dataclasses. Functions and properties of generic classes are automatically available in user extended classes, e.g. `EmployeeEntity`. 


#### Lazy loading 
 
Since entities are managed as references, data is loaded only when necessary, i.e. when accessing it in the code or through interface widgets. This optimization principle is called lazy loading.

#### Main datastore  

The Datastore object matching the opened Qodly database (standalone or client/server). The main datastore is returned by the `ds` command. 

#### Optimistic Lock  

In "optimistic lock" mode, entities are not locked explicitly before updating them. Each entity has an internal stamp that is automatically incremented each time the entity is saved on disk. The entity.save( ) or entity.drop( ) methods will return an error if the stamp of the loaded entity (in memory) and the stamp of the entity on disk do not match, or if the entity has been dropped. Optimistic locking is only available in ORDA implementation. See also "Pessimistic lock".

#### ORDA

Object Relational Data Access. See [What is ORDA?](overview)


#### Pessimistic Lock  

A "pessimistic lock" means that an entity is locked prior to its being accessed, using the `entity.lock()` function. Other processes can neither update nor drop the entity until it is unlocked. See also [Optimistic lock](#optimistic-lock).

#### Property  

See [Attribute](#attribute).

#### PropertyPath  

A propertyPath is the path to a property in a given object. If the property is nested in several levels, each level separated is by a dot (".").

#### Regular class  

User class not related to an ORDA object.

#### Related dataclass  

These are dataclasses linked by relation attributes.

#### Relation attribute  

Relation attributes are used to conceptualize relations between dataclasses (many-to-one and one-to-many).

*	Many-to-one relation (dataclassA references an occurrence of dataclassB): a relation attribute is available in dataclassA and references one instance of dataclassB.
*	One-to-many relation (an occurence of dataclassB references several occurrences of dataclassA): a relation attribute is available in dataclassB and references several instances of dataclassA.

A dataclass can have recursive relation attributes.

In an entity, the value of a relation attribute can be an entity or an entity selection.

#### Related entities  

A related entity can be seen as the instance of a relation attribute in a dataclass.

Entity selections may refer to related entities according to the relation attributes defined in the corresponding dataclasses.


#### Session  

When a user connects to a Qodly application, a Session object is created on the Server (HTTP). A session cookie is generated. 

Each Session object provides a `.storage` property which is a shared object. Privileges are associated to user sessions. 


#### Shallow copy 
 
A shallow copy only duplicates the structure of elements, and keeps the same internal references. After a shallow copy, two collections will both share the individual elements. See also [Deep copy](#deep-copy).

#### Stamp 
 
Used in "optimistic" locking technology. All entities have an internal counter, the stamp, which is incremented each time the entity is saved. By automatically comparing stamps between an entity being saved and its version stored on disk, ORDA can prevent concurrent modifications on the same entities.

#### Storage attribute

A storage attribute (sometimes referred to as a scalar attribute) is the most basic type of attribute in a datastore class and most directly corresponds to a field in a relational database. A storage attribute holds a single value for each entity in the class.

