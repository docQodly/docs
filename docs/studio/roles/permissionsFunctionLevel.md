---
id: functionPermissions
title: Function Permissions
---

import Column from '@site/src/components/Column'   

## Purpose and Scope

Function-level permissions control access to custom functions defined within the Model. These functions can perform actions such as managing bookings, generating invoices, and handling reservations.
 
## Configuring Function Permissions 

To configure **Function** Permissions for a specific privilege, follow these steps:

- Choose the resource name, like the `register()` function, from the dropdown list.
- Alternatively, type the resource name, such as the `register()` function, directly into the search bar.

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

Promote permissions offer a unique capability for temporary privilege escalation during function execution, ensuring the secure execution of critical functions without the permanent grant of additional privileges.

### Background

In a travel agency's system, dynamic pricing analysis recalculates travel package prices based on demand, seasonal trends, and competitor pricing. Key roles include:

- The `Sales Manager` role fully controls the `Pricing` Dataclass and its `analyzeDynamicPricing` function, ensuring confidentiality. Access to this Dataclass is strictly restricted from the `Agent` role.

- In specific scenarios, the `Agent` role may need to perform a pricing analysis, responding to special requests.

### Promote Permission Configuration

If an `Agent` receives a special request from a high-value customer, they need `Execute` permission for the `analyzeDynamicPricing` function to provide a tailored pricing quote. This allows users with the `Agent` role to directly execute the function.

<img src={require('./img/functionPermission_maxRestriction5.png').default} style={{borderRadius: '6px'}} />

However, as reading access to the `Pricing` Dataclass is restricted to the `Sales Manager` role, it's necessary to add `Promote` permission for the `analyzeDynamicPricing` function to the `ManageFinancials` privilege. This configuration enables temporary privilege elevation specifically during the execution of the `analyzeDynamicPricing` function.

<img src={require('./img/functionPermission_maxRestriction6.png').default} style={{borderRadius: '6px'}} />

:::info
After the execution of the function, the temporary elevation provided by the `Promote` permission is revoked, and the `Agent` role returns to its standard access level.
:::

The Promote permission in this privilege ensures that users with the Agent role, who do not have permission to manage financial data, can perform the pricing analysis without being granted permanent access to the entire financial management suite.

:::tip
Add the `Execute` permission in the privilege associated with the role that needs to directly perform the function. Meanwhile, the `Promote` permission is usually configured in the privilege that grants broader control over the resources involved in the function, providing a temporary elevation of privileges during the function's execution.
:::

## Model Editor Approach

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        In the <strong>Model Editor</strong>, link privileges to permissions (e.g., Execute, Describe, and Promote) to configure Function permissions. 
        <br/><br/>
        Simply click on a Function within a Dataclass for a streamlined dropdown selection to allocate desired privileges.
        <br/><br/>
        Adding permissions is simple — click on the <img src={require('./img/ModelEditor_addPermission.png').default} style={{borderRadius: '6px', width:'3%'}} /> button in the dropdown list. Conversely, to remove an affected privilege, click on the <img src={require('./img/ModelEditor_removePermission.png').default} style={{borderRadius: '6px', width:'2%'}} /> button next to the privilege.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/ModelEditor_functionPermissions.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<br/>

:::info

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
            <li>A purple tag signifies that the privilege is directly linked to that specific permission.</li>
        </ul>
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/purpleTag.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
            <li>A dark grey tag suggests control over that permission by an unlinked privilege, reflecting a granularity hierarchy where the permission is governed by a higher-level resource. For instance, allowing read access to the entire Datastore for the Guest privilege would result in the Guest privilege tag being displayed when checking the read permission for all Dataclasses.</li>
        </ul>
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/darkGreyTag.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
            <li>If a privilege is both purple-tagged and accompanied by the <img src={require('./img/includedTag.png').default} style={{borderRadius: '6px', width:'5%'}} /> icon, it indicates the <a href="includingPrivileges">inclusion of an extra privilege</a>.</li>
            <br/>
            Obtaining permission for that resource requires having one of the additional privileges.
        </ul>
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/purpleTagged&icon.png').default} style={{borderRadius: '6px'}} />
        <br/><br/>
        <img src={require('./img/privilegeRequired.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::