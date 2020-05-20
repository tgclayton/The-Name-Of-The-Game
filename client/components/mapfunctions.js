import mapData from '../../server/public/assets/maps/finalmap.json'
import { melee, spear } from './combatFunctions'
var names = ['Euvrouin', 'Simond', 'Parsival', 'Leofrick', 'Garret', 'Uthbert', 'Ulfrik', 'Gauward', 'Grim', 'Thorvald', 'Roland', 'Nieles', 'Berrick', 'Harlaw', 'Ralf', 'Albrecht', 'Giliam', 'Aethelwulf', 'Brand', 'Bjorn', 'Helmaer', 'Aenfin', 'Lambert', 'Ardulf', 'Lany', 'Elwic', 'Ebehrt', 'Edric', 'Piersym', 'Georguy', 'Peregrine', 'Grewill']

var portraitSelect = {
  swordsman: [1, 2, 3],
  scout: [1, 2, 3],
  spearman: [1, 2, 3],
  heavy: [1, 2, 3]
}

var team1Name = 'hardOne' // equal the name of champion
var team2Name = 'hardTwo' // equal the name of 2nd champion
// var team1Name = 'team1' // equal the name of champion
// var team2Name = 'team2' // equal the name of 2nd champion
var team1Units = ['swordsman', 'heavy', 'swordsman', 'scout', 'spearman']
var team2Units = ['scout', 'scout', 'swordsman', 'spearman', 'heavy']
const actors = [{ name: team1Name, units: [] }, { name: team2Name, units: [] }]

export function nameFinder1 () {
  // request.get('/api/v1/players')
  // .then(res => {
  //  return team1Name = res.body.player[0].playerOne
  // })
  return 'team2'
}

export function nameFinder2 () {
  // request.get('/api/v1/players')
  // .then(res => {
  //   team2Name = res.body.player[0].playerTwo
  //   return team2Name
  // })
  return 'team1'
}

export const classes = {
  scout: {
    damage: 10,
    class: 'scout',
    name: 'Scout',
    sprite: 'scout',
    actions: 8,
    health: 20
  },
  archer: {
    damage: 10,

    class: 'archer',
    name: 'Archer',
    sprite: 'archer',
    actions: 5,
    health: 10,
    ammo: 5
  },
  spearman: {
    damage: 10,
    class: 'spearman',
    name: 'Lancer',
    sprite: 'spear',
    actions: 6,
    health: 30
  },
  heavy: {
    damage: 30,
    class: 'heavy',
    name: 'Sentinel',
    sprite: 'heavy',
    actions: 5,
    health: 50
  },
  swordsman: {
    damage: 25,
    class: 'swordsman',
    name: 'Swordsman',
    sprite: '2hand',
    actions: 6,
    health: 40
  }
}
var teamSize = 5

export function createMapArray () {
  var mapArr = mapData.layers[0].data.map(tile => {
    if (tile === 10) {
      return {
        occupied: true,
        occupant: 'obstacle',
        occupantTeam: null
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

function getPortrait (type) {
  let workingArr = portraitSelect[type]
  let randomFloat = Math.random() * workingArr.length
  let randomInt = Math.floor(randomFloat)
  let numSelect = workingArr[randomInt]
  portraitSelect[type] = portraitSelect[type].filter(num => num !== numSelect)
  let portraitSrc = 'images/portraits/' + type + numSelect + '.png'
  return portraitSrc
}

export function createActors (team1, team2) {
  var actorArr = actors
  let idx = 19
  // let team1 = actorArr[0].name
  // let team2 = actorArr[1].name
  actorArr[0].name = team1
  actorArr[1].name = team2
  let unit = []
  let current
  let ranName
  for (let i = 0; i < teamSize; i++) {
    current = team1Units[i]
    unit = JSON.parse(JSON.stringify(classes[current]))
    ranName = names[Math.floor(Math.random() * names.length)]
    names = names.filter(name => name !== ranName)
    unit.teamName = team1
    unit.sprite = 'r' + unit.sprite
    unit.name = `${ranName} the ${unit.name}`
    unit.range = melee
    if (unit.class === 'spearman') {
      unit.range = spear
    }
    idx = idx + 38
    unit.idx = idx
    unit.dead = false
    unit.kills = []
    unit.portrait = getPortrait(unit.class)
    actorArr[0].units.push(unit)

    current = team2Units[i]
    unit = JSON.parse(JSON.stringify(classes[current]))
    ranName = names[Math.floor(Math.random() * names.length)]
    names = names.filter(name => name !== ranName)
    unit.range = melee
    unit.teamName = team2
    unit.name = `${ranName} the ${unit.name}`
    unit.sprite = 'l' + unit.sprite
    unit.idx = idx + 18
    unit.portrait = getPortrait(unit.class)
    unit.dead = false
    unit.kills = []
    actorArr[1].units.push(unit)
  }
  return actorArr
}
