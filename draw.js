//this module will draw the game 
import Player from "./player.js";
import Enemy from "./enemy.js";
import PlayerBullet from "./playerBullet.js";
import EnemyBullet from "./enemyBullet.js";
playerBullet = null; //placeholder
const player = new Player(canvas, 5, playerBullet);
let game = document.getElementById("game");
//constructors for the enemy and other bullets go here TODO
