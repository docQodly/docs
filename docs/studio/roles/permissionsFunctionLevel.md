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

- The <img src={require('./img/function.png').default} style={{borderRadius: '6px', width:'3%'}} /> icon in the dropdown list indicates **Function** ressources.
- The <img src={require('./img/singleton.png').default} style={{borderRadius: '6px', width:'3%'}} /> icon in the dropdown list indicates **Singleton function** ressources.
:::

:::tip

If the Singleton class or its exposed functions don't appear in the permissions dropdown, follow these steps to enable it:

1. Navigate to the [Singleton class](../../language/basics/lang-classes#singleton-classes) in the class section.

2. Check if the **Singleton class** is missing any exposed functions.

3. If there are no exposed functions, add at least one. Here’s an example:<img src={require('./img/singletonFunctionExposed.png').default} style={{borderRadius: '6px', width:'35%', verticalAlign: 'middle', marginLeft: '2px'}} />.

4. Save the changes and re-check the permissions dropdown. 

5. If the Singleton class still doesn't appear, [reload](../overview#contextual-menu) the changes by following the documentation for applying the latest updates. 

Now, the Singleton class and its exposed functions should be available for selection, whether it’s the standard class Singleton or the shared one.

:::

### Execute Permission

Execute permissions allow the designated privilege to run the function's code <img src={require('./img/executeFunction.png').default} style={{borderRadius: '6px', width:'5%'}} />.

:::info

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        If the Execute function permission checkbox has the <img src={require('./img/functionPermission_promotedIcon.png').default} style={{borderRadius: '6px', width: '4%'}} /> icon on the right, it signifies that the <a href="#promote-permission">function has been promoted by another privilege</a>. Hover over the privilege name, and clicking on it will redirect you to the privilege promoting the function.
    </Column.Item>
    <Column.Item width="30%"> 
        <img src={require('./img/functionPermission_goToPrivilege.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::

### Promote Permission

Promote permissions enable temporary privilege escalation during function execution <img src={require('./img/promoteFunction.png').default} style={{borderRadius: '6px', width:'5%'}} />, ensuring the secure performance of critical operations within that function's code without permanently adding privileges.

:::info
Upon executing a specific function within a session with a designated privilege, Qodly dynamically integrates the privileges that `Promote` the function into the session. This temporary elevation allows the function's execution, even when the original session's privilege lacks direct permission for resources in that function code.

After the function concludes, the temporary elevation from the `Promote` permission is revoked.
:::

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        A function can be promoted from multiple privileges. In such cases, there's no hierarchy determining priority.
        <br/> 
        Instead, the session experiencing temporary privilege elevation during function execution, will have access to all resource permissions set in each of the promoting privileges.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/functionPermission_promotedFromMultiple.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<br/> 

:::tip
Refer to the use case of the [`Promote`](#promote-permission-use-case) permission for detailed configuration information.
:::

### Describe Permission

Describe permissions provide metadata access for the selected function <img src={require('./img/describeFunction.png').default} style={{borderRadius: '6px', width:'5%'}} />.

:::tip
Refer to the use case of the [`Describe`](#describe-permission-use-case) permission for detailed configuration information.
:::

## Strategies 

### Max Restriction to Gradual Expansion

To control function execution, the **DataStore** level is configured exclusively for the `Restricted` privilege, ensuring that only roles with this privilege can execute functions, thus preventing any unauthorized access.

<img src={require('./img/functionPermission_maxRestriction.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::info

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        Hovering over the <img src={require('./img/i.png').default} style={{borderRadius: '6px', width:'3%'}} />  icon reveals that all functions throughout the model — encompassing DataStore, Dataclasses, Entity selections, and Entities — have the execute permission for the Restricted privilege.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/functionPermission_maxRestriction2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::

However, to accommodate scenarios where the `Agent` role needs to execute functions, such as the `book` function within the `roomOptions` Entity class, a gradual expansion involves adding the `book` function resource and checking the execute permission. 

<img src={require('./img/functionPermission_maxRestriction3.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::info 
In this context, the `bookRoom` privilege overrides function permissions set at the **DataStore** level (`Restricted`).
:::

### Full Access to Gradual Restriction

If no `Execute` permission is set at any level, it grants full access to all functions defined throughout the Model. Gradual restriction involves using other privileges to restrict specific function execution, as seen in the `Employee` DataClass, where the `register()` function execution is restricted to specific privileges.



## Promote Permission Use Case

### Scenario Overview

In a travel agency's system, dynamic pricing analysis recalculates travel package prices based on demand, seasonal trends, and competitor pricing. Key roles include:

- The `Sales Manager` role fully controls Read access to the `Pricing` Dataclass, including the execution of its functions (Dataclass functions, entity functions, and entity selection functions), such as the `analyzePricing` function, to ensure confidentiality.

- Although the `Agent` role is restricted from accessing the `Pricing` Dataclass, there are specific scenarios where the `Agent` may need to utilize the `analyzePricing` function to conduct a pricing analysis in response to special requests.

### Promote Permission Configuration

If an `Agent` receives a special request, they need `Execute` permission for the `analyzePricing` function to generate a customized pricing quote. This allows users with the `Agent` role to directly execute the function.

<img src={require('./img/functionPermission_maxRestriction5.png').default} style={{borderRadius: '6px'}} />

However, due to restricted access to the `Pricing` Dataclass limited to the `Sales Manager` role:

<img src={require('./img/functionPermission_maxRestriction6.png').default} style={{borderRadius: '6px'}} />

Executing the function code attempting to `Read` data from it would result in a `No permission to read for the Pricing dataclass` error.

Therefore, It becomes essential to include `Promote` permission for the `analyzePricing` function within the `ManageFinancials` privilege:

<img src={require('./img/functionPermission_maxRestriction7.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

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

This configuration explicitly specifies that when the `analyzePricing` function is executed within a session holding the `Agent` role, which lacks permission for the `Pricing` resource, it temporarily integrates the `ManageFinancials` privilege into that session during function execution. This temporary elevation allows the function to be executed without granting permanent access.

:::tip
Add the `Execute` permission in the privilege associated with the role that needs to directly perform the function. Meanwhile, the `Promote` permission is configured in the privilege that grants broader control over the resources involved in the function, providing a temporary elevation of privileges during the function's execution.
:::


## Describe Permission Use Case

The `Describe` permission gives a privilege the ability to gather metadata about the structure and attributes of Dataclasses.

### Scenario Overview

In this scenario, the `Describe` permission is restricted to privilege `A` for the metadata of the `Pricing` Dataclass:

<img src={require('./img/describePermissionUseCase1.png').default} style={{borderRadius: '6px'}} />

This limitation means that only privilege `A` is allowed to read the metadata associated with the `Pricing` Dataclass, covering Dataclass functions, Entity functions, and Entity Selection functions.

### Consequence of Limited Permission

Despite privilege `B` having the necessary permissions to execute the function, and the function being promoted, an error is triggered:

<img src={require('./img/describePermissionUseCase2.png').default} style={{borderRadius: '6px'}} />

This error results from the absence of the `Describe` permission for the `Pricing` Dataclass within privilege `B`:

<img src={require('./img/describePermissionUseCase3.png').default} style={{borderRadius: '6px'}} />

This prevents it from retrieving crucial metadata, including the Dataclass name. Consequently, it fails to recognize the existence of the `Pricing` Dataclass and, by extension, the associated function during execution.

### Solutions

#### Solution 1: Granting Describe Permission

To address this issue, grant privilege `B` the necessary `Describe` permission for the `Pricing` Dataclass. This permission allows privilege `B` to access metadata, including the Dataclass name and its functions, enabling the successful execution of functions within the `Pricing` Dataclass.

#### Solution 2: Higher Permission Level

If `Describe` permission is configured for total confidentiality, and privilege `B` shouldn't have access to it, then all functions must have a higher permission level than the restricted resource - the `Pricing` Dataclass.

To overcome these limitations, place the function in the **DataStore** function and update the function appointed to privilege `B`, displaying `ds.analyzePricing` instead of `Pricing.analyzePricing`:

<img src={require('./img/describePermissionUseCase4.png').default} style={{borderRadius: '6px'}} />

:::info
The **DataStore** has a higher permission level than any individual **Dataclass**.
:::

Likewise, if you aim to restrict the `Describe` permission for the `Price` Attribute in the `Pricing` Dataclass, place the function either in the `Pricing` Dataclass function or the **DataStore** function:

<img src={require('./img/describePermissionUseCase5.png').default} style={{borderRadius: '6px'}} />

:::info
The **Dataclass** has a higher permission level than its **Properties**.
:::