import { useState } from "react";

import './App.css';

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
      <label>
        <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
      </label>

      <ul>
        {
          todos.map(todo =>
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoComplete(todo.id)}/>
            <span>{todo.textInput}</span>
            <span className="delete" onClick={() => removeTodo(todo.id)}>&times;</span>
          </li>
          )
        }
      </ul>

    </div>
  );
}

export default App;
