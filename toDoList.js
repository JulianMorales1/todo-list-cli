const prompt = require('prompt-sync')({sigint: true});

let listPrompt = Number(prompt('Welcome to the To-Do List Manager Application! What would you like to do?(See list = 1, Add to list = 2, Edit list = 3, Exit prompt = 4): '));

let completeList = []

let marked = []

if(listPrompt === 4){
    console.log("You have exited the to do list");
}

while(listPrompt !== 4){

    if (listPrompt === 1){

        if(completeList.length <= 0){
           listPrompt = Number(prompt('You have no task. What would you like to do next?(See list = 1, Add to list = 2, Edit list = 3, Exit prompt = 4): '));
        }

        else if(completeList.length > 0){
            for (let i = 0; i < completeList.length; i++){
            console.log(completeList[i] + ' ' + marked[i]);
            }
        listPrompt = Number(prompt('You have seen your list. What would you like to do next?(See list = 1, Add to list = 2, Edit list = 3, Exit prompt = 4): '));
        }
    }

    else if(listPrompt === 2){
        let task = prompt("What is your task?: ");
        marked.push('incomplete')
        completeList.push(task);
        listPrompt = Number(prompt("You have added a task! What would you like to do next?(See list = 1, Add to list = 2, Edit list = 3, Exit prompt = 4): "));
    }

    else if(listPrompt === 3){

        for (let i = 0; i < completeList.length; i++){
        console.log(completeList[i] + ' ' + marked[i]);
        }
        let taskNumber = Number(prompt("These are your task. Which array item do you want to mark: "));
        marked[taskNumber] = 'complete'

        for (let i = 0; i < completeList.length; i++){
            console.log(completeList[i] + ' ' + marked[i]);
            }
        listPrompt = Number(prompt("You have marked a task! What would you like to do next?(See list = 1, Add to list = 2, Edit list = 3, Exit prompt = 4): "));
    }
    if(listPrompt === 4){
        console.log("You have exited the to do list");
        }
}
