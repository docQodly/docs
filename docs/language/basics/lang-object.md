---
id: lang-object
title: Object
---

Variables, attributes or expressions of the object type can contain various types of data. The structure of QodlyScript objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation: 

- A property name is always a text, for example "Name". It must follow [specific rules](lang-identifiers.md#object-properties).

- A property value can be of the following type:
	- number (real, integer)
	- string
	- null
	- boolean
	- date (date type or ISO date format string)
	- object(1) (objects can be nested on several levels)
	- picture(2)
	- collection

(1)ORDA objects such as [entities](../../concepts/orda/data-model.md#entity) or [entity selections](../../concepts/orda/data-model.md#entity-selection) cannot be stored in **attributes of the object type**; however, they are fully supported in **object variables**. 

(2)When exposed as text in the debugger or exported to JSON, picture object properties print "[object Picture]". 

:::note

Attribute names are case-sensitive.

:::

You manage object type variables, attributes or expressions using the [object notation](#syntax-basics) or the commands such as `instanceOf`. 

Each property value accessed through the object notation is considered an expression. You can use such values wherever expressions are expected. 

## Instantiation 

Objects must have been instantiated, otherwise trying to read or modify their properties will generate a syntax error.

Object instantiation can be done in one of the following ways:

- using the [`newObject`](../object.md#newobject) command,
- using the `{}` operator.

:::info

Several commands and functions return objects, for example [`jsonParse`](../json.md#jsonparse) or [`file`](../FileClass.md#file). In this case, it is not necessary to instantiate the object explicitly, the QodlyScript language does it for you.

:::


### `newObject` command

The [`newObject`](../object.md#newobject) command creates a new empty or prefilled object and returns its reference.

Examples:

```4d
 var obVar : object //declaration of an object type variable
 obVar=newObject //instantiation and assignment to the variable
 
 var obFilled : object 
 obFilled=newObject("name","Smith","age",42) //instantiation and assignment of a prefilled object
```


### `{}` operator

The `{}` operator allows you to create an **object literal**. An object literal is a semi-column separated list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`). The object literal syntax creates empty or filled objects.

Since any property value is considered an expression, you can create sub-objects using `{}` in property values. You can also create and reference **collection literals**.

Examples:

```4d
 var o, o2, o3 : object //declaration of object variables
 o = {} // instantiation of an empty object 
 o2 = {a: "foo", b: 42, c: {}, d: (toto) ? true : false } // instantiation of an object
    // with properties {"a":"foo","b":42,"c":{},"d":false})

    // same properties using variables
 var a : string
 var b : integer
 var c : object
 a="foo"
 b=42
 c={}
 o3={ a:a, b:b, c:c } // {"a":"foo",b":42,"c":{}}
```


You can mix the `newObject` and literal syntaxes:

```4d
var o : object
var result : string
o:={\
    ob1: {age: 42}, \
    ob2: newObject("message", "Hello"), \
    form1: formula(return this.ob1.age+10), \
    form2 : formula(return $1+" World")), \
    col: [1, 2, 3, 4, 5, 6]\
    }

o.form1()  //52
result=o.form2(o.ob2.message)  // Hello World
col:=o.col[5] //6
```


### Regular or shared object  

You can create two types of objects:

- regular (non-shared) objects, using the `newObject` command or object literal syntax (`{}`). These objects can be edited without any specific access control but cannot be shared between processes. 
- shared objects, using the [`newSharedObject`](../object.md#newsharedobject) command. These objects can be shared between processes, including preemptive threads. Access to these objects is controlled by [`use...end`](lang-shared.md#useend) structures.


## Syntax basics

Object notation can be used to access object property values through a chain of tokens.

### Object properties

With object notation, object properties can be accessed in two ways:

- using a "dot" symbol:
    > object.propertyName

Example:

```4d
     employee.name="Smith"
```

- using a string within square brackets:
    > object["propertyName"]

Examples:
```4d
     vName=employee["name"]
     //or also:
     property="name"
	 vName=employee[property]
```

Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:

```4d
 vAge=employee.children[2].age
```

Object notation is available on any language element that can contains or returns an object, i.e:

- **Objects** themselves (stored in variables, attributes, object properties, object arrays, or collection elements).
    Examples:
    
```4d
     age=myObjVar.employee.age //variable
     addr=[Emp]data_obj.address //field
     city=addr.city //property of an object
     pop=aObjCountries{2}.population //object array
     val=myCollection[3].subvalue //collection element
```
- **QuodlyScript commands** that return objects.
    Example:
    
```4d
     measures=Get database measures.DB.tables
```
    
- **Methods** that return objects.
    Example:
    
```4d
      //MyMethod1
     #declare -> result : Object
     result=New object("a",10,"b",20)
     
      //myMethod2
     value=MyMethod1.a //10
```

- **Collections**
    Example:
    
```4d
     myColl.length //size of the collection
```


### Null value

When using the object notation, the **null** value is supported though the **Null** command. This command can be used to assign or compare the null value to object properties or collection elements, for example:

```4d
 myObject.address.zip=Null
 If(myColl[2]==Null)
```

For more information, please refer to the `Null` description.

### Undefined value

Evaluating an object property can sometimes produce an undefined value. Typically when trying to read or assign undefined expressions, 4D will generate errors. This does not happen in the following cases:

- Reading a property of an undefined object or value returns undefined; assigning an undefined value to variables (except arrays) has the same effect as calling `CLEAR VARIABLE` with them:

```4d
     var o : Object
     var val : Integer
     val=10 //val:10
     val=o.a //o.a is undefined (no error), and assigning this value clears the variable
      //val:0
```

- Reading the **length** property of an undefined collection produces 0:

```4d
     var c : Collection //variable created but no collection is defined
     size=c.length //size = 0
```

- An undefined value passed as parameter to a project method is automatically converted to 0 or "" according to the declared parameter type.

```4d
     var o : Object
     mymethod(o.a) //pass an undefined parameter
     
      //In mymethod method
     #declare (param : Text)
      // param: ""
```

- A condition expression is automatically converted to false when evaluating to undefined with the If and Case of keywords:

```4d
     var o : Object
     If(o.a) // false
     End if
     Case of
        :(o.a) // false
     End case
```

- Assigning an undefined value to an existing object property reinitializes or clears its value, depending on its type:
 - Object, collection: Null
 - Picture: Empty picture
 - Boolean: False
 - String: ""
 - Number: 0
 - Date: !00-00-00! if "Use date type" setting is enabled, otherwise ""
 - Time: 0 (number of ms)
 - Undefined, Null: no change

```4d
     var o : Object
     o=New object("a",2)
     o.a=o.b //o.a=0
```

- Assigning an undefined value to a non existing object property does nothing.

When expressions of a given type are expected in your code, you can make sure they have the correct type even when evaluated to undefined by surrounding them with the appropriate QodlyScript cast command: `String`, `Num`, `Date`, `Time`, `Bool`. These commands return an empty value of the specified type when the expression evaluates to undefined. For example:

```4d
 myString=Lowercase(String(o.a.b)) //make sure you get a string value even if undefined
  //to avoid errors in the code
```


## Examples

- Writing and reading objects (this example compares object notation and commands):

```4d
  // Using the object notation
 var myObj : Object //declares an object variable 
 myObj=New object //creates an object and assigns to the variable
 myObj.age=56
 age=myObj.age //56
 
  // Alternate code using commands
 var myObj2 : Object 
 OB SET(myObj2,"age",42) //creates an object and adds the age property
 age=OB Get(myObj2,"age") //42
 
  // Of course, both codes can be mixed
 var myObj3 : Object
 OB SET(myObj3,"age",10)
 age=myObj3.age //10
```

- Create a property and assign values, including objects:

```4d
 var Emp : Object
 Emp=New object
 Emp.city="London" //creates the city property and sets its value to "London"
 Emp.city="Paris" //modifies the city property
 Emp.phone=New object("office","123456789","home","0011223344")
  //creates the phone property and sets its value to an object
```

- Get a value in a sub-object is very simple using the object notation:

```4d
 vCity=Emp.city //"Paris"
 vPhone=Emp.phone.home //"0011223344"
```
- You can access properties as strings using the `[]` operator 

```4d
 Emp["city"]="Berlin" //modifies the city property
  //this can be useful for creating properties through variables
 var addr : Text
 var i : Integer
 addr="address"
 For(i,1,4)
    Emp[addr+String(i)]=""
 End for
  // creates 4 empty properties "address1...address4" in the Emp object
```
