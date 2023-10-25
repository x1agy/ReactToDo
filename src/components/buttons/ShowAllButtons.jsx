import React from "react";
import ShowAll from "./allButtons/ShowAll";
import ShowCompleted from "./allButtons/ShowCompleted";
import ShowUncompleted from "./allButtons/ShowUncompleted";

function ShowAllButtons( {setShowButtons} ){

    return(
        <div className="allButtons">
            <ShowAll 
                setShowButtons={setShowButtons}
            />
            <ShowUncompleted 
                setShowButtons={setShowButtons}
            />
            <ShowCompleted 
                setShowButtons={setShowButtons}
            />
        </div>
    );
}

export default ShowAllButtons