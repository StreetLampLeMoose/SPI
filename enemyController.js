//This module will track the postitions of multiple enemies 
import {Enemy} from "./enemy.js";
//import {forEach} from "./utils.js"; //import forEach function from utils.js

export class enemyController {
    constructor(canvas){
        this.canvas = canvas;
        this.enemyBullet = 1;
    }
    
    enemiesStart(){ //sets the start position of the enemies
        const enemyPositions = [
            { x: 50, y: 50 }
        ]

        this.enemies = enemyPositions.map((enemy) => {
            return new Enemy(this.canvas, 5, this.enemyBullet, enemy.x, enemy.y);
        });
    };

    enemyMove(){ //move the enemies
        this.enemies.forEach((enemy) => {
            enemy.move(); //move the enemy
        });
    };
    
}