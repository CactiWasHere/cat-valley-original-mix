controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    directionOfPlayer = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    directionOfPlayer = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    directionOfPlayer = 2
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    directionOfPlayer = 3
})
let directionOfPlayer = 0
let SPEED = 0
let Player_Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . 3 . . 3 3 . . . . . 
    . . . . . . 3 . . 3 . . . . . . 
    . . . 3 . . 3 . . 3 . . . . . . 
    . . . 3 . . . . . . . 3 . . . . 
    . . . 3 . . . . . . . 3 . . . . 
    . . . 3 . . . . . . . 3 . . . . 
    . . . 3 . . . . . . 3 . . . . . 
    . . . 3 . . . . . 3 . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Player_Sprite, SPEED, SPEED)
forever(function () {
	
})
