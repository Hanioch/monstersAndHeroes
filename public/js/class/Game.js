class Game {

  constructor() {

  }

  monsterSelection() {
    const monsters = document.querySelectorAll('#monsters .monster-card')
    const monsterRandom = Math.floor(Math.random()*monsters.length)
    monsters[monsterRandom].classList.add('is-selected')
  }

}

export default Game