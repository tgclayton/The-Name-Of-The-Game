import Phaser from 'phaser'
import { createMapArray, addActorsToMapArr, createActors, classes } from './mapfunctions'

export default {
  type: Phaser.AUTO,
  width: 912,
  height: 768,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

var map
var keyPressed
var actors
var team1
var team2
var scene
var aMode = false
var activeTeam
var cursor
var targets = []
var selectedUnit
var winner
var champName
var champUnit
var champAttack
var champHealth
var champAction
var info
var restart = false
var champPortrait
// function getTeamNames(){

// }

function preload () {
  if (restart) {
    team1 = null
    team2 = null
    activeTeam = null
    actors = null
    map = null
    restart = false
  }
  // setTimeout()
  team1 = document.getElementById('stupid-info-box1').innerText
  team2 = document.getElementById('stupid-info-box2').innerText
  // winInfo = document.getElementById('stupid-info-box3')
  map = createMapArray()
  actors = createActors(team1, team2)
  map = addActorsToMapArr(actors, map)
  activeTeam = team1
  this.load.image('warrior', '/assets/images/soldiers/Lwarrior2.png')
  this.load.image('enemywarrior', '/assets/images/enemywarrior.png')
  this.load.image('gcursor', '/assets/images/green-cursor.png')
  this.load.image('bcursor', '/assets/images/blue-cursor.png')
  this.load.image('rcursor', '/assets/images/red-cursor.png')
  this.load.image('done', '/assets/images/done2.png')
  this.load.image('ready', '/assets/images/ready.png')
  this.load.image('l2hand', '/assets/images/soldiers/L2hand2.png')
  this.load.image('r2hand', '/assets/images/soldiers/R2hand2.png')
  this.load.image('lspear', '/assets/images/soldiers/Lspear2.png')
  this.load.image('rspear', '/assets/images/soldiers/Rspear.png')
  this.load.image('lscout', '/assets/images/soldiers/Lscout.png')
  this.load.image('rscout', '/assets/images/soldiers/Rscout.png')
  this.load.image('lheavy', '/assets/images/soldiers/Rheavy2.png')
  this.load.image('rheavy', '/assets/images/soldiers/Lheavy2.png')
  this.load.image('larcher', '/assets/images/soldiers/Larcher.png')
  this.load.image('rarcher', '/assets/images/soldiers/Rarcher.png')
  this.load.image('map', '/assets/maps/finalmap.png')
}

function create () {
  champName = document.getElementById('champName')
  champUnit = document.getElementById('champUnit')
  champAttack = document.getElementById('champAttack')
  champHealth = document.getElementById('champHealth')
  champAction = document.getElementById('champAction')
  champPortrait = document.getElementById('battlePortrait')
  info = document.getElementById('infoWindow')
  champName.innerText = team1

  scene = this
  this.input.keyboard.on('keydown', keyDown, this)
  this.add.image(456, 384, 'map')

  cursor = this.physics.add.image(0, 0, 'gcursor').setOrigin(0, 0)
  cursor.setCollideWorldBounds(true)
  cursor.setData('notMoving', true)
  cursor.setData('idx', 0)
  cursor.setData('sprite', 'gcursor')
  targets.push(cursor)

  actors.forEach(team => {
    team.units.forEach(actor => {
      let coords = getCoordsFromIndex(actor.idx)
      actor.x = coords[0]
      actor.y = coords[1]
      actor.physObj = this.physics.add.image(actor.x, actor.y, actor.sprite).setOrigin(0, 0)
      actor.physObj.setCollideWorldBounds(true)
      if (actor.teamName === activeTeam) {
        actor.status = this.add.image(actor.x, actor.y, 'ready').setOrigin(0, 0)
      }
    })
  })
  cursor.setPosition(actors[0].units[0].x, actors[0].units[0].y)
  // cursor.setPosition(0, 0)
  setIndex(cursor)
  // console.log(actors)
}

function update () {
}

function getCoordsFromIndex (idx) {
  var x = (idx % 19) * 48
  var y = (Math.floor(idx / 19)) * 48
  return [x, y]
}

function getIndexFromCoords (coords) {
  let x = coords[0] / 48
  let y = (coords[1] / 48) * 19
  let idx = x + y
  return idx
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
      dest = idx + 19
    } else {
      dest = idx - 19
    }
  }
  // console.log('dest is:', dest)
  return dest
}

