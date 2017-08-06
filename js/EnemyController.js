class EnemyController {
    constructor(x, y, spriteName, configs) {
        this.sprite = Nakama.enemyGroup.create(x, y, 'assets', spriteName);
        this.sprite.update = this.update.bind(this);
        this.configs = configs;
        this.sprite.health = this.configs.health;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.configs.ENEMY_SPEED = 50;
    }

    update() {
        this.sprite.body.velocity.y = -this.configs.ENEMY_SPEED;
        this.sprite.body.position.x = 300 + 300 * Math.sin(Nakama.game.time.time / 2000);
    }
}
