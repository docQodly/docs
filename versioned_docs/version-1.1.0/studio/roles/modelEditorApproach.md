---
id: modelEditorApproach
title: Model Editor Approach
---

import Column from '@site/src/components/Column'   

In the **Model Editor**, link privileges to permissions for Datastore, DataClass, Attribute, and Function ressources. Adding permissions is done by clicking on the <img src={require('./img/ModelEditor_addPermission.png').default} style={{borderRadius: '6px', width:'2%'}} /> button in the dropdown list. Conversely, to remove an affected privilege, click on the <img src={require('./img/ModelEditor_removePermission.png').default} style={{borderRadius: '6px', width:'2%'}} /> button next to the privilege.

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
            <li>If a privilege is both purple-tagged and accompanied by the <img src={require('./img/includedTag.png').default} style={{borderRadius: '6px', width:'5%'}} /> icon, it indicates the <a href="includingPrivileges">inclusion of an extra privilege</a>.<br/></li>
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


## Datastore Permissions

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        To configure Datastore permissions (e.g., Create, Read, Update, Delete and Execute), click on the <strong>Model</strong> for a streamlined dropdown selection to allocate desired privileges.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/ModelEditor_datastorePermissions.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


## DataClass Permissions

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        To configure Dataclass permissions (e.g., Create, Read, Update, Delete and Execute), click on a <strong>Dataclass</strong> for a streamlined dropdown selection to allocate desired privileges.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/ModelEditor_dataclassPermissions.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


## Attribute Permissions

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        To configure Attribute permissions (e.g., Create, Read, Update and Delete), click on an <strong>Attribute within a Dataclass</strong> for a streamlined dropdown selection to allocate desired privileges.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/ModelEditor_attributePermissions.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


## Function Permissions

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        To configure Function permissions (e.g., Execute and Promote), click on a <strong>Function within a Dataclass</strong> for a streamlined dropdown selection to allocate desired privileges.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/ModelEditor_functionPermissions.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>