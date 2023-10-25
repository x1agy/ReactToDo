import React from "react";

function FindToDo( {setFilterWord} ){

    function newInputWord(e){
        setFilterWord(e.target.value.toLowerCase())
    }

    return(
        <input type="text" placeholder="Find your task" onChange={newInputWord} />
    )
}
export default FindToDo