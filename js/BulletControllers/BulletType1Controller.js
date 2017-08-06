class BulletType1Controller extends BulletController{
  constructor(x, y, configs){
    super(
      x,
      y,
      'BulletType1.png',
      configs
    );

    this.sprite.body.velocity.y = -1500;
  }




}
