import mapData from './assets/maps/map.json'

const obstacles = [47, 56, 63, 86, 87, 88, 89, 90, 110, 118, 121, 126, 130, 143, 146, 147, 148, 149, 150, 155,
  241, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 254, 255, 263, 275, 278, 283, 295,
  303, 307, 308, 310, 311, 315, 321, 323, 327, 331, 335, 343, 344, 345, 346, 347, 351, 352,
  353, 354, 355, 358, 373, 388]

// function findObstacles (mapArr) {
//   var newArr = mapData.layers[0].data.map((tile, idx) => {
//     if (tile === 10) {
//       mapArr[idx].occupied = true
//       mapArr[idx].occupant = 'obstacle'
//     }
//     return tile
//   })
//   return newArr
// }

export function createMapArray () {
  var mapArr = mapData.layers[0].data.map(tile => {
    if (tile === 10) {
      return {
        occupied: true,
        occupant: 'obstacle'
      }
    } else {
      return {
        occupied: false,
        occupant: null
      }
    }
  })
  return mapArr
}

// export function createMapArray () {
//   let mapArr = []
//   for (let i = 0; i < 400; i++) {
//     mapArr.push({
//       occupied: false,
//       occupant: null
//     }
//     )
//   }
//   mapArr = findObstacles(mapArr)
//   // obstacles.forEach(idx => {
//   //   mapArr[idx].occupied = true
//   //   mapArr[idx].occupant = 'obstacle'
//   // })
//   console.log(mapArr)
//   return mapArr
// }

export function test () {
  return 'this is a test'
}
