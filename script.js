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
  };




// Retrieve loggedReviewData from localStorage
let storedLoggedReviewData = localStorage.getItem('reviewData');
let loggedReviewData = null;
if (storedLoggedReviewData) {
  loggedReviewData = JSON.parse(storedLoggedReviewData);
}

let starSymbols = {
    1: '★',
    2: '★★',
    3: '★★★',
    4: '★★★★',
    5: '★★★★★',
  }; 

  function clearReviewsContainer() {
    const reviewsContainer = document.getElementById('recent-reviews-user');
    reviewsContainer.innerHTML = ''; // Clear existing content
}

// Function to update the movie name in the diary section
function updateDiary(movieName) {
    const diaryElement = document.getElementById('movie-diary-updated');
    const h2 = document.createElement('h2');
    h2.textContent = movieName;
    diaryElement.appendChild(h2);
}

// Example usage:
// updateDiary('New Movie Name');


// Function to render reviews
function renderReviews() {
    clearReviewsContainer()
    if (loggedReviewData && loggedReviewData.length > 0) {
        const reviewsContainer = document.getElementById('recent-reviews-user');
        reviewsContainer.innerHTML = ''; // Clear existing content
        loggedReviewData.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('recent-review');
            reviewElement.innerHTML = `
                <div id="recent-reviews-img">
                    <img src="./images/${review.filmImage}" alt="${review.filmName}">
                </div>
                <div id="recent-reviews-text">
                    <div id="recent-reviews-movie-name">
                        <h3>${review.filmName}</h3>
                    </div>
                    <div id="recent-reviews-rating">
                        <h3 class="stars">${starSymbols[review.selectedRating]}</h3>
                        <h2>Watched ${review.reviewDate}</h2>
                    </div>
                    <div>
                        <h2>${review.reviewText}</h2>
                    </div>
                </div>
            `;
            reviewsContainer.appendChild(reviewElement);
            
            // Add movie name to diary
            updateDiary(review.filmName);
        });
    }
}

// Call renderReviews when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderReviews);











