import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0)
    return (
      <h1 className="text-white font-bold text-4xl text-center bg-cyan-900 bg-opacity-50 rounded-xl p-3 max-w-md mx-auto">
        No hay tareas aún
      </h1>
    );

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
