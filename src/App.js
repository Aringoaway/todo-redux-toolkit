import { useState } from "react";
import TodoList from "./components/TodoList";
import './App.css';
import InputField from "./components/InputField";

function App() {
  const [todos, setTodos] = useState([]);
  const [textInput, setTextInput] = useState('');

  const addTodo = () => {
    if (textInput.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          textInput,
          completed: false,
        }
      ])
      setTextInput('');
    }
  }

  const toggleTodoComplete = (todoId) => {
    setTodos(
        todos.map(
            todo => {
              if(todo.id !== todoId) return todo;

              return {
                ...todo,
                completed: !todo.completed,
              }
            }
        )
    )
  }

  const removeTodo = (todoId) => {
      setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
        <InputField textInput={textInput} handleInput={setTextInput} handleSubmit={addTodo} />

      <TodoList todos={todos} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo}/>

    </div>
  );
}

export default App;
