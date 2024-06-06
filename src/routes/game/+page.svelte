<script>
    import { onMount } from "svelte";

    const sound = {};
    let isFlashed = false, isSpacePressed = false, onCooldown = false;

    function handleKeyDown(e) {
        if (e.key === " " && !isFlashed && !isSpacePressed && !onCooldown) {
            isFlashed = true;
            isSpacePressed = true;
            onCooldown = true
            sound.flash.play();
            setTimeout(() => isFlashed = false, 150);
            setTimeout(() => onCooldown = false, 2000);
        };
    }

    function handleKeyUp(e) {
        if (e.key === " ") isSpacePressed = false;
    }

    onMount(() => {
        sound.flash = new Audio("/audio/camerashutter (2).ogg");

        document.querySelector("main.full-vp").scroll({
            left: 256,
            behavior: "smooth"
        })
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
    })
</script>

<svelte:head>
    <title>FNAC 2 on the web</title>
</svelte:head>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<main class="full-vp">
    <div class="stack-container">
        <img style="opacity: {isFlashed ? 0 : 1}" id="table" src="/imgs/background/table.png" alt>
        <img style="opacity: {isFlashed ? 0.9 : 0}" id="flash" class="overlay" src="/imgs/flash_overlay/old_candy1.png" alt>
    </div>
    
    <img id="clock" src="/imgs/clock/0.png">
</main>

<style>
    main {
        overflow: hidden;
        background-color: black;
        overflow-x: auto;
    }
    main::-webkit-scrollbar {display: none;}

    img {-webkit-user-drag: none;}

    img#clock {
        position: fixed;
        top: 0; right: 0;
        width: 128px;
        image-rendering: pixelated;
    }
    
    img#table {
        transition: opacity 150ms ease-in;
    }
    img#flash {
        transition: opacity 150ms linear;
    }

    .stack-container {position: relative;}
    .stack-container > img {height: 100%;}
    .stack-container > img.overlay {
        position: absolute;
        top: 0; left: 0;
    }

    .full-vp {
        width: 1024px;
        height: 768px;
    }
</style>