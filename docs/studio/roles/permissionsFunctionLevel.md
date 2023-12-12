---
id: functionPermissions
title: Function Permissions
---

import Column from '@site/src/components/Column'   

## Purpose and Scope

Function-level permissions control access to custom functions defined within the Model. These functions can perform actions such as managing bookings, generating invoices, and handling reservations.

## Configuring Function Permissions 

To configure **Function** Permissions for a specific privilege, follow these steps:

- Choose the resource name, like the `register` function, from the dropdown list.
- Alternatively, type the resource name, such as the `register` function, directly into the search bar.

:::info
The <img src={require('./img/function.png').default} style={{borderRadius: '6px', width:'3%'}} /> icon in the dropdown list indicates **Function** ressources.
:::

## Max Restriction to Gradual Expansion

To control function execution, the **DataStore** level is configured exclusively for the `Restricted` privilege, ensuring that only roles with this privilege can execute functions, thus preventing any unauthorized access.

<img src={require('./img/functionPermission_maxRestriction.png').default} style={{borderRadius: '6px'}} />

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        Hovering over the <img src={require('./img/i.png').default} style={{borderRadius: '6px', width:'3%'}} />  icon reveals that all functions throughout the model — encompassing DataStore, Dataclasses, Entity selections, and Entities — have the execute permission for the Restricted privilege.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/functionPermission_maxRestriction2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<br/>

However, to accommodate scenarios where the `Agent` role needs to execute functions, such as the `book` function within the `roomOptions` Entity class, a gradual expansion involves adding the `book` function resource and checking the execute permission. 

<img src={require('./img/functionPermission_maxRestriction3.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::info 
In this context, the `agent` privilege overrides function permissions set at the **DataStore** level (`Restricted`).
:::

## Full Access to Gradual Restriction

If no `Execute` permission is set at any level, it grants full access to all functions defined throughout the Model. Gradual restriction involves using other privileges to restrict specific function execution, as seen in the `Employee` DataClass, where the `register()` function execution is restricted to specific privileges.


## Promote Permission Use Case

### Purpose

Promote permissions enable temporary privilege escalation during function execution, ensuring the secure performance of critical operations within that function's code without permanently adding privileges.

:::info
Upon executing a specific function within a session with a designated privilege, Qodly dynamically integrates the privileges that `Promote` the function into the session. This temporary elevation allows the function's execution, even when the original session's privilege lacks direct permission for resources in that function code.

After the function concludes, the temporary elevation from the `Promote` permission is revoked.
:::


### Background

In a travel agency's system, dynamic pricing analysis recalculates travel package prices based on demand, seasonal trends, and competitor pricing. Key roles include:

- The `Sales Manager` role fully controls the `Pricing` Dataclass and its `analyzePricing` function, ensuring confidentiality. Access to this Dataclass is strictly restricted from the `Agent` role.

- In specific scenarios, the `Agent` role may need to perform a pricing analysis, responding to special requests.

### Promote Permission Configuration

If an `Agent` receives a special request from a high-value customer, they need `Execute` permission for the `analyzePricing` function to generate a customized pricing quote. This allows users with the `Agent` role to directly execute the function.

<img src={require('./img/functionPermission_maxRestriction5.png').default} style={{borderRadius: '6px'}} />

However, due to restricted access to the `Pricing` Dataclass limited to the `Sales Manager` role, executing the function code attempting to read data from it would result in a "No permission to read" error:

<img src={require('./img/functionPermission_maxRestriction6.png').default} style={{borderRadius: '6px'}} />

It becomes essential to include `Promote` permission for the `analyzePricing` function within the `ManageFinancials` privilege:

<img src={require('./img/functionPermission_maxRestriction7.png').default} style={{borderRadius: '6px'}} />

This configuration explicitly specifies that when the `analyzePricing` function is executed within a session holding the `Agent` role, which lacks permission for the `Pricing` resource, it temporarily integrates the `ManageFinancials` privilege into that session during function execution. This temporary elevation allows the function to be executed without granting permanent access.

## Handy Tips

:::tip
Add the `Execute` permission in the privilege associated with the role that needs to directly perform the function. Meanwhile, the `Promote` permission is configured in the privilege that grants broader control over the resources involved in the function, providing a temporary elevation of privileges during the function's execution.
:::

:::info
If you have set permissions for the `Describe` action, which may be the case when access controllers want to truly conceal the information, then all functions you execute must have at least the same permission level as the `Describe`.
:::

:::info
<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        A function can be promoted from multiple privileges. In such cases, there's no hierarchy determining priority.  
        The session experiencing temporary privilege elevation during function execution, will have access to all resource permissions set in each of the promoting privileges.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/functionPermission_promotedFromMultiple.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>
:::

:::info

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        The <img src={require('./img/functionPermission_promotedIcon.png').default} style={{borderRadius: '6px', width: '4%'}} /> icon indicates that the function has been promoted by another privilege. Hover over the privilege name, and clicking on it will direct you to the privilege promoting the function.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/functionPermission_goToPrivilege.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::