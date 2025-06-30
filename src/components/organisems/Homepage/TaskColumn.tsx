"use client";

import { useState, useRef } from "react";

import { Task } from "@/types/task";
import TaskCard from "@/components/molecules/Task/TaskCard";
import { useTaskForm } from "@/hooks/useTaskForm";
import { useClickOutside } from "@/hooks/useClickOutside";

interface Props {
    titleTask: string;
    progress: "To Do" | "In Progress" | "Done";
    tasks: Task[];
    bgColor: string;
}

export default function TaskColumn({ titleTask, progress, bgColor, tasks }: Props) {
    const [open, setOpen] = useState(false);
    const formRef = useRef<HTMLDivElement | null>(null);
    const { title, setTitle, handleCreate } = useTaskForm(progress);

    useClickOutside(formRef, () => setOpen(false));

    return (
        <div className="w-1/3 min-w-[300px]">
            <div className="bg-gray-100 p-4 rounded mb-4">
                <div className="flex justify-between mb-2 px-8">
                    <h2 className={`text-sm p-1 opacity-60 ${bgColor}`}>{titleTask}</h2>
                </div>

                {tasks.map((task) => (
                    <TaskCard key={task.id}
                        task={task}
                    />
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
                    <div ref={formRef} className="relative w-full mb-4">
                        <textarea
                            className="w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none p-2 rounded text-sm mb-2"
                            rows={4}
                            placeholder="What needs to be done?"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => {
                                    handleCreate();
                                    setOpen(false);
                                }}
                                className="absolute bottom-6 lg:w-[15vh] right-2 bg-blue-600 text-white px-3 py-1 text-sm rounded"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}