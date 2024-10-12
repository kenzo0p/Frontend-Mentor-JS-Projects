document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    let firstName = document.querySelector('input[placeholder="First Name"]');
    let lastName = document.querySelector('input[placeholder="Last Name"]');
    let email = document.querySelector('input[placeholder="Email Address"]');
    let password = document.querySelector('input[placeholder="Password"]');
    
    let isFormValid = true;
  
    // First name validation
    if (firstName.value.trim() === '') {
      firstName.nextElementSibling.style.display = 'flex'; 
      firstName.nextElementSibling.nextElementSibling.style.display = 'flex'; 
      isFormValid = false;
    } else {
      firstName.nextElementSibling.style.display = 'none'; 
      firstName.nextElementSibling.nextElementSibling.style.display = 'none'; 
    }
  
    // Last name validation
    if (lastName.value.trim() === '') {
      lastName.nextElementSibling.style.display = 'flex';
      lastName.nextElementSibling.nextElementSibling.style.display = 'flex';
      isFormValid = false;
    } else {
      lastName.nextElementSibling.style.display = 'none';
      lastName.nextElementSibling.nextElementSibling.style.display = 'none';
    }
  
    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!email.value.match(emailPattern)) {
      email.nextElementSibling.style.display = 'flex';
      email.nextElementSibling.nextElementSibling.style.display = 'flex';
      isFormValid = false;
    } else {
      email.nextElementSibling.style.display = 'none';
      email.nextElementSibling.nextElementSibling.style.display = 'none';
    }
  
    // Password validation
    if (password.value.trim() === '') {
      password.nextElementSibling.style.display = 'flex';
      password.nextElementSibling.nextElementSibling.style.display = 'flex';
      isFormValid = false;
    } else {
      password.nextElementSibling.style.display = 'none';
      password.nextElementSibling.nextElementSibling.style.display = 'none';
    }
  
    if (isFormValid) {
      alert("Form submitted successfully!");
    }
  });
  