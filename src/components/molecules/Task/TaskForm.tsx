import Button from "@/components/atoms/Button/Button";
import Textarea from "@/components/atoms/Textarea/Textarea";
import { TaskPriority } from "@/types/task";

interface Props {
    title: string;
    description: string;
    priority: TaskPriority;
    onDescriptionChange: (val: string) => void;
    onSubmit: () => void;
    onCancel: () => void;
}

const TaskForm = ({
    description,
    onDescriptionChange,
    onSubmit,
}: Props) => (
    <>
        <Textarea value={description} onChange={(e) => onDescriptionChange(e.target.value)} placeholder="What to needs to be done?" />
        <div className="flex justify-end gap-2">
            <Button onClick={onSubmit}>Create</Button>
        </div>
    </>
);

export default TaskForm;