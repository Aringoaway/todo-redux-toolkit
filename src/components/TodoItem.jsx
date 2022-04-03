import { useDispatch } from "react-redux";
import  { removeTodo, toggleTodoComplete } from "../store/todoSlice";

const TodoItem = ({ id, textInput, completed }) => {
    const dispatch = useDispatch();
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoComplete({id}))}/>
            <label>{textInput}</label>
            <span className="delete" onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        </li>
    )
}

export default TodoItem;