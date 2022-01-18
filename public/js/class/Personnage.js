class Personnage {
  constructor(name) {
    this.name = name;
    this.hp = 100;
    this.mana = 100;
    this.armor = 1;
    this.armorSpell = 10;
    this.atk = 5;
    this.atkSpell = 25;
    this.lvl = 1;
  }

  attack(target) {
    target.hp = target.hp + this.armor - this.atk
    this.mana = this.mana + 5
    console.log(this.name + ' attack ' + target.name + ' with ' + (this.atk - this.armor) + ' damage')
  }

  attackSpell(target) {
    target.hp = target.hp + this.armorSpell - this.atkSpell
    this.mana = this.mana - 25
    console.log(this.name + ' attack ' + target.name + ' with ' + (this.atk - this.armor) + ' damage')
  }

}

export default Personnage;
