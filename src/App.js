import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoBody from "./components/TodoBody";

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <Header />
        <TodoForm />
        <TodoBody />
      </div>
    </div>
  );
}

export default App;
