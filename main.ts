radio.onReceivedNumber(function (receivedNumber) {
    Comando = receivedNumber
    if (Comando == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        servos.P1.setAngle(60)
    }
    if (Comando == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        servos.P1.setAngle(120)
    }
    if (Comando == 3) {
        basic.showIcon(IconNames.Square)
        basic.pause(100)
        basic.showIcon(IconNames.SmallSquare)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
        servos.P1.setAngle(90)
    }
})
let Comando = 0
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
servos.P1.setAngle(90)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Comando = 1
        radio.sendNumber(Comando)
    }
    if (input.buttonIsPressed(Button.B)) {
        Comando = 2
        radio.sendNumber(Comando)
    }
    if (input.lightLevel() >= 200) {
        Comando = 3
        radio.sendNumber(Comando)
    }
})
