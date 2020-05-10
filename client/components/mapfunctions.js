import mapData from '../../server/public/assets/maps/map.json'
var names = ['Ulfrick','Gauward', 'Roland', 'Nieles', 'Harlaw', 'Albrecht', 'Giliam', 'Aethelwulf', 'Brand', 'Bjorn', 'Helmaer', 'Aenfin', 'Lambert', 'Ardulf', 'Lany', 'Elwic', 'Ebehrt', 'Edric', 'Piersym', 'Georguy', 'Peregrine', 'Grewill']
var team1Name = 'team1'
var team2Name = 'team2'
var team1Units = ['scout', 'heavy', 'swordsman', 'scout', 'archer']
var team2Units = ['scout', 'scout', 'swordsman', 'spearman', 'heavy']
const actors = [{ name: team1Name, units: [] }, { name: team2Name, units: [] }]
export const classes = {
  scout: {
    // range: checkMelee(),
    damage: 1,
    class: 'scout',
    teamName: null,
    name: 'Scout',
    sprite: 'scout',
    idx: null,
    actions: 6,
    dead: false,
    kills: 0,
    woundsRemaining: 2
  },
  archer: {
    damage: 1,
    class: 'archer',
    teamName: null,
    name: 'Archer',
    sprite: 'archer',
    idx: null,
    actions: 6,
    dead: false,
    kills: 0,
    woundsRemaining: 1,
    ammo: 5
  },
  spearman: {
    damage: 1,
    class: 'spearman',
    teamName: null,
    name: 'Lancer',
    sprite: 'spear',
    idx: null,
    actions: 4,
    dead: false,
    kills: 0,
    woundsRemaining: 3
  },
  heavy: {
    damage: 3,
    class: 'heavy',
    teamName: null,
    name: 'Sentinel',
    sprite: 'heavy',
    idx: null,
    actions: 2,
    dead: false,
    kills: 0,
    woundsRemaining: 5
  },
  swordsman: {
    damage: 2,
    class: 'swordsman',
    teamName: null,
    name: 'Swordsman',
    sprite: '2hand',
    idx: null,
    actions: 4,
    dead: false,
    kills: 0,
    woundsRemaining: 3
  }
}
var teamSize = 5

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
        occupant: null,
        occupantTeam: null
      }
    }
  })
  return mapArr
}

export function addActorsToMapArr (actors, mapArr) {
  let map = mapArr
  actors.forEach(team => {
    team.units.forEach(unit => {
      map[unit.idx].occupied = true
      map[unit.idx].occupant = unit.name
      map[unit.idx].occupantTeam = unit.teamName
    })
  })
  return map
}

export function createActors (a) {
  var actorArr = actors
  let idx = 140
  let team1 = actorArr[0].name
  let team2 = actorArr[1].name
  let unit = []
  let current
  let ranName
  for (let i = 0; i < teamSize; i++) {
    current = team1Units[i]
    unit = JSON.parse(JSON.stringify(classes[current]))
    // console.log('unit is:', unit)
    ranName = names[Math.floor(Math.random() * names.length)]
    names = names.filter(name => name !== ranName)
    unit.teamName = team1
    unit.sprite = 'r' + unit.sprite
    unit.name = `${ranName} the ${unit.name}`
    unit.idx = idx + (i * 20)
    actorArr[0].units.push(unit)

    current = team2Units[i]
    unit = JSON.parse(JSON.stringify(classes[current]))
    ranName = names[Math.floor(Math.random() * names.length)]
    names = names.filter(name => name !== ranName)
    unit.teamName = team2
    unit.name = `${ranName} the ${unit.name}`
    unit.sprite = 'l' + unit.sprite
    unit.idx = idx + (i * 20) + 19
    actorArr[1].units.push(unit)
  }
  // console.log('actors is:', actorArr)
  return actorArr
}

// var friend = 'warrior'
// var foe = 'enemy'

// function createActors () {

//   actors.forEach(team => {
//     for (let i=0; i < teamSize; i++) {
//       let it = i + 1
//       team.units.push({
//         name: team.team+it,
//         sprite: team.team,
//         idx:
//       })
//     }
//   })
// }
