# Svelte Task Manager

## Introduction

This is a simple **Task Manager** application built with **Svelte**, a lightweight front-end framework. This project explores Svelte's reactivity, component structure, and state management while following best practices in frontend architecture.

### Why Svelte?
Unlike React or Vue, **Svelte compiles code at build time**, eliminating the need for a virtual DOM. This results in **faster performance and smaller bundle sizes**. This project was an opportunity to explore:
- **Svelte's reactivity and stores**
- **Component-based architecture**
- **Local state management without excessive prop drilling**

## Technologies & Libraries Used

- **Svelte** (Frontend framework)
- **Tailwind CSS** (Utility-first CSS framework for styling)
- **FontAwesome** (For icons, replacing checkboxes and buttons)
- **TypeScript** (For type safety and maintainability)
- **LocalStorage** (For persisting tasks across page reloads)

---

## Project Structure

```
svelte-todo/
├── src/
│   ├── assets/             # Static assets (icons, images, etc.)
│   ├── components/         # UI Components
│   │   ├── DarkModeToggle.svelte # Dark mode toggle switch
│   │   ├── TaskEntry.svelte      # Task input field
│   │   ├── TaskList.svelte       # List of tasks
│   │   ├── TaskListItem.svelte   # Individual task item
│   ├── models/            # TypeScript interfaces/models
│   │   ├── Task.ts        # Task model definition
│   │   ├── TaskStatus.ts  # Enum for task statuses
│   ├── repositories/      # Repository pattern for data management
│   │   ├── ITaskRepository.ts            # Interface for task storage
│   │   ├── LocalStorageTaskRepository.ts # Concrete implementation using LocalStorage
│   ├── services/          # Business logic layer
│   │   ├── TaskService.ts # Handles task operations (add, remove, toggle status)
│   ├── styles/            # Styling files
│   │   ├── app.css        # Global Tailwind styles
│   ├── App.svelte         # Root application component
│   ├── main.ts            # Entry point for the application
├── public/                # Static files
├── package.json           # Project dependencies & scripts
├── tailwind.config.ts     # Tailwind configuration
├── vite.config.ts         # Vite configuration
```

### **Design Patterns Used**
- **Repository Pattern (`repositories/`)**  
  - Abstracts data storage implementation.
  - `ITaskRepository.ts` defines a contract for task storage, allowing multiple implementations like LocalStorage or future database-backed repositories.
  - `LocalStorageTaskRepository.ts` implements the repository for LocalStorage.

- **Service Layer (`TaskService.ts`)**  
  - Centralizes business logic related to tasks.
  - Calls the repository layer to persist data.

- **Component-Based UI (`components/`)**  
  - Breaks the UI into small, reusable components.
  - Ensures maintainability and separation of concerns.

---

## How to Run the Project Locally

### **Prerequisites**
Make sure you have the following installed:
- **[Node.js](https://nodejs.org/) v16+**
- **npm** (comes with Node.js)

### **Installation & Setup**
1. **Clone the repository:**
   ```
   git clone https://github.com/faradaysage/svelte-task-manager.git
   cd svelte-task-manager
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open the application in your browser:**
   ```
   http://localhost:5173
   ```

---

## Features
✅ **Add tasks**  
✅ **Mark tasks as complete/incomplete**  
✅ **Delete tasks**  
✅ **Persist tasks using LocalStorage**  
✅ **Dark Mode toggle**  
✅ **Responsive UI with Tailwind CSS**  

---

## Future Improvements
- Implement **a backend API** for persistence.
- Add **drag-and-drop** functionality for reordering tasks.
- Improve **animations and transitions** in the UI.

---

## License
This project is open-source and free to use.

