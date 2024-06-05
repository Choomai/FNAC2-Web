const backgroundContainer = $("div.background");
const leftDiv = $("div.left");
const rightDiv = $("div.right");
const scrollThreshold = 10;
let scrollLoop;

leftDiv.hover(
    () => { // on hover
        scrollLoop = setInterval(() => {
            let currentPos = backgroundContainer.scrollLeft();
            backgroundContainer.scrollLeft(currentPos - scrollThreshold);
        }, 10);
    },
    () => clearInterval(scrollLoop)
);

rightDiv.hover(
    () => { // on hover
        scrollLoop = setInterval(() => {
            let currentPos = backgroundContainer.scrollLeft();
            backgroundContainer.scrollLeft(currentPos + scrollThreshold);
        }, 10);
    },
    () => clearInterval(scrollLoop) // not hover
);