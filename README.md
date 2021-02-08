# Todo App

## Sobre el equipo
### Integrantes:
- Jorge Ivan Gutierrez Yañez
- Diana Yesenia Campos Tenorio
- Daniel Rodríguez López
- Anahi Camas Hernández 
- Damian Susano Martinez 

Equipo numero 20

_link video explicativo_ 

## Explicación
### Creación de nodos
_Se crea una función que crea los nodos para posteriormente ser llamada._ 

```javascript
// Función que crea los nodos 
function createNode(type) {
    var node = document.createElement(type);
    return node;
}
```
_Se obtiene el div principal para después añadir nuevos nodos y así crear la estructura HTML completa._
```javascript
// Crear y agregar nodos 
var app = document.getElementById('app');

var container = createNode('div');
container.className = "container";
app.appendChild(container);

var h1 =  createNode('h1');
var text = document.createTextNode("Todo APP");
container.appendChild(h1);
h1.appendChild(text);
```
Estructura html
![imgGitHub](https://github.com/trabucoaluca/To-Do-List/blob/master/img/estructurahtml.png)

Resultado en el navegador
![imgGitHub](https://github.com/trabucoaluca/To-Do-List/blob/master/img/interfazsinestilo.png)

### Agregar task
_pequeña explicación_
```javascript
algún codigo
```
### Completar task
_pequeña explicación_
```javascript
algún codigo
```
### Eliminar task
_pequeña explicación_
```javascript
algún codigo
```
### Estilo
_pequeña explicación_
```javascript
algún codigo
```
### LocalStorage
_pequeña explicación_
```javascript
algún codigo
```
## Resultado final 
Algun screen
![imgGitHub]()
Miralo por ti mismo
 _https://trabucoaluca.github.io/To-Do-List/_
 
 
