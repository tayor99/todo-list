import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { baseUrl } from '../App';

const TodoBody = ({ todos, getTodos }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleDelete = async (id) => {
    await axios.delete(baseUrl + id + '/');
    getTodos();
  };

  console.log(selected);

  const completeTodo = async (id, title, decriptions) => {
    setSelected(id);
    if (selected === id) {
      setIsCompleted(!isCompleted);
      await axios.put(baseUrl + id + '/', {
        title: title,
        decriptions: decriptions,
        completed: isCompleted,
      });
    }
  };

  return (
    <div className="body-container">
      {todos.map((todo, index) => {
        return (
          <React.Fragment key={todo.id}>
            <div className="todo-details">
              <div className="todo-list">
                <h4 className="title">{todo?.title}</h4>
                <p className="description">{todo?.decriptions}</p>
              </div>
              <div className="todo-action">
                <input
                  className="todo-check"
                  checked={selected === todo.id}
                  onChange={() =>
                    completeTodo(todo?.id, todo?.title, todo?.decriptions)
                  }
                  type="checkbox"
                />
                <AiOutlineDelete
                  className="todo-delete"
                  onClick={() => handleDelete(todo?.id)}
                />
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TodoBody;
