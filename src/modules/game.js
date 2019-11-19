class BulbasaurAdventure {
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height }; 
        this.upPressed = false;
        this.downPressed = false;
        this.leftPressed = false;
        this.rightPressed = false;
        this.up = true;
        this.down = true;
        this.right = true;
        this.left = true;
        this.sx = 0
        this.sy = 0
        this.x = 500;
        this.y = 650

        this.draw();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);

    }

    drawBackground() {
        this.ctx.fillStyle = '#c2b280';
        this.ctx.fillRect(0, 0, 1000, 60);
        this.ctx.fillRect(0, 330, 1000, 30);
        this.ctx.fillRect(0, 660, 1000, 40);

        this.ctx.fillStyle = '#474a51'
        this.ctx.fillRect(0, 360, 1000, 300)

        this.ctx.beginPath();
        this.ctx.moveTo(0, 375);
        this.ctx.lineTo(1000, 375);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([100, 5]);
        this.ctx.lineWidth = 5;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 645);
        this.ctx.lineTo(1000, 645);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([100, 5]);
        this.ctx.lineWidth = 5;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 429);
        this.ctx.lineTo(1000, 429);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([50, 30]);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 483);
        this.ctx.lineTo(1000, 483);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([50, 30]);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 537);
        this.ctx.lineTo(1000, 537);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([50, 30]);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, 591);
        this.ctx.lineTo(1000, 591);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([50, 30]);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.fillStyle = "#0c7ecf"
        this.ctx.fillRect(0, 60, 1000, 270)

    }

    drawBush() {   
        const bush = new Image();
        bush.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/bush.png"    
        this.ctx.drawImage(bush, -75, -5, 150, 75)
        this.ctx.drawImage(bush, 120, -5, 150, 75)
        this.ctx.drawImage(bush, 325, -5, 150, 75)
        this.ctx.drawImage(bush, 525, -5, 150, 75)
        this.ctx.drawImage(bush, 725, -5, 150, 75)
        this.ctx.drawImage(bush, 925, -5, 150, 75)
    }

    drawGrass() {
        const grass = new Image();
        grass.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/grass.png"
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

    drawBulbasaur() {
        const bulbasaur = new Image();
        bulbasaur.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/bulbasaur.png"
        this.ctx.drawImage(bulbasaur, this.sx, this.sy, 24, 25, this.x, this.y, 50, 50)
    }

    draw() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
        this.registerEvents();
        this.drawBackground();
        this.drawBush();
        this.drawGrass();
        this.drawBulbasaur();
        this.move();
        requestAnimationFrame(this.draw.bind(this));
    }

    registerEvents() {
        document.addEventListener("keydown", this.handleKeyDown, false);
        document.addEventListener("keyup", this.handleKeyUp, false)
    }

    move() {
        if (this.upPressed && this.up) {
            this.y = this.y - 27;
            this.up = false
        }
        if (this.upPressed === false) {
            this.up = true
        }
    }


    handleKeyDown(e) {
       
        if (e.keyCode === 97 || e.keyCode === 38) {
            this.upPressed = true;
        }
        if (e.keyCode === 83 || e.keyCode === 40) {
            this.downPressed = true;
        }
        if (e.keyCode === 65 || e.keyCode === 37) {
            this.leftPressed = true;
        }
        if (e.keyCode === 68 || e.keyCode === 39) {
            this.rightPressed = true;
        }
    }

    handleKeyUp(e) {
        if (e.keyCode === 38 || e.keyCode === 97) {
            this.upPressed = false;
        }
        if (e.keyCode === 83 || e.keyCode === 40) {
            this.downPressed = false;
        }
        if (e.keyCode === 65 || e.keyCode === 37) {
            this.leftPressed = false;
        }
        if (e.keyCode === 68 || e.keyCode === 39) {
            this.rightPressed = false;
        }
    }

    gameOver() {
    
    }
}

export default BulbasaurAdventure;