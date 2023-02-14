var safetyTips = [
  {
    "Season": "Spring",
    "Tip": "Tip 1",
    "Description": "Description 1"
  },
  {
    "Season": "Summer",
    "Tip": "Tip 2",
    "Description": "Description 2"
  },
  {
    "Season": "Fall",
    "Tip": "Tip 3",
    "Description": "Description 3"
  },
  {
    "Season": "Winter",
    "Tip": "Tip 4",
    "Description": "Description 4"
  }
];

var safetyTipElement = document.getElementById("safety-tip");
var retryButton = document.getElementById("retry-button");

function displayRandomTip() {
  var randomTip = safetyTips[Math.floor(Math.random() * safetyTips.length)];
  safetyTipElement.innerHTML = "<h3>" + randomTip.Season + "</h3><h2>" + randomTip.Tip + "</h2><p>" + randomTip.Description + "</p>";
}

retryButton.addEventListener("click", displayRandomTip);

// Display a random tip when the page loads
displayRandomTip();
