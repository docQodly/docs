# qodly documentation

Welcome to the Qodly documentation site.

## Start

Two processes should run at the same time:

* The preprocess
* The docusaurus start

#### The Preprocess

run `npm run start_watch` in one terminal.
The files from the folder "docs" will be preprocessed in the folder named "docsPostProcessed". A change to a file will be automatically preprocessed.

#### Docusaurus Start

The `docusaurus.config_start.js` uses `docusaurus.config.js` with a few modifications:

* path: "docsPostProcessed/docs"
* versions: only the current version is used

`npm run start -- --config ./docusaurus.config_start.js` in a new terminal to start the preview with this new config.

## Added features


### Integration the 'ComingSoon' Component

#### For Blank Pages
If you have a blank page and wish to showcase a "Coming Soon" message with an animation, please follow these steps:

* Import the 'ComingSoon' component at the very beginning of your Markdown (md) file. Immediately after the import statement, insert `<ComingSoon/>`.

```
import ComingSoon from '@site/src/components/ComingSoon'

<ComingSoon/>
```

#### For Sections on Pages with Existing Content
If you have a page with pre-existing content and would like to include the "Coming Soon" message within a specific section that has not yet been developed, here's what to do:

* Import the 'ComingSoon' component at the very beginning of your Markdown (md) file:

```
import ComingSoon from '@site/src/components/ComingSoon'
```

* In the section that has not yet been crafted, place <ComingSoon/> right after its title:

```
## Section Finished
Some content

## Section Not Crafted Yet
<ComingSoon/>
```


### Integrating the 'Column' Component

To use the `Column` component, you'll need to define both a `List` component and an `Item` component. Here's how it works:

* Import the `Column` component at the very beginning of your Markdown (md) file:

```
import ComingSoon from '@site/src/components/Column'
```

* To implement it, follow these steps: 

1- Define a `<Column.List>`: This list component holds together the individual items.

2- Add `<Column.Item>` components within the `<Column.List>`: These components represent individual items within the list. You can specify the width for each item, allowing you to customize your layout.

Here's an example:

```
<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        Once completed, your crafted component will be available in the <code>Components > Crafted</code> section. You can then drag and drop it onto the canvas as needed.
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/craftedComponent_CraftedSection.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>
```

In this example, the `<Column.List>` component is configured with `align="center"` and `justifyContent="between"`, resulting in the following behavior:

- Vertical Alignment: Items are vertically aligned in the center of the container.
- Horizontal Distribution: Items are evenly distributed horizontally with space between them.


#### `align` Property: 
The `align` property controls the vertical alignment of items within the container. Here are the available options:

* `align="start"`: Items are aligned to the start vertically within the container.

* `align="center"`: Items are vertically centered within the container.

* `align="end"`: Items are aligned to the end vertically within the container.


#### `justifyContent` Property: 
The `justifyContent` property determines how items are distributed horizontally within the container. Here are the available options:

* `justifyContent="start"`: Items are aligned to the start of the container, and there is no extra space between them.

* `justifyContent="center"`: Items are centered vertically within the container, and there is equal space before and after them.

* `justifyContent="end"`: Items are aligned to the end of the container, and there is no extra space between them.

* `justifyContent="between"`: Items are evenly distributed within the container with equal space between them and at the start and end.

* `justifyContent="around"`: Items are evenly distributed within the container with equal space around them (half the space at the start and end compared to between items).

* `justifyContent="evenly"`: Items are evenly distributed within the container with equal space between them, before the first item, and after the last item.


#### Exploring Specific Combinations

* justifyContent="start" and align="start": 
    Items are aligned to the start both horizontally and vertically within the container.

* justifyContent="center" and align="center": 
    Items are centered both horizontally and vertically within the container.

* justifyContent="between" and align="end":
    Items are evenly distributed horizontally with space between them.
    Items are aligned to the end vertically within the container.

* justifyContent="around" and align="center":
    Items are evenly distributed horizontally with space around them.
    Items are vertically centered within the container.


