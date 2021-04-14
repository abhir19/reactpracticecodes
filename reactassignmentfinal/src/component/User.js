import React from 'react';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';
import { useSelector } from "react-redux";
import './Login.css';
import Header from '../Header';
import FirstComponent from './Firstcomponent';
import {useHistory} from 'react-router-dom';

 const User = () => {
  const taskobj = useSelector((state) => state.todos.data);
  let history=useHistory();
  return (
    <>
       <Header />
      <div className="user">
        <h1>Name is:bahgyashree</h1>
        <h1>age is:26</h1>
        <h1>email:</h1>
      </div>
      <h1><strong>welcome user </strong></h1>
      <h1>Add your notes here, you have only notes left: {taskobj.length}</h1>
      <AddTodo />
      <TodoList />
     <button className="button" onClick={() => {history.push("/notes");}} >shows the notes</button>
    </>
  );
}





export default User;