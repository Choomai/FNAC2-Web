<script>
    import { goto } from "$app/navigation";

    function dismiss(e) {
        e.target.style.opacity = 0;
        setTimeout(() => goto("menu/"), 1000);
    }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<main class="full-vp">
    <img src="imgs/warning.png" on:click={dismiss}>
</main>

<style>
    img {transition: opacity 1s ease;}
</style>