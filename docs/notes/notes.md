---
id: release-notes
title: Release Notes
---


## 1.0.0

### New features

#### Studio

- Support [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) attribute in `Image component`.
- Allow users to undo the changes to a property.
- Hide `Turn into shared` button while editing the name of a local CSS class.
- Prevent users to override tailwind css classes.
- Display the columns of the datatable as errored if they bound to invalid datasources.
- Add icons to contextual menu.
- Switch between supported editors using tab contextual menu.

![https://static.4d-ps.com/assets/1.0.0-rc.26/tabs.png](https://static.4d-ps.com/assets/1.0.0-rc.26/tabs.png)

- Using modals for creating an item (webform, dataclass or a method).
- Made the webforms editor contextual panel More responsive.
- Added the shortcut `alt + shift + Delete` to remove a component.
- Execute the method from the toolbar directly.
- Truncate the datasource in the props panel if it is too long.
- Support duration format using `Simple`, `Distance`, `Distance With Suffix`, `Strict Distance` and `Strict Distance With Suffix`.
- Disable the preview button when the catalog, shared datasources and shared CSS classes are not loaded.
- Show the debugger tab as loading when a method is running in the background.
- Limit number of displayed items in selectbox to `15 items`.
- Enhance `Model Editor` UI and accessibility.
- Drop `%` unit in borders to be more consistent with [CSS spefication](https://www.w3.org/TR/CSS2/box.html#border-width-properties)
- Update the content of the editor after switching to its tab.
- Display the error in `Sanity check` if a function is not defined anymore.

#### Server

- New collection.multiSort function.
- Global modification stamp to help implementing data synchronization modules. New functions: ds.getGlobalStamp and ds.setGlobalStamp.
- Support for initializing the variable's value and data type in the declaration line.
- Support for variadic parameters declaration


### Fixes

#### Studio

- Fix an issue where calling a function that returns a new entity is not working after calling it twice.
- Fix webform editor crashing issue.
- Fix an issue where we are not able to remove a datasource.
- Fixed the issue where data is not loaded in `datatable` sometimes.
- Fix false negatives in sanity check.
- Fix the issue where the margins on the list of events are not correct.
- Fix the issue where the rendering of 4 columns in the matrix fails using a resolution `< 1920 * 1080` but also when the resolution shifts to `1920 * 1080`.
- Fixed the issue where the touched flag doesn't persist on properties panel.
- [**debugger**] Fix: take indentation into consideration when displaying exceptions.
- Fix an issue where the webform editor crashes when reading methods from unexisting dataclass.
- Fixed an issue where creating a user class overrides the ORDA Data model class having the same name
- Fixed the issue where the datasource field on function event params removes characters as we type.
- Fixed the issue where the datatable column width unity changes from `%` to `px`.
- Fixed the issue where the margin and padding inputs are not working as expected.
- Fixed the issue where the datatable expands infinitely.
- Fixed the issue where when we change the position of the label to top or bottom change the entire component to the center.
- Fixed the issue where the `text input` component crashes when the type is `date` but the datasource is of type `string`.
- Fixed an issue in CSV import where the `import` button was not correctly displayed.
- Fixed the selectbox issue: when we change the height, the stylebox inside does not inherit the height changes.
- Fixed the code preview issue: It displays a blank page when we try to open preview while no function was selected in context menu.
- Fixed the issue where the contextual menu not hidden after clicking on preview.
- Fixed the issue where the webform is displayed as touched once we open it.
- Fixed the copy standard action with deep links.
- Fixed `datatable` issue: Impossible to center the header.
- Fixed a line offset bug in the `debugger`.
- Fixed an issue related to null value in dates.
