import React, { useState } from 'react';
import TodoForm from './TodoForm';
import background from './img/x.png'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo, judge }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      {judge.map(() => (
          <ul className="todo-app__list" id="todo-list">
          {todos.map((todo, index) => (
          <li className="todo-app__item" key={index}>
            <div className="todo-app__checkbox">
              <input type="checkbox" key={todo.id} />
              <label key={todo.id}></label>
            </div>
            <h1 className="todo-app__item-detail" id="123">
              {todo.text}
            </h1>
              <img src={background} className="todo-app__item-x" alt="x" onClick={() => removeTodo(todo.id)} />
          </li>
        ))}
        </ul>
      ))}
    </>

    

   
  )
};

export default Todo;
