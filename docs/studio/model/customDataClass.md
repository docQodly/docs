---
id: customDataClass
title: Virtual Data Classes (VDCs)
---


## VDCs Overview

Virtual Data Classes (VDCs) in Qodly offer a unique approach to data representation and management, distinct from traditional data classes. VDCs combine the flexibility and dynamic interaction capabilities of standard data classes with specialized data sourcing and manipulation methods, making them ideal for handling data not stored directly in the database but imported from various sources like local files or external APIs.


## VDCs Architectural Advantages 

- **Data Representation and Management**: Ideal for managing non-database data, adaptable to diverse sources.

- **Data Explorer Compatibility**: Viewable and manageable in the `Data Explorer`, similar to standard Dataclasses.

- **Model Integration**: Appear in the `Model` with read-only constraints, preventing the addition of new attributes or the deletion or renaming of the dataclass.

- **Dynamic Interaction Capabilities**: Dynamic data interactions akin to those of standard Dataclasses.

- **Efficiency**: Optimizes data manipulation, reducing repetitive coding.

- **Fallback Logic**: Provides fallback mechanisms for unimplemented functions.


## VDCs Architecture Behavior

⚠️ To Be Added ⚠️

## VDCs Controller

Controllers in VDCs are pivotal in facilitating interaction between the user and the VDC. These controllers dictate how data is processed, manipulated, and presented, incorporating multiple control mechanisms and fallback logic for efficient data handling.

:::info
If certain functions are not implemented, the engine attempts to replace them by calling other less optimized functions. 
:::


### Extends CustomDataClass

Each VDC controller extends the CustomDataClass, inheriting essential properties and methods for custom data manipulation from the `CustomDataClass`.


### Naming Convention

Controllers follow a naming convention where each is named after its corresponding VDC, suffixed with `Controller`, e.g., `DocController`.


### Storage

In Virtual Data Classes (VDCs), each custom data class, custom entity, and custom entity selection incorporates a storage object, which is referenced by `__storage`. It provides a structured and reliable way to track and manage various properties and states.


For example, `sel.__storage` refers to the storage object associated with a specific custom entity selection named `sel`.

:::tip
The storage object is used across various functions within the VDC controllers. It allows for a consistent and structured approach to manage entity-specific data and states, such as file references, modified values, and other relevant information. 
:::



## VDCs Controller Core Functions

Controllers contain key functions crucial for initializing the VDC structure, handling entities, their attributes, and enabling selections and queries.

### Function Naming and Usage

Each function in a VDC controller is identified by a specific, predefined name, aligning with its intended functionality. This naming convention is vital for the function's recognition and execution within Qodly.

```qs
function newEntity(controlObj : object) : variant
```

Here, `newEntity` represents the specific action or operation the function is intended to perform. The `controlObj` is an object passed as a parameter, containing properties relevant to the function's operation. 

:::info
Each function receives an object `controlObj` as a parameter. The attributes of `controlObj` vary depending on the function.
:::

The function may return a value (`variant`), which can vary based on the function's purpose and the control object's properties.

:::warning
It is crucial to adhere strictly to the predefined function names within VDC controllers. Deviating from these conventions (e.g., changing the function name) can lead to non-execution of the function, as Qodly relies on these specific names for identifying and invoking the correct operations.
:::



<!---------------------- describe -------------------->
### `describe` Function

#### Purpose

Defines the structure and attributes of the Virtual Data Class (VDC).

#### Input

The `describe` function receives an empty `controlObj` object as its input. 

:::info
In contrast to other functions, `describe` is the only one where the `controlObj` is typically empty.
:::


#### Output

The output of the `describe` function is an object defining the attributes and structure of the VDC:

| Attribute    | Type    | Description                                                                                              |
|--------------|---------|----------------------------------------------------------------------------------------------------------|
| dataclassDef | object  | An object containing the definitions of the VDC's attributes, visibility, and key attribute information. |


:::info Detailed Output Structure:

