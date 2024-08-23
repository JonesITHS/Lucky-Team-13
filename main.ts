controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    VY = 100
    VX = 100
    Player1.setVelocity(VX, VY)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    VY = 50
    VX = 50
    Player1.setVelocity(VX, VY)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite == flySprite) {
        sprites.destroy(flySprite, effects.spray, 500)
        info.changeScoreBy(1)
    }
    if (otherSprite == fatFly) {
        sprites.destroy(fatFly, effects.bubbles, 500)
        Player1.scale += 0.1
    }
    if (otherSprite == Frog_2) {
        sprites.destroy(Frog_2, effects.bubbles, 1000)
        Player1.scale += -0.1
        isAlive = 0
    }
    if (isAlive) {
        controller.moveSprite(Player1, VX, VY)
    } else {
    	
    }
})
let VX = 0
let VY = 0
let isAlive = 0
let Frog_2: Sprite = null
let fatFly: Sprite = null
let flySprite: Sprite = null
let Player1: Sprite = null
Player1 = sprites.create(assets.image`DragonFly 1`, SpriteKind.Player)
Player1.setPosition(5, 15)
let Player2 = sprites.create(assets.image`DragonFly 2`, SpriteKind.Player)
Player2.setPosition(5, 85)
flySprite = sprites.create(assets.image`uglyfly`, SpriteKind.Enemy)
flySprite.setPosition(50, 50)
fatFly = sprites.create(assets.image`FatFly`, SpriteKind.Enemy)
fatFly.setPosition(100, 100)
let Frog_1 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
Frog_1.setPosition(130, 95)
Frog_2 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
Frog_2.setPosition(130, 15)
isAlive = 1
VY = 50
VX = 50
game.onUpdate(function () {
    controller.player1.moveSprite(Player1)
    controller.player2.moveSprite(Player2)
    Frog_1.follow(Player1)
    Frog_2.follow(Player2)
})
