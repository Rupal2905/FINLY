document.addEventListener("DOMContentLoaded", function () {
    console.log("Stock Analysis Website is loaded!");

    // Get the theme toggle button and the current body class
    const themeToggleButton = document.getElementById('themeToggle');
    const body = document.body;

    // Check localStorage to see if a theme is saved
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        // Set the default theme (Dark mode)
        body.classList.add('dark-mode');
    }

    // Add event listener for the theme toggle button
    themeToggleButton.addEventListener('click', function () {
        // Toggle between dark-mode and light-mode classes
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Save the current theme to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            themeToggleButton.textContent = '🌙'; // Dark mode icon
        } else {
            localStorage.setItem('theme', 'light-mode');
            themeToggleButton.textContent = '☀️'; // Light mode icon
        }
    });
});
