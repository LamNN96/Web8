class ShipType1Controller extends ShipController {
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

    fire() {
        new BulletType1Controller(
            this.sprite.position.x,
            this.sprite.position.y,
            {}
        )
    }
}
