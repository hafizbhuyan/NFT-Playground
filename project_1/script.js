let circleRandomBgHex = ''
let circleRandomTextHex = ''
let squareRandomBgHex = ''
let squareRandomTextHex = ''
let rectangleRandomBgHex = ''
let rectangleRandomTextHex = ''
let ovalRandomBgHex = ''
let ovalRandomTextHex = ''

const circle = document.getElementById('circle')
const square = document.getElementById('square')
const rectangle = document.getElementById('rectangle')
const oval = document.getElementById('oval')

function randomizeHex() {
    circleRandomBgHex = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
    circleRandomTextHex = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
    squareRandomBgHex = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
    squareRandomTextHex = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
    rectangleRandomBgHex = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
    rectangleRandomTextHex = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
    ovalRandomBgHex = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
    ovalRandomTextHex = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
}

function randomizeColors() {
    randomizeHex()

    circle.style.backgroundColor = circleRandomBgHex
    circle.style.color = circleRandomTextHex
    square.style.backgroundColor = squareRandomBgHex
    square.style.color = circleRandomTextHex
    rectangle.style.backgroundColor = rectangleRandomBgHex
    rectangle.style.color = rectangleRandomTextHex
    oval.style.backgroundColor = rectangleRandomBgHex
    oval.style.color = rectangleRandomTextHex
}