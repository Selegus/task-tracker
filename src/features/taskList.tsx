import type { Task } from "../models/Task";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

const TaskList = ({ tasks, onDelete, onComplete }: TaskListProps) => {
  if (!tasks) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => {
                onComplete(task.id);
              }}
            />
            <p>{task.description}</p>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
