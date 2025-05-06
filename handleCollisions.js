//this will handle the collisions between bullets and the player and enemies

export default class handleCollisions{

    constructor(player, enemyController, playerBulletController , enemyBulletController){
        this.player = player; //player object
        this.enemyController = enemyController; //enemy controller object
        this.playerBulletController = playerBulletController; //player bullet controller object
        this.enemyBulletController = enemyBulletController; //enemy bullet controller object
    }

    playerCollideWithEnemyBullet(){
        //check if the player has collided with an enemy
        this.enemyBulletController.enemyBullets.forEach((bullet) => {
            if (
                bullet.x + bullet.width >= this.player.x && // Bullet right edge >= Player left edge
                bullet.x <= this.player.x + this.player.width && // Bullet left edge <= Player right edge
                bullet.y + bullet.height >= this.player.y && // Bullet bottom edge >= Player top edge
                bullet.y <= this.player.y + this.player.height // Bullet top edge <= Player bottom edge
            ){
                // Remove the bullet
                this.enemyBulletController.enemyBullets.splice(this.enemyBulletController.enemyBullets.indexOf(bullet), 1); // Remove bullet
                console.log("Player collided with enemy bullet");
                this.player.playerLives--; // Decrease player lives
            }
        });
    }
    playerCollideWithEnemy(){
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
