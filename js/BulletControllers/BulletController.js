class BulletController{
  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.bulletGroup.create(x, y, 'assets', spriteName);
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    // this.sprite.body.collideWorldBounds = true;
    this.sprite.update = this.update.bind(this);
    this.configs = configs;
    this.configs.BULLET_SPEED = 1500;
    this.sprite.body.velocity.y =- this.configs.BULLET_SPEED;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
  }

  update(){

  }
}
