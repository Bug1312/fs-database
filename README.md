# File System Database

Basic replication of @replit/database but with the use of node's filesystem locally

## Get Started
    const Database = require('@bug1312/fs-database'),
        db = new Database();

## Docs

### Database
    Database(String directory?)
Gives the option of custom directory for database.

### Functions
All these functions are apart of the `Database` class.

    .get(String key)
Gets value of a `key`, returns promise of the value of the key is.

    .set(String key, Any value)
Sets `key` to `value`.

    .delete(String key)
Deletes `key`.

    .list(String prefix?)
Returns promise with array of all keys in Database with `prefix`. If no `prefix` is provided, returns all keys.
