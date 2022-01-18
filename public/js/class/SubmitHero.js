import Game from "./Game.js";

class SubmitHero {
  heroSelected = "";
  monsterSelected = "";
  isLoading = false;

  selectHero = (heroes, hero) => {
    heroes.forEach((elem) => {
      const { name } = elem;
      if (name === hero) {
        const heroActive = document.querySelector(`#${name}`);
        heroActive.classList.replace("inactive-hero", "active");
        // this.heroSelected = heroes.find((element) => element.name === hero);
        this.heroSelected = heroes.find((element) => element.name === hero);
      } else {
        const heroInactive = document.querySelector(`#${name}`);
        heroInactive.classList.replace("active", "inactive-hero");
      }
    });
  };

  selectRandomMonster = (monsters) => {
    this.isLoading = true;
    let heroFinal = this.heroSelected;

    setTimeout(() => {
      clearInterval(interval);

      let monster = this.giveRandomMonster(monsters);
      this.monsterSelected = monster;

      // this.isLoading = false;
      const game = new Game();
      game.lunchGame(this.monsterSelected, heroFinal);
    }, 1500);

    let interval = setInterval(() => {
      this.giveRandomMonster(monsters);
    }, 30);
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
