---
id: tabs
title: Tabs
---
import Column from '@site/src/components/Column'


The **Tabs** component is a versatile UI element designed to organize components within a tabs system, providing an intuitive way to navigate through different sections of your webform.


:::info 

Each tab within the Tabs component includes an embedded Stylebox, fostering organized content structuring and alignment. 

:::


## Use Cases

The Tabs component proves invaluable across a range of scenarios where content organization and easy navigation are paramount:

- **Multifunctional Interfaces**: Implement the Tabs component in applications with diverse features or sections, such as dashboards. Users can quickly switch between different aspects of the application while enjoying a clear visual separation.

- **Form Navigation**: Integrate tabs within lengthy forms or multi-step processes. Users can navigate through different sections of the form seamlessly, focusing on relevant data input without feeling overwhelmed.

- **Content Categorization**: Apply the Tabs component to categorize and display content, such as articles or product listings. This enables users to access specific categories with minimal effort, enhancing content discoverability.


## Properties Customization

Enhance the Tabs component to align with your application's requirements using the following customization options:

- **Variant Selection**: Choose the variant that aligns with your design:
    
    - <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
            <li><span style={{fontWeight: 'bold'}}>Line Variant</span>: Select the "Line" variant for tabs with an underlined styling effect.</li>
            <br/>
            <li><span style={{fontWeight: 'bold'}}>Enclosed Variant</span>: Opt for the "Enclosed" variant to showcase tabs with a bordered presentation. This choice adds an additional layer of style to your tabs.</li>
        </Column.Item>
        <Column.Item width="35%">
            <img alt="explorer" src={require('./img/tabs_VariantSelection.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

- **Adding Tabs**: Incorporate new tabs with ease using the intuitive tab management system:

    - **Using the Plus Button**: Add new tabs effortlessly by clicking the `+` button within the Tabs component. Each tab can be individually configured, allowing you to fine-tune attributes such as:

        - <Column.List align="center" justifyContent="between">
            <Column.Item width="60%">
                <li><span style={{fontWeight: 'bold'}}>Title Customization</span>: Modify tab titles to precisely reflect the content or functionality associated with each tab.</li>
                <br/>
                <li><span style={{fontWeight: 'bold'}}>Tab Duplication</span>: Duplicate existing tabs to replicate configurations quickly by clicking on the <img alt="explorer" src={require('./img/duplicate.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon.</li>
                <br/>
                <li><span style={{fontWeight: 'bold'}}>Tab Removal</span>: Delete tabs that no longer serve a purpose by clicking on the <img alt="explorer" src={require('./img/delete.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon.</li>
                <br/>
                <li><span style={{fontWeight: 'bold'}}>Moving Tab</span>: Arrange tabs to your preferred position by clicking on the <img alt="explorer" src={require('./img/arrange.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon</li>
            </Column.Item>
            <Column.Item width="35%">
                <img alt="explorer" src={require('./img/tabs_PlusButtonAddition.png').default} style={{borderRadius: '6px'}} />
            </Column.Item>
        </Column.List>

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
            <span style={{fontWeight: 'bold'}}>Direct Canvas Addition</span>: Directly add new tabs onto the canvas using the <code>+</code> icon.
        </Column.Item>
        <Column.Item width="35%">
            <img alt="explorer" src={require('./img/tab_CanvasAddition.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>


## Data Binding

When it comes to data-binding, it's important to note that the **Tabs** component itself is not inherently data-bound. Unlike components like the **DataTable** that derive their content from specified datasources, the **Tabs** component primarily focuses on organizing and presenting content through clickable tabs.

## Showcase

Although the **Tabs** component isn't inherently data-bound, you can still create dynamic, data-driven experiences by embedding components within each tab's Stylebox. Here's a glimpse of how the **Tabs** component will look and behave in action:

<img alt="explorer" src={require('./img/tabs_Preview.gif').default} style={{borderRadius: '6px'}} />


## Triggers and Events

The **Tabs** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On DblClick| Calls for an action when the user double-clicks on the component. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component. |
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component. |