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

  return (
    <div className="App">
      <label>
        <input value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
      </label>

      <ul>
        {
          todos.map(todo =>
          <li key={todo.id}>
            <input type="checkbox"/>
            <span>{todo.textInput}</span>
            <span style={{color: 'red'}}>&times;</span>
          </li>
          )
        }
      </ul>

    </div>
  );
}

export default App;
