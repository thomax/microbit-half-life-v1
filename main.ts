function resetLeds () {
    led.setBrightness(255)
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
                led.unplot(x, y)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    resetLeds()
})
resetLeds()
