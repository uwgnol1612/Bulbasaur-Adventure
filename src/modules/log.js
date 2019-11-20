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
        this.logsY = { logY1: 50, 
                       logY2: 50, 
                       logY3: 110, 
                       logY4: 110, 
                       logY5: 170, 
                       logY6: 170, 
                       logY7: 235, 
                       logY8: 235
                    };
        this.logWidth = 270;
        this.logHeight = 85
        this.lowSpeed = 2
        this.mediumSpeed = 3
    }

    drawLogs() {
        const log = new Image();
        log.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/logs.png"
        let i; 
        for (i = 0; i < 10; i++) {
            this.ctx.drawImage(log, Object.values(this.logsX)[i], Object.values(this.logsY)[i], this.logWidth, this.logHeight)
        }
        
    }

  
    moveLogs() {

        ['logX1', 'logX2', 'logX5', 'logX6', 'logX3', 'logX4', 'logX7', 'logX8'].forEach(logX => {
            if (['logX1', 'logX2'].includes(logX)) {
                if (this.logsX[logX] < this.dimensions.width + 100) {
                    this.logsX[logX] = this.logsX[logX] + this.mediumSpeed
                } else {
                    this.logsX[logX] = -this.logWidth
                }
            } else if (['logX5', 'logX6'].includes(logX)){
                if (this.logsX[logX] < this.dimensions.width + 100) {
                    this.logsX[logX] = this.logsX[logX] + this.lowSpeed
                } else {
                    this.logsX[logX] = -this.logWidth
                }
            } else if (['logX3', 'logX4'].includes(logX)) {
                if (this.logsX[logX] > -this.logWidth) {
                    this.logsX[logX] = this.logsX[logX] - this.mediumSpeed
                } else {
                    this.logsX[logX] = this.dimensions.width + 100
                }
            } else {
                if (this.logsX[logX] > -this.logWidth) {
                    this.logsX[logX] = this.logsX[logX] - this.lowSpeed
                } else {
                    this.logsX[logX] = this.dimensions.width + 100
                }
            }
        })
    }
    

}

export default Log;