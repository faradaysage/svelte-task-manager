<script lang="ts">
    import { onMount } from "svelte";
    import { taskService } from "../services/TaskService";

    let taskText: string = '';
    let taskInput: HTMLInputElement | null = null;

    // focus the input field on app load
    onMount(() => {
        if (taskInput) {
            taskInput.focus();
        }
    });

    /**
     * Add a new task
     */
    function add() {
        if (taskText.trim()) {
            taskService.addTask(taskText);
            taskText = ''; // clear
        } else {
            alert('You cannot add a task without a description!');
        }
    }
</script>

<form on:submit|preventDefault={add} class="flex gap-2">
    <input 
        type="text" 
        bind:value={taskText} 
        bind:this={taskInput}
        placeholder="Enter a task..." 
        class="flex-1 p-2 border border-gray-300 rounded-md bg-white text-black dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-700"
        aria-label="Task description"
    />
    <button 
        type="submit" 
        title="Add task"
        disabled={taskText.trim().length === 0}
        class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
    >
        Add
    </button>
</form>