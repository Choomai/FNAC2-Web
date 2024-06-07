<script>
    import { version } from "/package.json";
</script>

<svelte:head>
    <title>FNAC 2 on the web</title>
</svelte:head>

<p>
    <span>Try to zoom out if there is overflow</span>
    <code>v{version}</code>
    <span>Pan left or right using <kbd>Shift + Scroll Wheel</kbd></span>
</p>
<iframe src="warn/" width="1024" height="768" frameborder="0" title="Game viewport"></iframe>

<style>
    p {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: .8rem 0;
    }
    iframe {
        outline: 3px solid white;
        transform: scaleX(1.5);
        overflow: hidden;
    }
</style>