| **Key**       | **Type**    | **Description**                                                                                                  |
|---------------|-------------|------------------------------------------------------------------------------------------------------------------|
| `exposed`     | bool        | Indicates if the class is visible via REST API or not.                                                           |
| `key`         | string      | Name of the primary key attribute.                                                                               |
| `attributes`  | object      | Contains definitions of each attribute of the Dataclass. Each attribute is an object with its own properties.    |
| → `type`      | string      | Data type of the attribute (e.g., "string", "number", "date", etc.).                                             |
| → `exposed`   | bool        | Determines if the attribute is exposed via REST API.                                                             |
| → `readOnly`  | bool        | Indicates if the attribute is read-only.                                                                         |
| → `kind`      | string      | Type of the attribute, e.g., "storage", "relatedEntity", "relatedEntities" (default is "storage").                |

:::



<!---------------------- allEntities -------------------->
### `allEntities` Function

#### Purpose

To retrieve all entities from the Virtual Data Class.

#### Input

The `allEntities` function receives the `controlObj` object as its input. It provides the necessary context for fetching all entities.

| `controlObj` Attributes | Type    | Description                                        |
|-------------------------|---------|-----------------------------------------------------|
| dataClass               | object  | Reference to the DataClass associated with the VDC. |
| selection               | object  | The current entity collection or selection context. |

#### Output

| Attribute    | Type        | Description                                        |
|--------------|-------------|----------------------------------------------------|
| entityList   | variant  | A collection of all entities present in the VDC.   |


:::tip
The `allEntities` function is triggered through direct code execution with `ds.Doc.all()`, or through API calls that aim to retrieve all entities.
:::


