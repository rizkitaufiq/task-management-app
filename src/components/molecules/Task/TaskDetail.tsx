"use client";

import { IconCheck, IconUp, IconDown, IconEqual } from "@/components/atoms/Icon/Icon";
import { ReactNode, useState, useEffect, useRef } from "react";
import { Task, TaskPriority } from "@/types/task";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useTaskStore } from "@/store/taskStore";

interface Props {
    task: Task
}

const getPriorityIcon = (priority: string): ReactNode => {
    switch (priority) {
        case "Low":
            return <IconDown />;
        case "High":
            return <IconUp />;
        case "Medium":
            return <IconEqual />;
    }
};

const TaskDetail = ({ task }: Props) => {
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [isEditingPriority, setIsEditingPriority] = useState(false);

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [priority, setPriority] = useState<TaskPriority>(task.priority);

    const ref = useRef<HTMLDivElement | null>(null);
    const updateTask = useTaskStore((s) => s.updateTask);

    useClickOutside(ref, () => {
        if (isEditingTitle || isEditingDescription || isEditingPriority) {
            updateTask(task.id, { title, description, priority });
            setIsEditingTitle(false);
            setIsEditingDescription(false);
            setIsEditingPriority(false);
        }
    });

    useEffect(() => {
        setTitle(task.title);
        setDescription(task.description);
        setPriority(task.priority);
    }, [task]);

    return (
        <section ref={ref} className="bg-white border border-gray-500 rounded p-3 text-sm mb-2 animate-fade">
            <header className="flex px-2 lg:px-5 mt-3 mb-4 lg:mb-6 gap-1">
                <IconCheck className="bg-blue-500 text-white" />
                <p className="text-xs text-gray-500">{task.id.toUpperCase()}</p>
            </header>

            <label className="mb-4">
                {isEditingTitle ? (
                    <input
                        className="border p-1 mt-1 w-full text-sm rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                    />
                ) : (
                    <div
                        onDoubleClick={() => setIsEditingTitle(true)}
                        className="cursor-pointer text-gray-800 mt-1 mb-4 lg:mb-6 gap-1"
                    >
                        <h3 className="text-sm text-gray-700 font-semibold">{task.title}</h3>
                    </div>
                )}
            </label>

            <div className="mb-4">
                <h4 className="text-gray-700 font-semibold mb-1">
                    Description
                </h4>
                {isEditingDescription ? (
                    <input
                        className="border p-1 mt-1 w-full text-sm rounded"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        autoFocus
                    />
                ) : (
                    <div
                        onDoubleClick={() => setIsEditingDescription(true)}
                        className="cursor-pointer text-gray-800 mt-1 mb-4 lg:mb-6 gap-1"
                    >
                        <p>{task.description}</p>
                    </div>
                )}

            </div>

            <p className="text-gray-700 font-semibold mb-2">
                Priority
            </p>

            <label className="flex items-center gap-1 mb-3">
                {getPriorityIcon(task.priority)}
                {isEditingPriority ? (
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value as TaskPriority)}
                        onBlur={() => setIsEditingPriority(false)}
                        autoFocus
                        className="w-full border px-2 py-1 rounded text-sm mt-1"
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                ) : (
                    <p onDoubleClick={() => setIsEditingPriority(true)}
                        className="mt-1 cursor-pointer text-gray-700 capitalize"
                        title="Double-click to edit">{task.priority}</p>
                )}

            </label>
        </section>
    );
};

export default TaskDetail;