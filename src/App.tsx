import { useState } from "react";
import TaskForm from "./features/taskForm";
import type { Task } from "./models/Task";
import TaskList from "./features/taskList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmitForm = (description: string) => {
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
  return (
    <div className="mx-auto max-w-fit">
      <h1 className="text-2xl">Task Tracker</h1>
      <TaskForm onSubmitForm={handleSubmitForm} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onComplete={handleCompleteTask}
      />
    </div>
  );
}

export default App;
