<script>
    import { page } from "$app/stores";
</script>

<svelte:head>
    {#if $page.url.pathname == "/"}
        <meta name="viewport" content="width=device-width, initial-scale=1">
    {:else}
        <meta name="viewport" content="width=1024, height=768, initial-scale=1, user-scalable=no">
    {/if}
</svelte:head>

<slot/>