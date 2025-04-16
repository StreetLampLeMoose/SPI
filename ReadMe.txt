This is a browser based space invaders game.

Control flow -> 
    index.js controls game -> start, pause, game over document
        index.js calls draw.js 
            draw.js -> calls enemy.js, player.js, bulletController.js
                enemy.js, player.js, and bulletController.js essentially return arrays to draw and draw uses those to draw the game space

    How to control the movement of the enemies? Controlled in enemyController or in enemy? 
        position array is in the enemyController. Increment this in enemy and pass it to enemyController or keep it in enemyCOntroller and pass to enemy? 

      