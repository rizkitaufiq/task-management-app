"use client";

import { Task, TaskPriority } from "@/types/task";
import { useEffect, useState } from "react";
import { useTaskStore } from "@/store/taskStore";
import { generateId } from "@/utils/generateId";

interface Props {
    open: boolean;
    onClose: () => void;
    editTask?: Task;
}

export default function TaskModal({ open, onClose, editTask }: Props) {
    const { addTask } = useTaskStore();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<TaskPriority>("Medium");

    useEffect(() => {
        if (editTask) {
            setTitle(editTask.title);
            setDescription(editTask.description);
            setPriority(editTask.priority);
        } else {
            setTitle("");
            setDescription("");
            setPriority("Medium");
        }
    }, [editTask]);

    const handleSubmit = () => {
        const task: Task = {
            id: editTask?.id || generateId(),
            title,
            description,
            progress: editTask?.progress || "To Do",
            priority,
        };
        if (editTask) {
            // updateTask(task);
        } else {
            addTask(task);
        }
        onClose();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded w-[400px] space-y-4">
                <h2 className="text-xl font-bold">{editTask ? "Edit Task" : "Create Task"}</h2>
                <input className="border w-full p-2" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <textarea className="border w-full p-2" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <select className="border w-full p-2" value={priority} onChange={(e) => setPriority(e.target.value as TaskPriority)}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 border">Cancel</button>
                    <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">{editTask ? "Update" : "Create"}</button>
                </div>
            </div>
        </div>
    );
}