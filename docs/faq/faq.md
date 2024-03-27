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


## QodlyScript

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>What's the difference between cs and ds?</summary>

`cs` is the Class Store object, containing all classes of the current project:
  - user classes (e.g. `cs.MyUserClass`)
  - datastore classes (e.g. `cs.People`, `cs.PeopleEntity`, etc.).

It is used for:
  - **declaration** of both user class and datastore class object variables
  - **instantiation** of user class objects.

`ds` is a shortcut to the main DataStore object, providing access to the [ORDA model and data object](../orda/data-model.md) instances. It is a kind of singleton, used for **instantiation** of datastore objects.
Datastore objects are instantiated and managed by ORDA and cannot be handled through the `cs` Class Store.

```qs
//declare an object variable of class cs.myClass
var myInstance : cs.myClass
//declare two datastore object variables of class cs.PeopleEntity
var myEntity,myNewEntity : cs.PeopleEntity

//create a new instance of myClass class and put it in the variable
myInstance = cs.myClass.new()
//create a new instance of People dataclass (i.e. a blank entity) and put it in the variable
myNewEntity = ds.People.new()
//put an instance of People dataclass (i.e. an entity) in the variable
myEntity = ds.People.get(167)
```
</details>


## MISC

<details><summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}>Can I use Qodly to build public web sites? </summary>

Qodly is rather designed to build business applications with a web interface. All users need to be logged.

</details>
