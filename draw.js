//this module will draw the game 
import { enemyController } from "./enemyController.js";
import {Player} from "./player.js";
import PlayerBulletController from "./playerBulletController.js";
let playerBullet = 1;

export default function draw() {
    drawPlayer();
    drawEnemies();
    drawPlayerBullets();
    drawEnemyBullets();
    requestAnimationFrame(draw); //calls the draw function again to create an animation loop
    };

    
    
    const game = document.getElementById("game");
    const ctx = game.getContext("2d");
    const playerBulletController = new PlayerBulletController(game, "blue") //creates a new player bullet controller object
    const player = new Player(game, 5, playerBulletController); //creates new player object
    const enemies= new enemyController(game); //creates a new enemy controller object
    export function gameStart(){ //starts the game, draws initial player and enemy positions
        enemies.enemiesStart(); //draws the enemies on the screen
    };

    function drawPlayer(){
        const playerImage= new Image(); //creates a new player image object
        playerImage.src = "./img/player.png";  //player image source       
        player.move(); //moves the player
        playerImage.onload = () => { 
            ctx.clearRect(0, 0, game.width, game.height); //clears the canvas before drawing the new frame 
            ctx.drawImage(playerImage,player.x,player.y); //draws the player image at the new position
        };
    };

    function drawEnemies(){ //draws the enemies on the screen 
        const enemyImage = new Image(); //creates a new enemy image object
        enemyImage.src = "./img/red.png"; //loads the enemy image
        enemies.enemyMove(); //moves the enemies
        enemyImage.onload = () => { //draws the enemy image when it is loaded
            enemies.enemies.forEach((enemy) => { //for each enemy, draw the enemy image at the new position
                ctx.drawImage(enemyImage, enemy.x, enemy.y); //draws the enemy image at the new position
            });
        }
        //draws the enemy image at the new position


    };

    function drawEnemyBullets(){ //draws enemy bultes on the screen
         

    };

    function drawPlayerBullets(){ //draws player bullets on the screen
        playerBulletController.move(); //moves the player bullets
        playerBulletController.bullets.forEach((bullet) => { //for each bullet, draw the bullet image at the new position
            ctx.fillStyle = playerBulletController.bulletColor; //sets the color of the bullet
            ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height); //draws the bullet at the new position
        }); 
    };