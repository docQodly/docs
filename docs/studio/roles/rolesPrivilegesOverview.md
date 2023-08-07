---
id: rolesPrivilegesOverview
title: Roles and Privileges
---

In the realm of data security and access control, Qodly introduces a robust system of Roles and Privileges. These two fundamental concepts are at the heart of enforcing data access restrictions within the application. By understanding the intricacies of Roles and Privileges, you can ensure that each user accesses only the data pertinent to their designated role. 

---
## Roles: Defining User Profiles 

### <u> Understanding Roles in Qodly </u> 

Roles in Qodly play a pivotal role in defining distinct user profiles within the application. Each role corresponds to a specific set of responsibilities, privileges, and access levels. For instance, consider a travel agency website, roles such as "Customer," "Content Manager," and "Sales Manager" delineate varying user profiles, each with a unique scope of actions and operations they can perform.

### <u> Role Hierarchy and Hierarchical Access Control </u> 

Roles are hierarchically structured, allowing for the establishment of an organized and layered access control system. This hierarchy ensures that higher-level roles encompass the privileges of lower-level roles, creating a seamless and efficient method of managing user access. This hierarchical access control enhances the granularity of access management, facilitating a streamlined and systematic approach.

### <u> Adding Roles in Qodly </u> 

Adding roles in Qodly is a straightforward process. Begin by opening the `Explorer` Panel, your control center for Qodly management. From there, navigate to the `Roles and Privileges` section, where you'll find the dedicated `Roles` tab. Click on this tab to access role management. To define a new role, initiate the role creation process by clicking on the `Add new role` option. 

<img alt="explorer" src={require('./img/addRole.png').default} style={{borderRadius: '6px'}} />

Following these uncomplicated steps, in the context of a travel agency website known as `TravelTrove`, you can customize unique roles such as `Customer`, `Content Manager`, and `Sales Manager` to perfectly align with your specific application needs:


|Roles          |Description|
|---------------|---|
|Customer       |Represents website visitors who can browse travel packages, view destination information, and make bookings.|  
|Content Manager|Responsible for managing the content of the website, including creating and updating travel packages, adding new destinations, and editing descriptions.|
|Sales Manager   |Has additional privileges compared to customers, allowing them to manage customer bookings, view sales reports, and generate invoices.|

### <u> Role-Based Authentication: Ensuring Clear Access Control </u> 

To ensure clear role-based access within the system, the integration of a user authentication mechanism, specifically a dedicated sign-in page, is of utmost importance. This mechanism serves as a vital tool for distinguishing between different roles attempting to access the website. By requiring users to sign in, the system uniquely identifies and associates each user with their designated role. After a successful registration, automatic assignment of a default role, such as the `Customer` role, serves as the foundational step for controlled access in alignment with predefined privileges.

<img alt="explorer" src={require('./img/authPage.gif').default} style={{borderRadius: '6px'}} />

The next step involves binding this authentication function to the login button. When a user attempts to log in, the authentication process is triggered, and the system verifies their credentials before granting access:

```qs
exposed function authenticateUser(username: variant, password: variant) : string
	var user : cs.UserEntity 
	var privileges : object

	if ( (username != null) & (password != null) )
		user = ds.User.query("username = :1",username).first()

		if (user != null) 
			if (verifyPasswordHash(password,user.password))
				privileges = newobject("userName", user.username, "roles", user.role_ID.name)
				session.setPrivileges(privileges)
				webForm.setMessage("You are authenticated as a " + user.role_ID.name)
				return "homePage"
			else
				webForm.setError("Invalid username or password. Please check your credentials and try again.")
				return "authPage"
			end
		else
			webForm.setError("The username you are trying to authenticate with does not exist.")
			return "authPage"
		end
	else
		webForm.setError("Please provide both the username and password.")
		return "authPage"
	end
```

For a more comprehensive understanding, we recommend consulting the [**Session command**](../../language/SessionClass.md) on the documentation page. This valuable resource offers in-depth insights and detailed information on the topic.

