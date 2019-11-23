import BulbasaurAdventure from './modules/game'

const canvas = document.getElementById('game-canvas');
const game = new BulbasaurAdventure(canvas)

const handleKeyDown = (e) => {
        switch(e.keyCode) {
        case 82:
            game.restart();
        case 83:
            const intro = document.getElementById('intro')
            intro.classList.add("hidden")
            game.start()
            
    }

}

window.addEventListener("keydown", handleKeyDown, false)















