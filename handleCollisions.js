//this will handle the collisions between bullets and the player and enemies

export default class handleCollisions(Player, enemyController, playerBulletController){

    constructor(player, enemyController, playerBulletController){
        this.player = Player; //player object
        this.enemyController = enemyController; //enemy controller object
        this.playerBulletController = playerBulletController; //player bullet controller object
    }

    playerCollideWithEnemy(){
        //check if the player has collided with an enemy
    }
    playerCollideWithEnemyBullet(){
        //check if the player has collided with an enemy bullet
    }
    enemyCollideWithPlayerBullet(){
        //check if an enemy has collided with a player bullet
        
    }
}
