//This module will control the behavior (position, gun firing, etc) of an enemy player
export class Enemy {

    constructor(canvas,velocity,enemyBulletController,x,y){
        this.x = x;
        this.y= y;
        this.canvas = canvas;
        this.velocity = velocity;
        this.moveDownTimer = 5;
        this.width = 50;
        this.height = 75;
        this.shootTimer = 1000 * Math.random();
        this.enemyBulletController = enemyBulletController; //creates a new enemy bullet controller object
    }
    
    

    move(){ //controls movement of the enemy
        if(this.moveDownTimer > 0){ //if the enemy is not at the bottom of the screen, move down
            this.moveDown();
            return;    
        }

        if(this.velocity > 0){
            this.rightWallCollision();
            this.leftWallCollision();
            this.moveRight();
        }
        else{
            this.rightWallCollision();
            this.leftWallCollision();
            this.moveLeft();
        }
        this.shootTimer--;
        if(this.shootTimer <= 0){ //if the shoot timer is less than or equal to 0, shoot
            //this.shoot(); //shoot the bullet
             //reset the shoot timer
        }
    }

    moveRight(){
        this.x+= this.velocity;
    }
    
    moveLeft(){
        this.x += this.velocity;
    }

    blockMoveLeft(){
        this.x -= this.velocity;
        this.shootTimer--;
        if(this.shootTimer <= 0){ //if the shoot timer is less than or equal to 0, shoot
            //this.shoot(); //shoot the bullet
        } 
    }

    blockMoveRight(){
        this.x += this.velocity;
        this.shootTimer--;
        if(this.shootTimer <= 0){ //if the shoot timer is less than or equal to 0, shoot
           // this.shoot(); //shoot the bullet  
        } 
    }


    moveDown(){
            this.moveDownTimer--;
            this.y += 5;
    }

    rightWallCollision(){ //check for right wall collision
        if(this.x >= this.canvas.width - 50){ //if the enemy is at the right wall, move left
            this.x = this.canvas.width - 55;
            this.velocity = -this.velocity; //change direction of movement
            this.resetMoveDownTimer(); //reset the move down timer
        }
    }
    leftWallCollision(){ //check for left wall collision
        if(this.x <= 0){ //if the enemy is at the left wall, move right
            this.x = 5;
            this.velocity = -this.velocity; //change direction of movement
            this.resetMoveDownTimer(); //reset the move down timer
        }
    }

    resetMoveDownTimer(){
        this.moveDownTimer = 5; //reset the move down timer
    }
    shoot(){ //controls how the enemy shoots
        this.enemyBulletController.shoot(this.x+25, this.y);
        this.shootTimer = 50;
    }
}