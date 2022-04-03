import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "./store/todoSlice";

import TodoList from "./components/TodoList";
import './App.css';
import InputField from "./components/InputField";

function App() {
  const [textInput, setTextInput] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({textInput}))
    setTextInput('');
  };


  return (
    <div className="App">
        <InputField textInput={textInput} handleInput={setTextInput} handleSubmit={addTask} />

      <TodoList/>

    </div>
  );
}

export default App;
