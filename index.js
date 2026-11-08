let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function(){
    let taskValue = taskInput.value.trim();
    if(taskValue ===""){
        alert("Please enter your task");
        return;
    }
    let taskDiv = document.createElement("div");
    taskDiv.className = "task";
    let taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.innerText = taskValue;
    let actionsDiv = document.createElement("div");
    actionsDiv.className = "task-actions"
    let doneBtn = document.createElement("button");
    doneBtn.innerHTML = "Done";
    doneBtn.className = "done-btn";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete-btn";
    doneBtn.addEventListener("click", function() {
        taskText.classList.toggle("completed")
    });
    deleteBtn.addEventListener("click", function(){
        taskDiv.remove();
    });
    actionsDiv.appendChild(doneBtn);
    actionsDiv.appendChild(deleteBtn);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(actionsDiv);
    taskList.appendChild(taskDiv);
    taskInput.value = "";
});
taskInput.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        addBtn.click();
    }
});