---
id: faq
title: FAQ
---

## Qodly Studio 



<details><summary style= {{ fontWeight: "bold", marginBottom: "20px" }}>Do I need specific expertise in HTML, CSS, or JavaScript to use Qodly Studio?</summary>


No, Qodly Studio offers an experience of intuitive and visual web development that does not require any expertise of web technologies. 


</details>



<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Is Qodly Studio supported on all Web browsers?</summary>


See the requirements list [here](../studio/overview.md#requirements).

</details>




## Qodly Cloud  


<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Why is there only a sandbox category?</summary>

Other categories (applications and shared applications) will be open after the Beta phase. 

</details>


<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Where are stored my data?</summary>

Your data are stored on AWS (Amazon Cloud). 

</details>



## Qodly Server

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I install a local instance of Qodly Server?</summary>

No, Qodly Server is only proposed a a cloud service. 

</details>

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>What's the difference between `cs` and `ds`?</summary>

`cs` is the Class Store object, containing all classes of the current project, including user classes (e.g. `cs.MyUserClass`) and datastore classes (e.g. `cs.People`, `cs.PeopleEntity`, etc.). It is used for **declaration** of all kinds of class object variables (including datastore class objects), and for **instantiation** of user class objects.

```qs
var instance : cs.myClass // declares an object variable of class cs.myClass
instance = cs.myClass.new() // creates a new instance of myClass object.
```

`ds` is a shortcut to the main datastore object, providing access to the [ORDA model and data object](../orda/data-model.md) instances. It is a kind of singleton, used for **instantiation** of datastore objects. Datastore objects are handled by ORDA and cannot be instantiated through the `cs` Class Store. 

```qs
var myEntity : cs.PeopleEntity //declares a datastore object variable of class cs.PeopleEntity
myEntity = ds.People.get(167) //put an instance of People in the variable 
```
</details>


## MISC

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I use Qodly to build public web sites? </summary>

Qodly is rather designed to build business applications with a web interface. All users need to be logged. 

</details>

