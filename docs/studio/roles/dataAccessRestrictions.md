---
id: accessControlMechanisms
title: Access Control Mechanisms
---


Two closely linked yet distinct concepts, `Data Access Restrictions` and `Role-Based Access Control (RBAC)`, address separate dimensions of access control and security within the application. 

`Data Access Restrictions` establish a foundation by focusing on fundamental principles and tactics used to limit and manage access to sensitive data. In contrast, `Role-Based Access Control (RBAC)` delves into a comprehensive security model that assigns roles and privileges to users, orchestrating a controlled environment for accessing essential resources. Together, these concepts create a robust system, ensuring data security and controlled user interactions within the application.


## Data Access Restrictions

**Data Access Restrictions** are fundamental to fortifying data security and protection of sensitive data, ensuring its confidentiality, integrity, and availability. This controlled access approach is instrumental in preventing data breaches, unauthorized disclosures, and security vulnerabilities arising from inappropriate data access

The implementation of Data Access Restrictions in Qodly offers several benefits:

- **Enhanced Security**: Limits data access to authorized individuals, reducing the risk of unauthorized data breaches.
- **Compliance**: Ensures adherence to industry regulations and data protection laws.
- **Customization**: Enables a tailored user experience based on roles and privilege levels.
- **Auditability**: Facilitates tracking and monitoring of user interactions with sensitive data for security analysis.

## Role-Based Access Control (RBAC) 

**Role-Based Access Control** (RBAC) is a foundational security model implemented to ensure controlled and secure resource access within the application. This approach enhances data security and simplifies access management by assigning specific roles with clearly defined privileges, facilitating efficient and effective user access control.


The implementation of RBAC in Qodly offers several benefits:

- **Granular Access Control**: Fine-grained control over user access to resources.
- **Simplified Management**: Streamlined access management through role assignments.
- **Security and Compliance**: Enforces security policies and complies with data protection regulations.
- **Scalability**: Efficiently scales as the application grows by adding new roles and adjusting privilege assignments.

## Key Concepts 

### ORDA Concepts

Central to Qodly's data manipulation are the principles of Object-Relational Data Access (ORDA). Data organization revolves around DataStores and DataClasses, which serve as pivotal resources. ORDA introduces attributes and functions within classes, streamlining the data management process.

### Resources  

Qodly encompasses a range of resources including DataStores, DataClasses, attributes, and functions. Each of these resources has the potential for linked privileges that govern permissible actions.

|Resource           |Description|
|---------------------|---|
|Datastore            |Represents the entire data storage system of the website, including all dataclasses and entities.|  
|Dataclasses          |Refer to specific data structures in the datastore.|
|Attributes           |Define the properties of Dataclasses.|
|Functions |Represent custom functions defined within the data model.|


### Permissions  

Permissions encompass the fundamental tasks achievable on resources. These Permissions encompass operations such as creation, reading, updating, deletion, description, execution (for functions), and promotion (also for functions).

|Permission          |Description|
|--------|---|
|Create  |Allows the creation of new entities to the Datastore.|  
|Read    |Enables reading/viewing the content of resources.|
|Update  |Allows modifying the content of resources.|
|Delete  |Permits the deletion of entities from the Datastore.|
|Describe |Provides access to metadata about resources, such as retrieving information about available Dataclasses, Attributes, or data model functions.|
|Execute |Enables the execution of functions.|
|Promote |Temporarily adds a specific privilege to the Session for the duration of executing a function, primarily used for secure privilege escalation.|


### Data Access Granularity Hierarchy

At the core of Qodly's data security lies a well-defined granularity hierarchy that lets you control who accesses your resources and how. This hierarchy ensures that data access restrictions can be set at different levels, catering to the specific needs of your application and users. Let's explore the granularity levels in detail:


1. **DataStore Level**: This top-level granularity encompasses the entire DataStore. Permissions established here have a wide-reaching impact, influencing all resources within the DataStore.

:::note Example
Visualize a vast store housing diverse data – the **DataStore**. At this level, it functions as the gateway, determining who gains entry. It serves as the chief access controller, where regulations are established to govern everything within.
:::


2. **DataClass Level**: Moving a step deeper, we enter the DataClass level. Permissions set here exhibit inheritance behavior, extending to all resources encapsulated within the DataClass. This ensures a cohesive, consistent access control approach for interconnected data entities.

:::note Example
Imagine stepping inside the store, with each section representing a **DataClass**. Here, you set rules for entire sections, dictating access to everything within them. For instance, in the "Packages" section, you can control who can view or modify related data. It's akin to holding keys to distinct sections of the store.
:::

3. **Attribute/Function Level**: Delving further into granularity, we encounter the Attribute/Function level. This level offers precision, enabling you to define access to specific attributes or functions within a DataClass. By focusing on these specifics, you customize access rights to suit your application's intricate needs.

:::note Example
Inside each section, there are shelves with items (**attributes**) and tools (**functions**). Here, you can be super specific. Imagine you have a "Price" shelf. You can decide who can see or touch it. Maybe only the managers can adjust the prices. It's like giving keys to certain shelves.
:::

