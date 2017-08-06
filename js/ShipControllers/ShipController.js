class ShipController {
    constructor(x, y, spriteName, configs) {
        this.sprite = Nakama.playerGroup.create(x, y, 'assets', spriteName);
        this.configs = configs;
        //  Nakama.game.physics.arcade.enable(this.sprite); k can thiet
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);
        this.arrBullets = [];
        this.nextShotTime = 0;
        this.configs.COOLDOWN = 300;
        this.configs.SHIP_SPEED = 300;

    }

    update() {
        if (Nakama.keyboard.isDown(this.configs.left) && this.sprite.position.x >= 0) {
            this.sprite.body.velocity.x = -this.configs.SHIP_SPEED;
        }

        else if (Nakama.keyboard.isDown(this.configs.right) && this.sprite.position.x <= Nakama.configs.GAME_WIDTH - 78) {
            //  this.sprite.position.x += 10;
            this.sprite.body.velocity.x = this.configs.SHIP_SPEED;
        } else {
            this.sprite.body.velocity.x = 0;
        }

        if (Nakama.keyboard.isDown(this.configs.up) && this.sprite.position.y >= 0) {
            //  this.sprite.position.y -= 10;
            this.sprite.body.velocity.y = -this.configs.SHIP_SPEED;
        }

        else if (Nakama.keyboard.isDown(this.configs.down) && this.sprite.position.y <= Nakama.configs.GAME_HEIGHT - 78) {
            //  this.sprite.position.y += 10;
            this.sprite.body.velocity.y = this.configs.SHIP_SPEED;
        } else {
            this.sprite.body.velocity.y = 0;
        }
        // if(Nakama.keyboard.isDown(this.configs.fire)) {
        //   this.arrBullets.push(
        //           new BulletController(
        //             this.sprite.position.x + (this.sprite.width/3.8),
        //           this.sprite.position.y - (this.sprite.height / 2),
        //            'BulletType1.png')
        //          );
        //
        // };

        if (Nakama.keyboard.isDown(this.configs.fire) && Nakama.game.time.time > this.nextShotTime) {
            this.fire();
            this.nextShotTime = Nakama.game.time.time + this.configs.COOLDOWN;

        }
        if (Nakama.game.time.time > this.nextShotTime) {
           if(Nakama.enemyGroup.getFirstAlive() != null){


            this.autoFire();
            this.nextShotTime = Nakama.game.time.time + this.configs.COOLDOWN*3;
           }
        }

    }

    fire() {

    }

    autoFire(){

    }
}

