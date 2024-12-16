"use strict";
import context from "../../scripts/context.js";

drawBackround();

function drawBackround() {

    //the backround color
    context.fillStyle = "rgb(255, 190, 193)";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    //colors for the house bases
    let colors = [
        'rgb(66, 47, 247)',   // beige
        'rgb(255, 165, 0)',   // Orange
        'rgb(64, 158, 57)',   // Green
        'rgb(32, 42, 85)',    // blue
        'rgb(255, 99, 71)'    // Tomato red
    ];
    //colors for the details of house
    let colors1 = [
        'rgb(253, 149, 25)', // Yolk
        'rgb(252, 61, 9)',   // Ochre
        'rgb(103, 0, 253)',  // Violet
        'rgb(22, 157, 55)', // moss
        'rgb(143, 143, 143)'  //grey
    ];

    function getRandomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    for (let i = 0; i < colors.length; i++) {

        let color = getRandomColor(colors);
        let color1 = getRandomColor(colors);
        let color2 = getRandomColor(colors);
        let color3 = getRandomColor(colors1);


        drawHouse1(color);
        drawHouse2(color1);
        drawHouse3(color2);
        drawLayer1House1(color3);
        drawLayer1House2(color3);
        drawLayer1House3(color3);
        drawLayer2House1();
        drawLayer2House2();
        drawLayer2House3();
    }
}

