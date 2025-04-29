const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            listItem.style.textDecoration = "line-through";
            listItem.style.color = "red";
        } else {
            listItem.style.textDecoration = "none";
            listItem.style.color = "black";
        }
    });

    const taskTextNode = document.createTextNode(taskText);

    listItem.appendChild(checkbox);
    listItem.appendChild(taskTextNode);

    taskList.appendChild(listItem);

    taskInput.value = "";
});