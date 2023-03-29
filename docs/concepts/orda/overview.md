---
id: overview
title: What is ORDA?
---

ORDA stands for **Object Relational Data Access**. It is an enhanced technology allowing to access both the model and the data of a database through objects.

Relations are transparently included in the concept, in combination with [lazy loading](glossary.md#lazy-loading), to remove all the typical hassles of data selection or transfer from the developer.

With ORDA, data is accessed through an abstraction layer, the [datastore](data-model.md#datastore). A datastore is an object that provides an interface to the database model and data through objects and classes. For example, a table is mapped to a [dataclass](data-model.md#dataclass) object, a field is an [attribute](data-model.md##attribute) of a dataclass, and records are accessed through [entities](data-model.md#entity) and [entity selections](data-model.md#entity-selection). 


## Why use ORDA?  

Instead of representing information as tables, records, and fields, ORDA uses an alternate approach that more accurately maps data to real-world concepts.

Imagine the ability to denormalize a relational structure, yet not affect efficiency. Imagine describing everything about the business objects in your application in such a way that using the data becomes simple and straightforward and removes the need for a complete understanding of the relational structure.

In the ORDA data model, a single dataclass can incorporate all of the elements that make up a traditional relational database table, but can also include values from related parent entities, and direct references to related entities and entity selections.

A query returns a list of entities called an entity selection, which fulfills the role of a SQL query’s row set. The difference is that each entity "knows" where it belongs in the data model and "understands" its relationship to all other entities. This means that a developer does not need to explain in a query how to relate the various pieces of information, nor in an update how to write modified values back to the relational structure.


## How to use ORDA?  

Basically, ORDA handles objects. In ORDA, all main concepts, including the datastore itself, are available through objects. The datastore is automatically mapped upon the underlying database structure. 

ORDA objects can be handled like standard objects, but they automatically benefit from specific properties and methods.

ORDA objects are created and instanciated when necessary (you do not need to create them). However, ORDA data model objects are associated with [classes](orda-classes.md) where you can add custom functions and define [computed attributes](orda-classes.md#computed-attributes).

