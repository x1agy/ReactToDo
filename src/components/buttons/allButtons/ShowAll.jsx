import React from "react";

function ShowAll( {setShowButtons} ){
    let style = true;
    return(
        <button onClick={() => setShowButtons("")}>Show All tasks</button>
    )
}
export default ShowAll;