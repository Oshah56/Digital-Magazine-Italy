document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.zoom-effect');
    images.forEach(image => {
      image.style.transform = 'scale(1.1)'; // Zoom in a little
      // Use setTimeout to scale back to 1 after the animation ends
      setTimeout(() => {
        image.style.transform = 'scale(1)';
      }, 500); // This should match the duration of the transition
    });
  })

  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.zoom-effect');
    images.forEach(image => {
      image.style.transform = 'scale(1.1)'; // Zoom in a little
      // Use setTimeout to scale back to 1 after the animation ends
      setTimeout(() => {
        image.style.transform = 'scale(1)';
      }, 500); // This should match the duration of the transition
    });
  })


  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.decorative-image'); // Select your images by class
    images.forEach(image => {
      image.classList.add('bounce-zoom'); // Add the animation class to each image
    });
  });
  
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