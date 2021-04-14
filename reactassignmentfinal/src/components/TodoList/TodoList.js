import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import './TodoList.css';

const TodoList = () => {
  const taskobj = useSelector((state) => state.todos.data);
  const taskItems = taskobj.map((task) => {
    return <TodoItem task={task} key={task.id} />;
  });

  return <div className="align">{taskItems}</div>;
};

export default TodoList;
