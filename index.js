#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
//function start
function WellcomeCalculator() {
    let endanimation = chalkAnimation.karaoke(`
         _____________________  
        |  _________________  |
        | | JO           0. | | 
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|

        |u|z|m|a| |r|a|s|h|i|d|

      `);
    setTimeout(() => {
        endanimation.stop();
    }, 3000);
}
const answer = await inquirer.prompt([{ message: "Enter 1st Number ", type: "number", name: "FirstNumber" },
    {
        message: "Enter your  2nd Number ", type: "number", name: "SecondNumber"
    },
    {
        message: "Select on operator for performing action",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power", "%", "="],
    },
]);
if (answer.Operator === "Addition") {
    console.log(chalk.bgGreen(answer.FirstNumber + answer.SecondNumber));
}
else if (answer.Operator === "Subtraction") {
    console.log(chalk.bgBlue(answer.FirstNumber - answer.SecondNumber));
}
else if (answer.Operator === "Multiplication") {
    console.log(chalk.bgBlueBright(answer.FirstNumber * answer.SecondNumber));
}
else if (answer.Operator === "Division") {
    console.log(chalk.bgBlueBright(answer.FirstNumber / answer.SecondNumber));
}
else if (answer.Operator === "%") {
    console.log(chalk.bgBlueBright(answer.FirstNumber * answer.SecondNumber / 100, "Rs."));
}
else if (answer.Operator === "Power") {
    console.log(chalk.bgGreen(answer.FirstNumber ** answer.SecondNumber));
}
else {
    console.log(chalk.bgYellowBright("Select Valid Operator"));
}
WellcomeCalculator();
//function end
