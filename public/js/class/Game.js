class Game {

  constructor() {

  }

  monsterSelection() {
    const monsters = document.querySelectorAll('#monsters .monster-card')
    const monsterRandom = Math.floor( Math.random() * monsters.length )
    monsters[monsterRandom].classList.add('is-selected')
  }

  gameInitiate(player1, player2) {

    console.log('player 1 is : ' + player1.name)
    console.log('player 2 is : ' + player2.name)
    
  }

}

export default Game