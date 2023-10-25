import React from "react";
import ToDo from "./todo/ToDoTask";

function ShowToDo( {filteredToDos, completeTask, deleteTask} ){
    return <div className="allTasks">
        {filteredToDos.length ? filteredToDos.map(item => 
        <ToDo 
            toDoTask={item}
            completeToDo={completeTask}
            deleteToDo={deleteTask}
        />) : <h2>You have no ToDos</h2>}
    </div>
}
export default ShowToDo