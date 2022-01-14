import Game from "./Game.js";

class SubmitHero {
  heroSelected = "";
  monsterSelected = "";

  selectHero = (heroes, hero) => {
    heroes.forEach((elem) => {
      const { name } = elem;
      if (name === hero) {
        const heroActive = document.querySelector(`#${name}`);
        heroActive.classList.replace("inactive", "active");
        this.heroSelected = heroes.find((element) => element.name === hero);
      } else {
        const heroInactive = document.querySelector(`#${name}`);
        heroInactive.classList.replace("active", "inactive");
      }
    });
  };

  selectRandomMonster = (monsters) => {
    let isLoading = false;
    let heroFinal = this.heroSelected;

    this.heroSelected;
    if (!isLoading) {
      isLoading = true;
      setTimeout(() => {
        clearInterval(interval);

        let monster = this.giveRandomMonster(monsters);
        this.monsterSelected = monster;

        isLoading = false;
        console.log(this.monsterSelected);
        const game = new Game();
        game.lunchGame(this.monsterSelected, heroFinal);
      }, 1500);

      let interval = setInterval(() => {
        this.giveRandomMonster(monsters);
      }, 30);
    }
  };

  giveRandomMonster = (monsters) => {
    let randomNumber = Math.floor(Math.random() * monsters.length);
    const monster = monsters[randomNumber];

    monsters.forEach((elem, i) => {
      if (elem !== monster) {
        const monsterInactive = document.querySelector(`#${elem.name}`);
        monsterInactive.classList.replace("active", "inactive-monster");
      } else {
        const monsterActive = document.querySelector(`#${monster.name}`);
        monsterActive.classList.replace("inactive-monster", "active");
      }
    });

    return monster;
  };
}

export default SubmitHero;
