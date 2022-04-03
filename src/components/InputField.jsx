const InputField = ({ textInput,  handleInput, handleSubmit }) => {
    return (
        <label>
            <input placeholder="Add todo" type="text" value={textInput} onChange={(e) => handleInput(e.target.value)}/>
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    )
}

export default InputField;