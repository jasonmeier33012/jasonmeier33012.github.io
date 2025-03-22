// Set the event start date (YYYY, MM-1, DD, HH, MM, SS)
const startTime = new Date(2025, 2, 1, 0, 0, 0);  // March 1, 2025

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

    document.getElementById("counter").innerHTML =
        `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update every second
setInterval(updateCounter, 1000);

// Initial call
updateCounter();
