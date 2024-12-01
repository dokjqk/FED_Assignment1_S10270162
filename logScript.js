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

let starSymbols = {
  1: '★',
  2: '★★',
  3: '★★★',
  4: '★★★★',
  5: '★★★★★',
}; 

let submitButton = document.querySelector('button');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  // Add 'pressed' class to the button
  submitButton.classList.add('pressed');
  
  let selectedRating = document.querySelector('input[name="rating"]:checked');
  let ratingValue = null;
  if (selectedRating) {
    ratingValue = selectedRating.value;
    ratingValue = starSymbols[ratingValue];
    console.log('Selected Rating:', ratingValue);
    // Save the rating value to local storage or send it to a server
    localStorage.setItem('selectedRating', ratingValue);
    // window.location.href = 'user.html';
  } else {
    console.log('No rating selected');
  }

  let reviewText = document.querySelector('.review-textbox').value;
  let reviewDate = document.querySelector('#review-date').value;
 
  // Retrieve the film name from localStorage
  let film = localStorage.getItem('film');

  // Retrieve existing reviewData from localStorage
  let existingReviewData = JSON.parse(localStorage.getItem('reviewData')) || [];

  // Create a new review object
  let newReview = {
    filmName: film,
    reviewDate: reviewDate,
    reviewText: reviewText,
    selectedRating: parseInt(Object.keys(starSymbols).find(key => starSymbols[key] === ratingValue), 10),
    filmImage: dictionary[film],
  };

  // Add the new review to the array
  existingReviewData.unshift(newReview); // Add to the beginning

  // Save the updated array to localStorage
  localStorage.setItem('reviewData', JSON.stringify(existingReviewData));

  // Remove 'pressed' class after a short delay
  setTimeout(() => {
    submitButton.classList.remove('pressed');
  }, 200);

  // Add this line outside the if block to always redirect:
  window.location.href = 'user.html';
});

let dictionary = {
  'Dune': 'dune.jpg',
  'Dune 2': 'dune-part-two.jpg',
  'Venom: The Last Dance': 'venom-the-last-dance.jpg',
  "Howl's Moving Castle": 'howls-moving-castle.jpg',
  "Harry Potter and the Philosopher's Stone": 'harry-potter-and-the-philosophers-stone.jpg',
  "Look Back": 'look-back.jpg',
  "Scott Pilgrim vs. The World": 'scott-pilgrim-vs-the-world.jpg',
  "The Truman Show": 'the-truman-show.jpg',
  "My Neighbor Totoro": 'my-neighbor-totoro.jpg',
  'Parasite': 'parasite.jpg',
  'Drive My Car': 'drive-my-car.jpg',
  'Elevation': 'elevation.jpg',
  'Gladiator 2': 'gladiator.jpg',
  'Moana 2': 'moana-2.jpg',
  'The Grand Budapest Hotel': 'the-grand-budapest-hotel.jpg',
  'Mufasa': 'mufasa.jpg',
  'Red One': 'red-one.jpg',
  'Sonic the Hedgehog 3': 'sonic-the-hedgehog-3.jpg',
  'Lord of the Rings': 'lord-of-the-rings.jpg',
  'Wicked': 'wicked.jpg',
  'Y2K': 'y2k.jpg',
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
