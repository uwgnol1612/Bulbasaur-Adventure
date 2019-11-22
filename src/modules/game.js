import Car from './car'
import Bulbasaur from './bulbasaur'
import Log from './log'
import Base from './base'
import Board from './board'
import Sound from './sound'

class BulbasaurAdventure {
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height }; 

        this.board = new Board(this.ctx, this.dimensions)
        this.car = new Car(this.ctx, this.dimensions)
        this.bulbasaur = new Bulbasaur(this.ctx, this.dimensions)
        this.log = new Log(this.ctx, this.dimensions)
        this.base = new Base(this.ctx)
        
        this.lives = 5
        this.score = 0
        this.time = 60000

        this.endTime = 0

        this.play = false
        this.win = false
        this.countdown = false

        this.accident = [];
        this.paused = false

        this.music = new Sound("../src/assets/music/bgm.mp3")
        this.music.play()
        this.handlePause();
        this.render()


    }

    
    render() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
        this.registerEvents();
        

        if (!this.win) {
            this.gameOver();
        }

        if (this.play) {
        
        this.board.drawBackground();
        this.board.drawGrass();
        this.base.drawBases();
        this.board.drawBush();

        this.drawBlood();
     
        this.car.drawCars();
        this.car.moveCars();
        this.collision();
       
        this.log.drawLogs();
        this.log.moveLogs();
        this.float();

        this.bulbasaur.drawBulbasaur();
        this.bulbasaur.move();
 
        this.reachBase();
        this.onBase();

        this.drawLives();
        this.drawTime();
        this.drawScore();

        this.victory();  
        

        }

        if (!this.paused) {
            window.requestAnimationFrame(this.render.bind(this));
        }
        
    }

    registerEvents() {
        document.addEventListener("keydown", this.bulbasaur.handleKeyDown.bind(this), false);
        document.addEventListener("keyup", this.bulbasaur.handleKeyUp.bind(this), false)
    }

    drawBlood() {
         const blood = new Image();
         blood.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/blood.png"
                
        if (this.accident.length > 0) {
            this.accident.forEach(coord => {
                this.ctx.drawImage(blood, coord[0], coord[1], 50, 50)
            })
        }

    }


    collision() {
        const carsX = Object.values(this.car.carsX)
        const carsY = Object.values(this.car.carsY)
        
        let i;
        for (i = 0; i < carsX.length; i++ ) {
            if (carsX[i] <= this.bulbasaur.x + this.bulbasaur.width && 
                carsX[i] + this.car.carWidth >= this.bulbasaur.x &&
                carsY[i] + this.bulbasaur.height >= this.bulbasaur.y &&
                carsY[i] <= this.bulbasaur.y) {
                this.accident.push([this.bulbasaur.x, this.bulbasaur.y])
                setTimeout(this.reset(), 2000);
                const runOver = new Sound("../src/assets/music/runover.mp3") 
                runOver.play()
                this.lives --
            }

        }

    }

    float() {
        const logsX = Object.values(this.log.logsX)
        const logsY = Object.values(this.log.logsY)
        const logsXKeys = Object.keys(this.log.logsX)

        let i;
         
            for (i = 0; i < logsX.length; i++ ) {
           
                if (logsX[i] <= this.bulbasaur.x &&
                    logsX[i] + this.log.logWidth - 20 >= this.bulbasaur.x &&
                    logsY[i] + this.log.logHeight - 20 > this.bulbasaur.y && 
                    logsY[i] <= this.bulbasaur.y) {
                        
                        if (['logX1', 'logX2'].includes(logsXKeys[i])) {
                            if (this.bulbasaur.x < this.dimensions.width - 50) {
                                this.bulbasaur.x = this.bulbasaur.x + this.log.mediumSpeed }
                                return 
                        } else if (['logX5', 'logX6'].includes(logsXKeys[i])) {
                            if (this.bulbasaur.x < this.dimensions.width - 50) {
                                this.bulbasaur.x = this.bulbasaur.x + this.log.lowSpeed }
                                return 
                        } else if (['logX3', 'logX4'].includes(logsXKeys[i])) {
                            if (this.bulbasaur.x > 0) {
                                this.bulbasaur.x = this.bulbasaur.x - this.log.mediumSpeed }
                                return 
                        } else if (['logX7', 'logX8'].includes(logsXKeys[i])) {
                            if (this.bulbasaur.x > 0) {
                                this.bulbasaur.x = this.bulbasaur.x - this.log.lowSpeed }
                                return
                        } 
                
                } 

            } 
            if (this.bulbasaur.y < 320 && this.bulbasaur.y > 65) {
                const drown = new Sound("../src/assets/music/drown.mp3") 
                drown.play()  
                this.lives --
                this.reset() 
            }
       
    }

    reachBase() {
        const basesX = Object.values(this.base.basesX)
        let i;
        for (i = 0; i < basesX.length; i++) {
            if (basesX[i] <= this.bulbasaur.x + this.bulbasaur.width &&
                basesX[i] + this.base.baseWidth >= this.bulbasaur.x &&
                this.base.basesY + this.base.baseHeight >= this.bulbasaur.y &&
                this.base.basesY <= this.bulbasaur.y + this.bulbasaur.height) {
                    this.base.isHome[i] = true
                    const touch_base = new Sound("../src/assets/music/touch_base.mp3") 
                    touch_base.play()
                    this.endTime = Math.floor(this.time / 1000) 
                    this.reset()
                    return 
                }
        }
        if (this.bulbasaur.y < 65) {
            this.lives --
            this.reset() 
        }
    }

    reset() {
        this.time = 60000
        this.countdown = false
        this.bulbasaur.sx = 0
        this.bulbasaur.x = 500
        this.bulbasaur.y = 650

    }

    onBase() {
        const basesX = Object.values(this.base.basesX)
        let i;
        for (i = 0; i < 5; i++) {
            if (this.base.isHome[i]) {
                const bulbasaur = new Image();
                bulbasaur.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/bulbasaur.png"
                this.ctx.drawImage(bulbasaur, 23, 0, 23, 25, basesX[i] + 5, this.base.basesY, 50, 50)
            }
        }
    }

    drawLives() {
        const life = new Image();
        life.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/lives_sprite.png"
        this.ctx.drawImage(life, 0, 0, 297*(this.lives), 236, 50, 670, 36*(this.lives), 25)

    }

    drawTime() {
        if (this.time > 0) {
            this.time -= 16.333
            const time = Math.floor((this.time / 60000) * 60)
            this.ctx.fillStyle = '#54B948'
            this.ctx.font = '30px Arcade'
            this.ctx.fillText(`Time:   ${time}`, 700, 685)
            if (!this.countdown && this.time < 6000) {
                const clock = new Sound("../src/assets/music/clock.mp3")
                clock.play()
                this.countdown = true
            }
        } else {
            setTimeout(this.reset(), 2000);
            this.lives --
        }
    }

    drawScore() {
        let count = 0;
        this.base.isHome.forEach(base => {
            if (base) {
                count ++
            }
        })
        this.score = count * 200 + this.endTime * 20
        this.ctx.fillStyle = '#54B948'
        this.ctx.font = '30px Arcade'
        this.ctx.fillText(`Score:   ${this.score}`, 900, 685)

        
    }


    gameOver() {
        if (this.lives === 0) {
            this.music.stop()                           
            this.ctx.fillStyle = 'black'
            this.ctx.fillRect(0, 0, 1090, 700)
            const angeryBulbasaur = new Image();
            angeryBulbasaur.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/angry_bulbasaur.png"
            this.ctx.drawImage(angeryBulbasaur, 505, 200, 120, 100)
            this.ctx.fillStyle = 'white'
            this.ctx.font = "30px Arcade"
            this.ctx.fillText("Game   Over", 500, 350);
            this.ctx.fillText("Press   R   to   try   again  !", 420, 400)
            if (this.play) {
            const game_over = new Sound("../src/assets/music/game_over.mp3") 
            game_over.play() 
            } 
            this.play = false;  
  
        }
    
    }

    victory() {
        
        if (JSON.stringify(this.base.isHome) === JSON.stringify([true, true, true, true, true])) {
            this.music.stop() 
            this.ctx.fillStyle = 'black'
            this.ctx.fillRect(0, 0, 1090, 700)
            this.ctx.fillStyle = "white"
            this.ctx.font = "30px Arcade"
            this.ctx.fillText("You  Won!", 500, 350);
            const happyBulbasaur = new Image();
            happyBulbasaur.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/happy_bulbasaur.png"
            this.ctx.drawImage(happyBulbasaur, 500, 180, 120, 120)
            if (!this.win) {
            const new_life = new Sound("../src/assets/music/new_life.mp3") 
            new_life.play() 
            } 
            this.win = true
        }
    }

    togglePause() {
        this.paused = !this.paused
        this.render()
    }


    handlePause() {
        let that = this;
        window.addEventListener("keydown", function(e) {
            switch(e.keyCode) {
            case 80:
            that.togglePause();
            break
        }}, false)
  
    }


    start() {
        this.play = true
    }


    restart() {
        this.board = new Board(this.ctx, this.dimensions)
        this.car = new Car(this.ctx, this.dimensions)
        this.bulbasaur = new Bulbasaur(this.ctx, this.dimensions)
        this.log = new Log(this.ctx, this.dimensions)
        this.base = new Base(this.ctx)
        
        this.lives = 5
        this.score = 0
        this.time = 60000

        this.endTime = 0

        this.play = true
        this.win = false
        this.countdown = false

        this.accident = [];
        this.paused = false

    }


 
}

export default BulbasaurAdventure;