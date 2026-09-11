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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(28, 22, 22)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();
    

    // TODO 2 - Create Platforms
    createPlatform(0,400,550,100, "rgb(77, 105, 83)");
    createPlatform(100,0,65,255, "rgb(69, 106, 77)");
    createPlatform(250,300,50,150, "rgb(69, 106, 77)");
    createPlatform(250,0,50,150, "rgb(69, 106, 77)");
    createPlatform(300,300,250,50, "rgb(69, 106, 77)");
    createPlatform(450,200,100,150, "rgb(69, 106, 77)");
    createPlatform(650,0,100,350, "rgb(69, 106, 77)");
    createPlatform(300,300,250,150, "rgb(69, 106, 77)");
    createPlatform(550,450,550,50, "rgb(69, 106, 77)");
    createPlatform(750,300,150,50, "rgb(69, 106, 77)");
    createPlatform(1000,400,150,100, "rgb(69, 106, 77)");
    createPlatform(1100,300,50,100, "rgb(69, 106, 77)");
    createPlatform(1100,0,50,200, "rgb(69, 106, 77)");
    createPlatform(700,0,450,125, "rgb(69, 106, 77)");
    createPlatform(1275,0,450,500, "rgb(69, 106, 77)");
    createPlatform(1350,0,450,1035, "rgb(69, 106, 77)");
    createPlatform(0,700,1350,100, "rgb(69, 106, 77)");
    createPlatform(0,500,1025,35, "rgb(69, 106, 77)");
    createPlatform(1175,500,65,20, "rgb(69, 106, 77)");
    createPlatform(1000,500,25,100, "rgb(69, 106, 77)");

    // TODO 3 - Create Collectables
    createCollectable("catshock", 480, 155);
    createCollectable("catstare", 580, 300);
    createCollectable("catbleh", 680, 405);
    createCollectable("catside", 780, 250);
    createCollectable("catnerd", 1180, 450);
    createCollectable("catmilk", 1180, 450);
    createCollectable("catdrool", 360, 625);
    
    // TODO 4 - Create Cannons\
    
    
    createCannon("top", 120, 10, 150);
    createCannon("bottom", 140, 10, 145);
    createCannon("right", 325, 1400, 50, 50);
    createCannon("right", 100, 10, 100, 120);
    createCannon("bottom", 740, 1200, 75, 30);
    createCannon("left", 675, 1200, 50, 150);
    
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
