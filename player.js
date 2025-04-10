//this module will control the behavior of the player
export class Player {
    right = false;
    left = false;
    shoot = false;
    constructor(canvas,velocity,playerBullet){
        this.canvas = canvas;
        this.x = canvas.width/2;
        this.y = 50;
        this.velocity = velocity;
        document.addEventListener("keydown",this.keyDown);
        document.addEventListener("keyup",this.keyUp);
    }
    
//key event handlers
    keyDown(event){
        if (event.code == "ArrowRight"){
            this.right = true;
            this.moveRight();
            this.collisionWithWalls();
        }
        if (event.code == "ArrowLeft"){
            this.left = true;
            this.moveLeft();
            this.collisionWithWalls();
        }
        if (event.code == "Space" || event.code == "ArrowUp"){
            this.shoot = true;
            this.handleShoot();
        }
    }

    keyUp(event){
        if (event.code == "ArrowRight"){
            this.right = false;
            this.collisionWithWalls();
        }
        if (event.code == "ArrowLeft"){
            this.left = false;
            this.collisionWithWalls();
        }   
        if (event.code == "Space" || event.code == "ArrowUp"){
            this.shoot = false;
        }
    }

//movement handlers
    moveRight(){
        if (this.right === true) {
            this.x += this.velocity;
        }
    }
    moveLeft(){
        if(this.left === true){
            this.x -= this.velocity;
        }
    }
//shooting handler
    handleShoot(){
        if(this.shoot === true){
            this.playerBullet(this.x,this.y);
        }
    }
//wall collision handler
    collisionWithWalls(){
        if(this.x <= 0){
            this.x = 0;
        }
        if(this.x >= this.canvas.width){
            this.x = this.canvas.width;
        }
    }

} 