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
        if (this.x >= this.canvas.width - 50 || this.x <= 50) {
            this.velocity = -this.velocity;
            this.moveDown() //reverse direction if hit wall
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
        while (this.moveDownTimer > 0){
            this.moveDownTimer--;
            this.y -= this.velocity;
        }
    }

    shoot(){ //controls how the enemy shoots

    }
}