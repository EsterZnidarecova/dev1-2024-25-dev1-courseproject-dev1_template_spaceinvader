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
        drawLayer1House1();
        drawLayer1House2();
        drawLayer1House3();
        drawLayer2House1();
        drawLayer2House2();
        drawLayer2House3();
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
function drawLayer1House1() {

    //1 column
    context.fillStyle = "yellow";
    context.fillRect(275, 745, 40, 110);
    //2 column
    context.fillRect(390, 745, 40, 110);
    //3 column
    context.fillRect(510, 745, 40, 110);
    //1 window
    context.fillRect(510, 570, 70, 170);
    //2 window
    context.fillRect(415, 570, 70, 170);
    //3 window
    context.fillRect(320, 570, 70, 170);
    //detail 1
    context.fillRect(395, 540, 15, 15);
    //detail 2
    context.fillRect(445, 540, 15, 15);
    //detail 3
    context.fillRect(495, 540, 15, 15);
    //small window left
    context.fillRect(330, 390, 30, 100);
    //small window right
    context.fillRect(540, 390, 30, 100);
    //middle window
    context.fillRect(390, 360, 120, 125);
    //roof window
    context.fillRect(400, 215, 100, 95);

}
function drawLayer1House2() {

    //1 step
    context.fillStyle = "yellow";
    context.fillRect(800, 845, 190, 10);
    //2 step
    context.fillRect(830, 830, 160, 10);
    //3 step
    context.fillRect(830, 815, 160, 10);
    //4 step
    context.fillRect(830, 800, 160, 10);
    //5 step
    context.fillRect(830, 785, 160, 10);
    //terrace
    context.fillRect(630, 785, 195, 20);
    //the door
    context.fillRect(865, 600, 85, 180);
    //the window
    context.fillRect(660, 600, 150, 170);
    //light 1
    context.fillRect(830, 640, 10, 30);
    //light 2
    context.fillRect(965, 640, 10, 30);
    //the big window
    context.fillRect(680, 380, 250, 120);
    //the roof window
    context.fillRect(785, 230, 40, 70);
}
function drawLayer1House3() {
    //detail1
    context.fillStyle = "yellow";
    context.fillRect(1100, 830, 8, 10);
    //detail2
    context.fillRect(1140, 830, 8, 10);
    //detail3
    context.fillRect(1180, 830, 8, 10);
    //detail4
    context.fillRect(1210, 830, 10, 10);
    //detail5
    context.fillRect(1250, 830, 10, 10);
    //detail6
    context.fillRect(1290, 830, 10, 10);
    //box1
    context.fillRect(1099, 772, 90, 55);
    //box2
    context.fillRect(1210, 807, 90, 20);
    //rim1
    context.fillRect(1100, 750, 180, 5);
    //courtain1
    context.fillRect(1100, 625, 50, 120);
    //rim2
    context.fillRect(1020, 600, 260, 20);
    //rim3
    context.fillRect(1100, 550, 180, 5);
    //courtain2
    context.fillRect(1228, 425, 50, 120);
    //rim4
    context.fillRect(1105, 400, 265, 20);
}
function drawLayer2House1() {

    context.fillStyle = "blue";

    //1st set the biggest windows
    let rows = 4;
    let w = 21;
    let h = 25;
    let marginX = 397;
    let marginY = 367;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            let x = marginX + i * (w + 8);
            let y = marginY + j * (h + 4);
            context.fillRect(x, y, w, h);
        }
    }
    //2nd set of windows
    let rady = 3;
    let columns = 3;
    let v = 21;
    let s = 25;
    let mezeraX = 410;
    let mezeraY = 222;
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rady; j++) {
            let x = mezeraX + i * (v + 8);
            let y = mezeraY + j * (s + 4);
            context.fillRect(x, y, w, h);
        }
    }
    //1st set of small left
    let ady = 3;
    let olumns = 1;
    let o = 21;
    let f = 25;
    let mezeraK = 335;
    let mezeraM = 395;
    for (let i = 0; i < olumns; i++) {
        for (let j = 0; j < ady; j++) {
            let x = mezeraK + i * (o + 3);
            let y = mezeraM + j * (f + 8);
            context.fillRect(x, y, w, h);
        }
    }
    //2nd set of small right
    let dy = 3;
    let lumns = 1;
    let d = 21;
    let a = 25;
    let mezeraA = 545;
    let mezeraH = 395;
    for (let i = 0; i < lumns; i++) {
        for (let j = 0; j < dy; j++) {
            let x = mezeraA + i * (d + 3);
            let y = mezeraH + j * (a + 8);
            context.fillRect(x, y, w, h);
        }
    }
    //bottom left
    let y = 5;
    let umns = 2;
    let e = 21;
    let q = 25;
    let mezeraE = 330;
    let mezeraR = 577;
    for (let i = 0; i < umns; i++) {
        for (let j = 0; j < y; j++) {
            let x = mezeraE + i * (e + 8);
            let y = mezeraR + j * (q + 8);
            context.fillRect(x, y, w, h);
        }
    }
    //bottom right
    let u = 5;
    let mns = 2;
    let l = 21;
    let p = 25;
    let mezeraL = 425;
    let mezeraP = 577;
    for (let i = 0; i < mns; i++) {
        for (let j = 0; j < u; j++) {
            let x = mezeraL + i * (l + 8);
            let y = mezeraP + j * (p + 8);
            context.fillRect(x, y, w, h);
        }
    }
    //the door detail 1
    context.fillRect(520, 580, 21, 25);
    //the door detail 2
    context.fillRect(550, 580, 21, 25);
    //the door
    context.fillRect(518, 620, 55, 120);
}
function drawLayer2House2() {

    context.fillStyle = "blue";
    //downstairs window left
    context.fillRect(695, 810, 35, 25);
    //downstairs window right
    context.fillRect(735, 810, 35, 25);
    //1window big
    context.fillRect(685, 640, 45, 115);
    //2window big
    context.fillRect(735, 640, 45, 115);
    //1window big detail
    context.fillRect(685, 615, 45, 20);
    //2window big detail
    context.fillRect(735, 615, 45, 20);
    //the door
    context.fillRect(878, 640, 60, 130);
    //main window1
    context.fillRect(720, 430, 40, 70);
    context.fillRect(720, 400, 40, 25);
    //main window2
    context.fillRect(765, 430, 40, 70);
    context.fillRect(765, 400, 40, 25);
    //main window3
    context.fillRect(810, 430, 40, 70);
    context.fillRect(810, 400, 40, 25);
    //main window4
    context.fillRect(855, 430, 40, 70);
    context.fillRect(855, 400, 40, 25);
    //the roof windows
    context.fillRect(790, 270, 30, 25);
    context.fillRect(790, 240, 30, 25);
}
function drawLayer2House3(){

}

