// JavaScript code for Diamond Drillers BCH website

// Function to display current time
function displayTime() {
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  let currentSecond = currentDate.getSeconds();
  let meridian = "AM";
  if (currentHour > 12) {
    currentHour = currentHour - 12;
    meridian = "PM";
  }
  if (currentHour === 0) {
    currentHour = 12;
  }
  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }
  if (currentSecond < 10) {
    currentSecond = "0" + currentSecond;
  }
  let currentTime = currentHour + ":" + currentMinute + ":" + currentSecond + " " + meridian;
  document.getElementById("current-time").innerHTML = currentTime;
}

// Function to update BCH price from API
function updateBCHPrice() {
  fetch("https://api.coinbase.com/v2/prices/BCH-USD/spot")
    .then(response => response.json())
    .then(data => {
      let bchPrice = data.data.amount;
      document.getElementById("bch-price").innerHTML = bchPrice;
    })
    .catch(error => console.error(error));
}

// Function to connect to the BCH stratum
function connectToStratum() {
  let stratum = "stratum+tcp://192.168.0.58:8333";
  console.log("Connecting to BCH stratum: " + stratum);
  // Code to connect to stratum goes here
}

// Event listener for page load
window.addEventListener("load", function() {
  // Display current time
  displayTime();
  setInterval(displayTime, 1000);

  // Update BCH price
  updateBCHPrice();
  setInterval(updateBCHPrice, 60000);
});
