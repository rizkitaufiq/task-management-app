import { create } from "zustand";
import { Task } from "@/types/task";
import { persist } from "zustand/middleware";

interface TaskState{
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (id: string, updates: Partial<Task>) => void;
    deleteTask: (id: string)  => void;
    moveTask: (id: string, newProgress: Task["progress"]) => void;
}

export const useTaskStore = create<TaskState>()(
    persist(
      (set) => ({
        tasks: [],
        addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
        
        updateTask: (id: string, updates: Partial<Omit<Task, "id">>) =>
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, ...updates } : task
            ),
          })),
        
          deleteTask: (id: string) => set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id)
          })),
        
          moveTask: (id, newProgress) =>
            set((state) => {
              return {
                tasks: state.tasks.map((task) =>
                  task.id === id ? { ...task, progress: newProgress } : task
                ),
              };
            }),
      }),
      {
        name: 'task-storage',
      }
    )
  )