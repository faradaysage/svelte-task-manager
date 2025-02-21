import type { Task } from "../models/Task";
import type { ITaskRepository } from "./ITaskRepository";

const STORAGE_KEY = 'tasks';

/**
 * Implements a repository that gets/saves tasks from/to localStorage.
 */
export class LocalStorageTaskRepository implements ITaskRepository {
    getTasks(): Task[] {
        try {
            const data = localStorage.getItem(STORAGE_KEY) || '[]';
            return JSON.parse(data) as Task[];
        } catch(error) {
            console.error("LocalStorage access failed:", error);
            return [];
        }
    }

    saveTasks(tasks: Task[]): void {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        } catch(error) {
            console.error("Failed to save tasks to localStorage:", error);
        }
    }
}