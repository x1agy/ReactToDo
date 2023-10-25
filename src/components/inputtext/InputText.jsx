import React from "react";

function Input({setInputText, addNewToDo, inputText}){

    function changeValue(e){
        setInputText(e.target.value)
    }
    function makeNewToDo(e){
        e.preventDefault();
        addNewToDo()
        setInputText("")
    }
    return(
        <form action="" className="inputForm" onSubmit={makeNewToDo}>
            <input className="mainInput" type="text"
            onChange={changeValue}
            value={inputText}
            />
            <input className="mainInputButton" type="submit" value="Make new task"/>
        </form>
    );
}
export default Input;