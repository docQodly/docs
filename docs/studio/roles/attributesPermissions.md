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

## Model Editor Approach

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        In the <strong>Model Editor</strong>, link privileges to permissions (e.g., Create, Read, Update, Delete, and Describe) to configure Attribute permissions. 
        <br/><br/>
        Simply click on an Attribute within a Dataclass for a streamlined dropdown selection to allocate desired privileges.
        <br/><br/>
        Adding permissions is simple — click on the <img alt="explorer" src={require('./img/ModelEditor_addPermission.png').default} style={{borderRadius: '6px', width:'3%'}} /> button in the dropdown list. Conversely, to remove an affected privilege, click on the <img alt="explorer" src={require('./img/ModelEditor_removePermission.png').default} style={{borderRadius: '6px', width:'2%'}} /> button next to the privilege.
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/ModelEditor_attributePermissions.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::info

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
            <li>A purple tag signifies that the privilege is directly linked to that specific permission.</li>
        </ul>
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/purpleTag.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
            <li>A dark grey tag suggests control over that permission by an unlinked privilege, reflecting a granularity hierarchy where the permission is governed by a higher-level resource. For instance, allowing read access to the entire Datastore for the Guest privilege would result in the Guest privilege tag being displayed when checking the read permission for all Dataclasses.</li>
        </ul>
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/darkGreyTag.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
            <li>If a privilege is both purple-tagged and accompanied by the <img alt="explorer" src={require('./img/includedTag.png').default} style={{borderRadius: '6px', width:'5%'}} /> icon, it indicates the <a href="includingPrivileges">inclusion of an extra privilege</a>.</li>
            <br/>
            Obtaining permission for that resource requires having one of the additional privileges.
        </ul>
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/purpleTagged&icon.png').default} style={{borderRadius: '6px'}} />
        <br/><br/>
        <img alt="explorer" src={require('./img/privilegeRequired.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::