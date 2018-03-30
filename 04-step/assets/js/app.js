/**
 * In this file we have the instructions/algorithmes to add interactive behaviors to the flash card example.
 * More specifically we want to :
 *
 * (1) Hide one of the card when the user first see the page
 *
 */

// Identify the cards and create a reference to them with two variables
var noLabels = document.getElementById("no-labels");
var yesLabels = document.getElementById("yes-labels");

// (1) Decide which card you want to show on startup. One must be set to "block" and the other to "none"
noLabels.style.display = "block";
yesLabels.style.display = "none";
