import Personnage from "./Personnage.js"

class Magician extends Personnage {

    constructor(name, role = 'Magician', hp, mana, armor, armorSpell, atk, atkSpell, lvl)
    {
        super(name, role, hp, mana, armor, armorSpell, atk, atkSpell, lvl)
    }

}

export default Magician