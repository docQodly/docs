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

### Integration the 'ReleaseNotes' Component

1. Import the 'ReleaseNotes' component at the very beginning of your Markdown (md) file:

```
import ReleaseNotes from '@site/src/components/ReleaseNotes';
```

2. Add the root element `<ReleaseNotes.Items>` for a list of release note items:

```
<ReleaseNotes.Items>
</ReleaseNotes.Items>
```

3. Inside the `<ReleaseNotes.Items>` element, Add as much as you need of `<ReleaseNotes.Item>` elements to represents specific versions:

```
<ReleaseNotes.Items>
    <ReleaseNotes.Item>
    </ReleaseNotes.Item>

    <ReleaseNotes.Item>
    </ReleaseNotes.Item>
</ReleaseNotes.Items>
```

4. Inside each `<ReleaseNotes.Item>` element, Add a `<ReleaseNotes.Timeline>` element to create a timeline for the release notes:

```
<ReleaseNotes.Items>
    <ReleaseNotes.Item>
        <ReleaseNotes.Timeline>
        </ReleaseNotes.Timeline>
    </ReleaseNotes.Item>

    <ReleaseNotes.Item>
        <ReleaseNotes.Timeline>
        </ReleaseNotes.Timeline>
    </ReleaseNotes.Item>
</ReleaseNotes.Items>
```

5. Inside each `<ReleaseNotes.Timeline>` element, Add a `<ReleaseNotes.Meta>` element to hold the metadata related to a release, such as the version number within the `<ReleaseNotes.Version>` element or the release date within the `<ReleaseNotes.ReleaseDate>` element:

```
<ReleaseNotes.Items>
    <ReleaseNotes.Item>
        <ReleaseNotes.Timeline>
            <ReleaseNotes.Meta>
                <ReleaseNotes.Version>v1.0.1</ReleaseNotes.Version>
            </ReleaseNotes.Meta>
        </ReleaseNotes.Timeline>
    </ReleaseNotes.Item>

    <ReleaseNotes.Item>
        <ReleaseNotes.Timeline>
            <ReleaseNotes.Meta>
                <ReleaseNotes.Version>v1.0.0</ReleaseNotes.Version>
                <ReleaseNotes.ReleaseDate>September 2023</ReleaseNotes.ReleaseDate>
            </ReleaseNotes.Meta>
        </ReleaseNotes.Timeline>
    </ReleaseNotes.Item>
</ReleaseNotes.Items>
```

6. Inside each `<ReleaseNotes.Timeline>` element, Add a `<ReleaseNotes.Connector>` to create a visual separation between release notes:

```
<ReleaseNotes.Items>
    <ReleaseNotes.Item>
        <ReleaseNotes.Timeline>
            <ReleaseNotes.Meta>
                <ReleaseNotes.Version>v1.0.1</ReleaseNotes.Version>
            </ReleaseNotes.Meta>
            <ReleaseNotes.Connector />
        </ReleaseNotes.Timeline>
    </ReleaseNotes.Item>

    <ReleaseNotes.Item>
        <ReleaseNotes.Timeline>
            <ReleaseNotes.Meta>
                <ReleaseNotes.Version>v1.0.0</ReleaseNotes.Version>
                <ReleaseNotes.ReleaseDate>September 2023</ReleaseNotes.ReleaseDate>
            </ReleaseNotes.Meta>
            <ReleaseNotes.Connector />
        </ReleaseNotes.Timeline>
    </ReleaseNotes.Item>
</ReleaseNotes.Items>
```

7. Inside each `<ReleaseNotes.Item>` element, Add a `<ReleaseNotes.Content>` for the actual content of the release notes for a specific version. In this case, it should be structured as a series of tabs.

```
<ReleaseNotes.Items>
    <ReleaseNotes.Item>
        <ReleaseNotes.Timeline>
            <ReleaseNotes.Meta>
                <ReleaseNotes.Version>v1.0.1</ReleaseNotes.Version>
            </ReleaseNotes.Meta>
            <ReleaseNotes.Connector />
        </ReleaseNotes.Timeline>
        <ReleaseNotes.Content>
            <Tabs groupId="version" className="qodly-tabs">
                <TabItem value="Studio">
                    <h3> What's New </h3>
                    <ul>
                        <li>Feature 1.</li>
                        <li>Feature 2.</li>
                    </ul>
                    <h3> Improvements </h3>
                    <ul>
                        <li>Improvement 1.</li>
                        <li>Improvement 2.</li>
                    </ul>
                    <h3> Bug Fixes </h3>
                    <ul>
                        <li>Bug Fix 1.</li>
                        <li>Bug Fix 2.</li>
                    </ul>
                </TabItem>
                <TabItem value="Server">
                    Status Quo Maintained 
                </TabItem>
                <TabItem value="Cloud">
                    Status Quo Maintained 
                </TabItem>
            </Tabs>
        </ReleaseNotes.Content>
    </ReleaseNotes.Item>
    <ReleaseNotes.Item>
        <ReleaseNotes.Timeline>
            <ReleaseNotes.Meta>
                <ReleaseNotes.Version>v1.0.0</ReleaseNotes.Version>
                <ReleaseNotes.ReleaseDate>September 2023</ReleaseNotes.ReleaseDate>
            </ReleaseNotes.Meta>
            <ReleaseNotes.Connector />
        </ReleaseNotes.Timeline>
        <ReleaseNotes.Content>
            <Tabs groupId="version" className="qodly-tabs">
                <TabItem value="Studio">
                    Status Quo Maintained 
                </TabItem>
                <TabItem value="Server">
                    Status Quo Maintained 
                </TabItem>
                <TabItem value="Cloud">
                    Status Quo Maintained 
                </TabItem>
            </Tabs> 
        </ReleaseNotes.Content>
    </ReleaseNotes.Item>
</ReleaseNotes.Items>
```
<img width="529" alt="Screenshot 2023-10-17 at 17 28 36" src="https://github.com/docQodly/docs/assets/39849568/a86823a0-866e-4bc1-9a53-707d6b54fb3a">

### Integration the 'ComingSoon' Component

#### For Blank Pages
If you have a blank page and wish to showcase a "Coming Soon" message with an animation, please follow these steps:

1. Import the 'ComingSoon' component at the very beginning of your Markdown (md) file.
2. Immediately after the import statement, insert `<ComingSoon/>`.

```
import ComingSoon from '@site/src/components/ComingSoon'

<ComingSoon/>
```

#### For Sections on Pages with Existing Content
If you have a page with pre-existing content and would like to include the "Coming Soon" message within a specific section that has not yet been developed, here's what to do:

1. Import the 'ComingSoon' component at the very beginning of your Markdown (md) file:

```
import ComingSoon from '@site/src/components/ComingSoon'
```

2. In the section that has not yet been crafted, place <ComingSoon/> right after its title:

```
## Section Finished
Some content

## Section Not Crafted Yet
<ComingSoon/>
```


### Integrating the 'Column' Component

To use the `Column` component, you'll need to define both a `List` component and an `Item` component. Here's how it works:

1. Import the `Column` component at the very beginning of your Markdown (md) file:

```
import ComingSoon from '@site/src/components/Column'
```

2. Define a `<Column.List>`: This list component holds together the individual items.

3. Add `<Column.Item>` components within the `<Column.List>`: These components represent individual items within the list. You can specify the width for each item, allowing you to customize your layout.

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


