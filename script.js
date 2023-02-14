fetch("https://gnve.github.io/safety/safetytips.csv")
  .then(response => response.text())
  .then(data => {
    // Parse the CSV data into an array of objects
    var safetyTips = Papa.parse(data, { header: true, dynamicTyping: true }).data;

    var safetyTipElement = document.getElementById("tip");
    var safetySeasonElement = document.getElementById("season");
    var safetyDescriptionElement = document.getElementById("description");
    var retryButton = document.getElementById("retry-button");

    function displayRandomTip() {
      var randomTip = safetyTips[Math.floor(Math.random() * safetyTips.length)];
      safetyTipElement.innerHTML = randomTip.Tip;
      safetySeasonElement.innerHTML = randomTip.Season;
      safetyDescriptionElement.innerHTML = randomTip.Description;
    }

    retryButton.addEventListener("click", displayRandomTip);

    // Display a random tip when the page loads
    displayRandomTip();
  });
