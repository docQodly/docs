---
id: data
title: CRUD Operations
---

In ORDA, you access data through [entities](data-model#entity) and [entity selections](data-model#entity-selection) objects. These objects allow you to execute CRUD (*Create, Read, Update, Delete*) basic operations on data, along with [queries](queries.md) and sorts.


## Creating an entity  

There are two ways to create a new entity in a dataclass:

* You create an empty entity using the `dataclass.new()` function.
* You create a new reference to a database record using ORDA functions such as `entity.next()` or `entityselection.first()`.

At this moment, the entity is only created in memory. If you want to add it to the datastore, you must call the `entity.save()` function.

Entity attributes are directly available as properties of the entity object. For more information, please refer to [Using entity attributes](#using-entity-attributes).

For example, we want to create a new entity in the "Employee" dataclass in the current datastore with "John" and "Dupont" assigned to the firstname and name attributes:

```qs
var myEntity : cs.EmployeeEntity
myEntity = ds.Employee.new() //Create a new object of the entity type
myEntity.name = "Dupont" //assign 'Dupont' to the 'name' attribute
myEntity.firstname = "John" //assign 'John' to the 'firstname' attribute
myEntity.save() //save the entity
```


## Entities and references

An entity contains a reference to a database record. Different entities can reference the same record. Also, since an entity can be stored in an object variable, different variables can contain a reference to the same entity.

If you execute the following code:

```qs
var e1, e2 : cs.EmployeeEntity
e1 = ds.Employee.get(1) //access the employee with ID 1
e2 = e1
e1.name = "Hammer"
  //both variables e1 and e2 share the reference to the same entity
  //e2.name contains "Hammer"
if (e1 == e2) //true
```

This is illustrated by the following graphic:

![](img/entityRef1.png)

Now if you execute:

```qs
var e1,e2 : cs.EmployeeEntity
e1 = ds.Employee.get(1)
e2 = ds.Employee.get(1)
e1.name = "Hammer"
  //variable e1 contains a reference to an entity
  //variable e2 contains another reference to another entity
  //e2.name contains "smith"
if (e1 == e2) //false
```

This is illustrated by the following graphic:

![](img/entityRef2.png)

Note however that entities refer to the same record. In all cases, if you call the `entity.save()` method, the record will be updated (except in [case of conflict](#entity-locking)).

In fact, `e1` and `e2` are not the entity itself, but a reference to the entity. It means that you can pass them directly to any function or method, and it will act like a pointer. For example:

```qs
 forEach(entity,selection)
    do_Capitalize(entity)
 end
```

And the *do_Capitalize* method is:

```qs
 declare (entity : cs.EmployeeEntity)
 var name : string
 name=entity.lastname
 if(name!=null)
    name=uppercase(substring(name,1,1))+lowercase(substring(name,2))
 end
 entity.lastname=name
```

You can handle entities like any other object and pass their references directly as [parameters](../language/basics/lang-parameters.md).

:::note

You can use as many entities as you need at the same time, there is no automatic lock on an entity (see [Entity locking](#entity-locking)). When an entity is loaded, it uses the **lazy loading** mechanism, which means that only the needed information is loaded.

:::

## Using entity attributes  

Entity attributes store or reference data and map corresponding fields in the corresponding table of the database, with regards to their [`kind`](../language/DataClassClass.md#attributename). Entity attributes of the **storage** kind can be set or get as simple properties of the entity object, while attributes of the **relatedEntity** or **relatedEntities** kind will return an entity or an entity selection. Entity attributes of the [**calculated**](data-model.md#calculated-attributes) and [**alias**](data-model.md#alias-attributes) kind can return any value type.  

For example, to set a storage attribute:


```qs

 entity=ds.Employee.get(1) //get employee attribute with ID 1
 name=entity.lastname //get the employee name, e.g. "Smith"
 entity.lastname="Jones" //set the employee name
 entity.save() //save the modifications
```


Accessing a related attribute depends on the attribute [`kind`](../language/DataClassClass.md#attributename). For example, with the following structure:

![](img/structure2.png)

You can access data through the related object(s):

```qs
 var entity : cs.CompanyEntity
 var entitySel : cs.ProjectSelection
 entity=ds.Project.all().first().theClient //get the Company entity associated to the project
 entitySel=ds.Company.all().first().companyProjects //get the selection of projects for the company
```

Note that both *theClient* and *companyProjects* in the above example are primary relation attributes and represent a direct relationship between the two dataclasses. However, relation attributes can also be built upon paths through relationships at several levels, including circular references. For example, consider the following structure:

![](img/structure4.png)

Each employee can be a manager and can have a manager. To get the manager of the manager of an employee, you can simply write:

```qs
 var myEmp : cs.EmployeeEntity
 var manLev2 : string
 myEmp=ds.Employee.get(50)
 manLev2=myEmp.manager.manager.lastname
```

### Assigning files to picture or blob attributes

You can store images in picture attributes; similarly, you can store any binary data in blob attributes.

Qodly lets you assign either the data itself, i.e. an image or a blob object, or a **reference to a file** containing the data to the attribute. Only the file path is saved within the entity.

Thanks to this feature, you can reuse the same picture in multiple entities without duplicating it, organize the files the way you want, or use them outside of Qodly. Also, you can control the size of the data file.

The file reference can be:

- a 4D.File object
- a path in POSIX format

Example:

```qs
function createCompany(name : string, logo : 4D.File)

	var company : cs.CompanyEntity
	company = ds.Company.new()

	company.name = name
		//assignment using a file object
	company.logo = logo
		//assignment using a path
	company.datablob = "/SOURCES/Shared/"+$name+"/data.bin"
	company.save()
```

Regardless of how the attribute is assigned (data itself or reference to a file), read access to the attribute is transparent from the application's point of view.

The file does not have to exist on disk at the time of assignment (no error is returned in this case). If the referenced file is not found when the attribute is read, a null value is returned.

:::tip

Qodly loads images and data into a local cache. If the referenced file is modified after it has been loaded, you must reassign it so that the modification is taken into account in the application.  

:::


### Assigning values to relation attributes  

In the ORDA architecture, relation attributes directly contain data related to entities:

*	An many-to-one type relation attribute (**relatedEntity** kind) contains an entity
*	A one-to-many type relation attribute (**relatedEntities** kind) contains an entity selection

Let's look at the following (simplified) structure:

![](img/structure5.png)

In this example, an entity in the "Employee" dataclass contains an object of type Entity in the "employer" attribute (or a null value). An entity in the "Company" dataclass contains an object of type EntitySelection in the "staff" attribute (or a null value).

To assign a value directly to the "employer" attribute, you must pass an existing entity from the "Company" dataclass. For example:

```qs
 var emp : cs.EmployeeEntity
 emp=ds.Employee.new() // create an employee
 emp.lastname="Smith" // assign a value to an attribute
 emp.employer=ds.Company.query("name =:1","4D")[0]  //assign a company entity
 emp.save()
```

You can also directly get the "one" related entity through its primary key value (number or string). For example:

```qs
 var emp : cs.EmployeeEntity
 emp=ds.Employee.new()
 emp.lastname="Wesson"
 emp.employer=ds.Company.get(2)
  //gets the Company entity with primary key value 2
  //assigns it to the employee
 emp.save()
```

This is particularly useful when you are importing large amounts of data from a relational database. This type of import usually contains an "ID" column, which references a primary key that you can then assign to a relation attributes.


You can assign or modify the value of a "one" related entity attribute from the "many" dataclass directly through the related attribute. For example, if you want to modify the name attribute of a related Company entity of an Employee entity, you can write:

```code4d
 var emp : cs.EmployeeEntity
 emp=ds.Employee.get(2) // load the Employee entity with primary key 2

 emp.employer.name="4D, Inc." //modify the name attribute of the related Company
 emp.employer.save() //save the related attribute
  //the related entity is updated
```

## Creating an entity selection  

You can create an object of type [entity selection](data-model#entity-selection) as follows:

*	Querying the entities [in a dataclass](../language/DataClassClass.md#query) or in an [existing entity selection](../language/EntitySelectionClass.md#query);
*	Using the [`.all()`](../language/DataClassClass.md#all) dataclass function to select all the entities in a dataclass;
*	Using the [`.newSelection()`](../language/DataClassClass.md#newselection) dataclass function to create a blank entity selection;
*	Using the [`.copy()`](../language/EntitySelectionClass.md#copy) function to duplicate an existing entity selection;
*	Using one of the various functions from the [Entity selection class](../language/EntitySelectionClass.md) that returns a new entity selection, such as [`.and()`](../language/EntitySelectionClass.md#and), [`.minus()`](../language/EntitySelectionClass.md#minus), [`.slice()`](../language/EntitySelectionClass.md#slice), etc.;
*	Using the [`entity.getSelection()`](../language/EntityClass.md#getselection) function;
*	Using a relation attribute of kind `relatedEntities` such as `empSel=company.employees`, or a projection such as `empSel.name`.

:::note

You can filter which entities must be included in entity selections for a dataclass depending on any business rules, thanks to the [restricted entity selection](#restricting-entity-selections) feature.

:::

You can simultaneously create and use as many different entity selections as you want for a dataclass. Keep in mind that an entity selection only contains references to entities. Different entity selections can contain references to the same entities.

:::note

An entity selection is usually unordered, but it can be ordered (see [Ordered or unordered entity selection](data-model.md#ordered-or-unordered-entity-selection)).

:::

### Entity selections and Storage attributes  

All storage attributes (string, number, boolean, date) are available as properties of entity selections as well as of entities. When used in conjunction with an entity selection, a scalar attribute returns a collection of scalar values. For example:

```qs
 var locals : cs.PersonSelection
 var localEmails : collection
 locals=ds.Person.query("city = :1","San Jose") //entity selection of person
 localEmails=locals.emailAddress //collection of email addresses (strings)
```

### Entity selections and Relation attributes  

In addition to the variety of ways you can query, you can also use relation attributes as properties of entity selections to return new entity selections. For example, consider the following structure:

![](img/structure6.png)

```qs
 var myParts : cs.PartSelection
 var myInvoices : cs.InvoiceSelection
 myParts=ds.Part.query("ID < 100") //Return parts with ID less than 100
 myInvoices=myParts.invoiceItems.invoice
  //All invoices with at least one line item related to a part in myParts
```

The last line will return in *myInvoices* an entity selection of all invoices that have at least one invoice item related to a part in the entity selection *myParts*. When a relation attribute is used as a property of an entity selection, the result is always another entity selection, even if only one entity is returned. When a relation attribute is used as a property of an entity selection and no entities are returned, the result is an empty entity selection, not null.


### Shareable or alterable entity selections

An entity selection can be **shareable** (readable by multiple processes, but not alterable after creation) or **alterable** (supports the [`.add()`](../language/EntitySelectionClass.md#add) function, but only usable by the current process).

#### Properties

A **shareable** entity selection has the following characteristics:

- it can be stored in a shared object or shared collection, and can be passed as parameter between several processes or workers;
- it can be stored in several shared objects or collections, or in a shared object or collection which already belongs to a group;
- it does not allow the addition of new entities. Trying to add an entity to a shareable entity selection will trigger an error (1637 - This entity selection cannot be altered). To add an entity to a shareable entity selection, you must first transform it into a non-shareable entity selection using the [`.copy()`](../language/EntitySelectionClass.md#copy) function, before calling [`.add()`](../language/EntitySelectionClass.md#add).

:::note

Most entity selection functions (such as [`.slice()`](../language/EntitySelectionClass.md#slice), [`.and()`](../language/EntitySelectionClass.md#and)...) support shareable entity selections since they do not need to alter the original entity selection (they return a new one).

:::

An **alterable** entity selection has the following characteristics:

- it cannot be shared between processes, nor be stored in a shared object or collection. Trying to store a non-shareable entity selection in a shared object or collection will trigger an error (-10721 - Not supported value type in a shared object or shared collection);
- it accepts the addition of new entities, i.e. it is supports the [`.add()`](../language/EntitySelectionClass.md#add) function.


#### How are they defined?

The **shareable** or **alterable** nature of an entity selection is defined when the entity selection is created (it cannot be modified afterwards). You can know the nature of an entity selection using the [.isAlterable()](../language/EntitySelectionClass.md#isalterable) function.


A new entity selection is **shareable** in the following cases:

- the new entity selection results from an ORDA class function applied to a dataclass: [dataClass.all()](../language/DataClassClass.md#all), [dataClass.fromCollection()](../language/DataClassClass.md#fromcollection), [dataClass.query()](../language/DataClassClass.md#query),
- the new entity selection is based upon a relation [entity.*attributeName*](../language/EntityClass.md#attributename) (e.g. "company.employees") when *attributeName* is a one-to-many related attribute but the entity does not belong to an entity selection.
- the new entity selection is explicitely copied as shareable with [entitySelection.copy()](../language/EntitySelectionClass.md#copy) (i.e. with the `ck shared` option).

Example:

```qs
var myComp : cs.CompanyEntity
var employees : cs.EmployeeSelection
myComp=ds.Company.get(2) //myComp does not belong to an entity selection
employees=myComp.employees //employees is shareable
```

A new entity selection is **alterable** in the following cases:

- the new entity selection created blank using the [dataClass.newSelection()](../language/DataClassClass.md#newselection) function,
- the new entity selection is explicitely copied as alterable with [entitySelection.copy()](../language/EntitySelectionClass.md#copy) (i.e. without the `ck shared` option).

Example:

```qs
var toModify : cs.CompanySelection
toModify=ds.Company.all().copy() //toModify is alterable
```


A new entity selection **inherits** from the original entity selection nature in the following cases:

- the new entity selection results from one of the various ORDA class functions applied to an existing entity selection ([.query()](../language/EntitySelectionClass.md#query), [.slice()](../language/EntitySelectionClass.md#slice), etc.) .
- the new entity selection is based upon a relation:
	- [entity.*attributeName*](../language/EntityClass.md#attributename) (e.g. "company.employees") when *attributeName* is a one-to-many related attribute and the entity belongs to an entity selection (same nature as [.getSelection()](../language/EntityClass.md#getselection) entity selection),
	- [entitySelection.*attributeName*](../language/EntitySelectionClass.md#attributename) (e.g. "employees.employer") when *attributeName* is a related attribute (same nature as the entity selection),
	- [.extract()](../language/EntitySelectionClass.md#extract) when the resulting collection contains entity selections (same nature as the entity selection).

Examples:

```qs
var highSal, lowSal : cs.EmployeeSelection
var comp, comp2 : cs.CompanySelection
highSal=ds.Employee.query("salary >= :1", 1000000)   
	//highSal is shareable because of the query on dataClass
comp=highSal.employer //comp is shareable because highSal is shareable

lowSal=ds.Employee.query("salary <= :1", 10000).copy()
	//lowSal is alterable because of the copy()
comp2=lowSal.employer //comp2 is alterable because lowSal is alterable
```


#### Sharing an entity selection between processes (example)

You work with two entity selections that you want to pass to a worker process so that it can send mails to appropriate persons:

```qs

var paid,unpaid : cs.InvoicesSelection
//We get entity selections for paid and unpaid invoices
paid=ds.Invoices.query("status=:1", "Paid")
unpaid=ds.Invoices.query("status=:1", "Unpaid")

//We pass entity selection references as parameters to the worker
callWorker("mailing", "sendMails", paid, unpaid)

```

The `sendMails` method:

```qs

 declare (paid : cs.InvoicesSelection, unpaid : cs.InvoicesSelection)
 var invoice : cs.InvoicesEntity

 var server, transporter, email, status : object

  //Prepare emails
 server=newObject()
 server.host="exchange.company.com"
 server.user="myName@company.com"
 server.password="my!!password"
 transporter=smtpNewTransporter(server)
 email=newObject()
 email.from="myName@company.com"

  //Loops on entity selections
 forEach(invoice,paid)
    email.to=invoice.customer.address // email address of the customer
    email.subject="Payment OK for invoice # "+string(invoice.number)
    status=transporter.send(email)
 end

 forEach(invoice,unpaid)
    email.to=invoice.customer.address // email address of the customer
    email.subject="Please pay invoice # "+string(invoice.number)
    status=transporter.send(email)
 end
```


## Restricting entity selections

In ORDA, you can create filters to restrict access to entities of any of your dataclasses. Once implemented, a filter is automatically applied whenever the entities of the dataclass are accessed either by **ORDA class functions** such as [`all()`](../language/DataClassClass.md#all) or [`query()`](../language/EntitySelectionClass.md#query), or by the REST API (which involves the [Data Explorer](../data-explorer/data-explorer.md) and [remote datastores](../language/commands/openDatastore.md)).

A filter creates a restricted view of the data, built upon any business rules such as current session user. For example, in an application used by salespersons to make deals with their customers, you can restrict the read customers to those managed by the authenticated salesperson.

:::info

Filters apply to **entities**. If you want restrict access to a **dataclass** itself or to one or more of its **attributes**, you might consider using [session privileges](../studio/roles/rolesPrivilegesOverview.md) which are more appropriate in this case.

:::


### How to define a restrict filter

You create a filter for a dataclass by defining an `event restrict` function in the [**dataclass class**](../guideCenter/programmingGuide/data-model.md#dataclass-class) of the dataclass. The filter is then automatically enabled.


### `Function event restrict`

#### Syntax

```qs
function event restrict() -> result : cs.*DataClassName*Selection
// code
```

This function is called whenever an entity selection or an entity of the dataclass is requested. The filter is run once, when the entity selection is created.

The filter must return an entity selection of the dataclass. It can be an entity selection built upon a query, stored in the [`storage`], etc.

:::note

For performance reasons, we recommend to use **indexed attributes** in the definition of the filter.

:::

The function must return a valid entity selection of the dataclass. No filter is applied (all entities corresponding of the initial request are returned) if:

- the function returns **null**,
- the function returns **undefined**,
- the function does not return a valid entity selection.


#### Example

When accessed from a web or REST request, we want the Customers dataclass to only expose customers belonging to the identified sales person. During the authentication phase, the sales person is stored in the `session` object. Other types of requests are also handled.

```qs
Class extends DataClass


function event restrict() : cs.CustomersSelection

        switch
                // Only return the customers of the authenticated sales person stored in the session
            : (session.storage.salesInfo != null)
                return this.query("sales.internalId = :1", session.storage.salesInfo.internalId)

                //Data explorer - No filter is applied
            : (session.hasPrivilege("WebAdmin"))
                return null
            else
                //No customers can be read
                return this.newSelection()

        end
```


### Filter activation details

Filters apply to all ORDA or REST requests executed in your Qodly projects. A filter is activated as soon as the project is opened.



|Functions|Comment|
|---|---|
|[dataclass.get()](../language/DataClassClass.md#get)|If the entity does not match the filter, `null` is returned|
|[entity.reload()](../language/EntityClass.md#reload)|Only in remote datastores|
|[dataclass.all()](../language/DataClassClass.md#all)||
|[dataclass.fromCollection()](../language/DataClassClass.md#fromcollection)|<li>In case of update, only entities matching the filter can be updated. If the collection refers to entities not matching the filter, they are created as new entities (if no duplicate PK error)</li><li>In case of creation, entities not matching the filter are created but will not be read after creation</li>|
|[entitySelection.and()](../language/EntitySelectionClass.md#and)|Only entities matching the filter are returned|
|[entitySelection.or()](../language/EntitySelectionClass.md#or)|Only entities matching the filter are returned|
|[entitySelection.minus()](../language/EntitySelectionClass.md#minus)|Only entities matching the filter are returned|
|[dataclass.query()](../language/DataClassClass.md#query)||
|[entitySelection.query()](../language/EntitySelectionClass.md#query)||
|[entitySelection.attributeName](../language/EntitySelectionClass.md#attributename)|Filter applied if *attributeName* is a related entity or related entities of a filtered dataclass (including alias or computed attribute)|
|[entity.attributeName](../language/EntityClass.md#attributename)|Filter applied if *attributeName* corresponds to related entities of a filtered dataclass (including alias or computed attribute)|
|[Create entity selection](../language/EntitySelectionClass.md#create-entity-selection)||


Other ORDA functions accessing data do not directly trigger the filter, but they nevertheless benefit from it. For example, the [`entity.next()`](../language/EntityClass.md#next) function will return the next entity in the already-filtered entity selection. On the other hand, if the entity selection is not filtered, [`entity.next()`](../language/EntityClass.md#next) will work on non-filtered entities.

:::note

If there is an error in the filter at runtime, it is thrown as if the error came from the ORDA function itself.

:::




## Entity Locking

You often need to manage possible conflicts that might arise when several users or processes load and attempt to modify the same entities at the same time. Record locking is a methodology used in relational databases to avoid inconsistent updates to data. The concept is to either lock a record upon read so that no other process can update it, or alternatively, to check when saving a record to verify that some other process hasn’t modified it since it was read. The former is referred to as **pessimistic record locking** and it ensures that a modified record can be written at the expense of locking records to other users. The latter is referred to as **optimistic record locking** and it trades the guarantee of write privileges to the record for the flexibility of deciding write privileges only if the record needs to be updated. In pessimistic record locking, the record is locked even if there is no need to update it. In optimistic record locking, the validity of a record’s modification is decided at update time.

ORDA provides you with two entity locking modes:

- an automatic "optimistic" mode, suitable for most applications,
- a "pessimistic" mode allowing you to lock entities prior to their access.

### Automatic optimistic lock  

This automatic mechanism is based on the concept of "optimistic locking" which is particularly suited to the issues of web applications. This concept is characterized by the following operating principles:

*	All entities can always be loaded in read-write; there is no *a priori* "locking" of entities.
*	Each entity has an internal locking stamp that is incremented each time it is saved.
*	When a user or process tries to save an entity using the [`entity.save()`](../language/EntityClass.md#save) function, Qodly compares the stamp value of the entity to be saved with that of the entity found in the data (in the case of a modification):
	*	When the values match, the entity is saved and the internal stamp value is incremented.
	*	When the values do not match, it means that another user has modified this entity in the meantime. The save is not performed and an error is returned.

The following diagram illustrates optimistic locking:

1. Two processes load the same entity.

![](img/optimisticLock1.png)

2. The first process modifies the entity and validates the change. The [`entity.save()`](../language/EntityClass.md#save) fucntion is called. The Qodly engine automatically compares the internal stamp value of the modified entity with that of the entity stored in the data. Since they match, the entity is saved and its stamp value is incremented.

![](img/optimisticLock2.png)

3. The second process also modifies the loaded entity and validates its changes. The `entity.save()` function is called. Since the stamp value of the modified entity does not match the one of the entity stored in the data, the save is not performed and an error is returned.

![](img/optimisticLock3.png)


This can also be illustrated by the following code:

```qs
 person1=ds.Person.get(1) //Reference to entity
 person2=ds.Person.get(1) //Other reference to same entity
 person1.name="Bill"
 result=person1.save() //result.success=true, change saved
 person2.name="William"
 result=person2.save() //result.success=false, change not saved
```

In this example, we assign to *person1* a reference to the person entity with a key of 1. Then, we assign another reference of the same entity to variable *person2*. Using *person1*, we change the first name of the person and save the entity. When we attempt to do the same thing with *person2*, ORDA checks to make sure the entity on disk is the same as when the reference in *person1* was first assigned. Since it isn't the same, it returns false in the `success` property and doesn’t save the second modification.

When this situation occurs, you can, for example, reload the entity from the disk using the [`entity.reload()`](../language/EntityClass.md#reload) function so that you can try to make the modification again. The `entity.save()` function also proposes an "automerge" option to save the entity in case processes modified attributes that were not the same.


> Record stamps are not used in **transactions** because only a single copy of a record exists in this context. Whatever the number of entities that reference a record, the same copy is modified thus `entity.save()` operations will never generate stamp errors.

### Pessimistic lock  

You can lock and unlock entities on demand when accessing data. When an entity is getting locked by a process, it is loaded in read/write in this process but it is locked for all other processes. The entity can only be loaded in read-only mode in these processes; its values cannot be edited or saved.

This feature is based upon two functions of the `Entity` class:

*	[`entity.lock()`](../language/EntityClass.md#lock)
*	[`entity.unlock()`](../language/EntityClass.md#unlock)

For more information, please refer to the descriptions for these functions.
