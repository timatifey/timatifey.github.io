function applyTheme(powerOn) {
    document.body.classList.remove("theme-light", "theme-dark");
    let theme = "light";
    if (powerOn) {
        theme = "dark";
    }
    document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
    applyTheme(false);
    document.querySelector("#checkbox").addEventListener("change", function() {
        applyTheme(this.checked);
    });
});