<br/>

---

## Privileges: Enabling Controlled Access

### <u> Defining Privileges for Different User Profiles </u> 

Privileges are the building blocks of access control in Qodly. They define the specific technical capabilities and actions that users of different roles can perform. By assigning privileges to roles, you determine the extent of a user's access to data and functionalities. For example, the "BrowsePackages" privilege allows users to view available travel packages, while the "BookPackage" privilege enables booking transactions.

### <u> Hierarchical Privileges for Granular Control </u> 

Privileges can be structured hierarchically, allowing one privilege to include or inherit the capabilities of another. This hierarchical arrangement enhances the flexibility of access control, enabling the creation of comprehensive privilege sets that cater to various user roles. By establishing a hierarchy of privileges, you can efficiently manage access without duplicating efforts or creating redundant privilege definitions.

### <u> Adding Privileges in Qodly </u> 

The process of adding privileges in Qodly is just as simple as adding roles. To get started, head to the `Privileges` tab within the `Roles and Privileges` section. To create a new privilege, simply click on the `+` icon, which will prompt the `Create New Privilege` form to appear.

<img alt="explorer" src={require('./img/addPrivilege.png').default} style={{borderRadius: '6px'}} />

Let's explore some of these privileges and see their application in the context of `TravelTrove`, a travel agency website:

|Privileges          |Description|
|---------------|---|
|ViewReports          | Access to sales reports and statistical data, facilitating analysis of booking patterns, revenue tracking.|
|ManageBookings       | Manage customer bookings by accessing details, verifying reservations, making changes, and generating invoices.|
|ManageContent        | Access and manage the travel agency's online content, including travel package creation, updates, and deletions.|

<br/>

---

## Interplay Between Roles and Privileges

Achieving the optimal synchronization of roles and privileges ensures seamless task execution for users while maintaining robust data security. 

To assign one or multiple privileges to a role, return to the `Roles` tab within the `Roles and Privileges` section. Select the desired role, such as `Sales Manager`, and find the privileges side section on the far right. Here, you'll discover a comprehensive list of available privileges, along with the means to assign them to the chosen role. Adding privileges is as simple as clicking the `+` icon, and removal is just as easy using the `-` icon. 

<img alt="explorer" src={require('./img/InterplayBetweenRoles_and_Privileges.png').default} style={{borderRadius: '6px'}} />

For instance, a `Sales Manager` role might possess privileges like `ManageBookings` and `ViewReports`, granting them the ability to analyze booking trends and monitor revenue for informed decision-making. Similarly, a `Content Manager` role could receive privileges for `ManageContent`, enhancing the website's appeal to potential travelers and refining the overall user experience, including travel reservation options.

<br/>

---

## Adding Roles via Cloud Interface

Through the cloud interface of your application, you can seamlessly integrate roles for users across various environments, be it development, staging, or production – each with its own tailored configuration. 

:::info

It's important to note that roles added in the development environment may not necessarily align with those in the production environment for example.

:::

For instance, in the development environment, navigate to the `Teams` tab. Here, you'll encounter a list of available users, each associated with their respective roles. Should you need to add a new user, simply click on the `Add User` button located at the upper-right corner. This action will prompt a form to appear, allowing you to input the necessary user data. Towards the form's conclusion, you'll find a dropdown menu under `Profile`, this dropdown showcases the roles that were previously established within Qodly Studio. From this list, you can select and assign appropriate roles to the new user, granting them specific privileges aligned with your requirements.

<img alt="explorer" src={require('./img/addingRolesviaCloud.png').default} style={{borderRadius: '6px'}} />

The significance of these role assignments extends beyond user management. As you shape your application, these roles will influence the user experience. For instance, a non-connected customer will be restricted from viewing their bookings, while a connected customer can conveniently access their bookings from the header bar. This seamless integration of roles ensures a cohesive and tailored user interaction throughout your application.

<img alt="explorer" src={require('./img/travelTrove.gif').default} style={{borderRadius: '6px'}} />
