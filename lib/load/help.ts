import * as chalk from 'chalk';

export function Help(){
  console.log(`
${chalk.green(`load.Function(<path>)`)} - Load in a specific .js file's module

${chalk.green(`load.Directory(<path>)`)} - Load all .js files in a directory

${chalk.green(`load.Show()`)} - Display the names of all modules loaded
`)
}
