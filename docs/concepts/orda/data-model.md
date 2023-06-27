---
id: data-model
title: Data Model Objects
---

The ORDA technology is based upon an automatic mapping of an underlying relational database structure to a data model (this concept can be viewed as an included and enhanced [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)), along with powerful features such as computed attributes or dataclass functions. It also provides access to data through entity and entity selection objects. 

As a result, ORDA exposes the whole database as a set of data model objects. 
 
![schema](img/orda-schema.png)


## Object definition

### Datastore

The datastore is the interface object to a database. It builds a representation of the whole database as object. A datastore is made of a **model** and **data**:

- The model contains and describes all the dataclasses that make up the datastore. It is independant from the underlying database itself.
- Data refers to the information that is going to be used and stored in this model. For example, names, addresses, and birthdates of employees are pieces of data that you can work with in a datastore.

When handled through the code, the datastore is an object, returned by the [`ds`](../language/DataStoreClass.md#ds) command, whose properties are all of the [dataclasses](#dataclass) which have been specifically **exposed**. 

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

A dataclass object can contain:

*	attributes
*	relation attributes
*	[computed attributes](orda-classes.md#computed-attributes)
*	[alias attributes](orda-classes.md#alias-attributes)
*	functions

The dataclass offers an abstraction of the physical database and allows handling a conceptual data model with specific features such as computed attributes or alias attributes. The dataclass is the only means to query the datastore. A query is done from a single dataclass. Queries are built around attributes and relation attribute names of the dataclasses. So the relation attributes are the means to involve several linked dataclasses in a query.

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

This code assigns to `nameAttribute` and `revenuesAttribute` references to the `name` and `revenues` attributes of the `Company` dataclass. This syntax does NOT return values held inside of the attribute, but instead returns objects describing the attributes themselves, that you can handle by calling the [dataclass *attribute name*](../language/DataClassClass.md#attributename). To handle values, you need to go through [Entities](#entity).

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

