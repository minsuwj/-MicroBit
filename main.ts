input.onButtonPressed(Button.A, function () {
    if (Walk >= 10000) {
        music.playTone(294, music.beat(BeatFraction.Half))
        basic.pause(100)
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        basic.pause(100)
        music.playTone(370, music.beat(BeatFraction.Whole))
    } else {
        basic.showString("DONT GIVE UP!! YOU NEED")
        basic.showNumber(10000 - Walk)
        basic.showString("STEPS")
    }
})
input.onGesture(Gesture.Shake, function () {
    Walk += 1
})
input.onButtonPressed(Button.AB, function () {
    Walk = 0
    basic.showString("RESET!!")
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("YOU LOSED")
    basic.showString("" + (0.15 * Walk))
    basic.showString("Kcal")
})
let Walk = 0
Walk = 0
