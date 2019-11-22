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

    pause() {
        this.sound.pause()
    }

    stop() {
        this.sound.pause()
        this.sound.currentTime = 0;
    }

}

export default Sound;