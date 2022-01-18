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

    // DISPLAY NONE MAIN SECTION (players selection).
    // COPY SELECTED HEROES CARDS AND INSERT INTO NEW HTML SECTION.

    // Attack test.
    player1.attackSpell(player2)
    player2.attack(player1)

    console.log(player1)
    console.log(player2)
    
  }

}

export default Game