---
id: craftedComponents
title: Crafted components
---
import Column from '@site/src/components/Column'

**Crafted components** allow you to create reusable components by encapsulating existing components along with their styles, child components, event configurations, and datasource references. 

:::info 
Crafted components enable you to transform any component, except the Webform component, into a reusable unit. 
:::



## Crafting a Component 

Suppose you're striving for uniform design elements across your website, ensuring compatibility with both light and dark modes. To accomplish this:

- **Element Selection**: Choose the component on the canvas that you wish to transform into a crafted component.
- **Save as Craft**: In the Tooltip menu, select the ellipsis icon <img alt="explorer" src={require('./img/craftedComponent_SaveAsCraft.png').default} style={{borderRadius: '6px', height: '20%', width: '20%'}} /> and click `Save as craft`.

- <Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <li><span style={{fontWeight: 'bold'}}>Name and Icon</span>: Name your crafted component and search for the desired icon in the predefined list using the search bar.</li><br/><br/>
        <li><span style={{fontWeight: 'bold'}}>Add</span>: Click the <code>Add</code> button to complete the process.</li><br/>
    </Column.Item>
    <Column.Item width="35%">
        <img alt="explorer" src={require('./img/craftedComponent_nameIcon.png').default} style={{borderRadius: '6px', height: '70%', width: '70%'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        Once completed, your crafted component will be available in the <code>Components > Crafted</code> section. You can then drag and drop it onto the canvas as needed.
    </Column.Item>
    <Column.Item width="34%">
        <img alt="explorer" src={require('./img/craftedComponent_CraftedSection.png').default} style={{borderRadius: '6px', height: '70%', width: '70%'}} />
    </Column.Item>
</Column.List>

## CSS Class Behavior

### Local CSS Classes

When a component is styled with a **local** CSS class, such as `styled_checkBox` for the **checkBox** component, and you save it as a crafted component for subsequent reuse in another webform, two scenarios emerge:

- **First Scenario**: If the target webform lacks a **local** CSS class matching the one in the crafted component, the crafted component's CSS class will be added as a **local** CSS class within the target webform.

- **Second Scenario**: In the case where the target webform already has a **local** CSS class of the same name, incorporating the crafted component will not override the existing **local** CSS class. Instead, the crafted component will use the **local** CSS class from the target webform. Should you delete the **local** CSS class in the target webform and subsequently attempt to re-add the crafted component, you will observe the addition of the **local** CSS class, accompanied by the appropriate styles.


Here's a glimpse of how it will look and behave in action:

<img alt="explorer" src={require('./img/craftedComponent_localCSSclass.gif').default} style={{borderRadius: '6px', height: '70%', width: '70%'}} />


### Shared CSS Classes

When a component is styled with a **shared** CSS class and you save it as a crafted component for subsequent reuse in another webform, the shared CSS class is maintained across all webforms.



## Datasource Reference

Crafted components come with references to datasources, however, the actual datasources themselves are not bundled. This leads to two distinct scenarios:

### Shared Datasources

When a **shared datasource** is used within a crafted component, it retains its connection across webforms. This ensures that the **shared datasource** remains linked, regardless of the webform in which the crafted component is employed.


### Webform Datasources

With **webform datasources**, caution is needed. **Webform Datasources** linked to the crafted component from the originating webform will not be automatically imported into the target Webform where you aim to implement it. To ensure the intended functionality, you must manually establish these datasource connections in the target webform or employ the shared datasources.



## Event Configuration


<Column.List align="center" justifyContent="between">
    <Column.Item width="35%">
        The event configuration of a crafted component remains intact upon placement onto the canvas. If the crafted component holds specific event configurations from its original webform, these configurations persist when you position the crafted component on a new canvas. <br/><br/><br/>
        However, it's important to note that while the event configuration is preserved, adjustments might be necessary to ensure alignment with the context of the new webform. 
    </Column.Item>
    <Column.Item width="55%">
        <img alt="explorer" src={require('./img/craftedComponent_Event.gif').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>



Potential adjustments could include:

- **Event Targets**: Ensure that the events are targeting the correct elements in the new webform.

- **Event Actions**: Verify that the actions triggered by events are appropriate for the new context. For example, an action that shows a specific message might need to be updated to display a different message relevant to the new webform.

- **Event Conditions**: Check if any conditions tied to events still hold true in the new webform. 