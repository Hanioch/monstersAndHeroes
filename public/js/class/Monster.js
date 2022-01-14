import Personnage from "./Personnage.js";

class Monster {
  constructor(levelHero) {
    this.levelHero = levelHero;
  }

  monsterSkills = [50, 10, 1, 1, 1, 1];
  initialSkillPoint = 100;
  skillPoint = this.initialSkillPoint;

  generateMonster = (name) => {
    this.monsterSkills = [50, 10, 1, 1, 1, 1];
    this.skillPoint = Math.floor(this.initialSkillPoint + this.levelHero * 1.2);
    this.generateStats();

    return new Personnage(
      name,
      "Monstre",
      ...this.monsterSkills,
      this.levelHero
    );
  };

  generateStats = () => {
    this.monsterSkills.forEach((elem, i) => {
      if (this.skillPoint > 0) {
        let rdmNumber = Math.floor(Math.random() * this.skillPoint + 1);
        this.monsterSkills[i] += rdmNumber;

        this.skillPoint = this.skillPoint - rdmNumber;
      }

      if (i === this.monsterSkills.length - 1 && this.skillPoint > 0) {
        this.generateStats();
      }
    });
  };
}

export default Monster;
