//this will control the behavior of the enemy bullets

export default class EnemyBullet {
    constructor(canvas, velocity, x,y, bulletColor){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.bulletColor = bulletColor;
        this.width = 5;
        this.height = 10;
    }

}
