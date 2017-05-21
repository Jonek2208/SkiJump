var game = new Phaser.Game(640, 480, Phaser.AUTO, null,
    { preload: preload, create: create, update: update });

var hillName;
var sprite, sprite2;

function preload()
{
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#EEEEEE';
    game.load.image('arrow', 'img/paddle.png');
    game.load.text('')
}

function create()
{
    game.world.setBounds(0, 0, 2000, 2000);
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.gravity.y = 350;

    sprite = game.add.sprite(400, 100, 'arrow');
    sprite.anchor.setTo(0.5, 0.5);
    game.physics.p2.enable(sprite);
    sprite.body.angle = 30;
    sprite.body.angularVelocity = 1;

    sprite2 = game.add.sprite(420, 380, 'arrow');
    sprite2.anchor.setTo(0.5, 0.5);
    game.physics.p2.enable(sprite2);
    sprite2.body.static = true;
    sprite2.body.angle = 45;

    textStyle = { font: '18px Arial', fill: '#0095DD' };
    hillName = game.add.text(game.world.width * 0.5, 5, 'Oberstdorf HS137', textStyle);
    hillName.anchor.set(1, 0);
    game.camera.follow(sprite);
}

function update()
{
    // console.log(sprite.body.angularVelocity);
}
