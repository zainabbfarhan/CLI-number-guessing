#! /usr/bin/env node
import inquirer from "inquirer";
// Computer wil;l generate  a number
// User input for guessing number
// compare user input with computer generated number and show result 
const randomNuber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: 'userGuessedNumber',
        type: 'number',
        message: ' Please guess a number between 1-10 : ',
    }
]);
if (answers.userGuessedNumber === randomNuber) {
    console.log("Congratulation! you guessed a right number.");
}
else {
    console.log("Sorry! you guessed a wrong number.");
}
