import  { Todo } from '../todos/models/todo.model.js';

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
            new Todo ("Piedra del poder"),
            new Todo ("Piedra de la tempestad"),
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
            return state.todos.filter( todo => todo.done );
        
        case Filters.Pending:
                return state.todos.filter( todo => !todo.done ); 

        default:
            throw new Error ('Option $( filter ) is not valid');

    }

}
/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {

    if ( !description ) throw new Error ("Description is required");
    state.todos.push ( new Todo (description) );


}
const toogleTodo = ( todoid ) => {

    state.todos = state.todos.map( todo =>{

        if(todo.id === todoid) {
            todo.done = !todo.done;
        }

        return todo;

    })

}

const deleteTodo = ( todoid  ) => {

    state.todos = state.todos.filter ( todo => todo.id !== todoid );

}

const deleteCompleted = ( ) => {

    state.todos = state.todos.filter ( todo =>  todo.done );

}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    
    state.filter = newFilter;

}

const getCurrentFilter = ( ) => {

    return state.filter;

}




export default {

    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toogleTodo,
}
