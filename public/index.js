"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
//a section for classes
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
    }
    respond(events) {
        if (!this.isRunning) {
            return console.log("The car is off");
        }
    }
}
//create a class that handles steering
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        console.log(`Executing: turn ${direction}`);
    }
}
//a section for execution
//isRunning is an object
const autonomousCar = new Car({ isRunning: false });
//console.log(autonomousCar.isRunning)
//pass a function call as an argument
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
const steering = new SteeringControl();
steering.turn("right");
