function Update_Scores () {
    OLED.clear()
    OLED.writeStringNewLine("Player1; " + P1)
    OLED.writeStringNewLine("Player2; " + P2)
    OLED.writeStringNewLine("Tie" + Tie)
    OLED.writeStringNewLine("Rounds" + Rounds)
}
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
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
