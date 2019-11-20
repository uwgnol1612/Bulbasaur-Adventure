class Log {
    constructor(ctx, dimensions) {
        this.ctx = ctx
        this.dimensions = dimensions
        this.logsX = {  logX1: 400,
                        logX2: 900, 
                        logX3: 300,
                        logX4: 700,
                        logX5: 200, 
                        logX6: 800,
                        logX7: 100,
                        logX8: 500
                   
                    }
        this.logsY = { logY1: 45, 
                       logY2: 45, 
                       logY3: 110, 
                       logY4: 110, 
                       logY5: 175, 
                       logY6: 175, 
                       logY7: 240, 
                       logY8: 240
                    };
        this.logWidth = 270;
        this.logHeight = 90
    }

    drawLogs() {
        const log = new Image();
        log.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/logs.png"
        let i; 
        for (i = 0; i < 8; i++) {
            this.ctx.drawImage(log, Object.values(this.logsX)[i], Object.values(this.logsY)[i], this.logWidth, this.logHeight)
        }
        
    }

  
    moveLogs() {

        ['logX1', 'logX2', 'logX5', 'logX6', 'logX3', 'logX4', 'logX7', 'logX8'].forEach(logX => {
            if (['logX1', 'logX2'].includes(logX)) {
                if (this.logsX[logX] < this.dimensions.width + 100) {
                    this.logsX[logX] = this.logsX[logX] + 3
                } else {
                    this.logsX[logX] = -this.logWidth
                }
            } else if (['logX5', 'logX6'].includes(logX)){
                if (this.logsX[logX] < this.dimensions.width + 100) {
                    this.logsX[logX] = this.logsX[logX] + 2
                } else {
                    this.logsX[logX] = -this.logWidth
                }
            } else if (['logX3', 'logX4'].includes(logX)) {
                if (this.logsX[logX] > -this.logWidth) {
                    this.logsX[logX] = this.logsX[logX] - 3
                } else {
                    this.logsX[logX] = this.dimensions.width + 100
                }
            } else {
                if (this.logsX[logX] > -this.logWidth) {
                    this.logsX[logX] = this.logsX[logX] - 2
                } else {
                    this.logsX[logX] = this.dimensions.width + 100
                }
            }
        })
    }
    

}

export default Log;