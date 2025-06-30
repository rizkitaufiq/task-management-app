import { create } from "zustand";
import { Task, TaskProgress } from "@/types/task";
import { persist } from "zustand/middleware";

interface TaskState{
    tasks: Task[]
    addTask: (task: Task) => void
    updateTask: (task: Task) => void
    deleteTask: (id: string)  => void
    moveTask: (id: string, newStatus: TaskProgress) => void
}

export const useTaskStore = create<TaskState>()(
    persist(
      (set) => ({
        tasks: [],
        addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
        
        updateTask: (updated) =>
          set((state) => ({
            tasks: state.tasks.map((t) => (t.id === updated.id ? updated : t)),
          })),
        
          deleteTask: (id) =>
          set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
        
          moveTask: (id, newStatus) =>
          set((state) => ({
            tasks: state.tasks.map((t) =>
              t.id === id ? { ...t, status: newStatus } : t
            ),
          })),
      }),
      {
        name: 'task-storage',
      }
    )
  )