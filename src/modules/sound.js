class Sound {
    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src
        this.sound.setAttribute = ("preload", "auto");
        this.sound.setAttribute = ("controls", "none");
       
        this.sound.style.display = "none"
    }
    play() {
        this.sound.play()
    }

    stop() {
        this.sound.stop()
    }

}

export default Sound;