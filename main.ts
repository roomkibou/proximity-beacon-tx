radio.setGroup(1)
radio.setTransmitPower(1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    radio.sendString("1")
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(200)
    basic.showIcon(IconNames.Square)
})
