---
id: rolesPrivilegesOverview
title: Roles and Privileges
---


In the realm of data security and access control, Qodly introduces a robust system of Roles and Privileges. These two fundamental concepts are at the heart of enforcing data access restrictions within the application. By understanding the intricacies of Roles and Privileges, you can ensure that each user accesses only the data pertinent to their designated role. 

## Roles: Defining User Profiles 

### <u> Understanding Roles </u> 

Roles in Qodly play a pivotal role in defining distinct user profiles within the application. Each role corresponds to a specific set of responsibilities, privileges, and access levels. For instance, consider a backoffice travel agency website, roles such as "Agent," "Content Manager," and "Sales Manager" delineate varying user profiles, each with a unique scope of actions and operations they can perform.

### <u> Role Hierarchy and Hierarchical Access Control </u> 

Roles are hierarchically structured, allowing for the establishment of an organized and layered access control system. This hierarchy ensures that higher-level roles encompass the privileges of lower-level roles, creating a seamless and efficient method of managing user access. This hierarchical access control enhances the granularity of access management, facilitating a streamlined and systematic approach.

### <u> Adding Roles </u> 

Adding roles in Qodly is a straightforward process. Begin by opening the `Explorer` Panel then navigate to the `Roles and Privileges` section, where you'll find the dedicated `Roles` tab. Click on this tab to access role management. To define a new role, initiate the role creation process by clicking on the `Add new role` option. 

<img alt="explorer" src={require('./img/addRole.png').default} style={{borderRadius: '6px'}} />

Following these uncomplicated steps, in the context of a backoffice travel agency website known as `TravelTrove`, you can customize unique roles such as `Agent`, `Content Manager`, and `Sales Manager` to perfectly align with your specific application needs:


|Roles          |Description|
|---------------|---|
|Agent       |Serves as an office representative, reserving and customizing travel packages for clients.|  
|Content Manager|Responsible for managing the content of the website, including creating and updating travel packages, adding new destinations, and editing descriptions.|
|Sales Manager   |Has additional privileges compared to agents, allowing them to manage customer bookings, view sales reports, and generate invoices.|

## Privileges: Enabling Controlled Access

### <u> Understanding Privileges </u> 

Privileges are the building blocks of access control in Qodly. They define the specific technical capabilities and actions that users of different roles can perform. By assigning privileges to roles, you determine the extent of a user's access to data and functionalities. 

### <u> Adding Privileges </u> 

The process of adding privileges in Qodly is just as simple as adding roles. To get started, head to the `Privileges` tab within the `Roles and Privileges` section. To create a new privilege, simply click on the `+` icon, which will prompt the `Create New Privilege` form to appear.

<img alt="explorer" src={require('./img/addPrivilege.png').default} style={{borderRadius: '6px'}} />

Let's explore some of these privileges and see their application in the context of `TravelTrove`:

|Privileges          |Description|
|---------------|---|
|ManageReports          | Access to sales reports and statistical data, facilitating analysis of booking patterns, revenue tracking.|
|ManageBookings       | Manage customer bookings by accessing details, verifying reservations, making changes, and generating invoices.|
|ManageContent        | Access and manage the travel agency's online content, including travel package creation, updates, and deletions.|

<br/>

---

## Interplay Between Roles and Privileges

Achieving the optimal synchronization of roles and privileges ensures seamless task execution for users while maintaining robust data security. 

To assign one or multiple privileges to a role, return to the `Roles` tab within the `Roles and Privileges` section. Select the desired role, such as `Sales Manager`, and find the privileges side section on the far right. Here, you'll discover a comprehensive list of available privileges, along with the means to assign them to the chosen role. Adding privileges is as simple as clicking the `+` icon, and removal is just as easy using the `-` icon. 

<img alt="explorer" src={require('./img/InterplayBetweenRoles_and_Privileges.png').default} style={{borderRadius: '6px'}} />

For instance, a `Sales Manager` role might possess privileges like `ManageBookings` and `ViewReports`, granting them the ability to analyze booking trends and monitor revenue for informed decision-making. Similarly, a `Content Manager` role could receive the privilege `ManageContent`.

<br/>

---

## Assigning Roles

Through the **Qodly Management Console** of your application, you can seamlessly integrate roles for users across various environments, be it development, staging, or production – each with its own tailored configuration. 

:::info

It's important to note that roles added in the development environment may not necessarily align with those in the production environment for example.

:::

For instance, in the development environment, navigate to the `Teams` tab. Here, you'll encounter a list of available users, each associated with their respective roles. Should you need to add a new user, simply click on the `Add User` button located at the upper-right corner. This action will prompt a form to appear, allowing you to input the necessary user data. Towards the form's conclusion, you'll find a dropdown menu under `Profile`, this dropdown showcases the roles that were previously established within Qodly Studio. From this list, you can select and assign appropriate roles to the new user, granting them specific privileges aligned with your requirements.

<img alt="explorer" src={require('./img/addingRolesviaCloud.png').default} style={{borderRadius: '6px'}} />

The impact of these role assignments goes beyond mere user administration. As you mold your application, these roles exert a direct influence on the user journey. 

It's important to note that view management restrictions are just the initial step, subsequent stages will involve extending these limitations to various other aspects of interaction.

---

## Retrieving Current Session Information

In Qodly, user information in the current session is available via `cs.Qodly.Users` class. This allows you to retrieve essential user details, such as their email, role, first name, and last name. Use the code below:

```qs
exposed Function loadSessionUserInfo()
	var userCS : cs.Qodly.Users
	
	userCS = cs.Qodly.Users.new()

	use(session.storage)
		session.storage.currentUser = userCS.getCurrentUser()
	end

    ds.User.linkAccount()
```

By utilizing the `loadSessionUserInfo()` function, fetch and store user data for session-wide access.


On the other hand, the `linkAccount()` function links sessions and profiles, allowing extended data storage. This enhances profiles with varied information such as images, preferences, and historical data.

```qs
exposed function linkAccount()
	if(session.storage.currentUser!=null)
		user = this.query("email = :1", session.storage.currentUser.email).first()
		if(user == null)
			user = ds.User.new()
			user.email = session.storage.currentUser.email
			user.save()
		end
	end
```

For more detailed information, refer to the [Sessions](../../language/SessionClass.md) and [Users](../../language/UsersClass.md) sections.