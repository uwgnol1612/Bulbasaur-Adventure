    class Car {
        constructor(ctx, dimensions) {
            this.ctx = ctx
            this.dimensions = dimensions
            this.carsX = {  carX1: 400,
                            carX2: 400 + Math.ceil(Math.random()*7)*120,
                            carX3: 300,
                            carX4: 300 + Math.ceil(Math.random()*7)*120,
                            carX5: 200, 
                            carX6: 200 + Math.ceil(Math.random()*7)*120,
                            carX7: 100,
                            carX8: 100 + Math.ceil(Math.random()*7)*120,
                            carX9: 500,
                            carX10: 500 + Math.ceil(Math.random()*7)*120          
            }
            this.carsY = { carY1: 360, carY2: 360, carY3: 410, carY4: 410, carY5: 460, carY6: 460, carY7: 520, carY8: 520, carY9: 570, carY10: 570
            };
            this.carSX = { carX1: 0, carX2: 95, carX3: 665, carX4: 760, carX5: 190, carX6: 285, carX7: 855, carX8: 950, carX9: 380, carX10: 475 
            }

            this.carHeight = 90
            this.carWidth = 120
            this.carSpeed = 2

        }


        drawCars() {
            const car = new Image();
            car.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/cars.png"
            let i;
            for (i = 0; i < 10; i++) {
                this.ctx.drawImage(car, Object.values(this.carSX)[i], 0, 95, 90, Object.values(this.carsX)[i], Object.values(this.carsY)[i], this.carWidth, this.carHeight)
            }

        }
            

        moveCars() {

            ['carX1', 'carX2', 'carX5', 'carX6', 'carX9', 'carX10', 'carX3', 'carX4', 'carX7', 'carX8'].forEach(carX => {
                if (['carX1', 'carX2', 'carX5', 'carX6', 'carX9', 'carX10'].includes(carX)) {
                    if (this.carsX[carX] < this.dimensions.width + 120) {
                        this.carsX[carX] = this.carsX[carX] + this.carSpeed
                    } else {
                        this.carsX[carX] = -120
                        this.carSX[carX] = (Math.floor(Math.random() * 7)) * 95
                    }
                } else {
                    if (this.carsX[carX] > -120) {
                        this.carsX[carX] = this.carsX[carX] - this.carSpeed
                    } else {
                        this.carsX[carX] = this.dimensions.width + 120
                        this.carSX[carX] = 665 + (Math.floor(Math.random() * 7)) * 95

                    }
                    
                } 
            })



        }




    }

    export default Car;
    
    