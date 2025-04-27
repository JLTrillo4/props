function Task({ task, deleteTask, toggleTaskCompletion }) {
    return (
    <div className="task">
        <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
        {task.text}
        </span>
        <div className="task-buttons">
        <button 
            onClick={() => toggleTaskCompletion(task.id)}
            className={task.completed ? "uncomplete" : "complete"}
        >
            {task.completed ? "Desmarcar" : "Completar"}
        </button>
        <button 
            onClick={() => deleteTask(task.id)}
            className="delete"
        >
            Eliminar
        </button>
        </div>
        </div>
    );
}

export default Task;