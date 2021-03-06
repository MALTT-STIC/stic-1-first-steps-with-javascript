/**
 * In this file we have the instructions/algorithmes to add interactive behaviors to the flash card example.
 * More specifically we want to :
 *
 * (1) Hide one of the card when the user first see the page
 * (2) Use the "Show labels" button to switch to the card with labels
 * (3) Use the "Hide labels" button to switch to the card without labels
 * (4) Increment a counter everytime the user look at the labels
 *
 */

// (4) Set the counter initially to 0
var counter = 0;

// Identify the cards and create a reference to them with two variables
var noLabels = document.getElementById("no-labels");
var yesLabels = document.getElementById("yes-labels");

// (1) Decide which card you want to show on startup. One must be set to "block" and the other to "none"
noLabels.style.display = "block";
yesLabels.style.display = "none";

// (2) When the user click on the "Show labels" button, the card yesLabels will be displayed
document.getElementById("show-btn").addEventListener("click", function() {
  noLabels.style.display = "none";
  yesLabels.style.display = "block";
  // (4) Increment the counter every time this button is clicked
  counter++;
  // (4) Update the counter on the page
  document.getElementById("look-times").textContent = counter;
});

// (3) When the user click on the "Hide labels" button, the card noLabels will be displayed
document.getElementById("hide-btn").addEventListener("click", function() {
  noLabels.style.display = "block";
  yesLabels.style.display = "none";
});
