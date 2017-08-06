class ShipType2Controller extends ShipController {
    constructor(x, y, spriteSuffix, configs) {
        super(
            x,
            y,
            `Spaceship1${spriteSuffix}.png`,
            configs
        );

        this.configs.COOLDOWN = 300;
        this.configs.SHIP_SPEED = 300;
    }
    fire(){
        new BulletType3Controller(
            this.sprite.x,
            this.sprite.y - this.sprite.height/2 + 10,
            {},
            this.sprite
        );
    }
    autoFire() {

        new BulletType2Controller(
            this.sprite.x + this.sprite.width/2,
            this.sprite.y,
            {}
        );


        new BulletType2Controller(
            this.sprite.x - this.sprite.width/2,
            this.sprite.y,
            {}
        );


    }

}
