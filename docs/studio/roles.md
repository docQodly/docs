---
id: roles
title: Access Control Roles & Privileges
---


Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The Qodly security architecture provides a robust system for defining and managing roles, privileges, permissions, actions, and resources in the context of a travel agency website. These concepts enable fine-grained control over access to functionalities and data, ensuring data security and integrity.

## Roles

Roles in the travel agency website represent different user profiles, each with specific privileges. These roles determine the actions and operations a user can perform within the system. Here are some example roles in the travel agency context:

|Roles          |Description|
|---------------|---|
|Customer       |Represents website visitors who can browse travel packages, view destination information, and make bookings.|  
|Content Manager|Responsible for managing the content of the website, including creating and updating travel packages, adding new destinations, and editing descriptions.|
|Sales Manager   |Has additional privileges compared to customers, allowing them to manage customer bookings, view sales reports, and generate invoices.|


## Privileges

Privileges define the technical abilities granted to users based on their roles. Each role can have one or more privileges associated with it. In the travel agency website, the following privileges can be defined:

|Privileges          |Description|
|---------------|---|
|BrowsePackages       |Allows users to view and browse available travel packages.|  
|BookPackage          |Enables users to make bookings for travel packages.|
|ManageContent        |Provides the ability to create, update, and delete content related to travel packages and destinations.|
|ManageBookings       |Allows users to manage customer bookings, view booking details, and generate invoices.|
|ViewReports          |Grants access to sales reports and other statistical data.|


## Permissions

Permissions in the travel agency website define the access rights for different resources. They specify which privileges are required to perform specific actions on those resources. Permissions can be set at multiple levels, including the datastore, dataclasses, attributes, and data model functions. In the travel agency context, the following permissions can be defined:

|Permissions          |Description|
|----------------------------------|---|
|Datastore Permission              |The administrate privilege is required to drop entities in any dataclass and create new entities in the datastore.|  
|Dataclass Permissions             |The ManageContent privilege is necessary to create, update, and delete entities in the travel packages and destinations dataclasses.|
|Attribute Permissions             |The BrowsePackages privilege is needed to read attributes of travel packages, such as package details, pricing, and availability.|
|Data Model Function Permissions   |The ManageBookings privilege is required to execute functions related to managing customer bookings, generating invoices, and handling reservations.|


## Permission Actions

Permission actions define the specific operations that can be performed on resources within the travel agency website. Each permission action is associated with a target resource and requires specific privileges. The following permission actions are relevant to the travel agency scenario:

|Permission Actions          |Description|
|--------|---|
|Create  |Allows the creation of new entities, such as adding new travel packages or destinations to the datastore.|  
|Read    |Enables reading/viewing the content of resources, such as browsing travel packages, viewing destination information, or accessing booking details.|
|Update  |Allows modifying the content of resources, such as updating travel package details or editing destination descriptions.|
|Delete  |Permits the deletion of entities, such as removing outdated travel packages or destinations from the datastore.|
|Execute |Enables the execution of functions related to managing bookings, generating invoices, and performing other administrative tasks.|
|Describe |Provides access to metadata about resources, such as retrieving information about available dataclasses, attributes, or data model functions.|
|Promote |Temporarily adds a specific privilege to the session for the duration of executing a function, primarily used for secure privilege escalation.|



## Resources

Resources represent the various elements within the travel agency website to which permissions and privileges are applied. These resources include:

|Resources            |Description|
|---------------------|---|
|Datastore            |Represents the entire data storage system of the website, including all dataclasses and entities.|  
|Dataclasses          |Refer to specific data structures or entities in the website's datastore, such as travel packages, destinations, or customer bookings.|
|Attributes           |Define the properties or characteristics of dataclasses, such as package details, pricing, availability, or destination descriptions.|
|Data Model Functions |Represent custom functions defined within the website's data model, used for managing bookings, generating invoices, or handling reservations.|


In the travel agency scenario, permissions and privileges can be set for each of these resources, ensuring proper access control and data protection.

By implementing and utilizing roles and privileges, the travel agency website can ensure secure and controlled access to its functionalities and data. Users will be able to browse and book travel packages, while content managers and sales managers will have the necessary permissions to manage and update the website's content and customer bookings.





