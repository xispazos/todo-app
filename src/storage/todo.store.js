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
    loadStore();
    console.log('Initstore');
}


const loadStore = () => {
    if(!localStorage.getItem('state')) return;

    console.log(JSON.parse( localStorage.getItem('state') ));
   
}

const saveStateLocalStorage = ( ) => {
    
    localStorage.setItem('state', JSON.stringify(state));
    //Método del objeto JSON que esta global en nuestro navegador web, que en este caso
    //va a serializar en un string, lo que sea que metamos entre parentesis ()
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
    
    saveStateLocalStorage();


}
const toogleTodo = ( todoid ) => {

    state.todos = state.todos.map( todo =>{

        if(todo.id === todoid) {
            todo.done = !todo.done;
        }

        return todo;

        
});

    saveStateLocalStorage();

}

const deleteTodo = ( todoid  ) => {

    state.todos = state.todos.filter ( todo => todo.id !== todoid );
    
    saveStateLocalStorage();
}

const deleteCompleted = ( ) => {

    state.todos = state.todos.filter ( todo =>  todo.done );
    
    saveStateLocalStorage();

}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    
    state.filter = newFilter;
    saveStateLocalStorage();
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
