import BulbasaurAdventure from './modules/game'
const canvas = document.getElementById('game-canvas');

function startGame(e) {
    if (e.keyCode === 80 || e.keyCode === 82) {
        new BulbasaurAdventure(canvas)
    }
}

document.addEventListener("keydown", startGame)











