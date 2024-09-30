let selectedRating = 0;
let submitBtn = document.getElementById('submit-btn');
// console.log(submitBtn);
let ratingSelect = document.querySelectorAll('.rating-btn');
// console.log(ratingSelect)
ratingSelect.forEach((button) => {
    button.addEventListener("click", function () {
        //here we add our rating into the thank you card
        selectedRating = this.innerText;
        //this refers to the this ratingSelect or buttons innertext

    })
})
let ratingSelection = document.getElementById('rating-selection');
let thankYouCard = document.getElementById('thank-you-card');
let ratingCard = document.getElementById('rating-card');
//add event listener to the submit button 
submitBtn.addEventListener("click", function () {
    // console.log("btn clicked");
    if (selectedRating > 0) {
        //here we check the rating should be given 
        // Update the rating in the thank you card
        ratingSelection.innerText = selectedRating;

        // Hide the rating card and show the thank you card
        ratingCard.style.display = 'none';
        thankYouCard.style.display = 'block';
    } else {
        //if no rating is selected then push alert
        alert('Please select a rating before submitting.');
    }
});
