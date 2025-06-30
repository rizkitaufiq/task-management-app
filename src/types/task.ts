export type TaskProgress = "To Do" | "In Progress" | "Done";
export type TaskPriority = "Low" | "Medium" | "High";

export interface Task{
    id: string;
    title: string;
    description: string;
    progress: TaskProgress;
    priority: TaskPriority;
}