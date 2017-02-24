import * as chalk from 'chalk';

export function Help(){
  console.log(`
${chalk.green(`db.createDatastore(<name>,\{<create Options>\})`)} - Create a new datastore with the <name> and input options.

${chalk.green(`db.show()`)} - List all the datastore names in this directory that you can access with this shell.`);
}
