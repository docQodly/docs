---
id: DataClassClass
title: DataClass
---



A [DataClass](../orda/data-model.md#dataclass) provides an object interface to a database table. All dataclasses in a Qodly application are available as a property of the `ds` [datastore](../orda/data-model.md#datastore).



### Functions and properties

||
|---|
|[<!-- INCLUDE #DataClassClass.all().Syntax -->](#all)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.all().Summary -->|
|[<!-- INCLUDE DataClassClass.attributeName.Syntax -->](#attributename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassClass.attributeName.Summary --> |
|[<!-- INCLUDE #DataClassClass.fromCollection().Syntax -->](#fromcollection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.fromCollection().Summary --> |
|[<!-- INCLUDE #DataClassClass.get().Syntax -->](#get)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.get().Summary --> |
|[<!-- INCLUDE #DataClassClass.getCount().Syntax -->](#getcount)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.getCount().Summary --> |
|[<!-- INCLUDE #DataClassClass.getDataStore().Syntax -->](#getdatastore)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.getDataStore().Summary -->|
|[<!-- INCLUDE #DataClassClass.getInfo().Syntax -->](#getinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.getInfo().Summary -->|
|[<!-- INCLUDE #DataClassClass.new().Syntax -->](#new)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.new().Summary --> |
|[<!-- INCLUDE #DataClassClass.newSelection().Syntax -->](#newselection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.newSelection().Summary --> |
|[<!-- INCLUDE #DataClassClass.query().Syntax -->](#query)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataClassClass.query().Summary --> |


<!-- REF DataClassClass.all().Desc -->
## .all()

<!-- REF #DataClassClass.all().Syntax -->
**.all**() : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.all().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.EntitySelection|&#8592;|References on all entities related to the Dataclass|
<!-- END REF -->


#### Description

The `.all()` function <!-- REF #DataClassClass.all().Summary -->queries the datastore to find all the entities related to the dataclass and returns them as an entity selection<!-- END REF -->.

The entities are returned in the default order, which is initially the order in which they were created. Note however that, if entities have been deleted and new ones added, the default order does not reflect the creation order anymore.

If no corresponding entity is found, an empty entity selection is returned.

Lazy loading is applied.


#### Example

```qs
 var allEmp : cs.EmployeeSelection
 allEmp = ds.Employee.all()
```


<!-- END REF -->

<!-- REF DataClassClass.attributeName.Desc -->
## .*attributeName*


<!-- REF DataClassClass.attributeName.Syntax -->***.attributeName*** : object<!-- END REF -->

#### Description

The attributes of dataclasses are <!-- REF DataClassClass.attributeName.Summary -->objects that are available directly as properties<!-- END REF --> of these classes.

The returned objects have properties that you can read to get information about your dataclass attributes.

>Dataclass attribute objects can be modified, but the underlying model will not be altered.

#### Returned object

Returned attribute objects contain the following properties:

|Property|Type|Description|
|---|---|---|
|autoFilled|boolean|True if the attribute value is automatically filled by Qodly. Corresponds to the **autosequence** model attribute property. Not returned if `.kind` = "relatedEntity" or "relatedEntities". |
|exposed|boolean|True if the attribute is exposed in REST|
|fieldNumber|integer|Internal Qodly database field number of the attribute. Not returned if `.kind` = "relatedEntity" or "relatedEntities". |
|fieldType|integer|Qodly database field type of the attribute. Depends on the attribute `kind`. Possible values: <li>if `.kind` = "storage": corresponding Qodly database field type./commands/valueType.md</li><li>if `.kind` = "relatedEntity": 38 (`is object`)</li><li>if `.kind` = "relatedEntities": 42 (`is collection`)</li><li>if `.kind` = "calculated": same as above, depending on the result</li>|
|indexed|boolean|True if there is a B-tree or a Cluster B-tree index on the attribute. Not returned if `.kind` = "relatedEntity" or "relatedEntities". |
|inverseName|string|Name of the attribute which is at the other side of the relation. Returned only when `.kind` = "relatedEntity" or "relatedEntities".|
|keywordIndexed|boolean|True if there is a keyword index on the attribute. Not returned if `.kind` = "relatedEntity" or "relatedEntities". |
|kind|string|Category of the attribute. Possible values:<li>"storage": storage (or scalar) attribute, i.e. attribute storing a value, not a reference to another attribute</li><li>"calculated": computed attribute, i.e. defined through a [`get` function](./basics/lang-classes.md#function-get-and-function-set).</li><li>"relatedEntity": N -> 1 relation attribute (reference to an entity)</li><li>"relatedEntities": 1 -> N relation attribute (reference to an entity selection)</li>|
|mandatory|boolean|True if null value input is rejected for the attribute. Not returned if `.kind` = "relatedEntity" or "relatedEntities". |
|name|string|Name of the attribute as string|
|readOnly|boolean|True if the attribute is read-only. For example, computed attributes without [`set` function](./basics/lang-classes.md#function-get-and-function-set) are read-only.|
|relatedDataClass|string|Name of the dataclass related to the attribute. Returned only when `.kind` = "relatedEntity" or "relatedEntities".|
|type|string|Conceptual value type of the attribute, useful for generic programming. Depends on the attribute `kind`. Possible values: <li>if `.kind` = "storage": "blob", "bool", "date", "image", "number", "object", or "string". "number" is returned for any numeric types including duration; "string" is returned for uuid, string and text attribute types; "blob" attributes are [blob objects](basics/lang-blob.md).</li><li>if `.kind` = "relatedEntity": related dataClass name</li><li>if `.kind` = "relatedEntities": related dataClass name + "Selection" suffix</li><li>if `.kind` = "calculated": same as above, depending on the result</li>|
|unique|boolean|True if the attribute value must be unique. Not returned if `.kind` = "relatedEntity" or "relatedEntities".|

:::tip

For generic programming, use `bool(attributeName.property)` or `num(attributeName.property)` or `string(attributeName.property)` (depending on the property type) to get a valid value even if the property is not returned.

:::

#### Example 1

```qs
salary = ds.Employee.salary //returns the salary attribute in the Employee dataclass
compCity = ds.Company["city"] //returns the city attribute in the Company dataclass
```

#### Example 2

Considering the following database structure:

![](img/structure.png)

```qs
var firstnameAtt,employerAtt,employeesAtt : object

 firstnameAtt = ds.Employee.firstName
  //{name:firstName,kind:storage,fieldType:0,type:string,fieldNumber:2,indexed:true,
  //keyWordIndexed:false,autoFilled:false,mandatory:false,unique:false}

 employerAtt = ds.Employee.employer
  //{name:employer,kind:relatedEntity,relatedDataClass:Company,
  //fieldType:38,type:Company,inverseName:employees}
  //38 = Is object

 employeesAtt = ds.Company.employees
  //{name:employees,kind:relatedEntities,relatedDataClass:Employee,
  //fieldType:42,type:EmployeeSelection,inverseName:employer}
  //42 = Is collection
```


<!-- END REF -->




<!-- REF DataClassClass.fromCollection().Desc -->
## .fromCollection()


<!-- REF #DataClassClass.fromCollection().Syntax -->
**.fromCollection**( *objectCol* : collection ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #DataClassClass.fromCollection().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|objectCol |collection|&#8594;|collection of objects to be mapped with entities|
|Result|4D.EntitySelection|&#8592;|Entity selection filled from the collection|
<!-- END REF -->


#### Description

The `.fromCollection()` function <!-- REF #DataClassClass.fromCollection().Summary -->updates or creates entities in the dataclass according to the *objectCol* collection of objects, and returns the corresponding entity selection<!-- END REF -->.  

In the *objectCol* parameter, pass a collection of objects to create new or update existing entities of the dataclass. The property names must be the same as attribute names in the dataclass. If a property name does not exist in the dataclass, it is ignored. If an attribute value is not defined in the collection, its value is null.

The mapping between the objects of the collection and the entities is done on the **attribute names** and **matching types**. If an object's property has the same name as an entity's attribute but their types do not match, the entity's attribute is not filled.

**Create or update mode**

For each object of *objectCol*:

*	If the object contains a boolean property "\_\_NEW" set to false (or does not contain a boolean "\_\_NEW" property), the entity is updated or created with the corresponding values of the properties from the object. No check is performed in regards to the primary key:
	*	If the primary key is given and exists, the entity is updated. In this case, the primary key can be given as is or with a "\_\_KEY" property (filled with the primary key value).
	*	If the primary key is given (as is) and does not exist, the entity is created
	*	If the primary key is not given, the entity is created and the primary key value is assigned with respect to standard database rules.
*	If the object contains a boolean property "\_\_NEW" set to **true**, the entity is created with the corresponding values of the attributes from the object. A check is performed in regards to the primary key:
	*	If the primary key is given (as is) and exists, an error is sent
	*	If the primary key is given (as is) and does not exist, the entity is created
	*	If the primary is not given, the entity is created and the primary key value is assigned with respect to standard database rules.

	>The "\_\_KEY" property containing a value is taken into account only when the "\_\_NEW" property is set to **false** (or is omitted) and a corresponding entity exists. In all other cases, the "\_\_KEY" property value is ignored, primary key value must be passed "as is".

**Related entities**

The objects of *objectCol* may contain one or more nested object(s) featuring one or more related entities, which can be useful to create or update links between entities.

The nested objects featuring related entities must contain a "\_\_KEY" property (filled with the primary key value of the related entity) or the primary key attribute of the related entity itself. The use of a \_\_KEY property allows independence from the primary key attribute name.

>The content of the related entities cannot be created/updated through this mechanism.

**Stamp**

If a \_\_STAMP attribute is given, a check is performed with the stamp in the datastore and an error can be returned ("Given stamp does not match current one for record# XX of table XXXX"). For more information, see [Entity locking](../orda/data.md#entity-locking).


#### Example 1

We want to update an existing entity. The \_\_NEW property is not given, the employee primary key is given and exists:

```qs
 var empsCollection : collection
 var emp : object
 var employees : cs.EmployeeSelection

 empsCollection = newCollection()
 emp = newObject()
 emp.ID = 668 //Existing PK in Employee table
 emp.firstName = "Arthur"
 emp.lastName = "Martin"
 emp.employer = newObject("ID",121) //Existing PK in the related dataClass Company
  // For this employee, we can change the Company by using another existing PK in the related dataClass Company
 empsCollection.push(emp)
 employees = ds.Employee.fromCollection(empsCollection)
```

#### Example 2

We want to update an existing entity. The \_\_NEW property is not given, the employee primary key is given with the \_\_KEY attribute and exists:

```qs
 var empsCollection : collection
 var emp : object
 var employees : cs.EmployeeSelection

 empsCollection = newCollection()
 emp = newObject()
 emp.__KEY = 1720 //Existing PK in Employee table
 emp.firstName = "John"
 emp.lastName = "Boorman"
 emp.employer = newObject("ID";121) //Existing PK in the related dataClass Company
  // For this employee, we can change the Company by using another existing PK in the related dataClass Company
 empsCollection.push(emp)
 employees = ds.Employee.fromCollection(empsCollection)
```

#### Example 3

We want to simply create a new entity from a collection:

```qs
 var empsCollection : collection
 var emp : object
 var employees : cs.EmployeeSelection

 empsCollection = newCollection()
 emp = newObject()
 emp.firstName = "Victor"
 emp.lastName = "Hugo"
 empsCollection.push(emp)
 employees = ds.Employee.fromCollection(empsCollection)
```

#### Example 4

We want to create an entity. The \_\_NEW property is True, the employee primary key is not given:

```qs
 var empsCollection : collection
 var emp : object
 var employees : cs.EmployeeSelection

 empsCollection: = newCollection()
 emp = newObject()
 emp.firstName = "Mary"
 emp.lastName = "Smith"
 emp.employer = newObject("__KEY";121) //Existing PK in the related dataClass Company
 emp.__NEW = true
 empsCollection.push(emp)
 employees = ds.Employee.fromCollection(empsCollection)


```

#### Example 5

We want to create an entity. The \_\_NEW property is omitted, the employee primary key is given and does not exist:

```qs
 var empsCollection : collection
 var emp : object
 var employees : cs.EmployeeSelection

 empsCollection = newCollection()
 emp = newObject()
 emp.ID = 10000 //Unexisting primary key
 emp.firstName = "Françoise"
 emp.lastName = "Sagan"
 empsCollection.push(emp)
 employees = ds.Employee.fromCollection(empsCollection)
```

#### Example 6

In this example, the first entity will be created and saved but the second will fail since they both use the same primary key:

```qs
 var empsCollection : collection
 var emp, emp2 : object
 var employees : cs.EmployeeSelection

 empsCollection = newCollection()
 emp = newObject()
 emp.ID = 10001 // Unexisting primary key
 emp.firstName = "Simone"
 emp.lastName = "Martin"
 emp.__NEW = true
 empsCollection.push(emp)

 emp2 = newObject()
 emp2.ID = 10001 // Same primary key, already existing
 emp2.firstName = "Marc"
 emp2.lastName = "Smith"
 emp2.__NEW = true
 empsCollection.push(emp2)
 employees = ds.Employee.fromCollection(empsCollection)
  //first entity is created
  //duplicated key error for the second entity
```

#### See also

[**.toCollection()**](EntitySelectionClass.md#tocollection-)

<!-- END REF -->


<!-- REF DataClassClass.get().Desc -->
## .get()   

<!-- REF #DataClassClass.get().Syntax -->
**.get**( *primaryKey* : integer ) : 4D.Entity<br/>**.get**( *primaryKey* : string ) : 4D.Entity<!-- END REF -->


<!-- REF #DataClassClass.get().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|primaryKey |integer OR string|&#8594;|Primary key value of the entity to retrieve|
|Result|4D.Entity|&#8592;|Entity matching the designated primary key|
<!-- END REF -->

#### Description

The `.get()` function <!-- REF #DataClassClass.get().Summary -->queries the dataclass to retrieve the entity matching the *primaryKey* parameter<!-- END REF -->.

In *primaryKey*, pass the primary key value of the entity to retrieve. The value type must match the primary key type set in the datastore (integer or string). You can also make sure that the primary key value is always returned as string by using the [`.getKey()`](EntityClass.md#getkey) function with the `kKeyAsString` parameter.

If no entity is found with *primaryKey*, a **null** entity is returned.

Lazy loading is applied, which means that related data is loaded from disk only when it is required.


#### Example

```qs
 var entity : cs.EmployeeEntity  
 var entity2 : cs.InvoiceEntity
 entity = ds.Employee.get(167) // return the entity whose primary key value is 167
 entity2 = ds.Invoice.get("DGGX20030") // return the entity whose primary key value is "DGGX20030"
```


<!-- END REF -->


<!-- REF DataClassClass.getCount.Desc -->
## .getCount()

<!-- REF #DataClassClass.getCount().Syntax -->
**.getCount()** : integer <!-- END REF -->

<!-- REF #DataClassClass.getCount().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|result|integer|&#8592;|Number of entities in the dataclass|
<!-- END REF -->

#### Description

The `.getCount()` function <!-- REF #DataClassClass.getCount().Summary --> returns the number of entities in a dataclass<!-- END REF -->.

If this function is used within a transaction, entities created during the transaction will be taken into account.

#### Example

```qs
var number : integer
number = ds.Persons.getCount()
```

<!-- END REF -->


<!-- REF DataClassClass.getDataStore().Desc -->
## .getDataStore()


<!-- REF #DataClassClass.getDataStore().Syntax -->
**.getDataStore()** : cs.DataStore<!-- END REF -->

<!-- REF #DataClassClass.getDataStore().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|cs.DataStore|&#8592;|Datastore of the dataclass|
<!-- END REF -->


#### Description

The `.getDataStore()` function <!-- REF #DataClassClass.getDataStore().Summary -->returns the datastore for the specified dataclass<!-- END REF -->.

The main datastore is returned by the `ds` command.

#### Example

The `SearchDuplicate` project method searches for duplicated values in any dataclass.

```qs
 var pet : cs.CatsEntity
 pet = ds.Cats.all().first() //get an entity
 SearchDuplicate(pet,"Dogs")
```

```qs
  // SearchDuplicate method
  // SearchDuplicate(entity_to_search,dataclass_name)

 declare (pet : object , dataClassName : string)
 var dataStore,duplicates : object  

 dataStore = pet.getDataClass().getDataStore()
 duplicates = dataStore[dataClassName].query("name = :1",pet.name)
```

<!-- END REF -->



<!-- REF DataClassClass.getInfo().Desc -->
## .getInfo()


<!-- REF #DataClassClass.getInfo().Syntax -->
**.getInfo()** : object <!-- END REF -->

<!-- REF #DataClassClass.getInfo().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|object|&#8592;|Information on the dataclass|
<!-- END REF -->


#### Description

The `.getInfo()` function <!-- REF #DataClassClass.getInfo().Summary -->returns an object providing information about the dataclass<!-- END REF -->. this function is useful for setting up generic code.

**Returned object**

|Property|	Type|	Description|
|---|---|---|
|name|	string	|Name of the dataclass|
|primaryKey	|string|	Name of the primary key of the dataclass|
|tableNumber|integer|	Internal 4D table number|



#### Example 1

```qs
 declare (entity : object)  
 var status : object
 var info : string

 computeEmployeeNumber(entity) //do some actions on entity

 status = entity.save()
 if(status.success)
    info = "Record updated in table "+entity.getDataClass().getInfo().name
 end
```

#### Example 2  

```qs
 var settings : object
 var es : cs.ClientsSelection

 settings = newObject()
 settings.parameters = newObject("receivedIds",getIds())
 settings.attributes = newObject("pk",ds.Clients.getInfo().primaryKey)
 es = ds.Clients.query(":pk in :receivedIds",settings)
```

#### Example 3

```qs
 var pk : string
 var dataClassAttribute : object

 pk = ds.Employee.getInfo().primaryKey
 dataClassAttribute = ds.Employee[pk] //If needed the attribute matching the primary key is accessible
```

<!-- END REF -->



<!-- REF DataClassClass.new().Desc -->
## .new()

<!-- REF #DataClassClass.new().Syntax -->
**.new()** : 4D.Entity <!-- END REF -->

<!-- REF #DataClassClass.new().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|4D.Entity|&#8592;|New entity matching the Dataclass|
<!-- END REF -->


#### Description

The `.new()` function <!-- REF #DataClassClass.new().Summary -->creates in memory and returns a new blank entity related to the Dataclass<!-- END REF -->.

The entity object is created in memory and is not saved in the database until the [`.save()`](EntityClass.md#save) function is called. If the entity is deleted before being saved, it cannot be recovered.

All attributes of the entity are initialized with the **null** value. If the primary key of the dataclass is autoincremented, it will be calculated when the entity is saved on the server.


#### Example

this example creates a new entity in the "Log" Dataclass and records information in the "info" attribute:

```qs
 var entity : cs.LogEntity
 entity = ds.Log.new() //create a reference
 entity.info = "New entry" //store some information
 entity.save() //save the entity
```

<!-- END REF -->




<!-- REF DataClassClass.newSelection().Desc -->
## .newSelection()


<!-- REF #DataClassClass.newSelection().Syntax -->
**.newSelection**( \{ *keepOrder* : integer \} ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.newSelection().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|keepOrder |integer |&#8594; |`kKeepOrdered`: creates an ordered entity selection,<br/>`kNonOrdered`: creates an unordered entity selection (default if omitted) |
|Result|4D.EntitySelection|&#8592;|New blank entity selection related to the dataclass|
<!-- END REF -->


#### Description

The `.newSelection( )` function <!-- REF #DataClassClass.newSelection().Summary -->creates a new, blank, non-shareable entity selection, related to the dataclass, in memory<!-- END REF -->.

If you want to create an ordered entity selection, pass the `kKeepOrdered` selector in the *keepOrder* parameter. By default if you omit this parameter, or if you pass the `kNonOrdered` selector, the method creates an unordered entity selection. Unordered entity selections are faster but you cannot rely on entity positions. For more information, please see [Ordered vs Unordered entity selections](../orda/data-model.md#ordered-or-unordered-entity-selection).

When created, the entity selection does not contain any entities (`mySelection.length` returns 0). this method lets you build entity selections gradually by making subsequent calls to the [`add()`](EntitySelectionClass.md#add) function.


#### Example


```qs
 var USelection,OSelection : cs.EmployeeSelection
 USelection = ds.Employee.newSelection() //create an unordered empty entity selection
 OSelection = ds.Employee.newSelection(kKeepOrdered) //create an ordered empty entity selection
```


<!-- END REF -->



<!-- REF DataClassClass.query().Desc -->
## .query()

<!-- REF #DataClassClass.query().Syntax -->
**.query**( *queryString* : string \{ , *...value* : any \} \{ , *querySettings* : object \} ) : 4D.EntitySelection <br/>**.query**( *formula* : object \{ , *querySettings* : object \} ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.query().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|queryString |string |&#8594; |Search criteria as string|
|formula |object |&#8594; |Search criteria as formula object|
|value|any|&#8594;|Value(s) to use for indexed placeholder(s)|
|querySettings|object|&#8594;|Query options: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan|
|Result|4D.EntitySelection|&#8592;|New entity selection made up of entities from dataclass meeting the search criteria specified in *queryString* or *formula*|
<!-- END REF -->


#### Description

The `.query()` function <!-- REF #DataClassClass.query().Summary -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s)<!-- END REF -->, for all the entities in the dataclass, and returns a new object of type `EntitySelection` containing all the entities that are found. Lazy loading is applied.

If no matching entities are found, an empty `EntitySelection` is returned.

#### *queryString* parameter

The *queryString* parameter uses the following syntax:

```
attributePath|formula comparator value   
	{logicalOperator attributePath|formula comparator value}   
	{order by attributePath {desc | asc}}
```

where:

*	**attributePath**: path of attribute on which you want to execute the query. this parameter can be a simple name (for example "country") or any valid attribute path (for example "country.name".) In case of an attribute path whose type is `collection`, \[] notation is used to handle all the occurences (for example "children\[].age"). You can also use a **placeholder** (see below).

	>*You cannot use directly attributes whose name contains special characters such as ".", "\[]", or " = ", ">", "#"..., because they will be incorrectly evaluated in the query string. If you need to query on such attributes, you must consider using placeholders, which allow an extended range of characters in attribute paths (see* **Using placeholders** *below).*

*	**formula**: a valid formula passed as `string` or `object`. The formula will be evaluated for each processed entity and must return a boolean value. Within the formula, the entity is available through the `this` object.  

	*	**string**: the formula string must be preceeded by the `eval( )` statement, so that the query parser evaluates the expression correctly. For example: *"eval(length(this.lastname) >= 30)"*
	*	**object**: the [formula object](FunctionClass.md) is passed as a **placeholder** (see below). The formula must have been created using the [`formula`](commands/formula.md) or [`formulaFromString`](commands/formulaFromString.md) command.

	>* Keep in mind that formulas only support `&` and `|` symbols as logical operators.
	>* If the formula is not the only search criteria, the query engine optimizer could prior process other criteria (e.g. indexed attributes) and thus, the formula could be evaluated for only a subset of entities.   

	Formulas in queries can receive parameters through `$1`. this point is detailed in the **formula parameter** paragraph below.

	>*	You can also pass directy a `formula` parameter object instead of the *queryString* parameter (recommended when formulas are more complex). See **formula parameter** paragraph below.
	>*	For security reasons, formula calls within `query()` methods can be disallowed. See *querySettings* parameter description.

*	**comparator**: symbol that compares *attributePath* and *value*. The following symbols are supported:

	|Comparison|	Symbol(s)|	Comment|
	|---|---|---|
	|Equal to	| == ,  = 	|Gets matching data, supports the wildcard (@), neither case-sensitive nor diacritic.|
	|| === , IS|	Gets matching data, considers the @ as a standard character, neither case-sensitive nor diacritic|
	|Not equal to|	 != , #	|Supports the wildcard (@)|
	|| !== , IS NOT|	Considers the @ as a standard character|
	|Less than|	&lt;|	|
	|Greater than|	>;	||
	|Less than or equal to|	  &lt;= ||
	|Greater than or equal to|	>;= 	||
	|Included in|	IN	|Gets data equal to at least one of the values in a collection or in a set of values, supports the wildcard (@)|
	|Not condition applied on a statement|	NOT|	Parenthesis are mandatory when NOT is used before a statement containing several operators|
	|Contains keyword|	%|	Keywords can be used in attributes of string or picture type|

*	**value**: the value to compare to the current value of the property of each entity in the entity selection. It can be a **placeholder** (see **Using placeholders** below) or any expression matching the data type property. When using a constant value, the following rules must be respected:
	*	**text** type constant can be passed with or without simple quotes (see **Using quotes** below). To query a string within a string (a "contains" query), use the wildcard symbol (@) in value to isolate the string to be searched for as shown in this example: "@Smith@". The following keywords are forbidden for text constants: true, false.
	*	**boolean** type constants: **true** or **false** (case sensitive).
	*	**numeric** type constants: decimals are separated by a '.' (period).
    * **date type constants** : "YYYY-MM-DD" format
	*	**null** constant: using the "null" keyword will find **null** and **undefined** properties.  
	*	in case of a query with an IN comparator, value must be a collection, or values matching the type of the attribute path between \[] separated by commas (for strings, " characters must be escaped with "\").

*	**logicalOperator**: used to join multiple conditions in the query (optional). You can use one of the following logical operators (either the name or the symbol can be used):

	|Conjunction|Symbol(s)|
	|---|---|
	|AND|&, &&, and|
	|OR | &#124;,&#124;&#124;, or|

*	**order by attributePath**: you can include an order by *attributePath* statement in the query so that the resulting data will be sorted according to that statement. You can use multiple order by statements, separated by commas (e.g., order by *attributePath1* desc, *attributePath2* asc). By default, the order is ascending. Pass 'desc' to define a descending order and 'asc' to define an ascending order.
	> If you use this statement, the returned entity selection is ordered (for more information, please refer to [Ordered vs Unordered entity selections](../orda/data-model.md#ordered-or-unordered-entity-selection).

#### Using quotes

When you use quotes within queries, you must use single quotes ' ' inside the query and double quotes " " to enclose the whole query, otherwise an error is returned. For example:

```
"employee.name = 'smith' AND employee.firstname = 'john'"
```

> Single quotes (') are not supported in searched values since they would break the query string. For example "comp.name = 'John's pizza' " will generate an error. If you need to search on values with single quotes, you may consider using placeholders (see below).

#### Using parenthesis

You can use parentheses in the query to give priority to the calculation. For example, you can organize a query as follows:

```
"(employee.age >=  30 OR employee.age <= 65) AND (employee.salary <= 10000 OR employee.status  ==  'Manager')"
```


#### Using placeholders

Qodly allows you to use placeholders for *attributePath*, *formula* and *value* arguments within the *queryString* parameter. A placeholder is a parameter that you insert in query strings and that is replaced by another value when the query string is evaluated. The value of placeholders is evaluated once at the beginning of the query; it is not evaluated for each element.

Two types of placeholders can be used: **indexed placeholders** and **named placeholders**:

|-	|Indexed placeholders|	Named placeholders|
|---|---|---|
|Definition	|Parameters are inserted as :paramIndex (for example :1, :2...) in *queryString* and their corresponding values are provided by the sequence of value parameter(s). You can use up to 128 value parameters|	Parameters are inserted as :paramName (for example :myparam) and their values are provided in the attributes and/or parameters objects in the *querySettings* parameter|
|Example|`r = class.query(":1 = :2","city","Chicago")`| `o.attributes = {att:"city"}`<br/>` o.parameters = {name:"Chicago"}`<br/>` r = class.query(":att = :name",o)`|

You can mix all argument kinds in *queryString*. A *queryString* can contain, for *attributePath*, *formula* and *value* parameters:

*	direct values (no placeholders),
*	indexed placeholders and/or named placeholders.

**Using placeholders in queries is recommended** for the following reasons:

1.	It prevents malicious code insertion: if you directly use user-filled variables within the query string, a user could modifiy the query conditions by entering additional query arguments. For example, imagine a query string like:

	```qs
	 vquery = "status  ==  'public' & name  ==  "+myname //user enters their name
	 result = col.query(vquery)
	```

	this query seems secured since non-public data are filtered. However, if the user enters in the *myname* area something like *"smith OR status = 'private'*, the query string would be modified at the interpretation step and could return private data.

	When using placeholders, overriding security conditions is not possible:

	```qs
	 result = col.query("status == 'public' & name == :1",myname)
	```

	In this case if the user enters *smith OR status = 'private'* in the *myname* area, it will not be interpreted in the query string, but only passed as a value. Looking for a person named "smith OR status = 'private'" will just fail.

2.	It prevents having to worry about formatting or character issues, especially when handling *attributePath* or *value* parameters that might contain non-alphanumeric characters such as ".", "['...

3.	It allows the use of variables or expressions in query arguments. Examples:

	```qs
 	result = col.query("address.city  ==  :1 & name  = :2",city,myVar+"@")
	result2 = col.query("company.name  ==  :1","John's Pizzas")
	```

#### Looking for null values

When you look for null values, you cannot use the placeholder syntax because the query engine considers null as an unexpected comparison value. For example, if you execute the following query:

```qs
vSingles = ds.Person.query("spouse  ==  :1",null) // will NOT work
```

You will not get the expected result because the null value will be evaluated by Qodly as an error resulting from the parameter evaluation (for example, an attribute coming from another query). For these kinds of queries, you must use the direct query syntax:

```qs
vSingles = ds.Person.query("spouse  ==  null") //correct syntax
```


#### Linking collection attribute query arguments

When searching in collections within object attributes using multiple query arguments joined by the AND operator, you may want to make sure that only entities containing elements that match all arguments are returned, and not entities where arguments can be found in different elements. To do this, you need to link query arguments to collection elements, so that only single elements containing linked arguments are found.

For example, with the following two entities:

```
Entity 1:
ds.People.name: "martin"
ds.People.places:
    { "locations" : [ {
                "kind":"home",
                "city":"paris"
            } ] }

Entity 2:
ds.People.name: "smith"
ds.People.places:
    { "locations" : [ {
                "kind":"home",
                "city":"lyon"
            } , {
                "kind":"office",
                "city":"paris"
            } ] }
```

You want to find people with a "home" location kind in the city "paris". If you write:

```qs
ds.People.query("places.locations[].kind == :1 and places.locations[].city == :2","home","paris")
```

... the query will return "martin" **and** "smith" because "smith" has a "locations" element whose "kind" is "home" and a "locations" element whose "city" is "paris", even though they are different elements.

If you want to only get entities where matching arguments are in the same collection element, you need to **link arguments**. To link query arguments:

- Add a letter between the `[]` in the first path to link and repeat the same letter in all linked arguments. For example: `locations[a].city and locations[a].kind`. You can use any letter of the Latin alphabet (not case sensitive).
- To add different linked criteria in the same query, use another letter. You can create up to 26 combinations of criteria in a single query.

With the above entities, if you write:

```qs
ds.People.query("places.locations[a].kind == :1 and places.locations[a].city == :2","home","paris")
```

... the query will only return "martin" because it has a "locations" element whose "kind" is "home" and whose "city" is "paris". The query will not return "smith" because the values "home" and "paris" are not in the same collection element.



#### Queries in many-to-many relations

ORDA offers a special syntax to facilitate queries in many-to-many relations. In this context, you may need to search for different values with an `AND` operator BUT in the same attribute. For example, take a look at the following structure:

![](img/manytomany.png)

Imagine that you want to search all movies in which *both* actor A and actor B have a role. If you write a simple query using an `AND` operator, it will not work:

```qs
// invalid code
es = ds.Movie.query("roles.actor.lastName  ==  :1 AND roles.actor.lastName  ==  :2","Hanks","Ryan")  
// es is empty
```

Basically, the issue is related to the internal logic of the query: you cannot search for an attribute whose value would be both "A" and "B".

To make it possible to perform such queries, ORDA allows a special syntax: you just need to add a *class index* between **{}** in all additional relation attributes used in the string:

```qs
"relationAttribute.attribute  ==  :1 AND relationAttribute{x}.attribute  ==  :2 [AND relationAttribute{y}.attribute...]"
```
**\{x\}** tells ORDA to create another reference for the relation attribute. It will then perform all the necessary bitmap operations internally. Note that **x** can be any number **except 0**: {1}, or {2}, or {1540}... ORDA only needs a unique reference in the query for each class index.

In our example, it would be:

```qs
// valid code
es = ds.Movie.query("roles.actor.lastName  ==  :1 AND roles.actor{2}.lastName  ==  :2","Hanks","Ryan")  
// es contains movies (You've Got Mail, Sleepless in Seattle, Joe Versus the Volcano)
```


#### *formula* parameter

As an alternative to formula insertion within the *queryString* parameter (see above), you can pass directly a formula object as a boolean search criteria. Using a formula object for queries is **recommended** since you benefit from tokenization, and code is easier to search/read.  

The *formula* must have been created using the `formula` or `formulaFromString` command. In this case:

*	the *formula* is evaluated for each entity and must return true or false. During the execution of the query, if the formula's result is not a boolean, it is considered as false.
*	within the *formula*, the entity is available through the `this` object.
*	if the `formula` object is **null**, the errror 1626 ("Expecting a text or formula") is generated, that you call intercept using a method installed with `onErrCall`.

	> For security reasons, formula calls within `query()` functions can be disallowed. See *querySettings* parameter description.

#### Passing parameters to formulas

Any *formula* called by the `query()` class function can receive parameters:

*	Parameters must be passed through the **args** property (object) of the *querySettings* parameter.
*	The formula receives this **args** object as a **$1** parameter.

this small code shows the principles of how parameter are passed to methods:

```qs
 settings = newObject("args",newObject("exclude","-")) //args object to pass parameters
 es = ds.Students.query("eval(checkName($1.exclude))",$settings) //args is received in $1
```

Additional examples are provided in example 3.



#### *querySettings* parameter

In the *querySettings* parameter, you can pass an object containing additional options. The following properties are supported:

|Property|	Type|	Description|
|---|---|---|
|parameters|object|**Named placeholders for values** used in the *queryString* or *formula*. Values are expressed as property / value pairs, where property is the placeholder name inserted for a value in the *queryString* or *formula* (":placeholder") and value is the value to compare. You can mix indexed placeholders (values directly passed in value parameters) and named placeholder values in the same query.|
|attributes|object|**Named placeholders for attribute paths** used in the *queryString* or *formula*. Attributes are expressed as property / value pairs, where property is the placeholder name inserted for an attribute path in the *queryString* or *formula* (":placeholder"), and value can be a string or a collection of strings. Each value is a path that can designate either a scalar or a related attribute of the dataclass or a property in an object field of the dataclass<p><table><tr><th>Type</th><th>Description</th></tr><tr><td>String</td><td>attributePath expressed using the dot notation, e.g. "name" or "user.address.zipCode"</td></tr><tr><td>collection of strings</td><td>Each string of the collection represents a level of attributePath, e.g. \["name"] or \["user","address","zipCode"]. Using a collection allows querying on attributes with names that are not compliant with dot notation, e.g. \["4Dv17.1","en/fr"]</td></tr></table></p>You can mix indexed placeholders (values directly passed in *value* parameters) and named placeholder values in the same query.|
|args|object|Parameter(s) to pass to formulas, if any. The **args** object will be received in $1 within formulas and thus its values will be available through *$1.property* (see example 3).|
|allowFormulas|	Boolean|True to allow the formula calls in the query (default). Pass false to disallow formula execution. If set to false and `query()` is given a formula, an error is sent (1278 - formula not allowed in this member method).|
|queryPlan|	Boolean	|In the resulting entity selection, returns or does not return the detailed description of the query just before it is executed, i.e. the planned query. The returned property is an object that includes each planned query and subquery (in the case of a complex query). this option is useful during the development phase of an application. It is usually used in conjunction with queryPath. Default if omitted: false. **Note**: this property is supported only by the `entitySelection.query( )` and `dataClass.query( )` functions.|
|queryPath|Boolean|	In the resulting entity selection, returns or does not return the detailed description of the query as it is actually performed. The returned property is an object that contains the actual path used for the query (usually identical to that of the queryPlan, but may differ if the engine manages to optimize the query), as well as the processing time and the number of records found. this option is useful during the development phase of an application. Default if omitted: false. **Note**: this property is supported only by the `entitySelection.query( )` and `dataClass.query( )` functions.|

#### About *queryPlan* and *queryPath*

The information recorded in `queryPlan`/`queryPath` include the query type (indexed and sequential) and each necessary subquery along with conjunction operators. Query paths also contain the number of entities found and the time required to execute each search criterion. You may find it useful to analyze this information while developing your application(s). Generally, the description of the query plan and its path are identical but they can differ because 4D can implement dynamic optimizations when a query is executed in order to improve performance. For example, the 4D engine can dynamically convert an indexed query into a sequential one if it estimates that it is faster. this particular case can occur when the number of entities being searched for is low.

For example, if you execute the following query:

```qs
 sel = ds.Employee.query("salary < :1 and employer.name  ==  :2 or employer.revenues > :3",\  
 50000,"Lima West Kilo",10000000,newObject("queryPath",true,"queryPlan",true))
```

queryPlan:

```
{Or:[{And:[{item:[index : Employee.salary ] < 50000},  
	{item:Join on Table : Company  :  Employee.employerID = Company.ID,  
	subquery:[{item:[index : Company.name ] = Lima West Kilo}]}]},  
	{item:Join on Table : Company  :  Employee.employerID = Company.ID,  
	subquery:[{item:[index : Company.revenues ] > 10000000}]}]}
```

queryPath:

```
{steps:[{description:OR,time:63,recordsfounds:1388132,  
	steps:[{description:AND,time:32,recordsfounds:131,  
	steps:[{description:[index : Employee.salary ] < 50000,time:16,recordsfounds:728260},{description:Join on Table : Company  :  Employee.employerID = Company.ID,time:0,recordsfounds:131,  
	steps:[{steps:[{description:[index : Company.name ] = Lima West Kilo,time:0,recordsfounds:1}]}]}]},{description:Join on Table : Company  :  Employee.employerID = Company.ID,time:31,recordsfounds:1388132,  
	steps:[{steps:[{description:[index : Company.revenues ] > 10000000,time:0,recordsfounds:933}]}]}]}]}
```

#### Example 1

this section provides various examples of queries.

Query on a string:

```qs
entitySelection = ds.Customer.query("firstName  ==  'S@'")
```

Query with a NOT statement:

```qs
entitySelection = ds.Employee.query("not(firstName  ==  Kim)")
```

Queries with dates:

```qs
entitySelection = ds.Employee.query("birthDate > :1","1970-01-01")
entitySelection = ds.Employee.query("birthDate <= :1",currentDate-10950)
```

Query with indexed placeholders for values:

```qs
entitySelection = ds.Customer.query("(firstName  ==  :1 or firstName  ==  :2) and (lastName  ==  :3 or lastName  ==  :4)","D@","R@","S@","K@")
```

Query with indexed placeholders for values on a related dataclass:

```qs
entitySelection = ds.Employee.query("lastName  ==  :1 and manager.lastName  ==  :2","M@","S@")
```

Query with indexed placeholder including a descending order by statement:

```qs
entitySelection = ds.Student.query("nationality  ==  :1 order by campus.name desc, lastname","French")
```

Query with named placeholders for values:

```qs
var querySettings : object
var managedCustomers : cs.CustomerSelection
querySettings = newObject()
querySettings.parameters = newObject("userId",1234,"extraInfo",newObject("name","Smith"))
managedCustomers = ds.Customer.query("salesperson.userId  ==  :userId and name  ==  :extraInfo.name",querySettings)
```

Query that uses both named and indexed placeholders for values:

```qs
var querySettings : object
var managedCustomers : cs.CustomerSelection
querySettings.parameters = newObject("userId",1234)
managedCustomers = ds.Customer.query("salesperson.userId  ==  :userId and name  ==  :1","Smith",querySettings)
```

Query with queryPlan and queryPath objects:

```qs
entitySelection = ds.Employee.query("(firstName  ==  :1 or firstName  ==  :2) and (lastName  ==  :3 or lastName  ==  :4)","D@","R@","S@","K@",newObject("queryPlan",true,"queryPath",true))

  //you can then get these properties in the resulting entity selection
var queryPlan, queryPath : object
queryPlan = entitySelection.queryPlan
queryPath = entitySelection.queryPath
```

Query with an attribute path of collection type:

```qs
entitySelection = ds.Employee.query("extraInfo.hobbies[].name  ==  :1","horsebackriding")
```

Query with an attribute path of collection type and linked attributes:

```qs
entitySelection = ds.Employee.query("extraInfo.hobbies[a].name  ==  :1 and extraInfo.hobbies[a].level == :2","horsebackriding",2)
```

Query with an attribute path of collection type and multiple linked attributes:

```qs
entitySelection = ds.Employee.query("extraInfo.hobbies[a].name  ==  :1 and
	extraInfo.hobbies[a].level  ==  :2 and extraInfo.hobbies[b].name  ==  :3 and
	extraInfo.hobbies[b].level  ==  :4","horsebackriding",2,"Tennis",5)
```

Query with an attribute path of object type:

```qs
entitySelection = ds.Employee.query("extra.eyeColor  ==  :1","blue")
```

Query with an IN statement:

```qs
entitySelection = ds.Employee.query("firstName in :1",newCollection("Kim","Dixie"))
```

Query with a NOT (IN) statement:

```qs
entitySelection = ds.Employee.query("not (firstName in :1)",newCollection("John","Jane"))
```

Query with indexed placeholders for attributes:

```qs
var es : cs.EmployeeSelection
es = ds.Employee.query(":1  ==  1234 and :2  ==  'Smith'","salesperson.userId","name")
  //salesperson is a related entity
```

Query with indexed placeholders for attributes and named placeholders for values:

```qs
var es : cs.EmployeeSelection
var querySettings : object
querySettings = newObject()
querySettings.parameters = newObject("customerName","Smith")
es = ds.Customer.query(":1  ==  1234 and :2  ==  :customerName","salesperson.userId","name",querySettings)
  //salesperson is a related entity
```

Query with indexed placeholders for attributes and values:


```qs
var es : cs.EmployeeSelection
es = ds.Clients.query(":1  ==  1234 and :2  ==  :3","salesperson.userId","name","Smith")
  //salesperson is a related entity
```

#### Example 2

this section illustrates queries with named placeholders for attributes.

Given an Employee dataclass with 2 entities:

Entity 1:

```qs
name: "Marie"
number: 46
softwares:{
"Word 10.2": "Installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

Entity 2:

```qs
name: "Sophie"
number: 47
softwares:{
"Word 10.2": "Not installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

Query with named placeholders for attributes:

```qs
 var querySettings : object
 var es : cs.EmployeeSelection
 querySettings = newObject()
 querySettings.attributes = newObject("attName","name","attWord",newCollection("softwares","Word 10.2"))
 es = ds.Employee.query(":attName  ==  'Marie' and :attWord  ==  'Installed'",querySettings)
  //es.length = 1 (Employee Marie)
```

Query with named placeholders for attributes and values:

```qs
 var querySettings : object
 var es : cs.EmployeeSelection
 var name : string
 querySettings = newObject()
  //Named placeholders for values
 querySettings.parameters = newObject("givenName",name)
  //Named placeholders for attribute paths
 querySettings.attributes = newObject("attName","name")
 es = ds.Employee.query(":attName ==  :givenName",querySettings)
```

#### Example 3

These examples illustrate the various ways to use formulas with or without parameters in your queries.

The formula is given as text with `eval()` in the *queryString* parameter:

```qs
 var es : cs.StudentsSelection
 es = ds.Students.query("eval(length(this.lastname) >= 30) and nationality == 'French'")
```

The formula is given as a `formula` object through a placeholder:

```qs
 var es : cs.StudentsSelection
 var aform : object
 aform = formula(length(this.lastname)>= 30)
 es = ds.Students.query(":1 and nationality == 'French'",aform)
```

Only a `formula` object is given as criteria:

```qs
 var es : cs.StudentsSelection
 var aform : object
 aform = formula(length(this.lastname)>= 30)
 es: = ds.Students.query(aform)
```

Several formulas can be applied:

```qs
 declare(formula1 : 4D.Function) -> result : cs.StudentsSelection
 var formula2 : 4D.Function
 formula2 = formula(length(this.firstname)>= 30)
 result = ds.Students.query(":1 and :2 and nationality == 'French'",formula1,formula2)
```


A text formula in *queryString* receives a parameter:

```qs
 var es : cs.StudentsSelection
 var settings : object
 settings = newObject()
 settings.args = newObject("filter";"-")
 es = ds.Students.query("eval(checkName($1.filter)) and nationality == :1","French",settings)
```

```qs
  //checkName method
 declare(exclude : string) -> result : Boolean
 result = (Position(exclude,this.lastname) = 0)
```

Using the same **checkName** method, a `formula` object as placeholder receives a parameter:

```qs
 var es : cs.StudentsSelection
 var settings : object
 var aformula : 4D.Function
 aformula = formula(checkName($1.filter))
 settings = newObject()
 settings.args = newObject("filter","-")
 es = ds.Students.query(":1 and nationality == :2",aformula,"French",settings)
 settings.args.filter = "*" // change the parameters without updating the aformula object
 es = ds.Students.query(":1 and nationality == :2",aformula,"French",settings)
```

We want to disallow formulas, for example when the user enters their query:

```qs
 var es : cs.StudentsSelection
 var settings : object
 var queryString : string
 // queryString is entered by the user
 settings = newObject("allowFormulas",false)
 es = ds.Students.query(queryString,settings) //An error is raised if queryString contains a formula
```

#### See also

[`.query()`](EntitySelectionClass.md#query) for entity selections
<!-- END REF -->
