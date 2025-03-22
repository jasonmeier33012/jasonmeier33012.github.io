console.log("Script loaded!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded!");

    // Set the event start date
    const startTime = new Date(2025, 2, 1, 0, 0, 0); // Jan 1, 2020

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

    let imageUrls = []; // Array to store image paths

    // Load images from JSON
    fetch("image-list.json")
        .then(response => response.json())
        .then(data => {
            imageUrls = data.images;
            console.log("Images loaded:", imageUrls);
        })
        .catch(error => console.error("Error loading images:", error));

    // Button click event to spawn falling images
    document.getElementById("spawnButton").addEventListener("click", function () {
        if (imageUrls.length > 0) {
            spawnFallingImage();
        } else {
            console.warn("Image list is empty or not loaded yet.");
        }
    });

    function spawnFallingImage() {
        if (imageUrls.length === 0) return;

        const img = document.createElement("img");
        img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        img.classList.add("falling-image");

        // Set random starting position
        img.style.left = `${Math.random() * 100}vw`;
        img.style.top = "-50px"; // Start above the screen

        // Set random rotation
        const rotation = Math.random() * 180;

        img.style.width = "1000px";
        img.style.height = "1000px";
        img.style.transform = `translateY(0) rotate(${rotation}deg)`;


        document.body.appendChild(img);

        // Apply animation dynamically
        setTimeout(() => {
            img.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
        }, 10);

        // Remove the image after animation completes
        setTimeout(() => {
            img.remove();
        }, 3000);
    }
});
