import React from "react";

function ShowUncompleted( {setShowButtons} ){
    return(
        <button onClick={() => setShowButtons(false)}>Show uncompleted tasks</button>
    )
}
export default ShowUncompleted;