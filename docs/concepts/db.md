---
id: db
title: Qodly Database
---

## Architecture


At the heart of the Qodly platform is the Qodly database, named **QodlyDB**. QodlyDB is a powerful **relational database** (RDBMS) including a dynamic **ORM** (Object Relational Mapping). 

Unlike other databases that require the addition and configuration of an external ORM component, the Qodly database natively integrates its ORM layer. In addition to the performance, this architecture allows direct access to database objects via **ORDA**. Any change in the underlying model is automatically available in the ORDA API.




## Features

### Data types

### Capabilities



## Query language

The Qodly database perfectly matches the Qodly language since they both share the same definition of objects, thanks to the ORDA technology:

- On the database side, the model itself as well as tables and fields are automatically exposed as a datastore with datastore class and attributes. 
- On the language side, the datastore (**ds**), datastore class, and attributes are automatically available as classes, functions, and properties. Keep in mind that the ORDA concept also includes access to objects describing **data**, such as entities and entity selections. 



![full stack of servers](img/full-stack.png)


