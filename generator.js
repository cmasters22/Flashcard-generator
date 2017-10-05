var inquirer = require("inquirer");

var BasicCard = require("./BasicCard");

var ClozeCard = require("./ClozeCard");

run();

function run(){
inquirer.prompt({
		name: "action",
		type: "list",
		message: "What would you like to create?",
		choices: [
			"Basic",
			"Cloze",
			]
	}).then(function(answer){
		if (answer.action === 'Basic')
			displayBasic();
		else 
			displayCloze();
	});

function displayBasic() {
	inquirer.prompt([{
		name: "insert",
	    message: "Insert a question: ", 
		},
		{
		name: "answer",
	    message: "Insert the answer: ",
	}]).then(function(answer){
		var newCard = new BasicCard(answer.insert, answer.answer);
		console.log(newCard.front);
		console.log(newCard.back);
		more();
	});
}
function displayCloze() {
	inquirer.prompt([{
		name: "text",
	    message: "Insert a statement: ", 
		},
		{
		name: "cloze",
	    message: "Which part of this statement is the answer?",
	}]).then(function(answer){
		
		var newCard = new ClozeCard(answer.text, answer.cloze);

		if (newCard.text === newCard.partial){
			console.log("Error!");
		}
		else{
			console.log(newCard.partial);
			console.log(newCard.cloze);
		}
		more();
	});
}

function more (){
	inquirer.prompt({
		name: "again",
		type: "list",
	    message: "Would you like to add another card?", 
	    choices: ["Yes", "No"]
	}).then(function(answer){
		if (answer.again === "Yes"){
			run();
		}
		else
			console.log ("Have a great day!");
	});
}
}
