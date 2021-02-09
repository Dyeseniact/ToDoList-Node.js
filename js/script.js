// Función que crea los nodos 
function createNode(type) {
    var node = document.createElement(type);
    return node;
}
// Crear y agregar nodos 
var app = document.getElementById('app');

var container = createNode('div');
container.className = "container";
app.appendChild(container);

var h1 =  createNode('h1');
var text = document.createTextNode("Todo APP");
container.appendChild(h1);
h1.appendChild(text);

var row = createNode('div');
row.className = "row";
container.appendChild(row);

var sixcolumns = createNode('div');
sixcolumns.className = "six columns";
row.appendChild(sixcolumns);

var task = createNode('label');
var text = document.createTextNode("Task:");
task.className = "task";
sixcolumns.appendChild(task);
task.appendChild(text);

var form = createNode('form');
form.id = "form";
form.action = "#";
sixcolumns.appendChild(form);

var textarea = createNode('textarea');
textarea.className = "u-full-width";
textarea.id = "task";
form.appendChild(textarea);

var input = createNode('input');
input.className = "button u-full-width button-primary";
input.type = "submit"
input.value = "Add"
form.appendChild(input);

var sixcolumns2 = createNode('div');
sixcolumns2.className = "six columns";
row.appendChild(sixcolumns2);

var h2 =  createNode('h2');
var text = document.createTextNode("My tasks");
sixcolumns2.appendChild(h2);
h2.appendChild(text);

var list =  createNode('div');
list.id = "task-list";
sixcolumns2.appendChild(list);

var ul =  createNode('ul');
list.appendChild(ul);

//Variables
var taskList = document.getElementById('task-list');

///EventListeners
eventListeners();

function eventListeners() {
    //Envio al formulario
    document.querySelector('#form').addEventListener('submit', addTask);
    //Borrar task
    taskList.addEventListener('click', deleteTask);
}

//Funciones

//Añadir task
function addTask(event) {
    event.preventDefault();
    //Leer el valor del text area
    var task = document.getElementById('task').value;
    //Validar informacion del task
    if (task != ""){
        //Crear boton de eliminar
        var deleteButton = document.createElement('a');
        deleteButton.classList = 'delete-task';
        deleteButton.innerText = 'x';
        //Crear elemento y añadir el elemento a la lista
        var ul =  document.querySelector('ul');
        var li = document.createElement('li');
        li.innerText = task;
        //Añade el boton de borrar al task
        li.appendChild(deleteButton);
        //Añade el task a la lista
        taskList.appendChild(ul);
        ul.appendChild(li);

        //Reinicio del formulario
        document.getElementById('task').value = "";
    } else {
                
        return showError("Please, add a task");
        


    }
}

// Marcar tarea completada 
var ulList = document.querySelector('ul');
ulList.addEventListener('click',function(event){

    if(event.target.tagName === "LI"){
        //Alternamos el nombre de la clase por el de "checked".
        event.target.classList.toggle('checked');

    }
},false);

//elimina el task del DOM
function deleteTask(e) {
    e.preventDefault();
    if (e.target.className === 'delete-task') {
        e.target.parentElement.remove();
        deleteTaskLocalStorage(e.target.parentElement.textContent);
    }
}

function showError(error){
    //se crea la etiqueta contenedora del mensaje
    const errorMessage = document.createElement('p');
    errorMessage.textContent = error;
    errorMessage.classList.add('error');
    //insertarlo en el contenido     
    container.appendChild(errorMessage);
    setTimeout(() => {
        //elimina la alerta despues de 3 segundos
        errorMessage.remove();
    }, 3000);
}
