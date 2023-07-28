---
id: attributes
title: Attributes
---


An attribute is an object that stores information or represents a value in the datastore class. Once you create a datastore class, you can add attributes to it. To learn how to create the different types of attributes, refer to XXX.

A datastore class is alsways created with an attribute of type Longint named "ID" by default, which is defined as its primary key.

You can view and modify a few of the attribute’s properties when you select or hover it in the datastore class:

![attribute](img/attribute1.png)


- **Delete**: Deletes the attribute from the datastore class.
- **Scope**: A closed lock icon indicates that the attribute is **Not exposed as REST**, i.e. it can only be called from the server code. 
- **Name**: Attribute name that you can change by double-clicking on it to render the area enterable. 
	- a name in **bold** indicates that an index is associated to the attribute.
	- a name <u>underlined</u> indicates the primary key attribute 
	- a name in *italics* indicates a not exposed attribute 
- **Primary Key**: Indicates the primary key attribute for the datastore class. This attribute is mandatory, you can rename it but not delete it.
- ![icon](img/alias-icon.png): Indicates an alias attribute.
- ![icon](img/calculated-icon.png): Indicates a calculated attribute.
- **Type Icon**: Displays the datastore entity type as an icon.
- **Type**: Attribute type that you can change by double-clicking on it to render the area enterable.


## Overview  

There are several categories of attributes in Qodly:

- **Scalar/Storage**: Scalar/storage attributes allow you to store information in the datastore class.
- **Relation**: A relation attribute is relationship between two datastore classes that can be either N->1 or 1->N. From those two types, you can then create an N<->N relationship between three datastore classes.
- **Alias**: An alias attribute is built upon a relation attribute. Once an N -> 1 Relation Attribute is defined, any of the attributes within the "parent" datastore class can be directly referenced as attributes within the "child" datastore class. The result is what appears to be de-normalized data without the overhead of duplicating information. Alias attributes can reference any available attributes further up the relational tree. An alias attribute may reference either a scalar attribute or a relation attribute.
- **Calculated**: A calculated attribute does not store information; instead, it determines its value based on other values from the same entity or from other entities, attributes or datastore class methods. See XXX.

The data type list contains predefined data types as well as datastore classes and entity selections (in bold), and relation attributes if some have already been defined:

![types](img/types.png)

The type to select depend on the category of attribute to create.

You create **storage**, **relation** and **alias** attributes from the datastore class in the Model editor. **Calculated** attributes must be [created by code](XXX). However, they are displayed in the datastore class:

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


## Create a N->1 relation attribute

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

## Create a 1->N relation attribute

An 1->N relation attribute relates one entity in a datastore class to multiple entities in another datastore class. For example, each company has multiple employees.

To create a 1->N relation attribute:

