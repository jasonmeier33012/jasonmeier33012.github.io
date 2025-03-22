console.log("Script loaded!");

// Ensure script runs after DOM loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded!");

    // Set the event start date
    const startTime = new Date(2020, 0, 1, 0, 0, 0); // Jan 1, 2020

    function updateCounter() {
        const now = new Date();
        let diff = Math.floor((now - startTime) / 1000);

        let years = Math.floor(diff / (3600 * 24 * 365));
        diff -= years * 3600 * 24 * 365;

        let months = Math.floor(diff / (3600 * 24 * 30));
        diff -= months * 3600 * 24 * 30;

        let days = Math.floor(diff / (3600 * 24));
        diff -= days * 3600 * 24;

        let hours = Math.floor(diff / 3600);
        diff -= hours * 3600;

        let minutes = Math.floor(diff / 60);
        let seconds = diff % 60;

        let counterElement = document.getElementById("counter");

        if (counterElement) {
            counterElement.innerHTML = `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            console.error("Counter element not found!");
        }
    }

    // Update every second
    setInterval(updateCounter, 1000);
    updateCounter();
});
