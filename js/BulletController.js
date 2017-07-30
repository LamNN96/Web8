class BulletController{
  constructor(x, y, spriteName){
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.update = this.update.bind(this);
    this.BULLET_SPEED = 500;
  }

  update(){
    this.sprite.body.velocity.y =- this.BULLET_SPEED;
    if (this.sprite.body.blocked.up === true) {
            this.sprite.kill()
        }
  }
}
