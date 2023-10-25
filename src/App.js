import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import ShowToDo from "./components/showtodos/ShowToDo"
import Input from "./components/inputtext/InputText";
import FindToDo from "./components/findtodo/FindToDo";
import ShowAllButtons from "./components/buttons/ShowAllButtons";

function App() {
  const [allToDos, setAllToDos] = useState([]);
  const [filterWord, setFilterWord] = useState("");
  const [inputText, setInputText] = useState("");
  const [filteredToDos, setFilteredToDos] = useState([]);
  const [showButtonsValue, setShowButtons] = useState("");

  function changeInputTextValue(e) {
    setInputText(e);
  }

  function addNewToDo() {
    setAllToDos([...allToDos, {
      body: inputText,
      isCompleted: false,
      id: Math.random()
    }]);
  }

  function completeTask(id) {
    const updatedToDos = allToDos.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setAllToDos(updatedToDos);
  }

  function deleteTask(id){
    const newToDOs = allToDos.filter( item => item.id !== id)
    setAllToDos(newToDOs)
  }

  useEffect(() => {
    const filtered = allToDos.filter(item => {
      if(showButtonsValue === true){
        if((item.body.indexOf(filterWord) !== -1) && item.isCompleted === true){
          return true
        }
        else return false
      }
      else if(showButtonsValue === false){
        if((item.body.indexOf(filterWord) !== -1) && item.isCompleted === false){
          return true
        }
        else return false
      }
      else {
          if(item.body.indexOf(filterWord) !== -1){
          return true
        }
      }
      return false
    });
    setFilteredToDos(filtered);
  }, [filterWord, allToDos, showButtonsValue]);

  return (
    <div className="App" key={"sdfsd"}>
      <Header />
      <FindToDo 
        setFilterWord={setFilterWord}
      />
      <Input 
        setInputText={changeInputTextValue}
        addNewToDo={addNewToDo}
      />
      <ShowAllButtons 
        setShowButtons={setShowButtons}
      />
      <ShowToDo 
        filteredToDos={filteredToDos}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
