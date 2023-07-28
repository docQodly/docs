---
id: orda
title: ORDA
---

## ORDA Concept

ORDA stands for **Object Relational Data Access**. It is an enhanced technology allowing to access both the model and the data of a database through objects.

Relations are transparently included in the concept, in combination with [lazy loading](glossary.md#lazy-loading), to remove all the typical hassles of data selection or transfer from the developer.

With ORDA, data is accessed through an abstraction layer, the [datastore](data-model.md#datastore). A datastore is an object that provides an interface to the database model and data through objects and classes. For example, a table is mapped to a [dataclass](data-model.md#dataclass) object, a field is an [attribute](data-model.md##attribute) of a dataclass, and records are accessed through [entities](data-model.md#entity) and [entity selections](data-model.md#entity-selection). 


### Why use ORDA?  

Instead of representing information as tables, records, and fields, ORDA uses an alternate approach that more accurately maps data to real-world concepts.

Imagine the ability to denormalize a relational structure, yet not affect efficiency. Imagine describing everything about the business objects in your application in such a way that using the data becomes simple and straightforward and removes the need for a complete understanding of the relational structure.

In the ORDA data model, a single dataclass can incorporate all of the elements that make up a traditional relational database table, but can also include values from related parent entities, and direct references to related entities and entity selections.

A query returns a list of entities called an entity selection, which fulfills the role of a SQL query’s row set. The difference is that each entity "knows" where it belongs in the data model and "understands" its relationship to all other entities. This means that a developer does not need to explain in a query how to relate the various pieces of information, nor in an update how to write modified values back to the relational structure.


### How to use ORDA?  

Basically, ORDA handles objects. In ORDA, all main concepts, including the datastore itself, are available through objects. The datastore is automatically mapped upon the underlying database structure. 

ORDA objects can be handled like standard objects, but they automatically benefit from specific properties and methods.

ORDA objects are created and instanciated when necessary (you do not need to create them). However, ORDA data model objects are associated with [classes](orda-classes.md) where you can add custom functions and define [computed attributes](orda-classes.md#computed-attributes).


## Data Model Objects
---

The ORDA technology is based upon an automatic mapping of an underlying relational database structure to a data model (this concept can be viewed as an included and enhanced [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)), along with powerful features such as computed attributes or dataclass functions. It also provides [access to data](../studio/data.md) through entity and entity selection objects. 

As a result, ORDA exposes the whole database as a set of data model objects. 
 
![schema](img/orda-schema.png)


### Datastore

The datastore is the interface object to a database. It builds a representation of the whole database as object. A datastore is made of a **model** and **data**:

- The model contains and describes all the dataclasses that make up the datastore. It is independant from the underlying database itself.
- Data refers to the information that is going to be used and stored in this model. For example, names, addresses, and birthdates of employees are pieces of data that you can work with in a datastore.

When handled through the code, the datastore is an object, returned by the [`ds`](../../language/DataStoreClass.md#ds) command, whose properties are all of the [dataclasses](#dataclass) which have been specifically **exposed**. 

The datastore object itself cannot be copied as an object:

```qs 
mydatastore=objectCopy(ds) //returns null
```


The datastore properties are however enumerable:


```qs 
 var names : collection
 names=objectKeys(ds)
  //names contains the names of all the dataclasses
```



### Dataclass

A dataclass is the equivalent of a database table. It is used as an object model and references all fields as attributes, including relational attributes (attributes built upon relations between dataclasses) as well as computed and alias attributes. Relational, computed and alias attributes can be used in queries like any other attribute.

All dataclasses in a Qodly project are available as a property of the `ds` datastore. The **Expose as REST resource** option must be selected at the model level for each dataclass that you want to be called from the Web. 

For example, consider the following database table:

![](img/structure.png)

The `Company` [dataclass](#dataclass) is available in the `ds` datastore. You can write:

```qs 
var compClass : cs.Company //declares a compClass object variable of the Company class
compClass=ds.Company //assigns the Company dataclass reference to compClass
```

The dataclass offers an abstraction of the physical database and allows handling a conceptual data model with specific features such as computed attributes or alias attributes. 

A dataclass object can contain:

*	storage attributes
*	relation attributes
*	computed attributes
*	alias attributes
*	functions


The dataclass is the only means to query the datastore. A query is done from a single dataclass. Queries are built around attributes and relation attribute names of the dataclasses. So the relation attributes are the means to involve several linked dataclasses in a query.

The dataclass object itself cannot be copied as an object:

```qs 
mydataclass=objectCopy(ds.Employee) //returns null
```

The dataclass properties are however enumerable:

```qs
 var names : collection
 names=objectKeys(ds.Employee)
//names contains the names of all the dataclass attributes
```


### Attribute

Basically, dataclass properties are attribute objects describing the underlying fields or relations. For example:

```qs 
 var nameAttribute, revenuesAttribute : object
 nameAttribute=ds.Company.name //reference to class attribute
 revenuesAttribute=ds.Company["revenues"] //alternate way to reference
```

This code assigns to `nameAttribute` and `revenuesAttribute` references to the `name` and `revenues` attributes of the `Company` dataclass. This syntax does NOT return values held inside of the attribute, but instead returns objects describing the attributes themselves, that you can handle by calling the [dataclass *attribute name*](../../language/DataClassClass.md#attributename). To handle values, you need to go through [Entities](#entity).

The **Expose as REST resource** option must be selected at the model level for each attribute that you want to be called from the Web (by default this option is inherited from the dataclass level). 

Dataclass attributes come in several kinds: storage, relatedEntity, relatedEntities, computed (*aka* calculated), or alias. Attributes that are scalar (*i.e.*, provide only a single value) support all the standard data types (integer, text, object, etc.).

#### Storage and Relation attributes  

*	A **storage attribute** is equivalent to a field in a database and can be indexed. Values assigned to a storage attribute are stored as part of the entity when it is saved. When a storage attribute is accessed, its value comes directly from the datastore. Storage attributes are the most basic building block of an entity and are defined by name and data type.
*	A **relation attribute** provides access to other entities. Relation attributes can result in either a single entity (or no entity) or an entity selection (0 to N entities). Relation attributes are built upon "classic" relations in the relational structure to provide direct access to related entity or related entities. Relation attributes are directy available in ORDA using their names.

For example, consider the following partial model and the relation properties:

![](img/structure2.png)

All storage attributes will be automatically available:

*	in the Project dataclass: "ID", "name", and "companyID"
*	in the Company dataclass: "ID", "name", and "discount"


In addition, the following relation attributes will also be automatically available:

*	in the Project dataclass: **theClient** attribute, of the "relatedEntity" kind; there is at most one Company for each Project (the client)
*	in the Company dataclass: **companyProjects** attribute, of the "relatedEntities" kind; for each Company there is any number of related Projects.

All dataclass attributes are exposed as properties of the dataclass:

```qs  
	// Company available attributes
ds.Company.companyProjects  //relatedEntities
ds.Company.discount  
ds.Company.ID
ds.Company.name
	  
	//Project available attributes
ds.Project.companyID  
ds.Project.ID  
ds.Project.name
ds.Project.theClient //relatedEntity

```

Keep in mind that these objects describe attributes, but do not give access to data. Reading or writing data is done through [entity objects](#entity).

#### Computed attributes

[Computed attributes](orda-classes.md#computed-attributes) are declared using a `get <attributeName>` function in the [Entity class definition](orda-classes.md#entity-class). Their value is not stored but evaluated each time they are accessed. They do not belong to the underlying database structure, but are usually built upon it and can be used as any attribute of the data model. 

#### Alias attributes

An [alias attribute](orda-classes.md#alias-attributes) is built above another attribute of the data model, named target attribute. The target attribute can belong to a related dataclass (available through any number of relation levels) or to the same dataclass. An alias attribute stores no data, but the path to its target attribute. You can define as many alias attributes as you want in a dataclass.


### Entity

An entity is the equivalent of a record. It is actually an object that references a record in the database. It can be seen as an instance of a [dataclass](#dataclass), like a record of the table matching the dataclass. 

However, an entity also contains data correlated to the datastore. The purpose of the entity is to manage data (create, read, update, delete). When an entity reference is obtained by means of an entity selection, it also retains information about the entity selection which allows iteration through the selection.

For example, to create an entity:

```qs
 var status : object
 var employee : cs.EmployeeEntity //declares a variable of the EmployeeEntity class type

 employee=ds.Employee.new()
 employee.firstName="Mary"
 employee.lastName="Smith"
 status=employee.save()
```

The entity object itself cannot be copied as an object:

```qs
 myentity=objectCopy(ds.Employee.get(1)) //returns null
```

The entity properties are however enumerable:

```qs
 var names : collection
 names=objectKeys(ds.Employee.get(1))
  //names contains the names of all the entity attributes
```


### Entity selection

An entity selection is an object containing one or more reference(s) to entities belonging to the same dataclass. It is usually created as a result of a query or returned from a relation attribute. An entity selection can contain 0, 1 or X entities from the dataclass -- where X can represent the total number of entities contained in the dataclass.

Example:

```qs
var e : cs.EmployeeSelection //declares a e object variable of the EmployeeSelection class type
e=ds.Employee.all() //assigns the resulting entity selection reference to the e variable
``` 

The entity selection object itself cannot be copied as an object:

```qs
 myentitysel=objectCopy(ds.Employee.all()) //returns null
``` 
 
The entity selection properties are however enumerable:

```qs
 var names : collection
 names=objectKeys(ds.Employee.all())
  //names contains the names of the entity selection properties
  //("length", "00", "01"...)
```


#### Ordered or unordered entity selection

For optimization reasons, by default ORDA usually creates unordered entity selections, except when you call the `orderBy()` function or use specific options. In this documentation, unless specified, "entity selection" usually refers to an "unordered entity selection".

Ordered entity selections are created only when necessary or when specifically requested using options, i.e. in the following cases:

*	result of an `orderBy()` on a selection (of any type)
*	result of an `orderByFormula()` on a selection (of any type)
*	result of the `newSelection()` function with the `dk keep ordered` option

:::note

Ordered entity selections support duplicated entity references. On the other hand, when an ordered entity selection becomes an unordered entity selection, any repeated entity references are removed.

:::


Unordered entity selections are created in all other cases, including:

*	result of a `query()` on a selection (of any type) or a `query()` on a dataclass,
*	result of a `all()`, `fromCollection()`, or `newSelection()` (without option) function on a dataclass,
*	result of various functions from the entity selection class, whatever the input selection types: `or()`, `and()`, `add()`, `copy()`, `extract()`, `slice()`, `drop()`...
*	result of a relation such as `empSel=company.employees`, or a projection such as `empSel.name`,
*	result of an `entity.getSelection()` function.


## Glossary



### *any* data type  

In this documentation, "any" data type is used to designate the various type of values that can be stored within dataclass attributes. It includes:

*	number
*	text
*	null
*	boolean
*	date
*	object
*	collection
*	picture(\*)

*(\*) picture type is not supported by statistical methods such as* `entitySelection.max( )`.


### Attribute 
 
An attribute is the smallest storage cell in a relational database (see also [Relation attribute](#relation-attribute)). Do not confuse dataclass attributes and entity attributes:

*	In a dataclass object, each property is a dataclass attribute that maps to a corresponding field in the corresponding table (same name and type).
*	In an entity object, entity attributes are properties that contain values for the corresponding datastore attributes.

*Attributes* and *properties* are similar concepts. "Attribute" is used to designate dataclass properties that store data, while "property" is more generic and defines a piece of data stored within an object. 

### AttributePath  

An attributePath is the path of an attribute inside a given dataclass or entity. See also [PropertyPath](#propertyPath).

### Calculated attribute

See [Computed attribute](#computed-attribute).

### Class code

Code for the user class function(s). 

### Class function

ORDA objects such as datastores, dataclasses, entity selections, and entities, define classes of objects. They provide specific functions to directly interact with them. These functions are called class functions. Such functions are used by calling them on an instance of the object.

For example, the `query()` function is a dataclass class function. If you have stored a dataclass object in the `$myClass` variable, you can write:

```code4d
$myClass.query("name = smith")
```



### Computed attribute

A computed attribute doesn't actually store information. Instead, it determines its value based on other values from the same entity or from other entities, attributes or functions. When a computed attribute is referenced, the underlying "computation" is evaluated to determine the value. Computed attributes may even be assigned values where user-defined code determines what to do during the assignment.

### Data model class

Extended class available for a data model object. 

### Data model object

Database objects available through the ORDA concept, i.e. datastore, dataclasses, entities and entity selections.

### Data model function

Function of an ORDA data model class.

### Dataclass  

A dataclass is an object model that describes the data. Tables in the database provided by the datastore are handled through dataclasses. Each table in the database provided by the datastore has a corresponding dataclass with the same name. Each field of the table is an attribute of the dataclass.

A dataclass is related to a single datastore.


### DataClass class

Class for specific dataclass objects, in which you can add custom functions. 

### Datastore  

A datastore is the interface object provided by ORDA to reference a model and access its data. The model, returned by the `ds` command, is available as a datastore (the main datastore).

A datastore provides:

*	a connection to a database
*	a set of dataclasses to work with the database


### DataStore class

Class for datastore objects, in which you can add custom functions. 


### DataStoreImplementation

Internal name of the generic DataStore class in the `4D` class store.

### Deep copy 
 
A deep copy duplicates an object and all the references it contains. After a deep copy, a copied collection contains duplicated elements and thus, new references, of all of the orginal elements. See also [Shallow copy](#shallow-copy).

### ds  

`ds` is the language command that returns a [datastore](dsMapping.md#datastore) object reference. It matches the datastore available upon the Qodly database.

### Entity  

An entity is an object that corresponds to a dataclass model. An entity contains the same attributes as the dataclass.

An entity can be seen as an instance of the dataclass, like a record of the table matching the dataclass in its associated datastore. However, an entity also contains related data. The purpose of the entity is to manage data (create, update, delete).


### Entity selection  

An entity selection is an object. When querying the datastore, an entity selection is returned. An entity selection is a set of references to entities related to the same dataclass.

An entity selection contains:

*	a set of 0 to X entity references,
*	a length property (always),
*	queryPlan and queryPath properties (if asked while querying).

An entity selection can also be empty.

### Function

See [Class function](#class-function).

### Generic class

Built-in class for ORDA objects such as entities, or dataclasses. Functions and properties of generic classes are automatically available in user extended classes, e.g. `EmployeeEntity`. 


### Lazy loading 
 
Since entities are managed as references, data is loaded only when necessary, i.e. when accessing it in the code or through interface widgets. This optimization principle is called lazy loading.

### Main datastore  

The Datastore object matching the opened Qodly database (standalone or client/server). The main datastore is returned by the `ds` command. 

### Optimistic Lock  

In "optimistic lock" mode, entities are not locked explicitly before updating them. Each entity has an internal stamp that is automatically incremented each time the entity is saved on disk. The entity.save( ) or entity.drop( ) methods will return an error if the stamp of the loaded entity (in memory) and the stamp of the entity on disk do not match, or if the entity has been dropped. Optimistic locking is only available in ORDA implementation. See also "Pessimistic lock".

### ORDA

Object Relational Data Access. See [What is ORDA?](overview)


### Pessimistic Lock  

A "pessimistic lock" means that an entity is locked prior to its being accessed, using the `entity.lock()` function. Other processes can neither update nor drop the entity until it is unlocked. See also [Optimistic lock](#optimistic-lock).

### Property  

See [Attribute](#attribute).

### PropertyPath  

A propertyPath is the path to a property in a given object. If the property is nested in several levels, each level separated is by a dot (".").

### Regular class  

User class not related to an ORDA object.

### Related dataclass  

These are dataclasses linked by relation attributes.

### Relation attribute  

Relation attributes are used to conceptualize relations between dataclasses (many-to-one and one-to-many).

*	Many-to-one relation (dataclassA references an occurrence of dataclassB): a relation attribute is available in dataclassA and references one instance of dataclassB.
*	One-to-many relation (an occurence of dataclassB references several occurrences of dataclassA): a relation attribute is available in dataclassB and references several instances of dataclassA.

A dataclass can have recursive relation attributes.

In an entity, the value of a relation attribute can be an entity or an entity selection.

### Related entities  

A related entity can be seen as the instance of a relation attribute in a dataclass.

Entity selections may refer to related entities according to the relation attributes defined in the corresponding dataclasses.


### Session  

When a user connects to a Qodly application, a Session object is created on the Server (HTTP). A session cookie is generated. 

Each Session object provides a `.storage` property which is a shared object. Privileges are associated to user sessions. 


### Shallow copy 
 
A shallow copy only duplicates the structure of elements, and keeps the same internal references. After a shallow copy, two collections will both share the individual elements. See also [Deep copy](#deep-copy).

### Stamp 
 
Used in "optimistic" locking technology. All entities have an internal counter, the stamp, which is incremented each time the entity is saved. By automatically comparing stamps between an entity being saved and its version stored on disk, ORDA can prevent concurrent modifications on the same entities.

### Storage attribute

A storage attribute (sometimes referred to as a scalar attribute) is the most basic type of attribute in a datastore class and most directly corresponds to a field in a relational database. A storage attribute holds a single value for each entity in the class.

