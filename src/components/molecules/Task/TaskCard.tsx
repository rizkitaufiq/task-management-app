import { Task } from "@/types/task";
import { IconCheck, IconDown, IconUp, IconEqual } from "@/components/atoms/Icon/Icon";
import { ReactNode } from "react";

const TaskCard = ({ task }: { task: Task }) => {
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

    return (
        <div className="bg-white p-3 rounded shadow-md mb-2">
            <h4 className="text-sm font-semibold text-gray-700">{task.title}</h4>
            <div className="flex justify-between items-center mb-1 mt-4">
                <div className="flex gap-1">
                    <IconCheck className="bg-blue-500 text-white" />
                    <p className="text-xs text-gray-500">{task.id.toUpperCase()}</p>
                </div>

                <div className="flex items-center gap-1 mt-1">
                    <div>
                        {task.progress === "Done" && (
                            <IconCheck className="text-green-500" />
                        )}
                    </div>

                    <div className="flex items-center gap-1">
                        {getPriorityIcon(task.priority)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TaskCard;
