document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;

    // Append value to display
    window.appendValue = function (value) {
        display.value += value;
    };

    // Clear display
    window.clearDisplay = function () {
        display.value = "";
    };

    // Delete last character
    window.deleteLast = function () {
        display.value = display.value.slice(0, -1);
    };

    // Calculate result
    window.calculateResult = function () {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    };

    // Theme Toggle
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark");
    });
});
