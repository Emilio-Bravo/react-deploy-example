import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TasksForm() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-slate-800 p-10 mb-4"
      >
        <h1 className="text-3xl font-bold text-white mb-3">Crear tarea</h1>
        <input
          type="text"
          placeholder="Título de la terea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 focus:outline-none focus:border-indigo-600 transition duration-200 border-2"
          autoFocus
          required
        />
        <textarea
          placeholder="Descripción de la tarea"
          cols="30"
          rows="5"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2 focus:outline-none focus:border-indigo-600 transition duration-200 border-2"
          value={description}
          required
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TasksForm;
