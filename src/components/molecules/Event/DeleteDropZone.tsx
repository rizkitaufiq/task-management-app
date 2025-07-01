"use client";

import { useTaskStore } from "@/store/taskStore";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const DeleteDropZone = ({ children }: Props) => {
    const deleteTask = useTaskStore((s) => s.deleteTask);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("text/plain");
        const confirm = window.confirm("Delete this task?");
        if (confirm) {
            deleteTask(taskId);
        }
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="flex items-center justify-center bg-red-300 font-bold opacity-50 w-full lg:h-[25vh] mb-4 text-center p-4 border-2 border-dashed border-red-400 text-red-500 lg:mt-6 rounded hover:bg-red-50 transition"
        >
            {children}
        </div>
    );
};

export default DeleteDropZone;