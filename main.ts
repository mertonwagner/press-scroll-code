input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
})
basic.forever(function () {
    if (input.lightLevel() > 128) {
        basic.showString("Hello!")
    } else {
        images.createBigImage(`
            # . . . . . . . . #
            . # . . . . . . # .
            . . # . . . . # . .
            . . . # . . # . . .
            . . . . # # . . . .
            `).scrollImage(1, 200)
    }
})
