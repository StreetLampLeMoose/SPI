//this module will draw the game 
import {Player} from "./player.js";
//import Enemy from "./enemy.js";
//import PlayerBullet from "./playerBullet.js";
//import EnemyBullet from "./enemyBullet.js";

export default function draw() {
    let game = document.getElementById("game")
    let playerBullet = 1; //placeholder
    const player = new Player(game, 5, playerBullet);
    
    }
//constructors for the enemy and other bullets go here TODO
