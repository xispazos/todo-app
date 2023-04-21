import html from './app.html?raw';
import todoStore from '../storage/todo.store';
import { renderTodos } from './use-cases';

const ElementsIDs = {

    TodoList: ".todo-list",
    NewTodoInput: ".new-todo",
    
}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const displayTodos = () => {

        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos ( ElementsIDs.TodoList, todos );
    } 

//Cuando la función App() se llama
( ()=> {

    const app = document.createElement ('div');
    app.innerHTML = html;
    document.querySelector(elementId).append( app );
    displayTodos();

})();



// Referencias HTML:

const newDescriptionInput = document.querySelector (ElementsIDs.NewTodoInput);
const todoListUL = document.querySelector (ElementsIDs.TodoList);

// Listeners:

/** El ".trim" quita los espacios delante y detrás */

newDescriptionInput.addEventListener ('keyup', (event) => {
   if (event.keyCode !== 13 ) return; // Solo va continuar enter (Su key code es 13) sino no continua
   if (event.target.value.trim ().length === 0) return;  // Evaluo si alguien escribió algo
   todoStore.addTodo (event.target.value);
   displayTodos(); //Aquí llamas a randerizar para que funcione el .addEventListener
   event.target.value = []; // Así haces que se borre del cajetin de creación de tarea */
});



todoListUL.addEventListener('click', (event) => {
    
    const element = event.target.closest ('[data-id]');  
    todoStore.toogleTodo(element.getAttribute ('data-id'));
    displayTodos();
     
});

todoListUL.addEventListener('click', (event) => {
    
   const destroyIdElement = event.target.className === 'destroy'; /* (1) */
   const element = event.target.closest ('[data-id]');/* (2) */
   if (!element || !destroyIdElement ) return; /*(3) */
   todoStore.deleteTodo (element.getAttribute ('data-id')); /*(4) */
   displayTodos();
   
   
    /**Para eliminar un TODO, es necesario saber si el id, en este caso destroy es una clase, de ahí que hagamos la opción (1) */
    /**En la (2) volvemosa poner element para que quede constancia, aunque no es necesario ponerlo, porque esta más arriba */
    /**En la (3) hay que poner un if para que en caso no este el element en este caso, y el destroyIdElement lance un return */
    /**En (4) hay que apuntar al todoStore, donde tenemos todos los elementos, pero en este caso añadiendo el deleteTodo, ya que queremos borrar
     * un todo. ES IMPORTANTE QUE TE QUEDES CON ESA LÍNEA DE CÓDIGO EN TU CABEZA 
    */
     
});




}





