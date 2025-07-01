"use client";

import { useTaskStore } from "@/store/taskStore";
import TaskColumn from "../organisems/Homepage/TaskColumn";
import DeleteDropZone from "../molecules/Event/DeleteDropZone";

export default function TaskBoard() {
  const { tasks } = useTaskStore();

  const grouped = {
    todo: tasks.filter((t) => t.progress === "To Do"),
    inProgress: tasks.filter((t) => t.progress === "In Progress"),
    done: tasks.filter((t) => t.progress === "Done"),
  };

  return (
    <main>
      <section className="flex flex-col lg:flex-row justify-center items-center lg:items-baseline gap-6 p-8 lg:min-w-[1024px]">
        <TaskColumn titleTask="TO DO" progress="To Do" bgColor="bg-gray-300" tasks={grouped.todo} />
        <TaskColumn titleTask="IN PROGRESS" progress="In Progress" bgColor="bg-blue-300" tasks={grouped.inProgress} />
        <TaskColumn titleTask="DONE" progress="Done" bgColor="bg-green-300" tasks={grouped.done} />
      </section>

      <footer className="px-8">
        <DeleteDropZone>
          🗑 Drop here to delete task
        </DeleteDropZone>
      </footer>
    </main>

  );
}