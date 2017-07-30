class ShipController{
      constructor(x, y, spriteName, configs){
      this.sprite =  Nakama.game.add.sprite(x, y, 'assets', spriteName);
      this.configs = configs;
      this.configs.SHIP_SPEED = 300;
      Nakama.game.physics.arcade.enable(this.sprite);
      this.sprite.body.collideWorldBounds = true;
      this.sprite.update = this.update.bind(this);
      this.arrBullets = [];
      }

      update(){
        if(Nakama.keyboard.isDown(this.configs.left) && this.sprite.position.x >= 0) {
          this.sprite.body.velocity.x = -this.configs.SHIP_SPEED;
        }

        else if(Nakama.keyboard.isDown(this.configs.right) && this.sprite.position.x <= Nakama.configs.GAME_WIDTH - 78) {
        //  this.sprite.position.x += 10;
          this.sprite.body.velocity.x = this.configs.SHIP_SPEED;
        } else {
          this.sprite.body.velocity.x = 0;
        }

        if(Nakama.keyboard.isDown(this.configs.up) && this.sprite.position.y >= 0) {
        //  this.sprite.position.y -= 10;
          this.sprite.body.velocity.y = -this.configs.SHIP_SPEED;
        }

        else if(Nakama.keyboard.isDown(this.configs.down) && this.sprite.position.y <= Nakama.configs.GAME_HEIGHT -78) {
        //  this.sprite.position.y += 10;
          this.sprite.body.velocity.y = this.configs.SHIP_SPEED;
        } else {
          this.sprite.body.velocity.y = 0;
        }
      if(Nakama.keyboard.isDown(this.configs.fire)) {
        this.arrBullets.push(
                new BulletController(
                  this.sprite.position.x + (this.sprite.width/3.8),
                this.sprite.position.y - (this.sprite.height / 2),
                 'BulletType1.png')
               );
      };


  }
}
