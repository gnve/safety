// Select the elements
const seasonElement = document.getElementById('Season');
const tipElement = document.getElementById('Tip');
const descriptionElement = document.getElementById('Description');
const retryButton = document.getElementById('retry-button');

// Add an event listener to the retry button
retryButton.addEventListener('click', displayRandomTip);

// Load the safety tips from the safety-tips.js file
const tips = safetyTips;

// Display a random safety tip
function displayRandomTip() {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * tips.length);

  // Get the safety tip at the random index
  const tip = tips[randomIndex];

  // Update the elements with the safety tip information
  seasonElement.innerHTML = tip.Season;
  tipElement.innerHTML = tip.Tip;
  descriptionElement.innerHTML = tip.Description;
}

// Display an initial safety tip
displayRandomTip();
