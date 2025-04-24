//this will handle the collisions between bullets and the player and enemies

export default class handleCollisions{

    constructor(player, enemyController, playerBulletController){
        this.player = player; //player object
        this.enemyController = enemyController; //enemy controller object
        this.playerBulletController = playerBulletController; //player bullet controller object
        //this.enemyBulletController = enemyBulletController; 
    }

    playerCollideWithEnemy(){
        //check if the player has collided with an enemy
    }
    playerCollideWithEnemyBullet(){
        //check if the player has collided with an enemy bullet
        
    }
    
    enemyCollideWithPlayerBullet(){
        //check if an enemy has collided with a player bullet
        this.playerBulletController.bullets.forEach((bullet, bulletIndex) => {
            this.enemyController.enemies.forEach((enemy, enemyIndex) => {
                // Check for collision
                if (
                    bullet.x + bullet.width >= enemy.x && // Bullet right edge >= Enemy left edge
                    bullet.x <= enemy.x + enemy.width && // Bullet left edge <= Enemy right edge
                    bullet.y + bullet.height >= enemy.y && // Bullet bottom edge >= Enemy top edge
                    bullet.y <= enemy.y + enemy.height // Bullet top edge <= Enemy bottom edge
                ) {
                    // Remove the bullet and enemy
                    this.playerBulletController.bullets.splice(bulletIndex, 1); // Remove bullet
                    this.enemyController.enemies.splice(enemyIndex, 1); // Remove enemy
                }
            });
        });
    }
}
