import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                textInput: action.payload.textInput,
                completed: false,
            });
        },
        removeTodo(state, action) {

        },
        toggleTodoComplete(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;