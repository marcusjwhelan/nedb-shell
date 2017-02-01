module.exports = {
  insert: require('./insert'),
  find: require('./find'),
  createDatastore: require('./createDatastore')
}

// here I want to require all modules concerning the database.

/*
* so when they type db it takes them to this module and the . would
* be extended modules db.[collectionName].update(query);
* where db is a module, [collectionName] is just that, and update is
* another imported module that requires nedb and uses the inputted
* query to run update functionality on the database entered entered
* at the beginning.
*
* */


/*           ALL THESE COME FROM MONGO
*  Ideas for other modules
*
*   - collectionName will be replaced with []
*   - datastore is the same as collection since that is what nedb
*     calls a collection
*
*   db.[].count()
*   db.[].remove()
*   db.[].drop()
*   db.[].insert()
*   db.[].insertMany()
*   db.[].find()
*   db.[].findOne()
*   db.[].aggregate()
*   db.[].update()
*   db.[].updateMany()
*   db.[].updateOne()
*
*  Specific modules to be added directly onto the db module
*
*   db.cloneCollection()
*   db.cloneDatabase()
*   db.Help()
*   db.copyDatabase()
*   db.createDatastore()
*   db.getName()
*
*   Possibly AUth and Roles? much later
*
*   db.auth()
*   db.createUser()
*   db.udpateUser()
*   db.changeUserPassword()
*   ...
*   ..
*   db.dropRole()
*   db.getRole()
*   ...
*   ..
*
*   use(selectDatabase)?
*   use(selectDatastore)?
*
*   Constructors ?
*
*
* */
