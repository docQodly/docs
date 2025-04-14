---
id: EntitySelectionClass
title: EntitySelection
---


An entity selection is an object containing one or more reference(s) to [entities](../orda/data-model.md#entity) belonging to the same [Dataclass](../orda/data-model.md#dataclass). An entity selection can contain 0, 1 or X entities from the dataclass -- where X can represent the total number of entities contained in the dataclass.

Entity selections can be created from existing selections using various functions of the [`DataClass` class](DataClassClass.md) such as [`.all()`](DataClassClass.md#all) or [`.query()`](DataClassClass.md#query), or functions of the `EntityClass` class itself, such as [`.and()`](#and) or [`orderBy()`](#orderby). You can also create blank entity selections using the [`dataClass.newSelection()`](DataClassClass.md#newselection) function.

### Functions and properties

||
|---|
|[<!-- INCLUDE EntitySelectionClass.index.Syntax -->](#index)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.index.Summary -->|
|[<!-- INCLUDE EntitySelectionClass.attributeName.Syntax -->](#attributename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.attributeName.Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.add().Syntax -->](#add)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.add().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.and().Syntax -->](#and)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.and().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.at().Syntax -->](#attributename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.at().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.average().Syntax -->](#average)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.average().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.clean().Syntax -->](#clean)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.clean().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.contains().Syntax -->](#contains)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.contains().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.count().Syntax -->](#count)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.count().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.distinct().Syntax -->](#distinct)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.distinct().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.distinctPaths().Syntax -->](#distinctpaths)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.distinctPaths().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.drop().Syntax -->](#drop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.drop().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.extract().Syntax -->](#extract)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.extract().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.first().Syntax -->](#first)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.first().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.getDataClass().Syntax -->](#getdataclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.getDataClass().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.isAlterable().Syntax -->](#isalterable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isAlterable().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.isOrdered().Syntax -->](#isordered)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isOrdered().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.last().Syntax -->](#last)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.last().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.length.Syntax -->](#length)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.length.Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.max().Syntax -->](#max)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.max().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.min().Syntax -->](#min)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.min().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.minus().Syntax -->](#minus)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.minus().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.or().Syntax -->](#or)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.or().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.orderBy().Syntax -->](#orderby)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderBy().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.orderByFormula().Syntax -->](#orderbyformula-)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderByFormula().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.query().Syntax -->](#query)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.query().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.queryPath.Syntax -->](#querypath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPath.Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.queryPlan.Syntax -->](#queryplan)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPlan.Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.selected().Syntax -->](#selected)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.selected().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.slice().Syntax -->](#slice)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.slice().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.sum().Syntax -->](#sum)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.sum().Summary -->|
|[<!-- INCLUDE #EntitySelectionClass.toCollection().Syntax -->](#tocollection-)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.toCollection().Summary -->|



<!-- REF EntitySelectionClass.index.Desc -->
## &#91;*index*&#93;


<!-- REF EntitySelectionClass.index.Syntax -->
***&#91;index&#93;*** : 4D.Entity<!-- END REF -->


#### Description

The `EntitySelection[index]` notation <!-- REF EntitySelectionClass.index.Summary -->allows you to access entities within the entity selection using the standard collection syntax<!-- END REF -->: pass the position of the entity you want to get in the *index* parameter.

Note that the corresponding entity is reloaded from the datastore.

*index* can be any number between 0 and [`.length`](#length)-1.

*	If *index* is out of range, an error is returned.
*	If *index* corresponds to a dropped entity, a Null value is returned.

:::caution

`EntitySelection[index]` is a [non assignable expression](basics/lang-expressions.md#assignable-vs-non-assignable-expressions), which means that it cannot be used as en editable entity reference with functions like [`.lock()`](EntityClass.md#lock) or [`.save()`](EntityClass.md#save). To work with the corresponding entity, you need to assign the returned expression to an assignable expression, such as a variable. Examples:

```qs
 sel = ds.Employee.all() //create the entity selection
  //invalid statements:
 result = sel[0].lock() //will NOT work
 sel[0].lastName = "Smith" //will NOT work
 result = sel[0].save() //will NOT work
  //valid code:
 entity = sel[0]  //OK
 entity.lastName = "Smith" //OK
 entity.save() //OK
```

:::

#### Example   


```qs
 var employees : cs.EmployeeSelection
 var employee : cs.EmployeeEntity
 employees = ds.Employee.query("lastName = :1","H@")
 employee = employees[2]  // The 3rd entity of the employees entity selection is reloaded from the datastore
```

<!-- END REF -->


<!-- REF EntitySelectionClass.at().Desc -->
## .at()

<!-- REF #EntitySelectionClass.at().Syntax -->**.at**( *index* : integer ) : 4D.Entity <!-- END REF -->


<!-- REF #EntitySelectionClass.at().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|index|integer|&#8594;|Index of entity to return|
|Result|4D.Entity |&#8592;|The entity at that index|<!-- END REF -->


#### Description

The `.at()` function <!-- REF #EntitySelectionClass.at().Summary -->returns the entity at position *index*, allowing for positive and negative integer<!-- END REF -->.

If *index* is negative (from -1 to -n with n : length of the entity selection), the returned entity will be based on the reverse order of the entity selection.

The function returns null if *index* is beyond entity selection limits.

#### Example

```qs
var employees : cs.EmployeeSelection
var emp1, emp2 : cs.EmployeeEntity
employees = ds.Employee.query("lastName = :1","H@")
emp1 = employees.at(2)  //3rd entity of the employees entity selection
emp2 = employees.at(-3) //starting from the end, 3rd entity
	//of the employees entity selection
```

<!-- END REF -->


<!-- REF EntitySelectionClass.attributeName.Desc -->
## .*attributeName*


<!-- REF EntitySelectionClass.attributeName.Syntax -->
***.attributeName*** : collection<br/>***.attributeName*** : 4D.EntitySelection<!-- END REF -->


#### Description

Any dataclass attribute can be used as a property of an entity selection to return <!-- REF EntitySelectionClass.attributeName.Summary -->a "projection" of values for the attribute in the entity selection<!-- END REF -->. Projected values can be a collection or a new entity selection, depending on the [kind](DataClassClass.md#attributename) (storage or relation) of the attribute.

*	If *attributeName* kind is `storage`:
`.attributeName` returns a collection of values of the same type as *attributeName*.
*	If *attributeName* kind is `relatedEntity`:
`.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Duplications are removed (an unordered entity selection is returned).
*	If *attributeName* kind is `relatedEntities`:
`.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Duplications are removed (an unordered entity selection is returned).


When a relation attribute is used as a property of an entity selection, the result is always another entity selection, even if only one entity is returned. In this case, if no entities are returned, the result is an empty entity selection.

If the attribute does not exist in the entity selection, an error is returned.






#### Example 1  

Projection of storage values:




```qs
 var firstNames : collection
 entitySelection = ds.Employee.all()
 firstNames = entitySelection.firstName // firstName type is string
```

The resulting collection is a collection of strings, for example:

```json
[
    "Joanna",
    "Alexandra",
    "Rick"
]
```

#### Example 2  

Projection of related entity:

```qs
 var es, entitySelection : cs.EmployeeSelection
 entitySelection = ds.Employee.all()
 es = entitySelection.employer // employer is related to a Company dataClass
```

The resulting object is an entity selection of Company with duplications removed (if any).

#### Example 3

Projection of related entities:

```qs
 var es : cs.EmployeeSelection
 es = ds.Employee.all().directReports // directReports is related to Employee dataclass
```

The resulting object is an entity selection of Employee with duplications removed (if any).

<!-- END REF -->




<!-- REF EntitySelectionClass.add().Desc -->
## .add()


<!-- REF #EntitySelectionClass.add().Syntax -->
**.add**( *entity* : 4D.Entity ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.add().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entity|4D.Entity|&#8594;|Entity to be added to the entity selection|
|Result|4D.EntitySelection|&#8594;|Entity selection including the added *entity*|
<!-- END REF -->


#### Description

The `.add()` function <!-- REF #EntitySelectionClass.add().Summary -->adds the specified *entity* to the entity selection and returns the modified entity selection<!-- END REF -->.

>This function modifies the original entity selection.

:::caution

The entity selection must be *alterable*, i.e. it has been created for example by [`.newSelection()`](DataClassClass.md#newselection), otherwise `.add()` will return an error. Shareable entity selections do not accept the addition of entities. For more information, please refer to the [Shareable or alterable entity selections](../orda/data.md#shareable-or-alterable-entity-selections) section.

:::

*	If the entity selection is [ordered](../orda/data-model.md#ordered-or-unordered-entity-selection), *entity* is added at the end of the selection. If a reference to the same entity already belongs to the entity selection, it is duplicated and a new reference is added.
*	If the entity selection is [unordered](../orda/data-model.md#ordered-or-unordered-entity-selection), *entity* is added anywhere in the selection, with no specific order.

The modified entity selection is returned by the function, so that function calls can be chained.

An error occurs if *entity* and the entity selection are not related to the same Dataclass. If *entity* is Null, no error is raised.

#### Example 1

```qs
 var employees : cs.EmployeeSelection
 var employee : cs.EmployeeEntity
 employees = ds.Employee.newSelection()
 employee = ds.Employee.new()
 employee.lastName = "Smith"
 employee.save()
 employees.add(employee) //The employee entity is added to the employees entity selection
```

#### Example 2

Calls to the function can be chained:

```qs
 var sel : cs.ProductSelection
 var p1,p2,p3 : cs.ProductEntity

 p1 = ds.Product.get(10)
 p2 = ds.Product.get(11)
 p3 = ds.Product.get(12)
 sel = ds.Product.newSelection()
 sel = sel.add(p1).add(p2).add(p3)
```

<!-- END REF -->



<!-- REF EntitySelectionClass.and().Desc -->
## .and()

<!-- REF #EntitySelectionClass.and().Syntax -->
**.and**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.and**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.and().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entity |4D.Entity|&#8594;|Entity to intersect with|
|entitySelection |4D.EntitySelection|&#8594;|Entity selection to intersect with|
|Result|4D.EntitySelection|&#8592;|New entity selection with the result of intersection with logical AND operator|
<!-- END REF -->


#### Description

The `.and()` function <!-- REF #EntitySelectionClass.and().Summary -->combines the entity selection with an *entity* or *entitySelection* parameter using the logical AND operator<!-- END REF -->; it returns a new, unordered entity selection that contains only the entities that are referenced in both the entity selection and the parameter.

*	If you pass *entity* as parameter, you combine this entity with the entity selection. If the entity belongs to the entity selection, a new entity selection containing only the entity is returned. Otherwise, an empty entity selection is returned.
*	If you pass *entitySelection* as parameter, you combine both entity selections. A new entity selection that contains only the entities that are referenced in both selections is returned. If there is no intersecting entity, an empty entity selection is returned.

:::note

You can compare [ordered and/or unordered entity selections](../orda/data-model.md#ordered-or-unordered-entity-selection). The resulting selection is always unordered.

:::

If the original entity selection or the *entitySelection* parameter is empty, or if the *entity* is Null, an empty entity selection is returned.

If the original entity selection and the parameter are not related to the same dataclass, an error is raised.


#### Example 1


```qs
 var employees, result : cs.EmployeeSelection
 var employee : cs.EmployeeEntity
 employees = ds.Employee.query("lastName = :1","H@")   
  //The employees entity selection contains the entity
  //with primary key 710 and other entities
  //for ex. "Colin Hetrick" / "Grady Harness" / "Sherlock Holmes" (primary key 710)
 employee = ds.Employee.get(710) // Returns "Sherlock Holmes"

 result = employees.and(employee) //result is an entity selection containing   
  //only the entity with primary key 710 ("Sherlock Holmes")
```


#### Example 2

We want to have a selection of employees named "Jones" who live in New York:

```qs
 var sel1, sel2, sel3 : cs.EmployeeSelection
 sel1 = ds.Employee.query("name = :1","Jones")
 sel2 = ds.Employee.query("city = :1","New York")
 sel3 = sel1.and(sel2)
```

<!-- END REF -->


<!-- REF EntitySelectionClass.average().Desc -->
## .average()   


<!-- REF #EntitySelectionClass.average().Syntax -->
**.average**( *attributePath* : string ) : number<!-- END REF -->

<!-- REF #EntitySelectionClass.average().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attributePath |string|&#8594;|Attribute path to be used for calculation|
|Result|number|&#8592;|Arithmetic mean (average) of entity attribute values (Undefined if empty entity selection)|
<!-- END REF -->

#### Description

The `.average()` function <!-- REF #EntitySelectionClass.average().Summary -->returns the arithmetic mean (average) of all the non-null values of *attributePath* in the entity selection<!-- END REF -->.

Pass in the *attributePath* parameter the attribute path to evaluate.

Only numerical values are taken into account for the calculation. Note however that, if the *attributePath* of the entity selection contains mixed value types, `.average()` takes all scalar elements into account to calculate the average value.

:::note

Date values are converted to numerical values (seconds) and used to calculate the average.

:::

`.average()` returns **undefined** if the entity selection is empty or *attributePath* does not contain numerical values.

An error is returned if:

*	*attributePath* is a related attribute,
*	*attributePath* designates an attribute that does not exist in the entity selection dataclass.


#### Example

We want to obtain a list of employees whose salary is higher than the average salary:

```qs
 var averageSalary : number
 var moreThanAv : cs.EmployeeSelection
 averageSalary = ds.Employee.all().average("salary")
 moreThanAv = ds.Employee.query("salary > :1",averageSalary)
```

<!-- END REF -->

<!-- REF EntitySelectionClass.clean().Desc -->
## .clean()   


<!-- REF #EntitySelectionClass.clean().Syntax -->**.clean**() : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.clean().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.EntitySelection|&#8592;|New entity selection without deleted entities|
<!-- END REF -->

#### Description

The `.clean()` function <!-- REF #EntitySelectionClass.clean().Summary -->returns a new entity selection based upon the original entity selection but without deleted entities, if any<!-- END REF -->.

By default, when an entity is [dropped](EntitySelectionClass.md#drop), its reference(s) in existing entity selection(s) become *undefined* but are not removed from the entity selection object(s). Deleted entities are still included in the [`.length`](#length) property and are displayed as blank lines if the entity selection is bound to an interface object such as a list. In this case, calling the `.clean()` function on the entity selection allows you to get a new, up-to-date entity selection, not containing *undefined* entity references.

The resulting entity selection keeps the same [order criteria](../orda/data-model.md#ordered-or-unordered-entity-selection) and the same [alterable/shareable](../orda/data.md#shareable-or-alterable-entity-selections) property as the original entity selection.


#### Example   

```qs
var sel , sel2 : cs.SpecialitySelection
var status : object

sel = ds.Speciality.query("ID <= 4")
status = ds.Speciality.get(2).drop() //delete the entity from the dataclass
  //sel.length == 4

sel2 = sel.clean()
  //sel2.length == 3
```



<!-- END REF -->


<!-- REF EntitySelectionClass.contains().Desc -->
## .contains()   

<!-- REF #EntitySelectionClass.contains().Syntax -->
**.contains**( *entity* : 4D.Entity ) : boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.contains().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entity|4D.Entity|&#8594;|Entity to evaluate|
|Result|boolean|&#8592;|True if the entity belongs to the entity selection, else false|
<!-- END REF -->

#### Description

The `.contains()` function <!-- REF #EntitySelectionClass.contains().Summary -->returns true if entity reference belongs to the entity selection<!-- END REF -->, and false otherwise.

In *entity*, specify the entity to search for in the entity selection. If entity is null, the function will return false.

If *entity* and the entity selection do not belong to the same dataclass, an error is raised.

#### Example   

```qs
 var employees : cs.EmployeeSelection
 var employee : cs.EmployeeEntity
 var info : string

 employees = ds.Employee.query("lastName = :1","H@")
 employee = ds.Employee.get(610)

 if(employees.contains(employee))
    info = "The entity with primary key 610 has a last name beginning with H"
 else
    info = "The entity with primary key 610 does not have a last name beginning with H"
 end
```

<!-- END REF -->



<!-- REF EntitySelectionClass.count().Desc -->
## .count()   


<!-- REF #EntitySelectionClass.count().Syntax -->
**.count**( *attributePath* : string ) : number<!-- END REF -->

<!-- REF #EntitySelectionClass.count().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attributePath |string|&#8594;|Path of the attribute to be used for calculation|
|Result|number|&#8592;|Number of non null *attributePath* values in the entity selection|
<!-- END REF -->

#### Description

The `.count()` function <!-- REF #EntitySelectionClass.count().Summary -->returns the number of entities in the entity selection with a non-null value in *attributePath*<!-- END REF -->.

>Only scalar values are taken into account. object or collection type values are considered as null values.

An error is returned if:

*	*attributePath* is a related attribute,
*	*attributePath* is not found in the entity selection dataclass.

#### Example   

We want to find out the total number of employees for a company without counting any whose job title has not been specified:

```qs
 var sel : cs.EmployeeSelection
 var count : number

 sel = ds.Employee.query("employer = :1","Acme, Inc")
 count = sel.count("jobtitle")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.copy().Desc -->
## .copy()   


<!-- REF #EntitySelectionClass.copy().Syntax -->
**.copy**( \{ *option* : integer \} ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.copy().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|option |integer|&#8594;|`kShared`: return a shareable entity selection|
|Result|4D.EntitySelection|&#8592;|Copy of the entity selection|
<!-- END REF -->

#### Description

The `.copy()` function <!-- REF #EntitySelectionClass.copy().Summary -->returns a copy of the original entity selection<!-- END REF -->.

> This function does not modify the original entity selection.

By default, if the *option* parameter is omitted, the function returns a new, [alterable](../orda/data.md#shareable-or-alterable-entity-selections) entity selection (even if the function is applied to a [shareable](../orda/data.md#shareable-or-alterable-entity-selections) entity selection). Pass the `kShared` constant in the *option* parameter if you want to create a shareable entity selection.


#### Example   

You want to copy a regular entity selection to a shared entity selection in the `storage`:

```qs
localSel : cs.ProductSelection
localSel = ds.Products.newSelection() //create an empty selection
...
  // The localSel entity selection is updated with another one
localSel.add(selectedProducts)

use(storage)
	if(storage.products == null)
		storage.products = newSharedObject()
    end

    use(storage.products)
       storage.products = localSel.copy(kShared)
    end
end
```

<!-- END REF -->


<!-- REF EntitySelectionClass.distinct().Desc -->
## .distinct()   


<!-- REF #EntitySelectionClass.distinct().Syntax -->
**.distinct**( *attributePath* : string \{ , *option* : integer \} ) : collection<!-- END REF -->

<!-- REF #EntitySelectionClass.distinct().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attributePath|string|&#8594;|Path of attribute whose distinct values you want to get|
|option|integer|&#8594;|`kDiacritical`, `kCountValues`|
|Result|collection|&#8592;|collection with only distinct values|
<!-- END REF -->

#### Description

The `.distinct()` function <!-- REF #EntitySelectionClass.distinct().Summary -->returns a collection containing only distinct (different) values from the *attributePath* in the entity selection<!-- END REF -->.

The returned collection is automatically sorted. **Null** values are not returned.

In the *attributePath* parameter, pass the entity attribute whose distinct values you want to get. Only scalar values (text, number, boolean, or date) can be handled. If the *attributePath* leads to an object property that contains values of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.	booleans
2.	strings
3.	numbers
4.	dates

You can use the `[]` notation to designate a collection when *attributePath* is a path within an object (see examples).

In the *options* parameter, you can pass one or a combination of the following constants:

|Constant|Value|Comment|
|---|---|---|
|`kDiacritical`|8|Evaluation is case sensitive and differentiates accented characters. By default if omitted, a non-diacritical evaluation is performed|
|`kCountValues`|32|Return the count of entities for every distinct value. When this option is passed, `.distinct()` returns a collection of objects containing a pair of `{"value":*value*; "count":*count*}` properties.|

:::note

The `kCountValues` option is only available with storage attributes of type boolean, string, number, and date.

:::

By default, a non-diacritical evaluation is performed. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `kDiacritical` constant in the *option* parameter.

An error is returned if:

*	*attributePath* is a related attribute,
*	*attributePath* is not found in the entity selection dataclass.

#### Examples  

You want to get a collection containing a single element per country name:

```qs
 var countries : collection
 countries = ds.Employee.all().distinct("address.country")
```

`nicknames` is a collection and `extra` is an object attribute:

```qs
values = ds.Employee.all().distinct("extra.nicknames[].first")
```

You want to get the number of different job names in the company:

```qs
var jobs : collection
jobs = ds.Employee.all().distinct("jobName",kCountValues)  
//jobs[0] = {"value":"Developer","count":17}
//jobs[1] = {"value":"Office manager","count":5}
//jobs[2] = {"value":"Accountant","count":2}
//...
```

<!-- END REF -->


<!-- REF EntitySelectionClass.distinctPaths().Desc -->
## .distinctPaths()

<!-- REF #EntitySelectionClass.distinctPaths().Syntax -->**.distinctPaths**( *attribute* : string ) : collection<!-- END REF -->


<!-- REF #EntitySelectionClass.distinctPaths().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attribute|string|&#8594;|object attribute name whose paths you want to get|
|Result|collection|&#8592;|newCollection with distinct paths|<!-- END REF -->


#### Description

The `.distinctPaths()` function <!-- REF #EntitySelectionClass.distinctPaths().Summary -->returns a collection of distinct paths found in the indexed object *attribute* for the entity selection<!-- END REF -->.

If *attribute* is not an indexed object attribute, an error is generated.

After the call, the size of the returned collection is equal to the number of distinct paths found in *attribute* for the entity selection. Paths are returned as strings including nested attributes and collections, for example "info.address.number" or "children[].birthdate". Entities with a null value in the *attribute* are not taken into account.

#### Example

You want to get all paths stored in a *fullData* object attribute:

```qs
var paths : collection
paths = ds.Employee.all().distinctPaths("fullData")
//paths[0] = "age"
//paths[1] = "Children"
//paths[2] = "Children[].age"
//paths[3] = "Children[].name"
//paths[4] = "Children.length"
///...
```

:::note

*length* is automatically added as path for nested collection properties.

:::

<!-- END REF -->


<!-- REF EntitySelectionClass.drop().Desc -->
## .drop()   


<!-- REF #EntitySelectionClass.drop().Syntax -->
**.drop**( \{ *mode* : integer \} ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.drop().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mode|integer|&#8594;|`kStopDroppingOnFirstError`: stops method execution on first non-droppable entity|
|Result|4D.EntitySelection|&#8592;|Empty entity selection if successful, else entity selection containing non-droppable entity(ies)|
<!-- END REF -->

#### Description

The `.drop()` function <!-- REF #EntitySelectionClass.drop().Summary -->removes the entities belonging to the entity selection from the table related to its dataclass within the datastore<!-- END REF -->. The entity selection remains in memory.

:::caution

Removing entities is permanent and cannot be undone. It is recommended to call this action in a transaction in order to have a rollback option.

:::

If a locked entity is encountered during the execution of `.drop()`, it is not removed. By default, the function processes all entities of the entity selection and returns non-droppable entities in the entity selection. If you want the method to stop execution at the first encountered non-droppable entity, pass the `kStopDroppingOnFirstError` constant in the *mode* parameter.

#### Example   

Example without the `kStopDroppingOnFirstError` option:

```qs
 var employees, notDropped : cs.EmployeeSelection
 var info : string
 employees = ds.Employee.query("firstName = :1","S@")
 notDropped = employees.drop() // notDropped is an entity selection containing all the not dropped entities
 if(notDropped.length == 0) //The delete action is successful, all the entities have been deleted
    info = "You have dropped "+string(employees.length)+" employees" //The dropped entity selection remains in memory
 else
    info = "Problem during drop, try later"
 end
```

Example with the `kStopDroppingOnFirstError` option:

```qs
 var employees, notDropped : cs.EmployeeSelection
 var info : string
 employees = ds.Employee.query("firstName = :1","S@")
 notDropped = employees.drop(kStopDroppingOnFirstError) //notDropped is an entity selection containing the first not dropped entity
 if(notDropped.length == 0) //The delete action is successful, all the entities have been deleted
    info = "You have dropped "+string(employees.length)+" employees") //The dropped entity selection remains in memory
 else
    info = "Problem during drop, try later"
 end
```


<!-- END REF -->



<!-- REF EntitySelectionClass.extract().Desc -->
## .extract()   


<!-- REF #EntitySelectionClass.extract().Syntax -->**.extract**( *attributePath* : string \{ , *option* : integer \} ) : collection<br/>**.extract**( *attributePath* \{ , *targetPath* } \{ , *...attributePathN* : string , *targetPathN* : string \} ) : collection<!-- END REF -->


<!-- REF #EntitySelectionClass.extract().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attributePath |string|&#8594;|Attribute path whose values must be extracted to the new collection	|
|targetPath|string|&#8594;|Target attribute path or attribute name|
|option|integer|&#8594;|`kKeepNull`: include null attributes in the returned collection (ignored by default)|
|Result|collection|&#8592;|collection containing extracted values|
<!-- END REF -->

#### Description

The `.extract()` function <!-- REF #EntitySelectionClass.extract().Summary -->returns a collection containing *attributePath* values extracted from the entity selection<!-- END REF -->.

*attributePath* can refer to:

*	a scalar dataclass attribute,
*	related entity,
*	related entities.

If *attributePath* is invalid, an empty collection is returned.

This function accepts two syntaxes.

**.extract( attributePath : string \{ , option : integer } ) : collection**

With this syntax, `.extract()` populates the returned collection with the *attributePath* values of the entity selection.

By default, entities for which *attributePath* is *null* or undefined are ignored in the resulting collection. You can pass the `kKeepNull` constant in the *option* parameter to include these values as **null** elements in the returned collection.

*	Dataclass attributes with [.kind](DataClassClass.md#attributename) = "relatedEntity" are extracted as a collection of entities (duplications are kept).
*	Dataclass attributes with [.kind](DataClassClass.md#attributename) = "relatedEntities" are extracted as a collection of entity selections.


**.extract ( attributePath , targetPath \{ , ...attributePathN , ... targetPathN\}) : collection**

With this syntax, `.extract()` populates the returned collection with the *attributePath* properties. Each element of the returned collection is an object with *targetPath* properties filled with the corresponding *attributePath* properties. Null values are kept (*option* parameter is ignored with this syntax).

If several *attributePath* are given, a *targetPath* must be given for each. Only valid pairs [*attributePath*, *targetPath*] are extracted.

*	Dataclass attributes with [.kind](DataClassClass.md#attributename) = "relatedEntity" are extracted as an entity.
*	Dataclass attributes with [.kind](DataClassClass.md#attributename) = "relatedEntities" are extracted as an entity selection.

:::note

Entities of a collection of entities accessed by [] are not reloaded from the datastore.

:::

#### Example   

Given the following table and relation:

![](img/entityselection.png)

```qs
 var firstnames, addresses, mailing, teachers : collection
  //
  //
  //firstnames is a collection of Strings


 firstnames = ds.Teachers.all().extract("firstname")
  //
  //addresses is a collection of entities related to dataclass Address
  //Null values for address are extracted
 addresses = ds.Teachers.all().extract("address",kKeepNull)
  //
  //
  //mailing is a collection of objects with properties "who" and "to"
  //"who" property content is string type
  //"to" property content is entity type (Address dataclass)
 mailing = ds.Teachers.all().extract("lastname","who","address","to")
  //
  //
  //mailing is a collection of objects with properties "who" and "city"
  //"who" property content is string type
  //"city" property content is string type
 mailing = ds.Teachers.all().extract("lastname","who","address.city","city")
  //
  //teachers is a collection of objects with properties "where" and "who"
  //"where" property content is string
  //"who" property content is an entity selection (Teachers dataclass)
 teachers = ds.Address.all().extract("city","where","teachers","who")
  //
  //teachers is a collection of entity selections
 teachers = ds.Address.all().extract("teachers")
```

<!-- END REF -->



<!-- REF EntitySelectionClass.first().Desc -->
## .first()   


<!-- REF #EntitySelectionClass.first().Syntax -->
**.first()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.first().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.Entity|&#8592;|Reference to the first entity of the entity selection (Null if selection is empty)|
<!-- END REF -->

#### Description

The `.first()` function <!-- REF #EntitySelectionClass.first().Summary -->returns a reference to the entity in the first position of the entity selection<!-- END REF -->.

The result of this function is similar to:

```qs
 entity = entitySel[0]
```

There is, however, a difference between both statements when the selection is empty:


```qs
 var entitySel : cs.EmpSelection
 var entity : cs.EmpEntity
 entitySel = ds.Emp.query("lastName = :1","Nonexistentname") //no matching entity
  //entity selection is then empty
 entity = entitySel.first() //returns Null
 entity = entitySel[0]  //generates an error
```

#### Example   


```qs
 var entitySelection : cs.EmpSelection
 var entity : cs.EmpEntity
 entitySelection = ds.Emp.query("salary > :1",100000)
 if(entitySelection.length != 0)
    entity = entitySelection.first()
 end
```

<!-- END REF -->



<!-- REF EntitySelectionClass.getDataClass().Desc -->
## .getDataClass()   



<!-- REF #EntitySelectionClass.getDataClass().Syntax -->
**.getDataClass()** : 4D.DataClass<!-- END REF -->


<!-- REF #EntitySelectionClass.getDataClass().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.DataClass|&#8592;|Dataclass object to which the entity selection belongs|
<!-- END REF -->

#### Description

The `.getDataClass()` function <!-- REF #EntitySelectionClass.getDataClass().Summary -->returns the dataclass of the entity selection<!-- END REF -->.

This function is mainly useful in the context of generic code.

#### Example   

The following generic code duplicates all entities of the entity selection:

```qs
  //duplicate_entities method
  //duplicate_entities(entity_selection)

 declare ( entitySelection : 4D.EntitySelection )  
 var dataClass : 4D.DataClass
 var entity, duplicate : 4D.Entity
 var status : object
 dataClass = entitySelection.getDataClass()
 forEach(entity,entitySelection)
    duplicate = dataClass.new()
    duplicate.fromObject(entity.toObject())
    duplicate[dataClass.getInfo().primaryKey] = null //reset the primary key
    status = duplicate.save()
 end
```

<!-- END REF -->


<!-- REF EntitySelectionClass.isAlterable().Desc -->
## .isAlterable()   


<!-- REF #EntitySelectionClass.isAlterable().Syntax -->
**.isAlterable**() : boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isAlterable().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|&#8592;|True if the entity selection is alterable, False otherwise|
<!-- END REF -->

#### Description

The `.isAlterable()` function <!-- REF #EntitySelectionClass.isAlterable().Summary -->returns true if the entity selection is alterable<!-- END REF -->, and false if the entity selection is not alterable.

For more information, please refer to the [Shareable or alterable entity selections](../orda/data.md#shareable-or-alterable-entity-selections) section.


<!-- END REF -->


<!-- REF EntitySelectionClass.isOrdered().Desc -->
## .isOrdered()   


<!-- REF #EntitySelectionClass.isOrdered().Syntax -->
**.isOrdered**() : boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isOrdered().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|&#8592;|true if the entity selection is ordered, false otherwise|
<!-- END REF -->

#### Description

The `.isOrdered()` function <!-- REF #EntitySelectionClass.isOrdered().Summary -->returns true if the entity selection is ordered<!-- END REF -->, and false if it is unordered.

For more information, please refer to the [Ordered or unordered entity selection](../orda/data-model.md#ordered-or-unordered-entity-selection) section.


#### Example   


```qs
 var employees : cs.EmployeeSelection
 var employee : cs.EmployeeEntity
 var isOrdered : boolean
 var info : string
 employees = ds.Employee.newSelection(kKeepOrdered)
 employee = ds.Employee.get(714) // Gets the entity with primary key 714

  //In an ordered entity selection, we can add the same entity several times (duplications are kept)
 employees.add(employee)
 employees.add(employee)
 employees.add(employee)

 isOrdered = employees.isOrdered()
 if(isOrdered)
    info = "The entity selection is ordered and contains "+string(employees.length)+" employees"
 end
```



<!-- END REF -->


<!-- REF EntitySelectionClass.last().Desc -->
## .last()   


<!-- REF #EntitySelectionClass.last().Syntax -->
**.last**() : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.last().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.Entity |&#8592;|Reference to the last entity of the entity selection (null if empty entity selection)|
<!-- END REF -->

#### Description

The `.last()` function <!-- REF #EntitySelectionClass.last().Summary -->returns a reference to the entity in last position of the entity selection<!-- END REF -->.

The result of this function is similar to:

```qs
 entity = entitySel[length-1]
```

If the entity selection is empty, the function returns null.


#### Example   


```qs
 var entitySelection : cs.EmpSelection
 var entity : cs.EmpEntity
 entitySelection = ds.Emp.query("salary < :1",50000)
 if(entitySelection.length != 0)
    entity = entitySelection.last()
 end
```

<!-- END REF -->



<!-- REF EntitySelectionClass.length.Desc -->
## .length   


<!-- REF #EntitySelectionClass.length.Syntax -->
**.length** : integer<!-- END REF -->


#### Description

The `.length` property <!-- REF #EntitySelectionClass.length.Summary -->returns the number of entities in the entity selection<!-- END REF -->. If the entity selection is empty, it returns 0.

Entity selections always have a `.length` property.


#### Example

```qs
 var vSize : integer
 var info : string
 vSize = ds.Employee.query("gender = :1","male").length
 info = string(vSize)+" male employees found."
```


<!-- END REF -->


<!-- REF EntitySelectionClass.max().Desc -->
## .max()   


<!-- REF #EntitySelectionClass.max().Syntax -->
**.max**( *attributePath* : string ) : any<!-- END REF -->


<!-- REF #EntitySelectionClass.max().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attributePath |string|&#8594;|Path of the attribute to be used for calculation|
|Result|any|&#8592;|Highest value of attribute|
<!-- END REF -->

#### Description

The `.max()` function <!-- REF #EntitySelectionClass.max().Summary -->returns the highest (or maximum) value among all the values of *attributePath* in the entity selection<!-- END REF -->. It actually returns the value of the last entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function.

If you pass in *attributePath* a path to an object property containing different types of values, the `.max()` function will return the maximum value of the first scalar type found in the default type list order:

1. booleans
2. strings
3. numbers
4. objects
5. collections
6. dates

`.max()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.


An error is returned if:

*	*attributePath* is a related attribute,
*	*attributePath* designates an attribute that does not exist in the entity selection dataclass.



#### Example   

We want to find the highest salary among all the female employees:

```qs
 var sel : cs.EmpSelection
 var maxSalary : number
 sel = ds.Employee.query("gender = :1","female")
 maxSalary = sel.max("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.min().Desc -->
## .min()   


<!-- REF #EntitySelectionClass.min().Syntax -->
**.min**( *attributePath* : string ) : any<!-- END REF -->

<!-- REF #EntitySelectionClass.min().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attributePath |string|&#8594;|Path of the attribute to be used for calculation|
|Result|any|&#8592;|Lowest value of attribute|
<!-- END REF -->

#### Description

The `.min()` function <!-- REF #EntitySelectionClass.min().Summary --> returns the lowest (or minimum) value among all the values of *attributePath* in the entity selection<!-- END REF -->.  It actually returns the first entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function (excluding **null** values).

If you pass in *attributePath* a path to an object property containing different types of values, the `.min()` function will return the minimum value within the first scalar value type found in the default type list order (see [`.max()`](#max) description).

`.min()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.

An error is returned if:

*	*attributePath* is a related attribute,
*	*attributePath* designates an attribute that does not exist in the entity selection dataclass.


#### Example   

In this example, we want to find the lowest salary among all the female employees:

```qs
 var sel : cs.EmpSelection
 var minSalary : number
 sel = ds.Employee.query("gender = :1","female")
 minSalary: = sel.min("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.minus().Desc -->
## .minus()   


<!-- REF #EntitySelectionClass.minus().Syntax -->
**.minus**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.minus**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.minus().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entity |4D.Entity|&#8594;|Entity to substract|
|entitySelection|4D.EntitySelection|&#8594;|Entity selection to substract|
|Result|4D.EntitySelection|&#8592;|New entity selection or a new reference on the existing entity selection|
<!-- END REF -->

#### Description

The `.minus()` function <!-- REF #EntitySelectionClass.minus().Summary -->excludes from the entity selection to which it is applied the *entity* or the entities of *entitySelection* and returns the resulting entity selection<!-- END REF -->.

*	If you pass *entity* as parameter, the function creates a new entity selection without *entity* (if *entity* belongs to the entity selection). If *entity* was not included in the original entity selection, a new reference to the entity selection is returned.
*	If you pass *entitySelection* as parameter, the function returns an entity selection containing the entities belonging to the original entity selection without the entities belonging to *entitySelection*.

>You can compare [ordered and/or unordered entity selections](../orda/data-model.md#ordered-or-unordered-entity-selection). The resulting selection is always unordered.

If the original entity selection or both the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned.

If *entitySelection* is empty or if *entity* is null, a new reference to the original entity selection is returned.

If the original entity selection and the parameter are not related to the same dataclass, an error is raised.


#### Example 1

```qs
 var employees, result : cs.EmployeeSelection
 var employee : cs.EmployeeEntity

 employees = ds.Employee.query("lastName = :1","H@")
  // The employees entity selection contains the entity with primary key 710 and other entities
  // for ex. "Colin Hetrick", "Grady Harness", "Sherlock Holmes" (primary key 710)

 employee = ds.Employee.get(710) // Returns "Sherlock Holmes"

 result = employees.minus(employee) //result contains "Colin Hetrick", "Grady Harness"
```



#### Example 2

We want to have a selection of female employees named "Jones" who live in New York :

```qs
 var sel1, sel2, sel3 : cs.EmployeeSelection
 sel1 = ds.Employee.query("name  = :1","Jones")
 sel2 = ds.Employee.query("city = :1","New York")
 sel3 = sel1.and(sel2).minus(ds.Employee.query("gender = 'male'"))
```

<!-- END REF -->


<!-- REF EntitySelectionClass.or().Desc -->
## .or()   

<!-- REF #EntitySelectionClass.or().Syntax -->
**.or**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.or**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.or().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entity|4D.Entity|&#8594;|Entity to intersect with|
|entitySelection|4D.EntitySelection|&#8594;|Entity selection to intersect with|
|Result|4D.EntitySelection|&#8592;|New entity selection or new reference to the original entity selection|
<!-- END REF -->

#### Description

The `.or()` function <!-- REF #EntitySelectionClass.or().Summary -->combines the entity selection with the *entity* or *entitySelection* parameter using the logical (not exclusive) OR operator<!-- END REF -->; it returns a new, unordered entity selection that contains all the entities from the entity selection and the parameter.

*	If you pass *entity* as parameter, you compare this entity with the entity selection. If the entity belongs to the entity selection, a new reference to the entity selection is returned. Otherwise, a new entity selection containing the original entity selection and the entity is returned.
*	If you pass *entitySelection* as parameter, you compare entity selections. A new entity selection containing the entities belonging to the original entity selection or *entitySelection* is returned (or is not exclusive, entities referenced in both selections are not duplicated in the resulting selection).

>You can compare [ordered and/or unordered entity selections](../orda/data-model.md#ordered-or-unordered-entity-selection). The resulting selection is always unordered.

If the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned. If the original entity selection is empty, a reference to *entitySelection* or an entity selection containing only *entity* is returned.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

If the original entity selection and the parameter are not related to the same dataclass, an error is raised.


#### Example 1  

```qs
 var employees1, employees2, result : cs.EmployeeSelection
 employees1 = ds.Employee.query("lastName = :1","H@") //Returns "Colin Hetrick","Grady Harness"
 employees2 = ds.Employee.query("firstName = :1","C@") //Returns "Colin Hetrick", "Cath Kidston"
 result = employees1.or(employees2) //result contains "Colin Hetrick", "Grady Harness","Cath Kidston"
```

#### Example 2  

```qs
 var employees, result : cs.EmployeeSelection
 var employee : cs.EmployeeEntity
 employees = ds.Employee.query("lastName = :1","H@") // Returns "Colin Hetrick","Grady Harness", "Sherlock Holmes"
 employee = ds.Employee.get(686) //the entity with primary key 686 does not belong to the $employees entity selection
  //It matches the employee "Mary Smith"

 result = employees.or(employee) //result contains "Colin Hetrick", "Grady Harness", "Sherlock Holmes", "Mary Smith"
```

<!-- END REF -->


<!-- REF EntitySelectionClass.orderBy().Desc -->
## .orderBy()   

<!-- REF #EntitySelectionClass.orderBy().Syntax -->
**.orderBy**( *pathString* : string ) : 4D.EntitySelection<br/>**.orderBy**( *pathObjects* : collection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.orderBy().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|pathString |string	|&#8594;|Attribute path(s) and sorting instruction(s) for the entity selection|
|pathObjects |collection|&#8594;|collection of criteria objects|
|Result|4D.EntitySelection|&#8592;|New entity selection in the specified order|
<!-- END REF -->

#### Description

The `.orderBy()` function <!-- REF #EntitySelectionClass.orderBy().Summary -->returns a new [ordered](../orda/data-model.md#ordered-or-unordered-entity-selection) entity selection containing all entities of the entity selection in the order specified by *pathString* or *pathObjects* criteria<!-- END REF -->.

> This function does not modify the original entity selection.

You must use a criteria parameter to define how the entities must be sorted. Two different parameters are supported:

*	*pathString* (string): this parameter contains a formula made of 1 to X attribute paths and (optionally) sort orders, separated by commas. The syntax is:

```qs
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

The order in which the attributes are passed determines the sorting priority of the entities. By default, attributes are sorted in ascending order. You can set the sort order of a property in the criteria string, separated from the property path by a single space: pass "asc" to sort in ascending order or "desc" in descending order.

*	*pathObjects* (collection): each element of the collection contains an object structured in the following way:

```json
{
    "propertyPath": string,
    "descending": boolean
}
```

By default, attributes are sorted in ascending order ("descending" is false).

You can add as many objects in the criteria collection as necessary.

>Null values are evaluated as less than other values.

#### Example


```qs
// order by formula
 sortedEntitySelection = entitySelection.orderBy("firstName asc, salary desc")
 sortedEntitySelection = entitySelection.orderBy("firstName")

  // order by collection with or without sort orders
 orderColl = newCollection
 orderColl.push(newObject("propertyPath","firstName","descending",false))
 orderColl.push(newObject("propertyPath","salary","descending",true))
 sortedEntitySelection = entitySelection.orderBy(orderColl)

 orderColl = newCollection
 orderColl.push(newObject("propertyPath","manager.lastName"))
 orderColl.push(newObject("propertyPath","salary"))
 sortedEntitySelection = entitySelection.orderBy(orderColl)
```


<!-- END REF -->


<!-- REF EntitySelectionClass.orderByFormula().Desc -->
## .orderByFormula( )   


<!-- REF #EntitySelectionClass.orderByFormula().Syntax -->
**.orderByFormula**( *formulaString* : string \{ , *sortOrder* : integer \} \{ , *settings* : object\} ) : 4D.EntitySelection<br/>**.orderByFormula**( *formulaObj* : object \{ , *sortOrder* : integer \} \{ , *settings* : object} ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.orderByFormula().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formulaString|string|&#8594;|formula string|
|formulaObj|4D.Formula|&#8594;|formula object|
|sortOrder |integer|&#8594;|`kAscending` (default) or `kDescending`|
|settings|object|&#8594;|Parameter(s) for the formula|
|Result|4D.EntitySelection|&#8592;|New ordered entity selection|
<!-- END REF -->

#### Description

The `.orderByFormula()` function <!-- REF #EntitySelectionClass.orderByFormula().Summary -->returns a new, ordered entity selection<!-- END REF --> containing all entities of the entity selection in the order defined through the *formulaString* or *formulaObj* and, optionally, *sortOrder* and *settings* parameters.

>This function does not modify the original entity selection.

You can use either a *formulaString* or a *formulaObj* parameter:

- *formulaString*: you pass a QodlyScript expression such as "Year of(this.birthDate)".
- *formulaObj*: pass a valid formula object created using the `formula` or `formula from string` command.

The *formulaString* or *formulaObj* is executed for each entity of the entity selection and its result is used to define the position of the entity in the returned entity selection. The result must be of a sortable type (boolean, date, number, text, time, null).

>A null result is always the smallest value.

By default if you omit the *sortOrder* parameter, the resulting entity selection is sorted in ascending order. Optionnally, you can pass one of the following values in the *sortOrder* parameter:

|Constant|	Value|	Comment|
|---|---|---|
|kAscending|	0	|Ascending sort order (default)|
|kDescending|	1	|Descending sort order|

Within the *formulaString* or *formulaObj*, the processed entity and thus its attributes are available through the `This` command (for example, `this.lastName`).

You can pass parameter(s) to the formula using the `args` property (object) of the `settings` parameter: the formula receives the `settings.args` object in a special variable named `$1`.

#### Example 1

Sorting students using a formula provided as text:

```qs
 var es1, es2 : cs.StudentsSelection
 es1 = ds.Students.query("nationality = :1","French")
 es2 = es1.orderByFormula("length(this.lastname)") //ascending by default
 es2 = es1.orderByFormula("length(this.lastname)",kDescending)
```

Same sort order but using a formula object:

```qs
 var es1, es2 : cs.StudentsSelection
 var vFormula : 4D.Function
 es1 = ds.Students.query("nationality = :1","French")
 vFormula = formula(length(this.lastname))
 es2 = es1.orderByFormula(vFormula) // ascending by default
 es2 = es1.orderByFormula(vFormula,kDescending)
```


#### Example 2  

A formula is given as a formula object with parameters; `settings.args` object is received in the `$1` variable in the ***computeAverage*** method.

In this example, the "marks" object field in the **Students** dataClass contains students' grades for each subject. A single formula object is used to compute a student's average grade with different coefficients for schoolA and schoolB.

```qs
 var es1, es2 : cs.StudentsSelection
 var vFormula, schoolA, schoolB : object
 es1 = ds.Students.query("nationality = :1","French")
 vFormula = formula(computeAverage($1))

 schoolA = newObject() //settings object
 schoolA.args = newObject("english",1,"math",1,"history",1) // Coefficients to compute an average

  //Order students according to school A criteria
 es2 = es1.entitySelection.orderByFormula(vFormula,schoolA)

 schoolB = newObject() //settings object
 schoolB.args = newObject("english",1,"math",2,"history",3) // Coefficients to compute an average

  //Order students according to school B criteria
 es2 = es1.entitySelection.orderByFormula(vFormula,kDescending,schoolB)
```

```qs
  //
  // computeAverage method
  // -----------------------------
 declare (coefList : object) -> result : integer
 var subject : string
 var vAverage, vSum : integer

 vAverage = 0
 vSum = 0

 forEach(subject,coefList)
    vSum = vSum+coefList[subject]
 end

 forEach(subject,this.marks)
    vAverage = vAverage+(this.marks[subject]*coefList[subject])
 end

 result = vAverage/vSum
```

<!-- END REF -->



<!-- REF EntitySelectionClass.query().Desc -->
## .query()   


<!-- REF #EntitySelectionClass.query().Syntax -->
**.query**( *queryString* : string \{ , *...value* : any \} \{ , *querySettings* : object \} ) : 4D.EntitySelection <br/>**.query**( *formula* : object \{ , *querySettings* : object \} ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.query().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|queryString |string |&#8594; |Search criteria as string|
|formula |4D.Formula |&#8594; |Search criteria as formula object|
|value|any|&#8594;|Value(s) to use for indexed placeholder(s)|
|querySettings|object|&#8594;|Query options: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan|
|Result|4D.EntitySelection|&#8592;|New entity selection made up of entities from entity selection meeting the search criteria specified in *queryString* or *formula*|<!-- END REF -->

#### Description

The `.query()` function <!-- REF #EntitySelectionClass.query().Summary -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s) among all the entities in the entity selection<!-- END REF -->, and returns a new object of type `EntitySelection` containing all the entities that are found. Lazy loading is applied.

>This function does not modify the original entity selection.

If no matching entities are found, an empty `EntitySelection` is returned.

For detailed information on how to build a query using *queryString*, *value*, and *querySettings* parameters, please refer to the DataClass [`.query()`](DataClassClass.md#query) function description.

>By default if you omit the **order by** statement in the *queryString*, the returned entity selection is [not ordered](../orda/data-model.md#ordered-or-unordered-entity-selection).

#### Example 1  


```qs
 var entitySelectionTemp, myEntitySel : cs.EmployeeSelection
 entitySelectionTemp = ds.Employee.query("lastName = :1","M@")
 myEntitySel = entitySelectionTemp.query("manager.lastName = :1","S@")
```


#### Example 2  

More examples of queries can be found in the DataClass [`.query()`](DataClassClass.md#query) page.

#### See also

[`.query()`](DataClassClass.md#query) for dataclass

<!-- END REF -->



<!-- REF EntitySelectionClass.queryPath.Desc -->
## .queryPath   


<!-- REF #EntitySelectionClass.queryPath.Syntax -->
**.queryPath** : string<!-- END REF -->


#### Description

The `.queryPath` property <!-- REF #EntitySelectionClass.queryPath.Summary -->contains a detailed description of the query as it was actually performed by Qodly<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPath":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.md#query) page.

<!-- END REF -->



<!-- REF EntitySelectionClass.queryPlan.Desc -->
## .queryPlan   


<!-- REF #EntitySelectionClass.queryPlan.Syntax -->
**.queryPlan** : string<!-- END REF -->


#### Description

The `.queryPlan` property <!-- REF #EntitySelectionClass.queryPlan.Summary --> contains a detailed description of the query just before it is executed (i.e., the planned query)<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPlan":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.md#query) page.

<!-- END REF -->


<!-- REF EntitySelectionClass.selected().Desc -->
## .selected()   


<!-- REF #EntitySelectionClass.selected().Syntax -->
**.selected**( *selectedEntities* : 4D.EntitySelection ) : object<!-- END REF -->

<!-- REF #EntitySelectionClass.selected().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|selectedEntities |4D.EntitySelection|&#8594;|Entity selection with entities for which to know the rank in the entity selection|
|Result|object|&#8592;|Range(s) of selected entities in entity selection|
<!-- END REF -->

#### Description

The `.selected()` function <!-- REF #EntitySelectionClass.selected().Summary -->returns an object describing the position(s) of *selectedEntities* in the original entity selection<!-- END REF -->.

>This function does not modify the original entity selection.

Pass in the *selectedEntities* parameter an entity selection containing entities for which you want to know the position in the original entity selection. *selectedEntities* must be an entity selection belonging to the same dataclass as the original entity selection, otherwise an error 1587 - "The entity selection comes from an incompatible dataclass" is raised.

#### Result

The returned object contains the following properties:

|Property|Type|Description
|---|---|---|
|ranges|collection|collection of range objects|
|ranges[].start|integer|First entity index in the range|
|ranges[].end|integer|Last entity index in the range|

If a `ranges` property contains a single entity, `start = `end`. Index starts at 0.


The function returns an empty collection in the `ranges` property if the original entity selection or the *selectedEntities* entity selection is empty.

#### Example

```qs
var invoices, cashSel, creditSel : cs.InvoicesSelection
var result1, result2 : object

invoices = ds.Invoices.all()

cashSel = ds.Invoices.query("payment = :1", "Cash")
creditSel = ds.Invoices.query("payment IN :1", newCollection("Cash", "Credit Card"))

result1 = invoices.selected(cashSel)
result2 = invoices.selected(creditSel)

//result1 = {ranges:[{start:0;end:0},{start:3;end:3},{start:6;end:6}]}
//result2 = {ranges:[{start:0;end:1},{start:3;end:4},{start:6;end:7}]}

```

<!-- END REF -->







<!-- REF EntitySelectionClass.slice().Desc -->
## .slice()   

<!-- REF #EntitySelectionClass.slice().Syntax -->
**.slice**( *startFrom* : integer \{ , *end* : integer \} ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.slice().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|startFrom |integer	|&#8594;|Index to start the operation at (included)	|
|end 	|integer|&#8594;|End index (not included)|
|Result|4D.EntitySelection|&#8592;|New entity selection containing sliced entities (shallow copy)|
<!-- END REF -->

#### Description

The `.slice()` function <!-- REF #EntitySelectionClass.slice().Summary -->returns a portion of an entity selection into a new entity selection<!-- END REF -->, selected from the *startFrom* index to the *end* index (*end* is not included) or to the last entity of the entity selection. This method returns a shallow copy of the entity selection (it uses the same entity references).

>This function does not modify the original entity selection.

The returned entity selection contains the entities specified by *startFrom* and all subsequent entities up to, but not including, the entity specified by *end*. If only the *startFrom* parameter is specified, the returned entity selection contains all entities from *startFrom* to the last entity of the original entity selection.

*	If *startFrom* < 0, it is recalculated as *startFrom: = startFrom+length* (it is considered as the offset from the end of the entity selection). If the calculated value < 0, *startFrom* is set to 0.
*	If *startFrom >=  length*, the function returns an empty entity selection.
*	If *end* < 0, it is recalculated as *end: = end+length*.
*	If *end < startFrom* (passed or calculated values), the method does nothing.

If the entity selection contains entities that were dropped in the meantime, they are also returned.

#### Example 1

You want to get a selection of the first 9 entities of the entity selection:

```qs
var sel, sliced : cs.EmployeeSelection
sel = ds.Employee.query("salary > :1",50000)
sliced = sel.slice(0,9) //
```


#### Example 2

Assuming we have ds.Employee.all().length = 10

```qs
var slice : cs.EmployeeSelection
slice = ds.Employee.all().slice(-1,-2) //tries to return entities from index 9 to 8,
	//but since 9 > 8, returns an empty entity selection

```

<!-- END REF -->


<!-- REF EntitySelectionClass.sum().Desc -->
## .sum()   

<!-- REF #EntitySelectionClass.sum().Syntax -->
**.sum**( *attributePath* : string ) : number<!-- END REF -->

<!-- REF #EntitySelectionClass.sum().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attributePath |string|&#8594;|Path of the attribute to be used for calculation|
|Result|number|&#8592;|Sum of entity selection values|
<!-- END REF -->

#### Description


The `.sum()` function <!-- REF #EntitySelectionClass.sum().Summary -->returns the sum for all *attributePath* values in the entity selection<!-- END REF -->.

`.sum()` returns 0 if the entity selection is empty.

The sum can only be done on values of number type. If the *attributePath* is an object property, only numerical values are taken into account for the calculation (other value types are ignored). In this case, if *attributePath* leads to a property that does not exist in the object or does not contain any numeric values, `.sum()` returns 0.

An error is returned if:

*	*attributePath* is not a numerical or an object attribute,
*	*attributePath* is a related attribute,
*	*attributePath* is not found in the entity selection dataclass.



#### Example

```qs
var sel : cs.EmployeeSelection
var sum : number

sel = ds.Employee.query("salary < :1",20000)
sum = sel.sum("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.toCollection().Desc -->
## .toCollection( )   


<!-- REF #EntitySelectionClass.toCollection().Syntax -->
**.toCollection**( \{ *options* : integer \{ , *begin* : integer \{ , *howMany* : integer \} } ) : collection<br/>**.toCollection**( *filterString* : string \{, *options* : integer \{ , *begin* : integer \{ , *howMany* : integer \}}} ) : collection<br/>**.toCollection**( *filterCol* : collection \{, *options* : integer \{ , *begin* : integer \{ , *howMany* : integer \}}} ) : collection<!-- END REF -->

<!-- REF #EntitySelectionClass.toCollection().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|filterString |string|&#8594;|string with entity attribute path(s) to extract|
|filterCol |collection|&#8594;|collection of entity attribute path(s) to extract|
|options|integer|&#8594;|`kWithPrimaryKey`: adds the primary key<br/>`kWithStamp`: adds the stamp|
|begin|integer|	&#8594;|Designates the starting index|
|howMany|integer|&#8594;|Number of entities to extract|
|Result|collection|&#8592;|collection of objects containing attributes and values of entity selection|
<!-- END REF -->

#### Description

The `.toCollection()` function <!-- REF #EntitySelectionClass.toCollection().Summary -->creates and returns a collection where each element is an object containing a set of properties and values <!-- END REF -->corresponding to the attribute names and values for the entity selection.

If no filter parameter is passed or the first parameter contains an empty string or `*`, all the attributes are extracted. Attributes with [kind](DataClassClass.md#attributename) property as "relatedEntity" are extracted with the simple form: an object with property `\_\_KEY` (primary key). Attributes with kind property as "relatedEntities" are not extracted.

Or, you can designate the entity attributes to extract using a filter parameter. You can use one of these two filters:

*	*filterString* --a string with property paths separated with commas: "propertyPath1, propertyPath2, ...".
*	*filterCol* --a collection of strings containing property paths: \["propertyPath1","propertyPath2",...]


If a filter is specified for an attribute of the `relatedEntity` kind:

*	propertyPath = "relatedEntity" -> it is extracted with simple form
*	propertyPath = "relatedEntity.*" -> all the properties are extracted
*	propertyPath = "relatedEntity.propertyName1, relatedEntity.propertyName2, ..." -> only those properties are extracted


If a filter is specified for an attribute of the `relatedEntities` kind:

*	propertyPath = "relatedEntities.*" -> all the properties are extracted
*	propertyPath = "relatedEntities.propertyName1, relatedEntities.propertyName2, ..." -> only those properties are extracted



In the *options* parameter, you can pass the `kWithPrimaryKey` and/or `kWithStamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

The *begin* parameter allows you to indicate the starting index of the entities to extract. You can pass any value between 0 and entity selection length-1.

The *howMany* parameter lets you specify the number of entities to extract, starting with the one specified in *begin*. Dropped entities are not returned but are taken into account according to *howMany*. For example, if *howMany* =  3 and there is 1 dropped entity, only 2 entities are extracted.

If *howMany* > length of the entity selection, the method returns (length - *begin*) objects.

An empty collection is returned if:

*	the entity selection is empty, or
*	*begin* is greater than the length of the entity selection.


#### Example 1

The following structure will be used throughout all examples of this section:

![](img/structure5.png)


Example without filter or options parameter:

```qs
 var employeesCollection : collection
 var employees : cs.EmployeeSelection

 employeesCollection = newCollection
 employees = ds.Employee.all()
 employeesCollection = employees.toCollection()
```

Returns:

```json
[
    {
        "ID": 416,
        "firstName": "Gregg",
        "lastName": "Wahl",
        "salary": 79100,
        "birthDate": "1963-02-01T00:00:00.000Z",
        "woman": false,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412

        }
    },
    {
        "ID": 417,
        "firstName": "Irma",
        "lastName": "Durham",
        "salary": 47000,
        "birthDate": "1992-06-16T00:00:00.000Z",
        "woman": true,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    }
]
```

#### Example 2

Example with options:

```qs
var employeesCollection : collection
var employees : cs.EmployeeSelection

employeesCollection = newCollection
employees = ds.Employee.all()
employeesCollection = employees.toCollection("",kWithPrimaryKey+kWithStamp)
```

Returns:

```json
[
    {
        "__KEY": 416,
        "__STAMP": 1,
        "ID": 416,
        "firstName": "Gregg",
        "lastName": "Wahl",
        "salary": 79100,
        "birthDate": "1963-02-01T00:00:00.000Z",
        "woman": false,
        "directReports": 412,
        "employer": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    },
    {
        "__KEY": 417,
        "__STAMP": 1,
        "ID": 417,
        "firstName": "Irma",
        "lastName": "Durham",
        "salary": 47000,
        "birthDate": "1992-06-16T00:00:00.000Z",
        "woman": true,
        "directReports": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    }]
```

#### Example 3  

Example with slicing and filtering on properties:

```qs
var employeesCollection, filter : collection
var employees : cs.EmployeeSelection

employeesCollection = newCollection
filter = newCollection
filter.push("firstName")
filter.push("lastName")

employees = ds.Employee.all()
employeesCollection = employees.toCollection(filter,0,0,2)
```

Returns:

```json
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl"
    },
    {
        "firstName": "Irma",
        "lastName": "Durham"
    }
]

```


#### Example 4  

Example with `relatedEntity` type with simple form:


```qs
var employeesCollection : collection
employeesCollection = newCollection
employeesCollection = employees.toCollection("firstName,lastName,employer")
```

returns:

```json
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "employer": {
            "__KEY": 20
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "__KEY": 20
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "__KEY": 20
        }
    }
   ]
```

#### Example 5  

Example with *filterCol* parameter:

```qs
var employeesCollection, coll : collection
employeesCollection = newCollection
coll = newCollection("firstName","lastName")
employeesCollection = employees.toCollection(coll)
```

Returns:

```json
[
    {
        "firstName": "Joanna",
        "lastName": "Cabrera"
    },
    {
        "firstName": "Alexandra",
        "lastName": "Coleman"
    }
]
```

#### Example 6  

Example with extraction of all properties of a relatedEntity:

```qs
var employeesCollection, coll : collection
employeesCollection = newCollection
coll = newCollection
coll.push("firstName")
coll.push("lastName")
coll.push("employer.*")
employeesCollection = employees.toCollection(coll)
```

Returns:

```json
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    }
  ]
```

#### Example 7  

Example with extraction of some properties of a relatedEntity:

```qs
var employeesCollection : collection
employeesCollection = newCollection
employeesCollection = employees.toCollection("firstName, lastName, employer.name")
```

```json
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",

        "employer": {
            "name": "India Astral Secretary"
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "name": "India Astral Secretary"
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "name": "India Astral Secretary"
        }
    }]
```

#### Example 8  

Example with extraction of some properties of `relatedEntities`:

```qs
 var employeesCollection : collection
 employeesCollection = newCollection
 employeesCollection = employees.toCollection("firstName, lastName, directReports.firstName")
```

Returns:

```json
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "directReports": []
    },
    {
        "firstName": "Mike",
        "lastName": "Phan",
        "directReports": [
            {
                "firstName": "Gary"
            },
            {
                "firstName": "Sadie"
            },
            {
                "firstName": "Christie"
            }
        ]
    },
    {
        "firstName": "Gary",

        "lastName": "Reichert",
        "directReports": [
            {
                "firstName": "Rex"
            },
            {
                "firstName": "Jenny"
            },
            {
                "firstName": "Lowell"
            }
        ]
    }]
```

#### Example 9  

Example with extraction of all properties of `relatedEntities`:

```qs
var employeesCollection : collection
employeesCollection = newCollection
employeesCollection = employees.toCollection("firstName, lastName, directReports.*")

```

```json
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "directReports": []
    },    
    {
        "firstName": "Mike",
        "lastName": "Phan",
        "directReports": [
            {
                "ID": 425,
                "firstName": "Gary",
                "lastName": "Reichert",
                "salary": 65800,
                "birthDate": "1957-12-23T00:00:00.000Z",
                "woman": false,
                "managerID": 424,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 424
                }
            },
            {
                "ID": 426,
                "firstName": "Sadie",
                "lastName": "Gallant",
                "salary": 35200,
                "birthDate": "2022-01-03T00:00:00.000Z",
                "woman": true,
                "managerID": 424,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 424
                }
            }
                   ]
    },
    {
        "firstName": "Gary",
        "lastName": "Reichert",
        "directReports": [
            {
                "ID": 428,
                "firstName": "Rex",
                "lastName": "Chance",
                "salary": 71600,
                "birthDate": "1968-08-09T00:00:00.000Z",
                "woman": false,

                "managerID": 425,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 425
                }
            },
            {
                "ID": 429,
                "firstName": "Jenny",
                "lastName": "Parks",
                "salary": 51300,
                "birthDate": "1984-05-25T00:00:00.000Z",
                "woman": true,
                "managerID": 425,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 425
                }
            }
           ]
 }
]
```


<!-- END REF -->
