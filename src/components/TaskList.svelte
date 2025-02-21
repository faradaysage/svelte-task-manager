<script lang="ts">
    import { taskService } from "../services/TaskService";
    import TaskListItem from "./TaskListItem.svelte";

    // grab the tasks to display
    const tasks = taskService.getTasks();
</script>

<ul class="mt-4 space-y-2" aria-label="Task List" aria-live="polite">
    {#each $tasks as task (task.id)}
        <TaskListItem {task}/>
    {/each}
</ul>