//this module will control the behavior of the player
export class Player {
    right = false;
    left = false;
    shoot = false;
   
    constructor(canvas,velocity,PlayerBulletController){
        this.PlayerBulletController = PlayerBulletController;
        this.canvas = canvas;
        this.x = canvas.width/2;
        this.y = canvas.height - 50; 
        this.velocity = velocity;
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);
        document.addEventListener("keydown",this.keyDown);
        document.addEventListener("keyup",this.keyUp);
        this.width = 50; //width of the player
        this.height = 50; //height of the player
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
        if (this.right == true) {
            this.x += this.velocity;
            this.right === false;
        }
    }
    moveLeft(){
        if(this.left == true){
            this.x -= this.velocity;
            this.left === false;
        }
    }
//shooting handler
    handleShoot(){
        if(this.shoot == true){
            this.PlayerBulletController.shoot(this.x + 25, this.y); //shoots the bullet from the player position
            this.shoot = false; //sets the shoot variable to false to prevent multiple bullets from being shot at once
        }
    }
//wall collision handler
    collisionWithWalls(){
        if(this.x <= 0){
            this.x = 0;
        }
        if(this.x >= this.canvas.width-50){
            this.x = this.canvas.width-50;
        }
    }
    move(){
        this.moveRight();
        this.moveLeft();
        this.collisionWithWalls();
    }


} 