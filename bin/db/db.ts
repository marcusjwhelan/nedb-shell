
/*
 * Here we will need to create a singleton instance of a db
 * and this db will get added new datastores with new datastore()
 * from the create datastore or loadDatastore functions. These
 * funtions/classes should attache all the datastore/collection
 * funtions to that new Class to be used for dot notation on
 * that class.
 *
 * Example:  db.users.find();
 *
 * db is required into the shell. this db should be an instance of
 * a class. This class will have many instances of different datastores
 * each datastore will hold helper functions on its instance.
 *
 * */

export class DB {

}

// export instance of DB
export default new DB();
