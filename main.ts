function playMelodie() {
    let melodie = melodies[melodieIndex]
    music.startMelody(music.builtInMelody(melodie), MelodyOptions.Once)
}
function showMelodie() {
    kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Normal)
    kitronik_VIEW128x64.show(`MELODIE ${melodieIndex} `)
    kitronik_VIEW128x64.show(`VOL ${volume}`, 1, kitronik_VIEW128x64.ShowAlign.Right)
    kitronik_VIEW128x64.show("A: NEXT", 8)
    kitronik_VIEW128x64.show("B: PLAY", 8, kitronik_VIEW128x64.ShowAlign.Right)
    kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Big)
    kitronik_VIEW128x64.clearLine(2)
    kitronik_VIEW128x64.show(`${melodieNames[melodieIndex]}`, 2)
}
input.onButtonPressed(Button.A, function () {
    melodieIndex += 1
    if (melodieIndex >= melodies.length) {
        melodieIndex = 1
    }
    showMelodie()
})
input.onButtonPressed(Button.B, function () {
    playMelodie()
})
let melodies: Melodies[] = []
let melodieIndex = 0
melodies = [
    Melodies.Dadadadum,
    Melodies.Entertainer,
    Melodies.Prelude,
    Melodies.Ode,
    Melodies.Nyan,
    Melodies.Ringtone,
    Melodies.Funk,
    Melodies.Blues,
    Melodies.Birthday,
    Melodies.Wedding,
    Melodies.Funeral,
    Melodies.Punchline,
    Melodies.Baddy,
    Melodies.Chase,
    Melodies.BaDing,
    Melodies.Wawawawaa,
    Melodies.JumpUp,
    Melodies.JumpDown,
    Melodies.PowerUp,
    Melodies.PowerDown
]
let melodieNames: string[] = [
    "Dadadadum",
    "Entertainer",
    "Prelude",
    "Ode",
    "Nyan",
    "Ringtone",
    "Funk",
    "Blues",
    "Birthday",
    "Wedding",
    "Funeral",
    "Punchline",
    "Baddy",
    "Chase",
    "BaDing",
    "Wawawawaa",
    "JumpUp",
    "JumpDown",
    "PowerUp",
    "PowerDown"
]
let volume = 64
music.setVolume(volume)
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
showMelodie()
