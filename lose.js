// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"

const looseBtn = {
  x: 400, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "RUN", // text shown on the button
};

const looseBtn2 = {
  x: 400, // x position (centre of the button)
  y: 450, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "JUMP", // text shown on the button
};


function drawLose() {
  // Red-tinted background to communicate failure
  background(255, 210, 210);
  image(jump, 0, 0, width, height);
  image(pib, 500, 100, 100, 150);

  fill(255, 0, 0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  text("UH OH!", width / 2, 300);

  // Instruction text
  textSize(20);
  text("Don't Fall...", width / 2, 360);
  drawLoseButton(looseBtn);
  drawLoseButton(looseBtn2);
}
// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function loseMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(looseBtn)) {
    currentScreen = "game";
    
  }
  if (isHover(looseBtn2)) {
    currentScreen = "leap";
  }
}

// ------------------------------
// Keyboard input for lose screen
// ------------------------------
// R is commonly used for “restart” in games
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}

function drawLoseButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when hovered
  // This gives visual feedback to the player
  fill(
    hover
      ? color(180, 220, 255, 220) // lighter blue on hover
      : color(200, 220, 255, 190), // normal state
  );

  // Draw the button rectangle
  rect(x, y, w, h, 14); // last value = rounded corners

  // Draw the button text
  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

