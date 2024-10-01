// Get the form, input field, error message, main card, and thank you card
const form = document.getElementById('email-form');
const inputField = document.getElementById('input');
const errorMessage = document.querySelector('.error-message');
const mainCard = document.querySelector('.main-card');
const thankYouCard = document.querySelector('.thank-you-card');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  // Check input pattern
  if (inputField.validity.patternMismatch) {
    // Display error message
    errorMessage.style.display = 'block';
  } else {
    // Hide error message
    errorMessage.style.display = 'none';

    // Hide main card and show thank you card
    mainCard.style.display = 'none';
    thankYouCard.style.display = 'block';

    // Get the email address and display it in the thank you card
    const emailAddress = inputField.value; //it will get an email to b tag
    const emailElement = document.querySelector('.email-t');
    emailElement.textContent = emailAddress; //here it will store
  }
});

// Add event listener to dismiss button
const dismissButton = document.querySelector('.btn-dark');
dismissButton.addEventListener('click', () => {
  // Hide thank you card and show main card
  thankYouCard.style.display = 'none';
  window.location.reload();

  // Clear input field
  inputField.value = ''; //to reset the input again
});