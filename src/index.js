import BulbasaurAdventure from './modules/game'
const canvas = document.getElementById('game-canvas');

const game = new BulbasaurAdventure(canvas)

window.addEventListener("keydown", game.handleKeyDown, false)















