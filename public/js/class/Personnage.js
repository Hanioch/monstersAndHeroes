class Personnage {
    
    constructor(name, hp = 150, mana = 50, armor = 1, armorSpell = 10, atk = 5, atkSpell =  25, lvl = 1) {
        this.name = name
        this.hp = hp
        this.mana = mana
        this.armor = armor
        this.armorSpell = armorSpell
        this.atk = atk
        this.atkSpell = atkSpell
        this.lvl = lvl
    }
}

export default Personnage