---
id: propertiesPanel
title: 'Properties Panel'
hide_title: true
---
import Column from '@site/src/components/Column'

<br />

# <span style={{color:'#B174E5'}}>The Power of the Properties Panel: Unleashing Customization and Data Access</span>

<br />

The <span style={{color:'#B174E5',fontWeight: 'bold'}}>Properties panel</span> is an incredibly powerful tool that can be used to modify numerous aspects of a component. Some of the key features that can be accessed through this panel include:

<br />

<Column.List align="center" justifyContent="between">
	<Column.Item width="70%">
        <span style={{color:'#B174E5',fontWeight: 'bold'}}>&#9312; &nbsp; CSS</span>: The CSS class contains styles that are applied to the component, encompassing font sizes, colors, and layout styles, which influence its appearance and layout. You can refer to the <a href="/qodlyHeroHandbook/qodlyStudio/webforms/styleLibrary/intro">Style Library</a> for more information and available style options.
        <br />
        <br />
        <span style={{color:'#B174E5',fontWeight: 'bold'}}>&#9313; &nbsp; Color scheme</span>: The color scheme feature permits the customization of the component's color scheme, encompassing background colors, text colors, and border colors. This functionality provides flexibility in adapting the component's visual aesthetics to match the desired design.
        <br />
        <br />
        <span style={{color:'#B174E5',fontWeight: 'bold'}}>&#9314; &nbsp; Background image</span>: With the background image feature, you have the ability to assign a background image to the component. This capability enhances the visual appeal of the component and facilitates conveying a specific theme or mood effectively.
        <br />
        <br />
        <span style={{color:'#B174E5',fontWeight: 'bold'}}>&#9315; &nbsp; Dimensions</span>: The dimensions feature enables you to define the width, height, and other size-related properties of the component. By utilizing this feature, you can ensure that the component fits seamlessly within the layout of the webpage.
        <br />
        <br />
        <span style={{color:'#B174E5',fontWeight: 'bold'}}>&#9316; &nbsp; Layout</span>: The layout feature empowers you to specify the position of the component within the page, align it with other elements, and define its behavior when the page is resized. This functionality provides control over the overall structure and arrangement of the component.
        <br />
        <br />
        <span style={{color:'#B174E5',fontWeight: 'bold'}}>&#9317; &nbsp; Appearance</span>: The appearance attribute encompasses the component's position (relative, absolute, etc.), overflow behavior, and display style (block, flex, etc.). By adjusting these attributes, you can effectively control how the component is presented and interacted with on the webpage.
        <br />
        <br />
        <span style={{color:'#B174E5',fontWeight: 'bold'}}>&#9318; &nbsp; Font</span>: The font feature allows you to choose the font type, size, alignment, and style for the component's text. This versatility enables you to achieve the desired visual look and feel for the component's textual content.
        <br />
        <br />
        <span style={{color:'#B174E5',fontWeight: 'bold'}}>&#9319; &nbsp; Borders</span>: With the borders feature, you can define borders around the component, specifying attributes such as thickness, color, and style. This capability adds visual distinction and emphasis to the component, enhancing its overall appearance.
        <br />
        <br />
        <span style={{color:'#B174E5',fontWeight: 'bold'}}>&#9320; &nbsp; Border radius</span>: The border radius feature enables you to determine the curvature or roundness of the component's corners. By adjusting this attribute, you can create various shapes and styles, adding aesthetic appeal to the component's design.
	</Column.Item>
	<Column.Item width="20%">
        <img alt="explorer" src={require('./img/propertiesPanel.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br />
<br />

In essence, the <span style={{color:'#B174E5',fontWeight: 'bold'}}>Properties panel</span> is the heart of the component, offering us the ability to customize it to suit our preferences and create a visually appealing and unique web application. And now, it has just received a major upgrade with the introduction of the <span style={{color:'#B174E5',fontWeight: 'bold'}}>Data Access</span> properties. This feature is available in all components, except for the <span style={{color:'#B174E5',fontWeight: 'bold'}}>WebForm</span>, and it's a complete game-changer. With <span style={{color:'#B174E5',fontWeight: 'bold'}}>Data Access</span>, developers can access and manipulate the component's properties directly from the server, giving them complete control over the component's behavior.

<br />


<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        The <span style={{color:'#B174E5',fontWeight: 'bold'}}>Data Access</span> properties contains a <code>Server Side</code> field, which displays a reference to the component on the server side. This reference is like the component's address, allowing developers to access the component from anywhere in the application. These properties can be used to dynamically change the content of the website without any manual intervention, making it truly interactive by responding to user actions in real-time.
	</Column.Item>
	<Column.Item width="30%">
        <img alt="explorer" src={require('./img/serverSide.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br />
<br />

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        The <span style={{color:'#B174E5',fontWeight: 'bold'}}>Data Access</span> properties contains other options/fields as well, depending on the component at hand. For instance: <br />
        - The <code>DataSource</code> field allows developers to define the source of data for the component to iterate on.<br />
        - While the <code>Selected Element</code> field allows them to specify which element in the component is selected. <br />
        - The <code>Iterate field</code> is available for developers to loop through that same set of data.	</Column.Item>
	<Column.Item width="30%">
        <img alt="explorer" src={require('./img/dataAccessProperties.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>



