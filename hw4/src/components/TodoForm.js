import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');


  const handleChange = e => {
    setInput(e.target.value);
  };
  
  const handleKey = e => {
    e.preventDefault();
    if(e.key === "Enter") {
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });
      setInput('');
    }
  }

  return (
    <input type="text" value={input} onChange={handleChange} onKeyUp={handleKey} className="todo-app__input" placeholder="What needs to be done?" id="input"/>
    )
}

export default TodoForm;
