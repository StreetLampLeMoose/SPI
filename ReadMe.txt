This is a browser based space invaders game.

Control flow -> 
    index.js controls game -> start, pause, game over document
        index.js calls draw.js 
            draw.js -> calls enemy.js, player.js, bulletController.js
                enemy.js, player.js, and bulletController.js essentially return arrays to draw and draw uses those to draw the game space
                