<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y_consider_explicit_label -->
<main class="full-vp">
    <div class="row-image">
        <img id="title" src="imgs/menu/@title.png">
        <a href="game/" class="stack-container item mt--32">
            <img id="select" class="overlay faded" src="imgs/menu/select_overlay.png">
            <img src="imgs/menu/@new_game.png">
        </a>
        <a href="game/" class="stack-container item mt--32">
            <img id="select" class="overlay faded" src="imgs/menu/select_overlay.png">
            <div class="continue">
                <img src="imgs/menu/@continue.png">
                <img src="imgs/menu/continue_night/@5th.png">
            </div>
        </a>
        <a href="game/" class="stack-container item mt--32">
            <img id="select" class="overlay faded" src="imgs/menu/select_overlay.png">
            <img src="imgs/menu/@night_6.png">
        </a>
        <a href="game/" class="stack-container item mt--32">
            <img id="select" class="overlay faded" src="imgs/menu/select_overlay.png">
            <img src="imgs/menu/@extra.png">
        </a>
    </div>
    <audio src="audio/Menu.ogg" autoplay loop></audio>
</main>

<style>
    main {
        position: relative;
    }

    @keyframes faded {
        0% {opacity: .75;}
        50% {opacity: .3;}
        100% {opacity: .75;}
    }

    img#title {
        margin-left: -32px;
        margin-bottom: -16px;
    }

    .item {
        height: 96px;
        text-decoration: none;
    }
    .item > img#select {opacity: 0;}
    .item:hover > img#select {animation: faded 5s ease infinite;}
    .item > :nth-child(2) {
        height: inherit;
        margin-left: 64px;
        mix-blend-mode: screen;
    }

    div.continue > img {height: inherit;}
    div.continue > img:nth-child(2) {
        margin-left: -64px;
    }

    .row-image {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>