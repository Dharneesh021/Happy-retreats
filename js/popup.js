document.getElementById('uniqueBookNowForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById('uniqueName').value;
  const mailId = document.getElementById('uniqueMailId').value;
  const checkInDate = document.getElementById('uniqueCheckInDate').value;
  const checkOutDate = document.getElementById('uniqueCheckOutDate').value;
  const numPersons = document.getElementById('uniqueNumPersons').value;

  // Validate form data
  if (!name || !mailId || !checkInDate || !checkOutDate || !numPersons) {
      alert('Please fill in all fields.');
      return;
  }

  // Validate check-out date should be after check-in date
  const checkInDateObj = new Date(checkInDate);
  const checkOutDateObj = new Date(checkOutDate);


  if (checkOutDateObj < checkInDateObj) {
      alert('Check-out date must be after the check-in date.');
      return;
  }

  // Prepare the message to send to WhatsApp
  const message = `Booking Details:\nName: ${name}\nMail ID: ${mailId}\nCheck-in Date: ${checkInDate}\nCheck-out Date: ${checkOutDate}\nNumber of Persons: ${numPersons}`;
  
  // Construct the WhatsApp URL
  const phoneNumber = '9071135381';  // The phone number you want to send the message to
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp URL in a new tab
    window.open(whatsappURL, '_blank');



  // Clear form data after submission
  document.getElementById('uniqueBookNowForm').reset();

  // Optionally, focus on the first field again (or any other field you prefer)
  document.getElementById('uniqueName').focus();

  // Close the modal (if needed)
  const modal = bootstrap.Modal.getInstance(document.getElementById('uniqueBookNowModal'));
  modal.hide();

  // Reset modal if it's needed to be reopened (to ensure a fresh state)
  modal._backdrop.hide(); // Hide the backdrop so the modal can reopen fresh.
});
