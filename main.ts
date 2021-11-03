function decay (led_x: number, led_y: number) {
    dimmed_brightness = led.pointBrightness(led_x, led_y) / 2
    led.plotBrightness(led_x, led_y, dimmed_brightness)
}
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (randint(1, 100) > 50) {
                decay(x, y)
            }
        }
    }
})
function reset_leds () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
input.onButtonPressed(Button.B, function () {
    reset_leds()
})
let dimmed_brightness = 0
reset_leds()
