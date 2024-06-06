const root = document.querySelector(":root");

const backgroundContainer = document.querySelector("div.background");
const leftDiv = document.querySelector("div.left");
const rightDiv = document.querySelector("div.right");
const scrollThreshold = 80;
let scrollLoop;

leftDiv.addEventListener("mouseenter", () => { // on hover
    scrollLoop = setInterval(() => {
        let rootStyle = getComputedStyle(root);
        let currentPos = +rootStyle.getPropertyValue("--bg-x-cords").slice(0, -2);
        
        if ((currentPos + scrollThreshold) >= 0) {
            root.style.setProperty("--bg-x-cords", "0px");
            return clearInterval(scrollLoop);
        };
        root.style.setProperty("--bg-x-cords", `${currentPos + scrollThreshold}px`);
    }, 200);
})
leftDiv.addEventListener("mouseleave", () => clearInterval(scrollLoop))

rightDiv.addEventListener("mouseenter", () => { // on hover
    scrollLoop = setInterval(() => {
        let rootStyle = getComputedStyle(root);
        let currentPos = +rootStyle.getPropertyValue("--bg-x-cords").slice(0, -2);
        
        if ((currentPos - scrollThreshold) <= -416) {
            root.style.setProperty("--bg-x-cords", "-416px");
            return clearInterval(scrollLoop);
        };
        root.style.setProperty("--bg-x-cords", `${currentPos - scrollThreshold}px`);
    }, 200);
})
rightDiv.addEventListener("mouseleave", () => clearInterval(scrollLoop))

// Key handler
// document.addEventListener("keydown", e => {
//     switch (e.key) {
//         case " ":
//             backgroundContainer.style.transform.translate;
//             $("div.overlay-container#flash").show(0);
//             break;
//     }
// })