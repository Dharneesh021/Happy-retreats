// Open modal with Owl Carousel
function openCarousel(tabId) {
    const images = document.querySelectorAll(`#${tabId} .gallery-item img`);
    const owlCarousel = document.getElementById('owlCarousel');

    // Clear existing carousel items
    owlCarousel.innerHTML = '';

    // Add images to the carousel
    images.forEach(img => {
        const imgSrc = img.src;
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `<img src="${imgSrc}" class="d-block w-100" alt="Carousel Image">`;
        owlCarousel.appendChild(item);
    });

    // Initialize Owl Carousel
    $('#owlCarousel').owlCarousel('destroy'); // Destroy any existing instance
    $('#owlCarousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
responsive: {
    0: {
        items: 1, // One item for small screens
    },
    768: {
        items: 1, // Two items for medium screens
    },
    1024: {
        items: 1, // Three items for larger screens
    },
},
    });

    // Show the modal
    $('#carouselModal').modal('show');
}

// Add click event listeners to tab images
document.querySelectorAll('.tab-pane').forEach(tab => {
    tab.addEventListener('click', event => {
        if (event.target.tagName === 'IMG') {
            openCarousel(tab.id);
        }
    });
});

$(document).ready(function () {
$(".owl-carousel").owlCarousel({
items: 1, // Show one item at a time
loop: true,
margin: 10,
nav: true, // Add navigation arrows
dots: true, // Add dots for navigation
autoplay: true,
autoplayTimeout: 4000,

});
});