function checkDestIsFree (dest) {
  if (map[dest].occupied) {
    return false
  } else {
    return true
  }
}

function checkDestOccupant (dest) {
  if (map[dest].occupant === 'obstacle') {
    info.innerText = 'You cannot move through this obstacle'
    return false
  } else {
    attack(dest)
  }
}

function attack (dest) {
  if (selectedUnit.actions > 0) {
    if (map[dest].occupantTeam === activeTeam) {
      info.innerText = 'Probably shouldnt try to mutilate this poor chap'
    } else {
      let idx = getIdxOfActiveTeam()
      if (idx === 0) {
        idx = 1
      } else {
        idx = 0
      }
      let enemy = actors[idx].units.filter(unit => unit.idx === dest)
      enemy = enemy[0]
      if (!enemy.dead) {
        enemy.health = enemy.health - selectedUnit.damage
        info.innerText = `${selectedUnit.name} attacked ${enemy.name} and did ${selectedUnit.damage} damage`
        selectedUnit.actions -= 2
        champAction.innerText = `Actions: ${selectedUnit.actions}`
        scene.cameras.main.shake(200)
        checkDead(enemy)
        checkGameOver()
        if (selectedUnit.actions < 1) {
          selectedUnit.status.setTexture('done')
          attackMode()
          selectUnit()
        }
      }
    }
  }
}

function endGame () {
  document.getElementById('battleInfo').innerText = JSON.stringify(actors)
  info.innerText = `Game over, winner is ${activeTeam}`
  let winBox = document.getElementById('winBox')
  winBox.classList.toggle('hidden')
  let endRes = document.getElementById('endRes')
  endRes.innerText = `Game over, winner is ${activeTeam}`
  // let game = document.getElementById('gameDiv')
  // game.classList.toggle('invis')
  restart = true
}

function checkGameOver () {
  let gameOver = true
  let idx = getIdxOfInactiveTeam()
  actors[idx].units.forEach(unit => {
    if (!unit.dead) {
      gameOver = false
    }
  })
  if (gameOver) {
    cursor.destroy()
    winner = true
    setTimeout(endGame, 2400)
    scene.cameras.main.fade(2500, 76, 17, 30)
  }
}

function checkDead (target) {
  if (target.health < 1) {
    target.dead = true
    map[target.idx].occupied = false
    map[target.idx].occupant = null
    map[target.idx].occupantTeam = null
    target.physObj.destroy()
    selectedUnit.kills.push(target.name)
    info.innerText = `${target.name} was brutally murdered`
  }
}

function setfixedMovement (val, axis) {
  let inRange = true
  let unit
  let valid = true
  let dest = findDest(cursor.getData('idx'), val, axis)
  if (aMode) {
    inRange = false
    let neighbours = findNeighbours(selectedUnit.idx)
    console.log(neighbours)
    neighbours.forEach(n => {
      if (n === dest) {
        inRange = true
      }
    })
  }
  if (!inRange) {
    info.innerText = 'You cannot move cursor out of range'
    return
  }
  if (targets.length > 1) {
    unit = targets[1]
    valid = checkDestIsFree(dest)
    if (!valid) {
      checkDestOccupant(dest)
    }
    if (unit.actions < 1) {
      info.innerText = 'This unit has run out of actions'

      selectUnit()
      valid = false
    }
  }

  if (unit !== undefined && valid) {
    unit.actions -= 1
    champAction.innerText = `Actions: ${selectedUnit.actions}`
  }

  if (valid) {
    targets.forEach(target => {
      var newTarget
      if (target !== cursor) {
        newTarget = target.physObj
      } else {
        newTarget = target
      }
      // console.log(target)
      if (axis === 'x') {
        newTarget.x += val
      } else if (axis === 'y') {
        newTarget.y += val
      }
      if (unit) {
        unit.status.setPosition(newTarget.x, newTarget.y)
      }
      newTarget.setPosition(newTarget.x, newTarget.y)

      newTarget.setData('notMoving', false)
      setTimeout(() => {
        newTarget.setData('notMoving', true)
      }, 300)
      // console.log('target is:', target)
      setIndex(target)
    })
  }
}

