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
    <form onSubmit={handleSubmitForm}>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default TaskForm;
