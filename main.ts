radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber == 11) {
        basic.showIcon(IconNames.Confused)
    } else {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(111)
basic.forever(function () {
	
})
