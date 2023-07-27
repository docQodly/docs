---
id: attributes
title: Attributes
---


An attribute is an object that stores information or represents a value in the datastore class. Once you create a datastore class, you can add attributes to it. To learn how to create the different types of attributes, refer to the chapter in the User Guide manual.

By default, the datastore class is created with an attribute of type Longint named “ID,” which is defined as its primary key.

You can modify a few of the attribute’s properties when you select it in the datastore class:



Delete: Deletes the attribute from the datastore class.
Scope: Modifies the scope—public, private (), public on server (), or protected () of the attribute. A public attribute can be used from anywhere. A private attribute can only be used inside the datastore class. A protected attribute can be used from datastore classes as well as from extended datastore classes.
Name: Attribute name that you can change by double-clicking on it to render the area enterable.
Primary Key: Defines the attribute as the primary key for the datastore class.
Note: Refer to the Modifying the Primary Key section in the Datastore Classes section.
Type Icon: Displays the datastore entity type as an icon.
Type: Attribute type that you can change by double-clicking on it to render the area enterable.
Attribute Categories  
There are five categories of attributes in Wakanda:

Scalar/Storage: Scalar/storage attributes allow you to store information in the datastore class.
Relation: A relation attribute is relationship between two datastore classes that can be either N->1 or 1->N. From those two types, you can then create an N<->N relationship between three datastore classes.
Calculated: A calculated attribute does not store information; instead, it determines its value based on other values from the same entity or from other entities, attributes or datastore class methods. When a calculated attribute is referenced, the underlying “calculation” is evaluated to determine the value. You can also assign values to other attributes in the datastore class during data entry. For example, if you have an enterable “fullName” attribute, you can assign the values entered in the “fullName” attribute into two separate attributes, like “firstName” and “lastName.”
Alias: An alias attribute is built upon a relation attribute. Once an N -> 1 Relation Attribute is defined, any of the attributes within the “parent” datastore class can be directly referenced as attributes within the “child” datastore class. The result is what appears to be de-normalized data without the overhead of duplicating information. Alias attributes can reference any available attributes further up the relational tree. An alias attribute may reference either a scalar attribute or a relation attribute.
Inherited: Attributes inherited from an extended datastore class. For example, if we extend a Person datastore class and name the derived datastore class Student, the attributes from the Person datastore class are the inherited ones in the new datastore class.
Creating a Scalar Attribute  
When you add an attribute to your datastore class, a name is entered by default that you can edit it. Attribute names are case-sensitive: “firstName” and “firstNAME” are not equal.

If you enter a space, it will be replaced by an underscore. The attribute name must be unique and start with a letter, and can contain only numbers and letters. You can also include accented and non-Roman letters. For more information, please refer to the Naming Conventions section.

The attribute type list appears contains datastore classes and collections (in bold) as well as predefined data types and relation attributes:



Note: If the attribute types in the datastore class are hidden, they will reappear so that you can select one from the list for the new attribute.

You can rename an attribute by double-clicking on its name in the datastore class. For more information, refer to the Renaming an Attribute section below.

If you create a calculated attribute, the  icon appears to the left of the type icon.

If you type in a value that is not a datastore class or datastore entity name, the panel will display  for the type icon and the text entered for the data type in red:



An error message will also be displayed in the Datastore Classes area if you click on the datastore class:



Scalar Attribute Types  
Modified in v11
Wakanda manages the following data types (which are null by default until a value is entered):



Data Type	Icon	Description	Value Range
blob		A "binary large object" containing binary data.	
bool		A Boolean value: either true or false.	
byte		A sequence of 8 bits.	
date		If the Date only property is selected for this attribute type, the date value will include only the "MM/DD/YYYY" format (e.g., "10/05/2010"). Otherwise, the date value including the time, stored in UTC. The date is expressed in the following format: YYYY-MM-DDTHH:MM:ss.SSSZ (e.g., "2010-10-05T23:00:00.000Z" for October 5, 2010 in the Central European Timezone). SSS, which represent the milliseconds, which can be between 0 to 999, has been added to the date in the Dev Branch.	
duration		A duration between two dates	
image		A reference to an image file or an actual image.	
long		A whole number, greater than or equal to a standard number	-2,147,483,648 to 2,147,483,647
long64		A whole number, greater than or equal to a standard number	-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807
number		A numeric value, corresponding either to a Real, and Integer or Long Integer.	±1.7e±308 (real), -32,768 to 32,767 (integer), -2^31 to (2^31)-1 (long)
string		A sequence of characters.	
uuid		Universally Unique Identifier: a 16 bytes (128 bits) number containing 32 hexadecimal characters	
word		A 16-bit signed integer	-32767 to 32768
 
Added in v10
object		A pure JavaScript object containing any kind of property/value pairs, including arrays. This data type can be indexed. Functions and recursive references are not supported	Example:
{x:2,y:"blue",z:{a:1, b:2}, v:[3,4,5]}
Attribute Properties  
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

*attributeName* must comply with [standard rules for property names](../language/basics/lang-identifiers.md#object-properties). 

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

Alias attribute [`kind`](../language/DataClassClass.md#attributename) is "alias".  

An alias attribute inherits its data [`type`](../language/DataClassClass.md#attributename) property from the target attribute: 

- if the target attribute [`kind`](../language/DataClassClass.md#attributename) is "storage", the alias data type is of the same type,
- if the target attribute [`kind`](../language/DataClassClass.md#attributename) is "relatedEntity" or "relatedEntities", the alias data type is of the `4D.Entity` or `4D.EntitySelection` type ("*classname*Entity" or "*classname*Selection"). 

Alias attributes based upon relations have a specific [`path`](../language/DataClassClass.md#attributename) property, containing the path of their target attributes. Alias attributes based upon attributes of the same dataclass have the same properties as their target attributes (and no `path` property). 


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



