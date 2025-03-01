// dashboard.js

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function () {
        sidebar.classList.toggle("closed");
    });

    // Chart.js Example Initialization
    const ctx = document.getElementById("stockChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Stock Prices",
                data: [100, 120, 130, 110, 150, 170],
                borderColor: "#d4af37",
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
