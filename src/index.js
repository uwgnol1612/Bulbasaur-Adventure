const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const grass = new Image();
grass.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/grass.png"
const bush = new Image();
bush.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/bush.png"


function drawBackground(){
    ctx.fillStyle = '#c2b280';
    ctx.fillRect(0, 0, 1000, 60);
    ctx.fillRect(0, 330, 1000, 30);
    ctx.fillRect(0, 660, 1000, 40);

    ctx.fillStyle = '#474a51'
    ctx.fillRect(0, 360, 1000, 300)

    ctx.beginPath();
    ctx.moveTo(0, 375);
    ctx.lineTo(1000, 375);
    ctx.strokeStyle = "white";
    ctx.setLineDash([100, 5]);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 645);
    ctx.lineTo(1000, 645);
    ctx.strokeStyle = "white";
    ctx.setLineDash([100, 5]);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 429);
    ctx.lineTo(1000, 429);
    ctx.strokeStyle = "white";
    ctx.setLineDash([50, 30]);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 483);
    ctx.lineTo(1000, 483);
    ctx.strokeStyle = "white";
    ctx.setLineDash([50, 30]);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 537);
    ctx.lineTo(1000, 537);
    ctx.strokeStyle = "white";
    ctx.setLineDash([50, 30]);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 591);
    ctx.lineTo(1000, 591);
    ctx.strokeStyle = "white";
    ctx.setLineDash([50, 30]);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#0c7ecf"
    ctx.fillRect(0, 60, 1000, 270)
  
}
function drawBush() {       
    ctx.drawImage(bush, -75, -5, 150, 75)
    ctx.drawImage(bush, 120, -5, 150, 75)
    ctx.drawImage(bush, 325, -5, 150, 75)
    ctx.drawImage(bush, 525, -5, 150, 75)
    ctx.drawImage(bush, 725, -5, 150, 75)
    ctx.drawImage(bush, 925, -5, 150, 75)
}

function drawGrass() {
    ctx.drawImage(grass, 100, 335, 35, 30)
    ctx.drawImage(grass, 130, 335, 35, 30)
    ctx.drawImage(grass, 300, 335, 35, 30)
    ctx.drawImage(grass, 400, 335, 35, 30)
    ctx.drawImage(grass, 700, 335, 35, 30)
    ctx.drawImage(grass, 900, 335, 35, 30)
    ctx.drawImage(grass, 120, 645, 35, 30)
    ctx.drawImage(grass, 180, 645, 35, 30)
    ctx.drawImage(grass, 350, 645, 35, 30)
    ctx.drawImage(grass, 600, 645, 35, 30)
    ctx.drawImage(grass, 630, 645, 35, 30)
    ctx.drawImage(grass, 650, 645, 35, 30)
    ctx.drawImage(grass, 750, 645, 35, 30)
    ctx.drawImage(grass, 950, 645, 35, 30)
}

function drawBulbasaur() {
    
}



function draw() {
    drawBackground();
    drawBush();
    drawGrass();
    requestAnimationFrame(draw);
}

draw();







