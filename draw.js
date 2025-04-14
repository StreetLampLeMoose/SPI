//this module will draw the game 
import {Player} from "./player.js";
//import Enemy from "./enemy.js";
//import PlayerBullet from "./playerBullet.js";
//import EnemyBullet from "./enemyBullet.js";
const ctx = game.getContext("2d");
export default function draw() {
    let game = document.getElementById("game");
    let playerBullet = 1; //placeholder
    
    };

    function gameStart(){ //starts the game, draws initial player and enemy positions

    };

    function drawPlayer(){
        const player = new Player(game, 5, playerBullet); 
        player.move();
        ctx.drawImage(player.x, player.y);
    };

    function drawEnemies(){ //draws the enemies on the screen 
        //
    };

    function drawEnemyBullets(){ //draws enemy bultes on the screen

    };

    function drawPlayerBullets(){ //draws player bullests on the screen

    };