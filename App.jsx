import { useState, useEffect } from "react";
import AddTaskForm from "./AddTaskForm";
import Task from "./Task";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas guardadas al iniciar
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Guardar tareas cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Ordenar: incompletadas primero
  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />
      <div className="task-list">
        {sortedTasks.map(task => (
          <Task 
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
