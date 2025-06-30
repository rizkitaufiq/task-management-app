import { useState } from "react";
import { Task, TaskProgress } from "@/types/task";
import { generateId } from "@/utils/generateId";
import { useTaskStore } from "@/store/taskStore";

export function useTaskForm(progress: TaskProgress) {
  const [title, setTitle] = useState("");
  const { addTask } = useTaskStore();

  const handleCreate = () => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: generateId(),
      title,
      description: "Simple Task Decription",
      progress,
      priority: "Medium",
    };

    addTask(newTask);
    setTitle(""); 
  };

  return {
    title,
    setTitle,
    handleCreate,
  };
}