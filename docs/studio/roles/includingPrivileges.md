---
id: includingPrivileges
title: Including Privileges
---

import Column from '@site/src/components/Column'   

## Understanding Privilege Inclusion 

Privilege inclusion stands as a foundational concept in access control, involving the nesting of one or more privileges within another to create a hierarchical structure. This approach enables the inheritance of permissions, simplifying the management of access rights.

## Benefits of Privilege Inclusion

Privilege inclusion provides substantial advantages, enhancing the efficiency and flexibility of access control:

|Benefits | Purpose | Practical Application|
|---------|------------|----------------------|
| **Granular Control** |Empowers administrators for precise user access control.|In a healthcare system, it's used to manage access to patient records with healthcare providers granted access to only relevant medical information, ensuring fine-tuned control over sensitive data.|
| **Efficient Management**|Hierarchical privileges reduce redundancy in permission assignments.|In large enterprises, it's used to set overarching permissions for departments or roles. For example, a marketing team might inherit common access rights without individual configurations.|
| **Flexibility and Adaptability**|Enables a flexible and adaptable access control model.|In a rapidly evolving technology company, it's used to integrate access rights for new tools without disrupting existing configurations.|
| **Nuanced Access Restrictions**|Allows for nuanced access restrictions.|In a financial institution, it's used to enforce specific access restrictions for different departments. For instance, the finance team might have additional access rights to sensitive financial data, while other departments have restricted access.|


## Use Case

### Background

The `ManageReports` privilege grants the `Sales Manager` role access to the `Reporting` dataclass, with the exception of the delete permission:

<img alt="explorer" src={require('./img/IncludePrivilege1.png').default} style={{borderRadius: '6px'}} />

However, the addition of the `ManageFinancials` privilege introduces specialized restrictions for anyone outside the financial department, including access to `netProfitMargin` and `totalExpenses` attributes and deletion permissions within the `Reporting` dataclass:

<img alt="explorer" src={require('./img/IncludePrivilege2.png').default} style={{borderRadius: '6px'}} />

### Intra-Privilege Relationships

In a `Financial Manager` role, two privileges exist: `ManageReports` for reviewing and creating reports, and `ManageFinancials` for deleting reports or accessing sensitive data. 

In this case, the `ManageFinancials` privilege operates within the constraints set by the `ManageReports` privilege, adding supplementary permissions, ensuring nuanced control over data access.

Given the structured inheritance of permissions, an efficient approach consolidates these into a singular privilege. By including `ManageReports` within `ManageFinancials`, a unified privilege is formed, providing the `Financial Manager` with streamlined permissions. 

### Including Privileges

To include the `ManageReports` privilege within the scope of `ManageFinancials`:

1. Start by selecting the `ManageFinancials` privilege
2. In the interface, you'll encounter a list of tags representing previously created privileges. 
3. Include the `ManageReports` privilege into `ManageFinancials` by clicking the <img alt="explorer" src={require('./img/includePrivilege.png').default} style={{borderRadius: '6px', width:'3%'}} /> button, with removal just a click away using the  <img alt="explorer" src={require('./img/excludePrivilege.png').default} style={{borderRadius: '6px', width:'3%'}} /> button.

<img alt="explorer" src={require('./img/IncludePrivilege3.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::info


When a privilege is included within another:

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
            <li>Its name appears below the initial privilege that included it.</li>
        </ul>
    </Column.Item>
    <Column.Item width="30%">
		<img alt="explorer" src={require('./img/listedPrivilege.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
            <li>The privilege is highlighted in the tags.</li>
        </ul>
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/privilegeHighlighted.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<ul>
    <li>The <img alt="explorer" src={require('./img/inherit.png').default} style={{borderRadius: '6px', width:'2%'}} /> icon indicates that permissions are inherited.</li>
</ul>

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
            <li>Hovering over the <img alt="explorer" src={require('./img/i.png').default} style={{borderRadius: '6px', width:'3%'}} /> icon reveals the privilege from which they are inherited.</li>
        </ul>
    </Column.Item>
    <Column.Item width="30%">
		<img alt="explorer" src={require('./img/inherited_hoverModal.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>
:::

Upon successful inclusion, the `ManageFinancials` privilege inherits permissions from its counterpart, the `ManageReports` privilege, while retaining the delete permission exclusive to the `ManageFinancials` privilege.




