//this module will control the behavior of the player bullets

export default class PlayerBullet {
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
