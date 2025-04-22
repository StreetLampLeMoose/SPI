//This module will track the postitions of multiple enemies 
import {Enemy} from "./enemy.js";
//import {forEach} from "./utils.js"; //import forEach function from utils.js

export class enemyController {
    constructor(canvas, enemyPositions){
        this.canvas = canvas;
        this.enemies = enemyPositions; //array of enemy positions
        this.enemyBullet = 1;
    }
    
    enemiesStart(){ //sets the start position of the enemies
        this.enemies = this.enemies.map((enemy) => {
            return new Enemy(this.canvas, 5, this.enemyBullet, enemy.x, enemy.y);
        });
    };

    enemyMove(){ //move the enemies
        this.enemies.forEach((enemy) => {
            enemy.move(); //move the enemy
        });
    };

}