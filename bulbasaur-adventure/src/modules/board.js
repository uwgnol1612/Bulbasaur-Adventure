class Board {
    constructor(ctx, dimensions) {
        this.ctx = ctx;
        this.dimensions = dimensions
        this.roadPosY = [429, 483, 537, 591]
        this.grassPos = this.generateGrassPos()
    }

    drawRoadEdge(posY) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, posY);
        this.ctx.lineTo(this.dimensions.width, posY);
        this.ctx.strokeStyle = "white";
        this.ctx.setLineDash([100, 5]);
        this.ctx.lineWidth = 5;
        this.ctx.stroke();
    }

    drawRoadLines() {
        this.roadPosY.forEach(posY => {
            this.ctx.beginPath();
            this.ctx.moveTo(0, posY);
            this.ctx.lineTo(this.dimensions.width, posY);
            this.ctx.strokeStyle = "white";
            this.ctx.setLineDash([50, 30]);
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        })
  
    }

    generateGrassPos() {
        const grassPos = []
        for (let i = 0; i < 20; i++) {
            grassPos.push([Math.random()*this.dimensions.width, [335, 645][Math.floor(Math.random()*2)]])
        }
        return grassPos;
    }

    drawBackground() {
        this.ctx.fillStyle = '#9b7653';
        this.ctx.fillRect(0, 0, this.dimensions.width, 65);
        this.ctx.fillRect(0, 330, this.dimensions.width, 30);
        this.ctx.fillRect(0, 660, this.dimensions.width, 40);

        this.ctx.fillStyle ='#4b8b3b';
        this.ctx.fillRect(0, 0, this.dimensions.width, 18)

        this.ctx.fillStyle = '#474a51'
        this.ctx.fillRect(0, 360, this.dimensions.width, 300)

        this.drawRoadEdge(375);
        this.drawRoadEdge(645);

        this.drawRoadLines();

        this.ctx.fillStyle = "#0c7ecf"
        this.ctx.fillRect(0, 65, this.dimensions.width, 270)
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

        this.grassPos.forEach(pos => {
            this.ctx.drawImage(grass, pos[0], pos[1], 35, 30)
        })
    }

}

export default Board;