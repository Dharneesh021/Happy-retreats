document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create the WhatsApp message
    const whatsappMessage = `*Get In Touch*: \n\n*Full Name*: ${fullname}\n*Email*: ${email}\n*Phone*: ${phone}\n*Subject*: ${subject}\n*Message*: ${message}`;

    // Encode the message for URL compatibility
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Your WhatsApp number (add country code without + sign)
    const whatsappNumber = '9071135381';  // Replace with your WhatsApp number

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');

    // Clear the form after submission
    document.getElementById('contactForm').reset();
  });