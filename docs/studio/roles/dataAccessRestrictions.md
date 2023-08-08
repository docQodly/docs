---
id: accessControlMechanisms
title: Access Control Mechanisms
---



Two closely linked yet distinct concepts, "Data Access Restrictions" and "Role-Based Access Control (RBAC)", address separate dimensions of access control and security within the application. "Data Access Restrictions" establish a foundation by focusing on fundamental principles and tactics used to limit and manage access to sensitive data. In contrast, "Role-Based Access Control (RBAC)" delves into a comprehensive security model that assigns roles and privileges to users, orchestrating a controlled environment for accessing essential resources. Together, these concepts create a robust system, ensuring data security and controlled user interactions within the application.

---

## Data Access Restrictions

Data Access Restrictions play a pivotal role in enhancing data security and privacy. Qodly adopts a comprehensive and holistic strategy to confine and manage access to sensitive data effectively.

The primary purpose of implementing Data Access Restrictions within Qodly is to fortify the protection of sensitive data, ensuring its confidentiality, integrity, and availability. This controlled access approach is instrumental in preventing data breaches, unauthorized disclosures, and security vulnerabilities arising from inappropriate data access

### <u> Benefits </u> 

The benefits of implementing Data Access Restrictions in Qodly include:

- Enhanced Security: By limiting data access to authorized individuals, the risk of unauthorized data breaches and leaks is significantly reduced.
- Compliance: Qodly's adherence to data access restrictions helps ensure compliance with industry regulations and standards, as well as data protection laws.
- Customization: Different roles and privilege levels allow for a tailored user experience, optimizing efficiency and usability based on user needs.
- Auditability: The controlled access model facilitates tracking and monitoring of user interactions with sensitive data, enabling detailed audit trails for security analysis.

---

## Role-Based Access Control (RBAC) 

Qodly employs Role-Based Access Control (RBAC), a fundamental security model, to facilitate controlled and secure resource access within the application. RBAC enhances data security and streamlines access management by associating specific roles with well-defined privileges, enabling efficient and effective user access control.

### <u> Benefits </u> 

Implementing RBAC in Qodly yields several benefits:

- Granular Access Control: RBAC allows fine-grained control over user access to resources, minimizing the risk of unauthorized access.
- Simplified Management: Role assignment simplifies access management, reducing administrative overhead.
- Security and Compliance: RBAC aids in enforcing security policies and complying with data protection regulations.
- Scalability: As the application grows, RBAC scales efficiently by adding new roles and adjusting privilege assignments.


---

## Key Concepts 
 

### <u> ORDA Concepts </u> 

Central to Qodly's data manipulation are the principles of Object-Relational Data Access (ORDA). Data organization revolves around DataStores and DataClasses, which serve as pivotal resources. ORDA introduces attributes and functions within classes, streamlining the data management process.

### <u> Resources </u> 

Qodly encompasses a range of resources including DataStores, DataClasses, attributes, and functions. Each of these resources has the potential for linked privileges that govern permissible actions.

### <u> Permissions </u> 

Permissions encompass the fundamental tasks achievable on resources. These Permissions encompass operations such as creation, reading, updating, deletion, description, execution (for functions), and promotion (also for functions).

### <u> Granularity Hierarchy for Data Access Restrictions in Qodly </u> 

At the core of Qodly's data security lies a well-defined granularity hierarchy that lets you control who accesses your resources and how. This hierarchy ensures that data access restrictions can be set at different levels, catering to the specific needs of your application and users. Let's explore the granularity levels in detail:


1. <u>DataStore Level</u>: This top-level granularity encompasses the entire DataStore. Permissions established here have a wide-reaching impact, influencing all resources within the DataStore.

    Visualize a vast store housing diverse data – the DataStore. At this level, it functions as the gateway, determining who gains entry. It serves as the chief access controller, where regulations are established to govern everything within.


2. <u>DataClass Level</u>: Moving a step deeper, we enter the DataClass level. Permissions set here exhibit inheritance behavior, extending to all resources encapsulated within the DataClass. This ensures a cohesive, consistent access control approach for interconnected data entities.

    Imagine stepping inside the store, with each section representing a DataClass. Here, you set rules for entire sections, dictating access to everything within them. For instance, in the "Packages" section, you can control who can view or modify related data. It's akin to holding keys to distinct sections of the store.

3. <u>Attribute/Function Level</u>: Delving further into granularity, we encounter the Attribute/Function level. This level offers precision, enabling you to define access to specific attributes or functions within a DataClass. By focusing on these specifics, you customize access rights to suit your application's intricate needs.

    Inside each section, there are shelves with items (attributes) and tools (functions). Here, you can be super specific. Imagine you have a "Price" shelf. You can decide who can see or touch it. Maybe only the managers can adjust the prices. It's like giving keys to certain shelves.

