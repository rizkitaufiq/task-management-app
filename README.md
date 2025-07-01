- # 📝 Task Management App

A simple and responsive task management board built with Next.js, TypeScript, TailwindCSS, and Zustand for state management. It features task creation, editing, drag-and-drop between progress stages, and persistent local storage.


- # 🚀 Setup Instructions

-  Clone the repository :
   https://github.com/rizkitaufiq/task-management-app.git
   cd task-manager

-  Install dependencies : 
   npm install
   or
   yarn install 
   or
   pnpm install

-  Run the Development Server :
   npm run dev
   or
   yarn run dev
   or
   pnpm run dev

-  Open in your browser : 
   http://localhost:3000


- #  🧩 # Tech Stack
-  Next.js 15 (App Router, Server Components)

-  TypeScript

-  Tailwind CSS 

-  Zustand for state management

-  LocalStorage for persistent data

-  Atomic Design folder structure

-  Drag-and-drop interaction 


- #  📦 State Management & Storage

-  Zustand was chosen for its simplicity and excellent local state management for mid-scale apps.

-  The entire task list is persisted using localStorage inside the Zustand middleware (persist).


- #  💡 Features

✅ Create, Edit (inline), Delete tasks (drag-and-drop to red area)

✅ Drag-and-drop between progress columns

✅ ID auto-generates sequentially (SM-1, SM-2, ...)

✅ Priority icons (↑ High, ↓ Low, = Medium)

✅ Task details toggle below the card

✅ Save edits on click outside (useClickOutside)

✅ Component modularity via Atomic Design


- # ⚠️ Known Issues
Due to time constraints:

❌ No unit tests or integration tests implemented

❌ No accessibility features (e.g., keyboard DnD, ARIA)

❌ Dragging a task outside a column doesn’t trigger deletion with confirmation (basic version only)

❌ No mobile-specific optimization (focused on desktop ≥ 1024px)


- # 🔧 Future Improvements
Given more time, I would:

✅ Add full drag-to-delete with confirmation modal

✅ Add notification timer if task if the task will pass the date 

✅ Implement undo/redo using Zustand history

✅ Add filtering, sorting, and search

✅ Delete all task feature

✅ Add user authentication & backend storage (e.g. Firebase or Supabase)

✅ Add testing using React Testing Library + Jest

