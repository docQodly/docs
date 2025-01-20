---
id: EndpointsClass
title: Endpoints
---


## Overview

The **Endpoints** class provides access to both public and authenticated system endpoints, including custom domain endpoints. It simplifies retrieving the necessary endpoint types for secure and public access management across different environments, such as development.

:::tip
The **Endpoints** class is a **shared singleton**, meaning a single instance is globally available without needing manual creation. You can access it directly via the [.me](#me) property without instantiating a new instance.
:::


## Functions and properties

||
|---|
|[<!-- INCLUDE #Endpoints.authenticatedEndpoint().Syntax -->](#authenticatedendpoint)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Endpoints.authenticatedEndpoint().Summary -->|
|[<!-- INCLUDE #Endpoints.customDomainAuthenticatedEndpoint().Syntax -->](#customdomainauthenticatedendpoint)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Endpoints.customDomainAuthenticatedEndpoint().Summary -->|
|[<!-- INCLUDE #Endpoints.customDomainPublicEndpoint().Syntax -->](#customdomainpublicendpoint)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Endpoints.customDomainPublicEndpoint().Summary -->|
|[<!-- INCLUDE #Endpoints.me.Syntax -->](#me)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Endpoints.me.Summary -->|
|[<!-- INCLUDE #Endpoints.publicEndpoint().Syntax -->](#publicendpoint)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Endpoints.publicEndpoint().Summary -->|




## .authenticatedEndpoint()

<!--REF #Endpoints.authenticatedEndpoint().Syntax -->**.authenticatedEndpoint**() : String<!-- END REF -->


<!--REF #Endpoints.authenticatedEndpoint().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|String|&#8592;|Authenticated endpoint URL for the current environment.|<!-- END REF -->


#### Description

The `.authenticatedEndpoint()` function <!-- REF #Endpoints.authenticatedEndpoint().Summary -->returns the authenticated API endpoint URL specific to the current Qodly environment.<!-- END REF -->

#### Example

To implement a method that retrieves the authenticated endpoint in a custom class:

```qs
var authEndpoint : string
authEndpoint = cs.Qodly.Endpoints.me.authenticatedEndpoint()
```



## .customDomainAuthenticatedEndpoint()

<!--REF #Endpoints.customDomainAuthenticatedEndpoint().Syntax -->**.customDomainAuthenticatedEndpoint**() : String<!-- END REF -->


<!--REF #Endpoints.customDomainAuthenticatedEndpoint().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|String|&#8592;|Authenticated endpoint URL for a custom domain or null.|<!-- END REF -->


#### Description

The `.customDomainAuthenticatedEndpoint()` function <!-- REF #Endpoints.customDomainAuthenticatedEndpoint().Summary -->returns the authenticated API endpoint URL for a custom domain if it has been configured.<!-- END REF -->

#### Example

To implement a method that retrieves the custom domain authenticated endpoint in a custom class:

```qs
var customAuthEndpoint : string
customAuthEndpoint = cs.Qodly.Endpoints.me.customDomainAuthenticatedEndpoint()
```


## .customDomainPublicEndpoint()

<!--REF #Endpoints.customDomainPublicEndpoint().Syntax -->**.customDomainPublicEndpoint**() : String<!-- END REF -->


<!--REF #Endpoints.customDomainPublicEndpoint().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|String|&#8592;|Public endpoint URL for a custom domain or null.|<!-- END REF -->


#### Description

The `.customDomainPublicEndpoint()` function <!-- REF #Endpoints.customDomainPublicEndpoint().Summary -->returns the public endpoint URL for a custom domain if it has been configured in the Qodly application.<!-- END REF -->

#### Example

To implement a method that retrieves the custom domain public endpoint in a custom class:

```qs
var customPublicEndpoint : string
customPublicEndpoint = cs.Qodly.Endpoints.me.customDomainPublicEndpoint()
```



## .me

<!--REF #Endpoints.me.Syntax -->**.me** : cs.Qodly.Endpoints<!-- END REF -->


<!--REF #Endpoints.me.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|cs.Qodly.Endpoints|&#8592;|The Endpoints Singleton Object containing system endpoints.|<!-- END REF -->


#### Description

The `.me` property <!-- REF #Endpoints.me.Summary -->returns the current instance of the Endpoints singleton.<!-- END REF -->  It provides direct access to the system endpoints.

It must be used when calling functions like [publicEndpoint()](#) or [`authenticatedEndpoint()`](#).

:::tip Why .me is Required:
If you attempt to call:

```qs
var publicEndpoint : string
publicEndpoint = cs.Qodly.Endpoints.publicEndpoint()
```

You will encounter an error: `function call error (is not a function)`.

The correct way is:

```qs
var publicEndpoint : string
publicEndpoint = cs.Qodly.Endpoints.me.publicEndpoint()
```

The `.me` ensures the function is being called from the current active instance of the Endpoints singleton.
:::



## .publicEndpoint()

<!--REF #Endpoints.publicEndpoint().Syntax -->**.publicEndpoint**() : String<!-- END REF -->


<!--REF #Endpoints.publicEndpoint().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|String|&#8592;|Public endpoint URL for the current Qodly environment.|<!-- END REF -->


#### Description

The `.publicEndpoint()` function <!-- REF #Endpoints.publicEndpoint().Summary -->returns the public API endpoint URL for the current Qodly environment, allowing external services to access public resources without authentication.<!-- END REF -->

#### Example

To implement a method that retrieves the custom domain authenticated endpoint in a custom class:

```qs
var publicEndpoint : string
publicEndpoint = cs.Qodly.Endpoints.me.publicEndpoint()
```
