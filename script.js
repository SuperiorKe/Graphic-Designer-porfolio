// Slideshow functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

// Initialize the slideshow
function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    
    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    
    // Change slide every 5 seconds
    setTimeout(showSlides, 5000);
}

// Add click handlers to dots
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        slideIndex = i;
        showSlides();
    });
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", showSlides);