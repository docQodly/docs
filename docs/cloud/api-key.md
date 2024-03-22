---
id: api-key
title: API Keys
---

## Authentication keys and endpoint URL

You can allow external clients to access your Qodly application and request your data. Such requests require an endpoint URL and a read-only key for authentication. 

- **API key**: A unique string that is passed on every request to the Qodly Cloud application. You can pass the key through a property in the `openDatastore` command or by specifying it in every HTTP request header. An API key is bound to a **role**, so that client requests can only execute actions corresponding to the role associated to the API key.  

- **Endpoint URL**: All API requests must connect to the endpoint URL, provided by the QCMC for your application. 



## Get your authentication keys and endpoint

To authenticate connections to your Qodly application resource, you'll need to generate API keys and get its endpoint.


1. Select the environment for which you want to create a key and click on the **APIs** tab. 

The API management table lists the keys generated for the application (empty by default).

2. To create a new key, click **Add API**. In the dialog box, enter the name of the key (e.g. "Accounting"), select a Profile and click **Submit**.

The API key is the generated:


The following properties are 


- The API name is used to identify the key, you can enter any name/  


 After your new resource deploys, select Go to resource or go to your resource page.
In the left navigation pane, under Resource Management, select Keys and Endpoint.
Copy and paste your keys and endpoint URL in a convenient location, such as Notepad.

## Using the API keys and endpoint