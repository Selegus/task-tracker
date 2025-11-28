import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface TaskFormProps {
  onSubmitForm: (description: string) => void;
}

const TaskForm = ({ onSubmitForm }: TaskFormProps) => {
  const [description, setDescription] = useState("");

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitForm(description);
  };

  return (
    <form onSubmit={handleSubmitForm} className="flex gap-2 my-2">
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit" variant="outline">
        Submit
      </Button>
    </form>
  );
};

export default TaskForm;
