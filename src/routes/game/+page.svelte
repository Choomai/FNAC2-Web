<script>
    import { onMount } from "svelte";
    import random from "random";

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
    const sound = {}, gameData = { flashCounter: 0 };

    let isFlashed = false, onCooldown = false;
    let clockUrl = "imgs/clock/0.png";

    function handleJumpscare(char) {
        const jumpscareElem = document.createElement("img");
        jumpscareElem.id = "jumpscare";
        jumpscareElem.src = `imgs/jumpscare/old_candy/@front.png?randomShit=${random.float(0, 1000)}`;

        const panelDownOverlayElem = document.createElement("img");
        panelDownOverlayElem.classList.add("overlay");
        panelDownOverlayElem.src = `imgs/@panel_down_overlay.png?randomShit=${random.float(0, 1000)}`;

        const stackContainer = document.querySelector("div.stack-container");
        stackContainer.textContent = "";
        stackContainer.classList.remove("w-extend");
        stackContainer.appendChild(panelDownOverlayElem);
        setTimeout(() => stackContainer.appendChild(jumpscareElem), 333);
        sound.jumpscare_0.play();
        // TODO: call to gameover function...
        // setTimeout(() => {
        //     // jumpscareElem.remove();
        // }, 2000)
    }

    function handleKeyPress(e) {
        switch (e.key) {
            case " ":
                if (onCooldown) break;
                isFlashed = true; onCooldown = true;
                gameData.flashCounter += 1;
                sound.flash.play();
                setTimeout(() => isFlashed = false, 200);
                setTimeout(() => onCooldown = false, 2000);
                break;
        
            case "j":
                handleJumpscare();
                break;
        };
    }

    function handleUnload(e) {
        e.preventDefault();
        e.returnValue = "";
    }

    onMount(() => {
        sound.background = new Audio("/audio/ambiance 2.ogg");
        sound.background.play()
        sound.flash = new Audio("/audio/camerashutter (2).ogg");
        sound.jumpscare_0 = new Audio("/audio/jumpscare.ogg");
        sound.jumpscare_1 = new Audio("/audio/jumpscare 2.ogg");

        document.querySelector("main.full-vp").scrollTo({ left: 256, behavior: "smooth" });

        for (let state = 0; state <= 5; state++) {
            setTimeout(() => clockUrl = `imgs/clock/${state}.png`, state * config.nightInterval);
        }

        window.addEventListener("keypress", handleKeyPress);
        window.addEventListener("beforeunload", handleUnload);
        return () => {
            window.removeEventListener("keypress", handleKeyPress);
            window.removeEventListener("beforeunload", handleUnload);
        };
    })
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<main class="full-vp w-extend">
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