1. Click on the **+** button at the right side of the **Attributes** bar in the **N** datastore class.
2. Give a [name](#attribute-name) to the attribute.
3. Select the Entity selection of the **1** datastore class in the data type menu. It means that the attribute will contain a reference to an entity selection of the 1 datastore class. 

For example, to have a 1->N relation attribute that contains all the employees in the Company datastore class, create an attribute named "staff" in the Company datastore class, and select **EmployeeSelection** as data type.

![related](img/1n-attribute.png)

After you select **EmployeeSelection**, you need to define the **path** of the relation, i.e. the matching relation attribute to create in the N datastore class. You can enter any valid attribute name, it will be automatically created in the N datastore class. 

![related](img/1n-attribute2.png)


## Create a N->N relation attribute

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

1. Click on the **+** icon to add an attribute.
2. Give a [name](#attribute-name) to the attribute.
3. Click in the Type area and enter the name of the related attribute in the datastore class upon which you want to create the alias, and type a dot (**.**)
![attribute](img/alias-create1.png)

4. Select or enter the full attribute path. It can contain one or more levels, such as "employee.company.name". An alias can be used as a part of a path of another alias. A [computed attribute](#computed-attributes) can be used in an alias path, but only as the last level of the path, otherwise, an error is returned. For example, if "fullName" is a computed attribute, an alias with path "employee.fullName" is valid. 



The alias attribute is then displayed in the datastore class with the (img/alias-icon.png) symbol. 



### Alias properties

Alias attribute [`kind`](../../language/DataClassClass.md#attributename) is "alias".  

An alias attribute inherits its data [`type`](../../language/DataClassClass.md#attributename) property from the target attribute: 

- if the target attribute [`kind`](../../language/DataClassClass.md#attributename) is "storage", the alias data type is of the same type,
- if the target attribute [`kind`](../../language/DataClassClass.md#attributename) is "relatedEntity" or "relatedEntities", the alias data type is of the `4D.Entity` or `4D.EntitySelection` type ("*classname*Entity" or "*classname*Selection"). 

Alias attributes based upon relations have a specific [`path`](../../language/DataClassClass.md#attributename) property, containing the path of their target attributes. 


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




## Attribute Properties  


Properties help you to define your application’s business rules that will be automatically applied at the server level. For example, if you define an attribute like “Unique,” Wakanda returns an error if the user tries to save the datastore entity with a value that is not unique into that attribute, and the entity will not be saved.

Wakanda manages the attribute’s properties when it is published to the Web. You can overwrite certain properties, like an attribute’s display formats in a widget on your Page.

The Properties tab allows you to modify the attribute’s properties, which are different depending on its type. The Properties tab below displays the properties for an attribute of type String:



You can modify the attribute’s name and type by double-clicking on it in the panel.

All the attribute types have the following properties:

Attribute type: Can be “Scalar” or “Calculated.” When you select “Calculated,” you are defining this attribute as a calculated attribute; therefore, you can execute code for the following events:
 On Get: When the attribute is retrieved from the server.
 On Set: When the attribute is set on the server.
 On Query: When the attribute is queried.
 On Sort: When the attribute is sorted.
Index Kind: Defines the type of index for the attribute: B-tree, Cluster, Keywords, or Automatic. If you select an Index Kind, the attribute name will be displayed in bold.
None: By default, there is no Index Kind specified.
B-tree: Standard B-Tree type index. This multipurpose index type meets most indexing requirements.
Cluster: B-Tree type index using clusters. This architecture is more efficient when the index does not contain a large number of keys, i.e., when the same values occur frequently in the data.
Keywords: This index is only available for attributes of type String, and is intended to facilitate fast searching of individual words inside of these attributes.
Automatic: Wakanda automatically selects an index according to the attribute type.
Scope: Defines the scope of the attribute: public, private (), public on server (), or protected (). A public attribute can be used from anywhere. A private attribute can only be used by code called from inside the datastore class, including calculated attribute events, datastore class methods, and events. A public on server attribute can only be accessed from the server. A protected attribute can be used from datastore classes as well as from derived datastore classes. By default, the scope is public. You can also modify this property in the datastore class by clicking to the left of the attribute name:

Mandatory: Specifies that the attribute is mandatory and cannot be null.
Identifying: A field to help better identify a datastore entity when searching relation attributes. The identifying property allows you to more easily identify an attribute in some of the Wakanda widgets. The name of the attribute (in this example, city) is in italics:

Notes: Notes that you can store with your attribute for private use.
Properties for String Attributes  
For attributes of type String, you can set the following properties in addition to the common attributes (attribute type, not null, identifying, index kind, and scope):

Text as BLOB: Text will be stored externally as a BLOB.
Autocomplete: Displays a list of possible values based on previously entered values for the same attribute during data entry of a Text Input widget if you have selected the Autocomplete property for it as well. When you select the With included widgets property for the Auto Form, the autocomplete feature is also available and can be activated by selected this property. For example, if you enter “Ab” in a first name attribute, all the first names in the datastore class that start with “Ab” will appear in a list for you to select from. Refer to the Properties tab paragraph in the Text Input chapter for an example of this feature.
Unique: Verifies that the value entered be unique. If not, an error is returned.
Multi Line: Select this option so that the attribute by default will appear as a multi-line Text Input widget when you create a Text Input widget for the attribute (*not yet implemented).
Limiting Length:  Limits the length of the text entered in the attribute. If you define the limiting length to be 10, any longer text entered will be truncated to contain 10 characters.
Length: The length of the attribute.
Min Length: Minimum length allowed for the attribute. If the text entered is shorter than the value defined for this property, an error is returned.
Max Length: Maximum length allowed for the attribute. If the text entered is longer than the value defined for this property, an error is returned.
Pattern: A RegEx to help ensure proper data entry.
Default Format:
Presentation: Select "Text" to display the Format property.
Locale: The locale for the region to format the data in the attribute. Please refer to Locale Formatting for more information.
Format: Default display format for this attribute in all the widgets defined in the same project. Please refer to the Display Formats for Attributes section for more information.
Properties for Number, Long, and Long64 Attributes  
For attributes of type Number, Long, and Long64, you can set the following properties in addition to the others for all attributes (attribute type, not null, identifying, index kind, and scope):

Autosequence: A sequence number that Wakanda automatically generates for each new datastore entity.
Unique: Verifies that the value entered be unique. If not, an error is returned.
Min Value: Minimum value allowed for the attribute. If the value entered is less than this property, an error is returned.
Max Value: Minimum value allowed for the attribute. If the value entered is more than this property, an error is returned.
Default Value: Default value for the attribute.
Default Format:
Presentation: Text, Slider, or Text and Slider.
Locale: The locale for the region to format the data in the attribute. Refer to Locale Formatting for more information.
Format: Default display format for the text presentation. Refer to the “Display Formats for Attributes” section for more information.
Slider Min: Minimum value for the Slider widget (when you select “slider” or “text and slider”). (not implemented)
Slider Max: Maximum value for the Slider widget (when you select “slider” or “text and slider”). (not implemented)
Slider Step: Steps in the values defined for the Slider widget (when you select “slider” or “text and slider”). (not implemented)
Properties for Date Attributes  
For attributes of type Date, you can set the following properties in addition to the others for all attributes (attribute type, not null, identifying, index kind, and scope):

Date only: If unchecked, the date is represented as a standard JS date with the timezone and time in "YYYY-MM-DDTHH:MM:SSZ" format. If checked, the date is represented without the timezone and time (hour, minutes, and seconds). In this case, you can send the date in the format that it is returned to you: dd!mm!yyyy (e.g., 05!10!2013) or in typical JS format in which the timezone and time (hours, minutes, and seconds) will be removed and therefore disregarded.
Default Format:
Presentation: Text only.   
Locale: The locale for the region to format the data in the attribute. Please refer to Locale Formatting for more information.
Format: Default display format. Please refer to the Display Formats for Attributes section for more information.
Properties for Image and BLOB attributes  
For attributes of type Image and Boolean, there is one additional property:

Cache duration: This property allows you to define how long (expressed in seconds) an Image or BLOB is cached client-side.


Properties for UUID Attributes  
For attributes of type UUID (universally unique identifier), you can set the following property in addition to the others for all attributes (attribute type, not null, identifying, index kind, and scope):

Autogenerate: Automatically generates a UUID by default. If you do not select this option, you must generate a UUID in your code or else the attribute will not be valid.
Properties for Object attributes  
Added in v10
For attributes of type Object, you can set the Scope and Index kind properties.

The Index kind property allows you to define the type of index to use for the Object attribute, which can either be "None" or "All paths". With the "All paths" index type, all the paths in each object will be indexed.

Properties for all other attributes  
For attributes of type Duration, Word, Byte, and Boolean, there are no additional properties apart from those listed above: attribute type, not null, identifying, index kind, and scope.

Properties for a 1->N Relation Attribute  
The following properties are specific to 1->N relation attributes:



Index kind: Type of index (None, B-tree, Cluster, and Automatic)
Composition: Generates an array for the related entities instead of a datastore entity collection. By default, this option is not selected.
Reverse Path: This option must be selected for a 1->N relation attribute.
Scope: The scope property is the same as for storage attributes.
Display Formats for Attributes  
Display formats are “templates” used to represent data visually on your Page. They do not affect the way the data is stored internally. These display formats are automatically used by some of the widgets, like Auto Forms, Grids, and Text Inputs.

Formats can be applied to attributes of type String, Number (Long, Long64, and Number), and Date.

You can transform text values by entering one of the following formats:



Format	Description
U	Uppercase (e.g., “WILLIAM JONES”)
l	Lowercase (e.g., “william jones”)
C	Capitalize first word (e.g., “William jones”)
c	Capitalize each word    (e.g., “William Jones”)
For strings, like a telephone number, you can include characters that will be used for the data entered. For example, if you have “(###) ###-####” for a US telephone number, when the user enters in 4085551212, it will be formatted as “(408) 555-1212”.

For numbers, each placeholder character has a different effect on the display of leading or trailing zeros. A leading zero is a zero that starts a number before the decimal point; a trailing zero is a zero that ends a number after the decimal point. Suppose you use the format ##0 to display three digits. If the user enters nothing in the field, the field displays 0. If the user enters 26, the field displays 26.

The table below explains the effect of each placeholder on leading and trailing zeros:


Placeholder	Effect for leading or trailing zero

#	Displays nothing
0	Displays 0
Note: Wakanda uses the “,” to delimit thousands and “.” as the decimal point for formatting numbers; however, when the value is displayed via the web browser, it will appear with the thousands separator and decimal point defined by the browser.

For percentages, enter “0%”.

For dates: the following formats are available:

d - day of month (no leading zero)
dd - day of month (two digit)
o - day of the year (no leading zeros)
oo - day of the year (three digit)
D - day name short
DD - day name long
m - month of year (no leading zero)
mm - month of year (two digit)
M - month name short
MM - month name long
y - year (two digit)
yy - year (four digit)
For example, to create a date that appears as “March 1, 2011,” you would enter “MM d, yy” in the date attribute’s format field.

For attributes of type Date, the Format field has a drop-down list that appears, assisting you in entering the appropriate date format:



For attributes of type String, you will see the following drop-down menu:



Locale Formatting  
By defining the Locale for an attribute, the browser's language will be automatically detected client-side and data for that attribute will be displayed in the locale's format.

Attribute permissions  
In this area, you can define the permissions for an attribute:



You select a group from the dropdown menu to give them permissions to perform any of the following actions on a specific attribute:

Read: Read the attribute's value.
Create: Add a value to the attribute when creating an entity.
Update: Update the attribute's value.
Note: For the moment, these permissions are applicable only to REST requests.
Attribute Events  
You can execute the following events for all attributes:

init: Executes when a new datastore entity is created after the entity's init event.
load: Executes the first time the attribute is accessed after the datastore entity is loaded. If the attribute is not accessed, this event is not executed.
set: Executes after an attribute’s value is set. In server-side code, this executes when the value is set. In client-side code, this event executes for each attribute that was modified when the datastore entity is saved or validated, or when the method serverRefresh is called.
validate: Executes just before the datastore entity's validate event executes and can fail the validation if needed.
save: Executes just before the datastore entity's save event executes and can stop the save if necessary.
remove: Executes just before the datastore entity's remove event and can stop the deletion if necessary.
Note: For more information regarding the attribute events, refer to Attribute Events.

When you click the  icon next to an event, you will be prompted to indicate in which file your JavaScript code for this event will be saved:



Depending on the event you decided to create, the following code appears:

model.Company.revenues.events.validate = function(event) {
    // Add your code here;
};
To modify the script for an event, click on the  icon to go directly to the code in the JavaScript file you specified. To delete a specific event, you must delete the code you wrote in the JavaScript file that you indicated.

Event parameter  
The listener function accepts a single event object as parameter. When the function is called, the parameter is filled with several properties that allow you to write generic code:



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

Within computed attribute functions, `this` designates the entity. Computed attributes can be used and handled as any dataclass attribute, i.e. they will be processed by [entity class](../language/EntityClass.md) or [entity selection class](../language/EntitySelectionClass.md) functions. 

:::info

ORDA computed attributes are not [**exposed**](#exposed-vs-non-exposed-functions) by default. You expose a computed attribute by adding the `exposed` keyword to the **get function** definition.

:::


