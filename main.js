import inquirer from "inquirer";
let quiz = await inquirer.prompt([{
        name: "Q1",
        type: "list",
        message: "What is the chemical formulae for water",
        choices: ["H20", "H02", "2HO", "HHO"]
    }, {
        name: "Q2",
        type: "list",
        message: "What is the product of sodium and water",
        choices: ["NaOH+H2", "NaOH", "NOH", "NaO"]
    },
    {
        name: "Q3",
        type: "list",
        message: "What is diffusion",
        choices: ["mixing", "collisions", "density", "upthrust"]
    },
]);
let score = 0;
switch (quiz.Q1) {
    case "H20":
        console.log("correct");
        ++score;
        break;
    default: console.log("incorrect");
}
switch (quiz.Q2) {
    case "NaOH+H2":
        console.log("correct");
        ++score;
        break;
    default: console.log("incorrect");
}
switch (quiz.Q3) {
    case "mixing":
        console.log("correct");
        ++score;
        break;
    default: console.log("incorrect");
}
console.log(`score:${score}`);
