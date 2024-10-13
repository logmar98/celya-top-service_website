
const slidesContainer = document.createElement('div');
slidesContainer.classList.add('slides-container');

const slides = [
    'images/camers.jpg',  // Update with your actual image names
    'images/cleaner.jpg',
    'images/securty.jpg'
];

// Create slide elements
slides.forEach((img) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.style.backgroundImage = `url(${img})`;
    slidesContainer.appendChild(slide);
});

// Add the slides container to the main section
document.querySelector('.main-section').appendChild(slidesContainer);

let currentIndex = 0;

function slideLeft() {
    currentIndex = (currentIndex + 1) % slides.length;
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slideLeft, 3000); // Slide every 3 seconds


const services = document.querySelectorAll('.service');

services.forEach((service) => {
    window.addEventListener("load", eventListener);
    window.addEventListener("scroll", eventListener);

    function eventListener() {
        const windowHeight = window.innerHeight;
        const servicePosition = service.getBoundingClientRect().top;

        if (servicePosition < windowHeight) {
            service.classList.add('active');
        }
    }
});

