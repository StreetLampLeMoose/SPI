//This module will control the behavior (position, gun firing, etc) of an enemy player
export class Enemy {

    constructor(canvas,velocity,enemyBullet,x,y){
        this.x = x;
        this.y= y;
        this.canvas = canvas;
        this.velocity = velocity;
        this.moveDownTimer = 30;
    }

    

    move(){ //controls movement of the enemy
        if (this.x >= this.canvas.width - 50 ) { //need to fix this. It switches everytime need sto switch once and run
            this.x = this.canvas.width - 51;
            this.velocity = -this.velocity //if the enemy is at the right wall, stop moving right
        }else if(this.x <= 0){ //if the enemy is at the left wall, stop moving left
            this.x = 1;
            this.velocity = -this.velocity //if the enemy is at the left wall, stop moving left
        }

        if(this.moveDownTimer > 0){ //if the enemy is not at the bottom of the screen, move down
            this.moveDown();
            return;    
        }

        if(this.velocity >0){
            this.moveRight();
        }
        else{
            this.moveLeft();
        }
    }

    moveRight(){
        this.x+= this.velocity;
    }
    
    moveLeft(){
        this.x -= this.velocity;
    }

    moveDown(){
            this.moveDownTimer--;
            this.y += 5;
    }

    shoot(){ //controls how the enemy shoots

    }
}