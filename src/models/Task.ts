import type { TaskStatus } from "./TaskStatus";

// define an interface for the task
export interface Task {
    id: number,
    text: string,
    status: TaskStatus,
}