import type { Task } from "../models/Task";

/**
 * Define an interface for a repository for CRUD operations on a Task object.
 * For simplicity's sake we only need to get all tasks and save all tasks.
 */
export interface ITaskRepository {
    /**
     * Get the task from the repository.
     */
    getTasks(): Task[];

    /**
     * Save tasks to the repository.
     * @param tasks The tasks to save.
     */
    saveTasks(tasks: Task[]): void;
}