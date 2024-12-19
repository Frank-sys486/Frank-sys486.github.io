// Select all the navigation links and the sections
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

// Function to update the active link based on the scroll position
function updateActiveLink() {
    let currentSection = '';

    // Loop through all sections to find which one is in the viewport
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
        }
    });

    // Remove the 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the 'active' class to the corresponding navigation link
    if (currentSection) {
        const activeLink = document.querySelector(`.navbar a[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

// Listen for the scroll event
window.addEventListener('scroll', updateActiveLink);

// Call the function once to set the initial active link when the page is loaded
updateActiveLink();
