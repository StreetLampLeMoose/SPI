import EnemyBullet from "./enemyBullet.js";

export default class EnemyBulletController {
    enemyBullets = [];
    constructor(canvas,bulletColor){
        this.canvas = canvas;
        this.bulletColor = bulletColor;
    }

    shoot(x,y){
        const bullet = new EnemyBullet(this.canvas, 5, x,y, this.bulletColor); //creates a new bullet object
        this.enemyBullets.push(bullet); //adds the bullet to the bullets array
    }

    move(){
        this.enemyBullets.forEach((bullet) => { //for each bullet, move the bullet
            bullet.y += bullet.velocity; //move the bullet up
            if(bullet.y < 0){ //if the bullet is off the screen, remove it from the bullets array
                this.enemyBullets.splice(this.enemyBullets.indexOf(bullet), 1); //remove the bullet from the bullets array
            }
        });
    }

}