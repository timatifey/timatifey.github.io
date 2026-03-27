(function () {
    var STORAGE_KEY = "timatifey-theme";

    function applyTheme(isDark) {
        document.body.classList.remove("theme-light", "theme-dark");
        document.body.classList.add(isDark ? "theme-dark" : "theme-light");
        try {
            localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
        } catch (e) {}
        var input = document.getElementById("theme-toggle");
        if (input) input.checked = isDark;
    }

    function readStoredDark() {
        try {
            return localStorage.getItem(STORAGE_KEY) === "dark";
        } catch (e) {
            return false;
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        applyTheme(readStoredDark());
        var input = document.getElementById("theme-toggle");
        if (input) {
            input.addEventListener("change", function () {
                applyTheme(this.checked);
            });
        }
    });
})();
