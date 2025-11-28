import { Item } from "@/components/ui/item";
import type { Task } from "../models/Task";
import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <Item
            key={task.id}
            variant="outline"
            className="flex justify-between"
          >
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => {
                  onComplete(task.id);
                }}
              />
              <p className="text-lg">{task.description}</p>
            </div>

            <Button
              variant="destructive"
              size="icon"
              onClick={() => onDelete(task.id)}
            >
              <TrashIcon />
            </Button>
          </Item>
        );
      })}
    </div>
  );
};

export default TaskList;
