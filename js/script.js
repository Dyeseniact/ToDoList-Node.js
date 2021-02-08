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

document.body.appendChild(app);
console.log(app)