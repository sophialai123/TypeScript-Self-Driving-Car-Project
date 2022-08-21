"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObstacleEvents = void 0;
//generate random obstacles for our car to avoid.
function getObstacleEvents() {
    const coinFlip = Boolean(Math.random() > 0.5);
    return {
        'ObstacleLeft': coinFlip,
        'ObstacleRight': !coinFlip
    };
}
exports.getObstacleEvents = getObstacleEvents;
