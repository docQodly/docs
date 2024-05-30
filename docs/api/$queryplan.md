---
id: $queryplan
title: $queryplan 
---



## Functionality

### Definition

The `$queryplan` endpoint is designed to provide insights into the execution strategy of queries processed by the server. This endpoint helps developers and database administrators to analyze and optimize query performance by returning a detailed breakdown of the query execution plan.

:::info
For additional information, please consult the ["About queryPlan and queryPath"](../language/DataClassClass#about-queryplan-and-querypath) documentation.
:::

### Syntax

To use the `$queryplan` parameter, use the following syntax:

```
GET /rest/{{dataClass}}/?$queryplan=true
```


## Properties Returned

### General Properties

The `$queryplan` endpoint returns structured information as outlined in the following table:

| Property            | Type          | Description                                                        |
|---------------------|---------------|--------------------------------------------------------------------|
| [`__queryPlan`](#__queryplan-details)       | Object        | Simplified overview of the query execution plan.                   |
| [`__extendedQueryPlan`](#__extendedqueryplan-details) | Object      | Detailed structured representation of the query execution plan.    |
| `__DATACLASS`       | String        | Specifies the data class targeted by the query.                    |
| `__entityModel`     | String        | Specifies the entity model used in the query.                      |
| `__GlobalStamp`     | Integer       | Server-wide modification timestamp.                                |
| `__COUNT`           | Integer       | Number of entities affected by the query.                          |
| `__FIRST`           | Integer       | Index of the first entity in the query results.                    |
| [`__ENTITIES`](#__entities-details)        | Array         | Detailed data about the entities affected by the query.            |

### `__queryPlan` Details

This section simplifies the query execution paths:

| Key       | Type  | Description                                              |
|-----------|-------|----------------------------------------------------------|
| [`And`](#within-and-array)     | Array | Array of conditions combined with a logical AND operator.|

#### Within `And` Array

Details of conditions and subqueries:

| Key       | Type  | Description                                              |
|-----------|-------|----------------------------------------------------------|
| `item`    | String| Description of the query condition or join operation.    |
| `subquery`| Array | Details of any subqueries related to the condition.      |


### `__extendedQueryPlan` Details

Provides a more intricate view of the query execution strategy:


| Key           | Type   | Description                                         |
|---------------|--------|-----------------------------------------------------|
| `type`        | String | Type of node in the query plan, e.g., `LogicOperatorNode`. |
| `logicOper`   | String | Logical operator used, e.g., `And`.                 |
| [`parts`](#within-parts-array)       | Array  | Details of operations performed in the query plan.  |

#### Within `parts` Array

Complex operations within the query:

| Key           | Type   | Description                                         |
|---------------|--------|-----------------------------------------------------|
| `type`        | String | Specific type of operation, e.g., `JoinNode`.       |
| `targetTable` | String | Target table for the operation.                     |
| `joinPath`    | Array  | Details of the join path used in the operation.     |
| `filter`      | Object | Filter conditions applied within the operation.     |

### `__ENTITIES` Details

Information about the entities affected by the query:


| Key           | Type   | Description                                              |
|---------------|--------|----------------------------------------------------------|
| `__KEY`       | String | Unique key for the entity.                               |
| `__TIMESTAMP` | String | Timestamp of the last update to the entity.              |
| `__STAMP`     | Integer| Version stamp for the entity.                            |
| `ID`          | Integer| Identifier of the entity.                                |
| `Quantity`    | Integer| Example attribute, e.g., quantity in an order.           |
| `Purchaser`   | Object | Example attribute, e.g., details about the purchaser, using deferred loading.     |



## Combining with Other Parameters

The `$queryplan` parameter can be combined with other parameters to gain insights into how queries are executed, which can help in optimizing performance:

- **$filter**: Apply filters to the dataset to see how they affect the query plan.

- **$orderby**: Observe how sorting impacts the execution plan.

- **$top/$limit** and **$skip**: Check the effect of limiting and skipping records on the query execution.

- **$expand**: Include related data and see how joining related tables or collections influences the query plan.

- **$attributes**: Specify which attributes are included in the query and understand their impact on the query performance.

- **$method**: Combine with various method operations to analyze their execution plans.

- **$compute**: Evaluate the impact of computations on the query execution.

- **$entityset**: Analyze the query plan for operations involving entity sets.

- **$savedfilter**: Save and reuse filters to analyze their impact on the query plan.

- **$savedorderby**: Save and reuse sorting criteria to analyze their impact on the query plan.


## Sample Usage in Postman

How to Use:

- **Method**: GET
- **URL**: `/rest/Orders?$filter="Quantity > 4 AND Purchaser.Name = user2"&$queryplan=true`

<img src={require('./img/restQueryPlan.png').default} style={{borderRadius: '6px'}} />


## Sample Response

The response structure for the `$queryplan` endpoint looks something like this in practice:

```json
{
    "__queryPlan": {
        "And": [
            {
                "item": "Join on Table : Users  :  Orders.Purchaser = Users.ID",
                "subquery": [
                    {
                        "item": "Users.Name === user2"
                    }
                ]
            },
            {
                "item": "Orders.Quantity > 4"
            }
        ]
    },
    "__extendedQueryPlan": {
        "type": "LogicOperatorNode",
        "logicOper": "And",
        "parts": [
            {
                "type": "JoinNode",
                "targetTable": "Users",
                "instance": 0,
                "joinPath": [
                    {
                        "leftTable": "Orders",
                        "leftField": "Purchaser",
                        "leftInstance": 0,
                        "rightTable": "Users",
                        "rightField": "ID",
                        "rightInstance": 0
                    }
                ],
                "filter": {
                    "type": "SeqNode",
                    "field": "Name",
                    "table": "Users",
                    "instance": 0,
                    "oper": " === ",
                    "value": "user2"
                }
            },
            {
                "type": "SeqNode",
                "field": "Quantity",
                "table": "Orders",
                "instance": 0,
                "oper": " > ",
                "value": 4
            }
        ]
    },
    "__DATACLASS": "Orders",
    "__entityModel": "Orders",
    "__GlobalStamp": 0,
    "__COUNT": 1,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "20",
            "__TIMESTAMP": "2024-05-09T17:01:36.995Z",
            "__STAMP": 1,
            "ID": 20,
            "Quantity": 5,
            "Purchaser": {
                "__deferred": {
                    "uri": "/rest/Users[2]",
                    "__KEY": "2"
                }
            },
            "OrderedProduct": {
                "__deferred": {
                    "uri": "/rest/Products[2]",
                    "__KEY": "2"
                }
            },
            "paymentsSelection": {
                "__deferred": {
                    "uri": "/rest/Orders[20]/paymentsSelection?$expand=paymentsSelection"
                }
            }
        }
    ],
    "__SENT": 1
}
```