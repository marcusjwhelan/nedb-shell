import * as chalk from 'chalk';

export function Help(){
  console.log(`
${chalk.green(`db.createDatastore(<name>,\{<create Options>\})`)} - Create a new datastore with the <name> and input options.

${chalk.green(`db.Show()`)} - List all the datastore names in this directory that you can access with this shell.

${chalk.green(`db.Drop(<array>)`)} - Optional array. Remove all datastores in directory or a select list.`);
}
