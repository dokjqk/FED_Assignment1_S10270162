let stars = document.querySelectorAll('input');
let showValues = document.querySelectorAll('#rating-value');

stars.forEach(star => {
  star.addEventListener('click', function() {
    let value = this.value;

    // Update the visual representation of the stars
    stars.forEach(s => {
      if (s.value <= value) {
        s.classList.add('selected');
      } else {
        s.classList.remove('selected');
      }
    });
  });
});

let submitButton = document.querySelector('button');

submitButton.addEventListener('click', function() {
  // Add 'pressed' class to the button
  submitButton.classList.add('pressed');
  
  let selectedRating = document.querySelector('input[name="rating"]:checked');
  if (selectedRating) {
    let ratingValue = selectedRating.value;
    console.log('Selected Rating:', ratingValue);
    // Save the rating value to local storage or send it to a server
    localStorage.setItem('selectedRating', ratingValue);
    window.location.href = 'user.html';
  } else {
    console.log('No rating selected');
  }

  // Remove 'pressed' class after a short delay
  setTimeout(() => {
    submitButton.classList.remove('pressed');
  }, 200);
});

let dictionary = {
  'Dune': 'dune.jpg',
  'Dune 2': 'dune-part-two.jpg',
  'Venom: The Last Dance': 'venom-the-last-dance.jpg',
  // Add more film entries as needed
};

// Get the film value from localStorage
let film = localStorage.getItem('film');
if (film && dictionary[film]) {
  let imgElement = document.querySelector('#log-image img');
  imgElement.src = `./images/${dictionary[film]}`;
  let filmTitleElement = document.querySelector('#review-side h3:nth-child(2)');
  filmTitleElement.textContent = film;
} else {
  console.log('Film not found in dictionary');
}
