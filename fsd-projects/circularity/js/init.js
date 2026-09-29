var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circles = [];


        // TODO 2 : Create a function that draws a circle
        // draws the circles
        function drawCircle(){
            // Code to draw a circle
            var circle = draw.randomCircleInArea(canvas, true, true, '#999', 2); // uses an existing draw function to draw a circle of random size, color and location within the canvas. It stores the output of that funct
            physikz.addRandomVelocity(circle, canvas, 5, 5); //uses the physikz library to add a random velocity and direction to the circle
            view.addChild(circle); //adds the circle as a child of view so that the circle appears on screen
            circles.push(circle); //saves the circle to an array of circles by pushing it to the end of the array
        }

        Gamification.init({
            canvas: canvas,
            view: view,
            draw: draw,
            physikz: physikz,
            circles: circles,
            game: game
        });


        /*
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        */


        // TODO 7 : Use a loop to create multiple circles
        //loops the creation for all circles created instead of individually
        for (var i = 0; i <101; i++) {
            drawCircle();
        }



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
            /*
            physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
            
            // TODO 5 : Call game.checkCirclePosition() on your circles
            game.checkCirclePosition(circles[0]);
            game.checkCirclePosition(circles[1]);
            game.checkCirclePosition(circles[2]);
            game.checkCirclePosition(circles[3]);
            game.checkCirclePosition(circles[4]);
            */

            // TODO 8 / TODO 9 : Iterate over the array
            //loops the new positions for all circles created instead of individually
            for (var i = 0; i < 101; i++) {
                physikz.updatePosition(circles[i]);
                game.checkCirclePosition(circles[i]);
            }

            Gamification.update();
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            var rightEdge = circle.x + circle.radius;//calculates specific distance met for smoother transitions
            var leftEdge = circle.x - circle.radius;

            if (leftEdge > canvas.width ) {
                circle.x = 0 - circle.radius;
            } else if (rightEdge < 0) {
                circle.x = canvas.width + circle.radius;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            var bottomEdge = circle.y + circle.radius;//calculates specific distance met for smoother transitions
            var topEdge = circle.y - circle.radius;

            if (bottomEdge > canvas.height) {
                circle.y = 0 + circle.radius;
            } else if (topEdge < 0) {
                circle.y = canvas.height - circle.radius;
            }


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
