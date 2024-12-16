"use strict";
import context from "../../scripts/context.js";

// List to store the houses
let houses = [];

drawBackground();

function drawBackground() {
    // The background color
    context.fillStyle = "rgb(255, 190, 193)";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    // Colors for the house bases
    let colors = [
        'rgb(66, 47, 247)',   // Blue
        'rgb(255, 165, 0)',   // Orange
        'rgb(64, 158, 57)',   // Green
        'rgb(255, 99, 71)'    // Tomato red
    ];

    // Function to draw house
    function drawHouse(x, y, color) {
        let canvasWidth = context.canvas.width;
        let canvasHeight = context.canvas.height;

        let scaleX = canvasWidth / 1920;
        let scaleY = canvasHeight / 1080;

        // Draw the house parts with scaling
        context.fillStyle = color;
        context.fillRect(x * scaleX, y * scaleY, 300 * scaleX, 300 * scaleY);

        // Store the house with its position and color
        houses.push({
            x: x * scaleX,
            y: y * scaleY,
            color: color,
            width: 300 * scaleX,
            height: 300 * scaleY
        });

        // Additional house details, applying scale for positioning
        context.fillRect((x + 5) * scaleX, (y - 15) * scaleY, 90 * scaleX, 10 * scaleY); // Rim 1
        context.fillRect((x + 98) * scaleX, (y - 22) * scaleY, 110 * scaleX, 18 * scaleY); // Rim 3
        context.fillRect((x + 215) * scaleX, (y - 15) * scaleY, 90 * scaleX, 10 * scaleY); // Rim 2

        // Second block
        context.fillRect(x * scaleX, (y - 100) * scaleY, 300 * scaleX, 180 * scaleY);

        // Rim details for second block
        context.fillRect((x + 5) * scaleX, (y - 115) * scaleY, 98 * scaleX, 10 * scaleY);
        context.fillRect((x + 100) * scaleX, (y - 120) * scaleY, 100 * scaleX, 15 * scaleY);
        context.fillRect((x + 205) * scaleX, (y - 115) * scaleY, 98 * scaleX, 10 * scaleY);

        // Third block and other details
        context.fillRect(x * scaleX, (y - 120) * scaleY, 300 * scaleX, 30 * scaleY);
        context.fillRect((x + 30) * scaleX, (y - 130) * scaleY, 65 * scaleX, 8 * scaleY);
        context.fillRect((x + 205) * scaleX, (y - 130) * scaleY, 65 * scaleX, 8 * scaleY);
        context.fillRect((x - 10) * scaleX, (y - 140) * scaleY, 105 * scaleX, 8 * scaleY);
        context.fillRect((x + 205) * scaleX, (y - 140) * scaleY, 105 * scaleX, 8 * scaleY);

        // Roof parts
        context.fillRect((x + 100) * scaleX, (y - 225) * scaleY, 100 * scaleX, 95 * scaleY);
        context.fillRect((x + 40) * scaleX, (y - 250) * scaleY, 220 * scaleX, 8 * scaleY);

        // Main roof
        context.beginPath();
        context.moveTo((x + 50) * scaleX, (y - 240) * scaleY);
        context.lineTo((x + 250) * scaleX, (y - 240) * scaleY);
        context.lineTo((x + 295) * scaleX, (y - 158) * scaleY);
        context.lineTo((x + 5) * scaleX, (y - 158) * scaleY);
        context.closePath();
        context.fill();

        // Chimneys
        context.fillRect((x + 5) * scaleX, (y - 242) * scaleY, 20 * scaleX, 100 * scaleY);
        context.fillRect((x + 270) * scaleX, (y - 242) * scaleY, 20 * scaleX, 100 * scaleY);

        // Chimney details
        context.fillRect((x) * scaleX, (y - 255) * scaleY, 30 * scaleX, 8 * scaleY);
        context.fillRect((x + 250) * scaleX, (y - 255) * scaleY, 30 * scaleX, 8 * scaleY);
    }

    // houses with random positions
    for (let i = 0; i < colors.length; i++) {
        let color = colors[i];
        let x = 200 + (i * 400);
        let y = 500;
        drawHouse(x, y, color);
    }

    // Set up the click event listener
    context.canvas.addEventListener("click", (event) => {
        let mouseX = event.offsetX;
        let mouseY = event.offsetY;

        // Clicking
        for (let i = 0; i < houses.length; i++) {
            let house = houses[i];
            if (mouseX >= house.x && mouseX <= house.x + house.width && mouseY >= house.y && mouseY <= house.y + house.height) {
                // Multiply the house at a random position
                let randomX = Math.random() * (context.canvas.width - 100);
                let randomY = Math.random() * (context.canvas.height - 100);
                drawHouse(randomX, randomY, house.color);
                break;  // Exit the loop after multiplying
            }
        }
    });
}



