var todoArray = ["Walk the dog", "Feed the dog", "Make coffee", "Take a shower", "Eat breakfast", "Go to school"];


var fromLocalStorage = localStorage.getItem("todo");
if(fromLocalStorage) {
	todoArray = JSON.parse(fromLocalStorage);
}

var doneArray = [];

var fromLocalStorage = localStorage.getItem("done");
if(fromLocalStorage) {
	doneArray = JSON.parse(fromLocalStorage);
}

setItems();

function printTodoList() {
	
    var todoTasks = localStorage.getItem("todo");
    todoList = JSON.parse(todoTasks);

    var values = "";
	
    for(var i = 0; i < todoList.length; i++) {
		
        values += "<li class='col-12' id='todo'> <div class='row no-gutters'> <div class='col-6 border-right'>" + todoList[i] + '</div> <div class="col-6"><button class = "remove btn btn-secondary float-right" id = "' + i  + '"><i class="far fa-trash-alt"></i></button><button class = "delete btn btn-secondary float-right" id = "' + i  + '"><i class="fas fa-check"></i></button></div></div></li>';
		
		
    };
	//print to inner html, todo from array and button with own id
    document.getElementById("todoList").innerHTML = values;
 
    var deleteButton = document.getElementsByClassName("delete");
	var removeButton = document.getElementsByClassName("remove");
	
	//for each delete button, add event with deleteTodo function
    for (var i = 0; i < deleteButton.length; i++) {
		
        deleteButton[i].addEventListener("click", checkTodo);
		
    };
	for (var i = 0; i < removeButton.length; i++) {
		
        removeButton[i].addEventListener("click", removeTodo);
		
    };
	
	showDoneTodos();
}


function showDoneTodos() {
	
	var doneTask = localStorage.getItem("done");
    doneList = JSON.parse(doneTask);
	
	var listItems = "";
	
    for(var i = 0; i < doneList.length; i++) {
		
        listItems += "<li class='col-12' id='done'> <div class='row no-gutters'> <div class='col-6'>" + doneList[i] + '</div> <div class="col-6"><button class = "remove btn btn-secondary float-right" id = "' + i  + '"><i class="far fa-trash-alt"></i></button><button class = "move btn btn-secondary float-right" id = "' + i  + '"><i class="fas fa-undo-alt"></i></button></div></div></li>';
		
    };
	//print to inner html, todo from array and button with own id
    document.getElementById("doneTodos").innerHTML = listItems;
	
	var moveButton = document.getElementsByClassName("move");
	var removeButton = document.getElementsByClassName("remove");
	
	//for each delete button, add event with moveTodo function
    for (var i = 0; i < moveButton.length; i++) {
		
        moveButton[i].addEventListener("click", moveTodo);
		
    };
	for (var i = 0; i < removeButton.length; i++) {
		
        removeButton[i].addEventListener("click", removeDone);
		
    };
	
}
 

function addNewTodo() {
	//save task input to variable
    var task = document.getElementById("todoInput").value;
 
	//pushes new task to end of todo array and set item to localstorage as string
    todoArray.push(task);
 
	//return functions to clear input field and print todo list
	setItems();
	clearInputField();
    printTodoList();

}
 

function checkTodo() {
	//deletes todo by id and puts it in donearray
    var id = this.getAttribute("id");
	doneArray.push(todoArray[id]);
    todoArray.splice(id, 1);

	setItems();
    printTodoList();
}

function moveTodo() {
	//move tasks by id back to todoarray
    var i = this.getAttribute("id");
	todoArray.push(doneArray[i]);
    doneArray.splice(i, 1);

	setItems();
    printTodoList();
}

function removeTodo() {
	//move tasks by id back to todoarray
    var i = this.getAttribute("id");
    todoArray.splice(i, 1);

	setItems();
    printTodoList();
}
function removeDone() {
	//move tasks by id back to todoarray
    var i = this.getAttribute("id");
    doneArray.splice(i, 1);

	setItems();
    printTodoList();
}

function clearInputField() {	
	//clears input field
	todoInput.value = "";
	
}

function setItems() {
	localStorage.setItem("done", JSON.stringify(doneArray));
	localStorage.setItem("todo", JSON.stringify(todoArray));
}

/*function sortList() {
	var fromLocalStorage = localStorage.getItem("todo");
	todoArray = JSON.parse(fromLocalStorage);

	todoArray.sort();

	setItems();
	printTodoList();
}*/