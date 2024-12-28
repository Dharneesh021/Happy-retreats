
    // JavaScript to trigger animation on scroll
    document.addEventListener("DOMContentLoaded", function() {
        const leftElements = document.querySelectorAll('.fade-in-left');
        const rightElements = document.querySelectorAll('.fade-in-right');
        const imageElements = document.querySelectorAll('.image-animate');
        
        function checkVisibility() {
            const triggerBottom = window.innerHeight / 5 * 4;
            
            leftElements.forEach(element => {
                const boxTop = element.getBoundingClientRect().top;
                
                if (boxTop < triggerBottom) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });

            rightElements.forEach(element => {
                const boxTop = element.getBoundingClientRect().top;
                
                if (boxTop < triggerBottom) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });

            imageElements.forEach(element => {
                const boxTop = element.getBoundingClientRect().top;
                
                if (boxTop < triggerBottom) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
        }
        
        window.addEventListener('scroll', checkVisibility);
        checkVisibility();  // Initial check on page load
    });


    // ----------------------------------------


    const navbar = document.getElementById('mainNavbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-solid');
        } else {
            navbar.classList.remove('navbar-solid');
            navbar.classList.add('navbar-transparent');
        }
    });


        // -------------------------------------------------------------------------


        // JavaScript for modal image functionality
  document.querySelectorAll('.open-modal').forEach(img => {
    img.addEventListener('click', function () {
      const modalImage = document.getElementById('modalImage');
      modalImage.src = this.dataset.imgSrc; // Set the src of the modal image
      const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
      modal.show(); // Show the modal
    });
  });
      
  
  // check Availability
  document.addEventListener("DOMContentLoaded", function () {
    const checkAvailabilityButton = document.getElementById("check-availability");

    if (checkAvailabilityButton) {
        checkAvailabilityButton.addEventListener("click", function () {
            // Your existing code
            const arrival = document.getElementById("arrival").value;
            const departure = document.getElementById("departure").value;
            const adults = document.getElementById("adults").value;
            const children = document.getElementById("children").value;

            if (!arrival || !departure || !adults || children === "") {
                alert("Please fill in all the fields.");
                return;
            }

            const message = `Hello, I would like to check availability:\n\n` +
                `Arrival Date: ${arrival}\n` +
                `Departure Date: ${departure}\n` +
                `Adults: ${adults}\n` +
                `Children: ${children}`;

            const whatsappNumber = "9071135381";
            const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, "_blank");
        });
    }
});

