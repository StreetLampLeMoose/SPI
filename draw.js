//this module will draw the game 
import {Player} from "./player.js";
//import Enemy from "./enemy.js";
//import PlayerBullet from "./playerBullet.js";
//import EnemyBullet from "./enemyBullet.js";
let playerBullet = 1;

 //placeholder for playerBullet
export default function draw() {
    
    drawPlayer();
    requestAnimationFrame(draw); //calls the draw function again to create an animation loop
    };

    function gameStart(){ //starts the game, draws initial player and enemy positions

    };
    function testDraw(){
        const game = document.getElementById("game");
        const ctx = game.getContext("2d");
        const playerImage= new Image();
        playerImage.src = "./img/player.png"; 
        playerImage.onload = () => {  
            ctx.drawImage(playerImage,0,0);
        }
    }
    const game = document.getElementById("game");
    const ctx = game.getContext("2d");
    const player = new Player(game, 5, playerBullet);

    function drawPlayer(){
        const playerImage= new Image();
        playerImage.src = "./img/player.png";         
        player.move();
        playerImage.onload = () => {  
            ctx.clearRect(0, 0, game.width, game.height); //clears the screen
            ctx.drawImage(playerImage,player.x,player.y); //draws the player image at the new position
        };
    };

    function drawEnemies(){ //draws the enemies on the screen 
        //
    };

    function drawEnemyBullets(){ //draws enemy bultes on the screen

    };

    function drawPlayerBullets(){ //draws player bullests on the screen

    };