class BulletType3Controller extends BulletController{
    constructor(x, y, configs, shipType3){
        super(
            x,
            y,
            'BulletType3.png',
            configs
        );
        this.shipType3 = shipType3;
        this.configs.BULLET_SPEED = 0;
        this.sprite.body.velocity.y = 0;
        this.sprite.anchor = new Phaser.Point(0.5, 1);
    }
    update(){
        this.sprite.x = this.shipType3.body.position.x+40;
        this.sprite.y = this.shipType3.body.position.y+10;

    }



}
