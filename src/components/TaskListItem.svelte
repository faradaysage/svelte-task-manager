<script lang="ts">
    import type { Task } from "../models/Task";
    import { TaskStatus } from "../models/TaskStatus";
    import { taskService } from "../services/TaskService";
    import { faTrash } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

    export let task: Task;

    /**
     * Handle a removal
     */
    function remove() {
        taskService.removeTask(task.id);
    }

    /**
     * Toggle the status of the task
     */
    function toggleStatus() {
        const newStatus = task.status === TaskStatus.Completed ? TaskStatus.Pending : TaskStatus.Completed;
        taskService.updateTaskStatus(task.id, newStatus);

    }
</script>

<li class="flex items-center justify-between p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 shadow-md transition-colors">
    <div class="flex items-center gap-2">
        <label 
            class="flex items-center gap-2 cursor-pointer"
            title="Mark task as {task.status === TaskStatus.Completed ? 'pending' : 'completed'}"
            aria-label="Mark task as {task.status === TaskStatus.Completed ? 'pending' : 'completed'}"
        >
            <input 
                type="checkbox" 
                checked={task.status === TaskStatus.Completed} 
                on:change={toggleStatus} 
                class="w-5 h-5 accent-blue-600 dark:accent-blue-400 cursor-pointer"
                aria-checked={task.status === TaskStatus.Completed}
            />
            <span class="{task.status === TaskStatus.Completed ? 'line-through text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-gray-100'}">
                {task.text}
            </span>
        </label>
    </div>
    <button 
        on:click={remove} 
        class="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 px-2 py-1 rounded-md transition"
        aria-label="Delete task {task.text}"
    >
        <FontAwesomeIcon icon={faTrash} class="w-5 h-5" />
    </button>
</li>