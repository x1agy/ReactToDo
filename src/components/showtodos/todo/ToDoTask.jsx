import React from "react";

function ToDo({deleteToDo, completeToDo, toDoTask}){

    return(
        <div>
            <input type="checkbox" onChange={() => completeToDo(toDoTask.id)} checked={toDoTask.isCompleted ? true : false}/>
            <h2
                style={{
                    textDecoration: toDoTask.isCompleted ? "line-through" : null
                }}
            >{toDoTask.body}</h2>
            <h3 onClick={() => deleteToDo(toDoTask.id)}>X</h3>
        </div>
    )

}
export default ToDo;