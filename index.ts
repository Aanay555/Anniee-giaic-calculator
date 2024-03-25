#! /usr/bin/env node

    import inquirer from "inquirer";
    const answer = await inquirer.prompt([{message : "Enter 1st Number " , type : "number", name : "FirstNumber" },
    {
    message : "Enter 2nd Number " , type : "number", name : "SecondNumber" },
    {
    message : "Select on operator for performing action",
    type : "list",
    name : "Operator",
    choices : ["Addition", "Subtraction", "Multiplication", "Division" , "%", "="],
    },
    ]);

    if(answer.Operator === "Addition"){
        console.log(answer.FirstNumber + answer.SecondNumber);
        
        } else if (answer.Operator === "Subtraction"){
        console.log(answer.FirstNumber - answer.SecondNumber);
        } else if (answer.Operator === "Multiplication"){
        console.log(answer.FirstNumber * answer.SecondNumber);
        } else if (answer.Operator === "Division"){
        console.log(answer.FirstNumber / answer.SecondNumber);
        }  else if(answer.Operator === "%"){
        console.log(answer.FirstNumber * answer.SecondNumber / 100 ,"Rs."); 
        }
            else {
          console.log("Select Valid Operator");
        }
        

      