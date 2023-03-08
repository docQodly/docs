---
id: lang-control-flow
title: Control flow
---

Regardless of the simplicity or complexity of a method or function, you will always use one or more of three types of programming structures. Programming structures control the flow of execution, whether and in what order statements are executed within the code. There are three types of structures:

- **Sequential**: a sequential structure is a simple, linear structure. A sequence is a series of statements that Qodly executes one after the other, from first to last. A one-line routine, frequently used for components, is the simplest case of a sequential structure. For example: `employee.lastName=Uppercase(employee.lastName)`
- **Branching**: A branching structure allows the code to test a condition and take alternative paths, depending on the result. The condition is a Boolean expression, an expression that evaluates TRUE or FALSE. One branching structure is the [`if...else...end if`](#ifelseend-if) structure, which directs program flow along one of two paths. The other branching structure is the [`case of...else...end case`](#case-ofelseend-case) structure, which directs program flow to one of many paths.
- **Looping**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. To deal with this need, the Qodly language provides the following looping structures:

	- [`while...end while`](#whileend-while)
	- [`repeat...until`](#repeatuntil)
	- [`for...end for`](#forend-for)
	- [`for each...end for each`](#for-eachend-for-each)

The loops are controlled in two ways: either they loop until a condition is met, or they loop a specified number of times. Each looping structure can be used in either way, but `while` loops and `repeat` loops are more appropriate for repeating until a condition is met, and `for` loops are more appropriate for looping a specified number of times. `for each...end for each` allows mixing both ways and is designed to loop within objects and collections. 

:::info


Qodly allows you to embed programming structures up to a "depth" of 512 levels. 

:::


## if...else...end if

The formal syntax of the `if...else...end if` control flow structure is:

```4d
 if(Boolean_Expression)
    statement(s)
 else
    statement(s)
 end if
```

Note that the `else` part is optional; you can write:

```4d
 if(Boolean_Expression)
    statement(s)
 end if
```

The `if...else...end if` structure lets your method choose between two actions, depending on whether a test (a Boolean expression) is TRUE or FALSE. When the Boolean expression is TRUE, the statements immediately following the test are executed. If the Boolean expression is FALSE, the statements following the `else` statement are executed. The `else` statement is optional; if you omit `else`, execution continues with the first statement (if any) following the `end if`.

Note that the Boolean expression is always fully evaluated. Consider in particular the following test:

```4d
 if(MethodA & MethodB)
    ...
 end if
``` 

The expression is TRUE only if both methods are TRUE. However, even if *MethodA* returns FALSE, Qodly will still evaluate *MethodB*, which is a useless waste of time. In this case, it is more interesting to use a structure like:

```4d
 if(MethodA)
    if(MethodB)
       ...
    end if
 end if
```

The result is similar and *MethodB* is evaluated only if necessary. 

:::tip

The [ternary operator](operators.md#ternary-operator) allows writing one-line conditional expressions and can replace a full sequence of `if...else...end if` statements.

:::

#### Example 

```4d
if (event.eventType=="onmouseover") 
	webForm["helpOn_"+componentRef].show() 
else 
	webForm["helpOn_"+componentRef].hide()
end if 
```

:::tip

Branching can be performed without statements to be executed in one case or the other. When developing an algorithm or a specialized application, nothing prevents you from writing:

```4d
 if(Boolean_Expression)
 else
    statement(s)
 end if
```
or:

```4d
 if(Boolean_Expression)
    statement(s)
 else
 end if
```

:::

 
## case of...else...end case

The formal syntax of the `case of...else...end case` control flow structure is:

```4d
 case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .
 
    :(Boolean_Expression)
       statement(s)
    else
       statement(s)
 end case
```

Note that the `else` part is optional; you can write:

```4d
 case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .
 
    :(Boolean_Expression)
       statement(s)
 end case
```

As with the `if...else...end if` structure, the `case of...else...end case` structure also lets your code choose between alternative actions. Unlike the `if...else...end if` structure, the `case of...else...end case` structure can test a reasonable unlimited number of Boolean expressions and take action depending on which one is TRUE.

Each Boolean expression is prefaced by a colon (`:`). This combination of the colon and the Boolean expression is called a case. For example, the following line is a case:

```4d
:(bValidate==1)
```

Only the statements following the first TRUE case (and up to the next case) will be executed. If none of the cases are TRUE, none of the statements will be executed (if no `else` part is included).

You can include an `Else` statement after the last case. If all of the cases are FALSE, the statements following the `Else` will be executed.

#### Example

This example tests a numeric variable and writes a corresponding text:

```4d
 case of
    :(vResult==1) //Test if the number is 1
       vText="One." 
    :(vResult==2) //Test if the number is 2
       vText="Two." 
    :(vResult==3) //Test if the number is 3
       vText="Three."
    else //If it is not 1, 2, or 3
       vText="It was not one, two, or three."
 end case
```

For comparison, here is the `if...else...end if` version of the same code:

```4d
 if(vResult==1) //Test if the number is 1
    vText="One."
 else
    if(vResult==2) //Test if the number is 2
       vText="Two."
    else
       if(vResult==3) //Test if the number is 3
          vText="Three."
       else //If it is not 1, 2, or 3
          vText="It was not one, two, or three."
       end if
    end if
 end if
```

Remember that with a `case of...else...end case` structure, only the first TRUE case is executed. Even if two or more cases are TRUE, only the statements following the first TRUE case will be executed.

Consequently, when you want to implement hierarchical tests, you should make sure the condition statements that are lower in the hierarchical scheme appear first in the test sequence. For example, the test for the presence of condition1 covers the test for the presence of condition1&condition2 and should therefore be located last in the test sequence. For example, the following code will never see its last condition detected:

```4d
 case of
    :(vResult==1)
       ... //statement(s)
    :((vResult==1) & (vCondition != 2)) //this case will never be detected
       ... //statement(s)
 end case
```

In the code above, the presence of the second condition is not detected since the test "vResult==1" branches off the code before any further testing. For the code to operate properly, you can write it as follows:

```4d
 case of
    :((vResult==1) & (vCondition != 2)) //this case will be detected first
       ... //statement(s)
    :(vResult==1)
       ... //statement(s)
 end case
```

Also, if you want to implement hierarchical testing, you may consider using hierarchical code.

:::tip

Branching can be performed without statements to be executed in one case or another. When developing an algorithm or a specialized application, nothing prevents you from writing:

```4d
 case of
    :(Boolean_Expression)
    :(Boolean_Expression)
      ...
 
    :(Boolean_Expression)
       statement(s)
    else
       statement(s)
 end case
```

or:

```4d
 case of
    :(Boolean_Expression)
    :(Boolean_Expression)
       statement(s)
       ...
        
    :(Boolean_Expression)
       statement(s)
    else
 end case
```

or:
```4d
 case of
    else
       statement(s)
 end case
```

:::

## while...end while

The formal syntax of the `while...end while` control flow structure is:

```4d
 while(Boolean_Expression)
 	statement(s)
    {break}  
    {continue}
 end while
```

A `while...end while` loop executes the statements inside the loop as long as the Boolean expression is TRUE. It tests the Boolean expression at the beginning of the loop and does not enter the loop at all if the expression is FALSE.

The `break` and `continue` statements are [described below](#break-and-continue).

It is common to initialize the value tested in the Boolean expression immediately before entering the `while...end while` loop. Initializing the value means setting it to something appropriate, usually so that the Boolean expression will be TRUE and `while...end while` executes the loop.

The Boolean expression must be set by something inside the loop or else the loop will continue forever. The following loop continues forever because *NeverStop* is always TRUE:

```4d
 NeverStop:=True
 while(NeverStop)
 end while
```

If you find yourself in such a situation, where a method is executing uncontrolled, you can use the trace facilities to stop the loop and track down the problem. For more information about tracing a method, see the [Error handling](error-handling.md) page.

#### Example

```4d
 var index : Integer  
 var result : Text
 index = 0
 while (index <= 10)
 	result=result+String(index)+" "
 	index += 1
 end while
 //result: "0 1 2 3 4 5 6 7 8 9 10 "
```

## repeat...until

The formal syntax of the `repeat...until` control flow structure is:

```4d
repeat
	statement(s)
    {break}  
    {continue}
until(Boolean_Expression)
```
A `repeat...until` loop is similar to a [while...end while](flow-control.md#whileend-while) loop, except that it tests the Boolean expression after the loop rather than before. Thus, a `repeat...until` loop always executes the loop once, whereas if the Boolean expression is initially False, a `while...end while` loop does not execute the loop at all.

The other difference with a `repeat...until` loop is that the loop continues until the Boolean expression is TRUE.

The `break` and `continue` statements are [described below](#break-and-continue).

#### Example 

Compare the following example with the example for the `while...end while` loop. 

```4d
 var index : Integer  
 var result : Text
 index = 0
 repeat
 	result=result+String(index)+" "
 	index += 1
 until(index >= 10)
 //result: "0 1 2 3 4 5 6 7 8 9 "
``` 

## for...end for 

The formal syntax of the `for...end for` control flow structure is:

```4d
for(Counter_Variable,Start_Expression,End_Expression{,Increment_Expression})
   statement(s)
    {break}  
    {continue}
end for
```

The `for...end for` loop is a loop controlled by a counter variable:

- The counter variable *Counter_Variable* is a numeric variable (Real or Integer) that the `for...end for` loop initializes to the value specified by *Start_Expression*.
- Each time the loop is executed, the counter variable is incremented by the value specified in the optional value *Increment_Expression*. If you do not specify *Increment_Expression*, the counter variable is incremented by one (1), which is the default.
- When the counter variable passes the *End_Expression* value, the loop stops.

:::caution

The numeric expressions *Start_Expression*, *End_Expression* and *Increment_Expression* are evaluated once at the beginning of the loop. If these expressions are variables, changing one of these variables within the loop will not affect the loop.
However, for special purposes, you can change the value of the counter variable *Counter_Variable* within the loop; this will affect the loop.

:::

- Usually *Start_Expression* is less than *End_Expression*.
- If *Start_Expression* and *End_Expression* are equal, the loop will execute only once.
- If *Start_Expression* is greater than *End_Expression*, the loop will not execute at all unless you specify a negative *Increment_Expression*. See the examples.

The `break` and `continue` statements are [described below](#break-and-continue).

#### Basic examples

1. The following example executes 100 iterations:

```4d
 for(vCounter,1,100)
  //Do something
 end for
```

2. The following example goes through all elements of the array anArray:

```4d
 for(vlElem,1,Size of array(anArray))
  //Do something with the element
    anArray{$vlElem}=...
 end for
```

3. The following example goes through all the characters of the text vtSomeText:

```4d
 for(vlChar,1,Length(vtSomeText))
  //Do something with the character if it is a TAB
    if(Character code(vtSomeText[[vlChar]])=Tab)
  //...
    end if
 end for
```

Most of the `for...end for` loops you will write in your projects will look like the ones listed in these examples. 

### Counter variable

#### Decrementing counter variable

In some cases, you may want to have a loop whose counter variable is decreasing rather than increasing. To do so, you must specify *Start_Expression* greater than *End_Expression* and a negative *Increment_Expression*. The following examples do the same thing as the previous examples, but in reverse order:

4. The following example executes 100 iterations:

```4d
 for(vCounter,100,1,-1)
  //Do something
 end for
```

5. The following example goes through all elements of the array anArray:

```4d
 for(vlElem,Size of array(anArray),1,-1)
  //Do something with the element
    anArray{vlElem}=...
 end for
```

6. The following example goes through all the characters of the text vtSomeText:

```4d
 for(vlChar,Length(vtSomeText),1,-1)
  //Do something with the character if it is a TAB
    if(Character code(vtSomeText[[vlChar]])=Tab)
  //...
    end if
 end for
```


#### Incrementing the counter variable by more than one

If you need to, you can use an *Increment_Expression* (positive or negative) whose absolute value is greater than one.

7. The following loop addresses only the even elements of the array anArray:

```4d
 for(vlElem,2,Size of array(anArray),2)
  //Do something with the element #2,#4...#2n
    anArray{vlElem}=...
 end for
```

### Comparing looping structures

Let's go back to the first `for...end for` example. The following example executes 100 iterations:

```4d
 for(vCounter,1,100)
  //Do something
 end for
```

It is interesting to see how the `while...end while` loop and `repeat...until` loop would perform the same action. Here is the equivalent `while...end while` loop:

```4d
 i:=1 //Initialize the counter
 while(i<=100) //Loop 100 times
  //Do something
    i=i+1 //Need to increment the counter
 end while
```

Here is the equivalent `repeat...until` loop:

```4d
 i:=1 //Initialize the counter
 Repeat
  //Do something
    i=i+1 //Need to increment the counter
 until(i==100) //Loop 100 times
```

:::tip

The `for...end for` loop is usually faster than the `while...end while` and `repeat...until` loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Therefore, use the `for...end for` loop whenever possible.

:::



## for each...end for each

The formal syntax of the `for each...end for each` control flow structure is:

```4d
 for each(Current_Item,Expression{,begin{,end}}){until|while}(Boolean_Expression)}
    statement(s)
    {break}  
    {continue}
 end for each
```

The `for each...end for each` structure iterates a specified *Current_Item* over all values of the *Expression*. The *Current_Item* type depends on the *Expression* type. The `for each...end for each` loop can iterate through three *Expression* types:

- collections: loop through each element of the collection,
- entity selections: loop through each entity,
- objects: loop through each object property.

The following table compares the three types of `for each...end for each`:

||Loop through collections	|Loop through entity selections	|Loop through objects|
|---|---|---|---|
|Current_Item type	|Variable of the same type as collection elements	|Entity	|Text variable|
|Expression type	|Collection (with elements of the same type)	|Entity selection	|Object|
|Number of loops (by default)	|Number of collection elements	|Number of entities in the selection	|Number of object properties|
|Support of begin / end parameters	|Yes	|Yes	|No|

- The number of loops is evaluated at startup and will not change during the processing. Adding or removing items during the loop is usually not recommended since it may result in missing or redundant iterations.
- By default, the enclosed *statement(s)* are executed for each value in *Expression*. It is, however, possible to exit the loop by testing a condition either at the begining of the loop (`while`) or at the end of the loop (`until`).
- The *begin* and *end* optional parameters can be used with collections and entity selections to define boundaries for the loop.
- The `for each...end for each` loop can be used on a **shared collection** or a **shared object**. If your code needs to modify one or more element(s) of the collection or object properties, you need to use the `use...end use` keywords. Depending on your needs, you can call the `use...end use` keywords:
	- before entering the loop, if items should be modified together for integrity reasons, or
	- within the loop when only some elements/properties need to be modified and no integrity management is required. 
	
The `break` and `continue` statements are [described below](#break-and-continue).

### Loop through collections 

When `for each...end for each` is used with an *Expression* of the *Collection* type, the *Current_Item* parameter is a variable of the same type as the collection elements. By default, the number of loops is based on the number of items of the collection.

The collection must contain only elements of the same type, otherwise an error will be returned as soon as the *Current_Item* variable is assigned the first mismatched value type.

At each loop iteration, the *Current_Item* variable is automatically filled with the matching element of the collection. The following points must be taken into account:

- If the *Current_Item* variable is of the object type or collection type (i.e. if *Expression* is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If the variable is of a scalar type, only the variable will be modified.
- The *Current_Item* variable must be of the same type as the collection elements. If any collection item is not of the same type as the variable, an error is generated and the loop stops.
- If the collection contains elements with a **Null** value, an error will be generated if the *Current_Item* variable type does not support **Null** values (such as longint variables).

#### Example

You want to compute some statistics for a collection of numbers:

```4d
 var nums : Collection
 nums=New collection(10,5001,6665,33,1,42,7850)
 var item,$vEven,$vOdd,$vUnder,$vOver : Integer
 for each(item,nums)
    if(item%2==0)
       vEven=vEven+1
    else
       vOdd=vOdd+1
    end if
    case of
       :(item<5000)
          vUnder=vUnder+1
       :(item>6000)
          vOver=vOver+1
    end case
 end for each
  //vEven=3, vOdd=4
  //vUnder=4, vOver=2
```

### Loop through entity selections

When `for each...end for each` is used with an *Expression* of the *Entity selection* type, the *Current_Item* parameter is the entity that is currently processed.

The number of loops is based on the number of entities in the entity selection. On each loop iteration, the *Current_Item* parameter is automatically filled with the entity of the entity selection that is currently processed.

:::note

If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop.

:::

Keep in mind that any modifications applied on the current entity must be saved explicitly using `entity.save()`.

#### Example

You want to raise the salary of all British employees in an entity selection:

```4d
 var emp : Object
 for each(emp,ds.Employees.query("country='UK'"))
    emp.salary=emp.salary*1.03
    emp.save()
 end for each
```

### Loop through object properties

When `for each...end for each` is used with an *Expression* of the Object type, the *Current_Item* parameter is a text variable automatically filled with the name of the currently processed property. 

The properties of the object are processed according to their order of creation. During the loop, properties can be added to or removed from the object, without modifying the number of loops that will remain based on the original number of properties of the object.

#### Example

You want to switch the names to uppercase in the following object:

```4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```
You can write:

```4d
 for each(property,vObject)
    if(Value type(vObject[property])==Is text)
       vObject[property]=Uppercase(vObject[property])
    end if
 end for each
```

```
{
    "firstname": "GREGORY",
    "lastname": "BADIKORA",
    "age": 20
}
```
### begin / end parameters

You can define bounds to the iteration using the optional *begin* and *end* parameters.

:::note

The *begin* and *end* parameters can only be used in iterations through collections and entity selections (they are ignored on object properties).

:::

- In the *begin* parameter, pass the element position in *Expression* at which to start the iteration (*begin* is included).
- In the *end* parameter, you can also pass the element position in *Expression* at which to stop the iteration (*end* is excluded). 

If *end* is omitted or if *end* is greater than the number of elements in *Expression*, elements are iterated from *begin* until the last one (included).
If the *begin* and *end* parameters are positive values, they represent actual positions of elements in *Expression*.
If *begin* is a negative value, it is recalculed as `begin=begin+Expression size` (it is considered as the offset from the end of *Expression*). If the calculated value is negative, *begin* is set to 0.
**Note:** Even if begin is negative, the iteration is still performed in the standard order.
If *end* is a negative value, it is recalculed as `end=end+Expression size`

For example:
- a collection contains 10 elements (numbered from 0 to 9)
- begin:-4 -> begin:-4+10=6 -> iteration starts at the 6th element (#5)
- end:-2 -> end:-2+10=8 -> iteration stops before the 8th element (#7), i.e. at the 7th element. 

#### Example

```4d
 var col,col2 : Collection
 col=New collection("a","b","c","d","e")
 col2=New collection(1,2,3)
 var item : Text
 For each(item,col,0,3)
    col2.push(item)
 end for each
  //col2:[1,2,3,"a","b","c"]
 for each(item,col,-2,-1)
    col2.push(item)
 end for each
  //col2:[1,2,3,"a","b","c","d"]
```

### until and while conditions

You can control the `for each...end for each` execution by adding an `until` or a `while` condition to the loop. When an `until(condition)` statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to `True`, whereas when is case of a `while(condition)` statement, the iteration will stop when the condition is first evaluated to `False`.

You can pass either keyword depending on your needs:

- The `until` condition is tested at the end of each iteration, so if the *Expression* is not empty or null, the loop will be executed at least once.
- The `while` condition is tested at the beginning of each iteration, so according to the condition result, the loop may not be executed at all.

#### Example 

```4d
 colNum=New collection(1,2,3,4,5,6,7,8,9,10)
 
 total=0
 for each(num,colNum) while(total<30) //tested at the beginning
    total=total+num
 end for each
 //total: 36 (1+2+3+4+5+6+7+8)
 
 total=1000
 for each(num,colNum) until(total>30) //tested at the end
    total=total+num
 end for each
 //total: 1001 (1000+1)
```

## break and continue

All looping structures above support both `break` and `continue` statements. These statements give you more control over the loops by allowing to exit the loop and to bypass the current iteration at any moment.  

### break

The `break` statement terminates the loop containing it. Control of the program flows to the statement immediately after the body of the loop.

If the `break` statement is inside a nested loop (loop inside another loop), the `break` statement will terminate the innermost loop.


#### Example

```4d
for (vCounter,1,100)
	if (tab{vCounter}=="") //if a condition becomes true
		break //end of the for loop
	end if
end for
```

### continue

The `continue` statement terminates execution of the statements in the current iteration of the current loop, and continues execution of the loop with the next iteration.

```4d
var text : Text
for (i, 0, 9)
	if (i==3)
		continue //go directly to the next iteration
	end if
	text=text+String(i)
end for
// text: "012456789" 

```



## return {expression}

The `return` statement can be called from anywhere. When a `return` statement is used in a function or method, the execution of the function or method is stopped. The remaining code is not executed and the control is returned to the caller. 

The `return` statement can be used to [return a value](parameters.md#return-expression) to the caller. 

#### Example

```4d
var message : Text
var i : Integer

while (True) //infinite loop
	i=i+1
	message+=String(i)+"A\r"  // until 5
	logConsole(message)
	if (i==5)
		return //stops the loop
	end if 
	message+=String(i)+"B\r"  // until 4
	logConsole(message)
end while 
message+=String(i)+"C\r"  //never executed 
logConsole(message)

// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

```

