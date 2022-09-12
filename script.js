let coordinates = document.getElementById('co-oords')
let x = document.getElementById('xPos')
let y = document.getElementById('yPos')
let delta = document.getElementById('angle')
let radius = document.getElementById('radius')

document.addEventListener('mousemove', updateMouseLocation)

function updateMouseLocation(e) {
  let xPos = e.clientX - (window.innerWidth / 2)
  let yPos = e.clientY - (window.innerHeight / 2)
  x.innerText = Math.floor(xPos)
  y.innerText = Math.floor(yPos)
  delta.innerText = findAngle(xPos, yPos) + String.fromCharCode(0x00B0)
  radius.innerText = getRadius(xPos, yPos).toFixed(2)
  let sat = getRadius(xPos, yPos) / 450 * 100
  let hue = findAngle(xPos, yPos)
  document.body.style.backgroundColor = `hsl(${hue}, ${sat}%, 25%)`
}

function findAngle(x, y) {
  let angle
  if (x > 0 && y < 0) {
    y *= -1
    angle = 90 - Math.floor(Math.atan(y / x) * 180 / Math.PI)
    // console.log('x is ' + x + ' y is ' + y + ' angle is ' + angle)
    console.log('top right')
  }
  else if (x > 0 && y > 0) {
    angle = Math.floor(Math.atan(y / x) * 180 / Math.PI) + 90
    console.log('bottom right')
  }
  else if (x < 0 && y > 0) {
    x *= -1
    angle = (90 - Math.floor(Math.atan(y / x) * 180 / Math.PI)) + 180
    console.log('bottom left')
  }
  else if (x < 0 && y < 0) {
    x *= -1
    y *= -1
    angle = Math.floor(Math.atan(y / x) * 180 / Math.PI) + 270
    console.log('top left')
  }
  return angle
}

function getRadius(x, y) {
  return Math.sqrt((x * x) + (y * y))
}

function updateBGColour(angle) {

}