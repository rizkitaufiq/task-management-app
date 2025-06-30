"use client";

import { IconCheck, IconUp, IconDown, IconEqual } from "@/components/atoms/Icon/Icon";
import { ReactNode } from "react";
import { Task } from "@/types/task";

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

const TaskDetail = ({ task }: { task: Task }) => (

    <div className="bg-white border border-gray-500 rounded p-3 text-sm mb-2 animate-fade">
        <div className="flex px-2 lg:px-5 mt-3 mb-4 lg:mb-6 gap-1">
            <IconCheck className="bg-blue-500 text-white" />
            <p className="text-xs text-gray-500">{task.id.toUpperCase()}</p>
        </div>

        <div className="mb-4">
            <h3 className="text-sm text-gray-700 font-semibold">{task.title}</h3>
        </div>

        <div className="mb-4">
            <h4 className="text-gray-700 font-semibold mb-1">
                Description
            </h4>
            <p>{task.description}</p>
        </div>

        <p className="text-gray-700 font-semibold mb-1">
            Priority
        </p>
        <div className="flex items-center gap-1 mb-3">
            {getPriorityIcon(task.priority)}
            <p>{task.priority}</p>
        </div>
    </div>
);

export default TaskDetail;