:::info Illustrative example
See the section titled [Retrieving All Documents (allEntities Function)](#retrieving-all-documents-allentities-function).
:::



<!---------------------- getSelectionLength -------------------->
### `getSelectionLength` Function

#### Purpose

To calculate the total number of entities currently selected in the Virtual Data Class.

#### Input

The `getSelectionLength` function receives the `controlObj` object as its input. It provides context about the current selection within the Virtual Data Class.

| `controlObj` Attributes | Type    | Description                                        |
|-------------------------|---------|----------------------------------------------------|
| dataClass               | object  | Reference to the DataClass linked to the VDC.      |
| selection               | object  | The entity collection representing the current selection context. |

#### Output

| Output      | Type     | Description                                      |
|-------------|----------|--------------------------------------------------|
| selectionLength   | integer  | The total number of entities in the current selection. |



:::tip
The `getSelectionLength` function is triggered through direct code execution with `.length()`, or through API calls that aim to determine the current selection's size.
:::


:::info Illustrative example
See the section titled [Determining Selection Length (getSelectionLength Function)](#determining-selection-length-getselectionlength-function).
:::



<!---------------------- loadEntity -------------------->
### `loadEntity` Function

#### Purpose

To load a specific entity into the current selection context within the Virtual Data Class.

#### Input

The `loadEntity` function receives the `controlObj` object as its input. It provides essential information about the entity to be loaded into the selection.

| `controlObj` Attributes | Type    | Description                                        |
|-------------------------|---------|-----------------------------------------------------------------|
| dataClass               | object  | Reference to the DataClass associated with the VDC.             |
| entity                  | object  | The entity object that is to be loaded into the selection.      |
| selection               | object  | The entity collection representing the current selection context. |
| position                | integer | The position index at which the entity is to be loaded.         |


#### Output

| Attribute    | Type    | Description                                              |
|--------------|---------|----------------------------------------------------------|
| loadedEntity | variant | The entity that has been successfully loaded into the current selection. |



:::tip
The `loadEntity` function is triggered through direct code execution with commands that load entities, such as `.first()`, or through API calls that aim to load an entity.
:::


:::info Illustrative example
See the section titled [Loading a Specific Entity (loadEntity Function)](#loading-a-specific-entity-loadentity-function).
:::



<!---------------------- getEntityByKey -------------------->
### `getEntityByKey` Function

#### Purpose

To retrieve a specific entity from the Virtual Data Class using a unique identifier or key.

#### Input

The `getEntityByKey` function receives the `controlObj` object as its input. It provides the context and the identifier necessary to locate the desired entity.

| `controlObj` Attributes | Type    | Description                                        |
|-------------------------|---------|----------------------------------------------------|
| dataClass               | object  | Reference to the DataClass associated with the VDC.|
| entity                  | object  | The current context entity in the VDC.             |
| key                     | variant | The unique identifier used to find the entity.     |

#### Output

| Output      | Type    | Description                                              |
|-------------|---------|----------------------------------------------------------|
| foundEntity | variant | The entity that matches the provided key.                |

:::info
If the entity corresponding to the provided key cannot be found or loaded, the function must return `false`.
:::


:::tip
The `getEntityByKey` function is triggered during the execution of `.get()` with a specified parameter or through an HTTP request targeting a particular entity.
:::


:::info Illustrative example
See the section titled [Retrieving a Document by Key (getEntityByKey Function)](#retrieving-a-document-by-key-getentitybykey-function).
:::



<!---------------------- getAttributeValue -------------------->
### `getAttributeValue` Function

#### Purpose

To retrieve the value of a specific attribute from an entity in the Virtual Data Class.

#### Input

The `getAttributeValue` function receives the `controlObj` object as its input. It provides context and details for retrieving the attribute value.

| `controlObj` Attributes | Type    | Description                                        |
|-------------------------|---------|------------------------------------------------|
| dataClass               | object  | Reference to the DataClass of the Virtual Data Class. |
| entity                  | object  | The specific entity instance from which the attribute's value is to be retrieved. |
| attributeName           | string  | The name of the attribute for which the value is requested. |
| onlyLightValue          | boolean | A flag indicating if only a simplified or 'light' version of the attribute value is required. |

#### Output

| Output         | Type     | Description |
|----------------|----------|--------------------------------------------------|
| attributeValue   |  variant  | The retrieved value of the specified attribute. |


:::tip
The `getAttributeValue` function is triggered through direct code execution like `entity.attributeName` where attributeName is the specific attribute being accessed, or through API calls designed to retrieve the value of an entity's attribute.
:::


:::info Illustrative example
See the section titled [Getting an Attribute Value (getAttributeValue Function)](#getting-an-attribute-value-getattributevalue-function).
:::



<!---------------------- setAttributeValue -------------------->
### `setAttributeValue` Function

#### Purpose

To update or modify the value of a specific attribute for an entity within the Virtual Data Class.

#### Input

The `setAttributeValue` function receives the `controlObj` object as its input. It provides the necessary context and details for updating the attribute value.

| `controlObj` Attributes | Type    | Description                                        |
|-------------------------|---------|-------------------------------------------------|
| dataClass               | object  | Reference to the DataClass of the Virtual Data Class. |
| entity                  | object  | The specific entity instance whose attribute is to be updated. |
| attributeName           | string  | The name of the attribute to be updated.        |
| allowReadOnly           | boolean | Indicates whether read-only attributes can be updated. |
| value                   | variant | The new value to be set for the specified attribute. |


#### Output

| Output | Type    | Description                                        |
|--------|---------|----------------------------------------------------|
| updatedEntity | variant | The entity with the updated attribute value. |


:::tip
The `setAttributeValue` function is triggered through direct code execution, such as `entity.attributeName = newValue`, or through API calls that aim to update an entity's attribute.
:::


:::info Illustrative example
See the section titled [Updating an Attribute Value (setAttributeValue Function)](#updating-an-attribute-value-setattributevalue-function).
:::



<!---------------------- newEntity -------------------->
### `newEntity` Function

#### Purpose

To create a new entity within the Virtual Data Class.

#### Input

The `newEntity` function receives the `controlObj` object as its input. It provides the necessary context for creating a new entity in the VDC.

| `controlObj` Attributes | Type    | Description                                        |
|-------------------------|---------|----------------------------------------------------|
| dataClass               | object  | Reference to the DataClass associated with the VDC.|
| entity                  | object  | The entity context where the new entity will be created. |

#### Output

| Attribute    | Type    | Description                                              |
|--------------|---------|----------------------------------------------------------|
| createdEntity    | variant | The newly created entity within the Virtual Data Class.  |



:::tip
The `newEntity` function is triggered through direct code execution, such as `ds.dataClassName.new()`, or through API calls that aim to create a new entity.
:::


:::info Illustrative example
See the section titled [Creating a New Document Entity (newEntity Function)](#creating-a-new-document-entity-newentity-function).
:::



<!---------------------- saveEntity -------------------->
### `saveEntity` Function

#### Purpose

To save the current state of an entity within the Virtual Data Class.

#### Input

The `saveEntity` function receives the `controlObj` object as its input. It provides the necessary context for the save operation.

| `controlObj` Attributes | Type    | Description                                        |
|-------------------------|---------|-----------------------------------------------------------------|
| dataClass               | object  | Reference to the DataClass associated with the VDC.             |
| entity                  | object  | The entity object that has been modified and needs to be saved. |


#### Output

| Output      | Type    | Description                                              |
|-------------|---------|----------------------------------------------------------|
| savedEntity | variant | The entity after the save operation has been completed. |


:::tip
The `saveEntity` function is triggered through direct code execution, such as `entity.save()`, or through API calls that aim to save a new entity.
:::


:::info Illustrative example
See the section titled [Saving Entity Changes (saveEntity Function)](#saving-entity-changes-saveentity-function).
:::



<!---------------------- newSelection -------------------->
### `newSelection` Function

#### Purpose

To create a new selection of entities within the Virtual Data Class.

#### Input

The `newSelection` function receives the `controlObj` object as its input. It provides the context and criteria for creating the new selection.

| `controlObj` Attributes | Type    | Description                                                  |
|-------------------------|---------|--------------------------------------------------------------|
| dataClass               | object  | Reference to the DataClass of the Virtual Data Class.        |
| selection               | object  | A reference to the EntityCollection where the new selection will be stored. |


#### Output

| Output     | Type    | Description                                        |
|------------|---------|----------------------------------------------------|
| newSel  | variant  | The newly created or reset selection of entities.  |


:::tip
The `newSelection` function is triggered through direct code execution, such as `ds.dataClassName.newSelection()`, or through API calls that aim to creates a new blank entity selection, related to the dataclass.
:::


:::info Illustrative example
See the section titled [Creating a New Selection (newSelection Function)](#creating-a-new-selection-newselection-function).
:::



<!---------------------- addEntityToSelection -------------------->
### `addEntityToSelection` Function

#### Purpose

To add a specific entity to an existing selection within the Virtual Data Class.

#### Input

The `addEntityToSelection` function receives the `controlObj` object as its input. It provides the entity to be added and the selection context.

| `controlObj` Attributes | Type    | Description                                        |
|-------------------------|---------|------------------------------------------------------|
| dataClass               | object  | Reference to the DataClass associated with the VDC.  |
| entity                  | object  | The specific entity that needs to be added to the selection. |
| selection               | object  | The current selection context within the VDC.        |


#### Output

| Output           | Type    | Description                                              |
|------------------|---------|----------------------------------------------------------|
| updatedSelection | variant | The updated selection within the Virtual Data Class, including the newly added entity. |


:::tip
The `addEntityToSelection` function is triggered through direct code execution, such as `entitySelection.add(entityToBeAdded)`, or through API calls that aim to add a specified entity to the entity selection.
:::


:::info Illustrative example
See the section titled [Adding an Entity to a Selection (addEntityToSelection Function)](#adding-an-entity-to-a-selection-addentitytoselection-function).
:::



<!---------------------- queryByString -------------------->
### `queryByString` Function

#### Purpose

To execute a query within the Virtual Data Class based on a simple string query. 

#### Input

The `queryByString` function receives the `controlObj` object as its input. It provides the query string and associated parameters for the search.

| `controlObj` Attributes | Type    | Description                                                  |
|-------------------------|---------|--------------------------------------------------------------|
| dataClass               | object  | Reference to the DataClass of the Virtual Data Class.        |
| selection               | object  | Reference to the EntityCollection for storing query results. |
| queryString             | string  | The query string defining the search criteria.               |
| queryParameters         | object  | Object containing parameters referenced in the query string. |

:::info An example of the `queryString` and `queryParameters` within `controlObj`:

```json
{
  "queryString": "name == :1 and size > :2",
  "queryParameters": {
    "values": ["a@", 4]
  }
}
```

In this example, the query string checks for entities where the attribute `name` exactly matches "a@" and the attribute `size` is greater than 4. The values "a@" and 4 are provided as parameters, referred to in the query string as `:1` and `:2`, respectively.
:::

#### Output

| Output      | Type    | Description                                        |
|-------------|---------|----------------------------------------------------|
| queryResult  | variant  | Collection of entities matching the query string.  |


:::tip
The `queryByString` function is triggered through direct code execution using `.query()`, or through API calls that aim to search for entities that meet the search criteria.
:::


:::info Illustrative example
See the section titled [Querying Entities by String (queryByString Function)](#querying-entities-by-string-querybystring-function).
:::



<!---------------------- queryByCriteria -------------------->
### `queryByCriteria` Function

#### Purpose

To execute a query within the Virtual Data Class based on specific criteria.

#### Input

The `queryByCriteria` function receives the `controlObj` object as its input. It provides the necessary context and criteria for the query.

| `controlObj` Attributes | Type    | Description                                                  |
|-------------------------|---------|--------------------------------------------------------------|
| dataClass               | object  | Reference to the DataClass of the Virtual Data Class.        |
| selection               | object  | A reference to the EntityCollection where the queried entities will be stored. |
| query                   | object  | The query object containing the criteria for selection. Includes model, queryItems, and other parameters for detailed querying. |

:::info An example of the `query` object within `controlObj`:

```json
{
  "model": "Doc",
  "queryItems": [
    {"tokenType": "leftParenthesis"},
    {
      "tokenType": "simpleCompWithEm",
      "attName": "text",
      "emName": "Doc",
      "comparaison": 13,
      "instance": 0,
      "checkForNull": false,
      "value": "co@",
      "diacritical": false
    },
    {"tokenType": "rightParenthesis"}
  ]
}
```

This example `query` object indicates a specific filter condition: it looks for entities in the `Doc` data class where the attribute `text` partially matches the string "co@".
:::

#### Output

| Output     | Type    | Description                                        |
|------------|---------|----------------------------------------------------|
| collection | variant  | The collection of entities that match the query criteria.  |



:::tip
The `queryByCriteria` function is triggered when complex queries involve multiple conditions, logical operators, and special comparisons. It's ideal for detailed and programmatically constructed queries, as well as for advanced HTTP request filters that go beyond simple string-based queries.
:::


:::info Illustrative example
See the section titled [Querying Documents Based on Criteria (queryByCriteria Function)](#querying-documents-based-on-criteria-querybycriteria-function).
:::




<!---------------------- orderBy -------------------->

<!---------------------- SelectionToCollection -------------------->




## Practical Example: Sourced from Local Files

This practical example demonstrates managing a virtual data class named `Doc`, which is handled by the `DocController` class. The data for `Doc` is sourced from local files within a specified folder.


### Step 1: Define `FileAsDoc` Class

Before establishing the `DocController`, it's crucial to define the `FileAsDoc` class, representing individual files as documents (`Doc`) based on their file paths. This class is essential for encapsulating the properties and behaviors associated with each document file:

```qs
property path:string

constructor(inPath:string) {
    this.path = inPath;
}
```

### Step 2: Define `FileAsDocManager` Class

Next, the `FileAsDocManager` class provides methods for creating, validating, and managing document files. It serves as an interface for file operations related to the `Doc` virtual data class:

```qs
constructor() 
    // Initialization code for the document manager

// Method to create a new document file and return its corresponding object
function newDoc(path : string) : cs.FileAsDoc
	var f : cs.FileAsDoc
	f = objectCopy(cs.FileAsDoc.new(path), kShared)
	return f

// Method to generate a new file with a unique identifier
function newFile() : 4D.File
	var uid : string = generateUUID()
	var path : string = storage.fileDocData.path+"temp"+uid

// Validates if the provided file path is within the acceptable directory
function isPathValid(path : string) : boolean
	var basePath : string = storage.fileDocData.path+"@"
	return (path == basePath)  // if path begins with basePath
```

::info
Within the `FileAsDocManager`, methods like `newDoc` create and return new instances of the [`FileAsDoc`](#step-1-define-fileasdoc-class) class. This allows the system to interact with these instances when managing documents.
:::

### Step 3: Create Controller and Extend `CustomDataClass`

When setting up a virtual data class, you start by defining a controller that will manage it. The controller is named after the virtual data class it manages, appended with Controller.

```qs
extends CustomDataClass
```

By extending `CustomDataClass`, `DocController` inherits necessary functionalities for data management.

### Step 4: Implement `describe` Function in `DocController`

Once the controller is set up, the next step is to define its structure using the `describe` function:

```qs
function describe(settings : object) -> dataclassDef : object
	dataclassDef = {\
        attributes: {\
            path: {type: "string", exposed: true},\
            name: {type: "string", exposed: true},\
            ext: {type: "string", exposed: true},\
            text: {type: "string", exposed: true},\
			owner: {kind: "relatedEntity", type: "People", exposed: true}\
        },\
        exposed: true,\
        key: "path"\
    }
```

### Step 5: Set Up File Storage with `initFileDocs` Method

After defining the `describe` function, we include the `initFileDocs` method within the `DocController` to initialize the file storage system that the virtual data class will interact with:

```qs
function describe(settings : object) -> dataclassDef : object

	// attributes definition

	initFileDocs("/DATA/customDocs/")
```

Within `initFileDocs`, a checks is made if `storage.fileDocData` is already set; if not, it initializes it with the path to the folder where the documents are stored and the `FileAsDocManager` is instantiated and then assigned to the storage object. This allows it to be used across the entire virtual data class system where file manipulation is needed.

```qs
declare(path : string)

use (storage)
	
	if (storage.fileDocData == null)
		storage.fileDocData = newSharedObject("path", path)
	else 
		use (storage.fileDocData)
			storage.fileDocData.path = path
		end 
	end 
	
	storage.docManager = objectCopy(cs.FileAsDocManager.new(), kShared)
end 
```

:::info
The [`FileAsDocManager`](#define-fileasdocmanager-class) class is a crucial component within the `initFileDocs` method due to its role in abstracting the file handling operations for the virtual data class `Doc`.
:::



### Step 6: Use Cases - Practical Implementation

Explore practical use cases for each function in the `DocController` class. 

#### Retrieving All Documents (`allEntities` Function)

```qs
function allEntities(controlObj: object) -> entityList: variant
    // Extract the DocSelection and its storage
    var docSelection: cs.DocSelection = controlObj.selection
    var selectionStorage: object = docSelection.__storage

    // Extract fileDocData path
    var rootFolder: 4D.Folder = folder(storage.fileDocData.path)

    // Create a new collection to store file entities
    var fileCollection = newSharedCollection()
	var fileEntity : 4D.File

    // Populate the collection with files from the folder
	use (fileCollection)
		forEach (fileEntity, rootFolder.files())
			fileCollection.push(fileEntity)
		end
    end

    // Update the selection storage with the new collection
    use (selectionStorage)
        selectionStorage.files = fileCollection
    end
```

The `allEntities` retrieves all document entities within a folder designated in `storage.fileDocData.path`. It iterates over the files in the specified folder, adding each file to a collection. This collection is then updated in the selection storage, making all the files available for operations within the VDC.


#### Determining Selection Length (`getSelectionLength` Function)

```qs
function getSelectionLength(controlObj: object) -> selectionLength: integer
    // Extract the DocSelection and its storage
    var docSelection: cs.DocSelection = controlObj.selection
    var selectionStorage: object = docSelection.__storage

    // Calculate the length of the selection
    selectionLength = selectionStorage.files.length

    // Return the number of entities in the selection
    return selectionLength
```

The `getSelectionLength` function calculates the total number of entities currently selected in the VDC. It achieves this by accessing the files property of the selection storage (`selectionStorage`). The length of this files collection gives the count of selected entities.



#### Loading a Specific Entity (`loadEntity` Function)

```qs
function loadEntity(controlObj: object) -> loadedEntity: variant
    // Extract the DocSelection and its storage
    var docSelection: cs.DocSelection = controlObj.selection
    var selectionStorage: object = docSelection.__storage

    // Extract the DocEntity and its storage
    var docEntity: cs.DocEntity = controlObj.entity
    var entityStorage: object = docEntity.__storage

    // Validate the position within the selection range
    var pos: integer = controlObj.position

    var filesCollection: collection = selectionStorage.files

	if (pos >= 0 && pos < filesCollection.length)
		// Load the entity at the specified position
		use (entityStorage)
			entityStorage.fileReference = filesCollection[pos]
		end 
	else
        throw(1001, "Position out of range in selection.")
    end
```

The `loadEntity` function verifies the position is within the valid range of the `filesCollection` (the collection of all files in the selection). If valid, it assigns the file at the position to the entity's storage, making it the current loaded entity.



#### Retrieving a Document by Key (`getEntityByKey` Function)

```qs
function getEntityByKey(controlObj: object) -> foundEntity: variant
    // Extract DocEntity and its storage
    var docEntity: cs.DocEntity = controlObj.entity
	var entityStorage : object = docEntity.__storage

    // Initialize variables for file handling
    var fileHandle: 4D.File
    var filePath: string = controlObj.key
    var isFileFound: boolean = false

    // Check if the provided path is valid
    var isValidPath: boolean = storage.docManager.isPathValid(filePath)
    if (isValidPath)
        fileHandle = file(filePath)
        isFileFound = fileHandle.exists

        // Update entity's storage with the file reference if found
        if (isFileFound)
            use (entityStorage)
                entityStorage.fileReference = fileHandle
            end
        end
    end

    // Return the entity if the file is found, otherwise return null
    return isFileFound ? docEntity : null
```

The `getEntityByKey` function first validates the provided key to ensure it corresponds to a valid file path. If valid and the file exists, the function updates the entity's storage with the file reference, effectively retrieving the entity associated with the file.



#### Getting an Attribute Value (`getAttributeValue` Function)

```qs
function getAttributeValue(controlObj: object) -> attributeValue: variant
	var documentUtil: cs.DocumentEntity					
	var jsonObject: object
	var isModified: boolean = true

    // Extract the DocEntity and its storage
    var docEntity: cs.DocEntity = controlObj.entity
    var entityStorage: object = docEntity.__storage

    // Retrieve the file associated with the entity
    var fileHandle: 4D.File = entityStorage.fileReference
    var fileExtension: string = fileHandle.extension

    var attributeName: string = controlObj.attributeName

    // Check if the attribute value has been modified
    isModified = entityStorage.modifiedValues != null && entityStorage.modifiedValues[attributeName] != null

    // Determine the attribute value based on its name
	if (isModified)
		switch 
			: (attributeName == "path")
				attributeValue = substring(fileHandle.path, length(storage.fileDocData.path) + 1)
			: (attributeName == "name") || (attributeName == "ext")
				// Directly update the attribute
				attributeValue = fileHandle[attributeName] 
			: (attributeName == "pict")
				if ((fileExtension == ".jpg") || (fileExtension == ".png") || (fileExtension == ".jpeg") || (fileExtension == ".svg") || (fileExtension == ".gif"))
					documentUtil = ds.Document.new()
					documentUtil.pict = fileHandle
					attributeValue = documentUtil.pict
				end 
			: (attributeName == "obj")
				if (fileExtension == ".json")
					jsonObject = jsonParse(fileHandle.getText())
					attributeValue = jsonObject
				end 
			: (attributeName == "text")
				if (fileExtension == ".txt")
					attributeValue = fileHandle.getText()
				end 
			else 
				throw(1003, "Attribute '" + attributeName + "' is not part of a Doc entity.")
    	end 
	end
```

The `getAttributeValue` function checks if the attribute value has been modified recently and stored in the entity's storage. If not found, it derives the attribute value from the file properties, based on the attribute's nature (like file path, name, extension, or specific file content).


#### Updating an Attribute Value (`setAttributeValue` Function)

```qs
function setAttributeValue(controlObj: object) -> updatedEntity: variant
    // Extract the DocEntity and its storage
    var docEntity: cs.DocEntity = controlObj.entity
    var entityStorage: object = docEntity.__storage

    // Retrieve the file associated with the entity
    var fileHandle: 4D.File = entityStorage.fileReference

    var attributeName: string = controlObj.attributeName
	var attributeValue : variant = controlObj.value

    // Initialize modifiedValues if not already done
    if (entityStorage.modifiedValues == null)
		use (entityStorage)
			entityStorage.modifiedValues = newSharedObject()
		end 
    end
	
	use (entityStorage.modifiedValues)
		switch 
			: (attributeName == "name") || (attributeName == "ext")
				// Directly update the attribute
				entityStorage.modifiedValues[attributeName] = attributeValue

			: (attributeName == "text")
				if (entityStorage.modifiedValues.ext == ".txt")
					entityStorage.modifiedValues.text = attributeValue
				else 
					throw(1004, "Text attribute can only be set for '.txt' files.")
				end 

			: (attributeName == "obj")
				if (entityStorage.modifiedValues.ext == ".json")
					entityStorage.modifiedValues.obj = attributeValue
				else 
					throw(1005, "Obj attribute can only be set for '.json' files.")
				end 
			else 
				throw(1002, "Attribute '" + attributeName + "' is read-only or not part of the Doc entity.")
		end 
	end 
```

The `setAttributeValue` function updates the value of a specified attribute for a document entity. It first ensures a storage object for modified values exists. The function then updates this storage with the new value of the specified attribute. .



#### Creating a New Document Entity (`newEntity` Function)

```qs
function newEntity(controlObj: object) -> createdEntity: variant
    // Extract the Doc entity from the control object
    var docEntity: cs.Doc = controlObj.entity

	// Extract the storage object from the entity
	var entityStorage : object = docEntity.__storage

    // Use the storage object to manage the file reference
    use (entityStorage)
        // Create a new file using the docManager and assign its reference
        entityStorage.fileReference = storage.docManager.newFile()
    end 
```

The `newEntity` function uses the `docManager` to create a new file and then updates the entity's storage with this new file reference.


#### Saving Entity Changes (`saveEntity` Function)

```qs
⚠️ To Be Added ⚠️
```


#### Creating a New Selection (`newSelection` Function)

```qs
function newSelection(controlObj: object) -> newSel: variant
    // Extract the DocSelection and its storage
    var docSelection: cs.DocSelection = controlObj.selection
    var selectionStorage: object = docSelection.__storage

    // Create a new collection for the selection
	use (selectionStorage)
   		selectionStorage.files = newSharedCollection()
	end 
```

The `newSelection` function starts by accessing the selection context (`DocSelection`) and its associated storage. The function then creates a new collection, which is set as the current selection storage.


#### Adding an Entity to a Selection (`addEntityToSelection` Function)

```qs
function addEntityToSelection(controlObj: object) -> updatedSelection: variant
    // Extract the DocSelection and its storage
    var docSelection: cs.DocSelection = controlObj.selection
    var selectionStorage: object = docSelection.__storage

    // Extract the DocEntity and its storage
    var docEntity: cs.DocEntity = controlObj.entity
    var entityStorage: object = docEntity.__storage

	use (selectionStorage.files)
		selectionStorage.files.push(entityStorage.fileReference)
	end 
```

The `addEntityToSelection` function begins by extracting the current selection and the entity to be added, along with their respective storage objects. The function then adds the file reference of the specified entity to the selection's file collection.



#### Querying Entities by String (`queryByString` Function)

```qs

function queryByString(controlObj: object) -> queryResult: variant
    // Extract the DocSelection and its storage
    var docSelection: cs.DocSelection = controlObj.selection
    var selectionStorage: object = docSelection.__storage

    // Get the query string and parameters
    var queryString: string = controlObj.queryString
    var queryParams: object = controlObj.queryParameters

    // Initialize a collection to hold query results
    var queryResults: collection = newSharedCollection()

    // Access the root folder
	var rootFolder: 4D.Folder = folder(storage.fileDocData.path)
	var fileEntity : 4D.File

	var ext : string

	if (queryString == "images")
		
		use (queryResults)
			// Iterate through files in the folder and match against the query
			forEach (fileEntity, rootFolder.files())
				ext = fileEntity.extension
				if ((ext == ".jpg") || (ext == ".png") || (ext == ".jpeg") || (ext == ".svg") || (ext == ".gif"))
					queryResults.push(fileEntity)
				end 
			end 
		end 

		// Update the selection with the query results
		use (selectionStorage)
			selectionStorage.files = queryResults
		end
		
	else 
		return false
	end 

```

The `queryByString` function is tailored to filter and select image files from a specified directory based on their file extensions, and then update the current document selection with these files. If the query string does not specifically ask for "images", the function does not perform any action and returns false.


#### Querying Documents Based on Criteria (`queryByCriteria` Function)

```qs
⚠️ To Be Added ⚠️
```



## Practical Example: Sourced from Exteral API

⚠️ To Be Added ⚠️