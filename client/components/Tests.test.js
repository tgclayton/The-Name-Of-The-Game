test('Everything is fine', () => {
  expect(true).toBeTruthy()
})

// Just testing idea of pasting functions into Tests.test.js
test('getCoords returns an array of the correct x and y values', () => {
    const coords = getCoordsFromIndex(2)
    // console.log(coords)

    // expect(coords[0]).toBe(96)
    // expect(coords[1]).toBe(0)
    expect(coords).toEqual(expect.arrayContaining([96,0]))
})

test('findDest returns the correct destination number', () => {

  const dest = findDest(21, 48, 'x')

  expect(dest).toBe(22)
})

/* Functions from game.js to test */

function getCoordsFromIndex (idx) {
  var x = (idx % 20) * 48
  var y = (Math.floor(idx / 20)) * 48
  return [x, y]
}

function findDest (idx, val, axis) {
  let dest
  if (axis === 'x') {
    if (val === 48) {
      dest = idx + 1
    } else {
      dest = idx - 1
    }
  }
  if (axis === 'y') {
    if (val === 48) {
      dest = idx + 20
    } else {
      dest = idx - 20
    }
  }
  // console.log('dest is:', dest)
  return dest
}