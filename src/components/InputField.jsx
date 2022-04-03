const InputField = ({ textInput,  handleInput, handleSubmit }) => {
    return (
        <label>
            <input type="text" value={textInput} onChange={(e) => handleInput(e.target.value)}/>
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    )
}

export default InputField;