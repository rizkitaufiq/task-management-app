"use client";

import { useState, useRef } from "react";

import { Task } from "@/types/task";
import { useTaskForm } from "@/hooks/useTaskForm";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useTaskStore } from "@/store/taskStore";

import TaskCard from "@/components/molecules/Task/TaskCard";
import TaskDetail from "@/components/molecules/Task/TaskDetail";
import TaskForm from "@/components/molecules/Task/TaskForm";

interface Props {
    titleTask: string;
    progress: "To Do" | "In Progress" | "Done";
    tasks: Task[];
    bgColor: string;
}

export default function TaskColumn({ titleTask, progress, bgColor, tasks }: Props) {

    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const { title, setTitle, handleCreate } = useTaskForm(progress);

    const formRef = useRef<HTMLDivElement | null>(null);
    const moveTask = useTaskStore((s) => s.moveTask);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("text/plain");
        moveTask(taskId, progress);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const toggleDetail = (id: string) =>
        setSelectedId((prev) => (prev === id ? null : id));

    useClickOutside(formRef, () => setOpen(false));

    return (
        <section className="w-1/3 min-w-[300px]"
            onDrop={handleDrop}
            onDragOver={handleDragOver}>
            <div className="bg-gray-100 p-4 rounded mb-4">
                <header className="flex justify-between mb-2 px-8">
                    <div className="flex gap-2 items-center text-gray-500">
                        <h2 className={`text-sm p-1 opacity-60 ${bgColor}`}>{titleTask}</h2>
                        {tasks.length}
                    </div>
                </header>

                {tasks.map((task) => (
                    <section key={task.id}>
                        <TaskCard
                            task={task}
                            isOpen={selectedId === task.id}
                            onToggle={() => toggleDetail(task.id)}
                        />
                        {selectedId === task.id && <TaskDetail task={task} />}
                    </section>
                ))}

                {!open && (
                    <button
                        onClick={() => setOpen(true)}
                        className="text-gray-400 text-sm"
                    >
                        + Create
                    </button>
                )}

                {open && (
                    <TaskForm
                        title={title}
                        setTitle={setTitle}
                        onCreate={handleCreate}
                        onClose={() => setOpen(false)}
                    />
                )}

            </div>
        </section>
    );
}