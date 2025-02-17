


//  Menu Scrool to section effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile Menu Effect
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('open');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

// Navbar scroll background color change effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {  // Adjust '0' based on when you want the change to occur
    navbar.style.backgroundColor = '#2f5f44'; // Example - change to your desired color
  } else {
    navbar.style.backgroundColor = '#244030'; // Original background color
  }
});


// Find the logo element (you might need to adjust the selector if your actual HTML is different)
const logo = document.querySelector('.logo a');

// Add a click event listener
logo.addEventListener('click', function(e) {
    e.preventDefault();  // Prevent default link behavior

    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // For smooth scrolling
    });
});


