<script lang="ts">
    import DarkModeToggle from './components/DarkModeToggle.svelte';
    import TaskEntry from "./components/TaskEntry.svelte";
    import TaskList from "./components/TaskList.svelte";
</script>

<main class="max-w-2xl w-full mx-auto p-6 bg-gray-100 dark:bg-gray-900 dark:text-white shadow-lg rounded-lg transition-colors duration-300">
  <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Svelte Task Manager</h1>
        <DarkModeToggle />
    </div>

  <TaskEntry />
  <TaskList />
</main>

<style>
</style>