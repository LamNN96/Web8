class BulletType2Controller extends BulletController {
    constructor(x, y, configs) {
        super(x, y, 'BulletType2.png', configs);

        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.WOBBLE_LIMIT = 15; // degrees
        this.WOBBLE_SPEED = 250; // milliseconds
        this.wobble = this.WOBBLE_LIMIT;
        this.SPEED = 300; // missile speed pixels/second
        this.TURN_RATE = 55; // turn rate in degrees/frame
        Nakama.game.add.tween(this)
        .to(
            { wobble: -this.WOBBLE_LIMIT },
            this.WOBBLE_SPEED, Phaser.Easing.Sinusoidal.InOut, true, 0,
            Number.POSITIVE_INFINITY, true
        );
    }


    update() {

        this.target = Nakama.enemyGroup.getFirstAlive();
        if(this.target != null){

            if (this.target) {
                var targetAngle = Nakama.game.math.angleBetween(
                    this.sprite.body.position.x, this.sprite.body.position.y,
                    this.target.body.position.x , this.target.body.position.y
                );
            } else {
                var targetAngle = 0;
            }
            targetAngle += Nakama.game.math.degToRad(this.wobble);

            if (this.sprite.rotation !== targetAngle) {
                var delta = targetAngle - this.sprite.rotation + Math.PI / 2;

                if (delta > Math.PI) delta -= Math.PI * 2;
                if (delta < -Math.PI) delta += Math.PI * 2;

                if (delta > 0) {
                    this.sprite.angle += this.TURN_RATE;
                } else {
                    this.sprite.angle -= this.TURN_RATE;
                }

                if (Math.abs(delta) < Nakama.game.math.degToRad(this.TURN_RATE)) {
                    this.sprite.rotation = targetAngle + Math.PI / 2;
                }
            }
            this.sprite.body.velocity.x = Math.cos(this.sprite.rotation - Math.PI / 2) * this.SPEED;
            this.sprite.body.velocity.y = Math.sin(this.sprite.rotation - Math.PI / 2) * this.SPEED;

        }

    }
}
