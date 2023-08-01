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
 
![schema](img/orda-schema2.png)


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



## Data Model Classes


ORDA allows you to create high-level class functions above the data model. This allows you to write business-oriented code and "publish" it just like an API. Datastore, dataclasses, entity selections, and entities are all available as class objects that can contain functions.

For example, you could create a `getNextWithHigherSalary()` function in the `EmployeeEntity` class to return employees with a salary higher than the selected one. It would be as simple as calling:

```qs
nextHigh=ds.Employee.get(1).getNextWithHigherSalary()
```

Thanks to this feature, the entire business logic of your Qodly application can be stored as a independent layer so that it can be easily maintained and reused with a high level of security:

- You can "hide" the overall complexity of the underlying physical structure and only expose understandable and ready-to-use functions. 
- If the physical structure evolves, you can simply adapt function code and client applications will continue to call them transparently. 
- By default, all of your data model class functions (including [calculated attribute functions](#calculated-attributes)) are **not exposed** to remote calls. You must explicitly declare each public function with the [`exposed`](#exposed-vs-non-exposed-functions) keyword.

![](img/functions-schema.png)


## Architecture

ORDA provides **generic classes** exposed through a **`4D`** class store, as well as specific **user classes** (extending generic classes) exposed in the [**`cs`** class store](lang-classes.md):

![](img/ClassDiagramImage.png)

All ORDA data model classes are exposed as properties of the **`cs`** class store. The following ORDA classes are available:

|Class|Example name|Instantiated by|
|---|---|---|
|cs.DataStore|cs.DataStore|[`ds`](../language/DataStoreClass.md#ds) command|
|cs.*DataClassName*|cs.Employee|[`dataStore.DataClassName`](../language/DataStoreClass.md#dataclassname), `dataStore["DataClassName"]`|
|cs.*DataClassName*Entity|cs.EmployeeEntity|[`dataClass.get()`](../language/DataClassClass.md#get), [`dataClass.new()`](../language/DataClassClass.md#new), [`entitySelection.first()`](../language/EntitySelectionClass.md#first), [`entitySelection.last()`](../language/EntitySelectionClass.md#last), [`entity.previous()`](../language/EntityClass.md#previous), [`entity.next()`](../language/EntityClass.md#next), [`entity.first()`](../language/EntityClass.md#first), [`entity.last()`](../language/EntityClass.md#last), [`entity.clone()`](../language/EntityClass.md#clone)|
|cs.*DataClassName*Selection|cs.EmployeeSelection|[`dataClass.query()`](../language/DataClassClass.md#query), [`entitySelection.query()`](../language/EntitySelectionClass.md#query), [`dataClass.all()`](../language/DataClassClass.md#all), [`dataClass.fromCollection()`](../language/DataClassClass.md#fromcollection), [`dataClass.newSelection()`](../language/DataClassClass.md#newselection), [`entitySelection.drop()`](../language/EntitySelectionClass.md#drop), [`entity.getSelection()`](../language/EntityClass.md#getselection), [`entitySelection.and()`](../language/EntitySelectionClass.md#and), [`entitySelection.minus()`](../language/EntitySelectionClass.md#minus), [`entitySelection.or()`](../language/EntitySelectionClass.md#or), [`entitySelection.orderBy()`](../language/EntitySelectionClass.md#or), [`entitySelection.orderByFormula()`](../language/EntitySelectionClass.md#orderbyformula), [`entitySelection.slice()`](../language/EntitySelectionClass.md#slice)|

Also, object instances from ORDA data model user classes benefit from their parent's properties and functions:

- a Datastore class object can call functions from the [ORDA Datastore generic class](../language/DataStoreClass.md).
- a Dataclass class object can call functions from the [ORDA Dataclass generic class](../language/DataClassClass.md).
- an Entity selection class object can call functions from the [ORDA Entity selection generic class](../language/EntitySelectionClass.md).
- an Entity class object can call functions from the [ORDA Entity generic class](../language/EntityClass.md).



## Class Description

### DataStore Class


A database exposes its own DataStore class in the `cs` class store. 

- **Extends**: 4D.DataStoreImplementation 
- **Class name in *cs* class store**: DataStore

You can create functions in the DataStore class that will be available through the `ds` object. 

#### Example

```qs  
// DataStore class

extends DataStoreImplementation

exposed function getDesc
  return "Database exposing employees and their companies"
```


This function can then be called:

```qs
desc=ds.getDesc() //"Database exposing..."
```



### DataClass Class

Each dataclass offers a DataClass class in the `cs` class store.

- **Extends**: 4D.DataClass 
- **Class name in *cs* class store**: *DataClassName*
- **Example name**: Employee



#### Example 1

```qs
// Company class


extends DataClass

// Returns companies whose revenue is over the average
// Returns an entity selection related to the Company DataClass

function getBestOnes() : cs.CompanySelection 
	sel=this.query("revenues >= :1",this.all().average("revenues"))
	return sel
```

Then you can get an entity selection of the "best" companies by executing: 

```qs
	var best : cs.CompanySelection
	best=ds.Company.getBestOnes()
```

:::note

[Calculated attributes](#calculated-attributes) are defined in the [Entity Class](#entity-class). 

:::

#### Example 2

Considering the following model (partial view):

![](img/structure3.png)

Zipcodes are used as primary keys of the *ZipCode* table. The many-to-one relation attribute between *cityID* and *ID* is named *city*.

The `City Class` provides an API:

```qs  
// City class

extends DataClass

exposed function getCityName(zipcode : integer) -> result : string
	var zip : cs.ZipCodeEntity

	zip=ds.ZipCode.get(zipcode)
	result="" 

	if (zip!=null)
		result=zip.city.name
	end
```

The application can use the API to get the city matching a zip code:

```qs
city=ds.City.getCityName(zipcode)

```


### EntitySelection Class

Each dataclass offers an EntitySelection class in the `cs` class store.

- **Extends**: 4D.EntitySelection 
- **Class name in *cs* class store**: *DataClassName*Selection
- **Example name**: EmployeeSelection


#### Example

```qs
// EmployeeSelection class


extends EntitySelection

//Extract the employees with a salary greater than the average from this entity selection 

function withSalaryGreaterThanAverage() -> result : cs.EmployeeSelection
	result=this.query("salary > :1",this.average("salary")).orderBy("salary")

```

Then you can get employees with a salary greater than the average in any entity selection by executing: 

```qs
moreThanAvg=ds.Company.all().employees.withSalaryGreaterThanAverage()
```

### Entity Class

Each dataclass offers an Entity class in the `cs` class store.

- **Extends**: 4D.Entity 
- **Class name in *cs* class store**: *DataClassName*Entity
- **Example name**: CityEntity

#### Calculated attributes

Entity classes allow you to define **calculated attributes** using specific keywords:

- `function get` *attributeName*
- `function set` *attributeName*
- `function query` *attributeName*
- `function orderBy` *attributeName*

For more information, please refer to the [Calculated attributes](#calculated-attributes) section. 


#### Example


```qs
// cs.CityEntity class

extends Entity

function getPopulation() -> result : integer
    result=this.zips.sum("population")


function isBigCity() -> result : boolean
// The getPopulation() function is usable inside the class
result=this.getPopulation()>50000
```

Then you can call this code: 

```qs
var city : cs.CityEntity
var message : string

city=ds.City.getCity("Caguas")

if (city.isBigCity())
	message=city.name + " is a big city"
end
```

### Specific rules

When creating or editing data model classes, you must pay attention to the following rules:

- Since they are both defined in the **cs** [class store](lang-classes.md#class-stores), do not give the same name to a dataclass and to a user class. If such a case occurs, the constructor of the user class becomes unusable. 
- Do not use a reserved name for a user class (e.g., "DataClass").
- In an ORDA class, `this` designates the instance of the object matching the dataclass.
- You cannot instantiate a data model class object with the `new()` keyword (an error is returned). You must use a regular method as listed in the [`Instantiated by` column of the ORDA class table](#architecture).
- You cannot override a native ORDA class function from the **`4D`** [class store](Concepts/classes.md#class-stores) with a data model user class function.




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

