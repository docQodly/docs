---
id: attributesPermissions
title: Attribute Permissions
---

import Column from '@site/src/components/Column'   

## Purpose and Scope

**Attribute** Permissions empower you with the ability to shape and control access to specific **Attributes** within **Dataclasses**. These permissions dictate what actions and interactions users are allowed to perform on individual **Attributes**.

## Configuring Attribute Permissions 

**Attribute**-level permissions hold the power to override or supplement those set at the **Dataclass** level. To set **Attribute** permissions for a specific privilige:

- Choose the resource name, like the `netProfitMargin` in the `Reporting` dataclass, from the dropdown list.
- Alternatively, type the resource name, such as `netProfitMargin` in the `Reporting` dataclass, directly into the search bar.

:::info
The <img alt="explorer" src={require('./img/attribute.png').default} style={{borderRadius: '6px', width:'3%'}} /> icon in the dropdown list indicates **Attribute** ressources.
:::

## Hierarchy and Overrides 

While **Dataclass** permissions cascade down to more specific **Attributes** levels, they remain adaptable, allowing for overrides or supplements as required. 

For instance, the `ManageReports` privilege, assigned to users with the `Sales Manager` role, allows unrestricted access to the `Reporting` Dataclass. 

<img alt="explorer" src={require('./img/ManageReports.png').default} style={{borderRadius: '6px'}} />

However, this inadvertently exposes sensitive data, such as `netProfitMargin` and `totalExpenses` attributes, to individuals outside the financial department. Consider a scenario where a user with a `Sales Manager` role attempts an HTTP request to the `netProfitMargin` attribute REST API endpoint. Unchecked data access of this nature permits unauthorized actions:

<img alt="explorer" src={require('./img/attributePermissions1.png').default} style={{borderRadius: '6px'}} />

To address this, it is essential to refine **Attributes** permissions and narrow the scope of these resources:

<img alt="explorer" src={require('./img/overriddingDataclass.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

Setting Attributes permissions in the `ManageFinancials` privilege allows the `ManageReports` privilege to explore the `Reporting` Dataclass while restricting access to confidential resources, such as the `netProfitMargin` and `totalExpenses` attributes.

<img alt="explorer" src={require('./img/attributePermissions2.png').default} style={{borderRadius: '6px'}} />

The presence of `__INVALID: 1` indicates that the attribute is marked as invalid, signaling that the user making the request lacks the necessary permissions to access or modify it.

:::info 
In this context, the permissions set at the `ManageReports` privilege is overridden by the `ManageFinancials` privilege. Consequently, individuals with a `Sales Manager` role lose access to the `netProfitMargin` and `totalExpenses` attributes.
:::
