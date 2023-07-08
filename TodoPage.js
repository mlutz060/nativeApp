import React from 'react';
import { ToDo, FormTodo } from 'App.js';
import Timer from 'Timer.js';


const ToDoPage = () => {

    return(
        <>
            
            <FormTodo addTodo={addTodo} />
            <ToDo key={index} index={index} todo={todo}/>
            <Timer />
        </>
    )
    };

export default ToDoPage;