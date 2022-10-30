// MOD Manipulation To Do App project

// adding task

document.getElementById("add-task").addEventListener("click", function(){
    const inputValue = document.getElementById("input-task").value;

    const singleTaskContainer = document.createElement("div");
    singleTaskContainer.className = "single-task";

    const input = document.createElement("input");
    input.className = "checkbox";
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "cb");
    input.setAttribute("onclick", "complateTask(this)");

    singleTaskContainer.appendChild(input);

    const label = document.createElement("label");
    label.setAttribute("for", "cb");
    label.innerText = inputValue;

    singleTaskContainer.appendChild(label);

    document.querySelector(".incompleted-task").appendChild(singleTaskContainer);

    document.getElementById("input-task").value = "";

})



// Complate task

function complateTask(tlem){
    const parent = tlem.parentElement;
    const value = parent.querySelector("label").innerText;

    const completedTaskContainer = document.createElement("div");
    completedTaskContainer.className = "completed-single-task";

    const label = document.createElement("label");
    label.setAttribute("for", "cb");
    label.innerText = value;

    completedTaskContainer.appendChild(label);

    const DeleteButton = document.createElement("button");
    DeleteButton.className = "delete";
    DeleteButton.setAttribute("onclick", "deleteTask(this)");
    DeleteButton.innerText = "Delete";

    completedTaskContainer.appendChild(DeleteButton);

    // Deleting from incompleted-task
    parent.remove();

    document.querySelector(".completed-task").appendChild(completedTaskContainer);

}


// Deleting Task

function deleteTask(item){
    item.parentElement.remove();

}




