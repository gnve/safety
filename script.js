// Load the safety tips from the JSON file
fetch('safety-tips.json')
  .then(response => response.json())
  .then(tips => {
    // Select the elements
    const seasonElement = document.getElementById('season');
    const tipElement = document.getElementById('tip');
    const descriptionElement = document.getElementById('description');
    const retryButton = document.getElementById('retry-button');

    // Add an event listener to the retry button
    retryButton.addEventListener('click', displayRandomTip);

    // Display a random safety tip
    function displayRandomTip() {
      // Generate a random index
      const randomIndex = Math.floor(Math.random() * tips.length);

      // Get the safety tip at the random index
      const tip = tips[randomIndex];

      // Update the elements with the safety tip information
      seasonElement.innerHTML = tip.season;
      tipElement.innerHTML = tip.tip;
      descriptionElement.innerHTML = tip.description;
    }

    // Display an initial safety tip
    displayRandomTip();
  });

