input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(2 * index + 1)
        basic.clearScreen()
        basic.pause(100)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(index)
        basic.clearScreen()
        basic.pause(100)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(2 * index)
        basic.clearScreen()
        basic.pause(100)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(10 - index)
        basic.clearScreen()
        basic.pause(100)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
	
})
