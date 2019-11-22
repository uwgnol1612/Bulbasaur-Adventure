import Sound from './sound'

class Bulbasaur {
    constructor(ctx, dimensions) {
        this.ctx = ctx
        this.dimensions = dimensions
        this.keyState = { upPressed:false, downPressed: false, rightPressed: false, leftPressed: false}
        this.moveDir = { up: true, down: true, left: true, right: true };
        this.sx = 0;
        this.sy = 0;
        this.x = 500;
        this.y = 650;
        this.width = 50;
        this.height = 50;
        

    }
    
    drawBulbasaur() {
        const bulbasaur = new Image();
        bulbasaur.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/bulbasaur.png"
        this.ctx.drawImage(bulbasaur, this.sx, this.sy, 23, 25, this.x, this.y, this.width, this.height)
    }

    move() {
        if (this.keyState['upPressed'] && this.moveDir['up'] && this.y > 30) {
            this.y = this.y - 30;
            this.moveDir['up'] = false
            this.sx = 0
            const move = new Sound("../src/assets/music/move.mp3") 
            move.play()  
        }
        if (!this.keyState['upPressed']) {
            this.moveDir['up'] = true
            
        }
        
        if (this.keyState['downPressed'] && this.moveDir['down'] && this.y < this.dimensions.height - 50) {
            this.y = this.y + 30;
            this.moveDir['down'] = false
            this.sx = 23
            const move = new Sound("../src/assets/music/move.mp3") 
            move.play()  
        }
        if (!this.keyState['downPressed']) {
            this.moveDir['down'] = true

        }
        if (this.keyState['leftPressed'] && this.moveDir['left'] && this.x > 15) {
            this.x = this.x - 30;
            this.moveDir['left'] = false
            this.sx = 46
            const move = new Sound("../src/assets/music/move.mp3") 
            move.play()  
        }
        if (!this.keyState['leftPressed']) {
            this.moveDir['left'] = true
        }

        if (this.keyState['rightPressed'] && this.moveDir['right'] && this.x < this.dimensions.width - 50) {
            this.x = this.x + 30;
            this.moveDir['right'] = false
            this.sx = 69
            const move = new Sound("../src/assets/music/move.mp3") 
            move.play()  
        }
        if (!this.keyState['rightPressed']) {
            this.moveDir['right'] = true
        }

    }


    handleKeyDown(e) {
       
        if (e.keyCode === 97 || e.keyCode === 38) {
            this.bulbasaur.keyState['upPressed'] = true;
        }
        if (e.keyCode === 83 || e.keyCode === 40) {
            this.bulbasaur.keyState['downPressed'] = true;
        }
        if (e.keyCode === 65 || e.keyCode === 37) {
            this.bulbasaur.keyState['leftPressed'] = true;
        }
        if (e.keyCode === 68 || e.keyCode === 39) {
            this.bulbasaur.keyState['rightPressed'] = true;
        }
    }

    handleKeyUp(e) {
        if (e.keyCode === 38 || e.keyCode === 97) {
            this.bulbasaur.keyState['upPressed'] = false;
        }
        if (e.keyCode === 83 || e.keyCode === 40) {
            this.bulbasaur.keyState['downPressed'] = false;
        }
        if (e.keyCode === 65 || e.keyCode === 37) {
            this.bulbasaur.keyState['leftPressed'] = false;
        }
        if (e.keyCode === 68 || e.keyCode === 39) {
            this.bulbasaur.keyState['rightPressed'] = false;
        }
    }


}

export default Bulbasaur;