function setIndex (target) {
  // console.log(target.x, target.y)
  let x
  let y
  if (target !== cursor) {
    x = target.physObj.x / 48
    y = (target.physObj.y / 48) * 19
  } else {
    x = cursor.x / 48
    y = (cursor.y / 48) * 19
  }
  if (x > 18) {
    x = 18
  } else if (x < 0) {
    x = 0
  }
  if (y > 304) {
    y = 304
  } else if (y < 0) {
    y = 0
  }
  if (target === cursor) {
    cursor.setData('idx', x + y)
  } else {
    champAction.innerText = `Actions: ${target.actions}`
    if (target.actions < 1) {
      target.status.setTexture('done')
      info.innerText = 'Unit has run out of actions'
      selectUnit()
    }
    map[target.idx].occupied = false
    map[target.idx].occupant = null
    map[target.idx].occupantTeam = null
    target.idx = x + y
    x = x * 48
    y = (y / 19) * 48
    target.x = x
    target.y = y
    map[target.idx].occupied = true
    map[target.idx].occupant = target.name
    map[target.idx].occupantTeam = target.teamName
  }
}

function checkTile () {
  let idx = cursor.getData('idx')
  // let derCoords = getCoordsFromIndex(idx)
  // console.log('cursor coords are', cursor.x, cursor.y)
  console.log('idx =', idx)
  // console.log('derCoords:', derCoords)
  // console.log('index of derCoords:', getIndexFromCoords(derCoords))
  // console.log(' ')
  let tile = map[idx]
  if (tile.occupied) {
    let teamIdx
    if (tile.occupantTeam === team1) {
      teamIdx = 0
    } else {
      teamIdx = 1
    }
    let occupant = actors[teamIdx].units.filter(unit => unit.name === tile.occupant)
    setDataWindow(occupant[0])
  } else {
    info.innerText = 'Tile is empty'
  }
}

function selectUnit (con) {
  // console.log('Active team is:', activeTeam)
  let idx = cursor.getData('idx')
  let team = actors.filter(team => team.name === activeTeam)
  let select = team[0].units.find(unit => unit.idx === idx)
  if (aMode) {
    attackMode()
  }
  if (targets.length > 1) { // unit already selected
    selectedUnit = null
    setDataWindow(selectedUnit)
    changeCursorColor(con)
    targets.splice(1, 1)
  } else if (select) { // no unit selected
    if (select.actions < 1) {
      info.innerText = 'This unit has no actions remaining'
      return
    }
    selectedUnit = select
    setDataWindow(selectedUnit)
    changeCursorColor(con)
    targets.push(select)
  } else {
    info.innerText = 'No unit of your team here'
  }
}

function attackMode () {
  if (selectedUnit && !aMode) {
    aMode = true
    cursor.setTexture('rcursor')
    targets.splice(1, 1)
  } else if (selectedUnit && aMode) {
    aMode = false
    cursor.setTexture('bcursor')
    cursor.setPosition(selectedUnit.x, selectedUnit.y)
    targets.push(selectedUnit)
    setIndex(cursor)
  }
}

function findNeighbours (idx) {
  let neighbours = []
  let attackerCoords = getCoordsFromIndex(idx)
  console.log(attackerCoords)
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
  return neighbours
}

