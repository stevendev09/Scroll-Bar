

let h1 = document.documentElement.scrollHeight;
let h2 = document.documentElement.clientHeight;
let scrollUnit = (h1 - h2) /100;
const rootStyles = document.documentElement.style;

addEventListener("resize",() => {
    h1 = document.documentElement.scrollHeight;
    h2 = document.documentElement.clientHeight;
    scrollUnit = (h1 - h2) /100;
})

//3620
addEventListener('scroll', () => {
    rootStyles.setProperty('--width', Math.round(scrollY/scrollUnit));
});
