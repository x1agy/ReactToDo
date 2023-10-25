import React from "react";

function ShowAll( {setShowButtons} ){
    return(
        <button onClick={() => setShowButtons("")}>Show All tasks</button>
    )
}
export default ShowAll;