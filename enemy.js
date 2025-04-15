//This module will control the behavior (position, gun firing, etc) of an enemy player
export class Enemy {

    constructor(canvas,velocity,enemyBullet,x,y){
        this.x = x;
        this.y= y;
        this.canvas = canvas;
        this.velocity = velocity;
    }

    move(){ //controls movement of the enemy

    }

    shoot(){ //controls how the enemy shoots

    }
}