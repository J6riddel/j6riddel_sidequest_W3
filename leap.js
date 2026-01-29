

function drawLeap() {
  image(canyon, 0, 0, width, height);
  image(pib, 400, 170, 150, 250);
  image(pib, 180, 170, 150, 250);

  fill(50, 50, 200);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("You Made It!", width / 2, 300);

  // Instruction text
  textSize(20);
  text("Pib's tired, lets go back home...", width / 2, 360);
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function leapMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function leapKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
