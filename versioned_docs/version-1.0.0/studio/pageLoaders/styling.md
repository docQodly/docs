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
          <li><strong>Local</strong>: These CSS classes are specific to the Pages in which they are created and do not have an icon next to them.</li>
          <li><strong>Theme</strong>: Predefined CSS classes designed for standard themes, which can be applied across all Pages in your application. You can recognize them by this icon <img alt="styles-library" src={require('./img/theme.png').default} style={{borderRadius: '6px', width: '5%'}} />.</li>
          <li><strong>Shared</strong>: CSS classes that are shareable and can be used across all Pages within your application. These are identifiable by this unique icon <img alt="styles-library" src={require('./img/shared.png').default} style={{borderRadius: '6px', width: '5%'}} />.</li>
        </ul>
	</Column.Item>
	<Column.Item width="40%">
    <img alt="styles-library" src={require('./img/styles-library.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

## CSS Classes Management

### Adding a CSS Class

To add a CSS class, click the <img alt="styles-library" src={require('./img/addCssClass.png').default} style={{borderRadius: '6px', width: '3%'}} /> button, give it a name, and then choose the appropriate type:

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <ul>
          <li>For a <strong>local CSS class</strong>: Leave the "Create as Shared" option unchecked. <br/></li>
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

- Both **Local** and **Shared** CSS class codes can be modified in the [Contextual panel](../pageLoaders/pageLoaderOverview.md#contextual-panel) at the interface's bottom.

  <img alt="styles-library" src={require('./img/editCSSClassCode.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::info
The changes will affect all the components utilizing this CSS class.
:::


<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    - <strong>Theme</strong> classes, however, are non-editable, they can only be viewed by clicking on the <img alt="styles-library" src={require('./img/view.png').default} style={{borderRadius: '6px', width: '5%'}} /> button next to their name in the Styles Library.
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

An unused CSS class refers to any local class that is defined but not utilized in any section of the Page. 

Click on the `Delete Unused Elements` button <img alt="styles-library" src={require('./img/delete-unused_css.png').default} style={{borderRadius: '6px', width: '30%'}} /> located in the Styles Library's header to cleanse your Page of unnecessary CSS classes.


### Converting a Local CSS Class to Shared

Inside the Contextual panel, you'll find a field with the class name <img alt="styles-library" src={require('./img/shared-stylesheet.png').default} style={{borderRadius: '6px', width: '35%'}} /> and a share button <img alt="styles-library" src={require('./img/share.png').default} style={{borderRadius: '6px', width: '3%'}} /> next to it. Click on it to transform a local CSS class into a shared one.

### Tracking CSS Classes Usage

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    The <strong>Inspect</strong> option allows you to see where your CSS classes are used within your Pages. 
	</Column.Item>
	<Column.Item width="40%">
    <img src={require('./img/inspect-button2.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="35%">
    Toggle the option by clicking the button, then hover over a CSS class to highlight its location in your Page.
	</Column.Item>
	<Column.Item width="60%">
		<img src={require('./img/cssinspect.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


## Working with CSS 

### Using CSS Classes

After selecting a component, you can adjust its properties using the properties panel. This involves style properties, and there is a clear distinction between component properties and styling.


Associating a CSS class with a component can be accomplished in two ways:

- Drag and drop a CSS class onto your component from the `Styles Library`.

- Using the Properties panel, link a CSS class to the component through the `CSS` section under the `Style` category. This can be done either by 

<img src={require('./img/usingCSSClasses.png').default} style={{borderRadius: '6px'}} />

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

- Subsequently assigning a **shared** CSS class to the same component, featuring a different background color, will override the initial value set by the **theme** CSS class.

- A **local** CSS class takes precedence, prioritizing its styles over those of the **shared** class, thereby overriding the initial value set by the **shared** CSS class.

- Modifying this value with another background color from the **properties panel** will lead to the **theme**, **local** and **shared** CSS classes being overridden.

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

## CSS Cascading in Page Loaders

When components like a button in a Page loader and another in the main Page share the same local CSS class name, unexpected style mergers can occur. This is a result of CSS cascading, where styles from the parent Page combine with those of nested elements, causing design inconsistencies.

```html
<div class="fd-canvas fd-canvas--airy overflow-auto bg-white">
  <button class="fd-component fd-button localCssClass"></button>
  
  <div class="fd-stylebox fd-component relative p-2">
    <div class="fd-canvas bg-white">
      <button class="fd-component fd-button localCssClass"></button>
    </div>
  </div>
</div>
```

:::tip
To prevent such issues, it's important to use unique class names, particularly in Pages with layered structures.
:::

This issue is also prevalent in more complex Page arrangements, such as dialogs within Page loaders, where CSS cascading can lead to similarly unexpected styling challenges.



<!--

## CSS Class Behavior and Cascading in Pages

In Pages, particularly those with Page loaders, understanding how CSS classes behave is crucial. Even when elements like buttons are nested within multiple layers, the naming of CSS classes plays a significant role. If a button in a Page loader and one in the main Page share the same local class name, , CSS cascading can lead to unexpected style mergers, the css styles for the nested element are merged from both the parent Page css class ad its own. This is a common challenge in web design, where styles defined in a parent element or component can inadvertently affect child elements or components, especially when they share class names.


```html
<div class="fd-canvas fd-canvas--airy overflow-auto bg-white">
  <button class="fd-component fd-button navButton localCssClass"></button>
  
  <div class="fd-stylebox fd-component relative p-2">
    <div class="fd-canvas bg-white">
      <button class="fd-component fd-button localCssClass"></button>
    </div>
  </div>
</div>
```

:::tip
It's important to be mindful of CSS class naming, especially when the same class names are used across different levels in a Page.
:::

the same issue could happen in Pages with complex structures, including dialog elements loaded within Page loader within a parent Page, CSS cascading can lead to unexpected style mergers. 


<!--- 
### Scoped CSS Classes in Deep Elements

When a button is deeply nested within a Page, it have a unique, scoped class name, like `cayesbngcmkfgmndlxvaxoinvdmh`. This scoping ensures that styles from parent local CSS classes that have the same name as the local css class of the button, do not unintentionally affect this button, even if they share the same class name.

```html
<div class="fd-canvas fd-canvas--airy overflow-auto bg-white">
  <button class="fd-component fd-button navButton"></button>
  
  <div class="cayesbngcmkfgmndlxvaxoinvdmh fd-stylebox fd-component relative p-2">
    <div class="fd-canvas bg-white">
      <button class="fd-component fd-button"></button>
    </div>
  </div>
</div>


<div class="cayesbngcmkfgmndlxvaxoinvdmh fd-stylebox fd-component relative p-2">
  // Nested elements and button code here 
</div>
```

:::tip
Scoped CSS classes provide a way to isolate styles, preventing unwanted inheritance from parent elements.
:::


### Cascading Effect with Dialog Elements

Unlike the scoped button, dialog elements displayed in a Page loader in the parent Page might not be scoped. Consequently, the CSS cascading effect can cause unintended style mergers:

```html
<div class="fd-canvas fd-canvas--airy overflow-auto bg-white">
  // Nested elements here 
</div>
<div id="dialogs-root">
  // Dialog elements and code here 
</div>
```

In cases where the main and sub Pages both declare a CSS/style class as a local class, and the sub Page in the Page loader has a dialog then the cascading effect may result in a merger of styles from both classes. This can lead to inconsistent or undesired styling.

:::tip Solution Suggestion
Be mindful of class naming and scoping, especially in complex nested structures like dialogs in Pages.
:::

--->

## See also

If you're not familiar with CSS properties and styles, or you need a refresher, here are a few useful links and tools:

* Learn CSS on the [MDN website](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
* A guide to [flexbox properties](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) on css-tricks.com
* [Box-shadow examples](https://getcssscan.com/css-box-shadow-examples), [box-shadow generator](https://cssgenerator.org/box-shadow-css-generator.html)