namespace SpriteKind {
    export const meal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.meal, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.trail, 1000)
    iambig = 0
    scaling.scaleToPercent(mySprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    scaling.scaleToPercent(mySprite, 250, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    iambig = 1
    sprites.destroy(otherSprite, effects.trail, 1000)
})
let statusbar: StatusBarSprite = null
let iambig = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ...........fffcc....................
    ...........fbbbbcfffffffff..........
    ............fbfffbbbbbbbbbf.........
    ............ffbbbbffb111bbf.........
    ..........ffcbbbbbff11111bf.........
    .........fcccbcbcbb11cccc1f.........
    ccccc...fcccbcbcbbb1c1c1cf..........
    cbbddccfccccbcbcbbb1333c............
    .ccbddbcccccbbbbbbb1c333c...........
    ..ccbbcccccccbbbbb11c133c...........
    ..fccbffccccccbbbb111c31cc..........
    ..fccf.cbbcccccbbbc111111c..........
    .fcbbf..cdddddfbbbc1111cc...........
    .fbbf....cdddfbbdbffccc.............
    fbbf......ccfbbdbf..................
    fff.........fffff...................
    `, SpriteKind.Player)
iambig = 0
tiles.placeOnRandomTile(statusbar, assets.tile`myTile4`)
statusbar = statusbars.create(4, 40, StatusBarKind.Health)
statusbar.setPosition(0, 0)
controller.moveSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . c c c c . . . . . . . . 
    . . . c d d d d c c . . . . . . 
    . . . c d c c c c c c . . . . . 
    c c . c c d 4 4 4 4 c c . . . . 
    c 4 c c 1 4 4 4 4 4 d 4 c . . . 
    f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
    f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
    f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
    f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
    f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
    . . f f d 4 4 c c 1 4 4 4 4 f . 
    . . . f c 4 4 4 4 4 d 4 f f . . 
    . . c b d c 4 4 4 4 f f . . . . 
    . . c d d d f f f f . . . . . . 
    . . . c c c . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite.setPosition(8, 16)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . c c c c c . . . . . . . . 
    . . c 5 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    . c 5 5 5 b b b b b b c . . . . 
    . . c c b b 1 b b 1 1 c . . . . 
    . . . c 1 1 1 b b 1 1 1 c . . . 
    c c . c 1 1 1 b 1 1 1 1 c . . . 
    c 5 b b 1 1 1 b 1 1 1 d c . . . 
    c 5 5 5 1 b 1 b 1 c 1 d c c . . 
    c 5 b b 1 b 1 1 1 1 1 d d c c . 
    c c . f 1 b b 1 1 1 1 1 d d d f 
    . . . f b b b 1 1 1 1 1 1 f f f 
    . . f 5 5 b b b 1 1 1 f f . . . 
    . . f 5 5 5 5 5 f f f . . . . . 
    . . f f f f f f . . . . . . . . 
    `, SpriteKind.meal)
mySprite3.setPosition(146, 14)
