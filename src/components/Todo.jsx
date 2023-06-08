import React, { useState } from 'react';
// import './Todo.css';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [value, setValue] = useState([]);

  const handleStart = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (!todo) {
      return;
    } else {
      setValue([...value, { value: todo, id: Date.now() }]);
      setTodo('');
    }
  };

  const deleteTodo = (id) => {
    const updatedItems = value.filter((p, ind) => ind !== id);
    setValue(updatedItems);
  };

  const removeAll = () => {
    setValue([]);
  };

  return (
    <div className="todo-app">
      <h1 className="todo-heading">Todo</h1>

      <div className="todo-input">
        <input
          value={todo}
          type="text"
          placeholder="New todo item"
          onChange={handleStart}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={removeAll}>Remove All</button>
      </div>

      <ul className="todo-list">
        {value.map((p, ind) => (
          <li key={p.id}>
            <p>{p.value}</p>
            <button  onClick={() => deleteTodo(ind)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
