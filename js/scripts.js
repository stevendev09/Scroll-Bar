
//3620
addEventListener('scroll', () => {
    const h1 = document.documentElement.scrollHeight;
    const h2 = document.documentElement.clientHeight;
    const scrollUnit = (h1 - h2) /100;
    const rootStyles = document.documentElement.style;
    rootStyles.setProperty('--width', Math.round(scrollY/scrollUnit));
});
