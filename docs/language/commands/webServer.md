---
id: webServer
title: webServer
---


<!-- REF #_command_.webServer.Syntax -->**webServer** : 4D.WebServer<!-- END REF -->


<!-- REF #_command_.webServer.Params -->

|Parameter|Type||Description|
|---|---|----|---|
|Result|4D.WebServer|&#8592;|Web server object|
<!-- END REF -->

The `webServer` command <!-- REF #_command_.webServer.Summary -->returns a Web server object<!-- END REF -->.

The returned Web server object contains the current values of the Web server properties.

#### Example  

You want to know if the Web server is started:

```qs
 var vRun : boolean
 vRun = webServer.isRunning
```
