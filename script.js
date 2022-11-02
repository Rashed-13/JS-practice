/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 */

 // select elements & assign them to variables
 

 let from = document.querySelector('form');
 let inputValue = document.querySelector("#new-task");
 let inCompleteTask = document.querySelector(".todo-list ul");
 let completeTask = document.querySelector(".complete-list ul");

//  <li class="item">
//  <input type="checkbox" /><label>Task Name</label>
// </li>

function createLi(value){
    let li = document.createElement("li");
    li.className = "item";

    let input = document.createElement("input");
    input.type = "checkbox";

    let label = document.createElement("label");
    label.innerText = value;

    li.appendChild(input);
    li.appendChild(label);

    return li;
}


 function createTask(event){
    event.preventDefault();
    let li = createLi(inputValue.value);

    inCompleteTask.appendChild(li);
    inputValue.value = "";
    
    onChangeeventBind(li, moveToComplete);
 }

/* 
<li class="item">
    <input type="checkbox">
    <label>ad</label>
</li> 
*/

 function moveToComplete(){

    let li = this.parentNode;

    let input = li.querySelector("input[type = 'checkbox']");
    input.remove();


    let button = document.createElement("button");
    button.className = "delete";
    button.innerText = "Delete";

    li.appendChild(button);

    completeTask.appendChild(li);

    deleteEventbinding(li, deleteTask);

 };

function deleteEventbinding(li, deleteTask){
    let deleteBtn = li.querySelector(".delete");
    deleteBtn.onclick = deleteTask;
}

function deleteTask(){
    this.parentNode.remove();
}

function onChangeeventBind(li, changeeventBind){
    let checkBox = li.querySelector("input[type='checkbox']");
    checkBox.onchange = changeeventBind;
 }


for(let i = 0; i<inCompleteTask.children.length; i++){
    onChangeeventBind(inCompleteTask.children[i], moveToComplete);
}

for(let i = 0; i<completeTask.children.length; i++){
    deleteEventbinding(completeTask.children[i], deleteTask);
}



from.addEventListener('submit', createTask);
