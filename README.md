## Bulbasaur Adventure

[Play here](https://bulbasaur-adventure.firebaseapp.com/)

![main](https://we-camp-seeds.s3.us-east-2.amazonaws.com/bulbasaur_landing.png)

### Technologies

* JavaScript
* HTML5
* CSS3

### Background

Bulbasaur Adventure is a JavaScript implementation of a classic arcade game Frogger.

### How to Play

Use arrow keys &#8592; &#8593; &#8594; &#8595; to guide the bulbasaur to 'home'. Carefully navigate the bulbasaur across the street avoiding roadkill and move swiftly among the logs to cross the river. Press `P` to pause/continue the game.

### Features

#### Rendering & Collision detect

Rendering is done using HTML5 Canvas. I implemented functions to detect object collisions which allows `Car` and `Bulbasaur`, `Bulbasaur` and `Log`, `Bulbasaur` and `Base` to intuitively interact with each other. 

```javascript
float() {
    const logsX = Object.values(this.log.logsX)
    const logsY = Object.values(this.log.logsY)
    const logsXKeys = Object.keys(this.log.logsX)

    for (let i = 0; i < logsX.length; i++ ) {
    
        if (logsX[i] <= this.bulbasaur.x + this.bulbasaur.width &&
            logsX[i] + this.log.logWidth >= this.bulbasaur.x &&
            logsY[i] + this.log.logHeight >= this.bulbasaur.y && 
            logsY[i] <= this.bulbasaur.y + this.bulbasaur.height) {

                if (['logX1', 'logX2'].includes(logsXKeys[i])) {
                    if (this.bulbasaur.x < this.dimensions.width - this.bulbasaur.width) {
                        this.bulbasaur.x = this.bulbasaur.x + this.log.mediumSpeed }
                        return 
                } else if (['logX5', 'logX6'].includes(logsXKeys[i])) {
                    if (this.bulbasaur.x < this.dimensions.width - this.bulbasaur.width) {
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
```
### Future Directions

* Generate more levels with increasing difficulties
* Pokeball spawnning randomly at base and fruits on logs for bonus points
