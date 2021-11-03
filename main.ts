function decay (led_x: number, led_y: number) {
    dimmedBrightness = led.pointBrightness(led_x, led_y) / 2
    led.plotBrightness(led_x, led_y, dimmedBrightness)
}
function resetLeds () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (50 > randint(1, 100)) {
                decay(x, y)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    resetLeds()
})
let dimmedBrightness = 0
resetLeds()
