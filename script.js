/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 */

 // select elements & assign them to variables
 

 let newTask = document.querySelector('#new-task');
 let form = document.querySelector('form');
 let todoUl = document.querySelector('#items');
 let complateUl = document.querySelector('.complete-list ul');


 let createTask = function(task){
    let listItem = document.createElement("li");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    let label = document.createElement("label");
    label.innerText = task;
    

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;

 }


let checkBoxClick = function(){
    let listItem = this.parentNode;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector("input[type='checkbox']");
    checkBox.remove();

    complateUl.appendChild(listItem);

    bindCompleteItem(listItem, deletetask);
}



let addTask = function(event){
    event.preventDefault();

    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";

    bindIncompleteItem(listItem, checkBoxClick);

}


let deletetask = function(){
    this.parentNode.remove();
}


let bindIncompleteItem = function(taskItem, checkBoxClick){
    let checkBox = taskItem.querySelector("input[type='checkbox']");
    
    checkBox.addEventListener('change', checkBoxClick);
    // checkBox.onchange = checkBoxClick
}


let bindCompleteItem = function(listItem, deleteItem){
  
    let deleteButton = listItem.querySelector(".delete");
    deleteButton.onclick = deleteItem;
    // deleteButton.addEventListener("click", deleteItem);
}


for(let i = 0; i< todoUl.children.length; i++){
    bindIncompleteItem(todoUl.children[i], checkBoxClick);
}


for(let i = 0; i< complateUl.children.length; i++){
    bindCompleteItem(complateUl.children[i], deletetask);
}


form.addEventListener('submit', addTask);
