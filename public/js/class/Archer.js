import Personnage from "./Personnage.js";

class Archer extends Personnage {

    constructor(name, role = 'Archer', hp, mana, armor, armorSpell, atk, atkSpell, lvl)
    {
        super(name, role, hp, mana, armor, armorSpell, atk, atkSpell, lvl)
    }
    
}

export default Archer