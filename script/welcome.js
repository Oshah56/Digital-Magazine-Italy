var mobileNav = document.getElementById('mobileNav')

function toggleMenu() {
    mobileNav.classList.toggle('hidden')
}

// Get all elements with the animate-once class
const elements = document.querySelectorAll('.animate-once');

// Loop through each element
elements.forEach(element => {
    // Add event listener for animationend event
    element.addEventListener('animationend', () => {
        // Pause the animation after it completes
        element.style.animationPlayState = 'paused';
    }, { once: true }); // Listen for the event only once
});