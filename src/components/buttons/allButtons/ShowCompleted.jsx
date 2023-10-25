import React from "react";

function ShowCompleted( {setShowButtons} ){
    return(
        <button onClick={() => setShowButtons(true)}>Show Completed tasks</button>
    )
}
export default ShowCompleted;