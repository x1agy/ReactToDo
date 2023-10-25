import React from "react";

function ToDo({deleteToDo, completeToDo, toDoTask}){

    return(
        <div className="singleTask">
            <input type="checkbox" onChange={() => completeToDo(toDoTask.id)} checked={toDoTask.isCompleted ? true : false}/>
            <h2
                onClick={() => completeToDo(toDoTask.id)}
                style={{
                    textDecoration: toDoTask.isCompleted ? "line-through" : null
                }}
            >{toDoTask.body}</h2>
            <h3 onClick={() => deleteToDo(toDoTask.id)}>X</h3>
        </div>
    )

}
export default ToDo;