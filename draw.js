//this module will draw the game 
import { enemyController } from "./enemyController.js";
import handleCollisions from "./handleCollisions.js";
import {Player} from "./player.js";
import PlayerBulletController from "./playerBulletController.js";
import EnemyBulletController from "./enemyBulletController.js";
const enemyStartPositions = [
    { x: 50, y: 50 }
]
const blockEnemyPositions = [
    { x: 50, y: 50 },
    { x: 100, y: 50 },
    { x: 150, y: 50 },
    { x: 200, y: 50 },
    { x: 250, y: 50 },
    { x: 300, y: 50 },
    { x: 350, y: 50 },
    { x: 400, y: 50 }
]

let enemyType = "continuous"; //type of enemy movement, can be continuous or block
let enemyType2 = "block";
const game = document.getElementById("game");
const ctx = game.getContext("2d");
const playerBulletController = new PlayerBulletController(game, "blue");
const enemyBulletController = new EnemyBulletController(game, "red"); //creates a new player bullet controller object
const player = new Player(game, 5, playerBulletController); //creates new player object
const enemies= new enemyController(game, enemyStartPositions, enemyType , enemyBulletController); //creates a new enemy controller object
const blockEnemies = new enemyController(game, blockEnemyPositions, enemyType2,enemyBulletController); //creates a new enemy controller object
const collisionHandler = new handleCollisions(player, enemies, playerBulletController);
const blockEnemyCollisionHandler = new handleCollisions(player, blockEnemies, playerBulletController); //creates a new collision handler object

const playerImage = new Image();
playerImage.src = "./img/player.png";

playerImage.onload = () => {
    console.log("Player image loaded");
};

const enemyImage = new Image();
enemyImage.src = "./img/red.png";
enemyImage.onload = () => {
    console.log("Enemy image loaded");
}

export default function draw() {
    ctx.clearRect(0, 0, game.width, game.height); //clears the canvas
    drawPlayer();
    drawEnemies();
    drawPlayerBullets();
    drawEnemyBullets();
    collisions();
    requestAnimationFrame(draw); //calls the draw function again to create an animation loop
};
     //checks for collisions between the enemies and player bullets
    export function gameStartWaiting(){
        ctx.fillText("Click to start the game", game.width/2, game.height/2); //draws the text on the screen
        game.addEventListener("click", () => { //waits for the user to click the game to start the game
            game.removeEventListener("click", gameStartWaiting);
             //removes the event listener after the game starts
            gameStart(); //starts the game
            draw(); //starts the draw loop
        });
    }


    export function gameStart(){ //starts the game, draws initial player and enemy positions
        enemies.enemiesStart();
        blockEnemies.enemiesStart(); //draws the enemies on the screen
    };

     //creates a new handle collisions object

    function drawPlayer(){ 
        player.move(); //moves the player
        ctx.drawImage(playerImage,player.x,player.y,); //draws the player image at the new position
        
    };

    function drawEnemies(){ //draws the enemies on the screen 
        enemies.enemyMove(); //moves the enemies
        blockEnemies.enemyMove(); //moves the block enemies
        //draws the enemy image when it is loaded
            enemies.enemies.forEach((enemy) => { //for each enemy, draw the enemy image at the new position
                ctx.drawImage(enemyImage, enemy.x, enemy.y); //draws the enemy image at the new position
            });
            blockEnemies.enemies.forEach((enemy) => { //for each enemy, draw the enemy image at the new position
                ctx.drawImage(enemyImage, enemy.x, enemy.y); //draws the enemy image at the new position
            });
        //draws the enemy image at the new position


    };

    function drawEnemyBullets(){ //draws enemy bultes on the screen
        enemyBulletController.move(); //moves the enemy bullets
        enemyBulletController.enemyBullets.forEach((bullet) => { //for each bullet, draw the bullet image at the new position
            ctx.fillStyle = enemyBulletController.bulletColor; //sets the color of the bullet
            ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height); //draws the bullet at the new position
        });

    };

    function drawPlayerBullets(){ //draws player bullets on the screen
        playerBulletController.move(); //moves the player bullets
        playerBulletController.bullets.forEach((bullet) => { //for each bullet, draw the bullet image at the new position
            ctx.fillStyle = playerBulletController.bulletColor; //sets the color of the bullet
            ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height); //draws the bullet at the new position
        }); 
    };

    function collisions(){
        collisionHandler.playerCollideWithEnemy(); //checks for collisions between the player and enemies
        collisionHandler.playerCollideWithEnemyBullet(); //checks for collisions between the player and enemy bullets
        collisionHandler.enemyCollideWithPlayerBullet();
        
        blockEnemyCollisionHandler.playerCollideWithEnemy();
        blockEnemyCollisionHandler.playerCollideWithEnemyBullet(); //checks for collisions between the player and block enemies
        blockEnemyCollisionHandler.enemyCollideWithPlayerBullet(); //checks for collisions between the enemies and player bullets
    }