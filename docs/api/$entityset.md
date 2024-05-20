---
id: $entityset
title: $entityset 
---


## Functionality


### Definition

The `$entityset` endpoint enables you to manage and manipulate entity sets in your data collection. After creating an entity set using the `$method=entityset` parameter, you can perform various operations on these entity sets to retrieve, compare, and combine them as needed.


### Syntaxes

| Syntax | Example | Description |
|--------|---------|-------------|
| [**$entityset/{entitySetID}**](#retrieving-an-existing-entity-set) | `/People/$entityset/0ANUMBER` | Retrieves an existing entity set |
| [**$entityset/{entitySetID}?$operator...&$otherCollection**](#creating-a-new-entity-set-from-existing-ones) | `/Employee/$entityset/0ANUMBER?$logicOperator=AND&$otherCollection=C0ANUMBER` | Creates a new entity set by comparing existing entity sets |



## Retrieving an Existing Entity Set

### Definition

You can retrieve an existing entity set by its ID. This allows you to execute operations on a previously defined entity set. Entity sets have a time limit, either by default or as specified using the `$timeout` parameter. You can also save filter and order by statements with `$savedfilter` and `$savedorderby` when creating an entity set.

### Syntax

```
GET {{ApiEndpoint}}/rest/{{dataClass}}/$entityset/{{entitySetID}}
```

### Parameters

- `dataClass`: The name of the dataclass containing the entity set.
- `entitySetID`: The unique ID of the entity set.

### Operations

When you retrieve an existing entity set, you can apply any of the following operations to it:

- `$expand`: Expand related entities.
- `$filter`: Apply filter criteria.
- `$orderby`: Order the results.
- `$skip`: Skip a specified number of entities.
- `$top`/`$limit`: Limit the number of entities returned.

### Example

After creating an entity set, you retrieve it as follows:

```
GET /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7
```

## Creating a New Entity Set from Existing Ones

### Definition

You can create a new entity set by comparing two existing entity sets using logical operators. The logical operators define the relationship between the two sets, such as intersection, union, and difference.

### Syntax

```
GET {{ApiEndpoint}}/rest/{{dataClass}}/$entityset/{{entitySetID}}?$logicOperator={{operator}}&$otherCollection={{otherEntitySetID}}&$method=entityset
```

### Parameters

- `dataClass`: The name of the dataclass containing the entity sets.
- `entitySetID`: The unique ID of the first entity set.
- `$logicOperator`: The logical operator to apply (AND, OR, EXCEPT, INTERSECT).
- `$otherCollection`: The unique ID of the second entity set.

### Logical Operators

| Operator   | Description |
|------------|-------------|
| AND        | Returns the entities common to both entity sets |
| OR         | Returns the entities in either entity set |
| EXCEPT     | Returns the entities in the first entity set minus those in the second |
| INTERSECT  | Returns true if there is an intersection, otherwise false |

:::info
Logical operators are not case-sensitive (e.g., "AND" or "and").
:::


### Example

#### Using AND to Return Common Entities

```
GET /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=AND&$otherCollection=C05A0D887C664D4DA1B38366DD21629B
```

#### Using INTERSECT to Check for Intersection

```
GET /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=INTERSECT&$otherCollection=C05A0D887C664D4DA1B38366DD21629B
```

:::info
If there is an intersection, this query returns `true`. Otherwise, it returns `false`.
:::

#### Using OR to Combine Entity Sets

```
GET /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=OR&$otherCollection=C05A0D887C664D4DA1B38366DD21629B&$method=entityset
```

This query creates a new entity set that combines all the entities from both entity sets.

## Best Practices

- **Manage Time Limits:** Be aware of the time limits on entity sets and use `$timeout` to specify your limits if needed.

- **Save Filters and Orderings:** Use `$savedfilter` and `$savedorderby` to save filter and order by statements for future use.

- **Efficient Comparisons:** Use logical operators to efficiently compare and combine entity sets.

