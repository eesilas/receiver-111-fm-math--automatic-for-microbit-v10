radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        basic.showIcon(IconNames.Sad)
        microIoT.microIoT_showColor(0xffff00)
    } else if (receivedNumber == 11) {
        basic.showIcon(IconNames.Confused)
        microIoT.microIoT_showColor(0x00ffff)
    } else {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(111)
basic.forever(function () {
	
})
