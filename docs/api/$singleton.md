---
id: singleton
title: $singleton
---


## Definition

You can directly call exposed [functions of your shared singletons](../language/basics/lang-classes.md#singleton-classes) through REST.

Singleton functions are called in POST requests with the `$singleton` command and without `()`. For example, if you have defined a `buildVehicle()` function in the `VehicleFactory` shared singleton class, you could call it using the following request:

```json
/rest/$singleton/VehicleFactory/buildVehicle
```

with data in the body of the POST request: ["truck"]

In QodlyScript language, this call is equivalent to:

```4d
singleton = cs.VehicleFactory.me.buildVehicle("truck")
```

:::note

Keep in mind that only functions with the [`exposed` keyword](../orda/data-model.md#exposed-vs-non-exposed-functions) can be directly called from REST requests.

:::




## Syntax

Singleton functions must always be called using REST **POST** requests (a GET request will receive an error). The formal syntax is:

```
/rest/$singleton/{{SingletonClass}}/{{SingletonClassFunction}}
```

:::info

You can restrict calls to specific singleton functions by configuring [appropriate privileges](../studio/roles/rolesPrivilegesOverview.md).

:::

## Parameters

You can send parameters to singleton functions. On the server side, they will be received in the [declared parameters](../language/basics/lang-parameters.md#declaring-parameters) of the singleton class functions.

Sending parameters to singleton functions is exactly the same as sending parameter to ORDA class functions. Please refer to the [**Function Parameters** page](classFunctionsParameters.md) for a detailed description.


## Example  

You have created a simple shared singleton with an exposed function:

```qs
//class mySingleton

shared singleton constructor()

exposed function sayHello (value : string)
	return "Hello "+value

```

:::note

The `mySingleton` class and `sayHello` function are listed when you call the [`$catalog`]($catalog.md#singleton) command.

:::


You can then run this request:  

```
POST /rest/$singleton/mySingleton/sayHello
```

Body of the request: ["John"]


#### Response

```json
{
	"result": "Hello John"
}
```
