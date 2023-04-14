import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./";

let element;
/**
 * 
 * @param {String} elemmtId 
 * @param {Todo} todos 
 */

export const renderTodos = ( elementId, todos = [] ) => {
    if (!element) 
        element = document.querySelector( elementId );

    if (!element) throw new Error ('Element $(elementId) Not found');
        
    
    if (!todos) throw new error ('Debes mandar algún elemento');

  
    element.innerHTML = "";

    todos.forEach(todo => {
        element.append( createTodoHTML(todo) )
    });

}