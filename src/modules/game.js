import Car from './car'
import Bulbasaur from './bulbasaur'
import Log from './log'
import Base from './base'

class BulbasaurAdventure {
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height }; 
        this.car = new Car(this.ctx, this.dimensions)
        this.bulbasaur = new Bulbasaur(this.ctx, this.dimensions)
        this.log = new Log(this.ctx, this.dimensions)
        this.base = new Base(this.ctx)
        this.lives = 5
        this.draw();
        this.reset = this.reset.bind(this)
        this.play = true
        this.win = false
    }

    drawBackground() {
        this.ctx.fillStyle = '#9b7653';
        this.ctx.fillRect(0, 0, 1090, 65);
        this.ctx.fillRect(0, 330, 1090, 30);
        this.ctx.fillRect(0, 660, 1090, 40);

        this.ctx.fillStyle ='#4b8b3b';
        this.ctx.fillRect(0, 0, 1090, 18)

        this.ctx.fillStyle = '#474a51'
        this.ctx.fillRect(0, 360, 1090, 300)

        this.ctx.beginPath();
        this.ctx.moveTo(0, 375);
        this.ctx.lineTo(1090, 375);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([100, 5]);
        this.ctx.lineWidth = 5;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 645);
        this.ctx.lineTo(1090, 645);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([100, 5]);
        this.ctx.lineWidth = 5;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 429);
        this.ctx.lineTo(1090, 429);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([50, 30]);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 483);
        this.ctx.lineTo(1090, 483);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([50, 30]);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 537);
        this.ctx.lineTo(1090, 537);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([50, 30]);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 591);
        this.ctx.lineTo(1090, 591);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([50, 30]);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.fillStyle = "#0c7ecf"
        this.ctx.fillRect(0, 65, 1090, 270)

    }

    drawBush() {   
        const bush = new Image();
        bush.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/bush_sprite.png"
        this.ctx.drawImage(bush, 0, 0, 70, 70, -30, -20, 90, 105)
        this.ctx.drawImage(bush, 70, 0, 70, 70, 30, -65, 90, 100)
        this.ctx.drawImage(bush, 140, 0, 70, 70, 90, -20, 90, 105)
        this.ctx.drawImage(bush, 210, 0, 70, 70, 150, -20, 90, 105)
        this.ctx.drawImage(bush, 280, 0, 70, 70, 210, -20, 90, 105)
        this.ctx.drawImage(bush, 350, 0, 70, 70, 270, -65, 90, 100)
        this.ctx.drawImage(bush, 0, 0, 70, 70, 330, -20, 90, 105)
        this.ctx.drawImage(bush, 70, 0, 70, 70, 390, -20, 90, 105)
        this.ctx.drawImage(bush, 140, 0, 70, 70, 450, -20, 90, 105)
        this.ctx.drawImage(bush, 210, 0, 70, 70, 510, -65, 90, 100)
        this.ctx.drawImage(bush, 280, 0, 70, 70, 570, -20, 90, 105)
        this.ctx.drawImage(bush, 350, 0, 70, 70, 630, -20, 90, 105)
        this.ctx.drawImage(bush, 0, 0, 70, 70, 690, -20, 90, 105)
        this.ctx.drawImage(bush, 70, 0, 70, 70, 750, -65, 90, 100)
        this.ctx.drawImage(bush, 140, 0, 70, 70, 810, -20, 90, 105)
        this.ctx.drawImage(bush, 210, 0, 70, 70, 870, -20, 90, 105)
        this.ctx.drawImage(bush, 280, 0, 70, 70, 930, -20, 90, 105)
        this.ctx.drawImage(bush, 350, 0, 70, 70, 990, -65, 90, 100)
        this.ctx.drawImage(bush, 0, 0, 70, 70, 1050, -20, 90, 105)
    }

    drawGrass() {
        const grass = new Image();
        grass.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/grass_sprite.png"
        this.ctx.drawImage(grass, 100, 335, 35, 30)
        this.ctx.drawImage(grass, 130, 335, 35, 30)
        this.ctx.drawImage(grass, 300, 335, 35, 30)
        this.ctx.drawImage(grass, 400, 335, 35, 30)
        this.ctx.drawImage(grass, 700, 335, 35, 30)
        this.ctx.drawImage(grass, 900, 335, 35, 30)
        this.ctx.drawImage(grass, 120, 645, 35, 30)
        this.ctx.drawImage(grass, 180, 645, 35, 30)
        this.ctx.drawImage(grass, 350, 645, 35, 30)
        this.ctx.drawImage(grass, 600, 645, 35, 30)
        this.ctx.drawImage(grass, 630, 645, 35, 30)
        this.ctx.drawImage(grass, 650, 645, 35, 30)
        this.ctx.drawImage(grass, 750, 645, 35, 30)
        this.ctx.drawImage(grass, 950, 645, 35, 30)
    }


    draw() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
        this.registerEvents();

        if (!this.win) {
            this.gameOver();
        }

        if (this.play) {
        
        this.drawBackground();
        this.drawGrass();
        this.base.drawBases();
        this.drawBush();
     
        this.car.drawCars();
        this.car.moveCars();
        this.collision();
        this.log.drawLogs();
        this.log.moveLogs();
        this.float();

        this.bulbasaur.move();
        this.bulbasaur.drawBulbasaur();

        this.reachBase();
        this.onBase();

        this.drawLives();
        this.victory();

        }

       
        requestAnimationFrame(this.draw.bind(this));
    }

    registerEvents() {
        document.addEventListener("keydown", this.bulbasaur.handleKeyDown.bind(this), false);
        document.addEventListener("keyup", this.bulbasaur.handleKeyUp.bind(this), false)
    }


    collision() {
        const carsX = Object.values(this.car.carsX)
        const carsY = Object.values(this.car.carsY)
        
        let i;
        for (i = 0; i < carsX.length; i++ ) {
            if (carsX[i] <= this.bulbasaur.x + 50 && 
                carsX[i] + this.car.carWidth >= this.bulbasaur.x &&
                carsY[i] + 50 >= this.bulbasaur.y &&
                carsY[i] <= this.bulbasaur.y) {
                this.reset()
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
                    logsX[i] + this.log.logWidth >= this.bulbasaur.x &&
                    logsY[i] + this.log.logHeight > this.bulbasaur.y && 
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
                this.ctx.drawImage(bulbasaur, 23, 0, 23, 25, basesX[i], this.base.basesY, 55, 55)
            }
        }
    }

    drawLives() {
        const life = new Image();
        life.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/lives_sprite.png"
        this.ctx.drawImage(life, 0, 0, 297*(this.lives), 236, 30, 670, 36*(this.lives), 25)

    }


    gameOver() {
        if (this.lives === 0) {
            this.play = false;
            this.ctx.fillStyle = 'black'
            this.ctx.fillRect(0, 0, 1090, 700)
            const angeryBulbasaur = new Image();
            angeryBulbasaur.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/angry_bulbasaur.png"
            this.ctx.drawImage(angeryBulbasaur, 500, 200, 120, 100)
            this.ctx.fillStyle = 'white'
            this.ctx.font = "30px Arcade"
            this.ctx.fillText("Game  Over", 500, 350);

        }
    
    }

    victory() {
        
        if (JSON.stringify(this.base.isHome) === JSON.stringify([true, true, true, true, true])) {
            this.ctx.fillStyle = 'black'
            this.ctx.fillRect(0, 0, 1090, 700)
            this.ctx.fillStyle = "white"
            this.ctx.font = "30px Arcade"
            this.ctx.fillText("You  Won!", 500, 350);
            const happyBulbasaur = new Image();
            happyBulbasaur.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/happy_bulbasaur.png"
            this.ctx.drawImage(happyBulbasaur, 500, 200, 120, 120)
            this.win = true
        }
    }
}

export default BulbasaurAdventure;