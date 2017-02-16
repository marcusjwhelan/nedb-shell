import * as chalk from 'chalk';

export function Help(){
  console.log(`
${chalk.green(`db.createDatastore(<name>,\{<create Options>\})`)}: Create a new datastore with the <name> and input options.

${chalk.green(`db.[name].Insert(object)`)}: Insert a new object into a the <named> datastore.

${chalk.green(`db.[name].Find(queryObject,optionalProjectionObject)`)}:  Find is a cursor and returns a cursor unless a cursor function is applied at the end. For Example -
${chalk.green(`db.[name].Find(\{\}).sort(\{_id: -1\}).skip(1).limit(2).pretty()`)}: This will return a pretty print of the returned objects.

${chalk.green(`db.[name].Find().toArray()`)}: toArray() can be added instead of pretty() to return an array of objects found.
`);
}
