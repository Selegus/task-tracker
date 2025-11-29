import TaskForm from "./features/taskForm";
import TaskList from "./features/taskList";
import useTaskTracker from "./hooks/useTaskTracker";

function App() {
  const { tasks, handleAddTask, handleCompleteTask, handleDeleteTask } =
    useTaskTracker();

  return (
    <div className="mx-auto max-w-fit">
      <h1 className="text-2xl">Task Tracker</h1>
      <TaskForm onSubmitForm={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onComplete={handleCompleteTask}
      />
    </div>
  );
}

export default App;
