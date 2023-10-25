import React from "react";

function Input({setInputText, addNewToDo}){

    function changeValue(e){
        setInputText(e.target.value)
    }
    function makeNewToDo(e){
        e.preventDefault();
        addNewToDo()
        e.target.value = null;
    }
    return(
        <form action="" className="inputForm" onSubmit={makeNewToDo}>
            <input className="mainInput" type="text"
            onChange={changeValue}
            />
            <input className="mainInputButton" type="submit" value="Make new task"/>
        </form>
    );
}
export default Input;