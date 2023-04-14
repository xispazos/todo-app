import { v4 as uuid } from 'uuid';
export class Todo {

    /**
     * 
     * @param {String} description Crea una nueva instancia
     */
    
    
    constructor(description){


        this.id = uuid();
        this.description = description 

            if (!description) throw new error ('Descripción necesaria');
        
        this.done = false;
        this.createdAt = new Date ();
    }

}
