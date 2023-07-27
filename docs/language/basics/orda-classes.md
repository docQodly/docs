---
id: orda-classes
title: Data Model Classes
---



ORDA allows you to create high-level class functions above the data model. this allows you to write business-oriented code and "publish" it just like an API. Datastore, dataclasses, entity selections, and entities are all available as class objects that can contain functions.

For example, you could create a `getNextWithHigherSalary()` function in the `cs.EmployeeEntity` class to return employees with a salary higher than the selected one. It would be as simple as calling:

```qs
nextHigh=ds.Employee.get(1).getNextWithHigherSalary()
```

Thanks to this feature, the entire business logic of your Qodly application can be stored as a independent layer so that it can be easily maintained and reused with a high level of security:

- You can "hide" the overall complexity of the underlying physical structure and only expose understandable and ready-to-use functions. 
- If the physical structure evolves, you can simply adapt function code and client applications will continue to call them transparently. 
- By default, all of your data model class functions (including [computed attribute functions](#computed-attributes)) are **not exposed** to remote calls. You must explicitly declare each public function with the [`exposed`](#exposed-vs-non-exposed-functions) keyword.

![](img/functions-schema.png)


## Architecture

ORDA provides **generic classes** exposed through a **`4D`** class store, as well as specific **user classes** (extending generic classes) exposed in the **`cs`** class store:

![](img/ClassDiagramImage.png)

All ORDA data model classes are exposed as properties of the **`cs`** class store. The following ORDA classes are available:

|Class|Example name|Instantiated by|
|---|---|---|
|cs.DataStore|cs.DataStore|[`ds`](../../language/DataStoreClass.md#ds) command|
|cs.*DataClassName*|cs.Employee|[`dataStore.DataClassName`](../../language/DataStoreClass.md#dataclassname), `dataStore["DataClassName"]`|
|cs.*DataClassName*Entity|cs.EmployeeEntity|[`dataClass.get()`](../../language/DataClassClass.md#get), [`dataClass.new()`](../../language/DataClassClass.md#new), [`entitySelection.first()`](../../language/EntitySelectionClass.md#first), [`entitySelection.last()`](../../language/EntitySelectionClass.md#last), [`entity.previous()`](../../language/EntityClass.md#previous), [`entity.next()`](../../language/EntityClass.md#next), [`entity.first()`](../../language/EntityClass.md#first), [`entity.last()`](../../language/EntityClass.md#last), [`entity.clone()`](../../language/EntityClass.md#clone)|
|cs.*DataClassName*Selection|cs.EmployeeSelection|[`dataClass.query()`](../../language/DataClassClass.md#query), [`entitySelection.query()`](../../language/EntitySelectionClass.md#query), [`dataClass.all()`](../../language/DataClassClass.md#all), [`dataClass.fromCollection()`](../../language/DataClassClass.md#fromcollection), [`dataClass.newSelection()`](../../language/DataClassClass.md#newselection), [`entitySelection.drop()`](../../language/EntitySelectionClass.md#drop), [`entity.getSelection()`](../../language/EntityClass.md#getselection), [`entitySelection.and()`](../../language/EntitySelectionClass.md#and), [`entitySelection.minus()`](../../language/EntitySelectionClass.md#minus), [`entitySelection.or()`](../../language/EntitySelectionClass.md#or), [`entitySelection.orderBy()`](../../language/EntitySelectionClass.md#or), [`entitySelection.orderByFormula()`](../../language/EntitySelectionClass.md#orderbyformula), [`entitySelection.slice()`](../../language/EntitySelectionClass.md#slice)|

Also, object instances from ORDA data model user classes benefit from their parent's properties and functions:

- a Datastore class object can call functions from the [ORDA Datastore generic class](../../language/DataStoreClass.md).
- a Dataclass class object can call functions from the [ORDA Dataclass generic class](../../language/DataClassClass.md).
- an Entity selection class object can call functions from the [ORDA Entity selection generic class](../../language/EntitySelectionClass.md).
- an Entity class object can call functions from the [ORDA Entity generic class](../../language/EntityClass.md).



## Class Description

### DataStore Class


A database exposes its own DataStore class in the `cs` class store. 

- **Extends**: 4D.DataStoreImplementation 
- **Class name**: cs.DataStore

You can create functions in the DataStore class that will be available through the `ds` object. 

#### Example

```qs  
// cs.DataStore class

extends DataStoreImplementation

exposed function getDesc
  return "Database exposing employees and their companies"
```


this function can then be called:

```qs
desc=ds.getDesc() //"Database exposing..."
```



### DataClass Class

Each dataclass offers a DataClass class in the `cs` class store.

- **Extends**: 4D.DataClass 
- **Class name**: cs.*DataClassName*
- **Example name**: cs.Employee



#### Example 1

```qs
// cs.Company class


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

[Computed attributes](#computed-attributes) are defined in the [Entity Class](#entity-class). 

:::

#### Example 2

Considering the following model (partial view):

![](img/structure3.png)

Zipcodes are used as primary keys of the *ZipCode* table. The many-to-one relation attribute between *cityID* and *ID* is named *city*.

The `City Class` provides an API:

```qs  
// cs.City class

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
- **Class name**: *DataClassName*Selection
- **Example name**: cs.EmployeeSelection


#### Example

```qs
// cs.EmployeeSelection class


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
- **Class name**: *DataClassName*Entity
- **Example name**: cs.CityEntity

#### Computed attributes

Entity classes allow you to define **computed attributes** using specific keywords:

- `function get` *attributeName*
- `function set` *attributeName*
- `function query` *attributeName*
- `function orderBy` *attributeName*

For more information, please refer to the [Computed attributes](#computed-attributes) section. 

#### Alias attributes

Entity classes allow you to define **alias attributes**, usually over related attributes, using the `alias` keyword:

`alias` *attributeName* *targetPath*

For information, please refer to the [Alias attributes](#alias-attributes) section. 


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

- Since they are both defined in the **cs** [class store](Concepts/classes.md#class-stores), do not give the same name to a dataclass and to a user class. If such a case occurs, the constructor of the user class becomes unusable. 
- Do not use a reserved name for a dataclass (e.g., "DataClass").
- When defining a class, make sure the [`extends`] statement exactly matches the parent class name (remember that they're case sensitive). For example, `extends EntitySelection` for an entity selection class.
- In an ORDA class, `this` designates the instance of the object matching the dataclass.
- You cannot instantiate a data model class object with the `new()` keyword (an error is returned). You must use a regular method as listed in the [`Instantiated by` column of the ORDA class table](#architecture).
- You cannot override a native ORDA class function from the **`4D`** [class store](Concepts/classes.md#class-stores) with a data model user class function.


## Computed attributes


### Overview

A computed attribute is a dataclass attribute with a data type that masks a calculation.

At the very minimum, a computed attribute requires a `get` function that describes how its value will be calculated. When a *getter* function is supplied for an attribute, ORDA does not create the underlying storage space in the datastore but instead substitutes the function's code each time the attribute is accessed. If the attribute is not accessed, the code never executes.

A computed attribute can also implement a `set` function, which executes whenever a value is assigned to the attribute. The *setter* function describes what to do with the assigned value, usually redirecting it to one or more storage attributes or in some cases other entities.

Just like storage attributes, computed attributes may be included in **queries**. By default, when a computed attribute is used in a ORDA query, the attribute is calculated once per entity examined. In some cases this is sufficient. However for better performance, especially in client/server, computed attributes can implement a `query` function that relies on actual dataclass attributes and benefits from their indexes.

Similarly, computed attributes can be included in **sorts**. When a computed attribute is used in a ORDA sort, the attribute is calculated once per entity examined. Just like in queries, computed attributes can implement an `orderBy` function that substitutes other attributes during the sort, thus increasing performance. 


### How to define computed attributes

You create a computed attribute by defining a `get` accessor in the [**entity class**](#entity-class) of the dataclass. The computed attribute will be automatically available in the dataclass attributes and in the entity attributes.

Other computed attribute functions (`set`, `query`, and `orderBy`) can also be defined in the entity class. They are optional.

Within computed attribute functions, `this` designates the entity. Computed attributes can be used and handled as any dataclass attribute, i.e. they will be processed by [entity class](../../language/EntityClass.md) or [entity selection class](../../language/EntitySelectionClass.md) functions. 

:::info

ORDA computed attributes are not [**exposed**](#exposed-vs-non-exposed-functions) by default. You expose a computed attribute by adding the `exposed` keyword to the **get function** definition.

:::

### `function get <attributeName>`

#### Syntax

```qs
{exposed} function get <attributeName>({event : object}) -> result : type
// code
```
The *getter* function is mandatory to declare the *attributeName* computed attribute. Whenever the *attributeName* is accessed, the `function get` code is evaluated and the *result* value is returned. 

> A computed attribute can use the value of other computed attribute(s). Recursive calls generate errors. 

The *getter* function defines the data type of the computed attribute thanks to the *result* parameter. The following resulting types are allowed:

- Scalar (string, boolean, date, time, number)
- object
- Image
- BLOB
- Entity (i.e. cs.EmployeeEntity)
- Entity selection (i.e. cs.EmployeeSelection)

The *event* parameter contains the following properties:

|Property|Type|Description|
|---|---|---|
|attributeName|string|Computed attribute name|
|dataClassName|string|Dataclass name|
|kind|string|"get"|
|result|variant|Optional. Add this property with null value if you want a scalar attribute to return null|


#### Examples

- *fullName* computed attribute:

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

- A computed attribute can be based upon an entity related attribute:

```qs
function get bigBoss(event : object)-> result: cs.EmployeeEntity
	result=this.manager.manager
    
```

- A computed attribute can be based upon an entity selection related attribute:

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
|attributeName|string|Computed attribute name|
|dataClassName|string|Dataclass name|
|kind|string|"set"|
|value|variant|Value to be handled by the computed attribute|

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

The `query` function executes whenever a query using the computed attribute is launched. It is useful to customize and optimize queries by relying on indexed attributes. When the `query` function is not implemented for a computed attribute, the search is always sequential (based upon the evaluation of all values using the `get <AttributeName>` function).

:::note

The following features are not supported:

- calling a `query` function on computed attributes of type Entity or Entity selection, 
- using the `order by` keyword in the resulting query string.

:::

The *event* parameter contains the following properties:

|Property|Type|Description|
|---|---|---|
|attributeName|string|Computed attribute name|
|dataClassName|string|Dataclass name|
|kind|string|"query"|
|value|variant|Value to be handled by the computed attribute|
|operator|string|Query operator (see also the [`query` class function](../../language/DataClassClass.md#query)). Possible values:<li>== (equal to, @ is wildcard)</li><li>=== (equal to, @ is not wildcard)</li><li>!= (not equal to, @ is wildcard)</li><li>!== (not equal to, @ is not wildcard)</li><li>< (less than)</li><li><= (less than or equal to)</li><li>> (greater than)</li><li>>= (greater than or equal to)</li><li>IN (included in)</li><li>% (contains keyword)</li>|
|result|variant|Value to be handled by the computed attribute. Pass `null` in this property if you want to execute a default query (always sequential for computed attributes).|

> If the function returns a value in *result* and another value is assigned to the `event.result` property, the priority is given to `event.result`. 

#### Examples

- Query on the *fullName* computed attribute. 

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

> Keep in mind that using placeholders in queries based upon user text input is recommended for security reasons (see [`query()` description](../../language/DataClassClass.md#query)).

Calling code, for example:

```qs
emps=ds.Employee.query("fullName = :1", "Flora Pionsin")
```

- This function handles queries on the *age* computed attribute and returns an object with parameters:

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

The `orderBy` function executes whenever the computed attribute needs to be ordered. It allows sorting the computed attribute. For example, you can sort *fullName* on first names then last names, or conversely.
When the `orderBy` function is not implemented for a computed attribute, the sort is always sequential (based upon the evaluation of all values using the `get <AttributeName>` function).

:::info

Calling an `orderBy` function on computed attributes of type Entity class or Entity selection class **is not supported**. 

:::

The *event* parameter contains the following properties:

|Property|Type|Description|
|---|---|---|
|attributeName|string|Computed attribute name|
|dataClassName|string|Dataclass name|
|kind|string|"orderBy"|
|value|variant|Value to be handled by the computed attribute|
|operator|string|"desc" or "asc" (default)|
|descending|boolean|`true` for descending order, `false` for ascending order|
|result|variant|Value to be handled by the computed attribute. Pass `null` if you want to let Qodly execute the default sort.|

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

## Alias attributes

### Overview

An **alias** attribute is built above another attribute of the data model, named **target** attribute. The target attribute can belong to a related dataclass (available through any number of relation levels) or to the same dataclass. An alias attribute stores no data, but the path to its target attribute. You can define as many alias attributes as you want in a dataclass. 

Alias attributes are particularly useful to handle N to N relations. They bring more readability and simplicity in the code and in queries by allowing to rely on business concepts instead of implementation details.

### How to define alias attributes

You create an alias attribute in a dataclass by using the `alias` keyword in the [**entity class**](#entity-class) of the dataclass. 


### `alias <attributeName> <targetPath>`


#### Syntax

```
{exposed} alias <attributeName> <targetPath>
```

*attributeName* must comply with [standard rules for property names](../../language/basics/lang-identifiers.md#object-properties). 

*targetPath* is an attribute path containing one or more levels, such as "employee.company.name". If the target attribute belongs to the same dataclass, *targetPath* is the attribute name. 

An alias can be used as a part of a path of another alias. 

A [computed attribute](#computed-attributes) can be used in an alias path, but only as the last level of the path, otherwise, an error is returned. For example, if "fullName" is a computed attribute, an alias with path "employee.fullName" is valid. 

> ORDA alias attributes are **not exposed** by default. You must add the [`exposed`](#exposed-vs-non-exposed-functions) keyword before the `alias` keyword if you want the alias to be available from the Web.


### Using alias attributes

Alias attributes are read-only (except when based upon a scalar attribute of the same dataclass, see the last example below). They can be used instead of their target attribute path in class functions such as:

* `dataClass.query()`, `entitySelection.query()`
* `entity.toobject()`
* `entitySelection.toCollection()`
* `entitySelection.extract()`
* `entitySelection.orderBy()`
* `entitySelection.orderByFormula()`
* `entitySelection.average()`
* `entitySelection.count()`
* `entitySelection.distinct()`
* `entitySelection.sum()`
* `entitySelection.min()`
* `entitySelection.max()`
* `entity.diff()`
* `entity.touchedAttributes()`



### Alias properties

Alias attribute [`kind`](../../language/DataClassClass.md#attributename) is "alias".  

An alias attribute inherits its data [`type`](../../language/DataClassClass.md#attributename) property from the target attribute: 

- if the target attribute [`kind`](../../language/DataClassClass.md#attributename) is "storage", the alias data type is of the same type,
- if the target attribute [`kind`](../../language/DataClassClass.md#attributename) is "relatedEntity" or "relatedEntities", the alias data type is of the `4D.Entity` or `4D.EntitySelection` type ("*classname*Entity" or "*classname*Selection"). 

Alias attributes based upon relations have a specific [`path`](../../language/DataClassClass.md#attributename) property, containing the path of their target attributes. Alias attributes based upon attributes of the same dataclass have the same properties as their target attributes (and no `path` property). 


### Examples

Considering the following model:

![alias](img/alias1.png)


In the Teacher dataclass, an alias attribute returns all students of a teacher:

```qs
// cs.TeacherEntity class

extends Entity

alias students courses.student //relatedEntities 
```

In the Student dataclass, an alias attribute returns all teachers of a student:

```qs
// cs.StudentEntity class

extends Entity

alias teachers courses.teacher //relatedEntities 
```

In the Course dataclass:

- an alias attribute returns another label for the "name" attribute
- an alias attribute returns the teacher name
- an alias attribute returns the student name


```qs
// cs.CourseEntity class

extends Entity

exposed alias courseName name //scalar 
exposed alias teacherName teacher.name //scalar value
exposed alias studentName student.name //scalar value

```

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




## Exposed vs non-exposed functions

For security reasons, all of your data model class functions are **not exposed** (i.e., private) by default to web requests. 

A function that is not exposed is not available from web requests and cannot be called on any object instance. You define non-exposed functions (as well as dataclasses or attributes) if you want them to be only available on the server through local code. If a web request tries to access a non-exposed function, the "-10729 - Unknown member method" error is returned. 

To allow a data model class function to be called by a remote request, you must explicitly declare it using the `exposed` keyword. The formal syntax is:

```qs  
// declare an exposed function
exposed function <functionName>   
```

:::note

The `exposed` keyword can only be used with Data model class functions. If used with a [regular user class](../../language/basics/lang-classes.md) function, it is ignored.

:::

### Example 

You want an exposed function to use a private function in a dataclass class:

```qs
extends DataClass

//Public function
exposed function registerNewStudent(student : object) -> status : object

var entity : cs.StudentsEntity

entity=ds.Students.new()
entity.fromObject(student)
entity.school=this.query("name=:1", student.schoolName).first()
entity.idNumber=this.computeIDNumber()
status=entity.save()

//Not exposed (private) function
function computeIDNumber()-> id : integer
//compute a new ID number
id=...

```

When the code is called:

```qs
var student , status : object
var id : integer

student=newObject("firstname", "Mary", "lastname", "Smith", "schoolName", "Math school")

status=ds.Schools.registerNewStudent(student) //can be called from a web request
// id=ds.Schools.computeIDNumber() // Error "Unknown member method" if called from a web request 
```

