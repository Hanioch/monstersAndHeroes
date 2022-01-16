import StyleCard from "./StyleCards.js";
const styleCard = new StyleCard();
class Game {
  isInGame = false;
  monster;
  hero;

  lunchGame = (monster, hero) => {
    this.isInGame = true;
    this.monster = monster;
    this.hero = hero;

    const homeContent = document.querySelector(".content");
    setTimeout(() => {
      this.generateStyleGame();
      homeContent.classList.add("invisible");
    }, 1500);
    homeContent.classList.add("to-invisible");
    console.log("le jeux commence", monster, hero);
  };

  generateStyleGame = () => {
    const gameContent = document.querySelector("#game");
    gameContent.classList.add("to-visible");

    setTimeout(() => {
      gameContent.classList.add("visible");
      gameContent.classList.add("game");
      const characters = document.querySelector("#characters");
      const monster = styleCard.createCard(this.monster, "in-game");
      const hero = styleCard.createCard(this.hero, "in-game");
      characters.innerHTML = hero;
      characters.innerHTML += monster;
    }, 1000);
  };
}

export default Game;
