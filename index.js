let homeEl = document.getElementById("home")
let homeScore = 0
homeEl.textContent = homeScore

let guestEl = document.getElementById("guest")
let guestScore = 0
guestEl.textContent = guestScore

function homePlusOne() {
    homeEl.textContent = homeScore += 1
}

function homePlusTwo() {
    homeEl.textContent = homeScore += 2
}

function homePlusThree() {
    homeEl.textContent = homeScore += 3
}

function homeReset() {
    homeScore = 0
    homeEl.textContent = homeScore
}

function guestPlusOne() {
    guestEl.textContent = guestScore += 1
}

function guestPlusTwo() {
    guestEl.textContent = guestScore += 2
}

function guestPlusThree() {
    guestEl.textContent = guestScore += 3
}

function guestReset() {
    guestScore = 0
    guestEl.textContent = guestScore
}

    




