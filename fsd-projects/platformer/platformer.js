$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    //createPlatform(x, y, width, height, "color")
createPlatform(250, 625, 250, 250);
createPlatform(650, 550, 250, 250);
createPlatform(980, 350, 275, 295);
createPlatform(1200, 625, 120, 10)
createPlatform(1350, 505, 100, 10)
createPlatform(1200, 380, 120, 10)
createPlatform(1, 350, 150, 10)
createPlatform(275, 350, 800, 10)
createPlatform(275, 250, 130, 10)

    // TODO 3 - Create Collectables
    //createCollectable("type", x, y, gravity, bounce)
createCollectable("collectible", 925, 600)
createCollectable("collectible", 1100, 175)
createCollectable("collectible", 230, 25)

    
    // TODO 4 - Create Cannons
    //createCannon("side", position, delay)
createCannon("top", 625, 1250)
createCannon("bottom", 525, 1250)
createCannon("top", 1385, 950)
createCannon("bottom", 50, 1)
createCannon("right", 250, 750)
createCannon("top", 780, 750)
createCannon("top", 945, 750)
createCannon("left", 350, 800)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
