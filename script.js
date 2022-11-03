/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 */

 // select elements & assign them to variables
 

let form = document.querySelector("form");
let taskText = document.querySelector("#new-task");
let inCompleteTask = document.querySelector("#items");
let completeTask = document.querySelector(".complete-list ul");



function createTaskLi(taskValue){
    let taskLi = document.createElement("li");
    taskLi.className = "item";

    let input = document.createElement("input");
    input.type = "checkbox";

    let inputLabel = document.createElement("label");
    inputLabel.innerText = taskValue;

    let btn = document.createElement("button");
    btn.className = "delete done";
    btn.innerText ="Done";

    taskLi.appendChild(input);
    taskLi.appendChild(inputLabel);

    taskLi.appendChild(btn);

    inCompleteTask.appendChild(taskLi);
    taskText.value = "";

    return taskLi;
}

function creatTask(event){
    event.preventDefault();

    let newTask = createTaskLi(taskText.value);
    inCompleteTask.appendChild(newTask);

    onChangeEventBinding(newTask, moveToComplete);
}

// hiding and showing group delete button

function buttonShowHide(){
    let buttonGrantPrent = this.parentNode.parentNode;
    let selectAllCheckbox = buttonGrantPrent.querySelectorAll("input[type='checkbox']:checked")
    let length = selectAllCheckbox.length;
    if(length > 1){
        document.getElementById("done-all").classList.remove("hide-done-button");
    }
    else{
        document.getElementById("done-all").classList.add("hide-done-button");
    }
}

function onChangeEventBinding(newTask, moveToComplet){
    let completeDoneButton = newTask.querySelector(".done");
    completeDoneButton.onclick = moveToComplet;

    let completeInput = newTask.querySelector("input[type='checkbox']");
    completeInput.onchange = buttonShowHide;  
}

function moveToComplete(){
    let completeLI = this.parentNode;

    let completeCheckBox = completeLI.querySelector("input[type='checkbox']");
    completeCheckBox.remove();

    let completeText = completeLI.querySelector("label").innerText;

    let completeLabel = completeLI.querySelector("label");
    completeLabel.remove();

    completeLI.innerText = completeText;

    let button = document.createElement("button");
    button.className = "delete";
    button.innerText = "Delete";
    completeLI.appendChild(button);

    completeTask.appendChild(completeLI);

    deleteEventBinding(completeLI, deleteTask);
}

function deleteEventBinding(completeLI, deleteTask){
    let delBtn = completeLI.querySelector(".delete");
    delBtn.onclick = deleteTask;    
}

function deleteTask(){
    this.parentNode.remove();
}

//default incompete task event binding
for(let i=0; i< inCompleteTask.children.length; i++){
    onChangeEventBinding(inCompleteTask.children[i], moveToComplete);
}

//default compete task event binding
for(let i=0; i<completeTask.children.length; i++){
    deleteEventBinding(completeTask.children[i], deleteTask);
}


form.onsubmit = creatTask;




// This function is for moving all task from incoplete task to complete task section
function groupMoveToComplete(item){
    let completeLI = item;

    let completeCheckBox = completeLI.querySelector("input[type='checkbox']");
    completeCheckBox.remove();

    let completeText = completeLI.querySelector("label").innerText;

    let completeLabel = completeLI.querySelector("label");
    completeLabel.remove();

    completeLI.innerText = completeText;

    let button = document.createElement("button");
    button.className = "delete";
    button.innerText = "Delete";
    completeLI.appendChild(button);

    completeTask.appendChild(completeLI);

    deleteEventBinding(completeLI, deleteTask);
}


/* selectint all checked box and passing 
into groupMoveToComplete() for moving to complete section grouply by loop */

document.getElementById("done-all").addEventListener('click', function(){
    let checkBoox = document.querySelector("#items");
    let allcheckbox = checkBoox.querySelectorAll("input[type='checkbox']:checked");

    for(i=0; i<allcheckbox.length; i++){
        groupMoveToComplete(allcheckbox[i].parentNode);
    }
    // adding hide-done-button class after loop for diging the button again
    document.getElementById("done-all").classList.add("hide-done-button");
})




