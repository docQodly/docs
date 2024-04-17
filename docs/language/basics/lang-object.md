---
id: lang-object
title: Object
---

Variables, attributes or expressions of the object type can contain various types of data. The structure of QodlyScript objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation:

- A property name is always a text, for example "Name". It must follow [specific rules](lang-identifiers.md#object-properties).

- A property value can be of the following type:
	- number (number, integer)
	- string
	- null
	- boolean
	- date (date type or ISO date format string)
	- object(1) (objects can be nested on several levels)
	- picture(2)
	- collection

(1)ORDA objects such as [entities](../../orda/data-model.md#entity) or [entity selections](../../orda/data-model.md#entity-selection) cannot be stored in **attributes of the object type**; however, they are fully supported in **object variables**.

(2)When exposed as text in the debugger or exported to JSON, picture object properties print "[object Picture]".

:::note

Attribute names are case-sensitive.

:::

You manage object type variables, attributes or expressions using the [object notation](#syntax-basics) or the commands such as `instanceOf`.

Each property value accessed through the object notation is considered an expression. You can use such values wherever expressions are expected.

## Instantiation

Objects must have been instantiated, otherwise trying to read or modify their properties will generate a syntax error.

Object instantiation can be done in one of the following ways:

- using the [`newObject`](../commands/newObject.md) command,
- using the `{}` operator.

:::info

Several commands and functions return objects, for example [`jsonParse`](../json.md#jsonparse) or [`file`](../FileClass.md#file). In this case, it is not necessary to instantiate the object explicitly, the QodlyScript language does it for you.

:::


### `newObject` command

The [`newObject`](../commands/newObject.md) command creates a new empty or prefilled object and returns its reference.

Examples:

```qs
 var obVar : object //declaration of an object type variable
 obVar = newObject //instantiation and assignment to the variable

 var obFilled : object
 obFilled = newObject("name","Smith","age",42) //instantiation and assignment of a prefilled object
```


### `{}` operator

The `{}` operator allows you to create an **object literal**. An object literal is a semi-column separated list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`). The object literal syntax creates empty or filled objects.

Since any property value is considered an expression, you can create sub-objects using `{}` in property values. You can also create and reference **collection literals**.

Examples:

```qs
 var o, o2, o3 : object //declaration of object variables
 o = {} // instantiation of an empty object
 o2 = {a: "foo", b: 42, c: {}, d: (toto) ? true : false } // instantiation of an object
    // with properties {"a":"foo","b":42,"c":{},"d":false})

    // same properties using variables
 var a : string
 var b : integer
 var c : object
 a = "foo"
 b = 42
 c = {}
 o3 = { a:a, b:b, c:c } // {"a":"foo",b":42,"c":{}}
```


You can mix the `newObject` and literal syntaxes:

```qs
var o : object
var result : string
o = {\
    ob1: {age: 42}, \
    ob2: newObject("message", "Hello"), \
    form1: formula(return this.ob1.age+10), \
    form2 : formula(return $1+" World")), \
    col: [1, 2, 3, 4, 5, 6]\
    }

o.form1()  //52
result = o.form2(o.ob2.message)  // Hello World
col = o.col[5] //6
```


### Regular or shared object  

You can create two types of objects:

- regular (non-shared) objects, using the `newObject` command or object literal syntax (`{}`). These objects can be edited without any specific access control but cannot be shared between processes.
- shared objects, using the [`newSharedObject`](../commands/newSharedObject.md) command. These objects can be shared between processes, including preemptive threads. Access to these objects is controlled by [`use...end`](lang-shared.md#useend) structures.


## Syntax basics

Object notation can be used to access object property values through a chain of tokens.

### Object properties

With object notation, object properties can be accessed in two ways:

- using a "dot" symbol:
    > object.propertyName

Example:

```qs
     employee.name = "Smith"
```

- using a string within square brackets:
    > object["propertyName"]

Examples:

```qs
     vName = employee["name"]
     //or also:
     property = "name"
	 vName = employee[property]
```

Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:

```qs
 vAge = employee.children[2].age
```

Object notation is available on any language element that can contains or returns an object, i.e:

- **Objects** themselves (stored in variables, attributes, object properties, or collection elements).
    Examples:

```qs
     age = myObjVar.employee.age //variable
     addr = myEntity.data_obj.address //attribute
     city = addr.city //property of an object
     val = myCollection[3].subvalue //collection element
```
- **QuodlyScript commands** that return objects.
    Example:

```qs
     storage.mydata.prop2 = 10
```

- **Methods** that return objects.
    Example:

```qs
      //myMethod1
     declare -> result : object
     result = newObject("a",10,"b",20)

      //myMethod2
     value = myMethod1.a //10
```

- **Collections**
    Example:

```qs
     myColl.length //size of the collection
```


### Null value

When using the object notation, the **null** value is supported though the `null` command. This command can be used to assign or compare the null value to object properties or collection elements, for example:

```qs
 myObject.address.zip = null
 if(myColl[2] == null)
```

For more information, please refer to the [`null`](lang-null-undefined.md#null) description.

### Undefined value

Evaluating an object property can sometimes produce an **undefined** value. Typically when trying to read or assign undefined expressions, the QodlyScript will generate errors. This does not happen in the following cases:

- Reading a property of an undefined object or value returns `undefined`; assigning an undefined value to variables has the same effect as calling [`clearVariable`](lang-variables.md#clearvariable) with them:

```qs
     var o : object
     var val : integer
     val = 10 //val:10
     val = o.a //o.a is undefined (no error), and assigning this value clears the variable
      //val:0
```

- Reading the **length** property of an undefined collection produces 0:

```qs
     var c : collection //variable created but no collection is instanciated
     size = c.length //size = 0
```

- An undefined value passed as parameter to a project method is automatically converted to 0 or "" according to the declared parameter type.

```qs
     var o : object
     mymethod(o.a) //pass an undefined parameter

      //In mymethod method
     declare (param : text)
      // param: ""
```

- A condition expression is automatically converted to `false` when evaluating to `undefined` with the `if` and `case of` keywords:

```qs
     var o : object
     if(o.a) // false
     end
     switch
        :(o.a) // false
     end
```

- Assigning an undefined value to an existing object property reinitializes or clears its value, depending on its type:
 - object, collection: null
 - picture: empty picture
 - boolean: false
 - string: ""
 - number: 0
 - date: !00-00-00! if "Use date type" setting is enabled, otherwise ""
 - time: 0 (number of ms)
 - undefined, null: no change

```qs
     var o : object
     o = newObject("a",2)
     o.a = o.b //o.a = 0
```

- Assigning an undefined value to a non existing object property does nothing.

When expressions of a given type are expected in your code, you can make sure they have the correct type even when evaluated to `undefined` by surrounding them with the appropriate QodlyScript cast command: `string`, `num`, `date`, `time`, `bool`. These commands return an empty value of the specified type when the expression evaluates to `undefined`. For example:

```qs
 myString = lowercase(string(o.a.b)) //make sure you get a string value even if undefined
  //to avoid errors in the code
```


## Examples

- Writing and reading objects:

```qs
  // Using newObject
 var myObj : object //declares an object variable
 myObj = newObject //instanciates object and assigns to the variable
 myObj.age = 56
 age = myObj.age //56

  // Alternate code
 var myObj2 : object
 myObj2 = {"age":42} //instanciates object and adds the age property
 myObj2.age //42

```

- Create a property and assign values, including objects:

```qs
 var Emp : object
 Emp = newObject
 Emp.city = "London" //creates the city property and sets its value to "London"
 Emp.city = "Paris" //modifies the city property
 Emp.phone = {"office":"123456789","home":"0011223344"}
  //creates the phone property and sets its value to an object
```

- Get a value in a sub-object:

```qs
 vCity = Emp.city //"Paris"
 vPhone = Emp.phone.home //"0011223344"
```
- You can access properties as strings using the `[]` operator

```qs
 Emp["city"] = "Berlin" //modifies the city property
  //this can be useful for creating properties through variables
 var addr : string
 var i : integer
 addr = "address"
 for(i,1,4)
    Emp[addr+string(i)] = ""
 end
  // creates 4 empty properties "address1...address4" in the Emp object
```
