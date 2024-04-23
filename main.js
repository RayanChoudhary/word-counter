#! /usr/bin/env node
//import 'inquirer' module which is the command line interface for node.js
import inquirer from "inquirer";
//import chalk for looking beatiful code
import chalk from "chalk";
console.log(chalk.bold.italic.underline("   Well Come  "));
//making a variable and store a (answer) property in it and use inquirer.prompt for user input
let answer = await inquirer.prompt({
    name: "Sentance",
    type: 'input',
    message: "\nEnter you sentance for words count"
});
// decalare a variable and use trim for remove whitespaces and use split for add words in array
let letter = answer.Sentance.trim().split(" ");
// print the variable
console.log(letter);
// print the message and  use length for count the words
console.log(`The counting of your sentance is ${letter.length} words`);
