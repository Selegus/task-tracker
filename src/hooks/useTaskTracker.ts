import type { Task } from "@/models/Task";
import { useState } from "react";

function useTaskTracker() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (description: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList);
  };

  const handleCompleteTask = (id: string) => {
    const newList = tasks.map((task) => {
      return task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : task;
    });
    setTasks(newList);
  };

  return {
    tasks,
    handleAddTask,
    handleCompleteTask,
    handleDeleteTask,
  };
}

export default useTaskTracker;
