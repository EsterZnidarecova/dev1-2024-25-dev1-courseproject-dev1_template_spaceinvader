"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


drawBackround();

function drawBackround() {

    context.fillStyle = "rgb(255, 182, 193)";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    drawHouses();
}

function drawHouses() {
    context.fillStyle = "rgb(169, 169, 169)";
    context.fillRect(150, 250, 200, 350);

}
