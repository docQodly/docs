---
id: userAccountManagement
title: User Management
---

import Column from '@site/src/components/Column'

## Overview

Qodly provides a robust user management system with two distinct interfaces: 


| Interface  | Purpose             | Key Features       | Access                 |
|-----------------|-------------------|---------------------------|------------------------------------------|
| Users Page  | Centralized app-wide user management.               | - Add new users or assign existing users to environments.<br/> - Edit user details (name, email, profile).<br/> - Remove users entirely or from specific environments.         | App owners and development users only.   |
| Team Tab  | Environment-specific user management.               | - Add new or existing users to the current environment.<br/> - Edit user details for the specific environment.<br/> - Remove users from the environment (with global removal). | App owners and development users only.   |

:::info
Users added to environments other than the Development environment:

- Cannot access the **Users Page** or **Team Tab (Environment-Specific)**.
- Do not see the app in the **Shared Apps** dashboard.
- Limited to interacting with the app as testers or end-users.
:::


## Users Page

The Users Page offers centralized management of users across all environments in your app. Accessible through the side menu, this interface is tailored for app owners and Development environment users.


### Add New User

If you need to add a new user and assign them to multiple environments:

1. Navigate to the **Users Page** from the side menu.
2. Click on **Add User**. <img src={require('./img/addUser1.png').default} style={{borderRadius: '6px', width: '10%'}} />
3. Fill in the following details:
<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
      <ul>
         <li><strong>First Name</strong> and <strong>Last Name</strong> (optional).</li>
         <br/>
         <li><strong>Email Address</strong> (mandatory).</li>
         <br/>
         <li>Select an <strong>Environment</strong> to associate the user with.</li>
         <br/>
         <li>Assign a <strong>Profile</strong> (e.g., Admin, Viewer).</li>
      </ul>
    </Column.Item>
    <Column.Item width="45%">
      <img src={require('./img/addUser2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

4. Click **Submit**.

Users added via the Users Page are listed as individual cards on the page. Each card displays the user’s email address and tags indicating their assigned environments.

<img src={require('./img/addUser3.png').default} style={{borderRadius: '6px'}} />

:::tip Environment-Specific Assignment
The added user is automatically visible in the Team Tab of the assigned environments, maintaining consistency between the Users Page and environment-specific views. Changes to user details made in either interface are synchronized.
:::


### Edit User Details

Editing a user's details in the Users Page is environment-specific, meaning you must update their information individually for each environment they are assigned to. Follow these steps to make changes:

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
      <ol>
         <li>Navigate to the <strong>Users Page</strong> and identify the user whose details you want to edit.</li>
         <br/>
         <li>Expand <img src={require('./img/expand.png').default} style={{borderRadius: '6px', width: '8%'}} /> the user card to reveal their assigned environments.</li>
         <br/>
         <li>Click the <img src={require('./img/edit.png').default} style={{borderRadius: '6px', width: '8%'}} /> button next to the specific environment where the user is assigned.</li>
      </ol>
    </Column.Item>
    <Column.Item width="45%">
      <img src={require('./img/userCard.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
      <ol start='4'>
         <li>Modify the following fields as needed:</li>
            <br/>
            <ul>
               <li><strong>First Name</strong> and <strong>Last Name</strong>.</li>
               <br/>
               <li><strong>Profile</strong> for the selected environment.</li>
               <br/>
            </ul>
         <br/>
         <li>Click <strong>Update</strong>.</li>
      </ol>
    </Column.Item>
    <Column.Item width="45%">
      <img src={require('./img/editUser1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::tip Outcome:

The updated details will immediately reflect in:
- The Users Page for the corresponding environment tag.
- The Team Tab of the associated environment.
:::


### Delete User

To delette a user entirely from the swohle app , meaing removig it fromm mall enviroeemets where they are assigned

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
      <ol>
         <li>Navigate to the <strong>Users Page</strong> and identify the user you want to delete.</li>
         <br/>
         <li>Click the <strong>Delete User</strong> <img src={require('./img/deleteUser.png').default} style={{borderRadius: '6px', width: '22%'}} /> button located on the user card.</li>
      </ol>
    </Column.Item>
    <Column.Item width="45%">
      <img src={require('./img/userCard.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
      <ol start='4'>
         <li>In the confirmation dialog, confirm the deletion to finalize the action.</li>
      </ol>
    </Column.Item>
    <Column.Item width="45%">
      <img src={require('./img/removeUserfromEnvironments.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::tip Outcome:
The user is permanently removed from the app:
- Their entry is deleted from the Users Page.
- They are unassigned from all environments.
- They lose all access to the app and its environments.
:::

### Remove User from a Specific Environment

Removing a user from a specific environment can be done through the Users Page, while keeping their assignments to other environments intact. Follow these steps:

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
      <ol>
         <li>Navigate to the <strong>Users Page</strong> and identify the user you want to remove.</li>
         <br/>
         <li>Expand <img src={require('./img/expand.png').default} style={{borderRadius: '6px', width: '8%'}} /> the user card to view all the environments they are assigned to.</li>
         <br/>
         <li>Click the <img src={require('./img/delete.png').default} style={{borderRadius: '6px', width: '8%'}} /> button next to the specific environment where the user is assigned.</li>
      </ol>
    </Column.Item>
    <Column.Item width="45%">
      <img src={require('./img/userCard.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
      <ol start='4'>
         <li>In the confirmation dialog, confirm the removal to finalize the action.</li>
      </ol>
    </Column.Item>
    <Column.Item width="45%">
      <img src={require('./img/removeUser.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::tip Outcome:

If the User:

- Has Multiple Environments, the user remains listed in the Users Page and is still assigned to other environments.

- Has Only One Environment, removing the user from their only assigned environment results in their complete deletion from the app.

The removal action ensures data consistency across the Users Page and the corresponding Team Tab of the environment.
:::

### Add User to a Specific Environment

Adding a user to a specific environment from the **Users Page** is straightforward and ensures that the user gains the appropriate access based on the environment.

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
      <ol>
         <li>Navigate to the <strong>Users Page</strong> and identify the user you want to assign to another environment.</li>
         <br/>
         <li>Click the <strong>+ Environment</strong> <img src={require('./img/+Environment.png').default} style={{borderRadius: '6px', width: '22%'}} /> button located on the user card.</li>
      </ol>
    </Column.Item>
    <Column.Item width="45%">
      <img src={require('./img/userCard.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
      <ol start='3'>
         <li>Fill in the details in the <strong>Add User to Environment</strong> dialog: </li>
         <br/>
            <ul>
               <li>The <strong>Email Address</strong> field will auto-populate with the selected user's email.</li>
               <br/>
               <li>Optionally, update the <strong>First Name</strong> and <strong>Last Name</strong>.</li>
               <br/>
               <li>Select the desired <strong>Environment</strong> (e.g., Staging, Production) from the dropdown. The Environment dropdown menu will only display the environments that the user is not yet assigned to. Environments where the user is already added will not appear in the dropdown.</li>
               <br/>
               <li>Assign a <strong>Profile</strong> for the selected environment (e.g., Admin, Viewer). </li>
               <br/>
            </ul>
         <br/>
         <li>Click <strong>Submit</strong> to confirm and finalize the action.</li>
      </ol>
    </Column.Item>
    <Column.Item width="45%">
      <img src={require('./img/addUserToEnvironement1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::tip Outcome:
- The user is now assigned to the newly selected environment.  
- The updated assignment is reflected in the user's card on the **Users Page**.  
- The user will also appear in the **Team Tab** of the newly assigned environment.
:::

