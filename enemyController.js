//This module will track the postitions of multiple enemies 
import {Enemy} from "./enemy.js";


export class enemyController {
    constructor(canvas, enemyPositions, enemyType){
        this.canvas = canvas;
        this.enemies = enemyPositions; //array of enemy positions
        this.enemyBullet = 1;
        this.enemyType = enemyType; //type of enemy 
        this.rightSideOfBlock = 400; //should assign these based on the array of enemies
        this.leftSideOfBlock = 50;
        this.moveDownTimer = 5;                
    }
    
    enemiesStart(){ //sets the start position of the enemies
        this.enemies = this.enemies.map((enemy) => {
            return new Enemy(this.canvas, 5, this.enemyBullet, enemy.x, enemy.y);
        });
    };

    enemyMove(){ //continuous move left and right
        if(this.enemyType == "continuous"){
            this.enemies.forEach((enemy) => {
                enemy.move(); //move the enemy
            });    
        }else if(this.enemyType =="block"){
            this.rightSideOfBlock = Math.max(...this.enemies.map(enemy => enemy.x + enemy.width));
            this.leftSideOfBlock = Math.min(...this.enemies.map(enemy => enemy.x));
            console.log(this.rightSideOfBlock, this.leftSideOfBlock);
            this.enemyBlockMove();
        }
    
}

    enemyBlockMove(){
        //Move a block of enemies
        //if the far right side of the block is at the right wall, reset the move down timer, change the velocity sign, and move down
        //if the far left side of the block is at the left wall, reset the move down timer, change velocty sign,  and move down
        this.enemies.forEach((enemy) => {
            if(this.moveDownTimer > 0){
                enemy.moveDown();
                this.moveDownTimer--;
                return;
            }
            if(this.rightSideOfBlock >= this.canvas.width - 50){
                this.moveDownTimer = 5;
                enemy.velocity = -enemy.velocity; //change direction of movement
            }
            if(this.leftSideOfBlock <= 0){
                this.moveDownTimer = 5;
                enemy.velocity = -enemy.velocity; //change direction of movement
            }
            if(enemy.velocity > 0){
                enemy.moveRight();
            }
            if(enemy.velocity < 0){
                enemy.moveLeft();
            }
        }); //placeholder
    }
}