---
id: styling
title: Styles Library
---
import Column from '@site/src/components/Column'

After placing a component on the Canvas, you have the freedom to tailor its appearance using a variety of styling tools.

## Overview 

The Styles Library provides a powerful way to style your components. You can do this by simply dragging CSS classes from the Styles Library and dropping them onto the components.

The Styles Library provides three distinct types of CSS classes: 

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <ul>
          <li><strong>Local</strong>: These CSS classes are specific to the Webforms in which they are created and do not have an icon next to them.</li>
          <li><strong>Theme</strong>: Predefined CSS classes designed for standard themes, which can be applied across all Webforms in your application. You can recognize them by this icon <img alt="styles-library" src={require('./img/theme.png').default} style={{borderRadius: '6px', width: '5%'}} />.</li>
          <li><strong>Shared</strong>: CSS classes that are shareable and can be used across all Webforms within your application. These are identifiable by this unique icon <img alt="styles-library" src={require('./img/shared.png').default} style={{borderRadius: '6px', width: '5%'}} />.</li>
        </ul>
	</Column.Item>
	<Column.Item width="40%">
    <img alt="styles-library" src={require('./img/styles-library.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

## Managing CSS Classes 

### Adding a CSS Class

To add a CSS class, click the <img alt="styles-library" src={require('./img/addCssClass.png').default} style={{borderRadius: '6px', width: '3%'}} /> button, give it a name, and then choose the appropriate type:

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <ul>
          <li>For a <strong>local CSS class</strong>: Leave the "Create as Shared" option unchecked. </li> <br/>
          <li>For a <strong>shared CSS class</strong>: Check the "Create as Shared" option.</li>
        </ul>
	</Column.Item>
	<Column.Item width="40%">
    <img alt="styles-library" src={require('./img/createCssClass.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::info
<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    An alternative method to establish a new CSS class is through the properties panel, within the Style category. You can input your desired name, for example "newCssClass", into the CSS field. <br/>
    If this name doesn't correspond to any existing CSS classes, you will be prompted with the option to create a new one.
	</Column.Item>
	<Column.Item width="40%">
    <img alt="styles-library" src={require('./img/createCssClass2.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>
:::

### Editing a CSS Class

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
    To edit a CSS class code, click the edit button <img alt="styles-library" src={require('./img/edit.png').default} style={{borderRadius: '6px', width: '4%'}} /> within the Styles Library next to the class's name. This action will open it in the contextual panel.
	</Column.Item>
	<Column.Item width="30%">
    <img alt="styles-library" src={require('./img/editClass.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- Both **Local** and **Shared** CSS class codes can be modified in the [Contextual panel](../design-webforms/create-webform#contextual-panel) at the interface's bottom.

  <img alt="styles-library" src={require('./img/editCSSClassCode.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::info
The changes will affect all the components utilizing this CSS class.
:::


- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    <strong>Theme</strong> classes, however, are non-editable, they can only be viewed by clicking on the <img alt="styles-library" src={require('./img/view.png').default} style={{borderRadius: '6px', width: '5%'}} /> button next to their name in the Styles Library.
	</Column.Item>
	<Column.Item width="40%">
    <img alt="styles-library" src={require('./img/cannotEditThemeCSSClassCode.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


:::info
<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    An alternative approach to edit a CSS class is to navigate to the Style category, where you can check which CSS classes affect your component and access them using the edit button <img alt="styles-library" src={require('./img/edit2.png').default} style={{borderRadius: '6px', width: '4%'}} />.
	</Column.Item>
	<Column.Item width="40%">
    <img alt="styles-library" src={require('./img/editCSSClassCode2.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>
:::

### Renaming a CSS Class

Inside the Contextual panel, you'll find a field with the class name <img alt="styles-library" src={require('./img/classNameField.png').default} style={{borderRadius: '6px', width: '35%'}} /> and an edit button <img alt="styles-library" src={require('./img/rename.png').default} style={{borderRadius: '6px', width: '3%'}} /> next to it. Click on it to rename the class.

:::info
Theme CSS classes cannot be renamed.
:::

### Deleting a CSS Class 

To remove a CSS class, click the delete button <img alt="styles-library" src={require('./img/delete.png').default} style={{borderRadius: '6px', width: '2%'}} /> next to its name in the Styles Library.

:::info
Theme CSS classes cannot be deleted.
:::

### Removing Unused CSS Classes

An unused CSS class is a local class that is declared but never called from any part of the webform. Click on the **Delete Unused Elements** button in the header of the CSS Classes area to remove all the useless local CSS declaration code from your webform:<br/><img alt="styles-library" src={require('./img/delete-unused.png').default} style={{borderRadius: '6px', width: '20%'}} /><br/>. 


### Converting a Local CSS Class to Shared

Inside the Contextual panel, you'll find a field with the class name <img alt="styles-library" src={require('./img/shared-stylesheet.png').default} style={{borderRadius: '6px', width: '35%'}} /> and a share button <img alt="styles-library" src={require('./img/share.png').default} style={{borderRadius: '6px', width: '3%'}} /> next to it. Click on it to transform a local CSS class into a shared one.

### Tracking CSS Classes Usage

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    The <strong>Inspect</strong> option allows you to see where your CSS classes are used within your webforms. 
	</Column.Item>
	<Column.Item width="40%">
    <img alt="explorer" src={require('./img/inspect-button2.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="35%">
    Toggle the option by clicking the button, then hover over a CSS class to highlight its location in your webform.
	</Column.Item>
	<Column.Item width="60%">
		<img alt="explorer" src={require('./img/cssinspect.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


## Working with CSS 

### Using CSS Classes

After selecting a component, you can adjust its properties using the properties panel. This involves style properties, and there is a clear distinction between component properties and styling.


Associating a CSS class with a component can be accomplished in two ways:

- Drag and drop a CSS class onto your component from the `Styles Library`.

- Using the Properties panel, link a CSS class to the component through the `CSS` section under the `Style` category. This can be done either by 

<img alt="explorer" src={require('./img/usingCSSClasses.png').default} style={{borderRadius: '6px'}} />

The provided example demonstrates applying a CSS class named `ratingStars` to the embedded element `Slider Container` of the `Range Input` component. This modification transforms the standard slider into a star rating slider, suitable for rating activities or services. The corresponding code for this CSS class is shown below:

<div class="longCode-block">

```css

self::before {
  content: "\2606 \2606 \2606 \2606 \2606"; /* Unicode representation of empty star */
  color: #ccc; 
}
/* Fill the stars based on the 'aria-valuenow' attribute */
self:has( [data-cy="cypress_slider_thumb"][aria-valuenow="1"] )::before{
  content: "\2605 \2606 \2606 \2606 \2606"; 
  color: #6d5dfc;
}

self:has( [data-cy="cypress_slider_thumb"][aria-valuenow="2"] )::before{
  content: "\2605 \2605 \2606 \2606 \2606"; 
  color: #6d5dfc;
}

self:has( [data-cy="cypress_slider_thumb"][aria-valuenow="3"] )::before{
  content: "\2605 \2605 \2605 \2606 \2606"; 
  color: #6d5dfc;
}

self:has( [data-cy="cypress_slider_thumb"][aria-valuenow="4"] )::before{
  content: "\2605 \2605 \2605 \2605 \2606"; 
  color: #6d5dfc;
}

self:has( [data-cy="cypress_slider_thumb"][aria-valuenow="5"] )::before{
  content: "\2605 \2605 \2605 \2605 \2605"; 
  color: #6d5dfc;
}

self [data-cy="cypress_slider"]{
	position: absolute !important;
	width: inherit;
	opacity: 0;
}
```
</div>

<br/>

:::info
The size of the stars is determined by the value specified in the `Font` category.
:::

### Exporting Styles as CSS Class

To reuse the style of a component, you can export it as a CSS class by following these steps:


<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <ol>
          <li>Select a component on the canvas, triggering the appearance of the tooltip. </li> 
          <li>Click the CSS icon <img alt="styles-library" src={require('./img/css.png').default} style={{borderRadius: '6px', width: '5%'}} /> within the tooltip and provide a name for the new CSS class.</li>
          <li>If you wish to export a shared CSS class, enable the <code>Create as Shared</code> option.</li>
          <li>Click the <code>Export</code> button.</li>
        </ol>
	</Column.Item>
	<Column.Item width="40%">
    <img alt="styles-library" src={require('./img/exportingStyles.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::info
This process exports only styles defined in the properties panel and not those from any other assigned CSS class. 
:::

Exporting styles instantly assigns the new CSS class to the component, removing the styles from the properties panel that are now defined in the assigned CSS class.

### CSS Class Naming Priority

When assigning both a shared and a local CSS class with the same name:

- The component is assigned both the local and shared CSS classes, regardless of the selection.

- However, the shared CSS class takes precedence, and its styles are prioritized over those of the local class.

- Consequently, if styles in the local CSS class are defined but not present in the shared class, they are still applied to the component.

:::info
<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    When both css classes are assigned, the icon of the CSS class changes to symbolize that it is both local and shared. You can choose which one to edit from the dropdown list.
	</Column.Item>
	<Column.Item width="40%">
    <img alt="styles-library" src={require('./img/shared&local.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>
:::

Qodly Studio permits the use of the same name for both a local and shared CSS class. 

:::info However
<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    It does not allow the creation of CSS classes that resemble the name of a theme CSS class. More details can be found at <a href="https://tailwind.build/classes">Tailwind CSS</a>.
	</Column.Item>
	<Column.Item width="30%">
    <img alt="styles-library" src={require('./img/tailwindCSS.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::

### Overriding Style Properties

A priority-based scenario determines which styles take precedence over others:

- When assigning the **theme** CSS class `bg-red-500` to a component, the `background` property displays `rgb(239,68,68)`. 

- Subsequently assigning a **local** CSS class to the same component, featuring a different background color, will override the initial value set by the **theme** CSS class.

- A **shared** CSS class takes precedence, prioritizing its styles over those of the **local** class, thereby overriding the initial value set by the **local** CSS class.

- Modifying this value with another background color from the **properties panel** will lead to the **theme**, **local** and **shared** CSS classes being overridden.

## Customizing DataTable Styles

The [DataTable component](components/datatable.md) styles can be customized by leveraging specific CSS classes that target various elements of the table:

![data-table](img/datatable-schema.jpg)

### CSS Table Classes

The following specific CSS classes are supported:

|Area|Class name|Applies to|
|---|---|----|
|Header|.header|The entire header|
||.header-cell|All cells in the header|
||.header-even|Header of even columns|
||.header-datasourceName (*)|The header of the corresponding datasource|
|Row|.row|All rows|
||.selected|The selected row|
||.row-even|All even rows|
||.hover|The hovered row|
|Cell|.cell|All cells|
|Column|.col-datasourceName (*)|The column of the corresponding datasource|
||.col-even|Even columns|
||.sorted|Sorted colums|
||.sorted-asc|Ascending sorted columns|
||.sorted-desc|Descending sorted columns|

(*) Example: .header-lastname, .header-employer-name (use a - instead of . for relations)

### Examples

The following CSS definitions enable the design of custom DataTable components.

#### Example 1 - Blue Headers

![blue-headers](img/BlueHeaders.png)

<div class="longCode-block">

```css
self {
  border-radius: 10px;
  box-shadow: 0 0 40px 0 rgb(0 0 0 / 15%);
}

self .header .header-cell {
  background-color: #6c7ae0;
  color: #fff;
  font-weight: bold;
  padding: 1.25rem 2rem;
}

self .row {
  align-items: center;
}

self .row .cell {
  padding: 0.5rem 2rem;
}

self .row .cell > span {
  justify-content: flex-start;
}

self .row.selected {
  background-color: #d2d7f5;
}

self .row-even:not(.selected):not(:hover) {
  background-color: #f8f6ff;
}

self .header .resizable > :not([hidden]) ~ :not([hidden]),
self .row > :not([hidden]) ~ :not([hidden]),
self .Grid .innerScrollContainer,
self .Grid .innerScrollContainer > :not([hidden]) ~ :not([hidden]) {
  border-width: 0;
}

```
</div>


#### Example 2 - Green Headers

![green-headers](img/GreenHeaders.png)

<div class="longCode-block">

```css
self .header .header-cell {
  background-color: #324960;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

self .header .header-even {
  background-color: #4fc3a1;
}

self .row {
  align-items: center;
}

self .row .cell {
  font-size: 14px;
  text-align: center;
}

self .row .cell > span {
  justify-content: center;
}

self .row.selected {
  background-color: #caede2;
}

self .row-even:not(.selected):not(:hover) {
  background-color: #f8f8f8;
}

self .header .resizable > :not([hidden]) ~ :not([hidden]),
self .row > :not([hidden]) ~ :not([hidden]),
self .Grid .innerScrollContainer,
self .Grid .innerScrollContainer > :not([hidden]) ~ :not([hidden]) {
  border-width: 0;
}
```
</div>

#### Example 3 - Dark Mode DataTable

This example assumes that the DataTable contains a column associated with a `lastname` datasource.

![dark-mode-datatable](img/Dark-mode.png)

<div class="longCode-block">

```css
self {
 background-color: rgb(61, 54, 61);
}

self .row {
  align-items: center;
}

self .header {
 font-weight: bold;
}

self .header .header-cell {
 background-color: transparent;
 border-top: none;
 border-bottom: none !important;
 color: #fff;
 font-size: 11px;
 text-transform: uppercase;
 letter-spacing: .2rem;
}

self .row {
 background-color: rgba(0, 0, 0, 0.1);
 color: #777;
 transition: 0.3s all ease;
}

self .row:hover {
 background-color: rgba(0, 0, 0, 0.1);
 color: white;
}

self .row:hover .col-lastname {
 color: #b474e4;
 font-weight: bold;
 font-size: 18px;
 text-transform: uppercase;
}

self .row.row-even {
 background-color: unset;
}

self .row .cell > span {
  justify-content: flex-start;
}

self .header,
self .header .resizable > :not([hidden]) ~ :not([hidden]),
self .row > :not([hidden]) ~ :not([hidden]),
self .Grid .innerScrollContainer,
self .Grid .innerScrollContainer > :not([hidden]) ~ :not([hidden]) {
  border-width: 0;
}
``` 
</div>

<br/>

:::info
These style examples are the same as those applied to the DataTables found in the [templates](./templates.md) categorized under `DataTables`.
:::

## Progress Bar

### Displaying the Progress Bar

The Progress Bar is triggered when the front end anticipates at least one REST request response. This visual element is crafted to signify active server-side processes, offering a clear indication, particularly during the execution of REST queries.

### Tailoring the Progress Bar

Customizing the appearance of the progress bar is facilitated through the following methods:

- Creating a shared CSS class named `qodly-progress`:

  ```css
  self {
    background-color: blue;
    height: 20px;
  }
  ```

- Creating a custom named CSS class and targeting the div element with the class `qodly-progress`:

  ```css
  div.qodly-progress {
    background-color: blue;
    height: 20px;
  }
  ```
  
## See also

If you're not familiar with CSS properties and styles, or you need a refresher, here are a few useful links and tools:

* Learn CSS on the [MDN website](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
* A guide to [flexbox properties](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) on css-tricks.com
* [Box-shadow examples](https://getcssscan.com/css-box-shadow-examples), [box-shadow generator](https://cssgenerator.org/box-shadow-css-generator.html)