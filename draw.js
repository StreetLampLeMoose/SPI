//this module will draw the game 
import { enemyController } from "./enemyController.js";
import {Player} from "./player.js";
let playerBullet = 1;

export default function draw() {
    drawPlayer();
    drawEnemies();
    requestAnimationFrame(draw); //calls the draw function again to create an animation loop
    };

    
    
    const game = document.getElementById("game");
    const ctx = game.getContext("2d");
    const player = new Player(game, 5, playerBullet);
    const enemies= new enemyController(game); //creates a new enemy controller object

    export function gameStart(){ //starts the game, draws initial player and enemy positions
        enemies.enemiesStart(); //draws the enemies on the screen
    };

    function drawPlayer(){
        const playerImage= new Image();
        playerImage.src = "./img/player.png";         
        player.move();
        playerImage.onload = () => { 
            ctx.clearRect(0, 0, game.width, game.height); //clears the canvas before drawing the new frame 
            ctx.drawImage(playerImage,player.x,player.y); //draws the player image at the new position
        };
    };

    function drawEnemies(){ //draws the enemies on the screen 
        const enemyImage = new Image();
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

    function drawPlayerBullets(){ //draws player bullests on the screen

    };