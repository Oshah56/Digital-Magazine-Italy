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

document.addEventListener("DOMContentLoaded", function() {
  // Select all slider containers
  const sliders = document.querySelectorAll('.slider');

  // Apply functionality to each slider
  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;
    let index = 1;

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    firstClone.id = `first-clone-${index}`;
    lastClone.id = `last-clone-${index}`;
    slider.append(firstClone);
    slider.prepend(lastClone);

    slider.style.transform = `translateX(${-slideWidth * index}px)`;

    const moveToNextSlide = () => {
      if (index >= slides.length + 1) {
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
      } else {
        slider.style.transition = `transform 0.5s ease-in-out`;
        index++;
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
      }
    };

    slider.addEventListener('transitionend', () => {
      if (slides[index].id === `last-clone-${index}`) {
        slider.style.transition = "none";
        index = slides.length;
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
      } else if (slides[index].id === `first-clone-${index}`) {
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
      }
    });

    setInterval(moveToNextSlide, 2500);
  });
});

// Line Animation
  
  document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element you want to animate
    var line = document.querySelector('.top-restaurants-line');
  
    // Function to be called when the element is observed
    let animateLine = (entries, observer) => {
      entries.forEach(entry => {
        // Check if the element is intersecting (visible)
        if(entry.isIntersecting) {
          line.style.visibility = 'visible'; // Make it visible
          line.style.width = '80%'; // Start the animation
          observer.unobserve(line); // Stop observing the element after the animation starts
        }
      });
    };
  
    // Create a new observer with the function to be executed
    let observer = new IntersectionObserver(animateLine, {
      threshold: 0.5 // Trigger when at least 50% of the element is visible
    });
  
    // Start observing the element
    observer.observe(line);
  });
  
  //Animaaiton
  
  document.addEventListener('DOMContentLoaded', (event) => {
    // Create a function that will apply the animation
    const animateZoomIn = (entries, observer) => {
      entries.forEach(entry => {
        // Check if the element is intersecting
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1; // Fade element in
          entry.target.style.transform = 'scale(1)'; // Zoom in to original size
          observer.unobserve(entry.target); // Stop observing the element once the animation has played
        }
      });
    };
  
    // Set up the options for the observer. In this case, the animation will trigger
    // when the element is 50% visible in the viewport
    const observerOptions = {
      threshold: 0.5 // Adjust if you want the animation to start earlier or later
    };
  
    // Set up the IntersectionObserver
    const observer = new IntersectionObserver(animateZoomIn, observerOptions);
  
    // Target the elements you want to animate
    const targets = document.querySelectorAll('.restaurant-links ul li');
    targets.forEach(target => {
      observer.observe(target); // Start observing each list item
    });
  });
  

// Scroll secction

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    document.querySelectorAll('.photo').forEach(photo => {
        const photoPosition = photo.getBoundingClientRect().top;
        if(photoPosition < windowHeight) {
            photo.style.transform = 'scale(1)'; // Zoom in effect
        } else {
            photo.style.transform = 'scale(0.8)'; // Return to initial size if needed
        }
    });
});

// Form Ssection

document.addEventListener('DOMContentLoaded', () => {
  const openBtns = document.querySelectorAll('.openModal');
  const modals = document.querySelectorAll('.reviewModal');
  const closeBtns = document.querySelectorAll('.close');
  const reviewsContainer = document.querySelector('.reviews'); 

  // Function to close modals
  const closeModal = (modal) => {
    modal.style.display = 'none';
  };

  openBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      modals[index].style.display = 'block';
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      closeModal(btn.closest('.modal'));
    });
  });

  window.addEventListener('click', (event) => {
    modals.forEach((modal) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.querySelectorAll('.reviewForm').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (form.checkValidity() && form.querySelector('input[name="rating"]:checked')) {
        const name = form.querySelector('.nameInput').value;
        const reviewText = form.querySelector('.reviewText').value;
        const rating = form.querySelector('input[name="rating"]:checked').value;

        const reviewHtml = `
          <div class="review">
          <img src="images/icon.webp" alt="User Icon" class="user-icon">
            <div class="review-content">
              <span class="stars">${'★'.repeat(rating) + '☆'.repeat(5 - rating)}</span>
              <p><strong>${name}</strong></p>
              <p>${reviewText}</p>
            </div>
          </div>
        `;

        reviewsContainer.insertAdjacentHTML('beforeend', reviewHtml);

        // Reset the form
        form.reset();
        // Close the modal
        closeModal(form.closest('.modal'));
      } else {
        // Handle validation errors
        // Display a validation message to the user
        alert('Please fill in all required fields and select a rating.');
      }
    });
  });
});

