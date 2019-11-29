class Base {
    constructor(ctx) {
        this.ctx = ctx
        this.basesX = { baseX1: 45,
                        baseX2: 285,
                        baseX3: 525,
                        baseX4: 765,
                        baseX5: 1005
                    }
        this.basesY = 10
        this.baseWidth = 60;
        this.baseHeight = 55;
        this.isHome = [false, false, false, false, false]
    }

    drawBases() {
        const base = new Image();
        base.src = "https://we-camp-seeds.s3.us-east-2.amazonaws.com/home_sprite.png"
        const basesX = Object.values(this.basesX)
        let i;
        for (i = 0; i < basesX.length; i++) {
            this.ctx.drawImage(base, basesX[i], this.basesY, this.baseWidth, this.baseHeight)
        }

    }
}

export default Base;