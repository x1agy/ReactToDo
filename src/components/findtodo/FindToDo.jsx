import React from "react";

function FindToDo( {setFilterWord} ){

    function newInputWord(e){
        setFilterWord(e.target.value)
    }

    return(
        <input type="text" onChange={newInputWord} />
    )
}
export default FindToDo