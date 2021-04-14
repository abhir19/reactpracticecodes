import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import cuid from "cuid";
import './AddTodo.css';
const AddTodo = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();
  function handleInputChange(e) {
    setTasks(e.target.value);
    console.log(tasks);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(addTodo({ task: tasks, id: cuid() }));
    e.target.userInput.value = "";
    console.log(tasks);
  }
  return (
    <form onSubmit={handleFormSubmit}>
    <div className = "main_div">
            <div className >
                <br/>
                <h1> Create notes</h1>
                <br/>
                <input type ="text" 
                placeholder = "write here"
        name='userInput'
        onChange={(e) => handleInputChange(e)}
      />
      <button className ="button1"type='submit'><b>+</b></button>
      </div>
      </div>
    </form>
  );
};

export default AddTodo;
