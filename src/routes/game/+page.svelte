<script>
    import { onMount } from "svelte";

    const config = {
        nightInterval: 70 * 1000, // milsecs
        animatronics: {
            old_candy: {},
            old_cindy: {},
            chester: {},
            blank: {},
            rat: {},
            cat: {}
        }
    }
    const sound = {};
    let isFlashed = false, isSpacePressed = false, onCooldown = false;
    let clockUrl = "imgs/clock/0.png";

    function handleKeyDown(e) {
        if (e.key === " " && !isFlashed && !isSpacePressed && !onCooldown) {
            isFlashed = true; isSpacePressed = true; onCooldown = true;
            sound.flash.play();
            setTimeout(() => isFlashed = false, 200);
            setTimeout(() => onCooldown = false, 2000);
        };
    }

    function handleKeyUp(e) {
        if (e.key === " ") isSpacePressed = false;
    }

    onMount(() => {
        sound.flash = new Audio("/audio/camerashutter (2).ogg");

        for (let state = 0; state <= 5; state++) {
            setTimeout(() => clockUrl = `imgs/clock/${state}.png`, state * config.nightInterval);
        }

        document.querySelector("main.full-vp").scroll({
            left: 256,
            behavior: "smooth"
        })
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyDown);
        };
    })
</script>

<svelte:head>
    <title>FNAC 2 on the web</title>
</svelte:head>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<main class="full-vp">
    <div class="stack-container">
        <img style="opacity: {isFlashed ? 0 : 1}" id="table" src="imgs/background/table.png" alt>
        <img style="opacity: {isFlashed ? 1 : 0}" id="flash" class="overlay" src="imgs/flash_overlay/old_candy1.png" alt>
    </div>
    
    <img id="clock" src={clockUrl}>

    <audio src="/audio/ambiance 2.ogg" autoplay loop hidden></audio>
</main>

<style>
    img {-webkit-user-drag: none;}

    img#clock {
        position: fixed;
        top: 0; right: 0;
        width: 128px;
        image-rendering: pixelated;
    }
    
    img#table {
        transition: opacity 200ms ease-in;
    }
    img#flash {
        transition: opacity 200ms linear;
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