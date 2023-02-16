// Select the elements
const seasonElement = document.getElementById('Season');
const tipElement = document.getElementById('Tip');
const descriptionElement = document.getElementById('Description');
const retryButton = document.getElementById('retry-button');
const allSeasonsButton = document.getElementById('year-round');
const summerButton = document.getElementById('summer');
const winterButton = document.getElementById('winter');
const springButton = document.getElementById('spring');
const fallButton = document.getElementById('fall');

// Add event listeners to the season buttons
allSeasonsButton.addEventListener('click', function() {
  displayRandomTip('Year-round');
});
summerButton.addEventListener('click', function() {
  displayRandomTip('Summer');
});
winterButton.addEventListener('click', function() {
  displayRandomTip('Winter');
});
springButton.addEventListener('click', function() {
  displayRandomTip('Spring');
});
fallButton.addEventListener('click', function() {
  displayRandomTip('Fall');
});

// Add an event listener to the retry button
retryButton.addEventListener('click', function() {
  displayRandomTip();
});

// Load the safety tips from the safety-tips.js file
const tips = safetyTips;

// Display a random safety tip for a given season
function displayRandomTip(season = '') {
  // Filter the tips based on the selected season
  const filteredTips = tips.filter(function(tip) {
    return (season === '' || tip.Season === season);
  });

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * filteredTips.length);

  // Get the safety tip at the random index
  const tip = filteredTips[randomIndex];

  // Update the elements with the safety tip information
  seasonElement.innerHTML = tip.Season;
  tipElement.innerHTML = tip.Tip;
  descriptionElement.innerHTML = tip.Description;
}

// Display an initial safety tip
displayRandomTip();
