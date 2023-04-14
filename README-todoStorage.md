## Código con anotaciones

import  { Todo } from '../todos/models/todo.model';

const Filters = {

    All: "all",
    Completed: "Completed",
    Pending: "Pending"
}

const state = {

        todos: [
            new Todo ("Piedra del alma"),
            new Todo ("Piedra del inifinito"),
            new Todo ("Piedra del tiempo"),
        ],
        filter: Filters.All


    }


const initStore = () => {

    console.log("InitStore");
    console.log(state);
}

const loadStore = () => {
    throw new Error ('Not implemented');

}

const getTodos = ( filter = Filters.All ) => {

    switch (filter) {
        
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter( todo => todo.done ) 
            
## // El filter va a regresar un arreglo, por eso se puede hacer de esta manera

## La condición del filter en este caso, es que voy a tener un TODO que voy a regresarlo si el todo.done esta en true.

## "return state.todos.filter (todo => todo.done) como espera una condición booleana de true o false no se pone nada (En otros casos sería loQueSea === true // loQueSea === false)

        case Filters.Pending:
                return state.todos.filter( todo => !todo.done ); 

## En este caso el !todo.done siginifica que ante la negación del donde, va a retornar un false. También se podría poner "todo => todos.done === false"

        default:
            throw new Error ('Option $( filter ) is not valid');

## Puede que nos manden una condición que no este definida más arriba. En ese caso se crea ese error, para decir que no es valida, porque falta ese filter

}
/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {

   if ( !description ) throw new Error ("Description is required"); (1)
   
   state.todos.push ( new Todo (description) ); (2)

   ## 1. Mensaje error si no mandan un valor
   ## 2. Si tengo un valor state.loQueSea. push (new loQueSea (description) )
    
    


}

## // Este es para hacer una actualización, y expandir la app todo lo que se desee
const toogleTodo = ( todoId ) => {

    throw new Error ('Not implemented');

}

const deleteTodo = ( ) => {

    throw new Error ('Not implemented');

}

const deleteCompleted = ( ) => {

    throw new Error ('Not implemented');

}

const setFilter = ( newFilter = Filters.All ) => {

    throw new Error ('Not implemented');

}

const getCurrentFilter = ( ) => {

    throw new Error ('Not implemented');

}




export default {

    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toogleTodo,
}
