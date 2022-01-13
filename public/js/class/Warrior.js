import Personnage from "./Personnage.js"

class Warrior extends Personnage {

    constructor(name, role = 'Warrior', hp, mana, armor, armorSpell, atk, atkSpell, lvl)
    {
        super(name, role, hp, mana, armor, armorSpell, atk, atkSpell, lvl)
    }

}

export default Warrior