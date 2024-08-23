namespace SpriteKind {
    export const Frog = SpriteKind.create()
    export const Fly = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Frog, function (sprite, otherSprite) {
    sprites.destroy(Frog_1, effects.bubbles, 1000)
    if (sprite == Player1) {
        Player1.scale += -0.1
        info.player1.changeScoreBy(-3)
        p1VX += -10
        p1VY += -10
        p1isAlive = 0
    }
    if (sprite == Player2) {
        Player2.scale += -0.1
        info.player2.changeScoreBy(-3)
        p2VX += -10
        p2VY += -10
        p2isAlive = 0
    }
    frogRespawn = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fly, function (sprite, otherSprite) {
    if (otherSprite == flySprite) {
        sprites.destroy(flySprite, effects.spray, 500)
        if (sprite == Player1) {
            info.player1.changeScoreBy(1)
        }
        if (sprite == Player2) {
            info.player2.changeScoreBy(1)
        }
    }
    if (otherSprite == fatFly) {
        sprites.destroy(fatFly, effects.bubbles, 500)
        if (sprite == Player1) {
            Player1.scale += 0.1
            info.player1.changeScoreBy(1)
            p1VX += 15
            p1VY += 15
        }
        if (sprite == Player2) {
            Player2.scale += 0.1
            info.player2.changeScoreBy(1)
            p2VX += 15
            p2VY += 15
        }
    }
})
let frogRespawn = 0
let p2isAlive = 0
let p1isAlive = 0
let Frog_1: Sprite = null
let fatFly: Sprite = null
let flySprite: Sprite = null
let Player2: Sprite = null
let Player1: Sprite = null
Player1 = sprites.create(assets.image`DragonFly 1`, SpriteKind.Player)
Player1.setPosition(5, 15)
Player2 = sprites.create(assets.image`DragonFly 2`, SpriteKind.Player)
Player2.setPosition(5, 85)
flySprite = sprites.create(assets.image`uglyfly`, SpriteKind.Fly)
flySprite.setPosition(50, 50)
fatFly = sprites.create(assets.image`FatFly`, SpriteKind.Fly)
fatFly.setPosition(100, 100)
Frog_1 = sprites.create(assets.image`myImage`, SpriteKind.Frog)
Frog_1.setPosition(111, 60)
p1isAlive = 1
p2isAlive = 1
let p1VY = 50
let p1VX = 50
let p2VX = 50
let p2VY = 50
game.onUpdate(function () {
    if (p1isAlive == 1) {
        controller.player1.moveSprite(Player1, p1VX, p1VY)
    } else {
        Player1.setPosition(5, 15)
        p1isAlive = 1
    }
    if (p2isAlive == 1) {
        controller.player2.moveSprite(Player2, p2VX, p2VX)
    } else {
        Player2.setPosition(5, 85)
        p2isAlive = 1
    }
    if (info.player1.score() < info.player2.score()) {
        Frog_1.follow(Player2, 10)
    } else {
        Frog_1.follow(Player1, 10)
    }
    if (frogRespawn == 1) {
        Frog_1 = sprites.create(assets.image`myImage`, SpriteKind.Frog)
        Frog_1.setPosition(111, 60)
        frogRespawn = 0
    }
})
