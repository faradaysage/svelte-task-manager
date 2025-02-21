
import { writable, type Writable } from "svelte/store";
import type { Task } from "../models/Task";
import { TaskStatus } from "../models/TaskStatus";
import type { ITaskRepository } from "../repositories/ITaskRepository";
import { LocalStorageTaskRepository } from "../repositories/LocalStorageTaskRepository";

/**
 * Define a service responsible for getting/saving tasks.
 */
class TaskService {
  private tasks: Writable<Task[]>;
    private repository: ITaskRepository;

    /**
     * Instantiate the service.
     * @param repository 
     */
    constructor(repository?: ITaskRepository) {
      this.repository = repository || new LocalStorageTaskRepository();
      this.tasks = writable<Task[]>(this.repository.getTasks());

      this.tasks.subscribe(value => this.repository.saveTasks(value));
    }

    /**
     * Get all tasks from the system.
     * @returns All tasks.
     */
    getTasks(): Writable<Task[]> {
      return this.tasks;
    }

    /**
     * Adds a new task with the specified name to the system.
     * @param text The description of the task to save.
     * @returns The resulting task that was created/added (or null if an invalid description was provided).
     */
    addTask(text: string): Task | null {
      if (!text.trim()) return null;

      const newTask: Task = {
        id: Date.now(),
        text,
        status: TaskStatus.Pending
      };

      this.tasks.update(t => [...t, newTask]);

      return newTask;
    }

    /**
     * 
     * @param id The id of the task to remove.
     * @returns The task that was removed (or null if not found).
     */
    removeTask(id: number): Task | null {
      let removedTask: Task | null = null;

      this.tasks.update(t => {
        removedTask = t.find(task => task.id === id) || null;
        return t.filter(task => task.id !== id);
      });

      return removedTask;
    }

    /**
     * Update the status of the task specified by the given id.
     * @param id The id of the task to update.
     * @param newStatus The new status.
     */
    updateTaskStatus(id: number, newStatus: TaskStatus): void {
      this.tasks.update(tasks =>
          tasks.map(task =>
              task.id === id ? { ...task, status: newStatus } : task
          )
      );
  }
  
}

// create a singleton/global for interacting with the task service
export const taskService: TaskService = new TaskService();