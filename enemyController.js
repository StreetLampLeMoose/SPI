//This module will track the postitions of multiple enemies 
import {Enemy} from "./enemy.js";


export class enemyController { //should probably change the start so that it assigns the enemies objects to a different array. 
    constructor(canvas, enemyPositions, enemyType, enemyBulletController){
        this.canvas = canvas;
        this.enemyPositions = enemyPositions; //array of enemy positions
        this.enemyBulletController = enemyBulletController;
        this.enemyType = enemyType; //type of enemy 
        this.rightSideOfBlock = 400; //should assign these based on the array of enemies
        this.leftSideOfBlock = 50;
        this.moveDownTimer = 5;
        this.blockMoveDirection = 1; //1 is right, -1 is left        
        this.shootTimer = 10
        this.enemyLength = this.enemyPositions.length; //get the length of the enemies array  
        this.randomEnemyIndex = Math.floor(Math.random()*this.enemyLength)
        this.stillEnemies = true; //boolean to check if there are still enemies 
        this.enemyObjects = [];     
    }
    
    enemiesStart(){ //sets the start position of the enemies
        this.enemyObjects = this.enemyPositions.map((enemy) => {
            return new Enemy(this.canvas, 5, this.enemyBulletController, enemy.x, enemy.y);
        });
    };

    enemyMove(){ //continuous move left and right
        this.shootTimer--;
        if(this.enemyType == "continuous"){
            this.enemyObjects.forEach((enemy) => {
                enemy.move(); //move the enemy
            });    
        }else if(this.enemyType =="block"){
            this.enemyBlockMove();
        }
        if(this.shootTimer <= 0){ //if the shoot timer is less than or equal to 0, shoot
            this.shootTimer = 50; //reset the shoot timer
            this.enemyLength = this.enemyObjects.length; //get the length of the enemies array
            if(this.enemyLength > 1){ //if there is than one enemy, shoot a bullet from a random enemy
                this.randomEnemyIndex = Math.floor(Math.random()*this.enemyLength); //random enemy shoots a bullet
                this.enemyObjects[this.randomEnemyIndex].shoot(); //shoot a bullet from the random enemy
            }else if (this.enemyLength == 1){ //if there is only one
                this.enemyObjects[0].shoot(); //if there is only one enemy, shoot a bullet from that enemy
            }
        }
    
}

    enemyBlockMove(){
        //Move a block of enemies
        //if the far right side of the block is at the right wall, reset the move down timer, change the velocity sign, and move down
        //if the far left side of the block is at the left wall, reset the move down timer, change velocty sign,  and move down
        this.rightSideOfBlock = Math.max(...this.enemyObjects.map(enemy => enemy.x + enemy.width));
        this.leftSideOfBlock = Math.min(...this.enemyObjects.map(enemy => enemy.x));
            if(this.moveDownTimer > 0){
                this.enemyObjects.forEach((enemy) => {
                    enemy.moveDown(); //move the enemy down
                });
                this.moveDownTimer--;
                return;
            }
            if(this.rightSideOfBlock >= this.canvas.width){
                this.moveDownTimer = 5;
                this.blockMoveDirection =-1; //change direction of movement
            }
            if(this.leftSideOfBlock <= 0){
                this.moveDownTimer = 5;
                this.blockMoveDirection = 1; //change direction of movement
            }
            this.enemyObjects.forEach((enemy)=>{
                if(this.blockMoveDirection > 0){
                    enemy.blockMoveRight();
                }
                if(this.blockMoveDirection < 0){
                    enemy.blockMoveLeft();
                }
            }) 
    }}