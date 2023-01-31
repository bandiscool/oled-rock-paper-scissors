function Update_Scores () {
    OLED.init(128, 64)
    OLED.clear()
    OLED.writeStringNewLine("Player1; " + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player2; " + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Tie" + Tie)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + Rounds)
}
input.onButtonPressed(Button.A, function () {
    P1 += 1
    Rounds += 1
    Update_Scores()
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    Tie += 1
    Rounds += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    Update_Scores()
})
input.onButtonPressed(Button.B, function () {
    P2 += 1
    Rounds += 1
    Update_Scores()
    basic.showLeds(`
        # # # . .
        # . # . .
        # # . . .
        # . # . .
        # # # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    OLED.clear()
    OLED.writeStringNewLine("Would Like to Play a Game?")
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    P1 = 0
    P2 = 0
    Tie = 0
    Rounds = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    Update_Scores()
}
let Rounds = 0
let Tie = 0
let P2 = 0
let P1 = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Would Like to Play a Game?")
P1 = 0
P2 = 0
Tie = 0
Rounds = 0
basic.pause(2000)
Update_Scores()
