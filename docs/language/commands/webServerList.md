---
id: webServerList
title: webServerList
---


<!-- REF #_command_.webServerList.Syntax -->**webServerList** : collection<!-- END REF -->


<!-- REF #_command_.webServerList.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|collection|->|Collection of the available Web Server objects|
<!-- END REF -->

The `webServerList` command <!-- REF #_command_.webServerList.Summary -->  returns a collection of all Web server objects available in the Qodly application<!-- END REF -->. 

A Qodly application can contain anywhere from one to several Web servers: 

* 1 Web server for the host database (default Web server)
* 1 Web server for each component. 

All available Web servers are returned by the `webServerList` command, whether they are actually running or not. 

:::note 

The default Web server object is automatically loaded by Qodly at startup. On the other hand, each component Web server that you want to use must be instantiated using the [`webServer`](#webserver) command. 

:::

You can use the *name* property of the Web server object to identify the database or component to which each Web server object in the list is attached. For a detailed description of the Web server object, please refer to the [`webServer`](#webserver) command.

#### Example

We want to know how many running web servers are available:

```qs
 var wSList : collection
 var vRun : integer
 var result : string
 
 wSList = webServerList
 vRun = wSList.countValues(True,"isRunning")
 result = string(vRun)+" web server(s) running on "+string(wSList.length)+" available."
 
```
