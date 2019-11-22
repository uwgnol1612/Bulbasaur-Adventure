import BulbasaurAdventure from './modules/game'

const introCanvas = document.getElementById('intro-canvas');
const introCtx = introCanvas.getContext('2d')

// const introBackground

// introCtx.drawImage()


const canvas = document.getElementById('game-canvas');
const game = new BulbasaurAdventure(canvas)

const handleKeyDown = (e) => {
        switch(e.keyCode) {
        case 82:
            game.restart();
        case 83:
            introCanvas.classList.add("hidden")
            game.start()
            
    }

}

window.addEventListener("keydown", handleKeyDown, false)