function drawHouse1(color) {

    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;


    let scaleX = canvasWidth / 1920;
    let scaleY = canvasHeight / 1080;

    // Base of the house
    context.fillStyle = color;
    context.fillRect(300 * scaleX, 540 * scaleY, 300 * scaleX, 300 * scaleY);

    // Rim 1
    context.fillRect(295 * scaleX, 525 * scaleY, 90 * scaleX, 10 * scaleY);
    // Rim 3
    context.fillRect(398 * scaleX, 518 * scaleY, 110 * scaleX, 18 * scaleY);
    // Rim 2
    context.fillRect(515 * scaleX, 525 * scaleY, 90 * scaleX, 10 * scaleY);

    // Second block
    context.fillRect(300 * scaleX, 335 * scaleY, 300 * scaleX, 180 * scaleY);

    // Rim 1 (for second block)
    context.fillRect(295 * scaleX, 320 * scaleY, 98 * scaleX, 10 * scaleY);
    // Rim 2 (for second block)
    context.fillRect(400 * scaleX, 315 * scaleY, 100 * scaleX, 15 * scaleY);
    // Rim 3 (for second block)
    context.fillRect(505 * scaleX, 320 * scaleY, 98 * scaleX, 10 * scaleY);

    // Third block
    context.fillRect(300 * scaleX, 280 * scaleY, 300 * scaleX, 30 * scaleY);

    // Detail 1 left
    context.fillRect(330 * scaleX, 270 * scaleY, 65 * scaleX, 8 * scaleY);
    // Detail 2 right
    context.fillRect(505 * scaleX, 270 * scaleY, 65 * scaleX, 8 * scaleY);
    // Detail 2 left
    context.fillRect(290 * scaleX, 260 * scaleY, 105 * scaleX, 8 * scaleY);
    // Detail 2 right
    context.fillRect(505 * scaleX, 260 * scaleY, 105 * scaleX, 8 * scaleY);

    // Roof 1 part
    context.fillRect(400 * scaleX, 185 * scaleY, 100 * scaleX, 95 * scaleY);

    // Roof top part
    context.fillRect(340 * scaleX, 160 * scaleY, 220 * scaleX, 8 * scaleY);

    // Main part of the roof
    context.beginPath();
    context.moveTo(350 * scaleX, 170 * scaleY); // Starting point top left corner)
    context.lineTo(550 * scaleX, 170 * scaleY); // Top right corner 
    context.lineTo(595 * scaleX, 258 * scaleY); // Bottom right corner 
    context.lineTo(300 * scaleX, 258 * scaleY); // Bottom left corner 
    context.closePath();
    context.fill();

    // Chimney 1
    context.fillRect(300 * scaleX, 158 * scaleY, 20 * scaleX, 100 * scaleY);
    // Chimney 2
    context.fillRect(575 * scaleX, 158 * scaleY, 20 * scaleX, 100 * scaleY);

    // Chimney detail 1
    context.fillRect(295 * scaleX, 145 * scaleY, 30 * scaleX, 8 * scaleY);
    // Chimney detail 2
    context.fillRect(570 * scaleX, 145 * scaleY, 30 * scaleX, 8 * scaleY);
}
function drawHouse2(color1) {
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;

    let scaleX = canvasWidth / 1920;
    let scaleY = canvasHeight / 1080;

    // Set the color for the house
    context.fillStyle = color1;

    // The first detail
    context.fillRect(630 * scaleX, 845 * scaleY, 160 * scaleX, 10 * scaleY);

    // The first block
    context.fillRect(630 * scaleX, 545 * scaleY, 360 * scaleX, 295 * scaleY);

    // The second detail
    context.fillRect(630 * scaleX, 535 * scaleY, 360 * scaleX, 5 * scaleY);

    // The third detail
    context.fillRect(624 * scaleX, 505 * scaleY, 375 * scaleX, 25 * scaleY);

    // The second block
    context.fillRect(635 * scaleX, 360 * scaleY, 345 * scaleX, 140 * scaleY);

    // The fourth detail
    context.fillRect(624 * scaleX, 330 * scaleY, 375 * scaleX, 25 * scaleY);

    // The roof
    context.beginPath();
    context.moveTo(805 * scaleX, 170 * scaleY);
    context.lineTo(805 * scaleX, 170 * scaleY);
    context.lineTo(995 * scaleX, 325 * scaleY);
    context.lineTo(625 * scaleX, 325 * scaleY);
    context.closePath();
    context.fill();
}
function drawHouse3(color2) {
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;

    let scaleX = canvasWidth / 1920;
    let scaleY = canvasHeight / 1080;

    context.fillStyle = color2;

    // The first block
    context.fillRect(1020 * scaleX, 350 * scaleY, 350 * scaleX, 490 * scaleY);

    // First detail
    context.fillRect(1020 * scaleX, 330 * scaleY, 350 * scaleX, 15 * scaleY);

    // The roof
    context.beginPath();
    context.moveTo(1100 * scaleX, 220 * scaleY);      // Top left corner
    context.lineTo(1300 * scaleX, 220 * scaleY);      // Top right corner
    context.lineTo(1365 * scaleX, 325 * scaleY);      // Bottom right corner
    context.lineTo(1025 * scaleX, 325 * scaleY);      // Bottom left corner
    context.closePath();
    context.fill();

    // Chimney 1
    context.fillRect(1180 * scaleX, 178 * scaleY, 20 * scaleX, 40 * scaleY);

    // Chimney 2
    context.fillRect(1158 * scaleX, 178 * scaleY, 20 * scaleX, 40 * scaleY);

    // The 1st detail of chimney 2
    context.fillRect(1158 * scaleX, 170 * scaleY, 20 * scaleX, 5 * scaleY);

    // The 2nd detail of chimney 2
    context.fillRect(1165 * scaleX, 158 * scaleY, 5 * scaleX, 10 * scaleY);
}
function drawLayer1House1(color3) {
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;

    let scaleX = canvasWidth / 1920;
    let scaleY = canvasHeight / 1080;

    context.fillStyle = color3;

    // 1st column
    context.fillRect(275 * scaleX, 745 * scaleY, 40 * scaleX, 110 * scaleY);

    // 2nd column
    context.fillRect(390 * scaleX, 745 * scaleY, 40 * scaleX, 110 * scaleY);

    // 3rd column
    context.fillRect(510 * scaleX, 745 * scaleY, 40 * scaleX, 110 * scaleY);

    // 1st window
    context.fillRect(510 * scaleX, 570 * scaleY, 70 * scaleX, 170 * scaleY);

    // 2nd window
    context.fillRect(415 * scaleX, 570 * scaleY, 70 * scaleX, 170 * scaleY);

    // 3rd window
    context.fillRect(320 * scaleX, 570 * scaleY, 70 * scaleX, 170 * scaleY);

    // Detail 1
    context.fillRect(395 * scaleX, 540 * scaleY, 15 * scaleX, 15 * scaleY);

    // Detail 2
    context.fillRect(445 * scaleX, 540 * scaleY, 15 * scaleX, 15 * scaleY);

    // Detail 3
    context.fillRect(495 * scaleX, 540 * scaleY, 15 * scaleX, 15 * scaleY);

    // Small window left
    context.fillRect(330 * scaleX, 390 * scaleY, 30 * scaleX, 100 * scaleY);

    // Small window right
    context.fillRect(540 * scaleX, 390 * scaleY, 30 * scaleX, 100 * scaleY);

    // Middle window
    context.fillRect(390 * scaleX, 360 * scaleY, 120 * scaleX, 125 * scaleY);

    // Roof window
    context.fillRect(400 * scaleX, 215 * scaleY, 100 * scaleX, 95 * scaleY);
}
function drawLayer1House2(color3) {
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;

    let scaleX = canvasWidth / 1920;
    let scaleY = canvasHeight / 1080;

    context.fillStyle = color3;

    // Step 1
    context.fillRect(800 * scaleX, 845 * scaleY, 190 * scaleX, 10 * scaleY);

    // Step 2
    context.fillRect(830 * scaleX, 830 * scaleY, 160 * scaleX, 10 * scaleY);

    // Step 3
    context.fillRect(830 * scaleX, 815 * scaleY, 160 * scaleX, 10 * scaleY);

    // Step 4
    context.fillRect(830 * scaleX, 800 * scaleY, 160 * scaleX, 10 * scaleY);

    // Step 5
    context.fillRect(830 * scaleX, 785 * scaleY, 160 * scaleX, 10 * scaleY);

    // Terrace
    context.fillRect(630 * scaleX, 785 * scaleY, 195 * scaleX, 20 * scaleY);

    // The door
    context.fillRect(865 * scaleX, 600 * scaleY, 85 * scaleX, 180 * scaleY);

    // The window
    context.fillRect(660 * scaleX, 600 * scaleY, 150 * scaleX, 170 * scaleY);

    // Light 1
    context.fillRect(830 * scaleX, 640 * scaleY, 10 * scaleX, 30 * scaleY);

    // Light 2
    context.fillRect(965 * scaleX, 640 * scaleY, 10 * scaleX, 30 * scaleY);

    // The big window
    context.fillRect(680 * scaleX, 380 * scaleY, 250 * scaleX, 120 * scaleY);

    // The roof window
    context.fillRect(785 * scaleX, 230 * scaleY, 40 * scaleX, 70 * scaleY);
}
function drawLayer1House3(color3) {
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;


    let scaleX = canvasWidth / 1920;
    let scaleY = canvasHeight / 1080;

    context.fillStyle = color3;

    // Detail 1
    context.fillRect(1100 * scaleX, 830 * scaleY, 8 * scaleX, 10 * scaleY);

    // Detail 2
    context.fillRect(1140 * scaleX, 830 * scaleY, 8 * scaleX, 10 * scaleY);

    // Detail 3
    context.fillRect(1180 * scaleX, 830 * scaleY, 8 * scaleX, 10 * scaleY);

    // Detail 4
    context.fillRect(1210 * scaleX, 830 * scaleY, 10 * scaleX, 10 * scaleY);

    // Detail 5
    context.fillRect(1250 * scaleX, 830 * scaleY, 10 * scaleX, 10 * scaleY);

    // Detail 6
    context.fillRect(1290 * scaleX, 830 * scaleY, 10 * scaleX, 10 * scaleY);

    // Box 1
    context.fillRect(1099 * scaleX, 772 * scaleY, 90 * scaleX, 55 * scaleY);

    // Box 2
    context.fillRect(1210 * scaleX, 807 * scaleY, 90 * scaleX, 20 * scaleY);

    // Rim 1
    context.fillRect(1100 * scaleX, 750 * scaleY, 180 * scaleX, 5 * scaleY);

    // Curtain 1
    context.fillRect(1100 * scaleX, 625 * scaleY, 50 * scaleX, 120 * scaleY);

    // Rim 2
    context.fillRect(1020 * scaleX, 600 * scaleY, 260 * scaleX, 20 * scaleY);

    // Rim 3
    context.fillRect(1100 * scaleX, 550 * scaleY, 180 * scaleX, 5 * scaleY);

    // Curtain 2
    context.fillRect(1228 * scaleX, 425 * scaleY, 50 * scaleX, 120 * scaleY);

    // Rim 4
    context.fillRect(1105 * scaleX, 400 * scaleY, 265 * scaleX, 20 * scaleY);
}
function drawLayer2House1() {
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;

    let scaleX = canvasWidth / 1920;
    let scaleY = canvasHeight / 1080;

    context.fillStyle = "white";

    // 1st set the biggest windows
    let rows = 4;
    let w = 21 * scaleX;
    let h = 25 * scaleY;
    let marginX = 397 * scaleX;
    let marginY = 367 * scaleY;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            let x = marginX + i * (w + 8 * scaleX);
            let y = marginY + j * (h + 4 * scaleY);
            context.fillRect(x, y, w, h);
        }
    }

    // 2nd set of windows
    let rady = 3;
    let columns = 3;
    let v = 21 * scaleX;
    let s = 25 * scaleY;
    let mezeraX = 410 * scaleX;
    let mezeraY = 222 * scaleY;
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rady; j++) {
            let x = mezeraX + i * (v + 8 * scaleX);
            let y = mezeraY + j * (s + 4 * scaleY);
            context.fillRect(x, y, w, h);
        }
    }

    // 1st set of small left
    let ady = 3;
    let olumns = 1;
    let o = 21 * scaleX;
    let f = 25 * scaleY;
    let mezeraK = 335 * scaleX;
    let mezeraM = 395 * scaleY;
    for (let i = 0; i < olumns; i++) {
        for (let j = 0; j < ady; j++) {
            let x = mezeraK + i * (o + 3 * scaleX);
            let y = mezeraM + j * (f + 8 * scaleY);
            context.fillRect(x, y, w, h);
        }
    }

    // 2nd set of small right
    let dy = 3;
    let lumns = 1;
    let d = 21 * scaleX;
    let a = 25 * scaleY;
    let mezeraA = 545 * scaleX;
    let mezeraH = 395 * scaleY;
    for (let i = 0; i < lumns; i++) {
        for (let j = 0; j < dy; j++) {
            let x = mezeraA + i * (d + 3 * scaleX);
            let y = mezeraH + j * (a + 8 * scaleY);
            context.fillRect(x, y, w, h);
        }
    }

    // Bottom left
    let yBottom = 5;
    let umns = 2;
    let e = 21 * scaleX;
    let q = 25 * scaleY;
    let mezeraE = 330 * scaleX;
    let mezeraR = 577 * scaleY;
    for (let i = 0; i < umns; i++) {
        for (let j = 0; j < yBottom; j++) {
            let x = mezeraE + i * (e + 8 * scaleX);
            let y = mezeraR + j * (q + 8 * scaleY);
            context.fillRect(x, y, w, h);
        }
    }

    // Bottom right
    let u = 5;
    let mns = 2;
    let l = 21 * scaleX;
    let p = 25 * scaleY;
    let mezeraL = 425 * scaleX;
    let mezeraP = 577 * scaleY;
    for (let i = 0; i < mns; i++) {
        for (let j = 0; j < u; j++) {
            let x = mezeraL + i * (l + 8 * scaleX);
            let y = mezeraP + j * (p + 8 * scaleY);
            context.fillRect(x, y, w, h);
        }
    }

    // The door detail 1
    context.fillRect(520 * scaleX, 580 * scaleY, 21 * scaleX, 25 * scaleY);

    // The door detail 2
    context.fillRect(550 * scaleX, 580 * scaleY, 21 * scaleX, 25 * scaleY);

    // The door
    context.fillRect(518 * scaleX, 620 * scaleY, 55 * scaleX, 120 * scaleY);
}
function drawLayer2House2() {
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;

    let scaleX = canvasWidth / 1920;
    let scaleY = canvasHeight / 1080;

    context.fillStyle = "white";

    // Downstairs window left
    context.fillRect(695 * scaleX, 810 * scaleY, 35 * scaleX, 25 * scaleY);

    // Downstairs window right
    context.fillRect(735 * scaleX, 810 * scaleY, 35 * scaleX, 25 * scaleY);

    // 1st big window
    context.fillRect(685 * scaleX, 640 * scaleY, 45 * scaleX, 115 * scaleY);

    // 2nd big window
    context.fillRect(735 * scaleX, 640 * scaleY, 45 * scaleX, 115 * scaleY);

    // 1st big window detail
    context.fillRect(685 * scaleX, 615 * scaleY, 45 * scaleX, 20 * scaleY);

    // 2nd big window detail
    context.fillRect(735 * scaleX, 615 * scaleY, 45 * scaleX, 20 * scaleY);

    // The door
    context.fillRect(878 * scaleX, 640 * scaleY, 60 * scaleX, 130 * scaleY);

    // Main window 1
    context.fillRect(720 * scaleX, 430 * scaleY, 40 * scaleX, 70 * scaleY);
    context.fillRect(720 * scaleX, 400 * scaleY, 40 * scaleX, 25 * scaleY);

    // Main window 2
    context.fillRect(765 * scaleX, 430 * scaleY, 40 * scaleX, 70 * scaleY);
    context.fillRect(765 * scaleX, 400 * scaleY, 40 * scaleX, 25 * scaleY);

    // Main window 3
    context.fillRect(810 * scaleX, 430 * scaleY, 40 * scaleX, 70 * scaleY);
    context.fillRect(810 * scaleX, 400 * scaleY, 40 * scaleX, 25 * scaleY);

    // Main window 4
    context.fillRect(855 * scaleX, 430 * scaleY, 40 * scaleX, 70 * scaleY);
    context.fillRect(855 * scaleX, 400 * scaleY, 40 * scaleX, 25 * scaleY);

    // The roof windows
    context.fillRect(790 * scaleX, 270 * scaleY, 30 * scaleX, 25 * scaleY);
    context.fillRect(790 * scaleX, 240 * scaleY, 30 * scaleX, 25 * scaleY);
}
function drawLayer2House3() {
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;

    let scaleX = canvasWidth / 1920;
    let scaleY = canvasHeight / 1080;

    context.fillStyle = "white";

    // Downstairs window left
    context.fillRect(1150 * scaleX, 625 * scaleY, 132 * scaleX, 120 * scaleY);

    // Downstairs window right
    context.fillRect(1103 * scaleX, 425.5 * scaleY, 132 * scaleX, 120 * scaleY);

    // The roof window
    context.fillRect(1175 * scaleX, 260 * scaleY, 50 * scaleX, 50 * scaleY);
}
window.onresize = () => {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    drawBackround();
};
