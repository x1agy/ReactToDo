import React from "react";

function Input({setInputText, addNewToDo}){

    function changeValue(e){
        setInputText(e.target.value)
    }
    function makeNewToDo(e){
        e.preventDefault();
        addNewToDo()
    }
    return(
        <form action="" onSubmit={makeNewToDo}>
            <input type="text"
            onChange={changeValue}
            />
            <input type="submit"/>
        </form>
    );
}
export default Input;