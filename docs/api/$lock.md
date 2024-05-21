---
id: $lock
title: $lock 
---


## Functionality

### Definition

The `$lock` endpoint allows you to lock and unlock an entity using a pessimistic locking mechanism. This ensures that the entity cannot be modified by other sessions while it is locked.

:::tip
Locks triggered by the REST API are applied at the session level. 
:::


### Locking an Entity

To lock an entity for other sessions, use the following syntax:

```
GET /rest/{{dataClass}}({{id}})/?$lock=true
```

### Unlocking an Entity

To unlock an entity for other sessions, use the following syntax:

```
GET /rest/{{dataClass}}({{id}})/?$lock=false
```

:::tip
A `?$lock` request returns a JSON object with a `"result"` field indicating the success of the lock operation. The `__STATUS` object provides additional details.
:::


## Locking Mechanics

When an entity is locked, the following actions are not possible for other sessions:

- Locking
- Unlocking
- Updating
- Deleting

An entity locked by the REST API can only be unlocked by:

- The same session that locked it, using `/?$lock=false`
- Reaching the session's inactivity timeout, which closes the session


## Error Codes

The following error codes and messages may be returned in the `__STATUS` object in case of an error:

| Status | StatusText             | Description                                                                 |
|--------|------------------------|-----------------------------------------------------------------------------|
| 2      | "Stamp has changed"    | The internal stamp value of the entity does not match the stored entity.    |
| 3      | "Already locked"       | The entity is already locked by a pessimistic lock.                         |
| 4      | "Other error"          | A serious error, such as a low-level database error or a hardware error.    |
| 5      | "Entity does not exist"| The entity no longer exists in the database.                                |

## Lock Information

The `__STATUS` object may include additional properties providing information about the lock:

### Common Properties

| Property        | Type    | Description                                                       |
|-----------------|---------|-------------------------------------------------------------------|
| success         | boolean | `true` if the lock action is successful, otherwise `false`.       |
| status          | number  | Error code (available only in case of error).                     |
| statusText      | text    | Description of the error (available only in case of error).       |
| lockKind        | number  | Lock code.                                                        |
| lockKindText    | text    | Description of the lock type ("Locked by session" or "Locked by record"). |
| lockInfo        | object  | Information about the lock origin.                                |


### REST Session Lock Properties

| Property      | Type    | Description                                               |
|---------------|---------|-----------------------------------------------------------|
| host          | text    | URL that locked the entity.                               |
| IPAddr        | text    | IP address of the locker.                                 |
| recordNumber  | number  | Record number of the locked record.                       |
| userAgent     | text    | User agent of the locker.                                 |



## Use Cases

### Locking an Entity

Lock an entity in a first browser session:

**Request:**

```
GET /rest/Customers(1)/?$lock=true
```

**Response:**

```json
{
    "result": true,
    "__STATUS": {
        "success": true
    }
}
```

### Attempting to Lock an Already Locked Entity

Attempt to lock the same entity in a second browser session:

**Request:**

```
GET /rest/Customers(1)/?$lock=true
```

**Response:**

```json
{
    "result": false,
    "__STATUS": {
        "status": 3,
        "statusText": "Already locked",
        "lockKind": 7,
        "lockKindText": "Locked by session",
        "lockInfo": {
            "host": "127.0.0.1:8043",
            "IPAddr": "127.0.0.1",
            "recordNumber": 7,
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36..."
        }
    }
}
```

### Unlocking an Entity

Unlock the entity in the same session that locked it:

**Request:**

```
GET /rest/Customers(1)/?$lock=false
```

**Response:**

```json
{
    "result": true,
    "__STATUS": {
        "success": true
    }
}
```

## Best Practices

- **Lock Only When Necessary:** Use locking sparingly to avoid performance bottlenecks and ensure that entities are available for other sessions.

- **Monitor Lock Status:** Regularly check the lock status and handle errors gracefully to maintain smooth application performance.

- **Session Management:** Ensure proper session management to avoid unintended locking due to session timeouts.


