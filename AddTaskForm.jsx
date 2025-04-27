import { useState } from "react";

function AddTaskForm({ addTask }) {
const [inputValue, setInputValue] = useState("");
const [error, setError] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
    setError("Por favor, escribe una tarea");
    return;
    }
    addTask(inputValue.trim());
    setInputValue("");
    setError("");
};

return (
    <form onSubmit={handleSubmit} className="add-task-form">
    <input 
        type="text"
        placeholder="Nueva tarea..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
    />
    <button type="submit">Agregar</button>
    {error && <p className="error">{error}</p>}
    </form>
);
}

export default AddTaskForm;