function changeCursorColor (context) {
  let sprite
  if (cursor.getData('sprite') === 'gcursor') {
    sprite = 'bcursor'
  } else if (cursor.getData('sprite') === 'bcursor') {
    sprite = 'gcursor'
  }
  cursor.setData('sprite', sprite)
  cursor.setTexture(sprite)
}

function restoreActions () {
  let idx = getIdxOfActiveTeam()
  let units = actors[idx].units
  units.forEach(unit => {
    let unitType = unit.class
    let type = classes[unitType]
    unit.actions = type.actions
  })
}

function getIdxOfActiveTeam () {
  let idx
  if (activeTeam === team1) {
    idx = 0
  } else {
    idx = 1
  }
  return idx
}

function getIdxOfInactiveTeam () {
  let idx = getIdxOfActiveTeam()
  if (idx === 0) {
    idx = 1
  } else {
    idx = 0
  }
  return idx
}

function setStatus () {
  let aIdx = getIdxOfActiveTeam()
  let inaIdx = getIdxOfInactiveTeam()
  actors[aIdx].units.forEach(unit => {
    unit.status.destroy()
  })
  actors[inaIdx].units.forEach(unit => {
    if (unit.dead === false) {
      unit.status = scene.add.image(unit.x, unit.y, 'ready').setOrigin(0, 0)
    }
  })
}

function setDataWindow (target) {
  if (target) {
    champUnit.innerText = `${target.name}`
    champAttack.innerText = `Attack: ${target.damage}`
    champHealth.innerText = `Health: ${target.health}`
    champAction.innerText = `Actions: ${target.actions}`
    champPortrait.src = target.portrait
  } else {
    champUnit.innerText = 'None Selected'
    champAttack.innerText = 'Attack: ...'
    champHealth.innerText = 'Health: ...'
    champAction.innerText = 'Actions: ...'
    champPortrait.src = ''
  }
}

function endTurn () {
  let enemy = actors[getIdxOfInactiveTeam()].units.find(unit => unit.dead === false)
  cursor.setPosition(enemy.x, enemy.y)
  setIndex(cursor)
  restoreActions()
  setStatus()
  if (activeTeam === team1) {
    activeTeam = team2
  } else {
    activeTeam = team1
  }
  info.innerText = `It is now ${activeTeam}'s turn`
  champName.innerText = activeTeam
  let gameDiv = document.getElementById('gameDiv')
  gameDiv.classList.toggle('red-border')
}

function keyDown (e) {
  info.innerText = ''
  if (winner) {
    return
  }
  let key = e.key
  if (!keyPressed) {
    switch (key) {
      case 'e': // select
        selectUnit(this)
        break
      case 'z': // check tile contents in console
        checkTile()
        break
      case 'w': // up
        event.preventDefault()
        setfixedMovement(-48, 'y')
        break
      case 's': // down
        event.preventDefault()
        setfixedMovement(48, 'y')
        break
      case 'a': // left
        event.preventDefault()
        setfixedMovement(-48, 'x')
        break
      case 'd': // right
        event.preventDefault()
        setfixedMovement(48, 'x')
        break
      case 't': // end turn
        if (targets.length < 2) {
          endTurn()
        } else {
          info.innerText = 'Cannot end turn with unit selected'
        }
        break
      case 'c':
        changeCursorColor()
        break
      case 'm': // look at map array in console
        console.log(map)
        break
      case 'q': // enter attack mode
        attackMode()
        break
      case 'r': //  fire attack
        if (aMode) {
          attack(cursor.getData('idx'))
        }
        break
      case 'o':
        setTimeout(endGame(), 2000)
        scene.cameras.main.fade(2000, 76, 17, 30)
        break
      case 'n':
        console.log(actors)
        break
    }
  }
  keyPressed = true
  setTimeout(() => {
    keyPressed = false
  }, 20)
}

export { scene }
