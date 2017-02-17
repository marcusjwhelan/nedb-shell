import * as chalk from 'chalk';

export function Help(){
  console.log(`
${chalk.green(`db.[name].Insert(doc)`)} - Insert a new document into the named datastore. 

${chalk.green(`db.[name].InsertMany([doc,doc])`)} - Insert an array of documents. 

${chalk.green(`db.[name].Find(query,projection?,cb?)`)} - Find documents.

Cursor Functions
${chalk.green(`.pretty()`)} - Pretty print found object/s.
${chalk.green(`.exec()`)} - Call to execute find and can also add own cb.
${chalk.green(`.sort(query)`)} - Add a sort query.
${chalk.green(`.limit()`)} - Limit the results.
${chalk.green(`.skip()`)} - Skip a # of results.
${chalk.green(`.count()`)} - Cannot be chained / gets count of query.
${chalk.green(`.toArray()`)} - Return found objects in an array.

${chalk.green(`db.[name].FindOne(query,projection?,cb?)`)} - Find a single document and print to the screen.

${chalk.green(`db.[name].FindOneAndUpdate(findQuery,update,updateOptions?,cb?)`)} - Find one document and update with checks on find and update.
 
 ${chalk.green(`db.[name].FindOneAndRemove(findQuery,show?)`)} - Find the document to remove, print it out if needed before removal. 

${chalk.green(`db.[name].Count(query)`)} - Get the total count of datastore or use the query to get the count of that query.

${chalk.green(`db.[name].Update(query,update,updateOptions?,cb?)`)} - Update a single document or many.

${chalk.green(`db.[name].UpdateMany(query,update,updateOptions?,cb?`)} - Update many documents.

${chalk.green(`db.[name].Remove(query,options)`)} - Remove one or many documents.

${chalk.green(`db.[name].EnsureIndex(options)`)} - Create an index on a field name.

${chalk.green(`db.[name].RemoveIndex(fieldName)`)} - Remove an index from a field.

${chalk.green(`db.[name].Drop()`)} - Drop a datastore. = delete it.
`);
}

