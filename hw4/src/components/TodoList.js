import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Down from './Down'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [judge, setJudge] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [...todos, todo];
    const newJudge = [1] ;

    setTodos(newTodos);
    setJudge(newJudge);
    setCount(function(prev) {
      return prev+1 ;
    })
  };


  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
    setCount(function(prev) {
      return prev-1 ;
    })
    if(count === 1) {
      judge.length = 0 ;
    }
  };

  return (

    <div id="root" className="todo-app__root">
      <header className="todo-app__header">
        <h1 className="todo-app__title">todos</h1>
      </header>
      <section className="todo-app__main" id="main">
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          removeTodo={removeTodo}
          judge={judge}
        />
      </section>
      <Down judge={judge} count={count} />
    </div>

  );
}

export default TodoList;
