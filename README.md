# NeDB-Shell
A Mongo like shell for NeDB

## Pre Install to Use

Install [NodeJs ^6.9.x](https://nodejs.org/en/) 

Install [NeDB](https://github.com/louischatriot/nedb)

## Usage
NeDB-Shell has the ability to use all the NeDB functions, for example.
   * db.[name].find().exec(cb);
   * db.[name].insert().exec();
   * db.[name].remove().exec();

And with this package you will have an assortment of new functions on top of the NeDB functions. Check the <a href="#table-of-contents">Table of Contents</a> for all usages. 


## Install
Install 

```bash
npm install -g nedb-shell
```

To begin using NeDB-Shell you will need to navigate to your persistent database directory. If you do not have one yet and would like to create one it would be best to place your directory in AppData on Windows and for mac root. All databases ending with `.db` in a directory will be loaded into the db object. If there are any files not ending in .db they will not be loaded into the db object for use. Also all created datastores will be created in the current directory with the `.db` syntax. 

Once at your database location simply
```bash
> nedb-shell
```
This will open up a NodeJs shell with this NeDB wrapper module to work in the shell. This way you have all the use of NodeJs shell and NeDB pre-loaded with extra features. This includes auto completion for functions using dot notation.

New additions of 1.1.0, moment and lodash as `_` are now pre-loaded.

## Table of Contents

* <a href="#creatingloading-a-database">Creating/loading a database</a>
* <a href="#inserting-documents">Inserting documents</a>
* <a href="#finding-documents">Finding documents</a>
   * <a href="#basic-quering">Basic Querying</a>
* <a href="#counting-documents">Counting documents</a>
* <a href="#updating-documents">Updating documents</a>
* <a href="#removing-documents">Removing documents</a>
* <a href="#indexing">Indexing</a>
* <a href="#only-on-nedb-shell">Only on NeDB-Shell</a>
   * <a href="#findoneandupdatefindoneandremove">FindOneAndUpdate/FindOneAndRemove</a>
   * <a href="#insertmany-updatemany">InsertMany UpdateMany</a>
   * <a href="#additional">Additional</a>

### Creating/loading a database
This shell is meant for persistent datastores only. All the operations work on files that are saved to your local machine to persist the database. For reference of the options available to [NeDB](https://github.com/louischatriot/nedb) please refer to the [NeDB README](https://github.com/louischatriot/nedb/blob/master/README.md#creatingloading-a-database). To use NeDB-Shell's create a new datastore in your database directory.
  
  ```bash
  > cd <your database directory>
  > nedb-shell
  > NeDB Shell: <DISPLAYS CURRENT DATE>
  > db.createDatastore('users',{ /* options */ }, //optional cb)
  
  # normal usage
  > db.createDatastore('users',{}) 
  # This should simply load a new datastore file into the database.
  ```
All created datastores are persistent and have the option autoload set to true. The callback is optional and if you decide not to place one there you will automatically receive error and success reporting with an auto set callback. 
   
As for loading the database this is done automatically when you open up NeDB-Shell, if there are any .db files in that directory. When creating a datastore you do not need to append a .db, simply input the name only. When you create a new datastore it is auto loaded into the db object.

### Inserting documents
```bash
#
# Inserting without a callback
> db.users.Insert({ fisrtName: "John", lastName: "Doe"})
# Output
> {
  "firstName": "John",
  "lastName": "Doe",
  "_id": "1234567899876543"
}
#
# 
# Inserting a document with a callback
> db.users.Insert({firstName: "John", lastName: "Doe"},function(err,doc){ console.log(doc)});
# Output
> { firstName: 'John', lastName: 'Doe', _id: '1234567899876543' }
```
There is no cursor involved with Insert so you cannot return the document to a variable. However the Find function does use a Cursor and you can use Find to return the value and store it in a variable. 


### Finding documents
db.[name].Find(query, projection?, cb?), db.[name].FindOne(query,projection?,cb?). Below are some example uses for each find function. 

```bash
> db.users.Find({ firstName: 'John'}) 
# As of Version 1.1.0 this no longer logs a cursor.
# Instead it defaults to the cursor function .pretty()
#
# .pretty() - pretty print the documents
# .count() - print count / cannot be chained
# .skip(1).limit(2).sort({_id: -1}) - returns a cursor
# .skip(1).limit(2).sort({_id: -1}).pretty() - prints documents
#
# If you would like to run your own function against the returned cursor doc/docs
# .exec(function(err, docs){ 
... // docs equals an array 
... }
#
# If you would like to return the array of documents simply use the toArray() cursor function
let johnUsers = db.users.Find({ firstName: 'John' }).toArray()
# 
#
# There is also FindOne, although this does not return a cursor.
db.users.FindOne({ firstName: 'John' })
> {
  "firstName": "John",
  "lastName": "Doe",
  "_id": "1234567899876543"
}
# or
db.users.FindOne({},function(err,doc){
... // document is an object
... }
```
These find functions are also all available to be uses as they are shown on NeDB if you use the lowercase syntax of find,findOne. 


### Basic querying
[NeDB Basic Quering](https://github.com/louischatriot/nedb/blob/master/README.md#basic-querying).

### Counting documents
The Count function works just like the Find function but does not return a Cursor and only prints the number found by the query entered. 
```bash
> db.users.Count() 
> 2
> db.users.Insert({ new: "doc" })
> {
  "new": "doc",
  "_id": "1234567891234567"
}
> db.users.Count()
> 3
> db.users.Count({ new: "doc" })
> 1
```

### Updating documents
db.[name].Update(query, updateObject, options, optionalCallBack).  Updates only one document unless the multi option is set to true. I added a UpdateMany which has multi set to true automatically if you would rather leave the options empty. 
```bash
# Update a single document
> db.users.Update({ firstName: "John"}, { firstName: "Phillip" })
> { changed: 1,
  affectedDocument: {},
  affectedDocuments: [],
  upsert: false }
#
# The returned object string is not assignable to a variale but it does show the number 
# of documents changed and also if any documents where made because of upsert being true.
# To have either the affectedDocumentor affectedDocuments filled with the _id/s of changed 
# documents you have to set `returnUpdatedDocs: true` in the `options`.
#
# Here I will update many and see the changed object _ids
db.users.Update({ firstName: "John"}, { firstName: "Phillip"}, {multi: true, 
... returnUpdatedDocs: true})
> { changed: 3,
  affectedDocument: {},
  affectedDocuments: [ '1234567899876543', '9876543211234567', '1234567891234567' ],
  upsert: false }
#
# To print out the full documents you could write your own callback function
> db.users.Update({ firstName: "John"},{firstName: "Phillip"},{multi: true},function(err, docs){ 
... // docs will be in the form of an array 
}
```
### Removing documents
db.users.Remove(query, options, callback// optional) will remove one document but if you set `multi: true` in the options this will remove all documents matching the query. 
```bash
> db.users.Remove({ firstName: "John"},{ multi: true})
> { removed: 3 }
# prints an object with the number removed.
#
# with custom callback
> db.users.Remove({ firstName: 'John'},{ multi: true}, function(err,numberRemoved) {
... // numberRemoved is of type number
}
>
``` 

### Indexing
db.users.EnsureIndex(query/optionsObject) is used to create an index on a value, The _id value is already indexed.
db.users.RemoveIndex(fieldName, cb)
```bash
> db.users.EnsureIndex({ fieldName: 'firstName', unique: true })
> Success
# If there is an error or conflict during indexing an error will show up in red.
> db.users.RemoveIndex('firstName')
> Success
```


# Only On NeDB-Shell

### FindOneAndUpdate/FindOneAndRemove
db.[name].FindOneAndUpdate(query,update,updateOptions?,cb?). db.[name].FindOneAndRemove(query,cb?). Both are not in the NeDB library but can be implemented. These were added for users who would like to circumvent writing more code than needed. This also adds another layer of error checking. If the FindOne comes back with an error the Update or Remove will not execute.

```bash
# To find one document and update that single document in one query
#                                query                update
> db.users.FindOneAndUpdate({ firstName: 'John' },{ firstName: 'Max' });
> { changed: 1,
  affectedDocument: {},
  affectedDocuments: [],
  upsert: false }
#
# As you can see you still receive the reply document. If you wish you can set to retrieve the id as well.
#
> db.users.FindOneAndUpdate({ firstName: 'John'},{ firstName: 'Max' },{ returnUpdatedDocs: true });
> { changed: 1,
  affectedDocument: '1234567899876543',
  affectedDocuments: [],
  upsert: false }
#
# However You cannot set multi to true. 
```
FindOneAndRemove is simply available to view the removed document before hand by using the attribute `show: true` in the second argument. To simply remove just one document use <a href="#removing-documents">removing documents</a>. Remove's default `multi: false` will only remove one document. With FindOneAndRemove you might have an error finding the document and be warned about it. 
```bash
db.users.FindOneAndRemove({ firstName: 'John' })
> { removed: 1 }
# 
# with returned document 
#
> db.users.FindOneAndRemove({},{ show: true })
> {
  "firstName": "John",
  "lastName": "Doe",
  "_id": "1234568797894563"
}
```

### InsertMany UpdateMany
db.[name].InsertMany(array,cb?). A callback is available and would function on each document in the array. If left blank there is an automatic callback that will log the error and the document it failed on. Great for pasting in an array of objects to insert. 
```bash
> let bushel = [{ name: 'Chris'},{ name: 'Tom' },{ name: 'Mercedes'}];
> db.users.InsertMany(bushel);
#
# If you would like to write your own callback to log every success
#
> db.users.InsertMany(bushel,function(err,doc){if(!err){
... console.log("success")});
> success
success
success
```
db.[name].UpdateMany(query,update,updateOptions?,cb?). For when You would rather not have to set `multi: true` in the options all the time. 
```bash
# for an override 
> db.UpdateMany({ name: 'John'},{ name: 'Sierra' },{ returnUpdateDocs: true})
> { changed: 2,
  affectedDocument: {},
  affectedDocuments: [ '132424523452345', '234524523423452' ],
  upsert: false }
#
# Use update options like $set to not override the entire document.
#
> db.UpdateMany({ name: 'John' }, { name: 'Sierra' })
> { changed: 2,
  affectedDocument: {},
  affectedDocuments: [],
  upsert: false }
#
# Again the _ids are only returned when returnUpdatedDocs is set to true in the options.
```

### Additional
db.[name].Drop(). 
db.[name].Help(). 
db.Help().
```bash
> db.users.Drop();
# removes users.db from current directory. Also removes from db object.
#
> db.Help() # list all functions available on the db object.
#
> db.[name].Help() # List all functions on the datastore object.
#
# Version 1.1.0 additions clear().
# If you would like to clear the screen 
> clear()

```
