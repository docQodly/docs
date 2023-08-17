---
id: model-editor-interface
title: Model Editor Interface
---
The Data Model Editor allows you to define the Model
( database structure) for your application.

A model is a description of how data will be accessed and stored into
structures called "datastore classes." In each datastore class, you
create attributes that store, calculate data, or refer to data in other
datastore classes (relation attributes). As well as functions to
interact with the data in your model.

To open your project\'s active model you double click on  ![alt-text](img/model-icon.png) in your project's sidebar menu.

The Data Model Editor is made up of the following areas:

-   Workspace
-   Toolbar
-   Miniature Overview Area
-   Datastore Classes Area
-   Properties Area (coming soon)

### Workspace

In the workspace is where you create a datastore model for your Qodly
project. A datastore model is made up of one or more datastore classes
containing attributes, you can also create relation attributes , which
are links between datastore classes.

Below is an example datastore model for a simple structure of employees
and companies:

\*\*screenshot of the datastore classes\*\*

You can identify the currently selected datastore class by its
highlighted border in the workspace. In our example, the Company
datastore class is selected.

You can move a datastore class in the Workspace by a select and drag
action.

### Toolbar

The toolbar bordering the top of your workspace contains 3 actions:

**On the left side:**

-   Fit view : By clicking on the ![alt-text](img/fitview-icon.png) icon you will get a fitted view of your entire datastore classes Model in the Workspace area.

-   ![alt-text](img/fitview-icon.png) reload model :

**On the right side:**

-   Zoom feature ![alt-text](img/zoom-feature.png) : Controls the percentage of zoom in your workspace area, press either the + (Plus sign) or - (Minus sign) to make the Data model in your workspace larger or smaller.

### Miniature Overview Area 

The Miniature Area allows you to view an overview of your model at a
smaller scale. This feature is especially useful when you have a large
number of datastore classes and you want to quickly visualize them.

![alt-text](img/miniature-overview-area.png)

### 

### Datastore Classes Area

All the datastore classes in your datastore model are listed in this
area:

![alt-text](img/datastore-classes-area.png)

You can select the datastore class in the workspace by clicking on it in
the list.

From this area, you can execute any of the following actions for a
specific datastore class:

-   ![alt-text](img/fitview-icon.png) fit to view : to show a fitted view of the selected datastore class in your workspace area.

-   ![alt-text](img/importfromcvs-icon.png) import from CSV : Allows you to import data from a CSV file.

-   You can delete the datastore class completely by clicking on the ![alt-text](img/deletedatastoreclass-icon.png) icon.

### Properties Area

The model properties area is coming soon.

#### Datastore Class Properties Area 

For a datastore class, the Properties area contains **Panel color**,
**Primary key**, **Class** **name** and **Section name**, **Scope**,
**Page size**, a **Records definitely deleted** and **Include in log
file** check cases and an area **Comment** for writing comments.

#### Attribute Properties Area 

For an attribute, the properties available differ depending on the
attribute type (test this theory).

#### Datastore Class Functions Properties Area 

The Properties tab is available for datastore class functions.
