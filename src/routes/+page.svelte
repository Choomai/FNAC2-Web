<svelte:head>
    <title>FNAC 2 on the web</title>
</svelte:head>

<p>Try to zoom out if there is overflow, Pan left or right using <kbd>Shift + Scroll Wheel</kbd></p>
<iframe src="menu/" width="1024" height="768" frameborder="0" title="Game viewport"></iframe>

<style>
    p {margin: .8rem 0;}
    iframe {
        outline: 3px solid white;
        transform: scaleX(1.5);
    }
</style>