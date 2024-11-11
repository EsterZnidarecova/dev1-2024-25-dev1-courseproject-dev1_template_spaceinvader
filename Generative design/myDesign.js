"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


drawBackround();

function drawBackround() {

    //the backround color
    context.fillStyle = "rgb(255, 190, 193)";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    let colors = [
        'rgb(169, 169, 169)', // Gray
        'rgb(255, 165, 0)',   // Orange
        'rgb(0, 255, 0)',     // Green
        'rgb(135, 206, 250)', // Sky blue
        'rgb(255, 99, 71)'    // Tomato red
    ];

    function getRandomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Iterate over the color palette to draw each house with a different color
    for (let i = 0; i < colors.length; i++) {
        
        let color = getRandomColor(colors);   // Select color from the palette
        let color1 = getRandomColor(colors);
        let color2 = getRandomColor(colors);

        // Draw each house with the current color and position
        drawHouse1(color);  // Pass xOffset and color
        drawHouse2(color1);  // Adjust xOffset for each house
        drawHouse3(color2);  // Adjust xOffset for each house
    }

}

function drawHouse1(color) {
    // Set the color for the base
    context.fillStyle = color;
    context.fillRect(300, 540, 300, 300);

    //rim 1
    context.fillRect(295, 525, 90, 10);

    //rim 3
    context.fillRect(398, 518, 110, 18);

    //rim 2
    context.fillRect(515, 525, 90, 10);

    //the second block
    context.fillRect(300, 335, 300, 180);

    //rim 1
    context.fillRect(295, 320, 98, 10);

    //rim 2
    context.fillRect(400, 315, 100, 15);

    //rim 3
    context.fillRect(505, 320, 98, 10);

    //the third block
    context.fillRect(300, 280, 300, 30);

    //the detail 1 left

    context.fillRect(330, 270, 65, 8);

    //the detail 2 right
    context.fillRect(505, 270, 65, 8);

    //the detail 2 left
    context.fillRect(290, 260, 105, 8);

    //the detail 2 right
    context.fillRect(505, 260, 105, 8);

    //the roof 1 part
    context.fillRect(400, 185, 100, 95);

    //the roof top part
    context.fillRect(340, 160, 220, 8);

    //the main part of the roof 
    context.beginPath();
    context.moveTo(350, 170);      // Starting point (top-left corner)
    context.lineTo(550, 170);      // Top-right corner (wider)
    context.lineTo(595, 258);      // Bottom-right corner (narrower)
    context.lineTo(300, 258);      // Bottom-left corner (narrower)
    context.closePath();           // Close the shape

    // Fill the shape with the current fill color
    context.fill();

    //1 chimney
    context.fillRect(300, 158, 20, 100);

    //2 chimney
    context.fillRect(575, 158, 20, 100);

    //1 chimney detail 
    context.fillRect(295, 145, 30, 8);

    //2 chimney detail
    context.fillRect(570, 145, 30, 8);


}

function drawHouse2(color1) {

    context.fillStyle = color1;
    //the first detail
    context.fillRect(630, 845, 160, 10);

    //the first block
    context.fillRect(630, 545, 360, 295);

    //The second detail
    context.fillRect(630, 535, 360, 5);

    //the third detail
    context.fillRect(624, 505, 375, 25);

    //the second block
    context.fillRect(635, 360, 345, 140);

    //the fourth detail
    context.fillRect(624, 330, 375, 25);

    //the roof
    context.beginPath();
    context.moveTo(805, 170);      // Starting point (top-left corner)
    context.lineTo(805, 170);      // Top-right corner (wider)
    context.lineTo(995, 325);      // Bottom-right corner (narrower)
    context.lineTo(625, 325);      // Bottom-left corner (narrower)
    context.closePath();           // Close the shape
    context.fill();
}

function drawHouse3(color2) {

    //the first block
    context.fillStyle = color2;
    context.fillRect(1020, 350, 350, 490);

    //first detail
    context.fillRect(1020, 330, 350, 15);

    //the roof
    context.beginPath();
    context.moveTo(1100, 220);      // Starting point (top-left corner)
    context.lineTo(1300, 220);      // Top-right corner (wider)
    context.lineTo(1365, 325);      // Bottom-right corner (narrower)
    context.lineTo(1025, 325);      // Bottom-left corner (narrower)
    context.closePath();
    context.fill();

    //the chimney 1
    context.fillRect(1180, 178, 20, 40);

    //the chimney 2
    context.fillRect(1158, 178, 20, 40);

    //the 1 detail of chimney 2
    context.fillRect(1158, 170, 20, 5);
  
    //the 2 detail of chimney 2
    context.fillRect(1165, 158, 5, 10);




}
