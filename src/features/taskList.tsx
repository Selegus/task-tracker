import { Item } from "@/components/ui/item";
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
    <div className="flex flex-col gap-2">
      {tasks.map((task) => {
        return (
          <Item key={task.id} variant="outline">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => {
                onComplete(task.id);
              }}
            />
            <p>{task.description}</p>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </Item>
        );
      })}
    </div>
  );
};

export default TaskList;
