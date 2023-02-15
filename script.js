// Retrieve the data from the array.js file
fetch("array.js")
  .then(response => response.text())
  .then(data => {
    // Parse the data into an array of objects
    var safetyTips = JSON.parse(data);

    var safetyTipElement = document.getElementById("safety-tip");
    var safetySeasonElement = document.getElementById("safety-season");
    var safetyDescriptionElement = document.getElementById("safety-description");
    var retryButton = document.getElementById("retry-button");

    function displayRandomTip() {
      var randomTip = safetyTips[Math.floor(Math.random() * safetyTips.length)];
      safetyTipElement.innerHTML = randomTip.Tip;
      safetySeasonElement.innerHTML = "Season: " + randomTip.Season;
      safetyDescriptionElement.innerHTML = randomTip.Description;
    }

    retryButton.addEventListener("click", displayRandomTip);

    // Display a random tip when the page loads
    displayRandomTip();
  });
