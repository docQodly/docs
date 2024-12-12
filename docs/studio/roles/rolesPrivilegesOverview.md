---
id: overview
title: Configuring Roles & Privilege
---
import Column from '@site/src/components/Column'


## Roles: Defining User Profiles 

### Understanding Roles  

Roles are essential in defining distinct user profiles within Qodly. Each role corresponds to a specific set of privileges, and access levels (Permissions).

### Role Hierarchy  

Roles can be structured hierarchically, allowing for an organized and layered access control system. In Qodly, higher-level roles can inherit the **privileges** of lower-level roles, creating an efficient method of managing user access. This hierarchy enhances the granularity of access management and facilitates a streamlined approach.

### Detailed Permission Review for Roles

When a role is selected in the `Roles & Privileges` editor, a detailed permission review is displayed to provide insight into the final permissions resolution for that specific role. This feature helps developers fine-tune privileges more effectively by showing the impact of privilege configurations.

<img src={require('./img/showRolePermissions.png').default} style={{borderRadius: '6px'}} />


- Comprehensive Permission Listing: Lists all application code assets, including: Dataclasses, Attributes, Functions, Singletons and Singleton functions.

- Organized and Alphabetical Grouping: Listed assets are grouped and sorted alphabetically as follows:

	- Datastore (ds)
	- Datastore Functions 
	- Dataclasses
	- Attributes
	- Dataclass Functions
	- Entity Functions
	- Entity Selection Functions
	- Singletons
	- Singleton Functions

- Permission Columns: For each asset, the following columns display resolved permissions: Read, Create, Update, Delete, Describe and Execute.

:::tip Permission Indicators
A grey tick <img src={require('./img/PermissionIndicators1.png').default} style={{borderRadius: '6px', width:'3%'}} /> indicates that the permission is granted. 

If the access is granted through promoted privileges, an info indicator <img src={require('./img/PermissionIndicators3.png').default} style={{borderRadius: '6px', width:'5%'}} /> is provided.

An empty checkbox <img src={require('./img/PermissionIndicators2.png').default} style={{borderRadius: '6px', width:'3%'}} /> indicates that the permission is not granted.
:::


:::info Impact of Privilege Changes
Displaying permissions explicitly helps identify the consequences of modifications in privileges, such as:

- Adding permissions to a privilege included in a role.
- Removing permissions from a privilege that is not included in any role.
- Promoting a function execution in a privilege will apply the promotion universally, regardless of roles.
:::


### Adding Roles  

To add a role:

1. Open the `Explorer` Panel.
2. Navigate to the `Roles and Privileges` section.
3. Click on the `Roles` tab to access role management.
4. To create a new role, click on the `Add new role` card.

<img src={require('./img/addRole.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::note Example
In a back-office travel agency solution, you might create roles such as:


|Roles          |Description|
|---------------|---|
|Agent       | Reserves and customizes travel packages for clients.|  
|Content Manager| Manages website content, including creating and updating travel packages.|
|Sales Manager  | Manages customer bookings, views sales reports, and generates invoices.|
:::

## Privileges: Enabling Controlled Access

### Understanding Privileges  

Privileges define the specific permissions that users of different roles can perform. By assigning privileges to roles, you determine the extent of a user's access to data and functionalities.

### Adding Privileges  

To add a privilege:

1. Open the `Explorer` Panel.
2. Navigate to the `Roles and Privileges` section.
3. Click on the `Privileges` tab to access privileges management.
4. Click on the `+` button to create a new privilege.

<img src={require('./img/addPrivilege.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::note Example
In a back-office travel agency solution, you might create privileges such as:

|Privileges     |Description|
|---------------|---|
|ManageReports        | Access to sales reports and statistical data.|
|ManageBookings       | Manage customer bookings, verify reservations, and generate invoices.|
|ManageContent        | Access and manage the travel agency's online content.|
:::

## Interplay Between Roles and Privileges

Achieving the optimal synchronization of roles and privileges ensures seamless task execution for users while maintaining robust data security. 

To assign one or multiple privileges to a role:

1. Navigate to the `Roles` tab within the `Roles and Privileges` section.
2. Select the desired role (e.g., `Sales Manager`).
3. Locate the privileges side section on the far right.
4. In this section, you'll find a comprehensive list of available privileges.
5. To assign a privilege, click the `+` icon.
6. To remove a privilege, simply click the `-` icon.

<img src={require('./img/InterplayBetweenRoles_and_Privileges.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::note Example
For instance, a `Sales Manager` role might possess privileges like `ManageBookings` and `ViewReports`, granting them the ability to analyze booking trends and monitor revenue for informed decision-making. Similarly, a `Content Manager` role could receive the privilege `ManageContent`.
:::

## Assigning Roles

Through the **Qodly Management Console** of your application, you can assign roles to users across various environments—`development`, `staging`, or `production`—each with its own configuration.

:::info
Roles configured in the development environment may differ from those in production. It's essential to manage roles appropriately in each environment to ensure consistent access control.
:::

To assign a role to a user in the `development` environment:

1. Go to the `Teams` tab to see a list of available users, each linked to their respective roles.
2. Click the `Add User` button in the upper-right corner to add a new user.
3. Complete the form that appears with the necessary user data.
4. Find a dropdown menu labeled `Profile` towards the end of the form, displaying roles added from Qodly Studio under the `Roles and Privileges` section.
5. Select and assign the appropriate role to the new user from the list, providing specific privileges associated with that role.

<img src={require('./img/addingRolesviaCloud.png').default} style={{borderRadius: '6px'}} />


## Retrieving Current Session Information

You can retrieve user information in the current session using the `cs.Qodly.Users` class. This allows you to access essential user details, such as their email, role, first name, and last name.

Here's how you can retrieve and store user data for session-wide access:

```qs
exposed Function loadSessionUserInfo()
	var userCS : cs.Qodly.Users
	
	userCS = cs.Qodly.Users.new()

	use(session.storage)
		session.storage.currentUser = userCS.getCurrentUser()
	end

```

For more detailed information, refer to the [Sessions](../../language/SessionClass.md) and [Users](../../language/UsersClass.md) sections.



## Roles and privileges JSON Representation

In Qodly Studio, roles and privileges have a JSON representation that can be useful for troubleshooting or copying selected parts.

<Column.List align="center" justifyContent="between">
	<Column.Item width="50%">
        This representation can be accessed through a text editor by selecting the <code>Roles and privileges</code> in the <code>Explorer</code> and choosing <code>Open With</code> a <code>Text Editor</code>.
	</Column.Item>
	<Column.Item width="45%">
        <img alt="json" src={require('./img/openastext.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br/>

This allows you to view, copy, or edit the JSON representation.

:::warning
Exercise caution when editing the JSON representation. The syntax checker does not validate whether attribute names match the expected ones or if there are issues with attribute names. Always ensure you have a backup before making changes.
:::