

function drawCool() {
  // Green-tinted background to communicate success
  image(beach, 0, 0, width, height);
  image(shark, 200, 400, 400, 300);
  image(pib, 500, 450, 100, 100);


  fill(255, 0, 0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("Your dinner!", width / 2, 300);

  // Instruction text
  textSize(20);
  text("rip Pib, TRY AGAIN", width / 2, 360);
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function coolMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function coolKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
