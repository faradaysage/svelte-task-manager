<script lang="ts">
    import { onMount } from 'svelte';
    import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

    let isDarkMode = false;

    // check for saved user preference on mount
    onMount(() => {
        isDarkMode = localStorage.getItem('theme') === 'dark';
        updateTheme();
    });

    // toggle theme and save preference
    function toggleTheme() {
        isDarkMode = !isDarkMode;
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateTheme();
    }

    // update the HTML class based on the current theme
    function updateTheme() {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
</script>

<button on:click={toggleTheme} title="Toggle Dark Mode" aria-label="Toggle Dark Mode" class="p-2 rounded focus:outline-none">   
    {#if isDarkMode}
        <FontAwesomeIcon icon={faMoon} class="w-8 h-8" />
    {:else}
        <FontAwesomeIcon icon={faSun} class="w-8 h-8" />
    {/if}
</button>

<style>
</style>
