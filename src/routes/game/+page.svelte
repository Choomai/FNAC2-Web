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

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<main class="full-vp">
    <div class="stack-container">
        <img style="opacity: {isFlashed ? 0 : 1}" id="table" src="imgs/background/table.png" alt>
        <img style="opacity: {isFlashed ? 1 : 0}" id="flash" class="overlay" src="imgs/flash_overlay/old_candy2.png" alt>
    </div>
    
    <img id="clock" src={clockUrl}>
</main>
<audio src="audio/ambiance 2.ogg" autoplay loop></audio>

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
</style>