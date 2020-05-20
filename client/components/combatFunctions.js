import { getCoordsFromIndex, getIndexFromCoords, width } from './game'

export function melee (idx) {
  let neighbours = []
  let attackerCoords = getCoordsFromIndex(idx)
  // console.log(attackerCoords)
  for (let i = 0; i < 9; i++) {
    if (i !== 4) {
      let itX = (Math.floor(i / 3) - 1) * 48
      let itY = ((i % 3) - 1) * 48
      let newX = (attackerCoords[0] + itX)
      let newY = (attackerCoords[1] + itY)
      let neighbourIdx = getIndexFromCoords([newX, newY])
      if (newX >= 0 && newX <= 864 && newY >= 0 && newY < 720) { neighbours.push(neighbourIdx) }
    }
  }
  // console.log(neighbours)
  return neighbours
}

export function spear () {
  let neighbours = melee(this.idx)
  neighbours.push((this.idx - width * 2))
  neighbours.push((this.idx - 2))
  neighbours.push((this.idx + width * 2))
  neighbours.push((this.idx + 2))
  return neighbours
}
