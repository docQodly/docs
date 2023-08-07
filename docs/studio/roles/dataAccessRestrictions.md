---
id: dataAccessRestrictions
title: Data Access Restrictions
---


Delve into Qodly's technical documentation on Data Access Restrictions. This comprehensive guide explores the intricate mechanisms that ensure robust protection against unauthorized data access within the application framework.

---

## What are Data Access Restrictions? 

Data Access Restrictions are a critical aspect of ensuring data security and privacy within an application. In Qodly, a comprehensive approach is taken to limit and control access to sensitive data, preventing unauthorized users from accessing information beyond their designated scope.

The primary purpose of Data Access Restrictions in Qodly is to safeguard sensitive data and maintain the confidentiality, integrity, and availability of information. By controlling access, the application aims to prevent data breaches, unauthorized disclosure, and other security risks that may arise due to inappropriate access to sensitive data.

---

## Role-Based Access Control (RBAC) 

Qodly employs Role-Based Access Control (RBAC), a fundamental security model, to facilitate controlled and secure resource access within the application. RBAC enhances data security and streamlines access management by associating specific roles with well-defined privileges, enabling efficient and effective user access control.

---

## Key Concepts 
 

### <u> <span style={{fontSize: '1.2rem'}}>ORDA Concepts</span> </u> 

Central to Qodly's data manipulation are the principles of Object-Relational Data Access (ORDA). Data organization revolves around DataStores and DataClasses, which serve as pivotal resources. ORDA introduces attributes and functions within classes, streamlining the data management process.

### <u> <span style={{fontSize: '1.2rem'}}>Resources</span> </u> 

Qodly encompasses a range of resources including DataStores, DataClasses, attributes, and functions. Each of these resources has the potential for linked privileges that govern permissible actions.

### <u> <span style={{fontSize: '1.2rem'}}>Permissions</span> </u> 

Permissions encompass the fundamental tasks achievable on resources. These Permissions encompass operations such as creation, reading, updating, deletion, description, execution (for functions), and promotion (also for functions).

### <u> <span style={{fontSize: '1.2rem'}}>Granularity Hierarchy for Data Access Restrictions in Qodly</span> </u> 

At the core of Qodly's data security lies a well-defined granularity hierarchy that lets you control who accesses your resources and how. This hierarchy ensures that data access restrictions can be set at different levels, catering to the specific needs of your application and users. Let's explore the granularity levels in detail:


1. <u>DataStore Level</u>: This top-level granularity encompasses the entire DataStore. Permissions established here have a wide-reaching impact, influencing all resources within the DataStore.

    Visualize a vast store housing diverse data – the DataStore. At this level, it functions as the gateway, determining who gains entry. It serves as the chief access controller, where regulations are established to govern everything within.


2. <u>DataClass Level</u>: Moving a step deeper, we enter the DataClass level. Permissions set here exhibit inheritance behavior, extending to all resources encapsulated within the DataClass. This ensures a cohesive, consistent access control approach for interconnected data entities.

    Imagine stepping inside the store, with each section representing a DataClass. Here, you set rules for entire sections, dictating access to everything within them. For instance, in the "Packages" section, you can control who can view or modify related data. It's akin to holding keys to distinct sections of the store.

3. <u>Attribute/Function Level</u>: Delving further into granularity, we encounter the Attribute/Function level. This level offers precision, enabling you to define access to specific attributes or functions within a DataClass. By focusing on these specifics, you customize access rights to suit your application's intricate needs.

    Inside each section, there are shelves with items (attributes) and tools (functions). Here, you can be super specific. Imagine you have a "Price" shelf. You can decide who can see or touch it. Maybe only the managers can adjust the prices. It's like giving keys to certain shelves.

