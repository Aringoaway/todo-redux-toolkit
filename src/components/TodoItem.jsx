const TodoItem = ({ id, textInput, completed, removeTodo, toggleTodoComplete }) => {
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => toggleTodoComplete(id)}/>
            <label>{textInput}</label>
            <span className="delete" onClick={() => removeTodo(id)}>&times;</span>
        </li>
    )
}

export default TodoItem;