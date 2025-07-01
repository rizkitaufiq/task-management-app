"use client";

import { useTaskStore } from "@/store/taskStore";

const DeleteDropZone = () => {
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
            className="bg-red-300 font-bold opacity-50 w-full text-center p-4 border-2 border-dashed border-red-400 text-red-500 mt-6 rounded hover:bg-red-50 transition"
        >
            🗑 Drop here to delete task
        </div>
    );
};

export default DeleteDropZone;