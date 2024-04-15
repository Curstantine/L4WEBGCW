const nodes = document.querySelectorAll("rect");
nodes.forEach(node => {
    node.addEventListener("mouseover", function() {
        this.setAttribute("fill", "red"); // Change the color on hover
    });

    node.addEventListener("mouseout", function() {
        this.setAttribute("fill", "blue"); // Revert the color on mouseout
    });

    node.addEventListener("click", function() { // Redirect to corresponding page when clicked
        if (this.id === "splash") {
            window.location.href = "Spalsh screen.html";
        } else if (this.id === "Home") {
            window.location.href = "Home.html";
        } else if (this.id === "Gallery") {
            window.location.href =
                "C:\Users\WMMV71\Desktop\web design CW original\css\Gallery.html";
        } else if (this.id === "Feedback") {
            window.location.href = "Feedback.html";
        } else if (this.id === "profile") {
            window.location.href = "Profile.html";
        } else if (this.id === "Shop") {
            window.location.href = "Shop.html";
        } else if (this.id === "Sitemap") {
            window.location.href = "sitemap.html";
        } else if (this.id === "Team") {
            window.location.href = "Team.html";
        } else if (this.id === "Goals") {
            window.location.href = "Goals.html";
        } else if (this.id === "Sanitization") {
            window.location.href = "Sanitization.html";
        } else if (this.id === "Donation") {
            window.location.href = "Donation.html";
        } else if (this.id === "About") {
            window.location.href = "Home.html";
        }
    });

    node.setAttribute("aria-label", node.id); // Add alt text for accessibility
});

// Make the SVG responsive
window.addEventListener("resize", function() {
    const svg = document.querySelector("svg");
    const rect = svg.getBoundingClientRect();
    const width = window.innerWidth || document.documentElement.clientWidth
        || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight
        || document.body.clientHeight;
    const scaleX = width / rect.width;
    const scaleY = height / rect.height;
    const scale = Math.min(scaleX, scaleY);
    svg.style.transform = `scale(${scale})`;
});
