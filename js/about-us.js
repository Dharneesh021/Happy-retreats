// Image fade-in animation on scroll
window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.fade-in');
    images.forEach(image => {
        if (image.getBoundingClientRect().top < window.innerHeight) {
            image.classList.add('visible');
        }
    });
});

// Content section fade-in on page load
window.addEventListener('load', () => {
    const content = document.getElementById('contentSection');
    content.classList.add('fade-in');
});

// Trigger image fade-in on page load
window.dispatchEvent(new Event('scroll'));




        

{/* <!-- EMBED VIDEO --> */}



    // JS FOR COUNTER CARDS
    function startCounter(id, start, end, duration) {
      let current = start;
      const element = document.getElementById(id);
      const step = (end - start) / (duration / 10);

      const interval = setInterval(() => {
          current += step;
          if (current >= end) {
              current = end;
              clearInterval(interval);
          }
          element.textContent = Math.floor(current) + " ";
      }, 10);
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              startCounter('counter1', 0, 712, 2000);
              startCounter('counter2', 0, 254, 2000);
              startCounter('counter3', 0, 430, 2000);
              startCounter('counter4', 0, 782, 2000);
          }
      });
  });

  const counterSection = document.querySelector('.counter1');
  observer.observe(counterSection);



  // animation for review

  document.addEventListener('DOMContentLoaded', () => {
    const reviewSection = document.querySelector('.reviews');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    reviewSection.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 } // Adjust threshold for when animation should trigger
    );

    observer.observe(reviewSection);
});

          // ANIMATION FOR SECOND CONTAINER IMAGE


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-section .image-item img');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 } // Adjust threshold for when animation should trigger
    );

    images.forEach((image) => observer.observe(image));
});


$(document).ready(function () {
    $('.slick-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, /* Slides will change every 2 seconds */
      dots: true, /* Enable dot navigation */
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
