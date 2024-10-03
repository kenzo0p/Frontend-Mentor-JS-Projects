let ans = document.querySelector(".ans");
let que = document.querySelector('.que-q');
let button = document.getElementById('#btn');
let minus = document.querySelector(".minus");
let plus = document.querySelectorAll(".plus");

// Get all question elements
const questions = document.querySelectorAll('.question');

// Loop through each question element it means every element will be selected remember that
questions.forEach((question) => {
  // Get the plus button, minus button, and paragraph
  const plusButton = question.querySelector('.plus');
  const minusButton = question.querySelector('.minus');
  const paragraph = question.querySelector('.ans');

  // Add event listener to plus button
  plusButton.addEventListener('click', () => {
    // Show paragraph and minus button, hide plus button
    paragraph.style.display = 'block';
    minusButton.style.display = 'block';
    plusButton.style.display = 'none';
  });

  // Add event listener to minus button
  minusButton.addEventListener('click', () => {
    // Hide paragraph and minus button, show plus button
    paragraph.style.display = 'none';
    minusButton.style.display = 'none';
    plusButton.style.display = 'block';
  });

});