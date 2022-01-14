class Game {
  isInGame = false;

  lunchGame = (monster, hero) => {
    this.isInGame = true;
    alert("le jeux commence");
  };
}

export default Game;
