import PlayerBullet from "./playerBullet.js";

export default class PlayerBulletController {
    bullets = [];
    constructor(canvas,bulletColor,velocity){
        this.canvas = canvas;
        this.bulletColor = bulletColor;
        this.velocity = velocity; //velocity of the bullet
    }

    shoot(x,y){
        const bullet = new PlayerBullet(this.canvas, this.velocity, x,y, this.bulletColor); //creates a new bullet object
        this.bullets.push(bullet); //adds the bullet to the bullets array
    }

    move(){
        this.bullets.forEach((bullet) => { //for each bullet, move the bullet
            bullet.y -= bullet.velocity; //move the bullet up
            if(bullet.y < 0){ //if the bullet is off the screen, remove it from the bullets array
                this.bullets.splice(this.bullets.indexOf(bullet), 1); //remove the bullet from the bullets array
            }
        });
    }

}
