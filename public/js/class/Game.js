import StyleCard from "./StyleCards.js";
const styleCard = new StyleCard();
class Game {
  isInGame = false;
  monster;
  hero;
  hpHero;
  hpMonster;
  isHeroTour = true;

  lunchGame = (monster, hero) => {
    this.isInGame = true;
    this.monster = monster;
    this.hero = hero;

    const homeContent = document.querySelector(".content");
    setTimeout(() => {
      this.generateStyleGame();
      homeContent.classList.add("invisible");
    }, 1000);
    homeContent.classList.add("to-invisible");
  };

  generateStyleGame = () => {
    const gameContent = document.querySelector("#game");
    gameContent.classList.add("to-visible");

    gameContent.classList.add("visible");
    gameContent.classList.add("game");
    this.hpHero = this.hero.hp;
    this.hpMonster = this.monster.hp;
    const characters = document.querySelector("#characters");
    const divHero = styleCard.createCardForFight(
      this.hero,
      "hero",
      this.monster
    );
    const divMonster = styleCard.createCardForFight(
      this.monster,
      "monster",
      this.hero
    );
    characters.appendChild(divHero);
    characters.appendChild(divMonster);
  };

  doAtk = (typeATK, character, enemy) => {
    console.log("ddd");
    const btnAtk = document.querySelector("#button-atk-hero");
    const btnAtkSpe = document.querySelector("#button-atk-spe-hero");
    if (this.isHeroTour) {
      const hpEnemy = document.querySelector("#hp-monster");
      let hpEnemyNumber = parseInt(hpEnemy.innerHTML);
      const atkHero = typeATK === "atk" ? character.atk : character.atkSpell;
      const armorMonster = typeATK === "atk" ? enemy.armor : enemy.armorSpell;
      let calculDamage = Math.floor(atkHero - armorMonster / 2);
      hpEnemyNumber -= calculDamage <= 0 ? 1 : calculDamage;
      hpEnemy.innerHTML = hpEnemyNumber <= 0 ? 0 : hpEnemyNumber;
      console.log("hero: ", atkHero, armorMonster, calculDamage);
      btnAtk.setAttribute("disabled", true);
      btnAtkSpe.setAttribute("disabled", true);

      this.isHeroTour = !this.isHeroTour;
      if (hpEnemyNumber <= 0) {
        return this.gameFinished(character.name);
      }
      this.botMonster(enemy, character);
    } else {
      const hpEnemy = document.querySelector("#hp-hero");
      let hpEnemyNumber = parseInt(hpEnemy.innerHTML);
      const atkMonster = typeATK === "atk" ? character.atk : character.atkSpell;
      const armorHero = typeATK === "atk" ? enemy.armor : enemy.armorSpell;
      let calculDamage = Math.floor(atkMonster - armorHero / 2);
      hpEnemyNumber -= calculDamage <= 0 ? 1 : calculDamage;
      hpEnemy.innerHTML = hpEnemyNumber <= 0 ? 0 : hpEnemyNumber;
      console.log("Monstre: ", atkMonster, armorHero, calculDamage);

      if (hpEnemyNumber <= 0) {
        return this.gameFinished(character.name);
      }

      btnAtk.removeAttribute("disabled");
      btnAtkSpe.removeAttribute("disabled");
      this.isHeroTour = !this.isHeroTour;
    }
  };

  botMonster = (monster, hero) => {
    if (monster.atk > hero.armor) {
      console.log("on est bien la dnaas atk");
      return this.doAtk("atk", monster, hero);
    }
    if (monster.atkSpell > hero.armorSpell) {
      console.log("on est bien la dans atksepee");
      return this.doAtk("atkSpe", monster, hero);
    }
    const rdmNumber = Math.floor(Math.random() * 2);
    return this.doAtk(rdmNumber === 0 ? "atk" : "atkSpe", monster, hero);
  };

  gameFinished = (name) => {
    console.log("cv");
    const body = document.querySelector("body");

    const divFinished = document.createElement("div");
    divFinished.innerHTML = `${name} à gagné ! `;
    divFinished.classList.add("finished");
    divFinished.classList.add("to-visible");

    body.appendChild(divFinished);
  };
}

export default Game;
