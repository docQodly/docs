---
id: attributes
title: Attributes
---


An attribute is an object that stores information or represents a value in the datastore class. Once you create a datastore class, you can add attributes to it. 


## Overview

A datastore class is always created with a storage attribute of type Longint named "ID" by default, which is defined as its primary key.

You can view and modify a few of the attribute’s properties when you select or hover it in the datastore class:

![attribute](img/attribute1.png)


- **Delete**: Deletes the attribute from the datastore class.
- **Scope**: A closed lock icon indicates that the attribute is **Not exposed as REST**, i.e. it can only be called from the server code. 
- **Name**: [Attribute name](#attribute-names) that you can change by double-clicking on it to render the area enterable. 
	- a name in **bold** indicates that an index is associated to the attribute.
	- a name <u>underlined</u> indicates the primary key attribute 
	- a name in *italics* indicates a not exposed attribute 
- **Primary Key**: Indicates the primary key attribute for the datastore class. This attribute is mandatory, you can rename it but not delete it.
- ![icon](img/alias-icon.png): Indicates an alias attribute.
- ![icon](img/calculated-icon.png): Indicates a calculated attribute.
- **Type Icon**: Displays the datastore entity type as an icon.
- **Type**: Attribute type that you can change by double-clicking on it to render the area enterable.


### Attribute categories

There are several categories of attributes in Qodly:

- **Scalar/Storage**: Scalar/storage attributes allow you to store information in the datastore class.
- **Relation**: A relation attribute is relationship between two datastore classes that can be either N->1 or 1->N. From those two types, you can then create an N<->N relationship between three datastore classes.
- **Alias**: An alias attribute is built upon a relation attribute. Once an N -> 1 Relation Attribute is defined, any of the attributes within the "parent" datastore class can be directly referenced as attributes within the "child" datastore class. The result is what appears to be de-normalized data without the overhead of duplicating information. Alias attributes can reference any available attributes further up the relational tree. An alias attribute may reference either a scalar attribute or a relation attribute.
- **Calculated**: A calculated attribute does not store information; instead, it determines its value based on other values from the same entity or from other entities, attributes or datastore class methods. See XXX.

The data type list contains predefined data types as well as datastore classes and entity selections (in bold), and relation attributes if some have already been defined:

![types](img/types.png)

The type to select depend on the category of attribute to create.

You create **storage**, **relation** and **alias** attributes from the datastore class in the Model editor. **Calculated** attributes must be [created by code](#calculated-attributes). However, they are displayed in the datastore class:

![calc](img/calculated1.png)


### Attribute name

Attribute names are case-sensitive: "firstName" and "firstNAME" are not equal. The attribute name must be unique, start with a letter, and can contain only numbers and letters. You cannot include accented and non-Roman letters. For more information, please refer to the [Identifiers](../../language/basics/lang-identifiers.md) section. If you enter an invalid character, you will not be able to save the name.

![wrong-name](img/wrong-name.png)



## Create a storage attribute

To create a storage attribute:

1. Click on the **+** button at the right side of the **Attributes** bar in the datastore class.
2. Give a [name](#attribute-name) to the attribute.
2. Select a predefined data type from the list and press **Enter**.

The **Qodly database** supports [an extended set of data types](../../concepts/db.md#data-types).


## Create a relation attribute

### Create a N->1 relation attribute

An N->1 relation attribute relates one entity in a datastore class to one entity in another datastore class. For example, an employee has only one employer.

To create an N->1 relation attribute:

1. Click on the **+** button at the right side of the **Attributes** bar in the **1** datastore class.
2. Give a [name](#attribute-name) to the attribute.
3. Select the **N** datastore class in the data type menu. It means that the attribute will contain a reference to an entity of the N datastore class. 

For example, to have a N->1 relation between Employee and Company datastore classes, create an attribute named "employer" in the Employee datastore class, and select **Company** as data type. 

![related](img/n1-attribute.png)

Once you select **Company**, a matching 1->N relation attribute is created automatically in the Company datastore class. By default, it is named "EmployeeSelection", we renamed it "employees".

![related](img/n1-global.png)

:::note

You can establish the same relationship by creating a "1->N" relation from the "1" datastore class. 

:::

### Create a 1->N relation attribute

An 1->N relation attribute relates one entity in a datastore class to multiple entities in another datastore class. For example, each company has multiple employees.

To create a 1->N relation attribute:

1. Click on the **+** button at the right side of the **Attributes** bar in the **N** datastore class.
2. Give a [name](#attribute-name) to the attribute.
3. Select the Entity selection of the **1** datastore class in the data type menu. It means that the attribute will contain a reference to an entity selection of the 1 datastore class. 

For example, to have a 1->N relation attribute that contains all the employees in the Company datastore class, create an attribute named "staff" in the Company datastore class, and select **EmployeeSelection** as data type.

![related](img/1n-attribute.png)

After you select **EmployeeSelection**, you need to define the **path** of the relation, i.e. the matching relation attribute to create in the N datastore class. You can enter any valid attribute name, it will be automatically created in the N datastore class. 

![related](img/1n-attribute2.png)


### Create a N->N relation attribute

A N->N relation attribute allows you to have complex data structures. Here is our initial datastore model:

![related](img/n-to-n1.png)

As it is easy to express, an invoice can contain N items, and an item can be included in N invoices. To implement a N->N relation, we added the "InvoiceItem" intermediary datastore class. 

To create the N->N relation, you can proceed with the following steps

1. Create a new N->1 relation attribute in the "InvoiceItem" class, named "itemPart".
2. Define its type as "Part".
3. Create a new N->1 relation attribute in the "InvoiceItem" class, named "itemInvoice".
4. Define its type as "Invoice".

In both cases the 1->N relation attribute is automatically created in the "Part" and "Invoice" datastore classes. As a result, we have the "InvoiceItem" datastore class that has a relation attribute in the "Invoice" and "Part" datastore classes:

![related](img/n-to-n2.png)




## Alias attributes

An **alias** attribute is built above another attribute of the data model, named **target** attribute. The target attribute can belong to a related dataclass (available through any number of relation levels) or to the same dataclass. An alias attribute stores no data, but the path to its target attribute. You can define as many alias attributes as you want in a dataclass. 

Alias attributes are read-only. They can be used instead of their target attribute path in class functions.

Alias attributes are particularly useful to handle N to N relations. They bring more readability and simplicity in the code and in queries by allowing to rely on business concepts instead of implementation details.

### Create an alias attribute

To create an alias attribute:

1. Click on the **+** icon at the right side of the **Attributes** bar in the datastore class.
2. Give a [name](#attribute-name) to the attribute.
3. Click in the Type area and enter the name of the related attribute in the datastore class upon which you want to create the alias, and type a dot (**.**)
![attribute](img/alias-create1.png)

4. Select or enter the full attribute path. It can contain one or more levels, such as "employee.company.name". An alias can be used as a part of a path of another alias. A [calculated attribute](#calculated-attributes) can be used in an alias path, but only as the last level of the path, otherwise, an error is returned. For example, if "fullName" is a calculated attribute, an alias with path "employee.fullName" is valid. 


The alias attribute is then displayed in the datastore class with the ![attribute](img/alias-icon.png) symbol. 



### Examples

Considering the following model:

![alias](img/alias1.png)

1. In the Teacher dataclass, create a new attribute named "students" and give the path "courses.student" as type:

![alias](img/alias2.png)

The **students** alias attribute returns an entity selection with all students of the courses of a teacher, i.e. all students of a teacher. 

2. In the Student dataclass, create a new attribute named "teachers" and give the path "courses.teacher" as type.  The **teachers** alias attribute returns an entity selection with the teacher of all courses of a student, i.e. all teachers of a student. 
3. In the Course dataclass:

- create an alias attribute that returns another label for the "name" attribute
- create an alias attribute that returns the teacher name
- create an alias attribute that returns the student name

The model now looks like:

![alias](img/alias3.png)


You can then execute the following queries:

```qs
// Find course named "Archaeology"
ds.Course.query("courseName == :1","Archaeology")

// Find courses given by the professor Smith
ds.Course.query("teacherName == :1","Smith")

// Find courses where Student "Martin" assists
ds.Course.query("studentName == :1","Martin")

// Find students who have M. Smith as teacher 
ds.Student.query("teachers.name == :1","Smith")

// Find teachers who have M. Martin as student
ds.Teacher.query("students.name == :1","Martin")
// Note that this very simple query string processes a complex 
// query including a double join, as you can see in the queryPlan:   
// "Join on Table : Course  :  Teacher.ID = Course.teacherID,    
//  subquery:[ Join on Table : Student  :  Course.studentID = Student.ID,
//  subquery:[ Student.name === Martin]]"
```

You can also edit the value of the *courseName* alias:

```qs
// Rename a course using its alias attribute
arch=ds.Course.query("courseName == :1","Archaeology")
arch.courseName="Archaeology II"
arch.save() //courseName and name are "Archaeology II"
```


### Alias attribute type

Alias attribute [`kind`](../../language/DataClassClass.md#attributename) is "alias".  

An alias attribute inherits its data [`type`](../../language/DataClassClass.md#attributename) property from the target attribute: 

- if the target attribute [`kind`](../../language/DataClassClass.md#attributename) is "storage", the alias data type is of the same type,
- if the target attribute [`kind`](../../language/DataClassClass.md#attributename) is "relatedEntity" or "relatedEntities", the alias data type is of the `4D.Entity` or `4D.EntitySelection` type ("*classname*Entity" or "*classname*Selection"). 

Alias attributes based upon relations have a specific [`path`](../../language/DataClassClass.md#attributename) property, containing the path of their target attributes. 



## Calculated attributes


### Overview

A calculated attribute is a dataclass attribute with a data type that masks a calculation.

At the very minimum, a calculated attribute requires a `get` function that describes how its value will be calculated. When a *getter* function is supplied for an attribute, ORDA does not create the underlying storage space in the datastore but instead substitutes the function's code each time the attribute is accessed. If the attribute is not accessed, the code never executes.

A calculated attribute can also implement a `set` function, which executes whenever a value is assigned to the attribute. The *setter* function describes what to do with the assigned value, usually redirecting it to one or more storage attributes or in some cases other entities.

Just like storage attributes, calculated attributes may be included in **queries**. By default, when a calculated attribute is used in a ORDA query, the attribute is calculated once per entity examined. In some cases this is sufficient. However for better performance, especially in client/server, calculated attributes can implement a `query` function that relies on actual dataclass attributes and benefits from their indexes.

Similarly, calculated attributes can be included in **sorts**. When a calculated attribute is used in a ORDA sort, the attribute is calculated once per entity examined. Just like in queries, calculated attributes can implement an `orderBy` function that substitutes other attributes during the sort, thus increasing performance. 


### Create a calculated attribute

You create a calculated attribute by defining a `get` accessor in the [**entity class**](#entity-class) of the dataclass. The calculated attribute will be automatically available in the dataclass attributes and in the entity attributes.

Other calculated attribute functions (`set`, `query`, and `orderBy`) can also be defined in the entity class. They are optional.

Within calculated attribute functions, `this` designates the entity. Calculated attributes can be used and handled as any dataclass attribute, i.e. they will be processed by [entity class](../language/EntityClass.md) or [entity selection class](../language/EntitySelectionClass.md) functions. 

:::info

ORDA calculated attributes are not [**exposed**](#exposed-vs-non-exposed-functions) by default. You expose a calculated attribute by adding the `exposed` keyword to the **get function** definition.

:::


### `function get <attributeName>`

#### Syntax

```qs
{exposed} function get <attributeName>({event : object}) -> result : type
// code
```
The *getter* function is mandatory to declare the *attributeName* calculated attribute. Whenever the *attributeName* is accessed, the `function get` code is evaluated and the *result* value is returned. 

> A calculated attribute can use the value of other calculated attribute(s). Recursive calls generate errors. 

The *getter* function defines the data type of the calculated attribute thanks to the *result* parameter. The following resulting types are allowed:

- Scalar (string, boolean, date, time, number)
- object
- Image
- BLOB
- Entity (i.e. cs.EmployeeEntity)
- Entity selection (i.e. cs.EmployeeSelection)

The *event* parameter contains the following properties:

|Property|Type|Description|
|---|---|---|
|attributeName|string|Calculated attribute name|
|dataClassName|string|Dataclass name|
|kind|string|"get"|
|result|variant|Optional. Add this property with null value if you want a scalar attribute to return null|


#### Examples

- *fullName* calculated attribute:

```qs
function get fullName(event : object)-> fullName : string

  switch 	
	: (this.firstName==null) & (this.lastName==null)
		event.result=null //use result to return null
	: (this.firstName==null)
		fullName=this.lastName
	: (this.lastName==null)
		fullName=this.firstName
	else 
		fullName=this.firstName+" "+this.lastName
	end 
```

- A calculated attribute can be based upon an entity related attribute:

```qs
function get bigBoss(event : object)-> result: cs.EmployeeEntity
	result=this.manager.manager
    
```

- A calculated attribute can be based upon an entity selection related attribute:

```qs
function get coWorkers(event : object)-> result: cs.EmployeeSelection
    if (this.manager==null)
        result=ds.Employee.newSelection()
    else 
        result=this.manager.directReports.minus(this)
    end
```
    
### `function set <attributeName>`

#### Syntax

```qs
function set <attributeName>(value : type {, event : object})
// code
```

The *setter* function executes whenever a value is assigned to the attribute. this function usually processes the input value(s) and the result is dispatched between one or more other attributes.

The *value* parameter receives the value assigned to the attribute. 

The *event* parameter contains the following properties:

|Property|Type|Description|
|---|---|---|
|attributeName|string|Calculated attribute name|
|dataClassName|string|Dataclass name|
|kind|string|"set"|
|value|variant|Value to be handled by the calculated attribute|

#### Example

```qs
function set fullName(value : string , event : object)
	var p : integer
    p=position(" ",value) 		
	this.firstname=substring(value, 1, p-1)  // "" if p<0
	this.lastname=substring(value, p+1)
```



### `function query <attributeName>`

#### Syntax

```qs
function query <attributeName>(event : object)
function query <attributeName>(event : object) -> result : string
function query <attributeName>(event : object) -> result : object
// code
```

This function supports three syntaxes:

- With the first syntax, you handle the whole query through the `event.result` object property.
- With the second and third syntaxes, the function returns a value in *result*:
	- If *result* is a string, it must be a valid query string
	- If *result* is an object, it must contain two properties:
	
	|Property|Type|Description|
	|---|---|---|
	|result.query|string|Valid query string with placeholders (:1, :2, etc.)|
	|result.parameters|collection|values for placeholders|

The `query` function executes whenever a query using the calculated attribute is launched. It is useful to customize and optimize queries by relying on indexed attributes. When the `query` function is not implemented for a calculated attribute, the search is always sequential (based upon the evaluation of all values using the `get <AttributeName>` function).

:::note

The following features are not supported:

- calling a `query` function on calculated attributes of type Entity or Entity selection, 
- using the `order by` keyword in the resulting query string.

:::

The *event* parameter contains the following properties:

|Property|Type|Description|
|---|---|---|
|attributeName|string|Calculated attribute name|
|dataClassName|string|Dataclass name|
|kind|string|"query"|
|value|variant|Value to be handled by the calculated attribute|
|operator|string|Query operator (see also the [`query` class function](../language/DataClassClass.md#query)). Possible values:<li>== (equal to, @ is wildcard)</li><li>=== (equal to, @ is not wildcard)</li><li>!= (not equal to, @ is wildcard)</li><li>!== (not equal to, @ is not wildcard)</li><li>< (less than)</li><li><= (less than or equal to)</li><li>> (greater than)</li><li>>= (greater than or equal to)</li><li>IN (included in)</li><li>% (contains keyword)</li>|
|result|variant|Value to be handled by the calculated attribute. Pass `null` in this property if you want to execute a default query (always sequential for calculated attributes).|

> If the function returns a value in *result* and another value is assigned to the `event.result` property, the priority is given to `event.result`. 

#### Examples

- Query on the *fullName* calculated attribute. 

```qs
function query fullName(event : object)->result : object

	var fullname, firstname, lastname, myQuery : string
	var operator, myQuery : string
	var p : integer
	var parameters : collection

	operator=event.operator
	fullname=event.value

	p=position(" ",fullname) 
	if (p>0)
		firstname=substring(fullname, 1, p-1)+"@"
		lastname=substring(fullname, p+1)+"@"
		parameters=newCollection(firstname, lastname) // two items collection
	else 
		fullname=fullname+"@"
		parameters=newCollection(fullname) // single item collection
	end 

	switch 
	: (operator=="==") | (operator=="===")
		if (p>0)
			myQuery="(firstName = :1 and lastName = :2) or (firstName = :2 and lastName = :1)"
		else 
			myQuery="firstName = :1 or lastName = :1"
		end 
	: (operator="!=")
		if (p>0)
			myQuery="firstName != :1 and lastName != :2 and firstName != :2 and lastName != :1"
		else 
			myQuery="firstName != :1 and lastName != :1"
		end 
	end 

	result=newObject("query", myQuery, "parameters", parameters)
```

> Keep in mind that using placeholders in queries based upon user text input is recommended for security reasons (see [`query()` description](../language/DataClassClass.md#query)).

Calling code, for example:

```qs
emps=ds.Employee.query("fullName = :1", "Flora Pionsin")
```

- This function handles queries on the *age* calculated attribute and returns an object with parameters:

```qs
function query age(event : object)->result : object
	
	var operator, myQuery : string
	var age : integer
	
	operator=event.operator
			
	age=num(event.value)  // integer
	d1=addToDate(currentDate, -age-1, 0, 0)
	d2=addToDate(d1, 1, 0, 0)
	parameters=newCollection(d1, d2)
	
	switch 
			
		: (operator=="==")
			myQuery="birthday > :1 and birthday <= :2"  // after d1 and before or egal d2
			
		: (operator=="===") 

			myQuery="birthday = :2"  // d2 = second calculated date (= birthday date)

		: (operator==">=")
			myQuery="birthday <= :2"
			
			//... other operators			
			
			
	end 
	
	
	if (undefined(event.result))
		result=newObject
		result.query=myQuery
		result.parameters=parameters
	end

```  

Calling code, for example:

```qs
// people aged between 20 and 21 years (-1 day)
twenty=people.query("age = 20")  // calls the "==" case

// people aged 20 years today
twentyToday=people.query("age === 20") // equivalent to people.query("age is 20") 

```


### `function orderBy <attributeName>`

#### Syntax

```qs
function orderBy <attributeName>(event : object)
function orderBy <attributeName>(event : object)-> result : string

// code
```

The `orderBy` function executes whenever the calculated attribute needs to be ordered. It allows sorting the calculated attribute. For example, you can sort *fullName* on first names then last names, or conversely.
When the `orderBy` function is not implemented for a calculated attribute, the sort is always sequential (based upon the evaluation of all values using the `get <AttributeName>` function).

:::info

Calling an `orderBy` function on calculated attributes of type Entity class or Entity selection class **is not supported**. 

:::

The *event* parameter contains the following properties:

|Property|Type|Description|
|---|---|---|
|attributeName|string|Calculated attribute name|
|dataClassName|string|Dataclass name|
|kind|string|"orderBy"|
|value|variant|Value to be handled by the calculated attribute|
|operator|string|"desc" or "asc" (default)|
|descending|boolean|`true` for descending order, `false` for ascending order|
|result|variant|Value to be handled by the calculated attribute. Pass `null` if you want to let Qodly execute the default sort.|

> You can use either the `operator` or the `descending` property. It is essentially a matter of programming style (see examples).   

You can return the `orderBy` string either in the `event.result` object property or in the *result* function result. If the function returns a value in *result* and another value is assigned to the `event.result` property, the priority is given to `event.result`. 


#### Example

You can write conditional code:

```qs
function orderBy fullName(event : object)-> result : string
    if (event.descending==true)
        result="firstName desc, lastName desc" 
    else 
        result="firstName, lastName" 
    end
```

You can also write compact code:

```qs
function orderBy fullName(event : object)-> result : string
	result="firstName "+event.operator+", "lastName "+event.operator

```

Conditional code is necessary in some cases:

```qs
function orderBy age(event : object)-> result : string
    if (event.descending==true)
        result="birthday asc" 
    else 
        result="birthday desc" 
    end

```


## Properties  


Properties help you to define your application's business rules that will be automatically applied at the server level. For example, if you define an attribute like "Unique", Qodly returns an error if the user tries to save the entity with a value that is not unique into that attribute, and the entity will not be saved, and the entity will not be saved.

Qodly manages the attribute's properties when it is published to the Web. You can overwrite certain properties, like an attributes display formats in a component on your webforms.

The Properties tab allows you to modify the attribute’s properties, which are different depending on its type. For example, the Properties tab below displays the properties for an attribute of type string:

![attribute-properties](img/attribute-prop.png)

Here is the list of all available properties:

|Property|Description|Available with type(s)|
|---|---|---|
|Attribute type|Can be "Scalar" or "Calculated".|Calculated|
|Autogenerate|Automatically generates a UUID. If you do not select this option, you must generate a UUID in your code or else the attribute will not be valid.|uuid|
|Autosequence|A sequence number that Qodly automatically generates for each new datastore entity. |long|
|Comments|Notes that you can store with your attribute for private use|All|
|Date only|If unchecked, the date is represented as a standard JS date with the timezone and time in "YYYY-MM-DDTHH:MM:SSZ" format. If checked, the date is represented without the timezone and time (hour, minutes, and seconds). In this case, you can send the date in the format that it is returned to you: dd!mm!yyyy (e.g., 05!10!2023) or in typical JS format in which the timezone and time (hours, minutes, and seconds) will be removed and therefore disregarded|date|
|Default value|Default value for the attribute.|long, number|
|Ignore HTML tags|When you select this option, queries and sorts carried out in the data stored in the attribute do not take any style tags into account.|string|
|Index kind|Defines the type of index for the attribute. If you select an Index Kind, the attribute name will be displayed in bold. By default, no index is selected ("None").<li>B-tree: Standard B-Tree type index. This multipurpose index type meets most indexing requirements.</li><li>Cluster: B-Tree type index using clusters. This architecture is more efficient when the index does not contain a large number of keys, i.e., when the same values occur frequently in the data.</li><li>Automatic: Qodly automatically selects an index according to the attribute type.</li>|All except Calculated|
|Keyword index|This index is intended to facilitate fast searching of individual words inside of these attributes|string, text, image|
|Mandatory|Specifies that the attribute is mandatory and cannot be saved with the `null` value|All storage attributes|
|Max value|Minimum value allowed for the attribute. If the value entered is more than this property, an error is returned.|long, number|
|Min value|Minimum value allowed for the attribute. If the value entered is less than this property, an error is returned.|long, number|
|Reverse path|This option must be selected for a 1->N relation attribute|related 1->N|
|Scope|"Expose as REST" or "Do not expose as REST". An exposed attribute can be used from anywhere and its value can be displayed using REST requests. A not-exposed attribute can only be used by code called from inside the datastore class, including calculated attributes, functions, methods, and events, executed on the server. Select "Do not expose as REST" for attributes that should not be accessed directly, e.g. "salary".|All|
|Unique|Verifies that the value entered be unique. If not, an error is returned|string|


## Permissions  

This area allows you to define the permissions at the attribute level. Permissions can also be set at the dataclass and datastore levels.

Permissions are described in [this section](../roles.md). 
