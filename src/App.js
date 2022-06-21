import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoBody from './components/TodoBody';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const baseUrl = 'https://robottodoapi.herokuapp.com/api/v1/todo/';

function App() {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const { data } = await axios.get(baseUrl);
    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="App">
      <div className="todo-container">
        <Header />
        <TodoForm todos={todos} getTodos={getTodos} />
        <TodoBody todos={todos} getTodos={getTodos} />
      </div>
    </div>
  );
}

export default App;
